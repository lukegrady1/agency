# Agency Website

A modern, high-converting marketing website for digital services companies, built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Mobile-first responsive design** (360px → 1440px+)
- **Fast performance** (Lighthouse 95+ target for Performance, SEO, Best Practices)
- **Accessible** (semantic HTML, ARIA labels, keyboard navigation, skip links)
- **SEO optimized** (meta tags, OpenGraph, Twitter cards, JSON-LD schema)
- **Lead capture forms** with Formspree integration
- **Analytics ready** (Plausible or Google Analytics 4)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_COMPANY_NAME=Your Company Name
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
VITE_ANALYTICS_PROVIDER=plausible  # or 'ga4' or leave empty
VITE_ANALYTICS_DOMAIN=yourdomain.com
VITE_GA_ID=  # Only needed if using GA4
VITE_CALENDLY_URL=  # Optional: Calendly booking link
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   ├── og-default.jpg   # OpenGraph image (replace with 1200x630px image)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx   # Sticky header with nav
│   │   ├── Footer.tsx   # Footer with links
│   │   ├── Hero.tsx     # Hero section with CTAs
│   │   ├── StatGrid.tsx # Statistics/results grid
│   │   ├── ServiceCards.tsx
│   │   ├── CaseSnippets.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── PricingTable.tsx
│   │   ├── FAQ.tsx
│   │   ├── LeadForm.tsx # Contact form
│   │   └── CTA.tsx
│   ├── data/
│   │   ├── services.ts  # Service offerings
│   │   ├── stats.ts     # Impact metrics
│   │   ├── pricing.ts   # Pricing plans
│   │   ├── faqs.ts      # FAQ content
│   │   └── cases.ts     # Case studies
│   ├── lib/
│   │   ├── seo.ts       # SEO meta management
│   │   ├── schema.ts    # JSON-LD schema
│   │   └── utils.ts     # Utility functions
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── styles/
│   │   └── globals.css  # Global styles + Tailwind
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── scripts/
│   └── postbuild.js     # Post-build tasks
└── package.json
```

## Customization

### Update Company Name

Change `VITE_COMPANY_NAME` in your `.env` file. The name will appear throughout the site.

### Edit Services

Update `src/data/services.ts`:

```typescript
export const services = [
  {
    title: "Your Service",
    bullets: [
      "Benefit 1",
      "Benefit 2",
    ],
  },
  // ...
];
```

### Edit Statistics

Update `src/data/stats.ts`:

```typescript
export const stats = [
  { value: "+50%", label: "your metric" },
  // ...
];
```

### Edit Pricing

Update `src/data/pricing.ts`:

```typescript
export const plans = [
  {
    name: "Plan Name",
    priceSetup: 999,
    priceMonthly: 99,
    popular: false,
    features: ["Feature 1", "Feature 2"],
  },
  // ...
];
```

### Edit FAQs

Update `src/data/faqs.ts`:

```typescript
export const faqs = [
  {
    q: "Your question?",
    a: "Your answer.",
  },
  // ...
];
```

## Forms Setup (Formspree)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form endpoint (e.g., `https://formspree.io/f/xyzabc123`)
4. Add to `.env` as `VITE_CONTACT_ENDPOINT`

## Analytics Setup

### Plausible

1. Set `VITE_ANALYTICS_PROVIDER=plausible`
2. Set `VITE_ANALYTICS_DOMAIN=yourdomain.com`
3. Add your domain in Plausible dashboard

### Google Analytics 4

1. Set `VITE_ANALYTICS_PROVIDER=ga4`
2. Set `VITE_GA_ID=G-XXXXXXXXXX` (your GA4 Measurement ID)

## SEO Configuration

### Update Metadata

Edit `src/lib/seo.ts` to customize:
- Default page title
- Default meta description
- OpenGraph settings

### Update Schema.org Data

Edit `src/lib/schema.ts` to update:
- Business address
- Phone number
- Opening hours
- Social media links

### Update Sitemap

Edit `public/sitemap.xml`:
- Replace `https://example.com` with your domain
- Update `lastmod` dates
- Add any additional pages

### Update Robots.txt

Edit `public/robots.txt`:
- Replace sitemap URL with your domain

## Deployment

### GitHub Pages (Automated with GitHub Actions)

This project includes automated deployment to GitHub Pages via GitHub Actions.

#### Initial Setup

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Configure environment secrets** (optional, for production):
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add the following secrets:
     - `VITE_CONTACT_ENDPOINT` (your Formspree URL)
     - `VITE_ANALYTICS_PROVIDER` (e.g., `plausible` or `ga4`)
     - `VITE_ANALYTICS_DOMAIN` (your domain)
     - `VITE_GA_ID` (if using GA4)
     - `VITE_CALENDLY_URL` (optional)

4. **Update base path** (if not using custom domain):
   - Set the `VITE_BASE_PATH` environment variable in the workflow or update `.env`:
     ```env
     VITE_BASE_PATH=/your-repo-name/
     ```

#### How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Automatically trigger on push to `main` branch
- Install dependencies and build the project
- Deploy to GitHub Pages

After pushing, your site will be available at:
- Custom domain: `https://yourdomain.com`
- GitHub Pages: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

#### Manual Deployment

You can also deploy manually using the `gh-pages` package:

```bash
npm run deploy
```

**Note**: For manual deployment, update `vite.config.ts` to set the correct base path:
```typescript
base: '/your-repo-name/',
```

### Vercel (Alternative)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

No additional configuration needed.

### Netlify (Alternative)

1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

## Performance Optimization

- Images: Replace placeholder `og-default.jpg` with optimized 1200x630px image
- Icons: All icons use lucide-react (tree-shakeable)
- Code splitting: Handled automatically by Vite
- CSS: Tailwind purges unused styles in production

## Accessibility Testing

Run axe DevTools or Lighthouse in Chrome:
1. Open site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run audit with "Accessibility" selected

## Quality Gates

Before deploying, ensure:
- ✅ Lighthouse Performance ≥ 95
- ✅ Lighthouse SEO ≥ 95
- ✅ Lighthouse Best Practices ≥ 95
- ✅ Lighthouse Accessibility ≥ 95
- ✅ No axe violations (serious/critical)
- ✅ Test at 360px, 768px, 1024px, 1280px, 1440px
- ✅ Form submission works (test success and error states)
- ✅ All links and navigation work
- ✅ Skip link works (press Tab on homepage)

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
