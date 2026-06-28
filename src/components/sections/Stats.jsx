import { motion } from 'framer-motion'
import { TrendingUp, Globe, Clock, ShieldCheck, Users, Handshake } from 'lucide-react'

const STATS = [
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served',
    description: 'Global reach through trusted carrier partnerships',
  },
  {
    icon: TrendingUp,
    value: '10K+',
    label: 'Shipments Delivered',
    description: 'Successfully completed across all service lines',
  },
  {
    icon: Clock,
    value: '98%',
    label: 'On-Time Delivery',
    description: 'Consistent performance across all corridors',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Active Clients',
    description: 'Corporates, SMEs, NGOs and individual shippers',
  },
  {
    icon: ShieldCheck,
    value: '5+',
    label: 'Years Experience',
    description: 'Deep East African market expertise',
  },
  {
    icon: Handshake,
    value: '30+',
    label: 'Global Partners',
    description: 'International carriers and agent network',
  },
]

const TRUST_BADGES = [
  'Customs Compliant',
  'End-to-End Visibility',
  'Secure Handling',
  'Proof of Delivery',
  'Dedicated Support',
  'Competitive Pricing',
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
}

function Stats() {
  return (
    <section className="bg-gray-900 py-24 border-t border-white/5">
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
            Why Meibex Express
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Numbers That{' '}
            <span className="text-orange-500">Build Trust</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Every shipment is a commitment
            to reliability, speed, and accountability.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {STATS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 hover:border-orange-500/20 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-orange-400 font-semibold text-sm mb-1">
                      {stat.label}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 rounded-2xl p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-shrink-0">
              <h3 className="text-white font-bold text-lg mb-1">
                Our Commitment to You
              </h3>
              <p className="text-gray-400 text-sm">
                Every shipment. Every time.
              </p>
            </div>

            <div className="w-px h-12 bg-white/10 hidden lg:block" />

            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-full"
                >
                  <ShieldCheck size={13} className="text-orange-400" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Stats