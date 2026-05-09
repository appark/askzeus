import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getPostBySlug } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://askzeus.io/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://askzeus.io/blog/${post.slug}`,
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0B1426] py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-silver-400 hover:text-electric-400 text-sm transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>

          {/* Keyword badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-xs font-medium mb-6">
            {post.keyword}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center justify-center gap-4 text-silver-400 text-sm mb-6">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          {/* Description */}
          <p className="text-silver-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {post.description}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA Card */}
      <section className="bg-silver-50 py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0B1426] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Ready to apply these insights to your business?
            </h2>
            <p className="text-silver-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Ask Zeus helps small businesses in Davis and Sacramento implement practical AI tools that deliver real results. Let&apos;s talk about what&apos;s possible for your operation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-electric-500 hover:bg-electric-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-electric-500/25"
            >
              Get Started with Ask Zeus
            </Link>
          </div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-silver-500 hover:text-electric-500 text-sm transition-colors"
            >
              &larr; Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
