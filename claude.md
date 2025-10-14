# claude.md — Build a High-Converting Agency Website (Responsive)

You are Claude Code. Build a **modern, fast, mobile-first marketing website** for a digital services company. The company name is **{{COMPANY_NAME}}** (use this exact placeholder everywhere). The goal is to convert small-business visitors into leads.

## Tech Stack & Targets
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Icons:** lucide-react
- **Forms:** Formspree (or simple POST endpoint) with `.env` placeholder
- **Analytics:** Plausible or Google Analytics via `.env` placeholder
- **SEO:** Meta + OpenGraph + JSON-LD, sitemap, robots.txt
- **Performance Targets:** Lighthouse 95+ (Perf, Best Practices, SEO), CLS < 0.05, LCP < 2.5s on 4G
- **Accessibility:** Pass axe basic checks; semantic HTML; focus states; skip link

## High-Level Requirements
1. **Pages**
   - `/` (Home/landing): Hero, Social proof, Services, “Why us” stats, Case snippets, Process, Pricing, FAQ, CTA, Contact.
   - `/privacy`, `/terms` (basic policy pages).
2. **Responsive**
   - Mobile-first; looks great from 360px → ≥1440px. Use fluid spacing, stacked → grid on md+.
3. **Copy**
   - Use clear, benefits-driven copy aimed at **small local businesses** (restaurants, contractors, salons, gyms, clinics).
   - Keep tone confident but not hypey.

## Services (list clearly)
Use this exact list and make each service its own card with icon + short value bullets:
- **Website Design & Development**
  - Fast, responsive sites that convert visitors to leads
  - CMS optional; easy to update
- **SEO & Local SEO**
  - On-page, technical, Google Business Profile optimization
  - Local citations + review strategy
- **Conversion Rate Optimization (CRO)**
  - Speed tuning, UX fixes, landing pages, A/B tests
- **Analytics & Tracking**
  - GA4/Plausible setup, call tracking, goal funnels, dashboards
- **Content & Copywriting**
  - Service pages, blog posts, location pages that rank
- **Maintenance & Hosting**
  - Backups, updates, uptime monitoring, security hardening

## “Why Us” Stats (realistic placeholders)
Display these in a **Stats/Impact** section with badges and short one-liners. Include footnote text “Based on recent client results; replace with verified metrics.”
- **+38%** average increase in monthly leads within 90 days
- **-53%** improvement in page load time after optimization
- **4.9/5** average client satisfaction score
- **+24%** average conversion rate lift from CRO changes
- **#1–#3** Local Pack rankings achieved for core keywords (typical after 8–12 weeks)

> Put the above numbers in a JSON data file so they’re easy to update later.

## Hero Section
- Headline: “{{COMPANY_NAME}} helps small businesses get more calls, bookings, and sales.”
- Subheadline: “Fast, modern websites + local SEO that actually moves the needle.”
- Primary CTA button: “Get a free website & SEO audit”
- Secondary CTA: “See pricing”
- Add 3 trust badges (e.g., “Mobile-first,” “<2s load,” “No long-term contracts”)

## Social Proof
- Row of small grayscale logos labeled “Trusted by local businesses” (use placeholders).
- Space for 2–3 short testimonials (seed with tasteful lorem; no fake names).

## Case Snippets (on Home)
Three cards, each with:
- Business type (e.g., “HVAC Contractor”)
- Result (“+42% qualified calls in 60 days”)
- 2–3 bullet “What we did” (speed fixes, GBP optimization, service pages)

## Process (4 steps)
1. **Audit & Plan** → 2. **Design & Build** → 3. **Optimize & Launch** → 4. **Measure & Improve**

## Pricing (transparent, small-biz friendly)
Three cards: **Starter**, **Growth (Most Popular)**, **Pro**
- **Starter** ($999 setup + $79/mo): 1–3 pages, mobile-first, basic SEO, hosting & maintenance.
- **Growth** ($2,499 setup + $179/mo): up to 8 pages, on-page SEO + local SEO setup, speed/CRO, blog, analytics dashboard.
- **Pro** ($4,999 setup + $349/mo): 12+ pages, multi-location SEO, advanced CRO tests, content plan, priority support.
Each card: features list, CTA “Book a consult,” small footnote “Prices are starting points—custom quotes available.”

## Contact & Lead Capture
- **Sticky top CTA** “Free Audit”
- **Inline mini-form** in hero and a full **contact form** near footer:
  - Name, Business Name, Email, Phone (optional), Website (optional), Services Interested (multi-select), Message
  - Consent checkbox for terms/privacy
  - Success + error states
- Add a **calendlyUrl** placeholder (env) for optional “Pick a time” button.

## Footer
- Company placeholder details + quick links (Services, Pricing, FAQ, Privacy, Terms)
- Social icons (lucide) with `#` hrefs
- Copyright auto-year

## SEO & Assets
- Title/description templates; OpenGraph + Twitter cards (default OG image)
- `sitemap.xml`, `robots.txt`
- JSON-LD:
  - Organization
  - LocalBusiness (with placeholder address/phone)
  - BreadcrumbList
- Favicon + mask icon placeholders

## Accessibility
- Skip-to-content link
- Accessible labels on forms
- Focus outlines visible
- Sufficient color contrast (Tailwind tokens)

## File Structure
Create this exact structure:
/ (repo root)
├─ .env.example
├─ index.html
├─ vite.config.ts
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ public/
│ ├─ favicon.svg
│ ├─ og-default.jpg
│ ├─ logos/placeholder-.svg
│ ├─ robots.txt
│ └─ sitemap.xml (generated at build or static placeholder)
├─ src/
│ ├─ main.tsx
│ ├─ App.tsx
│ ├─ lib/
│ │ ├─ seo.ts
│ │ └─ schema.ts
│ ├─ data/
│ │ ├─ services.ts
│ │ ├─ stats.ts
│ │ ├─ faqs.ts
│ │ └─ pricing.ts
│ ├─ components/
│ │ ├─ ui/ (shadcn generated)
│ │ ├─ Header.tsx
│ │ ├─ Footer.tsx
│ │ ├─ Container.tsx
│ │ ├─ Section.tsx
│ │ ├─ Hero.tsx
│ │ ├─ StatGrid.tsx
│ │ ├─ ServiceCards.tsx
│ │ ├─ CaseSnippets.tsx
│ │ ├─ ProcessSteps.tsx
│ │ ├─ PricingTable.tsx
│ │ ├─ FAQ.tsx
│ │ ├─ LeadForm.tsx
│ │ └─ CTA.tsx
│ ├─ pages/
│ │ ├─ Home.tsx
│ │ ├─ Privacy.tsx
│ │ └─ Terms.tsx
│ ├─ styles/
│ │ └─ globals.css
│ └─ router.tsx
└─ README.md

bash
Copy code

## Data Files (populate with placeholders)

`src/data/services.ts`
```ts
export const services = [
  { title: "Website Design & Development", bullets: [
    "Fast, responsive sites that convert visitors to leads",
    "CMS optional; easy to update",
  ]},
  { title: "SEO & Local SEO", bullets: [
    "On-page, technical, Google Business Profile optimization",
    "Local citations + review strategy",
  ]},
  { title: "Conversion Rate Optimization (CRO)", bullets: [
    "Speed tuning, UX fixes, landing pages, A/B tests",
  ]},
  { title: "Analytics & Tracking", bullets: [
    "GA4/Plausible setup, call tracking, goal funnels, dashboards",
  ]},
  { title: "Content & Copywriting", bullets: [
    "Service pages, blog posts, location pages that rank",
  ]},
  { title: "Maintenance & Hosting", bullets: [
    "Backups, updates, uptime monitoring, security hardening",
  ]},
];
src/data/stats.ts

ts
Copy code
export const stats = [
  { value: "+38%", label: "avg. more monthly leads in 90 days" },
  { value: "-53%", label: "faster page loads after optimization" },
  { value: "4.9/5", label: "average client satisfaction" },
  { value: "+24%", label: "avg. conversion rate lift via CRO" },
  { value: "#1–#3", label: "Local Pack ranks for core keywords" },
];
export const disclaimer = "Based on recent client results; replace with verified metrics.";
src/data/pricing.ts

ts
Copy code
export const plans = [
  { name: "Starter", priceSetup: 999, priceMonthly: 79, popular: false, features: [
    "1–3 pages, mobile-first",
    "Basic on-page SEO",
    "Hosting & maintenance",
    "Contact form + email notifications",
  ]},
  { name: "Growth", priceSetup: 2499, priceMonthly: 179, popular: true, features: [
    "Up to 8 pages + blog",
    "On-page + Local SEO setup",
    "Speed & CRO improvements",
    "Analytics dashboard",
  ]},
  { name: "Pro", priceSetup: 4999, priceMonthly: 349, popular: false, features: [
    "12+ pages, multi-location SEO",
    "Advanced CRO & A/B testing",
    "Quarterly content plan",
    "Priority support",
  ]},
];
src/data/faqs.ts

ts
Copy code
export const faqs = [
  { q: "How long does a new site take?", a: "Typically 2–4 weeks for Starter, 4–6 weeks for Growth/Pro." },
  { q: "Do you require long-term contracts?", a: "No. Month-to-month with the option to cancel anytime." },
  { q: "Can you work with my existing site?", a: "Yes—happy to audit and upgrade what you already have." },
  { q: "What about ongoing SEO?", a: "We offer monthly optimization and reporting to keep you competitive." },
];
Env & Config
.env.example

makefile
Copy code
VITE_COMPANY_NAME={{COMPANY_NAME}}
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-id-or-api  # replace
VITE_ANALYTICS_PROVIDER=plausible                           # or 'ga4' or ''
VITE_ANALYTICS_DOMAIN=example.com
VITE_CALENDLY_URL=                                          # optional
src/lib/seo.ts

Export a defaultSEO object using VITE_COMPANY_NAME, build title templates, description, canonical, OG.

src/lib/schema.ts

Export functions returning JSON-LD for Organization and LocalBusiness with placeholder address/phone; Breadcrumbs for Home → Section anchors.

Components (acceptance details)
Header.tsx: Sticky on scroll; logo text uses {{COMPANY_NAME}}; nav links anchor to #services, #work, #pricing, #faq, #contact; CTA button “Free Audit”.

Hero.tsx: Headline/subhead + primary/secondary CTAs, responsive image or pattern background (no heavy media).

StatGrid.tsx: Uses stats data; grid on md+, stacked on mobile; includes disclaimer.

ServiceCards.tsx: Cards with lucide icons; 2-col on md, 3-col on lg.

CaseSnippets.tsx: 3 cards with result metric + bullets.

ProcessSteps.tsx: horizontal on md+, vertical on mobile; arrows or step numbers.

PricingTable.tsx: 3 cards; highlight “Growth”; include setup + monthly prices; CTA scrolls to contact.

FAQ.tsx: accordion from shadcn/ui.

LeadForm.tsx: Validates required fields; POSTs to VITE_CONTACT_ENDPOINT; success and error states.

CTA.tsx: Full-width strip with big headline + button near footer.

All components accept props where sensible and pull text from src/data/* when possible.

Routing
Basic file router with React Router. Home is /, Privacy /privacy, Terms /terms.

Analytics
If VITE_ANALYTICS_PROVIDER === 'plausible', inject Plausible script with VITE_ANALYTICS_DOMAIN.

If 'ga4', load GA4 with an env G-ID (add a second env like VITE_GA_ID if needed).

Build & Scripts
Create npm scripts:

json
Copy code
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && node scripts/postbuild.js",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx"
  }
}
Add scripts/postbuild.js to copy robots.txt and ensure sitemap.xml exists.

README
Include:

Quick start (npm i; npm run dev)

How to update {{COMPANY_NAME}} via .env

Where to edit services, stats, pricing, FAQs

How to set up Formspree/Plausible/GA4

Deployment instructions (GitHub Pages or Vercel). For GH Pages, set base in vite.config.ts and use gh-pages npm package; for Vercel, no config needed.

Quality Gates
Run Lighthouse on mobile emulation, ensure ≥95 across Perf/SEO/BP

Run axe browser extension: 0 serious violations

Test at widths: 360, 768, 1024, 1280, 1440

Verify form submit success & failure states

Deliverables
Complete React + Vite + TS project with Tailwind + shadcn configured.

All sections populated with placeholder text and realistic metrics (from src/data/*).

Working contact form POSTing to VITE_CONTACT_ENDPOINT.

SEO (meta, OG/Twitter), JSON-LD, sitemap, robots.txt, favicon.

README with setup + deploy steps.

Stretch (optional, if time permits)
Add a simple “Free Audit” modal that asks for site URL and goals, then sends with the contact form payload.

Add a lightweight blog index page with 2–3 placeholder posts to demonstrate layout.

Important: Keep the codebase clean, typed, and production-ready. Prioritize performance and accessibility.
