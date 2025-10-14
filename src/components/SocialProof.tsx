import { Container } from "./Container";

export function SocialProof() {
  // Placeholder logos - replace with actual client logos
  const logos = [
    "Client Logo 1",
    "Client Logo 2",
    "Client Logo 3",
    "Client Logo 4",
    "Client Logo 5",
  ];

  const testimonials = [
    {
      quote: "Our phone hasn't stopped ringing since the new site launched. The local SEO work really paid off.",
      author: "Small Business Owner",
      business: "Local Service Provider",
    },
    {
      quote: "Finally, a website that loads fast and looks professional. Our bounce rate dropped significantly.",
      author: "Restaurant Owner",
      business: "Family Restaurant",
    },
    {
      quote: "The team delivered exactly what they promised. Great communication and results-focused approach.",
      author: "Gym Owner",
      business: "Fitness Studio",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <Container>
        {/* Logo Bar */}
        <div className="mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">
            Trusted by local businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-sm font-semibold text-muted-foreground grayscale"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border shadow-sm"
            >
              <p className="text-sm mb-4 italic text-muted-foreground">
                "{testimonial.quote}"
              </p>
              <div className="text-sm">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
