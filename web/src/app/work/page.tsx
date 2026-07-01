import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LeadCaptureCta } from "@/components/marketing/lead-capture-cta";
import { MarketingTrustSection, MarketingTrustSignals } from "@/components/marketing/marketing-trust-signals";
import { WorkFilterGrid } from "@/components/marketing/work-filter-grid";
import { buttonVariants } from "@/components/ui/button";
import { brand, primaryCtas } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Work · SaaS, Trucking, CRM & Integrations",
  description: `Case studies across SaaS, trucking & logistics, CRM, integrations, and AI automation by ${brand.shortName}.`,
  path: "/work",
  image: pageHeroVisuals.work.src,
});

type Props = { searchParams: Promise<{ tag?: string }> };

export default async function WorkPage({ searchParams }: Props) {
  const { tag } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Products we've designed, built, and shipped."
        description="Case studies across SaaS, US trucking & logistics, CRM, QuickBooks/Xero integrations, and AI automation - with measurable outcomes."
        visual={pageHeroVisuals.work}
        priority
        actions={
          <>
            <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}>
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              {primaryCtas.book.label}
            </Link>
          </>
        }
      />

      <Section tone="muted" dividerTop>
        <Container>
          <p className="type-caption mb-8 max-w-2xl text-[color:var(--text-secondary)]">
            Client names and some project details are changed to protect confidentiality. Metrics shown are representative of actual delivery outcomes.
          </p>
          <WorkFilterGrid initialTag={tag ?? null} />
        </Container>
      </Section>

      <MarketingTrustSection>
        <MarketingTrustSignals withRatings withStats withLogos withCertifications withTestimonials />
      </MarketingTrustSection>

      <LeadCaptureCta
        eyebrow="Start a project"
        title="Want results like these for your product?"
        description="Share your goals and timeline - we'll outline a clear path forward."
      />
    </>
  );
}
