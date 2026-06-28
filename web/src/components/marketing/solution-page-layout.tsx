import Link from "next/link";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CaseStudyCard } from "@/components/marketing/case-study-card";
import { SectionHeader } from "@/components/marketing/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { primaryCtas, services } from "@/content/site-content";
import type { SolutionDetail } from "@/content/solutions";
import { caseStudyVisuals, solutionVisuals } from "@/content/visuals";
import { getCaseStudiesBySlugs } from "@/lib/case-studies";
import { faqJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type SolutionPageLayoutProps = {
  solution: SolutionDetail;
};

export function SolutionPageLayout({ solution }: SolutionPageLayoutProps) {
  const visual = solutionVisuals[solution.slug];
  const relatedCases = getCaseStudiesBySlugs(solution.relatedCaseSlugs);
  const relatedServices = services.filter((s) => solution.relatedServiceSlugs.includes(s.slug));
  const solutionSchema = serviceJsonLd({
    title: solution.title,
    description: solution.summary,
    path: `/solutions/${solution.slug}`,
  });
  const faqSchema = faqJsonLd(solution.faq);
  const pageSchema = webPageJsonLd({
    title: solution.title,
    description: solution.summary,
    path: `/solutions/${solution.slug}`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow={solution.market}
        title={solution.headline}
        description={solution.heroLead}
        visual={visual}
        priority
        actions={
          <>
            <Link
              href={primaryCtas.brief.href}
              className={cn(buttonVariants({ variant: "primary", size: "cta" }), "link-subtle gap-2")}
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

      <Section tone="muted" dividerTop>
        <Container>
          <div className="surface-card stat-card-accent flex flex-col divide-y divide-[var(--section-divider)] sm:flex-row sm:divide-x sm:divide-y-0">
            {solution.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="flex flex-1 flex-col items-center px-6 py-8 text-center transition-colors hover:bg-[var(--card)]"
              >
                <p className="type-stat text-[var(--color-accent)] tabular-nums">{outcome.value}</p>
                <p className="type-stat-label mt-3">{outcome.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container>
          <SectionHeader
            eyebrow="Capabilities"
            title={`What we deliver for ${solution.title.toLowerCase()}`}
            description="End-to-end design and development from an in-house team - no handoffs to freelancers."
          />
          <div className="stagger-grid stagger-grid-visible mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solution.capabilities.map((cap) => (
              <article key={cap.title} className="surface-card card-hover-rise flex h-full flex-col gap-4 p-6 sm:p-7">
                <div className="icon-container-md">
                  <IconCheck size={18} stroke={2.5} aria-hidden />
                </div>
                <div>
                  <h3 className="type-h3">{cap.title}</h3>
                  <p className="type-body mt-3 max-w-none text-sm text-[color:var(--text-secondary)]">{cap.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted" dividerTop>
        <Container className="grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader eyebrow="Process" title="How we deliver" description="Structured phases with clear milestones and transparent communication." />
          <ol className="space-y-4">
            {solution.processSteps.map((step, idx) => (
              <li key={step.title} className="surface-card flex gap-4 p-5 sm:p-6">
                <span
                  className="type-caption flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 font-semibold text-[var(--color-accent)]"
                  aria-hidden
                >
                  {idx + 1}
                </span>
                <div>
                  <h3 className="type-h3">{step.title}</h3>
                  <p className="type-body mt-2 max-w-none text-sm text-[color:var(--text-secondary)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {relatedCases.length > 0 ? (
        <Section tone="default" dividerTop>
          <Container>
            <SectionHeader eyebrow="Proof" title="Related work" description="Selected projects that reflect our experience in this space." />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {relatedCases.map((c) => {
                const cover = caseStudyVisuals[c.slug];
                return (
                  <CaseStudyCard
                    key={c.slug}
                    title={c.title}
                    summary={c.summary}
                    metric={c.metric}
                    href={`/work/${c.slug}`}
                    imageSrc={cover.src}
                    imageAlt={cover.alt}
                    tags={c.tags}
                  />
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section tone="muted" dividerTop>
        <Container>
          <SectionHeader eyebrow="Services" title="Related services" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {relatedServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="surface-card group flex items-start gap-3 p-5 transition-colors hover:border-[var(--color-accent)]/40"
                >
                  <IconCheck size={18} stroke={2} className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden />
                  <div>
                    <span className="type-body block font-semibold text-foreground group-hover:text-[var(--color-accent)]">
                      {s.title}
                    </span>
                    <span className="type-caption mt-1 line-clamp-2">{s.summary}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <Accordion className="surface-card mt-8 px-6">
            {solution.faq.map((item, idx) => (
              <AccordionItem key={item.q} value={`sq-${idx}`} className="border-[var(--surface-border)]">
                <AccordionTrigger className="type-body py-6 text-left font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="type-body pb-6 text-[color:var(--text-secondary)]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>
    </>
  );
}
