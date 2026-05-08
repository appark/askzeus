import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

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
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#0B1426] text-white">
        {children}
      </body>
    </html>
  )
}
