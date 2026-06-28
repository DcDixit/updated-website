import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { brand, siteContact } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description: `Terms governing use of the ${brand.shortName} website and professional services.`,
  path: "/terms",
  image: pageHeroVisuals.terms.src,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated: May 2026. These terms apply to your use of the ${brand.shortName} website. Separate statements of work govern paid engagements.`}
        visual={pageHeroVisuals.terms}
        priority
      />

      <Section tone="default" dividerTop className="pb-24 sm:pb-32">
        <Container className="max-w-3xl space-y-8 [&_h2]:type-h3 [&_h2]:text-foreground [&_p]:type-body [&_p]:text-[color:var(--text-secondary)]">
          <section className="space-y-3">
            <h2>Agreement</h2>
            <p>
              By accessing this website, you agree to these terms. If you do not agree, please do not use the site.
              {brand.legalName} (&quot;{brand.shortName}&quot;, &quot;we&quot;, &quot;us&quot;) provides design, development,
              and related digital services to business clients.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Website use</h2>
            <p>
              You may browse our site for lawful purposes. You may not attempt to disrupt the site, scrape content at scale,
              introduce malware, or misrepresent your identity when contacting us.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Professional services</h2>
            <p>
              Proposals, statements of work, and master service agreements define scope, deliverables, timelines, fees,
              acceptance criteria, and change control for paid work. Website content is informational and does not
              constitute a binding offer until confirmed in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Intellectual property</h2>
            <p>
              Site content, branding, and marketing materials remain our property unless otherwise stated. Client deliverables
              and licensing terms are specified in each engagement agreement. You retain ownership of materials you provide
              to us for project use.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Confidentiality</h2>
            <p>
              We treat non-public business information shared during discovery as confidential. Mutual confidentiality terms
              in project agreements supersede this general statement where they differ.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Disclaimers</h2>
            <p>
              The site is provided &quot;as is&quot; without warranties of uninterrupted availability. Case studies and metrics
              reflect past client results; outcomes vary by context. Third-party tools and links are not under our control.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted by law, we are not liable for indirect or consequential damages arising from use of
              this website. Liability caps for paid services are defined in the applicable client agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of India, without regard to conflict-of-law principles. Disputes will be
              subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat, unless otherwise agreed in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Contact</h2>
            <p>
              Questions about these terms:{" "}
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
