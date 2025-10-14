import { Container } from "./Container";
import { Section } from "./Section";
import { stats, disclaimer } from "@/data/stats";

export function StatGrid() {
  return (
    <Section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Results That Matter</h2>
          <p className="text-lg opacity-90">
            Real impact for businesses like yours
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-8 opacity-75">{disclaimer}</p>
      </Container>
    </Section>
  );
}
