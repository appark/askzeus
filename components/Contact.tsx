'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, Gift, ArrowRight, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@askzeus.io',
    href: 'mailto:hello@askzeus.io',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'We respond within 24 hours',
    href: null,
  },
  {
    icon: Gift,
    label: 'Free Consultation',
    value: 'Free consultation for new clients',
    href: null,
  },
]

const serviceOptions = [
  'Business Health Dashboard',
  'AI Reporting Assistant',
  'Ecommerce Optimization',
  'Direct Ordering Platform',
  'Other',
]

interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 md:py-28 bg-[#0B1426] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-electric-500/8 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-500/6 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-sm font-medium mb-6">
            Let&apos;s Talk
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            Ready to Transform{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-400 to-sky-300">
              Your Business?
            </span>
          </h2>
          <p className="text-silver-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Take the first step toward smarter operations and AI-powered growth. We&apos;d love to hear about your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-500/10 ring-1 ring-electric-500/25 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-electric-400" />
                    </div>
                    <div>
                      <div className="text-silver-400 text-sm mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-medium hover:text-electric-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Decorative element */}
            <div className="mt-12 p-6 rounded-2xl border border-white/8 bg-white/3">
              <div className="text-gold-400 text-4xl font-display font-bold mb-2">33+</div>
              <div className="text-white font-semibold mb-1">Years of Real-World Experience</div>
              <div className="text-silver-400 text-sm leading-relaxed">
                We have been in the trenches. We know what works, what does not, and how to get you to results faster.
              </div>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="bg-[#0F1F3D] rounded-2xl border border-white/8 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-electric-500/20 ring-2 ring-electric-500/40 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-electric-400" />
                  </div>
                  <h3 className="text-white text-2xl font-display font-bold mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-silver-400 leading-relaxed max-w-sm">
                    Thank you for reaching out. We will get back to you within 24 hours to schedule your free consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-silver-300 text-sm font-medium mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver-600 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all duration-200 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-silver-300 text-sm font-medium mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver-600 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-silver-300 text-sm font-medium mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Restaurant Co."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver-600 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Service interest */}
                  <div>
                    <label className="block text-silver-300 text-sm font-medium mb-1.5">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all duration-200 text-sm appearance-none cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-[#0F1F3D] text-silver-400">
                        Select a service...
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0F1F3D] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-silver-300 text-sm font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your business and what challenges you're facing..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver-600 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(14,165,233,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-electric-500/25"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
