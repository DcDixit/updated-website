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
  title: "Contact",
  description: `Contact ${brand.shortName} - book a discovery call or send a project brief. ${brand.shortName} responds within 24 hours.`,
  path: "/contact",
  image: pageHeroVisuals.contact.src,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        description="Send a brief or book a discovery call — we respond within 24 hours on business days with a clear plan and honest next steps."
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
          <MarketingTrustSignals withTestimonials={false} withCta={false} withCertifications={false} />
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
