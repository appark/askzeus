'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const differentiators = [
  'UC Davis enterprise IT leadership — we know systems that scale',
  'Downtown business operations experience across hospitality, retail, and food service',
  'Cannabis retail & ecommerce — POS integrations, analytics, and compliance',
  'Hands-on implementation for Davis, Sacramento, and surrounding businesses',
]

const stats = [
  { value: '33+', label: 'Years of IT & Operations Experience', accent: 'text-electric-400' },
  { value: 'UC Davis', label: 'Enterprise IT Leadership Background', accent: 'text-gold-400' },
  { value: 'Downtown', label: 'Business Operations Experience', accent: 'text-electric-400' },
  { value: 'AI-First', label: 'Methodology & Tooling', accent: 'text-gold-400' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#0B1426] py-16 sm:py-20 md:py-28">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-electric-500/5 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gold-500/5 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1680px] px-6 sm:px-10 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-sm font-medium">
                Why Ask Zeus
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-display font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              33 Years of Expertise.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-400 to-sky-300">
                Zero Guesswork.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-base leading-relaxed text-silver-400 sm:text-lg"
            >
              We are not a typical consulting firm. We are trusted advisors who combine three decades of real-world operations
              experience with cutting-edge AI to deliver solutions that actually work — built for how small businesses operate today.
            </motion.p>

            {/* Differentiators list */}
            <motion.ul variants={containerVariants} className="space-y-4 mb-10">
              {differentiators.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-electric-500/20 ring-1 ring-electric-500/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-electric-400" />
                  </div>
                  <span className="text-silver-300 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(14,165,233,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-electric-500 text-white font-semibold hover:bg-electric-600 transition-colors duration-200 shadow-lg shadow-electric-500/20"
              >
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column — stat cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl border border-white/8 bg-[#0F1F3D] p-5 transition-all duration-300 hover:border-white/15 sm:p-6"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-500/0 to-electric-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className={`mb-2 text-3xl font-display font-bold sm:text-4xl md:text-5xl ${stat.accent}`}>
                  {stat.value}
                </div>
                <div className="text-silver-400 text-sm leading-snug relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
