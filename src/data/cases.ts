export interface CaseSnippet {
  businessType: string;
  result: string;
  whatWeDid: string[];
}

export const cases: CaseSnippet[] = [
  {
    businessType: "Barber Shop",
    result: "+58% more online bookings in the first 60 days",
    whatWeDid: [
      "Built a modern booking website integrated with AI Receptionist — no missed calls or manual scheduling needed",
      "Optimized Google Business Profile for top 3 local search rankings",
      "Reduced page load time from 2.1s → 0.8s for faster mobile performance",
    ],
  },
  {
    businessType: "Family Restaurant",
    result: "+37% more calls and direction requests in 60 days",
    whatWeDid: [
      "Redesigned a modern, mobile-first website highlighting menu, hours, and location",
      "Optimized Google Business Profile with photos, keywords, and weekly posts",
      "Added structured menu markup for rich Google results and better visibility",
    ],
  },
  {
    businessType: "General Contractor",
    result: "+63% increase in estimate requests within 90 days",
    whatWeDid: [
      "Designed a modern, mobile-friendly website with clear service pages and a inquiry form",
      "Optimized Google Business Profile with project photos, categories, and weekly updates",
      "Implemented automated review requests via text and email to boost local trust",
    ],
  },
];
