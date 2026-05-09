import type { Metadata } from 'next'
import './globals.css'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ask Zeus',
  url: 'https://askzeus.io',
  description: 'AI-powered operations consulting for small businesses.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Davis',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: 'US',
  serviceType: 'AI and Operations Consulting',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI consulting for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI consulting for small businesses means applying artificial intelligence tools and strategies to real operational challenges — like automating reports, optimizing online sales, tracking business health, and streamlining ordering. Ask Zeus makes enterprise-grade AI accessible and practical for small business owners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Ask Zeus cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask Zeus offers three tiers: Starter at $997/month, Professional at $2,497/month, and Enterprise with custom pricing. All plans include a 30-day money-back guarantee and no long-term contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask Zeus specializes in restaurants, retail, cafes and coffee shops, and hospitality businesses. Our AI tools and consulting services are tailored to the specific operational challenges of each industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see meaningful improvements within the first 30 to 60 days. Our hands-on implementation approach — backed by 33 years of real-world operations experience — means we focus on quick wins alongside long-term transformation.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Ask Zeus — AI + Operations Consulting',
  description:
    'AI-powered operations consulting for small businesses. Business Health Dashboards, AI Reporting, Ecommerce Optimization, and Direct Ordering Platforms.',
  keywords: [
    'AI consulting',
    'operations consulting',
    'small business AI',
    'business health dashboard',
    'ecommerce optimization',
    'direct ordering platform',
    'AI reporting',
  ],
  openGraph: {
    title: 'Ask Zeus — AI + Operations Consulting',
    description:
      'AI-powered operations consulting for small businesses. Transform your operations with 33 years of expertise.',
    url: 'https://askzeus.io',
    siteName: 'Ask Zeus',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0B1426] text-white">
        {children}
      </body>
    </html>
  )
}
