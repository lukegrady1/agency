import { Container } from "./Container";
import { Section } from "./Section";
import { Button } from "./ui/button";

export function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Get your free website and SEO audit today. No obligation, no sales pressure.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={scrollToContact}
            className="text-lg px-8"
          >
            Get Started Now
          </Button>
        </div>
      </Container>
    </Section>
  );
}
