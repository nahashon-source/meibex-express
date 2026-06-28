import { motion } from 'framer-motion'
import { Package, Plane, Ship, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: Package,
    title: 'International Express Courier',
    description:
      'Door-to-door delivery of documents and parcels to international destinations. Time-definite options for urgent business shipments, e-commerce orders, and critical deliveries.',
    features: [
      'Door-to-door international delivery',
      'Express and economy options',
      'End-to-end shipment visibility',
      'Customs documentation guidance',
      'Pickup scheduling',
    ],
    color: 'orange',
    link: '/services/courier',
  },
  {
    icon: Plane,
    title: 'Air Freight Solutions',
    description:
      'Comprehensive air freight for exports and imports where speed, reliability, and cargo integrity are critical. Handling general cargo, perishables, and high-value shipments.',
    features: [
      'Export and import air freight',
      'General and perishable cargo',
      'Temperature-sensitive handling',
      'Consolidation and direct services',
      'Customs clearance coordination',
    ],
    color: 'blue',
    link: '/services/air-freight',
  },
  {
    icon: Ship,
    title: 'Sea Freight Solutions',
    description:
      'Cost-effective and dependable shipping for large volumes, heavy cargo, and non-urgent consignments across major global trade lanes.',
    features: [
      'Full Container Load (FCL)',
      'Less than Container Load (LCL)',
      'Import and export handling',
      'Port-to-port and door-to-door',
      'Cargo consolidation',
    ],
    color: 'teal',
    link: '/services/sea-freight',
  },
]

const COLOR_MAP = {
  orange: {
    icon: 'bg-orange-500/10 text-orange-500',
    border: 'hover:border-orange-500/40',
    badge: 'bg-orange-500/10 text-orange-400',
    dot: 'bg-orange-400',
  },
  blue: {
    icon: 'bg-blue-500/10 text-blue-400',
    border: 'hover:border-blue-500/40',
    badge: 'bg-blue-500/10 text-blue-400',
    dot: 'bg-blue-400',
  },
  teal: {
    icon: 'bg-teal-500/10 text-teal-400',
    border: 'hover:border-teal-500/40',
    badge: 'bg-teal-500/10 text-teal-400',
    dot: 'bg-teal-400',
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

function Services() {
  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            One Partner.{' '}
            <span className="text-orange-500">Multiple Solutions.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Express courier, air freight, and sea freight under one roof —
            designed for businesses that demand reliability and speed.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const colors = COLOR_MAP[service.color]

            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-white/5 border border-white/10 ${colors.border} rounded-2xl p-6 flex flex-col transition-colors duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.icon}`}>
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors mt-auto"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Get a Quote Today <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Services