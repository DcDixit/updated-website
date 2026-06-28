import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { LeadCaptureCta } from "@/components/marketing/lead-capture-cta";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { industries, primaryCtas } from "@/content/site-content";
import { industryVisuals, pageHeroVisuals } from "@/content/visuals";
import { getIndustrySolutionLink, getIndustryWorkLink } from "@/lib/case-studies";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries · SaaS, Trucking, Integrations & CRM",
  description:
    "How Northline delivers for UK SaaS, US trucking, accounting integrations, car transportation, and CRM — with case studies and tailored playbooks.",
  path: "/industries",
  image: pageHeroVisuals.industries.src,
});

const industryIds = ["saas", "trucking", "accounting", "car-transport", "crm"] as const;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Five markets. Purpose-built delivery for each."
        description="We don't generalize. Each industry below has its own dedicated case studies, solution page, and delivery approach — so you can see exactly how we work in your market before reaching out."
        visual={pageHeroVisuals.industries}
        priority
        actions={
          <>
            <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}>
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href="/solutions" className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              View solutions
            </Link>
          </>
        }
      />

      <Section tone="muted" dividerTop>
        <Container className="max-w-5xl space-y-8">
          {industries.map((item, idx) => {
            const id = industryIds[idx] ?? "saas";
            const cover = industryVisuals[id];
            const solutionHref = getIndustrySolutionLink(id);
            const workHref = getIndustryWorkLink(id);

            return (
              <article
                key={item.href}
                id={id}
                className={cn(
                  "surface-card card-hover-rise scroll-mt-[var(--header-offset)] overflow-hidden",
                  idx % 2 === 1 && "lg:flex-row-reverse",
                  "flex flex-col lg:flex-row"
                )}
              >
                <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:min-h-[240px] lg:w-2/5">
                  <Image src={cover.src} alt={cover.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <h2 className="type-h3">{item.label}</h2>
                  <p className="type-body mt-3 max-w-none text-[color:var(--text-secondary)]">{item.caption}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link href={solutionHref} className="type-body inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
                      View solution
                      <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
                    </Link>
                    <Link href={workHref} className="type-body inline-flex items-center gap-2 text-[color:var(--text-secondary)] hover:text-foreground">
                      Related work
                      <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </Section>

      <LeadCaptureCta
        eyebrow="Your market"
        title="Working in a market we haven't listed?"
        description="Share your product and constraints — we'll tell you honestly whether we're the right fit and show you relevant examples if we are."
      />
    </>
  );
}
