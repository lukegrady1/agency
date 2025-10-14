const companyName = import.meta.env.VITE_COMPANY_NAME || "{{COMPANY_NAME}}";

export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const defaultSEO: SEOMeta = {
  title: `${companyName} | Fast Websites + Local SEO for Small Businesses`,
  description: "We help small businesses get more calls, bookings, and sales with modern websites, local SEO, and conversion optimization. No long-term contracts.",
  ogImage: "/og-default.jpg",
  ogType: "website",
};

export function updatePageMeta(meta: Partial<SEOMeta>) {
  const fullMeta = { ...defaultSEO, ...meta };

  // Update title
  document.title = fullMeta.title;

  // Update meta description
  updateMetaTag("name", "description", fullMeta.description);

  // Update canonical
  if (fullMeta.canonical) {
    updateLinkTag("rel", "canonical", fullMeta.canonical);
  }

  // Update Open Graph tags
  updateMetaTag("property", "og:title", fullMeta.title);
  updateMetaTag("property", "og:description", fullMeta.description);
  updateMetaTag("property", "og:type", fullMeta.ogType || "website");
  if (fullMeta.ogImage) {
    updateMetaTag("property", "og:image", fullMeta.ogImage);
  }

  // Update Twitter Card tags
  updateMetaTag("name", "twitter:card", "summary_large_image");
  updateMetaTag("name", "twitter:title", fullMeta.title);
  updateMetaTag("name", "twitter:description", fullMeta.description);
  if (fullMeta.ogImage) {
    updateMetaTag("name", "twitter:image", fullMeta.ogImage);
  }
}

function updateMetaTag(attribute: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function updateLinkTag(attribute: string, attributeValue: string, href: string) {
  let element = document.querySelector(`link[${attribute}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function getCompanyName(): string {
  return companyName;
}
