import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 sm:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-800/30 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Move Your Cargo?
              </h2>
              <p className="text-orange-100 text-lg leading-relaxed mb-6">
                Partner with Meibex Express Ltd for logistics solutions that are
                reliable, commercially competitive, and built for the realities
                of East Africa.
              </p>

              {/* Contact Options */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors duration-200"
                >
                  <Phone size={15} />
                  Call Us
                </a>
                <a
                  href="mailto:info@meibexexpress.com"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors duration-200"
                >
                  <Mail size={15} />
                  Email Us
                </a>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-base"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-base"
              >
                View Services
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA