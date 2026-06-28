import Link from "next/link";

import {
  IconArrowUpRight,
  IconChevronDown,
  IconShieldCheck,
  IconStar,
  IconUsers,
  IconBrandGithub,
} from "@tabler/icons-react";

import { HomeIndustrySpotlights } from "@/components/home/home-industry-spotlights";
import { HomeClientLogoStrip } from "@/components/home/client-logo-strip";
import { HomeCaseStudyCard } from "@/components/home/home-case-study-card";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";
import { ProcessSection } from "@/components/home/process-section";
import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { AnimatedStatValue } from "@/components/marketing/animated-stat-value";
import { MarketingImage } from "@/components/marketing/marketing-image";
import { Reveal } from "@/components/marketing/reveal";
import { ReviewProofBar } from "@/components/marketing/review-proof-bar";
import { SectionHeader } from "@/components/marketing/section-header";
import { HomeSolutionsSection } from "@/components/home/home-solutions-section";
import { TechMarquee } from "@/components/marketing/tech-marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { HeroCtaGroup } from "@/components/marketing/hero-cta-group";
import { HeroEyebrow } from "@/components/marketing/hero-eyebrow";
import {
  faqHome,
  featuredCaseStudies,
  homeHero,
  homepageSolutionSections,
  primaryCtas,
  brand,
} from "@/content/site-content";
import {
  homepageAiTools,
  homepageClients,
  homepageProcessSteps,
  homepageStats,
  homepageTestimonials,
  type HomepageCaseStudySlug,
} from "@/data/homepage";
import { pageHeroVisuals } from "@/content/visuals";
import { faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

function HeroHeadline({ headline, emphasis }: { headline: string; emphasis?: string }) {
  if (!emphasis) return <>{headline}</>;
  const idx = headline.indexOf(emphasis);
  if (idx < 0) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, idx)}
      <span className="text-[var(--color-accent)]">{emphasis}</span>
      {headline.slice(idx + emphasis.length)}
    </>
  );
}

const heroTrustSignals = [
  { icon: IconStar, label: "5.0★ on Google" },
  { icon: IconUsers, label: "15+ in-house team" },
  { icon: IconShieldCheck, label: "NDA-first" },
];

const differentiators = [
  {
    icon: IconUsers,
    title: "One team, end to end",
    body: "Design and engineering under one roof — fewer handoffs, faster decisions, and a consistent quality standard from first wireframe to launch.",
  },
  {
    icon: IconBrandGithub,
    title: "You own everything",
    body: "All Figma files, repositories, and documentation are transferred to you. No lock-in, no vendor dependency after delivery.",
  },
  {
    icon: IconShieldCheck,
    title: "Transparent by default",
    body: "Weekly demos, shared Figma and GitHub access, written briefs, and honest tradeoffs. You see every decision as it's made.",
  },
  {
    icon: IconArrowUpRight,
    title: "AI-accelerated delivery",
    body: "We use Claude, Copilot, and Figma AI to move faster — always with experienced human review before anything reaches your product.",
  },
];

export function HomeMarketing() {
  const homeFaq = faqHome.slice(0, 5);
  const homeFaqSchema = faqJsonLd(homeFaq);
  const homePageSchema = webPageJsonLd({
    title: `${brand.shortName} · SaaS & Trucking Digital Product Agency`,
    description: brand.positioning,
    path: "/",
  });
  const solutionListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Northline core solution areas",
    itemListElement: homepageSolutionSections.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: item.href,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionListSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <SectionShell
        id="hero"
        size="hero"
        className="hero-dot-grid hero-mesh-bg relative overflow-hidden !py-[clamp(3rem,5.5vw,4.75rem)]"
      >
        {/* Subtle radial gradient accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-[0.05] blur-3xl dark:opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
        <Reveal>
          <Container className="relative z-[1]">
            <div className="grid-layout-12 items-center gap-y-8 lg:gap-y-0">
              <div className="col-span-12 flex flex-col gap-4 lg:col-span-6 lg:pr-4">
                <HeroEyebrow>{homeHero.eyebrowBadge}</HeroEyebrow>

                <h1 className="type-hero text-foreground text-balance">
                  <HeroHeadline headline={homeHero.headline} emphasis={homeHero.headlineEmphasis} />
                </h1>

                <p className="type-lead max-w-xl text-[color:var(--text-body)]">{homeHero.lead}</p>

                <div className="mt-2">
                  <HeroCtaGroup trackingLocation="home-hero" />
                </div>

                {/* Trust signal pills */}
                <div className="flex flex-wrap gap-3 pt-1" aria-label="Trust signals">
                  {heroTrustSignals.map(({ icon: TrustIcon, label }) => (
                    <span key={label} className="trust-badge">
                      <TrustIcon size={13} stroke={1.75} aria-hidden />
                      {label}
                    </span>
                  ))}
                </div>

                <p className="type-caption max-w-xl text-[color:var(--text-body)] opacity-60">
                  {homeHero.leadDetail}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <MarketingImage
                  src={pageHeroVisuals.home.src}
                  alt={pageHeroVisuals.home.alt}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  aspectClassName="aspect-[16/10] min-h-[200px] w-full max-lg:max-h-[280px]"
                />
              </div>
            </div>
          </Container>
        </Reveal>

        <div className="mt-8 flex justify-center lg:mt-10">
          <a
            href="#solutions"
            className="link-subtle type-caption flex flex-col items-center gap-1 text-[color:var(--text-secondary)]"
          >
            <span className="sr-only">Scroll to solutions</span>
            <span aria-hidden>Explore solutions</span>
            <IconChevronDown size={18} stroke={1.5} className="marketing-scroll-hint opacity-70" />
          </a>
        </div>
      </SectionShell>

      {/* ── TECH / PLATFORM STRIP ─────────────────────────────────── */}
      <HomeClientLogoStrip clients={homepageClients} />

      {/* ── TRUST + STATS (prominent band) ─────────────────────────── */}
      <SectionShell id="trust" size="default" className="section-mint" bordered={false}>
        <Reveal>
          <Container className="space-y-8">
            <ReviewProofBar variant="compact" />
            <div className="surface-card stat-card-accent flex flex-col divide-y divide-[var(--section-divider)] md:flex-row md:divide-x md:divide-y-0">
              {homepageStats.map((s) => (
                <div
                  key={s.label}
                  className="group flex flex-1 flex-col items-center px-6 py-10 text-center transition-colors hover:bg-[var(--color-accent-soft)]/50 md:py-8"
                >
                  <p className="tabular-nums">
                    <AnimatedStatValue value={s.value} className="type-stat text-[var(--color-accent)]" />
                  </p>
                  <p className="type-stat-label mt-4 font-medium text-foreground">{s.label}</p>
                  <p className="type-caption mt-2 max-w-[14rem] text-center">{s.caption}</p>
                </div>
              ))}
            </div>
          </Container>
        </Reveal>
      </SectionShell>

      {/* ── SOLUTIONS ────────────────────────────────────────────── */}
      <SectionShell id="solutions" size="default" className="bg-[var(--surface-muted)]">
        <Reveal>
          <Container>
            <HomeSolutionsSection />
          </Container>
        </Reveal>
      </SectionShell>

      {/* ── INDUSTRY SPOTLIGHTS ──────────────────────────────────── */}
      <HomeIndustrySpotlights saas={homepageSolutionSections[0]} trucking={homepageSolutionSections[1]} />

      {/* ── PORTFOLIO (moved up) ─────────────────────────────────── */}
      <SectionShell id="work" size="default">
        <Reveal>
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                className="sm:max-w-lg"
                eyebrow="Portfolio"
                title="Selected work"
                description="Recent projects across SaaS, trucking & logistics, CRM, integrations, and AI automation."
              />
              <Link
                href={primaryCtas.viewWork.href}
                className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full shrink-0 sm:w-auto")}
              >
                View all work
              </Link>
            </div>
            <div className="stagger-grid stagger-grid-visible mt-10 grid gap-6 lg:grid-cols-3">
              {featuredCaseStudies.map((c) => (
                <HomeCaseStudyCard
                  key={c.slug}
                  slug={c.slug as HomepageCaseStudySlug}
                  title={c.title}
                  summary={c.summary}
                  metric={c.metric}
                  href={`/work/${c.slug}`}
                  tags={c.tags}
                />
              ))}
            </div>
          </Container>
        </Reveal>
      </SectionShell>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <HomeTestimonialsSection items={homepageTestimonials} />

      {/* ── DIFFERENTIATORS ──────────────────────────────────────── */}
      <SectionShell id="why" size="default" className="bg-[var(--surface-muted)]">
        <Reveal>
          <Container>
            <SectionHeader
              eyebrow="Why Northline"
              title="What makes working with us different."
              description="We've structured the agency to remove the friction points that slow most client-agency relationships down."
            />
            <div className="stagger-grid stagger-grid-visible mt-10 grid gap-5 sm:grid-cols-2">
              {differentiators.map(({ icon: DiffIcon, title, body }) => (
                <article key={title} className="surface-card card-hover-rise flex gap-5 p-6 sm:p-7">
                  <div className="icon-container-md shrink-0">
                    <DiffIcon size={20} stroke={1.5} aria-hidden />
                  </div>
                  <div>
                    <h3 className="type-h3 text-foreground">{title}</h3>
                    <p className="type-body mt-2 max-w-none text-sm text-[color:var(--text-secondary)]">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Reveal>
      </SectionShell>

      {/* ── AI & TOOLS ───────────────────────────────────────────── */}
      <SectionShell id="tools" size="default">
        <Reveal>
          <Container>
            <SectionHeader
              eyebrow="AI & tools"
              title="Modern stack. Senior oversight."
              description="Design, development, and AI tooling chosen for speed and quality — with experienced review before anything reaches your product."
            />
            <div className="mt-10">
              <TechMarquee labels={homepageAiTools} />
            </div>
            <Link
              href="/technologies"
              className="link-subtle type-body mt-8 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]"
            >
              See our full stack
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
          </Container>
        </Reveal>
      </SectionShell>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <SectionShell id="process" size="default" className="bg-[var(--surface-muted)]">
        <Reveal>
          <Container>
            <ProcessSection steps={homepageProcessSteps} />
          </Container>
        </Reveal>
      </SectionShell>

      {/* ── FAQ + INLINE CTA ─────────────────────────────────────── */}
      <SectionShell id="faq" size="default">
        <Reveal>
          <Container>
            <div className="grid-layout-12">
              <div className="col-span-12 lg:col-span-8">
                <SectionHeader eyebrow="FAQ" title="Common questions" />
                <Accordion className="surface-card mt-8 px-6">
                  {homeFaq.map((item, idx) => (
                    <AccordionItem key={item.q} value={`hq-${idx}`} className="border-[var(--surface-border)]">
                      <AccordionTrigger className="type-body py-5 text-left font-semibold text-foreground hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="type-body pb-5 text-[color:var(--text-secondary)]">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Link
                  href="/faq"
                  className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "mt-8 inline-flex")}
                >
                  View all FAQs
                </Link>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <div className="surface-card cta-band-premium sticky top-24 space-y-5 p-6">
                  <p className="highlight-badge">
                    <span className="accent-live-dot" aria-hidden />
                    Start a conversation
                  </p>
                  <h3 className="type-h3 text-foreground text-balance">
                    Ready to discuss your project?
                  </h3>
                  <p className="type-body text-sm text-[color:var(--text-secondary)]">
                    Send a brief or book a free 30-minute discovery call. We&apos;ll respond within 24 hours with a clear plan.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href={primaryCtas.brief.href}
                      className={cn(buttonVariants({ variant: "primary", size: "cta" }), "btn-accent-glow w-full gap-2")}
                    >
                      {primaryCtas.brief.label}
                      <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
                    </Link>
                    <Link
                      href={primaryCtas.book.href}
                      className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full")}
                    >
                      {primaryCtas.book.label}
                    </Link>
                  </div>
                  <ul className="space-y-1.5">
                    {["Replies within 24 hours", "NDA available", "No obligation to proceed"].map((item) => (
                      <li key={item} className="feature-list-item text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Reveal>
      </SectionShell>
    </>
  );
}
