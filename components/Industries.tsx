'use client'

import { motion } from 'framer-motion'
import { UtensilsCrossed, ShoppingBag, Coffee, Building2 } from 'lucide-react'

const industries = [
  {
    icon: UtensilsCrossed,
    name: 'Restaurants',
    description:
      'Streamline orders, track food costs, optimize staffing, and grow off-premise revenue with AI-powered operations.',
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
    iconGradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-500/10 ring-orange-500/25',
    iconColor: 'text-orange-400',
    borderHover: 'hover:border-orange-500/40',
    tag: 'Food & Beverage',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description:
      'Manage inventory smarter, personalize customer experiences, and expand your online presence with AI-driven insights.',
    gradient: 'from-electric-500/20 via-sky-500/10 to-transparent',
    iconGradient: 'from-electric-500 to-sky-500',
    iconBg: 'bg-electric-500/10 ring-electric-500/25',
    iconColor: 'text-electric-400',
    borderHover: 'hover:border-electric-500/40',
    tag: 'Commerce',
  },
  {
    icon: Coffee,
    name: 'Cafes & Coffee Shops',
    description:
      'Build loyalty programs, optimize your menu mix, and launch direct ordering to deepen customer relationships.',
    gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    iconGradient: 'from-amber-500 to-yellow-500',
    iconBg: 'bg-amber-500/10 ring-amber-500/25',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    tag: 'Specialty Beverage',
  },
  {
    icon: Building2,
    name: 'Hospitality',
    description:
      'Improve guest experiences, automate operations, and maximize occupancy revenue with data-driven strategies.',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    iconGradient: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-500/10 ring-violet-500/25',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    tag: 'Lodging & Service',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-28 bg-silver-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/5 text-electric-600 text-sm font-medium mb-6">
            Industries We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0B1426] mb-5 leading-tight">
            Built for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-500 to-sky-500">
              Your Industry
            </span>
          </h2>
          <p className="text-silver-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We understand the unique challenges of each vertical. Our solutions are tailored to the specific demands of your business type.
          </p>
        </motion.div>

        {/* Industry cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`group relative bg-white rounded-2xl p-8 border border-silver-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden ${industry.borderHover}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br ${industry.gradient} blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2`}
                />

                <div className="relative z-10">
                  {/* Tag */}
                  <div className="mb-4">
                    <span className={`text-xs font-medium uppercase tracking-wider ${industry.iconColor} opacity-70`}>
                      {industry.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ring-1 mb-5 ${industry.iconBg}`}
                  >
                    <Icon className={`w-7 h-7 ${industry.iconColor}`} />
                  </div>

                  {/* Industry name */}
                  <h3 className="text-[#0B1426] font-display font-bold text-2xl mb-3">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-silver-500 text-base leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
