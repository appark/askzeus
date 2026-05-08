import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-sans antialiased bg-[#0B1426] text-white">
        {children}
      </body>
    </html>
  )
}
