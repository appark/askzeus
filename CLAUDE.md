# Ask Zeus — Project Briefing for Claude Code

## Who I Am

Alexander Park. Co-founding Ask Zeus with my son.

**My background:**
- 33 years IT leadership at UC Davis (enterprise systems, 30,000+ users)
- Marriott hospitality operations (food & beverage cost control, labor scheduling, guest experience)
- Cannabis retail ecommerce on Treez (POS integrations, loyalty programs, online menus, delivery, compliance)
- SEO, analytics, marketing, Docker, Vercel, Next.js, automation, payroll, POS systems
- My son brings business analysis and financial modeling

I understand both technology AND real business operations. Explain things in terms of business outcomes, not just engineering details.

---

## What Ask Zeus Is

**Ask Zeus is a Business Operations Optimization Company** — not a "computer company" or "AI company."

We help downtown small businesses (restaurants, cafes, retail, bars, hospitality) use AI and automation to operate smarter and increase profits. The technology is the engine. The product is business outcomes.

**Target market:** Downtown small businesses that are technologically behind — no real analytics, disconnected systems, spreadsheets, overwhelmed owners, thin margins.

**Our advantage:** Competitors know AI but have never operated a real business. We have.

---

## The Four Service Packages

1. **Business Health Dashboard** — Connect POS, payroll, ecommerce, analytics into one unified view. Sales trends, labor cost ratios, best/worst sellers, staffing inefficiencies.
2. **AI Reporting Assistant** — Plain-English answers using Claude/OpenAI APIs. "Why were Tuesday sales down? Which items have the highest margin?"
3. **Ecommerce Optimization** — SEO, Vercel, conversion tracking, loyalty systems. Treez background is the key credential here.
4. **Direct Ordering Platform** — Long-term play. Branded ordering, lower fees than DoorDash/Uber Eats. Build this after the first three are running.

---

## Pricing Strategy

| Stage | Price | Purpose |
|-------|-------|---------|
| Business Audit | $500–$1,500 | Door opener |
| Setup Project | $5,000–$20,000 | Primary revenue + credibility |
| Monthly Retainer | $500–$3,000/mo | Recurring revenue — this is the business |

---

## The Website

**Tech stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, Vercel

**Design:** Dark navy (`#0B1426`) + electric blue (`#0EA5E9`) + gold (`#F59E0B`) accent. DM Sans (display) + Inter (body).

**Sections (in order):** Navbar → Hero → Services → WhyUs → Industries → Pricing → Contact → Footer

**Components location:** `/Users/alex/askzeus/components/`

**Key design decisions made:**
- All four service card icons use electric blue (`text-electric-400`) — consistent, no gold on cards
- "Learn more" links removed from service cards — they didn't go anywhere
- Horizontal padding: `px-6 sm:px-10 xl:px-16` across all sections — gives proper breathing room on left/right

---

## GitHub & Deployment

- **GitHub:** `github.com/appark/askzeus` (authenticated as `appark`)
- **Vercel:** Connected to GitHub — every push to `main` auto-deploys
- **Live site:** askzeus.io
- **Contact email:** hello@askzeus.io
- **Git auth:** Use `gh auth setup-git` if push is rejected (clears old cached credentials)

---

## How We Work Together

- Always commit and push after making changes unless I say otherwise
- Keep responses short and direct — I don't need long explanations
- When I ask "what do you notice" about a screenshot, do a real visual review and flag specific issues
- Don't add features or abstractions beyond what's asked
- When suggesting changes, ask first — don't just make them
- I drop screenshots in the `images/` folder — always check the latest one when I reference it
