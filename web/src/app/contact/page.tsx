import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { ContactForm } from "@/components/contact/contact-form";
import { ContactSidebar } from "@/components/contact/contact-sidebar";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { MarketingTrustSignals } from "@/components/marketing/marketing-trust-signals";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { buttonVariants } from "@/components/ui/button";
import { brand, primaryCtas } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact · Book a discovery call",
  description: `Contact ${brand.shortName} to book a discovery call or send a project brief for UK SaaS or US trucking software. We reply within 24 hours on business days.`,
  path: "/contact",
  image: pageHeroVisuals.contact.src,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        description="Book a 30-minute discovery call or send a brief. We reply within 24 hours on business days with fit, questions, and honest next steps — no fabricated pressure tactics."
        visual={pageHeroVisuals.contact}
        priority
        actions={
          <>
            <Link href="#brief" className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}>
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href="#book" className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              {primaryCtas.book.label}
            </Link>
          </>
        }
      />

      <Section tone="muted" dividerTop>
        <Container className="max-w-6xl">
          <MarketingTrustSignals withCta={false} withCertifications={false} withLogos={false} />
        </Container>
      </Section>

      <Section tone="default" dividerTop className="!pb-[var(--space-section-hero)]">
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <ContactSidebar />
            <ErrorBoundary>
              <ContactForm />
            </ErrorBoundary>
          </div>
        </Container>
      </Section>
    </>
  );
}
