import { Container } from "./Container";
import { Section } from "./Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cases } from "@/data/cases";

export function CaseSnippets() {
  return (
    <Section id="work" className="bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recent Results</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => {
            const badgeColors = [
              "bg-purple-100 text-purple-700 border-purple-200",
              "bg-blue-100 text-blue-700 border-blue-200",
              "bg-indigo-100 text-indigo-700 border-indigo-200",
            ];
            return (
              <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all duration-200">
                <CardHeader>
                  <Badge variant="outline" className={`w-fit mb-2 ${badgeColors[index]}`}>
                    {caseItem.businessType}
                  </Badge>
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {caseItem.result}
                  </CardTitle>
                <CardDescription className="text-sm font-semibold mt-2">
                  What we did:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {caseItem.whatWeDid.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 text-purple-600">✓</span>
                      <span>{item}</span>
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
