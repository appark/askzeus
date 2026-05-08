'use client'

import { motion } from 'framer-motion'
import { BarChart3, Bot, TrendingUp, Smartphone, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Business Health Dashboard',
    description:
      'Real-time visibility into your business vitals. Track KPIs, revenue trends, and operational metrics in one unified dashboard.',
    color: 'from-electric-500/20 to-electric-600/10',
    iconColor: 'text-electric-400',
    iconBg: 'bg-electric-500/10 ring-electric-500/20',
    hoverBorder: 'hover:border-electric-500/40',
    hoverGlow: 'hover:shadow-electric-500/10',
  },
  {
    icon: Bot,
    title: 'AI Reporting Assistant',
    description:
      'Your always-on AI analyst. Get plain-English insights from your data, automated reports, and predictive recommendations.',
    color: 'from-sky-500/20 to-sky-600/10',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/10 ring-sky-500/20',
    hoverBorder: 'hover:border-sky-500/40',
    hoverGlow: 'hover:shadow-sky-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Ecommerce Optimization',
    description:
      'Maximize online revenue with AI-driven product recommendations, pricing strategies, and conversion optimization.',
    color: 'from-electric-400/20 to-electric-500/10',
    iconColor: 'text-electric-300',
    iconBg: 'bg-electric-400/10 ring-electric-400/20',
    hoverBorder: 'hover:border-electric-400/40',
    hoverGlow: 'hover:shadow-electric-400/10',
  },
  {
    icon: Smartphone,
    title: 'Direct Ordering Platform',
    description:
      'Cut out the middleman. Launch your own branded ordering system and keep 100% of your margins.',
    color: 'from-gold-500/20 to-gold-600/10',
    iconColor: 'text-electric-400',
    iconBg: 'bg-electric-500/10 ring-electric-500/20',
    hoverBorder: 'hover:border-electric-500/40',
    hoverGlow: 'hover:shadow-electric-500/10',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Services() {
  return (
    <section id="services" className="bg-silver-50 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 xl:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/5 text-electric-600 text-sm font-medium mb-6">
            What We Offer
          </div>
          <h2 className="mb-5 text-3xl font-display font-bold leading-tight text-[#0B1426] sm:text-4xl md:text-5xl">
            Four Solutions,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-500 to-sky-500">
              Infinite Impact
            </span>
          </h2>
          <p className="text-silver-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Purpose-built AI tools and consulting services designed specifically for the realities of running a small business.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative cursor-pointer overflow-hidden rounded-xl border border-silver-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-2xl ${service.hoverBorder} ${service.hoverGlow} hover:shadow-xl`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ring-1 mb-5 ${service.iconBg}`}
                >
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-[#0B1426] font-display font-semibold text-lg mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-silver-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ${service.iconColor} group-hover:gap-2.5`}>
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Hover gradient accent */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 rounded-b-xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
