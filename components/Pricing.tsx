'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$997',
    period: '/mo',
    description: 'Perfect for getting started with data-driven decisions.',
    features: [
      'Business Health Dashboard',
      'Monthly AI Report',
      'Email Support',
      'Up to 2 locations',
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$2,497',
    period: '/mo',
    description: 'Everything you need to scale with AI-powered tools.',
    features: [
      'Everything in Starter',
      'AI Reporting Assistant',
      'Ecommerce Optimization',
      'Direct Ordering Platform',
      'Priority Support',
      'Quarterly Strategy Sessions',
    ],
    cta: 'Get Started',
    ctaStyle: 'filled',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Fully custom solutions for complex operations.',
    features: [
      'Everything in Professional',
      'Custom AI Integrations',
      'Dedicated Operations Consultant',
      'Custom Reporting',
      'SLA Support',
      'White-glove onboarding',
    ],
    cta: 'Contact Us',
    ctaStyle: 'outline',
    popular: false,
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

export default function Pricing() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric-500/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/5 text-electric-600 text-sm font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0B1426] mb-5 leading-tight">
            Simple,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-500 to-sky-500">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-silver-500 text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No long-term lock-ins. Just results-driven consulting with clear value at every tier.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={!plan.popular ? { y: -4, transition: { duration: 0.2 } } : {}}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? 'bg-[#0B1426] border-2 border-electric-500 md:scale-105 shadow-2xl shadow-electric-500/25 z-10'
                  : 'bg-silver-50 border border-silver-200 hover:border-electric-500/30 hover:shadow-xl transition-all duration-300'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-electric-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-electric-500/40">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-display font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-[#0B1426]'
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.popular ? 'text-silver-400' : 'text-silver-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span
                    className={`text-5xl font-display font-bold ${
                      plan.popular ? 'text-white' : 'text-[#0B1426]'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg mb-2 ${plan.popular ? 'text-silver-400' : 'text-silver-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular
                          ? 'bg-electric-500/20 ring-1 ring-electric-500/40'
                          : 'bg-electric-500/10 ring-1 ring-electric-500/25'
                      }`}
                    >
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-electric-400' : 'text-electric-500'}`} />
                    </div>
                    <span
                      className={`text-sm leading-relaxed ${
                        plan.popular ? 'text-silver-300' : 'text-silver-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 ${
                  plan.ctaStyle === 'filled'
                    ? 'bg-electric-500 text-white hover:bg-electric-600 shadow-lg shadow-electric-500/25'
                    : plan.popular
                    ? 'border border-electric-500/40 text-electric-400 hover:bg-electric-500/10'
                    : 'border border-silver-300 text-[#0B1426] hover:border-electric-500/50 hover:text-electric-600'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-silver-200 bg-silver-50">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-silver-600 text-sm font-medium">30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-silver-200 bg-silver-50">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-silver-600 text-sm font-medium">No long-term contracts required</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
