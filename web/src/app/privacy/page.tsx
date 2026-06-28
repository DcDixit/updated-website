import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { brand, siteContact } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${brand.legalName} collects, uses, and protects personal information.`,
  path: "/privacy",
  image: pageHeroVisuals.privacy.src,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description={`Last updated: May 2026. This policy explains how ${brand.legalName} handles information when you visit our website or contact us about a project.`}
        visual={pageHeroVisuals.privacy}
        priority
      />

      <Section tone="default" dividerTop className="pb-24 sm:pb-32">
        <Container className="max-w-3xl space-y-8 [&_h2]:type-h3 [&_h2]:text-foreground [&_p]:type-body [&_p]:text-[color:var(--text-secondary)]">
          <section className="space-y-3">
            <h2>Overview</h2>
            <p>
              We collect only the information needed to respond to inquiries, deliver services, and improve our website.
              We do not sell personal data.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Information we collect</h2>
            <p>
              When you submit our contact form, we may collect your name, email address, company name, project details,
              budget range, timeline, and any message you provide. We also collect standard technical data such as browser
              type, device information, and pages visited through analytics tools.
            </p>
          </section>

          <section className="space-y-3">
            <h2>How we use information</h2>
            <p>
              We use contact submissions to evaluate fit, prepare proposals, schedule calls, and communicate about active
              engagements. Analytics data helps us understand site performance and improve content. We may use email
              service providers and CRM tools to manage communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Third-party services</h2>
            <p>
              Our site may use hosting, email delivery (such as Resend), analytics, scheduling embeds, and mapping services.
              These providers process data on our behalf under their own privacy policies. Links to third-party sites are
              governed by those sites&apos; policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Data retention</h2>
            <p>
              We retain inquiry records for as long as needed to respond, maintain business records, and comply with legal
              obligations. You may request deletion of marketing-related data where applicable law allows.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
              personal data, and to object to certain uses. Contact us to exercise these rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect information. No method of transmission
              over the internet is completely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Contact</h2>
            <p>
              For privacy questions or requests, email{" "}
              <a href={`mailto:${siteContact.email}`} className="font-medium text-[var(--color-accent)] hover:underline">
                {siteContact.email}
              </a>
              .
            </p>
          </section>
        </Container>
      </Section>
    </>
  );
}
