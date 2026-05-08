'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.05,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 4,
    }))
    setParticles(generated)
  }, [])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[700px] flex-col items-center justify-start overflow-hidden bg-[#0B1426] pt-24 sm:pt-28 lg:pt-28">
      {/* Background effects layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0B1426]/60 to-[#0B1426]" />

        {/* Hero glow from top */}
        <div className="absolute inset-0 bg-hero-glow" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Electric blue glow orb — bottom left */}
        <div className="absolute -bottom-24 -left-24 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-electric-500/10 blur-[100px] sm:blur-[120px]" />

        {/* Gold glow orb — top right */}
        <div className="absolute -top-24 -right-24 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-gold-500/10 blur-[100px] sm:blur-[120px]" />

        {/* Additional subtle orb center */}
        <div className="absolute top-1/3 left-1/2 h-48 w-[min(92vw,600px)] -translate-x-1/2 rounded-full bg-electric-500/5 blur-[90px] sm:h-[300px] sm:blur-[100px]" />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-electric-400"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [p.opacity, p.opacity * 1.8, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 text-center sm:px-10 sm:pb-16"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-2 text-sm font-medium text-electric-400 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 fill-electric-400" />
            AI + Operations Consulting
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-5 font-display font-bold leading-tight sm:mb-6"
        >
          <span className="block text-4xl text-white tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Ask Zeus.
          </span>
          <span
            className="block text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-electric-400 via-electric-300 to-sky-300 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Get Answers.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-silver-400 sm:mb-10 sm:text-xl"
        >
          Transform your small business with AI-powered insights and{' '}
          <span className="text-silver-200 font-medium">33 years</span> of real-world operations expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex flex-col items-stretch justify-center gap-3 sm:mb-10 sm:flex-row sm:items-center sm:gap-4"
        >
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(14,165,233,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-500 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-electric-500/25 transition-colors duration-200 hover:bg-electric-600 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleScroll('#services') }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(14,165,233,0.8)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-electric-500/40 px-5 py-3.5 text-base font-semibold text-electric-300 backdrop-blur-sm transition-all duration-200 hover:bg-electric-500/10 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            See Our Services
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="mx-auto flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-5 backdrop-blur-sm sm:inline-flex sm:w-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-0 sm:px-8"
        >
          <div className="text-center sm:px-8">
            <div className="text-xl font-display font-bold text-white sm:text-2xl">33 Years</div>
            <div className="text-silver-400 text-sm mt-0.5">Experience</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="text-center sm:px-8">
            <div className="text-xl font-display font-bold text-white sm:text-2xl">4 Core</div>
            <div className="text-silver-400 text-sm mt-0.5">Solutions</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="text-center sm:px-8">
            <div className="text-xl font-display font-bold text-white sm:text-2xl">AI-Powered</div>
            <div className="text-silver-400 text-sm mt-0.5">Insights</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
