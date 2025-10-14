import { Container } from "./Container";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Smartphone, Zap, FileCheck } from "lucide-react";
import { getCompanyName } from "@/lib/seo";

export function Hero() {
  const companyName = getCompanyName();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-background py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            {companyName} helps small businesses get more{" "}
            <span className="text-primary">calls, bookings, and sales</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 sm:text-2xl">
            Fast, modern websites + local SEO that actually moves the needle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              Get a free website & SEO audit
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
              See our services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary" className="gap-2 px-4 py-2">
              <Smartphone className="h-4 w-4" />
              Mobile-first
            </Badge>
            <Badge variant="secondary" className="gap-2 px-4 py-2">
              <Zap className="h-4 w-4" />
              &lt;2s load
            </Badge>
            <Badge variant="secondary" className="gap-2 px-4 py-2">
              <FileCheck className="h-4 w-4" />
              No long-term contracts
            </Badge>
          </div>
        </div>
      </Container>
    </section>
  );
}
