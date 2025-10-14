import { Container } from "./Container";
import { Section } from "./Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { plans } from "@/data/pricing";
import { Check } from "lucide-react";

export function PricingTable() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="pricing" className="bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-lg transition-all duration-200 ${
                plan.popular ? "border-2 border-purple-500 shadow-lg shadow-purple-200 scale-105" : "hover:scale-105"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  Most Popular
                </Badge>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-foreground">
                      ${plan.priceSetup}
                    </span>
                    <span className="text-muted-foreground ml-2">setup</span>
                  </div>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-semibold text-foreground">
                      ${plan.priceMonthly}
                    </span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                >
                  Book a consult
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Prices are starting points—custom quotes available.
        </p>
      </Container>
    </Section>
  );
}
