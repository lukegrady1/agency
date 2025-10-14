import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { updatePageMeta } from "@/lib/seo";
import { getCompanyName } from "@/lib/seo";

export function Terms() {
  const companyName = getCompanyName();

  useEffect(() => {
    updatePageMeta({
      title: `Terms of Service | ${companyName}`,
      description: `Terms of service for ${companyName}. Read our terms and conditions for using our website and services.`,
    });
  }, [companyName]);

  return (
    <>
      <Header />
      <main id="main-content" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using the website and services provided by {companyName}, you
                agree to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <p>
                {companyName} provides website design, development, SEO, and digital marketing
                services to small businesses. The specific scope of services will be outlined in
                individual service agreements or proposals.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 mt-4">
                <li>Setup fees are due upon signing the service agreement</li>
                <li>Monthly fees are billed in advance on a recurring basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Services may be suspended for non-payment</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
              <p>
                Unless otherwise specified in your service agreement, our services are provided on
                a month-to-month basis. You may cancel at any time with 30 days written notice.
                Setup fees are non-refundable.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p>
                Upon full payment, you will own the final deliverables created specifically for
                your project. We retain the right to use generic components, code libraries, and
                design elements in future projects. We also reserve the right to showcase your
                project in our portfolio.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Provide timely feedback and materials needed for your project</li>
                <li>Ensure you have rights to any content you provide to us</li>
                <li>Maintain accurate and up-to-date billing information</li>
                <li>Use our services in compliance with all applicable laws</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Warranties and Disclaimers</h2>
              <p>
                While we strive to deliver high-quality services, we make no guarantees regarding
                specific ranking improvements or traffic increases. Results may vary based on
                numerous factors outside our control, including market competition and search
                engine algorithm changes.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {companyName} shall not be liable for any
                indirect, incidental, special, or consequential damages arising from the use of our
                services.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of
                significant changes via email or through our website. Continued use of our services
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us through our website
                contact form.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
