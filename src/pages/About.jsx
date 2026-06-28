import { motion } from 'framer-motion'
import { Target, Eye, ShieldCheck, Users, Globe, TrendingUp } from 'lucide-react'
import Layout from '../components/layout/Layout'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description: 'Every shipment is handled with the highest standard of care and accountability from collection to final delivery.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We build lasting partnerships by understanding each clients unique logistics needs and delivering tailored solutions.',
  },
  {
    icon: Globe,
    title: 'Global Connectivity',
    description: 'Our international carrier network ensures your cargo reaches any destination with the same level of service excellence.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We invest in people, processes, and technology to continually raise the bar on service quality and customer experience.',
  },
]

const STATS = [
  { value: '50+', label: 'Countries Served' },
  { value: '10K+', label: 'Shipments Delivered' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'On-Time Delivery' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
}

function About() {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Built for{' '}
              <span className="text-orange-500">East Africa.</span>{' '}
              Connected to the World.
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meibex Express Ltd combines regional market knowledge with global
              best practices to deliver dependable logistics solutions that
              support trade, competitiveness, and supply chain resilience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <div className="flex flex-col gap-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Meibex Express Ltd is a trusted logistics and supply chain
                  partner providing reliable, cost-effective, and time-critical
                  transportation solutions across East Africa and global markets.
                </p>
                <p>
                  We specialize in express courier, air freight, and sea freight
                  solutions tailored to meet the evolving needs of businesses
                  and individuals. With a strong regional footprint and a global
                  partner network, we ensure your shipments move efficiently,
                  securely, and on time — every time.
                </p>
                <p>
                  Our team understands the operational realities of East Africa
                  — infrastructure, customs processes, and market dynamics —
                  and turns these challenges into efficient, workable solutions
                  for our clients.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-5"
            >
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                >
                  <p className="text-3xl font-bold text-orange-500 mb-1">{value}</p>
                  <p className="text-gray-400 text-sm">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-900 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5">
                <Target size={24} className="text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To deliver reliable, efficient, and customer-focused logistics
                solutions that enable businesses in East Africa to compete and
                grow in global markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5">
                <Eye size={24} className="text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To be a leading logistics and distribution partner in East
                Africa, recognized for operational excellence, innovation, and
                trusted customer relationships.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-950 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-white">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 hover:border-orange-500/20 rounded-xl p-6 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-gray-900 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
              At Meibex Express Ltd, every shipment represents our reputation.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'On-time and secure delivery',
                'Transparent communication',
                'Customs compliance',
                'Continuous improvement',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                >
                  <ShieldCheck size={14} className="text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  )
}

export default About
