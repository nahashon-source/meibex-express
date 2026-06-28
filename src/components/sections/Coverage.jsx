import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const COUNTRIES = [
  {
    name: 'Kenya',
    role: 'Regional Hub',
    description:
      'Our primary operations hub serving international express courier, air and sea freight through Nairobi and Mombasa gateways.',
    gateways: ['Nairobi', 'Mombasa'],
    isHub: true,
  },
  {
    name: 'Uganda',
    role: 'Active Coverage',
    description:
      'Inbound and outbound cargo movements for Ugandan businesses and NGOs through reliable cross-border and international freight.',
    gateways: ['Kampala', 'Entebbe'],
    isHub: false,
  },
  {
    name: 'Tanzania',
    role: 'Active Coverage',
    description:
      'Air and sea freight connectivity for exporters, importers, and development organizations through Dar es Salaam.',
    gateways: ['Dar es Salaam', 'Zanzibar'],
    isHub: false,
  },
  {
    name: 'Rwanda',
    role: 'Active Coverage',
    description:
      'Coordinated logistics for landlocked markets with smooth transit, customs coordination, and timely delivery.',
    gateways: ['Kigali'],
    isHub: false,
  },
  {
    name: 'Burundi',
    role: 'Active Coverage',
    description:
      'Reliable freight solutions ensuring smooth transit and customs coordination into this key landlocked market.',
    gateways: ['Bujumbura'],
    isHub: false,
  },
]

const GLOBAL_REACH = [
  'Europe', 'North America', 'Asia Pacific',
  'Middle East', 'South Asia', 'West Africa',
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
}

function Coverage() {
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
            Regional Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            East Africa Connected to{' '}
            <span className="text-orange-500">the World</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep operational presence across East Africa with global partner
            networks ensuring your cargo moves seamlessly to any destination.
          </p>
        </motion.div>

        {/* Country Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative bg-white/5 border rounded-xl p-6 transition-all duration-300
                ${country.isHub
                  ? 'border-orange-500/40 bg-orange-500/5'
                  : 'border-white/10 hover:border-orange-500/20'
                }`}
            >
              {/* Hub Badge */}
              {country.isHub && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  Hub
                </span>
              )}

              {/* Icon + Country */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">
                    {country.name}
                  </h3>
                  <p className="text-orange-400 text-xs">{country.role}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {country.description}
              </p>

              {/* Gateways */}
              <div className="flex flex-wrap gap-2">
                {country.gateways.map((gateway) => (
                  <span
                    key={gateway}
                    className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {gateway}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Reach Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Global Reach Beyond East Africa
              </h3>
              <p className="text-gray-400 text-sm max-w-xl">
                Through our trusted international carrier and agent partnerships,
                we move cargo to and from major markets worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {GLOBAL_REACH.map((region) => (
                <span
                  key={region}
                  className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-gray-400 text-sm">
                Active operations across 5 East African countries
              </p>
            </div>
            <Link
              to="/coverage"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            >
              View Full Coverage <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Coverage