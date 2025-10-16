import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { StatGrid } from "@/components/StatGrid";
import { ServiceCards } from "@/components/ServiceCards";
import { CaseSnippets } from "@/components/CaseSnippets";
import { ProcessSteps } from "@/components/ProcessSteps";
// import { PricingTable } from "@/components/PricingTable"; // PRICING TEMPORARILY DISABLED
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { updatePageMeta, defaultSEO } from "@/lib/seo";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getBreadcrumbSchema,
  injectSchema,
} from "@/lib/schema";

export function Home() {
  useEffect(() => {
    // Update SEO meta tags
    updatePageMeta(defaultSEO);

    // Inject JSON-LD schemas
    injectSchema(getOrganizationSchema(), "schema-organization");
    injectSchema(getLocalBusinessSchema(), "schema-local-business");
    injectSchema(
      getBreadcrumbSchema([
        { name: "Home", url: window.location.origin },
        { name: "Services" },
        { name: "Pricing" },
        { name: "Contact" },
      ]),
      "schema-breadcrumb"
    );
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <StatGrid />
        <ServiceCards />
        <CaseSnippets />
        <ProcessSteps />
        {/* <PricingTable /> */} {/* PRICING TEMPORARILY DISABLED */}
        <FAQ />
        <CTA />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
