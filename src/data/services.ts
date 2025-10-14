export interface Service {
  title: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    title: "Website Design & Development",
    bullets: [
      "Fast, responsive sites that convert visitors to leads",
      "CMS optional; easy to update",
    ],
  },
  {
    title: "SEO & Local SEO",
    bullets: [
      "On-page, technical, Google Business Profile optimization",
      "Local citations + review strategy",
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    bullets: [
      "Speed tuning, UX fixes, landing pages, A/B tests",
    ],
  },
  {
    title: "Analytics & Tracking",
    bullets: [
      "GA4/Plausible setup, call tracking, goal funnels, dashboards",
    ],
  },
  {
    title: "Content & Copywriting",
    bullets: [
      "Service pages, blog posts, location pages that rank",
    ],
  },
  {
    title: "Maintenance & Hosting",
    bullets: [
      "Backups, updates, uptime monitoring, security hardening",
    ],
  },
];
