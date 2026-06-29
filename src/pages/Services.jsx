import { motion } from 'framer-motion'
import { Package, Plane, Ship, HeartHandshake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'

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
    link: '/services/courier',
    color: 'orange',
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
    link: '/services/air-freight',
    color: 'blue',
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
    link: '/services/sea-freight',
    color: 'teal',
  },
  {
    icon: HeartHandshake,
    title: 'NGO & Humanitarian Logistics',
    description:
      'Reliable logistics solutions tailored for NGOs, UN agencies, and development organizations with compliance, accountability, and remote destination support.',
    features: [
      'Time-critical shipment handling',
      'Medical supplies logistics',
      'Project cargo coordination',
      'Remote destination support',
      'Donor compliance',
    ],
    link: '/services/ngo',
    color: 'green',
  },
]

const COLOR_MAP = {
  orange: {
    icon: 'bg-orange-500/10 text-orange-400',
    border: 'hover:border-orange-500/30',
    dot: 'bg-orange-400',
  },
  blue: {
    icon: 'bg-blue-500/10 text-blue-400',
    border: 'hover:border-blue-500/30',
    dot: 'bg-blue-400',
  },
  teal: {
    icon: 'bg-teal-500/10 text-teal-400',
    border: 'hover:border-teal-500/30',
    dot: 'bg-teal-400',
  },
  green: {
    icon: 'bg-green-500/10 text-green-400',
    border: 'hover:border-green-500/30',
    dot: 'bg-green-400',
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
}

function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              One Partner.{' '}
              <span className="text-orange-500">Multiple Solutions.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Express courier, air freight, sea freight, and humanitarian
              logistics under one roof — designed for businesses that demand
              reliability and speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
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
                  className={`bg-white/5 border border-white/10 ${colors.border} rounded-2xl p-6 flex flex-col transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.icon}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors mt-auto"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
              Our logistics experts will assess your shipment requirements and
              recommend the best solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </Layout>
  )
}

export default Services