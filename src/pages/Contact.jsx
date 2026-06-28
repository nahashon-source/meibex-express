import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react'
import Layout from '../components/layout/Layout'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@meibexexpress.com',
    href: 'mailto:info@meibexexpress.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+254 700 000 000',
    href: 'tel:+254700000000',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Westlands, Nairobi, Kenya',
    href: null,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Fri: 8:00 AM - 5:00 PM',
    href: null,
  },
]

const SERVICE_OPTIONS = [
  'International Express Courier',
  'Air Freight',
  'Sea Freight',
  'NGO & Humanitarian Logistics',
  'Other',
]

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  origin: '',
  destination: '',
  cargoDescription: '',
  weight: '',
  timeline: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!form.fullName.trim()) return 'Full name is required.'
    if (!form.email.trim()) return 'Email is required.'
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) return 'Enter a valid email.'
    if (!form.service) return 'Please select a service.'
    if (!form.origin.trim()) return 'Origin is required.'
    if (!form.destination.trim()) return 'Destination is required.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)

    // Simulate API call — replace with real endpoint later
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gray-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Request a{' '}
              <span className="text-orange-500">Shipment Quote</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Share your cargo details and our logistics experts will respond
              promptly with a tailored solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1 flex flex-col gap-6"
            >
              <div>
                <h2 className="text-white font-bold text-xl mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reach out directly or fill in the quote form and we will
                  get back to you within one business day.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white text-sm font-medium hover:text-orange-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                <Phone size={16} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Right — Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-6">
                  Shipment Quote Request
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <Send size={24} className="text-green-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      Quote Request Sent!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm">
                      Thank you. Our logistics team will review your request
                      and respond within one business day.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Error */}
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg">
                        {error}
                      </div>
                    )}

                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Email Address <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+254 700 000 000"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                        Service Required <span className="text-orange-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors"
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Row 3 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Origin <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="origin"
                          value={form.origin}
                          onChange={handleChange}
                          placeholder="City, Country"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Destination <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="City, Country"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Cargo Weight / Volume
                        </label>
                        <input
                          type="text"
                          name="weight"
                          value={form.weight}
                          onChange={handleChange}
                          placeholder="e.g. 500kg / 2 CBM"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                          Required Timeline
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          placeholder="e.g. Within 3 days"
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                    </div>

                    {/* Cargo Description */}
                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                        Cargo Description
                      </label>
                      <textarea
                        name="cargoDescription"
                        value={form.cargoDescription}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Describe your cargo, special handling requirements, etc."
                        className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600 resize-none"
                      />
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                        Additional Notes
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any other information you would like to share..."
                        className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Quote Request
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
