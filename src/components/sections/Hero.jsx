import { motion } from 'framer-motion'
import { ArrowRight, Package, Plane, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'

const STATS = [
  { value: '50+', label: 'Countries Served' },
  { value: '10K+', label: 'Shipments Delivered' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'On-Time Delivery' },
]

const SERVICES_PREVIEW = [
  { icon: Package, label: 'Express Courier' },
  { icon: Plane, label: 'Air Freight' },
  { icon: Ship, label: 'Sea Freight' },
]

function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-950 flex items-center overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              East Africa's Trusted Logistics Partner
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Reliable Logistics.{' '}
              <span className="text-orange-500">Seamless</span>{' '}
              Global Reach.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              From express courier to complex freight solutions — we move your
              cargo across East Africa and global markets with speed, precision,
              and accountability.
            </motion.p>

            {/* Service Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {SERVICES_PREVIEW.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-full"
                >
                  <Icon size={14} className="text-orange-400" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-orange-500/50 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Right — Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-widest">
                Trusted by businesses across East Africa
              </p>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-5">
                    <p className="text-3xl font-bold text-orange-500 mb-1">{value}</p>
                    <p className="text-gray-400 text-sm">{label}</p>
                  </div>
                ))}
              </div>

              {/* Decorative bottom */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <p className="text-gray-400 text-sm">
                  Operations active across Kenya, Uganda, Tanzania, Rwanda & Burundi
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero