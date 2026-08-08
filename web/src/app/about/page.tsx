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
import { SectionHeader } from "@/components/marketing/section-header";
import { TeamSection } from "@/components/marketing/team-section";
import { buttonVariants } from "@/components/ui/button";
import { brand, companyProfile, culturePoints, pillars, primaryCtas, stats, teamStats } from "@/content/site-content";
import { pageHeroVisuals, marketingSectionImages } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const pillarIcons = [IconUsers, IconCode, IconShieldCheck, IconRocket] as const;
const cultureIcons = [IconUsers, IconShieldCheck, IconRocket] as const;

const aboutTitle = `About ${brand.legalName} · Team, Story & Experience`;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: aboutTitle,
    description: brand.tagline,
    path: "/about",
  }),
  title: { absolute: aboutTitle },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A product studio built around the work we already know how to ship."
        description={brand.tagline}
        visual={pageHeroVisuals.about}
        priority
        actions={
          <>
            <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2 min-h-11")}>
              {primaryCtas.book.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href={primaryCtas.brief.href} className="type-body inline-flex min-h-11 items-center font-semibold text-[color:var(--text-secondary)] underline-offset-4 hover:underline">
              {primaryCtas.brief.label}
            </Link>
          </>
        }
      />

      {stats.length > 0 ? (
      <Section tone="muted" dividerTop>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="surface-card stat-card-accent p-6 text-center">
                <p className="type-stat text-brand-cobalt dark:text-brand-amber">{s.value}</p>
                <p className="type-stat-label mt-2">{s.label}</p>
                <p className="type-caption mt-1">{s.caption}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      ) : null}

      <Section tone="default" dividerTop>
        <Container className="grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <SectionHeader eyebrow="Our story" title="Why we exist." description={brand.mission} />
            <div className="space-y-4">
              <p className="type-body text-[color:var(--text-secondary)]">
                I&apos;ve spent the last nine years designing and building software - SaaS dashboards, trucking dispatch tools, QuickBooks integrations, mobile apps. Most of that work was done inside agencies and product companies where I watched the same problems repeat: design teams handing off specs that engineering couldn&apos;t build, clients managing three vendors for one project, and products that looked polished in Figma but fell apart in production.
              </p>
              <p className="type-body text-[color:var(--text-secondary)]">
                KRIVA started because I wanted to build a studio where design and engineering work together from day one - where the person who designs the interface understands the API it connects to, and where clients talk to the people doing the work, not a project manager relaying messages.
              </p>
              <p className="type-body text-[color:var(--text-secondary)]">
                We&apos;re based in Ahmedabad, India. Our clients are in the US, UK, and across the world. What they have in common: they need software built by people who&apos;ve already solved problems like theirs.
              </p>
              <p className="type-body font-medium text-foreground">— Dixit Panchal, Founder &amp; Design Lead</p>
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
            <SectionHeader eyebrow="Company" title="KRIVA at a glance." />
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
                <dt className="type-caption uppercase tracking-wide">Founder experience</dt>
                <dd className="type-body mt-2 text-[color:var(--text-secondary)]">{companyProfile.founderExperience}</dd>
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
              Reach us directly for project briefs, discovery calls, or just to ask a question.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={`mailto:${companyProfile.email}`} className="font-medium text-foreground hover:text-[var(--color-accent)]">
                  {companyProfile.email}
                </Link>
              </li>
              <li className="text-[color:var(--text-secondary)]">{companyProfile.phone}</li>
              {companyProfile.linkedIn ? (
              <li>
                <Link
                  href={companyProfile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-accent)] hover:opacity-90"
                >
                  KRIVA Technologies on LinkedIn
                </Link>
              </li>
              ) : null}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="muted" dividerTop>
        <Container>
          <TeamSection />
          <p className="type-body mt-8 text-[color:var(--text-secondary)]">
            Want to meet the team working on your project? We&apos;ll introduce everyone on the first call.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {teamStats.map((s) => (
              <div key={s.label} className="surface-card p-5 text-center">
                <p className="type-stat text-brand-cobalt dark:text-brand-amber">{s.value}</p>
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
            <SectionHeader eyebrow="Culture" title="How we operate." />
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
          <SectionHeader eyebrow="Values" title="What you get when you work with us." />
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

      <MarketingTrustSection>
        <MarketingTrustSignals withStats={false} withLogos withCertifications withCta />
      </MarketingTrustSection>

      <LeadCaptureCta
        eyebrow="Work with us"
        title="Tell us what you're building."
        description="Share a brief or book a discovery call. We'll respond within 24 hours with fit, questions, and a sensible next step."
      />
    </>
  );
}

