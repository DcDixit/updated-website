import Link from "next/link";
import {
  IconBrandGithub,
  IconHeartHandshake,
  IconShieldCheck,
  IconUsers,
  IconSparkles,
} from "@tabler/icons-react";

import { HomeIndustrySpotlights } from "@/components/home/home-industry-spotlights";
import { HomeClientLogoStrip } from "@/components/home/client-logo-strip";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";
import { ProcessSection } from "@/components/home/process-section";
import { OutcomeTicker } from "@/components/home/outcome-ticker";
import { EngagementModel } from "@/components/home/engagement-model";
import { TeamSection } from "@/components/home/team-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { MarketingImage } from "@/components/marketing/marketing-image";
import { HomeSolutionsSection } from "@/components/home/home-solutions-section";
import { TechMarquee } from "@/components/marketing/tech-marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqHome, brand } from "@/content/site-content";
import {
  homepageAiTools,
  homepageClients,
  homepageProcessSteps,
  homepageStats,
  homepageTeam,
  homepageTestimonials,
} from "@/data/homepage";
import { pageHeroVisuals } from "@/content/visuals";
import { faqJsonLd, reviewJsonLd, webPageJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: IconUsers,
    title: "One team — from Figma to production.",
    body: "Design and engineering under one roof means your UI and your code don't diverge. No \"the developer changed it\" moments.",
    proof: "Average time from design sign-off to dev handoff: 2 business days.",
  },
  {
    icon: IconBrandGithub,
    title: "Everything transferred before final invoice.",
    body: "All Figma files, GitHub repos, and documentation are yours. We transfer access before project close — not after. Zero lock-in.",
    proof: "NDA available · Zero lock-in clause in every contract.",
  },
  {
    icon: IconShieldCheck,
    title: "You're in the room every week.",
    body: "Weekly demo calls, shared Figma + GitHub access, Loom walkthroughs for async teams. We write the brief, you sign off before we build.",
    proof: "Client quote: \"I knew exactly what was happening every day.\" — Marcus Cole, FleetRoute Logistics",
  },
  {
    icon: IconSparkles,
    title: "AI speeds us up. Humans own quality.",
    body: "We use Claude, GitHub Copilot, and Cursor to move faster. Every output reviewed by a senior engineer before it reaches you.",
    proof: "Estimated 40% faster delivery vs. traditional agency timelines.",
  },
  {
    icon: IconHeartHandshake,
    title: "We don't disappear at handoff.",
    body: "Most clients move to a monthly retainer after go-live. Iteration sprints, monitoring, and roadmap support — ongoing.",
    proof: "70% of clients extend to retainer after their first project.",
  },
];

export function HomeMarketing() {
  const homeFaq = faqHome;
  const homeFaqSchema = faqJsonLd(homeFaq);
  const homePageSchema = webPageJsonLd({
    title: `${brand.shortName} · SaaS & Trucking Digital Product Agency`,
    description: brand.positioning,
    path: "/",
  });
  const reviewSchema = reviewJsonLd(
    homepageTestimonials.map((item) => ({
      author: item.name,
      reviewBody: item.quote,
      ratingValue: item.rating,
      itemReviewed: `${item.company} - ${item.project}`,
    }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      {reviewSchema.map((node, index) => (
        <script
          key={`review-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <SectionShell
        id="hero"
        size="hero"
        className="hero-dot-grid hero-mesh-bg relative overflow-hidden bg-bg !py-16 md:!py-24 lg:!py-32"
      >
        <Reveal>
          <Container className="relative z-[1] max-w-6xl">
            <div className="grid-layout-12 items-center gap-y-8 lg:gap-y-0">
              <div className="col-span-12 flex flex-col lg:col-span-6 lg:pr-4">
                <span className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  AI-Powered Product Agency · UK SaaS · US Trucking
                </span>

                <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-text-primary md:text-hero">
                  We build software your
                  <br />
                  <span className="relative text-primary">
                    ops team actually uses.
                    <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent opacity-80" />
                  </span>
                </h1>

                <p className="mb-8 max-w-2xl text-body-lg leading-relaxed text-text-secondary">
                  Northline is a 15-person in-house team designing and engineering SaaS platforms for UK
                  startups — and dispatch, fleet, and CRM tools for US trucking operators. From discovery
                  through launch and beyond.
                </p>

                <div className="flex flex-col flex-wrap items-stretch gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/contact#brief"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary-dark hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Start a project →
                  </Link>
                  <Link
                    href="/contact#book"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong px-6 py-3 font-medium text-text-primary transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Book a 30-min call
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="font-bold text-accent">⭐ 5.0</span> Google Rating
                  </span>
                  <span className="text-border-strong">·</span>
                  <span>15+ In-House Team</span>
                  <span className="text-border-strong">·</span>
                  <span>NDA on Request</span>
                  <span className="text-border-strong">·</span>
                  <span>40+ Projects Delivered</span>
                  <span className="text-border-strong">·</span>
                  <span>Replies in 24 hours</span>
                </div>
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
      </SectionShell>

      <OutcomeTicker />

      <HomeClientLogoStrip clients={homepageClients} />

      {/* ── SOLUTIONS ────────────────────────────────────────────── */}
      <SectionShell id="solutions" size="default" className="bg-bg-alt">
        <Reveal>
          <Container className="max-w-6xl">
            <HomeSolutionsSection />
          </Container>
        </Reveal>
      </SectionShell>

      <HomeIndustrySpotlights />

      {/* ── METRICS ──────────────────────────────────────────────── */}
      <SectionShell id="stats" size="default" aria-labelledby="stats-heading">
        <Reveal>
          <Container className="max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                Measured outcomes
              </p>
              <h2 id="stats-heading" className="text-h2 font-bold text-text-primary">
                Results clients have reported.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-body-lg text-text-secondary">
                Not inputs. Not effort. What actually changed after we shipped.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {homepageStats.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-white p-6 shadow-card transition-colors duration-200 hover:border-primary/30"
                >
                  <div className="mb-1 font-mono text-4xl font-black tracking-tight text-primary">
                    {m.value}
                  </div>
                  <div className="mb-0.5 text-sm font-semibold text-text-primary">{m.label}</div>
                  <div className="text-xs text-text-muted">{m.sub}</div>
                </div>
              ))}
            </div>
          </Container>
        </Reveal>
      </SectionShell>

      <HomeTestimonialsSection items={homepageTestimonials} />

      {/* ── DIFFERENTIATORS ──────────────────────────────────────── */}
      <SectionShell id="why" size="default" className="bg-bg-alt">
        <Reveal>
          <Container className="max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Why Northline</p>
              <h2 className="text-h2 font-bold text-text-primary">What makes working with us different.</h2>
              <p className="mt-3 text-text-secondary">
                We&apos;ve structured the agency to remove the friction points that slow most client-agency
                relationships down.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map(({ icon: DiffIcon, title, body, proof }) => (
                <article
                  key={title}
                  className="rounded-xl border border-border bg-white p-6 shadow-card transition-colors duration-200 hover:border-primary/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8">
                    <DiffIcon size={20} stroke={1.5} className="text-primary" aria-hidden />
                  </div>
                  <h3 className="mb-2 font-bold text-text-primary">{title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">{body}</p>
                  <p className="border-t border-border pt-3 text-xs italic text-text-muted">{proof}</p>
                </article>
              ))}
            </div>
          </Container>
        </Reveal>
      </SectionShell>

      <TeamSection team={homepageTeam} />

      <HomePortfolioSection />

      {/* ── AI & TOOLS ───────────────────────────────────────────── */}
      <SectionShell id="tools" size="default" className="bg-bg-alt">
        <Reveal>
          <Container className="max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">AI & tools</p>
              <h2 className="text-h2 font-bold text-text-primary">Modern stack. Senior oversight.</h2>
              <p className="mt-3 text-text-secondary">
                Design, development, and AI tooling chosen for speed and quality — with experienced review
                before anything reaches your product.
              </p>
            </div>
            <TechMarquee labels={homepageAiTools} />
            <Link
              href="/technologies"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              See our full stack →
            </Link>
          </Container>
        </Reveal>
      </SectionShell>

      <SectionShell id="process" size="default">
        <Reveal>
          <Container className="max-w-6xl">
            <ProcessSection steps={homepageProcessSteps} />
          </Container>
        </Reveal>
      </SectionShell>

      <EngagementModel />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <SectionShell id="faq" size="default">
        <Reveal>
          <Container className="max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
              <h2 className="text-h2 font-bold text-text-primary">Common questions</h2>
            </div>
            <Accordion defaultValue={["hq-0"]} className="rounded-xl border border-border bg-white px-6 shadow-card">
              {homeFaq.map((item, idx) => (
                <AccordionItem key={item.q} value={`hq-${idx}`} className="border-border">
                  <AccordionTrigger className="py-5 text-left font-semibold text-text-primary hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-text-secondary">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                View all FAQs →
              </Link>
            </div>
          </Container>
        </Reveal>
      </SectionShell>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-dark py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
          aria-hidden
        />
        <Container className="relative z-10 max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Let&apos;s work together
          </p>
          <h2 className="text-h2 mb-4 font-black leading-tight text-white">
            Let&apos;s build something your
            <br />
            users actually want.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-body-lg leading-relaxed text-white/60">
            Whether you&apos;re a SaaS founder who needs investor-ready UI, or a trucking operator tired of
            patching together tools that don&apos;t talk to each other — we&apos;ve done this before.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact#brief"
              className={cn(
                "w-full rounded-md bg-accent px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-accent/20 transition-colors duration-200 hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
              )}
            >
              Start a project →
            </Link>
            <Link
              href="/contact#book"
              className="w-full rounded-md border border-white/20 px-8 py-3.5 text-center font-medium text-white/70 transition-colors duration-200 hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
            >
              Book a 30-min call
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
            <span>✓ Response within 24 hours</span>
            <span>✓ NDA available</span>
            <span>✓ No retainer to start</span>
            <span>✓ References on request</span>
          </div>
        </Container>
      </section>
    </>
  );
}
