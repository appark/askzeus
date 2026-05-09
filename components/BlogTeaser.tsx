'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/blog'

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

export default function BlogTeaser() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section className="bg-silver-50 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10 xl:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/5 text-electric-600 text-sm font-medium mb-6">
            From The Blog
          </div>
          <h2 className="mb-5 text-3xl font-display font-bold leading-tight text-[#0B1426] sm:text-4xl md:text-5xl">
            Latest{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-500 to-sky-500">
              Insights
            </span>
          </h2>
          <p className="text-silver-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical AI and operations advice for small business owners in Davis, Sacramento, and beyond.
          </p>
        </motion.div>

        {/* Blog cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {recentPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-silver-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-electric-500 to-sky-500" />

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-silver-400 mb-4">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-[#0B1426] mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-silver-500 text-sm leading-relaxed flex-1 mb-5">
                  {post.description}
                </p>

                {/* CTA */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-electric-500 text-sm font-semibold hover:text-electric-600 transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-electric-500/40 text-electric-600 hover:bg-electric-500 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            View All Posts &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
