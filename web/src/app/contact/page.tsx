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

const contactTitle = `Contact ${brand.legalName} · Send a Brief or Book a Call`;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: contactTitle,
    description: `Start a project with ${brand.shortName}. Send a brief or reach out to book a 20-minute fit call. We respond within one business day.`,
    path: "/contact",
    image: pageHeroVisuals.contact.src,
  }),
  title: { absolute: contactTitle },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        description="Send a brief, or reach out to book a 20-minute fit call. We'll get back within one business day with a clear plan and honest next steps."
        visual={pageHeroVisuals.contact}
        priority
        actions={
          <>
            <Link href="#book" className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2 min-h-11")}>
              {primaryCtas.book.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href="#brief" className="type-body inline-flex min-h-11 items-center font-semibold text-[color:var(--text-secondary)] underline-offset-4 hover:underline">
              {primaryCtas.brief.label}
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

