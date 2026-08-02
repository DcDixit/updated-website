import Link from "next/link";
import {
  IconArrowUpRight,
  IconChevronDown,
  IconShieldCheck,
  IconRocket,
  IconBrandGithub,
  IconClockHour4,
} from "@tabler/icons-react";

import { HomeClientLogoStrip } from "@/components/home/client-logo-strip";
import { HomeClientsSection } from "@/components/home/home-clients-section";
import { HomeClientWorkLogos } from "@/components/home/home-client-work-logos";
import { DeliveryTrustRow } from "@/components/home/delivery-trust-row";
import { HomeCaseStudyCard } from "@/components/home/home-case-study-card";
import { HeroProductShowcase } from "@/components/home/hero-product-showcase";
import { HomeInsightsPreview } from "@/components/home/home-insights-preview";
import { HomeSubNav } from "@/components/home/home-sub-nav";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";
import { ProcessSection } from "@/components/home/process-section";
import { TeamSection } from "@/components/home/team-section";
import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { AnimatedStatValue } from "@/components/marketing/animated-stat-value";
import { Reveal } from "@/components/marketing/reveal";
import { ReviewProofBar } from "@/components/marketing/review-proof-bar";
import { SectionHeader } from "@/components/marketing/section-header";
import { TechLogoGrid } from "@/components/marketing/tech-logo-grid";
import { HomeSolutionsSection } from "@/components/home/home-solutions-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { HeroCtaGroup } from "@/components/marketing/hero-cta-group";
import {
  faqHome,
  featuredCaseStudies,
  homeHero,
  homepageSolutionSections,
  primaryCtas,
  brand,
} from "@/content/site-content";
import {
  homepageProcessSteps,
  homepageStats,
  type HomepageCaseStudySlug,
} from "@/data/homepage";
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
  { icon: IconRocket, label: "40+ projects delivered", href: "/work" },
  { icon: IconShieldCheck, label: "NDA-first collaboration", href: "/faq" },
  { icon: IconClockHour4, label: "US & UK time-zone overlap", href: "/process" },
];

const differentiators = [
  {
    icon: IconRocket,
    title: "One team, end to end",
    body: "Design and engineering stay on the same engagement - fewer handoffs, clearer decisions, and a product that feels consistent.",
  },
  {
    icon: IconBrandGithub,
    title: "Ship-ready handoffs",
    body: "Typed codebases, documented Figma libraries, and written decisions your team can maintain without calling us for basics.",
  },
  {
    icon: IconShieldCheck,
    title: "Transparent by default",
    body: "Shared project board, weekly demos, and progress you can see - not status theatre after a sprint closes.",
  },
  {
    icon: IconArrowUpRight,
    title: "Built for your market",
    body: "Deep focus on UK SaaS product work and US trucking operations - dispatch, fleet, CRM, and accounting integrations.",
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

      <SectionShell
        id="hero"
        size="hero"
        className="hero-dot-grid hero-mesh-bg relative overflow-hidden !py-[clamp(3rem,5.5vw,4.75rem)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-[0.05] blur-3xl dark:opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
        <Reveal>
          <Container className="relative z-[1]">
            <div className="grid-layout-12 items-center gap-y-8 lg:gap-y-0">
              <div className="col-span-12 flex flex-col gap-3 lg:col-span-6 lg:pr-4">
                <p className="hero-eyebrow-badge type-badge-label inline-block self-start rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-3 py-1.5 text-[color:var(--text-secondary)]">
                  {homeHero.eyebrowBadge} · UK SaaS · US Trucking
                </p>

                <h1 className="type-hero text-foreground text-balance">
                  <HeroHeadline headline={homeHero.headline} emphasis={homeHero.headlineEmphasis} />
                </h1>

                <p className="type-lead max-w-xl text-[color:var(--text-body)]">{homeHero.lead}</p>

                <div className="mt-2">
                  <HeroCtaGroup trackingLocation="home-hero" />
                </div>

                <div className="flex flex-wrap gap-3 pt-1" aria-label="How we work">
                  {heroTrustSignals.map(({ icon: TrustIcon, label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="trust-badge rounded-full border border-transparent px-2 py-1 transition-colors hover:border-[var(--surface-border)] hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                    >
                      <TrustIcon size={14} stroke={1.75} aria-hidden />
                      {label}
                    </Link>
                  ))}
                </div>

                <p className="type-caption max-w-xl text-[color:var(--text-body)] opacity-60">
                  {homeHero.leadDetail}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <HeroProductShowcase />
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

      <HomeSubNav />

      <section className="border-y border-[var(--surface-border)] bg-background py-8">
        <Container>
          <HomeClientWorkLogos />
        </Container>
      </section>

      <HomeClientLogoStrip />

      <HomeClientsSection />

      <SectionShell id="solutions" size="default" className="bg-[var(--surface-muted)]">
        <Reveal>
          <Container>
            <HomeSolutionsSection />
          </Container>
        </Reveal>
      </SectionShell>

      <SectionShell id="stats" size="default" aria-labelledby="stats-heading">
        <Reveal>
          <Container>
            <h2 id="stats-heading" className="sr-only">
              Delivery metrics and how we work
            </h2>
            <div className="surface-card stat-card-accent flex flex-col divide-y divide-[var(--section-divider)] md:flex-row md:divide-x md:divide-y-0">
              {homepageStats.map((s) => (
                <div
                  key={s.label}
                  className="group flex flex-1 flex-col items-center px-6 py-8 text-center transition-colors hover:bg-[var(--surface-muted)] md:py-7"
                >
                  <p>
                    <AnimatedStatValue value={s.value} className="type-stat font-sans text-[var(--color-accent)]" />
                  </p>
                  <p className="type-stat-label mt-3">{s.label}</p>
                  <span className="mt-1.5 text-[12px] text-[color:var(--text-secondary)]">{s.caption}</span>
                </div>
              ))}
            </div>
            <ReviewProofBar variant="inline" className="mt-6" />
            <DeliveryTrustRow />
          </Container>
        </Reveal>
      </SectionShell>

      <HomeTestimonialsSection />

      <SectionShell id="why" size="default" className="bg-[var(--surface-muted)]">
        <Reveal>
          <Container>
            <SectionHeader
              eyebrow="Why Northline"
              title="Fewer vendors. Clearer ownership."
              description="We structured the agency around the friction that usually slows client–agency work: handoffs, opaque progress, and tools that don't match the market."
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
                    <Link
                      href="/process"
                      className="mt-2 inline-block text-[13px] font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-85"
                    >
                      How we work →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Reveal>
      </SectionShell>

      <SectionShell id="tools" size="default">
        <Reveal>
          <Container>
            <SectionHeader
              eyebrow="AI & tools"
              title="Modern stack. Senior oversight."
              description="Design, development, and AI tooling chosen for speed and quality - with experienced review before anything reaches your product."
            />
            <div className="mt-10">
              <TechLogoGrid categorized />
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

      <TeamSection variant="preview" />

      <SectionShell id="work" size="default">
        <Reveal>
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                className="sm:max-w-lg"
                eyebrow="Selected work"
                title="Illustrative projects across our focus markets."
                description="Anonymized examples of SaaS, trucking & logistics, CRM, and integration work. Metrics reflect project outcomes - not third-party review scores."
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

      <HomeInsightsPreview />

      <SectionShell id="process" size="default">
        <Reveal>
          <Container>
            <ProcessSection steps={homepageProcessSteps} />
          </Container>
        </Reveal>
      </SectionShell>

      <SectionShell id="faq" size="default">
        <Reveal>
          <Container>
            <div className="grid-layout-12">
              <div className="col-span-12 lg:col-span-8">
                <SectionHeader eyebrow="FAQ" title="Questions we hear before a kickoff." />
                <Accordion className="surface-card mt-8 px-6" defaultValue={["hq-0"]}>
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
                    <span className="status-dot" aria-hidden />
                    Next step
                  </p>
                  <h3 className="type-h3 text-foreground text-balance">Book a 30-minute discovery call.</h3>
                  <p className="type-body text-sm text-[color:var(--text-secondary)]">
                    Share what you&apos;re building. We&apos;ll reply within 24 hours with honest fit, scope questions, and suggested next steps.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href={primaryCtas.book.href}
                      className={cn(buttonVariants({ variant: "primary", size: "cta" }), "btn-accent-glow w-full gap-2")}
                    >
                      {primaryCtas.book.label}
                      <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
                    </Link>
                    <Link
                      href={primaryCtas.brief.href}
                      className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full")}
                    >
                      {primaryCtas.brief.label}
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

