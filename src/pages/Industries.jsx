import { motion } from 'framer-motion'
import { Building2, Store, ShoppingCart, Factory, Pill, Sprout, HeartHandshake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const INDUSTRIES = [
  {
    icon: Building2,
    title: 'Corporate & Multinationals',
    description: 'End-to-end logistics solutions for large organizations with complex supply chain requirements across multiple regions.',
    needs: ['Multi-destination shipping', 'Priority handling', 'Dedicated account management', 'Customs coordination'],
  },
  {
    icon: Store,
    title: 'SMEs & Regional Traders',
    description: 'Flexible and cost-competitive freight options built for small and medium businesses trading across East Africa.',
    needs: ['Affordable rates', 'LCL consolidation', 'Cross-border support', 'Flexible scheduling'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    description: 'Fast, reliable last-mile and international delivery solutions for online retailers and distribution businesses.',
    needs: ['Express delivery options', 'Returns handling', 'Order tracking', 'High volume capacity'],
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industrial',
    description: 'Heavy cargo, project freight, and supply chain solutions for manufacturers and industrial project operators.',
    needs: ['Heavy cargo handling', 'Project freight', 'FCL solutions', 'Port-to-door delivery'],
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals & Healthcare',
    description: 'Temperature-controlled and compliant logistics for medical supplies, pharmaceuticals, and healthcare equipment.',
    needs: ['Cold chain logistics', 'Regulatory compliance', 'Secure handling', 'Priority air freight'],
  },
  {
    icon: Sprout,
    title: 'Agriculture & Perishables',
    description: 'Time-critical cold chain and air freight solutions for fresh produce, flowers, and agricultural exports.',
    needs: ['Cold chain handling', 'Urgent air freight', 'Export documentation', 'Perishables expertise'],
  },
  {
    icon: HeartHandshake,
    title: 'NGOs & Development Agencies',
    description: 'Humanitarian and project cargo logistics with compliance, accountability, and remote destination support.',
    needs: ['Donor compliance', 'Remote delivery', 'Medical supplies', 'Project cargo coordination'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
}

function Industries() {
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
              Industries We Serve
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Logistics Solutions for{' '}
              <span className="text-orange-500">Every Sector</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We understand that every industry has unique logistics demands.
              Our solutions are tailored to meet the specific needs of the
              sectors we serve across East Africa and global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-2xl p-6 flex flex-col transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {industry.description}
                  </p>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {industry.needs.map((need) => (
                      <li key={need} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                        {need}
                      </li>
                    ))}
                  </ul>
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
              className="bg-orange-500 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white font-bold text-lg mb-3">
                  Not sure which solution fits your business?
                </h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Our logistics experts will assess your needs and design
                  a tailored solution for your industry.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-sm px-5 py-3 rounded-lg mt-8 hover:bg-orange-50 transition-colors duration-200"
              >
                Speak to an Expert <ArrowRight size={14} />
              </Link>
            </motion.div>
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
              Ready to streamline your{' '}
              <span className="text-orange-500">supply chain?</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
              Partner with Meibex Express Ltd for logistics solutions built
              for the realities of East Africa and global trade.
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

export default Industries
