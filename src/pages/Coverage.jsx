import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Package, Plane, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const COUNTRIES = [
  {
    name: 'Kenya',
    role: 'Regional Hub',
    description: 'Our primary operations hub serving international express courier, air and sea freight through Nairobi and Mombasa gateways.',
    gateways: ['Nairobi', 'Mombasa'],
    services: ['Express Courier', 'Air Freight', 'Sea Freight', 'NGO Logistics'],
    isHub: true,
  },
  {
    name: 'Uganda',
    role: 'Active Coverage',
    description: 'Inbound and outbound cargo movements for Ugandan businesses and NGOs through reliable cross-border and international freight.',
    gateways: ['Kampala', 'Entebbe'],
    services: ['Express Courier', 'Air Freight', 'Cross-border Freight'],
    isHub: false,
  },
  {
    name: 'Tanzania',
    role: 'Active Coverage',
    description: 'Air and sea freight connectivity for exporters, importers, and development organizations through Dar es Salaam.',
    gateways: ['Dar es Salaam', 'Zanzibar'],
    services: ['Express Courier', 'Air Freight', 'Sea Freight'],
    isHub: false,
  },
  {
    name: 'Rwanda',
    role: 'Active Coverage',
    description: 'Coordinated logistics for landlocked markets with smooth transit, customs coordination, and timely delivery.',
    gateways: ['Kigali'],
    services: ['Express Courier', 'Cross-border Freight', 'NGO Logistics'],
    isHub: false,
  },
  {
    name: 'Burundi',
    role: 'Active Coverage',
    description: 'Reliable freight solutions ensuring smooth transit and customs coordination into this key landlocked market.',
    gateways: ['Bujumbura'],
    services: ['Express Courier', 'Cross-border Freight'],
    isHub: false,
  },
]

const GLOBAL_REGIONS = [
  { region: 'Europe', destinations: ['UK', 'Germany', 'France', 'Netherlands', 'Belgium'] },
  { region: 'North America', destinations: ['USA', 'Canada'] },
  { region: 'Asia Pacific', destinations: ['China', 'India', 'Singapore', 'UAE', 'Japan'] },
  { region: 'Middle East', destinations: ['Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
  { region: 'West Africa', destinations: ['Nigeria', 'Ghana', 'Senegal'] },
  { region: 'South Asia', destinations: ['Pakistan', 'Bangladesh', 'Sri Lanka'] },
]

const SERVICES_OFFERED = [
  { icon: Package, label: 'Express Courier' },
  { icon: Plane, label: 'Air Freight' },
  { icon: Ship, label: 'Sea Freight' },
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
              Regional Coverage
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              East Africa Connected to{' '}
              <span className="text-orange-500">the World</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Deep operational presence across East Africa with global partner
              networks ensuring your cargo moves seamlessly to any destination.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {SERVICES_OFFERED.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-full"
                >
                  <Icon size={14} className="text-orange-400" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* East Africa Coverage */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              East African Operations
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl">
              Active operations across five East African countries with Kenya
              serving as our primary regional logistics hub.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COUNTRIES.map((country, i) => (
              <motion.div
                key={country.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative bg-white/5 border rounded-2xl p-6 transition-all duration-300
                  ${country.isHub
                    ? 'border-orange-500/40 bg-orange-500/5'
                    : 'border-white/10 hover:border-orange-500/20'
                  }`}
              >
                {country.isHub && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    Hub
                  </span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <MapPin size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{country.name}</h3>
                    <p className="text-orange-400 text-xs">{country.role}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {country.description}
                </p>

                <div className="mb-4">
                  <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Gateways</p>
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
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {country.services.map((service) => (
                      <span
                        key={service}
                        className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-gray-900 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Global Network
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Worldwide Reach
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl">
              Through our trusted international carrier and agent partnerships,
              we connect East Africa to major markets worldwide.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GLOBAL_REGIONS.map((item, i) => (
              <motion.div
                key={item.region}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 hover:border-orange-500/20 rounded-xl p-5 transition-all duration-300"
              >
                <h3 className="text-white font-semibold text-sm mb-3">
                  {item.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.destinations.map((dest) => (
                    <span
                      key={dest}
                      className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-950 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need cargo moved to a{' '}
              <span className="text-orange-500">specific destination?</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
              Contact our team and we will confirm coverage and provide a
              competitive quote for your route.
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

export default Coverage
