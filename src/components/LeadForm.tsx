import { useState, FormEvent } from "react";
import { Container } from "./Container";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { services } from "@/data/services";

export function LeadForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      services: selectedServices.join(", "),
      message: formData.get("message"),
    };

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
        setSelectedServices([]);
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }

    // Reset state after 5 seconds
    setTimeout(() => {
      if (formState !== "idle") {
        setFormState("idle");
      }
    }, 5000);
  };

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  return (
    <Section id="contact" className="bg-muted/30">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Audit</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help your business grow
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>

            {/* Business Name */}
            <div>
              <Label htmlFor="businessName">
                Business Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="businessName"
                name="businessName"
                type="text"
                required
                placeholder="Your business name"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Website */}
            <div>
              <Label htmlFor="website">Current Website (optional)</Label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://yourwebsite.com"
              />
            </div>

            {/* Services Interested */}
            <div>
              <Label className="mb-3 block">Services Interested In</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Checkbox
                      id={`service-${index}`}
                      checked={selectedServices.includes(service.title)}
                      onChange={() => handleServiceToggle(service.title)}
                    />
                    <label
                      htmlFor={`service-${index}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {service.title}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your goals and challenges..."
                rows={4}
              />
            </div>

            {/* Consent */}
            <div className="flex items-start space-x-2">
              <Checkbox id="consent" required />
              <label
                htmlFor="consent"
                className="text-sm leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <a href="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline hover:text-primary">
                  Terms of Service
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={formState === "submitting"}
                className="flex-1"
              >
                {formState === "submitting" ? "Sending..." : "Get Free Audit"}
              </Button>

              {/* {calendlyUrl && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.open(calendlyUrl, "_blank")}
                  className="flex-1"
                >
                  Pick a time
                </Button>
              )} */}
            </div>

            {/* Status Messages */}
            {formState === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
                Thank you! We'll be in touch soon.
              </div>
            )}

            {formState === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
                Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}
