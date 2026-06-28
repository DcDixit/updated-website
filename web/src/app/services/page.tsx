import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { MarketingImage } from "@/components/marketing/marketing-image";
import { SectionHeader } from "@/components/marketing/section-header";
import { ServiceCard } from "@/components/marketing/service-card";
import { buttonVariants } from "@/components/ui/button";
import {
  primaryCtas,
  serviceCategories,
  servicesByCategory,
  type ServiceCategory,
} from "@/content/site-content";
import { pageHeroVisuals, marketingSectionImages } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "UI/UX design, SaaS product development, mobile apps, branding, AI-assisted delivery, and workflow automation — all delivered by one in-house team.",
  path: "/services",
  image: pageHeroVisuals.services.src,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Design, build, and automate - with one in-house team."
        description="From UI/UX and product design to web, mobile, SaaS, AI-assisted development, and workflow automation - we cover the full digital product lifecycle."
        visual={pageHeroVisuals.services}
        priority
        actions={
          <>
            <Link
              href={primaryCtas.brief.href}
              className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}
            >
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              {primaryCtas.book.label}
            </Link>
          </>
        }
      />

      <Section tone="default" dividerTop>
        <Container className="grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Full-stack delivery"
            title="One team from discovery to launch."
            description="Design, engineering, integrations, and automation - coordinated under one roof so your product ships faster with fewer handoffs."
          />
          <MarketingImage
            src={marketingSectionImages.servicesOverview.src}
            alt={marketingSectionImages.servicesOverview.alt}
            sizes="(max-width: 1024px) 100vw, 45vw"
            aspectClassName="aspect-[4/3]"
          />
        </Container>
      </Section>

      {serviceCategories.map((cat, index) => (
        <Section key={cat.id} tone={index % 2 === 0 ? "muted" : "default"} dividerTop={index > 0}>
          <Container>
            <SectionHeader eyebrow={cat.label} title={cat.description} />
            <div className="stagger-grid stagger-grid-visible mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByCategory(cat.id as ServiceCategory).map((s) => (
                <ServiceCard key={s.slug} title={s.title} summary={s.summary} href={`/services/${s.slug}`} slug={s.slug} />
              ))}
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="contrast" dividerTop>
        <Container>
          <div className="cta-band-premium relative overflow-hidden rounded-[var(--card-radius)] p-6 sm:p-8 lg:p-10">
            {/* Background glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-[0.08] blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl space-y-2">
                <p className="highlight-badge">
                  <span className="accent-live-dot" aria-hidden />
                  Not sure where to start?
                </p>
                <h2 className="type-h3 text-foreground">Tell us your goals — we&apos;ll recommend the right approach.</h2>
                <p className="type-body text-[color:var(--text-secondary)]">
                  A short discovery call is all it takes to get a clear scope, timeline, and honest recommendation.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryCtas.brief.href}
                  className={cn(buttonVariants({ variant: "primary", size: "cta" }), "btn-accent-glow gap-2")}
                >
                  {primaryCtas.brief.label}
                  <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
                </Link>
                <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
                  {primaryCtas.book.label}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
