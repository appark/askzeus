'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const differentiators = [
  'Deep operations expertise across IT, logistics, and fulfillment',
  'AI-first approach tailored for small business realities',
  'Hands-on implementation, not just strategy decks',
  'Proven results with measurable ROI',
]

const stats = [
  { value: '33+', label: 'Years of IT & Operations Experience', accent: 'text-electric-400' },
  { value: '4', label: 'Tailored Service Offerings', accent: 'text-gold-400' },
  { value: '100%', label: 'Focus on Small Business Success', accent: 'text-electric-400' },
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
    <section id="why-us" className="py-24 md:py-28 bg-[#0B1426] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-electric-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
            >
              33 Years of Expertise.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-400 to-sky-300">
                Zero Guesswork.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-silver-400 text-lg leading-relaxed mb-8"
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
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative bg-[#0F1F3D] rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 group overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500/0 to-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className={`text-4xl md:text-5xl font-display font-bold mb-2 ${stat.accent}`}>
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
