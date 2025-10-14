import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { updatePageMeta } from "@/lib/seo";
import { getCompanyName } from "@/lib/seo";

export function Privacy() {
  const companyName = getCompanyName();

  useEffect(() => {
    updatePageMeta({
      title: `Privacy Policy | ${companyName}`,
      description: `Privacy policy for ${companyName}. Learn how we collect, use, and protect your personal information.`,
    });
  }, [companyName]);

  return (
    <>
      <Header />
      <main id="main-content" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                {companyName} ("we", "our", or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, business name,
                  and website URL that you provide when contacting us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you access and use our website,
                  including your IP address, browser type, and pages visited.
                </li>
                <li>
                  <strong>Cookies:</strong> We may use cookies and similar tracking technologies to
                  track activity on our website and hold certain information.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver services you request from us</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns and optimize user experience</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
              <p>
                We may share your information with third parties only in the ways described in this
                policy:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>With service providers who assist us in operating our website and business</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect
                your personal information. However, no method of transmission over the Internet is
                100% secure.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us through our
                website contact form.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
