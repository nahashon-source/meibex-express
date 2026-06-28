import { motion } from 'framer-motion'
import { Package, ArrowRight, Clock, Globe, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

const FEATURES = [
  { icon: Clock, title: 'Time-Definite Delivery', description: 'Express and economy options to balance urgency, budget, and destination requirements.' },
  { icon: Globe, title: 'Global Partner Network', description: 'Reliable movement to major international destinations through trusted carrier partnerships.' },
  { icon: ShieldCheck, title: 'Secure Handling', description: 'Full accountability from collection to final delivery with proof-of-delivery support.' },
  { icon: Truck, title: 'Pickup Scheduling', description: 'Convenient dispatch from offices, warehouses, retail locations, and project sites.' },
]

const IDEAL_FOR = [
  'Urgent business documents',
  'Commercial parcels and samples',
  'E-commerce orders',
  'Tender documents',
  'Personal shipments',
  'Medical supplies',
]

function CourierService() {
  return (
    <Layout>
      <section className="bg-gray-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              International <span className="text-orange-500">Express Courier</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Door-to-door delivery of documents and parcels to international
              destinations, supported by strong carrier partnerships and
              proactive customer service.
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
              <h2 className="text-2xl font-bold text-white mb-6">Service Features</h2>
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
              <h2 className="text-2xl font-bold text-white mb-6">Ideal For</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                <ul className="flex flex-col gap-3">
                  {IDEAL_FOR.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-2">Ready to ship?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Share your shipment details and we will provide a competitive
                  quote within one business day.
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

export default CourierService
