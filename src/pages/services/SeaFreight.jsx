import { motion } from 'framer-motion'
import { Ship, ArrowRight, Container, FileCheck, Globe, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

const FEATURES = [
  { icon: Container, title: 'FCL & LCL Options', description: 'Full Container Load and Less than Container Load options to match your cargo volume and budget.' },
  { icon: Globe, title: 'Major Trade Lanes', description: 'Coverage across all major global trade lanes with reliable port-to-port and door-to-door solutions.' },
  { icon: Package, title: 'Cargo Consolidation', description: 'Cost-effective consolidation and deconsolidation services for smaller shipments.' },
  { icon: FileCheck, title: 'Customs Clearance', description: 'Complete customs documentation and clearance coordination at origin and destination.' },
]

const SERVICES = [
  'Full Container Load (FCL)',
  'Less than Container Load (LCL)',
  'Import and export handling',
  'Port-to-port solutions',
  'Door-to-door solutions',
  'Cargo consolidation',
  'Deconsolidation services',
  'Customs clearance coordination',
]

function SeaFreight() {
  return (
    <Layout>
      <section className="bg-gray-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Sea Freight <span className="text-orange-500">Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cost-effective and dependable shipping for large volumes, heavy
              cargo, and non-urgent consignments across major global trade lanes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 mt-8"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Capabilities</h2>
              <div className="flex flex-col gap-5">
                {FEATURES.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
                    >
                      <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Services Included</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                <ul className="flex flex-col gap-3">
                  {SERVICES.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-2">Planning a sea shipment?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Share your cargo details and route and we will provide
                  competitive FCL and LCL pricing options.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SeaFreight
