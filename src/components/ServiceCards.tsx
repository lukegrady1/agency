import { Container } from "./Container";
import { Section } from "./Section";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { services } from "@/data/services";
import {
  Globe,
  Search,
  TrendingUp,
  BarChart3,
  FileText,
  Server,
} from "lucide-react";

const iconMap = {
  0: Globe,
  1: Search,
  2: TrendingUp,
  3: BarChart3,
  4: FileText,
  5: Server,
};

export function ServiceCards() {
  return (
    <Section id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to attract more customers and grow your business online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            const colors = [
              "text-purple-600 bg-purple-100",
              "text-blue-600 bg-blue-100",
              "text-indigo-600 bg-indigo-100",
              "text-violet-600 bg-violet-100",
              "text-cyan-600 bg-cyan-100",
              "text-fuchsia-600 bg-fuchsia-100",
            ];
            const colorClass = colors[index];
            return (
              <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all duration-200 border-t-4 border-t-purple-500">
                <CardHeader>
                  <div className={`mb-4 w-14 h-14 rounded-lg ${colorClass} flex items-center justify-center`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
