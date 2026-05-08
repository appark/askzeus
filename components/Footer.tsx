'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Business Health Dashboard',
  'AI Reporting Assistant',
  'Ecommerce Optimization',
  'Direct Ordering Platform',
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B1426] relative overflow-hidden">
      {/* Gold/electric accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 h-[200px] w-[min(92vw,600px)] -translate-x-1/2 bg-electric-500/4 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1680px] px-6 pb-8 pt-14 sm:px-10 sm:pt-16 xl:px-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo + tagline */}
          <div className="col-span-1">
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 mb-4 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 bg-electric-500/10 rounded-lg flex items-center justify-center ring-1 ring-electric-500/30 group-hover:ring-electric-500/60 transition-all duration-300">
                <Zap className="w-4 h-4 text-electric-400 fill-electric-400" />
              </div>
              <span className="text-lg font-display font-semibold tracking-tight">
                <span className="text-white">Ask</span>
                <span className="text-electric-400"> Zeus</span>
              </span>
            </motion.a>

            <p className="text-silver-400 text-sm leading-relaxed mb-6">
              Ask Zeus. Get Answers. AI-powered operations consulting built for small businesses ready to grow.
            </p>

            <p className="text-silver-500 text-xs">
              &copy; 2024 Ask Zeus LLC. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-silver-400 hover:text-electric-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-silver-400 hover:text-electric-400 text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver-500 text-xs">
            &copy; 2024 Ask Zeus LLC. All rights reserved.
          </p>
          <p className="text-silver-500 text-xs">
            Built for small business.{' '}
            <span className="text-electric-400">Powered by AI.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
