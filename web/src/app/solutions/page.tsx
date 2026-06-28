import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/marketing/section-header";
import { SolutionPillarCard } from "@/components/marketing/solution-pillar-card";
import { buttonVariants } from "@/components/ui/button";
import { primaryCtas, solutionPillars } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions · SaaS, Trucking, Integrations & Automation",
  description:
    "Digital product solutions for UK SaaS startups and US trucking companies - dispatch CRM, fleet dashboards, QuickBooks/Xero integrations, and AI automation.",
  path: "/solutions",
  image: pageHeroVisuals.solutions.src,
});

export default function SolutionsPage() {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Northline solution pages",
    itemListElement: solutionPillars.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: solution.title,
      url: solution.href,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }} />
      <PageHero
        eyebrow="Solutions"
        title="Focused product solutions for SaaS and trucking teams."
        description="Four dedicated solution areas — each with its own capabilities, delivery process, and case studies. One in-house team from discovery to launch."
        visual={pageHeroVisuals.solutions}
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
          <SectionHeader
            eyebrow="By industry"
            title="Four solutions. Each built for a specific market."
            description="Click any solution to see capabilities, delivery process, related case studies, and FAQs — before you commit to anything."
          />
          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:gap-6">
            {solutionPillars.map((solution, idx) => (
              <SolutionPillarCard
                key={solution.slug}
                title={solution.title}
                summary={solution.summary}
                market={solution.market}
                href={solution.href}
                services={solution.services}
                cta={solution.cta}
                icon={solution.icon}
                featured={idx < 2}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
