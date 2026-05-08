# Ask Zeus — AI + Operations Consulting Website

> **"Ask Zeus. Get Answers."**
> The official marketing website for Ask Zeus LLC — an AI-powered operations consulting company helping downtown small businesses (restaurants, cafes, retail, hospitality) run smarter through data, automation, and 33+ years of real-world operations expertise.

Live site: [askzeus.io](https://askzeus.io) · Contact: hello@askzeus.io

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Component Reference](#component-reference)
6. [Getting Started](#getting-started)
7. [Development](#development)
8. [Building for Production](#building-for-production)
9. [Deployment](#deployment)
10. [Customization Guide](#customization-guide)
11. [SEO & Metadata](#seo--metadata)
12. [Business Context](#business-context)

---

## Project Overview

Ask Zeus is a single-page marketing website built to convert downtown business owners into consulting clients. The site communicates four core service packages, establishes credibility through real operational credentials, and captures leads via an inline contact form.

**Key goals of the site:**
- Communicate a clear value proposition: AI + real-world operations experience, not just tech buzzwords
- Target decision-makers at restaurants, retail shops, cafes, and hospitality businesses
- Drive inbound inquiries through a frictionless contact form
- Look and feel like a premium technology company, not a generic local consultant

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | [Next.js](https://nextjs.org) (App Router) | 14.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4.x |
| Animations | Framer Motion | 11.x |
| Icons | Lucide React | 0.400.x |
| Form Styles | @tailwindcss/forms | 0.5.x |
| Fonts | DM Sans (display) + Inter (body) | via CSS variables |
| Deployment | Vercel | — |

**Why this stack?**

- **Next.js 14 App Router** — Server components by default, fast page loads, built-in SEO metadata API, zero-config Vercel deployment
- **Tailwind CSS** — Utility-first approach makes responsive design fast and consistent; custom design tokens live in `tailwind.config.ts`
- **Framer Motion** — Powers all entrance animations, hover effects, and the mobile menu. Uses `whileInView` for scroll-triggered reveals
- **Lucide React** — Clean, consistent icon set. Tree-shakeable so only used icons are bundled
- **TypeScript** — Type safety across all components and form state

---

## Project Structure

```
askzeus/
├── app/
│   ├── globals.css          # Global styles, Tailwind directives, font variables
│   ├── layout.tsx           # Root layout — metadata, font loading, body wrapper
│   └── page.tsx             # Single page — assembles all section components
│
├── components/
│   ├── Navbar.tsx           # Fixed top navigation with scroll detection + mobile menu
│   ├── Hero.tsx             # Landing hero with particles, headline, stats bar
│   ├── Services.tsx         # Four service package cards
│   ├── WhyUs.tsx            # Credentials section with differentiators and stats
│   ├── Industries.tsx       # Four industry target cards
│   ├── Pricing.tsx          # Three-tier pricing table
│   ├── Contact.tsx          # Contact form with info sidebar
│   └── Footer.tsx           # Three-column footer
│
├── images/                  # Static image assets
├── tailwind.config.ts       # Design tokens, custom colors, fonts, animations
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS (required by Tailwind)
└── package.json
```

---

## Design System

All design tokens are defined in `tailwind.config.ts`. The palette uses three primary color families:

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `electric-300` | `#7DD3FC` | Light accent, gradient endpoints |
| `electric-400` | `#38BDF8` | Primary icon color, text accents |
| `electric-500` | `#0EA5E9` | Primary CTAs, buttons, focus rings |
| `electric-600` | `#0284C7` | Hover state on primary buttons |
| `gold-400` | `#FBBF24` | Stat card accents, secondary highlights |
| `gold-500` | `#F59E0B` | Footer accent line, decorative elements |
| `gold-600` | `#D97706` | Gold hover states |
| `silver-50` | `#F8FAFC` | Light section backgrounds |
| `silver-200` | `#E2E8F0` | Card borders in light sections |
| `silver-400` | `#94A3B8` | Body text on dark backgrounds |
| `silver-500` | `#64748B` | Body text on light backgrounds |
| `navy-600` / `#0B1426` | — | Primary dark background |
| `navy-700` / `#0F1F3D` | — | Card backgrounds in dark sections |

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / Headings | DM Sans (`font-display`) | 700 (bold) | Used for all `h1`–`h3` and stat numbers |
| Body | Inter (`font-sans`) | 400 / 500 | Used for paragraph text, labels |

Fonts are loaded via CSS variables (`--font-dm-sans`, `--font-inter`) defined in `app/globals.css` and referenced in `tailwind.config.ts`.

### Custom Animations

Defined in `tailwind.config.ts` under `theme.extend.animation` / `keyframes`:

| Class | Behavior | Used In |
|-------|----------|---------|
| `animate-float` | Gentle 6s up-down float | Decorative elements |
| `animate-pulse-glow` | Electric blue box-shadow pulse | CTA glow effects |
| `animate-shimmer` | Horizontal gradient shimmer | Loading states |

### Background Utilities

| Class | Description |
|-------|-------------|
| `bg-gradient-radial` | Radial gradient via CSS custom property |
| `bg-hero-glow` | Elliptical electric blue glow at top of hero |

---

## Component Reference

### `Navbar.tsx`

Fixed top navigation bar. Transparent by default, gains a dark blur backdrop after 20px scroll.

**Behavior:**
- `scrolled` state triggers `bg-[#0B1426]/95 backdrop-blur-md border-b border-white/5`
- All nav links use smooth `scrollIntoView` — no hard page navigation
- Mobile: hamburger icon toggles an `AnimatePresence`-driven slide-down menu
- Desktop CTA button links to `#contact`

**Nav links:** Services · Why Us · Industries · Pricing · Contact

---

### `Hero.tsx`

Full-width dark hero section. Client component because of particle generation.

**Features:**
- 50 randomly generated floating particles (position, size, opacity, animation speed) — generated client-side in `useEffect` to avoid hydration mismatch
- Layered background: radial gradient overlay → hero glow → dot grid → electric orb (bottom-left) → gold orb (top-right) → center blur orb → particles
- `containerVariants` / `itemVariants` stagger children entrance animations (0.15s stagger, 0.7s duration)
- Stats bar: "33 Years Experience" · "4 Core Solutions" · "AI-Powered Insights"

**CTA buttons:**
- "Start Your Journey" → scrolls to `#contact`
- "See Our Services" → scrolls to `#services`

---

### `Services.tsx`

Light background (`bg-silver-50`) section with a 4-column responsive card grid.

**Service packages:**

| # | Title | Icon | Color |
|---|-------|------|-------|
| 1 | Business Health Dashboard | `BarChart3` | Electric blue |
| 2 | AI Reporting Assistant | `Bot` | Sky blue |
| 3 | Ecommerce Optimization | `TrendingUp` | Electric light |
| 4 | Direct Ordering Platform | `Smartphone` | Gold |

**Card interactions:**
- `whileHover={{ y: -8 }}` lift effect
- Bottom border gradient accent fades in on hover (`opacity-0 group-hover:opacity-100`)
- "Learn more" arrow gap expands on hover via `group-hover:gap-2.5`

---

### `WhyUs.tsx`

Dark background section establishing credibility. Two-column layout: bullet list (left) + stat cards grid (right).

**Differentiator bullets (left column):**
- Defined in the `differentiators` array — easy to update
- Each bullet uses a circle checkmark icon (`electric-400`)

**Stat cards (right column):**
- 2×2 grid on `sm:` breakpoint
- Cards: `33+` Years · `4` Offerings · `100%` Small Business Focus · `AI-First` Methodology
- Gold and electric accent alternating

---

### `Industries.tsx`

Light background section. 2-column card grid (stacks to 1 on mobile).

**Industries served:**

| Industry | Icon | Color Theme |
|----------|------|-------------|
| Restaurants | `UtensilsCrossed` | Orange / Red |
| Retail | `ShoppingBag` | Electric blue |
| Cafes & Coffee Shops | `Coffee` | Amber / Yellow |
| Hospitality | `Building2` | Violet / Purple |

Each card has a blurred radial gradient in the top-right corner that intensifies on hover.

---

### `Pricing.tsx`

White background section. 3-column pricing table.

**Plans:**

| Plan | Price | Highlight |
|------|-------|-----------|
| Starter | $997/mo | Outline card |
| Professional | $2,497/mo | **Featured** — dark card with electric border, "Most Popular" badge |
| Enterprise | Custom | Outline card |

**Features by tier:**
- Starter: Health Dashboard, Monthly AI Report, Email Support, 2 locations
- Professional: Everything in Starter + AI Assistant, Ecommerce, Ordering Platform, Priority Support, Quarterly Strategy
- Enterprise: Everything in Professional + Custom AI, Dedicated Consultant, Custom Reporting, SLA, White-glove onboarding

Trust badges below the grid: "30-day money-back guarantee" · "No long-term contracts required"

---

### `Contact.tsx`

Dark background section. Two-column: info sidebar (left) + form (right).

**Form fields:**
- Full Name (required)
- Email Address (required)
- Company Name (optional)
- Service Interest (dropdown — maps to the 4 service packages + "Other")
- Message (required, 4-row textarea)

**Submission behavior:**
- `handleSubmit` currently simulates a 1.2s async delay then sets `submitted: true`
- On success, replaces the form with an animated confirmation state
- To connect a real backend, replace the `setTimeout` in `handleSubmit` with a `fetch` call to your API route or a service like Resend, Formspree, or Netlify Forms

**Contact info sidebar:**
- Email: hello@askzeus.io
- Response time: 24 hours
- Free consultation offer
- "33+ Years" decorative card

---

### `Footer.tsx`

Dark background footer. Three-column grid above a bottom bar.

**Columns:**
1. Logo + tagline + copyright
2. Quick Links (same as nav)
3. Service links (all scroll to `#services`)

Gold-tinted gradient line at the very top of the footer separates it from the Contact section.

**Note:** Copyright year is currently hardcoded as `2024` — update this or make it dynamic with `new Date().getFullYear()`.

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9+ (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/askzeus.git
cd askzeus

# Install dependencies
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page hot-reloads on file changes. All components are in `components/` — edit any file and see changes instantly.

---

## Development

### Adding a New Section

1. Create `components/YourSection.tsx`
2. Import it in `app/page.tsx`
3. Add a corresponding nav link in `Navbar.tsx` (`navLinks` array) and `Footer.tsx` (`quickLinks` array) if needed
4. Give the section an `id` attribute matching the href (e.g., `id="your-section"` → `href="#your-section"`)

### Updating Service Packages

Edit the `services` array in `components/Services.tsx`. Each item takes:
```ts
{
  icon: LucideIconComponent,
  title: string,
  description: string,
  color: string,        // Tailwind gradient class for hover accent
  iconColor: string,    // Tailwind text color class
  iconBg: string,       // Tailwind bg + ring class
  hoverBorder: string,  // Tailwind hover border class
  hoverGlow: string,    // Tailwind hover shadow class
}
```

### Updating Pricing

Edit the `plans` array in `components/Pricing.tsx`. Set `popular: true` on whichever card should be featured.

### Connecting the Contact Form

Replace the simulated submission in `Contact.tsx` `handleSubmit`:

```ts
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setLoading(true)
  
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  setLoading(false)
  setSubmitted(true)
}
```

Then create `app/api/contact/route.ts` to handle the submission (send email via Resend, save to database, post to Slack, etc.).

---

## Building for Production

```bash
npm run build
```

This runs the Next.js production build. Outputs to `.next/`. Check for any TypeScript or lint errors:

```bash
npm run lint
```

To preview the production build locally:

```bash
npm run start
```

---

## Deployment

This project is designed to deploy on **Vercel** with zero configuration.

### Deploy via Vercel CLI

```bash
npx vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Deploy via GitHub Integration

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects the framework, sets build command to `next build`, and output to `.next`
4. Every push to `main` triggers an automatic production deploy

### Custom Domain

Set `askzeus.io` as your domain in the Vercel dashboard under **Settings → Domains**. Vercel handles SSL automatically.

---

## Customization Guide

### Change the Brand Colors

All colors live in `tailwind.config.ts` under `theme.extend.colors`. The three key families are `electric`, `gold`, and `silver`. Updating a value there propagates everywhere on rebuild.

### Change the Hero Headline

In `components/Hero.tsx`, find the `<h1>` block:
```tsx
<span className="block ...">Ask Zeus.</span>
<span className="block ...">Get Answers.</span>
```

The second line uses a gradient text effect (`bg-clip-text text-transparent bg-gradient-to-r`).

### Change the Stats Bar

In `components/Hero.tsx`, find the stats bar section (three inline stat blocks with labels "Experience", "Solutions", "Insights") and update the values and labels directly.

### Change the "Why Us" Credentials

In `components/WhyUs.tsx`, update the `differentiators` array (bullet points) and the `stats` array (the four stat cards on the right).

### Update Contact Info

In `components/Contact.tsx`, find the `contactInfo` array at the top. Update the email href and value there.

---

## SEO & Metadata

Metadata is defined in `app/layout.tsx` using the Next.js Metadata API:

```ts
export const metadata: Metadata = {
  title: 'Ask Zeus — AI + Operations Consulting',
  description: '...',
  keywords: [...],
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://askzeus.io',
    siteName: 'Ask Zeus',
    type: 'website',
  },
}
```

**To add Twitter/X card metadata**, extend with:
```ts
twitter: {
  card: 'summary_large_image',
  title: 'Ask Zeus — AI + Operations Consulting',
  description: '...',
}
```

**To add a favicon**, place `favicon.ico` and optionally `apple-touch-icon.png` in the `app/` directory — Next.js picks them up automatically.

**To add an OG image**, place a `opengraph-image.png` (1200×630px) in the `app/` directory and Next.js will serve it automatically at `/opengraph-image`.

---

## Business Context

### Why Ask Zeus Exists

Ask Zeus was not created to be a "computer company" or an "AI company." It was created to be a **Business Operations Optimization Company** — one that happens to use AI and modern technology as the engine.

The founding insight is simple: **business owners do not care about AI, APIs, Docker, or dashboards. They care about making more money, saving labor, reducing waste, understanding their sales, and getting customers to come back.** The technology is just the delivery mechanism for those outcomes.

The problem is real. Thousands of downtown small businesses — restaurants, cafes, retail shops, bars, hospitality operators — are operating on thin margins with disconnected systems, no real analytics, and no visibility into what is actually happening in their business. Most are still using:

- Spreadsheets for tracking and reporting
- Basic POS exports they may never actually look at
- Disconnected apps that do not talk to each other
- Zero automation
- No understanding of labor cost ratios, food cost percentages, or customer retention patterns

These businesses are overwhelmed, understaffed, and drowning in operational complexity. They do not have the time or the technical background to solve it themselves. That is the market Ask Zeus was built to serve.

---

### The Founder Advantage

Most people entering the AI consulting space right now know AI tools, coding, and prompts. What they do not know is how to run a business. They have never:

- Managed food costs against budget at the end of a week
- Dealt with a broken POS system at 8pm on a Friday night
- Built a labor schedule that accounts for both coverage and overtime laws
- Integrated a loyalty program with an ecommerce platform
- Pulled a compliance report from a cannabis POS system
- Fought DoorDash on commission fees while maintaining online order volume

Ask Zeus was founded by people who have actually done those things. The combined background spans:

| Domain | Experience |
|--------|-----------|
| Enterprise IT Leadership | 33 years leading IT at UC Davis — scaled systems for 30,000+ students, faculty, and staff. Zero tolerance for downtime. Real budget accountability. |
| Hospitality Operations | Marriott hotel operations experience — hands-on food & beverage cost control, labor scheduling, guest experience management, and occupancy optimization. |
| Cannabis Retail & Ecommerce | Built and managed retail ecommerce on the Treez platform — POS integrations, loyalty programs, online menus, delivery operations, and compliance reporting. |
| Marketing & SEO | End-to-end digital marketing, search optimization, analytics, and conversion tracking across ecommerce and local business contexts. |
| Automation & Integrations | Docker, Vercel, n8n, API integrations, custom dashboards, and reporting pipelines connecting disparate business systems. |

This combination is extremely rare in the consulting market. Pure tech consultants lack operational depth. Pure operations consultants lack technical execution capability. Ask Zeus sits at the intersection of both — and that is the entire basis of the pitch to clients.

---

### Why Downtown Businesses Specifically

The decision to focus on downtown small businesses — and not to market broadly as a generic "AI consultant for everyone" — was deliberate and strategic.

**The opportunity:**
- Downtown businesses have existing relationships and community trust that make referrals powerful
- Local operators are far more technologically behind than, say, cannabis retail was before it was forced to modernize
- The problems are universal across the vertical: thin margins, high labor costs, disconnected systems, no reporting visibility
- Decision-makers are accessible — you can walk in and have a conversation
- Local reputation compounds quickly; one great result leads to five more clients

**The cannabis retail comparison is instructive.** Cannabis operators had to modernize extremely fast because of delivery requirements, compliance needs, ecommerce mandates, and loyalty program competition. They built sophisticated digital operations under pressure. Most downtown restaurants and retail shops have had no such forcing function — they are still operating the way they did in 2015. That gap is the opportunity.

---

### What Ask Zeus Actually Sells

The four service packages on this website are not software products. They are consulting and integration services structured around the specific outcomes business owners care about:

**1. Business Health Dashboard**
The easiest entry point and the fastest path to client trust. Connect the client's existing systems — POS, payroll platform, ecommerce, website analytics, Google reviews, marketing data — and surface the insights they cannot currently see:
- Sales trends by day, shift, and product
- Labor cost as a percentage of revenue (the number most operators do not actually know)
- Best-selling and worst-selling menu items or products
- Slow-moving inventory
- Hourly performance patterns and staffing inefficiencies
- Profit leaks they did not know existed

Most clients do not need new systems. They need someone to connect and interpret the systems they already have.

**2. AI Reporting Assistant**
Once the data is flowing, layer in a conversational AI interface using Claude and OpenAI APIs. Instead of logging into multiple dashboards, a manager can ask:
- "Why were sales down on Tuesday?"
- "Which products are underperforming this month?"
- "What are our peak labor cost hours?"
- "Summarize last week's performance."
- "Which menu items have the highest margin?"

This becomes the client's always-on business analyst — available at any hour, speaking plain English, pulling from real data.

**3. Ecommerce Optimization**
Treez ecommerce and cannabis retail experience translates directly to any business with an online presence. Services include SEO, page speed optimization, Vercel deployments, analytics setup, conversion rate tracking, abandoned cart analysis, loyalty system implementation, and AI-assisted SEO content. Most downtown businesses have terrible websites. Dramatic improvements are achievable relatively quickly.

**4. Direct Ordering Platform**
The long-term, high-value play. Build a branded ordering platform that lets restaurants and retailers accept direct online orders without paying 15–30% commission to DoorDash or Uber Eats. Potentially expand into a local delivery network using student drivers and community partners — a lower-fee alternative to third-party delivery platforms. This is a standalone business opportunity in itself. It is the fourth service on the site but strategically it is the biggest long-term value creation opportunity. It should be built after the first three services have established client relationships and operational credibility.

---

### Pricing Strategy and Revenue Model

The pricing shown on this site represents the ongoing **retainer** model, which is the core revenue engine of the business. The full engagement path looks like this:

| Stage | What It Is | Price Range | Purpose |
|-------|-----------|-------------|---------|
| Business Audit | Systems review, inefficiency report, recommendations | $500–$1,500 | Low-risk entry point for skeptical clients |
| Setup Project | Custom dashboard, integration, platform build | $5,000–$20,000 | Primary upfront revenue, also establishes the relationship |
| Monthly Retainer | Ongoing monitoring, optimization, reporting, support | $500–$3,000/mo | Recurring revenue; this is what scales the business |

**The audit is the door opener.** It is priced low enough that a business owner can say yes without a long decision cycle. It almost always reveals enough problems that the client wants the full setup engagement.

**The setup project is the credibility builder.** A $16K project for a single client is both realistic and well within market range for the value delivered. One successful project becomes a case study that sells the next five.

**The retainer is the real business.** Ten clients at $1,500/month each is $180K/year in recurring revenue — before any new project work. That is the financial model that makes this sustainable.

---

### Realistic Financial Outlook

Based on the business strategy, here is the projected growth path:

**Year 1 (Part-Time / Launch Phase)**
- Focus: 3–8 clients, smaller projects, local referrals, one pilot at discounted rate to build case study
- Revenue estimate: $50,000–$150,000
- Key leverage points: Davis network, local business relationships, former civic connections

**Year 2 (Referral Growth Phase)**
- Focus: Retainer base building, packaged services, stronger local reputation
- Revenue estimate: $150,000–$350,000

**Year 3+ (Scale Phase)**
- Focus: Productized services, standardized AI reporting system, possible expansion of direct ordering platform into a standalone product
- Revenue estimate: $500,000+

The critical discipline in Year 1 is **not overbuilding.** The biggest risk for technically capable founders is building complex custom software before you have paying clients who need it. Start with consulting and integration. Use off-the-shelf tools (n8n, Supabase, Looker Studio, existing POS APIs) wherever possible. Turn the best solutions into reusable products only after the client demand is proven.

---

### The Team Structure

Ask Zeus is a father-son venture. This is a strength, not a constraint.

The operational and technical founder brings IT leadership, hospitality operations, cannabis retail, and full-stack development capability. The business analysis and financial modeling comes from the co-founder, who brings a business background that complements the technical and operational depth.

Critically, **neither founder needs to quit their current role to start this business.** This is intentional. Starting part-time — evenings and weekends, with a discounted pilot client — is the right approach. It keeps risk low, allows for learning, and lets the business prove its value before anyone depends on it as their primary income. The right time to go full-time is when retainer revenue is sufficient to replace what is being left behind.

---

## License

Private — All rights reserved. Ask Zeus LLC © 2024.
