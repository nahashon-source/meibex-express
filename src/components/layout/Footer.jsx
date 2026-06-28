import {
  Package,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  Globe,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES_LINKS = [
  { label: "International Express Courier", path: "/services/courier" },
  { label: "Air Freight Solutions", path: "/services/air-freight" },
  { label: "Sea Freight Solutions", path: "/services/sea-freight" },
  { label: "NGO & Humanitarian Logistics", path: "/services/ngo" },
];

const COMPANY_LINKS = [
  { label: "About Us", path: "/about" },
  { label: "Industries", path: "/industries" },
  { label: "Coverage", path: "/coverage" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms" },
];

const COVERAGE_LINKS = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Burundi",
];

const SOCIAL_LINKS = [
  {
    icon: Globe,
    href: "https://meibexexpress.com",
    label: "Website",
  },
  {
    icon: Share2,
    href: "#",
    label: "Social",
  },
  {
    icon: Mail,
    href: "mailto:info@meibexexpress.com",
    label: "Email",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <Package className="text-orange-500" size={26} />
              <span className="text-lg font-bold text-white">
                Meibex <span className="text-orange-500">Express</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Reliable Logistics. Seamless Global Reach. Powering trade across
              East Africa and beyond.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@meibexexpress.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                <Mail size={14} className="text-orange-500" />
                info@meibexexpress.com
              </a>

              <a
                href="tel:+254700000000"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                <Phone size={14} className="text-orange-500" />
                +254 700 000 000
              </a>

              <div className="inline-flex items-start gap-2 text-gray-400 text-sm">
                <MapPin
                  size={14}
                  className="text-orange-500 mt-0.5 flex-shrink-0"
                />
                Westlands, Nairobi, Kenya
              </div>

              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <Clock size={14} className="text-orange-500" />
                Mon – Fri: 8:00 AM – 5:00 PM
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Services
            </h4>

            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Company
            </h4>

            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Coverage
            </h4>

            <ul className="flex flex-col gap-3">
              {COVERAGE_LINKS.map((country) => (
                <li key={country}>
                  <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {country}
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200 mt-6"
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Meibex Express Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Reliable Logistics. Seamless Global Reach.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;