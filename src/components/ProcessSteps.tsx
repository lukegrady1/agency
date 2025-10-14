import { Container } from "./Container";
import { Section } from "./Section";
import { Search, Palette, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Audit & Plan",
    description: "We analyze your current site and competition to create a winning strategy",
    icon: Search,
  },
  {
    number: 2,
    title: "Design & Build",
    description: "Your new mobile-first website designed to convert visitors into customers",
    icon: Palette,
  },
  {
    number: 3,
    title: "Optimize & Launch",
    description: "Speed optimization, SEO setup, and a smooth launch with zero downtime",
    icon: Rocket,
  },
  {
    number: 4,
    title: "Measure & Improve",
    description: "Track results and continuously optimize for better performance",
    icon: LineChart,
  },
];

export function ProcessSteps() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven approach to getting you results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const stepColors = [
              "bg-gradient-to-br from-purple-500 to-purple-600",
              "bg-gradient-to-br from-blue-500 to-blue-600",
              "bg-gradient-to-br from-indigo-500 to-indigo-600",
              "bg-gradient-to-br from-violet-500 to-violet-600",
            ];
            return (
              <div key={step.number} className="relative">
                {/* Step number badge */}
                <div className="flex items-center mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${stepColors[step.number - 1]} text-white font-bold shadow-lg`}>
                    {step.number}
                  </div>
                  {step.number < steps.length && (
                    <div className="hidden lg:block flex-1 h-0.5 bg-border ml-4" />
                  )}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
