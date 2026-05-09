import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — AI & Operations Insights for Small Businesses | Ask Zeus',
  description:
    'Practical guides and insights on AI consulting, restaurant operations, and small business analytics from the Ask Zeus team.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#0B1426] py-20 md:py-28 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-sm font-medium mb-6">
            Insights &amp; Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            The Ask Zeus Blog
          </h1>
          <p className="text-silver-400 text-lg leading-relaxed">
            Practical AI and operations advice for small business owners.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-silver-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
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
                  <h2 className="text-xl font-display font-bold text-[#0B1426] mb-3 leading-snug">
                    {post.title}
                  </h2>

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
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
