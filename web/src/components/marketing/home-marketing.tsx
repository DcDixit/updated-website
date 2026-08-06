import Link from "next/link";
import {
  IconArrowUpRight,
  IconChevronDown,
  IconShieldCheck,
  IconRocket,
  IconBrandGithub,
} from "@tabler/icons-react";

import { HomeClientsSection } from "@/components/home/home-clients-section";
import { DeliveryTrustRow } from "@/components/home/delivery-trust-row";
import { HomeCaseStudyCard } from "@/components/home/home-case-study-card";
import { HomeStatsBento } from "@/components/home/home-stats-bento";
import { HeroProductShowcase } from "@/components/home/hero-product-showcase";
import { HomeInsightsPreview } from "@/components/home/home-insights-preview";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";
import { ProcessSection } from "@/components/home/process-section";
import { TeamSection } from "@/components/home/team-section";
import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import { TechLogoGrid } from "@/components/marketing/tech-logo-grid";
import { HomeSolutionsSection } from "@/components/home/home-solutions-section";
import { BentoCard } from "@/components/ui/bento-card";
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
  { label: "40+ projects delivered", href: "/work" },
  { label: "NDA-first collaboration", href: "/faq" },
];

const differentiators = [
  {
    icon: IconRocket,
    title: "Design and engineering together",
    body: "Your designer and your engineer sit in the same standup. That means fewer misinterpretations, faster decisions, and a product that looks the way it was designed.",
    featured: true,
    gridClass: "col-span-12 lg:col-span-6 lg:row-span-2",
  },
  {
    icon: IconBrandGithub,
    title: "Handoffs your team can actually use",
    body: "Documented Figma libraries, typed codebases, and written decisions - so your team can maintain and extend without calling us for every change.",
    featured: false,
    gridClass: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    icon: IconShieldCheck,
    title: "You see the work every week",
    body: "Shared project board, weekly demos, and honest tradeoff conversations. No surprises at the end of a sprint.",
    featured: false,
    gridClass: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    icon: IconArrowUpRight,
    title: "Deep in SaaS and trucking",
    body: "We don't design for every industry. We know dispatch workflows, SaaS onboarding patterns, and accounting integrations because that's where we've spent years working.",
    featured: false,
    gridClass: "col-span-12 lg:col-span-6",
  },
] as const;

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
    name: "KRIVA core solution areas",
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
        className="hero-dot-grid hero-mesh-bg relative overflow-hidden !py-[clamp(4rem,7vw,6.5rem)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-[0.05] blur-3xl dark:opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
        <Reveal stagger>
          <Container className="relative z-[1]">
            <div className="grid-layout-12 items-center gap-y-10 lg:gap-y-0">
              <div className="col-span-12 flex flex-col gap-5 lg:col-span-6 lg:pr-6">
                <p className="reveal-child reveal-child-1 type-badge-label inline-flex items-center gap-2 self-start text-[color:var(--text-secondary)]">
                  <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
                  {homeHero.eyebrowBadge}
                </p>

                <h1 className="reveal-child reveal-child-2 type-hero text-foreground text-balance">
                  <HeroHeadline headline={homeHero.headline} emphasis={homeHero.headlineEmphasis} />
                </h1>

                <p className="reveal-child reveal-child-3 type-lead max-w-xl text-[color:var(--text-body)]">
                  {homeHero.lead}
                </p>

                <div className="reveal-child reveal-child-4 mt-1">
                  <HeroCtaGroup trackingLocation="home-hero" />
                </div>

                <p
                  className="reveal-child reveal-child-5 type-caption flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-[color:var(--text-secondary)]"
                  aria-label="How we work"
                >
                  {heroTrustSignals.map(({ label, href }, index) => (
                    <span key={label} className="inline-flex items-center gap-3">
                      {index > 0 ? (
                        <span className="text-[var(--surface-border)]" aria-hidden>
                          ·
                        </span>
                      ) : null}
                      <Link
                        href={href}
                        className="link-hover-underline transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                      >
                        {label}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>

              <div className="reveal-child reveal-child-6 col-span-12 lg:col-span-6">
                <HeroProductShowcase />
              </div>
            </div>
          </Container>
        </Reveal>

        <div className="mt-10 flex justify-center lg:mt-14">
          <a
            href="#clients"
            className="link-subtle type-caption flex flex-col items-center gap-1.5 text-[color:var(--text-secondary)]"
          >
            <span className="sr-only">Scroll to clients</span>
            <span aria-hidden>Scroll</span>
            <IconChevronDown size={18} stroke={1.5} className="marketing-scroll-hint opacity-70" />
          </a>
        </div>
      </SectionShell>

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
            <HomeStatsBento stats={homepageStats} />
            <DeliveryTrustRow />
          </Container>
        </Reveal>
      </SectionShell>

      <HomeTestimonialsSection />

      <SectionShell id="why" size="default" className="bg-[var(--surface-muted)]">
        <Reveal>
          <Container>
            <SectionHeader
              eyebrow="Why KRIVA"
              title="One team. No handoff drama."
              description="The same people who design your product build it — so nothing gets lost between Figma and production."
            />
            <ul className="bento-grid stagger-grid mt-10 grid grid-cols-12">
              {differentiators.map(({ icon: DiffIcon, title, body, featured, gridClass }) => (
                <li key={title} className={gridClass}>
                  <BentoCard
                    title={title}
                    description={body}
                    href="/process"
                    cta="How we work"
                    icon={DiffIcon}
                    featured={featured}
                    trackingLabel={title}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </SectionShell>

      <SectionShell id="tools" size="default">
        <Reveal>
          <Container>
            <SectionHeader
              eyebrow="Tools we use"
              title="Our stack."
              description="Every tool is chosen because it makes the work better or faster. Nothing on this list is here for show."
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
                eyebrow="Recent work"
                title="Projects we've shipped recently."
                description="Some client details are anonymized under NDA. The metrics are real."
              />
              <Link
                href={primaryCtas.viewWork.href}
                className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full shrink-0 sm:w-auto")}
              >
                View all work
              </Link>
            </div>
            <div className="stagger-grid mt-10 grid gap-6 lg:grid-cols-3">
              {featuredCaseStudies.map((c) => (
                <HomeCaseStudyCard
                  key={c.slug}
                  slug={c.slug as HomepageCaseStudySlug}
                  title={c.title}
                  summary={c.summary}
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
                <SectionHeader eyebrow="FAQ" title="Questions we get asked before starting." />
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
                  <h3 className="type-h3 text-foreground text-balance">Tell us what you&apos;re building.</h3>
                  <p className="type-body text-sm text-[color:var(--text-secondary)]">
                    Share your brief or book a call. We&apos;ll reply within one business day with a clear plan and honest next steps.
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

