'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'

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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0B1426] overflow-hidden">
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
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-electric-500/10 blur-[120px]" />

        {/* Gold glow orb — top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px]" />

        {/* Additional subtle orb center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-electric-500/5 blur-[100px]" />

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
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-sm font-medium backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 fill-electric-400" />
            AI + Operations Consulting
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold leading-tight mb-6"
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl text-white tracking-tight">
            Ask Zeus.
          </span>
          <span
            className="block text-6xl sm:text-7xl md:text-8xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-electric-400 via-electric-300 to-sky-300"
          >
            Get Answers.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-silver-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Transform your small business with AI-powered insights and{' '}
          <span className="text-silver-200 font-medium">33 years</span> of real-world operations expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(14,165,233,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric-500 text-white font-semibold text-lg shadow-lg shadow-electric-500/25 hover:bg-electric-600 transition-colors duration-200"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleScroll('#services') }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(14,165,233,0.8)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-electric-500/40 text-electric-300 font-semibold text-lg hover:bg-electric-500/10 transition-all duration-200 backdrop-blur-sm"
          >
            See Our Services
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-0 px-8 py-5 rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm"
        >
          <div className="text-center sm:px-8">
            <div className="text-2xl font-display font-bold text-white">33 Years</div>
            <div className="text-silver-400 text-sm mt-0.5">Experience</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="text-center sm:px-8">
            <div className="text-2xl font-display font-bold text-white">4 Core</div>
            <div className="text-silver-400 text-sm mt-0.5">Solutions</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="text-center sm:px-8">
            <div className="text-2xl font-display font-bold text-white">AI-Powered</div>
            <div className="text-silver-400 text-sm mt-0.5">Insights</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.a
          href="#services"
          onClick={(e) => { e.preventDefault(); handleScroll('#services') }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-silver-500 hover:text-silver-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  )
}
