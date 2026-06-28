import { motion } from 'framer-motion'
import {
  Building2,
  Store,
  ShoppingCart,
  Factory,
  Pill,
  Sprout,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'

const INDUSTRIES = [
  {
    icon: Building2,
    title: 'Corporate & Multinationals',
    description:
      'End-to-end logistics solutions for large organizations with complex supply chain requirements across multiple regions.',
  },
  {
    icon: Store,
    title: 'SMEs & Regional Traders',
    description:
      'Flexible and cost-competitive freight options built for small and medium businesses trading across East Africa.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    description:
      'Fast, reliable last-mile and international delivery solutions for online retailers and distribution businesses.',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industrial',
    description:
      'Heavy cargo, project freight, and supply chain solutions for manufacturers and industrial project operators.',
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals & Healthcare',
    description:
      'Temperature-controlled and compliant logistics for medical supplies, pharmaceuticals, and healthcare equipment.',
  },
  {
    icon: Sprout,
    title: 'Agriculture & Perishables',
    description:
      'Time-critical cold chain and air freight solutions for fresh produce, flowers, and agricultural exports.',
  },
  {
    icon: HeartHandshake,
    title: 'NGOs & Development Agencies',
    description:
      'Humanitarian and project cargo logistics with compliance, accountability, and remote destination support.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
}

function Industries() {
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
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Logistics Solutions for{' '}
            <span className="text-orange-500">Every Sector</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We understand that every industry has unique logistics demands.
            Our solutions are tailored to meet the specific needs of each sector
            we serve.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-orange-500/30 rounded-xl p-5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Icon size={20} className="text-orange-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}

          {/* CTA Card */}
          <motion.div
            custom={INDUSTRIES.length}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-orange-500 rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-bold text-base mb-2">
                Don't see your industry?
              </h3>
              <p className="text-orange-100 text-xs leading-relaxed">
                We tailor logistics solutions for any sector. Talk to our
                experts today.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-1 text-white font-semibold text-sm mt-6 hover:gap-2 transition-all duration-200"
            >
              Speak to an Expert <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Industries