import nodemailer from "nodemailer";

const MAX_FIELD_LENGTH = 2000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const REQUIRED_ENV = ["ZOHO_SMTP_USER", "ZOHO_SMTP_PASS"];

// Best-effort only: memory is per serverless instance and resets on cold start.
const requestLog = new Map();

const reply = (res, status, success, message, data = null) =>
  res.status(status).json({ success, message, data });

const clean = (value) =>
  String(value ?? "")
    .trim()
    .slice(0, MAX_FIELD_LENGTH);

// Prevents header injection through fields used in subject / reply-to
const singleLine = (value) => clean(value).replace(/[\r\n]+/g, " ");

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
};

const validate = (fields) => {
  if (!fields.fullName) return "Full name is required.";
  if (!EMAIL_PATTERN.test(fields.email)) return "Enter a valid email.";
  if (!fields.service) return "Please select a service.";
  if (!fields.origin) return "Origin is required.";
  if (!fields.destination) return "Destination is required.";
  return null;
};

const buildEmailBody = (fields) => {
  const rows = [
    ["Name", fields.fullName],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Company", fields.company],
    ["Service", fields.service],
    ["Origin", fields.origin],
    ["Destination", fields.destination],
    ["Weight / Volume", fields.weight],
    ["Timeline", fields.timeline],
    ["Cargo description", fields.cargoDescription],
    ["Additional notes", fields.message],
  ].filter(([, value]) => value);

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table>`;

  return { text, html };
};

const buildConfirmationBody = (fields) => {
  const summary = `${fields.service}: ${fields.origin} to ${fields.destination}`;
  const text = [
    `Hello ${fields.fullName},`,
    "",
    "Thank you for contacting Meibex Express. We have received your quote request and our logistics team will respond within one business day.",
    "",
    `Your request: ${summary}`,
    "",
    "If anything is urgent, reply to this email or contact us on WhatsApp.",
    "",
    "Meibex Express",
  ].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5">
<p>Hello ${escapeHtml(fields.fullName)},</p>
<p>Thank you for contacting Meibex Express. We have received your quote request and our logistics team will respond within one business day.</p>
<p><strong>Your request:</strong> ${escapeHtml(summary)}</p>
<p>If anything is urgent, reply to this email or contact us on WhatsApp.</p>
<p>Meibex Express</p></div>`;

  return { text, html };
};

const createTransport = () =>
  nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
    port: Number(process.env.ZOHO_SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return reply(res, 405, false, "Method not allowed.");
  }

  const missingEnv = REQUIRED_ENV.filter((name) => !process.env[name]);
  if (missingEnv.length > 0) {
    console.error("[contact] Missing environment variables:", missingEnv);
    return reply(res, 500, false, "Email service is not configured.");
  }

  const ip = String(req.headers["x-forwarded-for"] ?? "unknown")
    .split(",")[0]
    .trim();
  if (isRateLimited(ip)) {
    console.warn("[contact] Rate limited:", ip);
    return reply(res, 429, false, "Too many requests. Please try again later.");
  }

  const body = req.body ?? {};

  // Honeypot filled => bot. Pretend success so it does not retry.
  if (clean(body.website)) {
    console.warn("[contact] Honeypot triggered:", ip);
    return reply(res, 200, true, "Quote request sent.");
  }

  const fields = {
    fullName: singleLine(body.fullName),
    email: singleLine(body.email),
    phone: singleLine(body.phone),
    company: singleLine(body.company),
    service: singleLine(body.service),
    origin: singleLine(body.origin),
    destination: singleLine(body.destination),
    weight: singleLine(body.weight),
    timeline: singleLine(body.timeline),
    cargoDescription: clean(body.cargoDescription),
    message: clean(body.message),
  };

  const validationError = validate(fields);
  if (validationError) {
    return reply(res, 400, false, validationError);
  }

  const recipient = process.env.CONTACT_TO_EMAIL || process.env.ZOHO_SMTP_USER;
  const { text, html } = buildEmailBody(fields);

  console.log("[contact] Sending quote request", {
    service: fields.service,
    origin: fields.origin,
    destination: fields.destination,
  });

  const transporter = createTransport();

  try {
    await transporter.sendMail({
      from: `"Meibex Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: recipient,
      replyTo: `"${fields.fullName.replace(/"/g, "")}" <${fields.email}>`,
      subject: `New quote request: ${fields.service} (${fields.origin} to ${fields.destination})`,
      text,
      html,
    });
  } catch (error) {
    console.error("[contact] SMTP send failed:", error);
    return reply(
      res,
      502,
      false,
      "We could not send your request. Please try again shortly.",
    );
  }

  // The sales team already has the request at this point, so a failed
  // confirmation must not turn the customer's submission into an error.
  try {
    const confirmation = buildConfirmationBody(fields);
    await transporter.sendMail({
      from: `"Meibex Express" <${process.env.ZOHO_SMTP_USER}>`,
      to: fields.email,
      subject: "We received your quote request - Meibex Express",
      text: confirmation.text,
      html: confirmation.html,
    });
  } catch (error) {
    console.error("[contact] Customer confirmation failed:", error);
  }

  return reply(res, 200, true, "Quote request sent.");
}