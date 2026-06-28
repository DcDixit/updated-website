import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconUsers,
  IconCode,
  IconShieldCheck,
  IconRocket,
} from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { LeadCaptureCta } from "@/components/marketing/lead-capture-cta";
import { MarketingImage } from "@/components/marketing/marketing-image";
import { MarketingTrustSection, MarketingTrustSignals } from "@/components/marketing/marketing-trust-signals";
import { ReviewProofBar } from "@/components/marketing/review-proof-bar";
import { SectionHeader } from "@/components/marketing/section-header";
import { TeamSection } from "@/components/marketing/team-section";
import { buttonVariants } from "@/components/ui/button";
import { brand, companyProfile, culturePoints, pillars, primaryCtas, stats, teamStats } from "@/content/site-content";
import { pageHeroVisuals, marketingSectionImages } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const pillarIcons = [IconUsers, IconCode, IconShieldCheck, IconRocket] as const;
const cultureIcons = [IconUsers, IconShieldCheck, IconRocket] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description: `${brand.legalName} - an AI-powered digital product agency founded in ${brand.founded}. 15+ in-house team serving UK SaaS and US trucking clients from Ahmedabad, India.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="15 designers and engineers. One in-house team."
        description={brand.positioning}
        visual={pageHeroVisuals.about}
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="surface-card stat-card-accent p-6 text-center">
                <p className="type-stat text-[var(--color-accent)]">{s.value}</p>
                <p className="type-stat-label mt-2">{s.label}</p>
                <p className="type-caption mt-1">{s.caption}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <SectionHeader eyebrow="Our story" title="Why we exist." />
            <div className="space-y-4">
              <p className="type-body text-[color:var(--text-secondary)]">
                {brand.shortName} started in {brand.founded} with one observation: most digital agencies sell strategy but struggle to ship. Product teams end up managing multiple vendors — one for design, another for development, a third for integrations — and paying for the gaps between them.
              </p>
              <p className="type-body text-[color:var(--text-secondary)]">
                We built an in-house team that covers the full stack — UI/UX design, web and mobile development, API integrations, and AI automation — so clients get one point of contact, one delivery standard, and no handoff theater.
              </p>
              <p className="type-body text-[color:var(--text-secondary)]">
                Today we focus on two verticals where we have depth: UK SaaS startups that need design and development to keep pace with their roadmap, and US trucking & logistics operators who need purpose-built software for dispatch, fleet, and operations.
              </p>
            </div>
          </div>
          <MarketingImage
            src={marketingSectionImages.teamCollaboration.src}
            alt={marketingSectionImages.teamCollaboration.alt}
            sizes="(max-width: 1024px) 100vw, 45vw"
            aspectClassName="aspect-[16/11]"
          />
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <SectionHeader eyebrow="Company" title="Northline at a glance." />
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-5">
                <dt className="type-caption uppercase tracking-wide">Legal entity</dt>
                <dd className="type-body mt-2 font-semibold text-foreground">{companyProfile.legalName}</dd>
              </div>
              <div className="surface-card p-5">
                <dt className="type-caption uppercase tracking-wide">Founded</dt>
                <dd className="type-body mt-2 font-semibold text-foreground">{companyProfile.founded}</dd>
              </div>
              <div className="surface-card p-5 sm:col-span-2">
                <dt className="type-caption uppercase tracking-wide">Headquarters</dt>
                <dd className="type-body mt-2 text-[color:var(--text-secondary)]">{companyProfile.headquarters}</dd>
                <dd className="type-caption mt-1">{companyProfile.hqLabel}</dd>
              </div>
              <div className="surface-card p-5 sm:col-span-2">
                <dt className="type-caption uppercase tracking-wide">How we deliver</dt>
                <dd className="type-body mt-2 text-[color:var(--text-secondary)]">{companyProfile.deliveryModel}</dd>
              </div>
            </dl>
          </div>
          <div className="surface-card space-y-4 p-6 sm:p-8">
            <p className="type-badge-label">Contact</p>
            <p className="type-body text-[color:var(--text-secondary)]">
              Reach the team directly for project briefs, discovery calls, and partnership inquiries.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={`mailto:${companyProfile.email}`} className="font-medium text-foreground hover:text-[var(--color-accent)]">
                  {companyProfile.email}
                </Link>
              </li>
              <li className="text-[color:var(--text-secondary)]">{companyProfile.phone}</li>
              <li>
                <Link
                  href={companyProfile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-accent)] hover:opacity-90"
                >
                  Northline Digital on LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="muted" dividerTop>
        <Container>
          <TeamSection />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {teamStats.map((s) => (
              <div key={s.label} className="surface-card p-5 text-center">
                <p className="type-stat text-[var(--color-accent)]">{s.value}</p>
                <p className="type-stat-label mt-2">{s.label}</p>
                <p className="type-caption mt-1">{s.caption}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="grid max-w-5xl gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <SectionHeader eyebrow="Culture" title="How we work together." />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {culturePoints.map((p, i) => {
                const CultureIcon = cultureIcons[i % cultureIcons.length]!;
                return (
                <div key={p.title} className="surface-card card-hover-rise p-6">
                  <div className="icon-container-md mb-4">
                    <CultureIcon size={20} stroke={1.5} aria-hidden />
                  </div>
                  <h3 className="type-h3">{p.title}</h3>
                  <p className="type-body mt-3 text-[color:var(--text-secondary)]">{p.body}</p>
                </div>
                );
              })}
            </div>
          </div>
          <MarketingImage
            src={marketingSectionImages.cultureWorkshop.src}
            alt={marketingSectionImages.cultureWorkshop.alt}
            sizes="360px"
            className="lg:sticky lg:top-28"
            aspectClassName="aspect-[4/5]"
          />
        </Container>
      </Section>

      <Section tone="muted" dividerTop>
        <Container>
          <SectionHeader eyebrow="Values" title="What clients can expect." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const PillarIcon = pillarIcons[i % pillarIcons.length]!;
              return (
                <div key={p.title} className="surface-card card-hover-rise flex gap-5 p-6">
                  <div className="icon-container-md shrink-0">
                    <PillarIcon size={20} stroke={1.5} aria-hidden />
                  </div>
                  <div>
                    <h3 className="type-h3">{p.title}</h3>
                    <p className="type-body mt-3 text-[color:var(--text-secondary)]">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Reviews" title="Rated by clients on Google." align="center" />
          <ReviewProofBar className="mt-10" />
        </Container>
      </Section>

      <MarketingTrustSection>
        <MarketingTrustSignals withRatings={false} withStats={false} withLogos withTestimonials />
      </MarketingTrustSection>

      <LeadCaptureCta
        eyebrow="Work with us"
        title="Tell us what you're building."
        description="Share your brief — we'll respond with a plan and relevant case studies within 24 hours."
      />
    </>
  );
}
