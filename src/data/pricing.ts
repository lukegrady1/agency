export interface Plan {
  name: string;
  priceSetup: number;
  priceMonthly: number;
  popular: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "Starter",
    priceSetup: 999,
    priceMonthly: 79,
    popular: false,
    features: [
      "1–3 pages, mobile-first",
      "Basic on-page SEO",
      "Hosting & maintenance",
      "Contact form + email notifications",
    ],
  },
  {
    name: "Growth",
    priceSetup: 2499,
    priceMonthly: 179,
    popular: true,
    features: [
      "Up to 8 pages + blog",
      "On-page + Local SEO setup",
      "Speed & CRO improvements",
      "Analytics dashboard",
    ],
  },
  {
    name: "Pro",
    priceSetup: 4999,
    priceMonthly: 349,
    popular: false,
    features: [
      "12+ pages, multi-location SEO",
      "Advanced CRO & A/B testing",
      "Quarterly content plan",
      "Priority support",
    ],
  },
];
