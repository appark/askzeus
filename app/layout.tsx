import type { Metadata } from 'next'
import './globals.css'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ask Zeus',
  url: 'https://askzeus.io',
  email: 'hello@askzeus.io',
  description: 'AI-powered operations consulting for restaurants, retail, cafes, and hospitality businesses in Davis and Sacramento CA.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Davis',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: ['Davis, CA', 'Sacramento, CA', 'Yolo County, CA', 'Sacramento County, CA'],
  serviceType: 'AI and Operations Consulting',
  knowsAbout: ['Restaurant Operations', 'Retail Analytics', 'Hospitality Management', 'POS Integrations', 'Ecommerce Optimization', 'AI Reporting'],
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
  title: 'Ask Zeus — AI + Operations Consulting | Davis & Sacramento CA',
  description:
    'AI-powered operations consulting for restaurants, retail, cafes, and hospitality in Davis and Sacramento CA. Business Health Dashboards, AI Reporting, Ecommerce Optimization, and Direct Ordering Platforms. 33 years of IT and operations experience.',
  keywords: [
    'AI consulting Davis CA',
    'AI consulting Sacramento CA',
    'operations consulting small business',
    'restaurant analytics Davis CA',
    'business health dashboard',
    'ecommerce optimization Sacramento',
    'direct ordering platform',
    'AI reporting small business',
    'UC Davis business consulting',
    'restaurant POS analytics',
  ],
  openGraph: {
    title: 'Ask Zeus — AI + Operations Consulting | Davis & Sacramento CA',
    description:
      'AI-powered operations consulting for small businesses in Davis and Sacramento CA. 33 years of IT and operations expertise including UC Davis and Marriott.',
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
