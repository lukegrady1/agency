import { useState, useEffect } from "react";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { getCompanyName } from "@/lib/seo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const companyName = getCompanyName();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-40 w-full border-b transition-all ${
          isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-xl font-bold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                {companyName}
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:underline"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:underline"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:underline"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:underline"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <Button onClick={() => scrollToSection("contact")}>Free Audit</Button>
          </div>
        </Container>
      </header>
    </>
  );
}
