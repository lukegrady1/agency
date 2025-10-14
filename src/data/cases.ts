export interface CaseSnippet {
  businessType: string;
  result: string;
  whatWeDid: string[];
}

export const cases: CaseSnippet[] = [
  {
    businessType: "HVAC Contractor",
    result: "+42% qualified calls in 60 days",
    whatWeDid: [
      "Speed optimization (2.1s → 0.8s load time)",
      "Google Business Profile optimization",
      "Service area pages for 3 local cities",
    ],
  },
  {
    businessType: "Family Restaurant",
    result: "+67% online reservations in 90 days",
    whatWeDid: [
      "Mobile-first redesign with online ordering",
      "Local SEO + review generation strategy",
      "Menu schema markup for rich results",
    ],
  },
  {
    businessType: "Fitness Studio",
    result: "+89% trial class bookings",
    whatWeDid: [
      "Landing page A/B testing for CTAs",
      "Class schedule integration & schema",
      "Facebook Pixel + conversion tracking",
    ],
  },
];
