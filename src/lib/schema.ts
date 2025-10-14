const companyName = import.meta.env.VITE_COMPANY_NAME || "{{COMPANY_NAME}}";

export interface SchemaOrganization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

export interface SchemaLocalBusiness extends SchemaOrganization {
  "@type": "LocalBusiness";
  address?: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  priceRange?: string;
  openingHours?: string[];
}

export interface SchemaBreadcrumb {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export function getOrganizationSchema(): SchemaOrganization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    url: window.location.origin,
    logo: `${window.location.origin}/favicon.svg`,
    sameAs: [
      // Placeholder - replace with actual social media URLs
      "https://facebook.com/placeholder",
      "https://twitter.com/placeholder",
      "https://linkedin.com/company/placeholder",
    ],
  };
}

export function getLocalBusinessSchema(): SchemaLocalBusiness {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyName,
    url: window.location.origin,
    logo: `${window.location.origin}/favicon.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Your City",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
    telephone: "+1-555-123-4567",
    priceRange: "$$",
    openingHours: ["Mo-Fr 09:00-17:00"],
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url?: string }>): SchemaBreadcrumb {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

export function injectSchema(schema: SchemaOrganization | SchemaLocalBusiness | SchemaBreadcrumb, id: string) {
  // Remove existing schema with the same ID if it exists
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
