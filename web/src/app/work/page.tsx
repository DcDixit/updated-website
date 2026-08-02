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
  description: `Selected product work across UK SaaS, US trucking & logistics, CRM, and accounting integrations by ${brand.shortName}. Client details anonymized where needed.`,
  path: "/work",
  image: pageHeroVisuals.work.src,
});

type Props = { searchParams: Promise<{ tag?: string }> };

export default async function WorkPage({ searchParams }: Props) {
  const { tag } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Illustrative projects from our focus markets."
        description="Anonymized examples across UK SaaS, US trucking and logistics, CRM, QuickBooks/Xero integrations, and practical automation - with outcome metrics from delivery, not review platforms."
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
            Client names and identifying details are changed to protect confidentiality. Metrics describe project outcomes; they are not third-party ratings.
          </p>
          <WorkFilterGrid initialTag={tag ?? null} />
        </Container>
      </Section>

      <MarketingTrustSection>
        <MarketingTrustSignals withStats withLogos withCertifications />
      </MarketingTrustSection>

      <LeadCaptureCta
        eyebrow="Start a project"
        title="Building something in SaaS or trucking?"
        description="Share your goals and timeline. We'll reply within 24 hours with fit, scope questions, and a clear next step."
      />
    </>
  );
}

