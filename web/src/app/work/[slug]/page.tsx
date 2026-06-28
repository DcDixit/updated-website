import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { LeadCaptureCta } from "@/components/marketing/lead-capture-cta";
import { MarketingTrustSection, MarketingTrustSignals } from "@/components/marketing/marketing-trust-signals";
import { SectionHeader } from "@/components/marketing/section-header";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { caseStudies, caseStudyDetails, primaryCtas, type CaseSlug } from "@/content/site-content";
import { caseStudyGallery, caseStudyVisuals } from "@/content/visuals";
import { buildPageMetadata, caseStudyJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug as CaseSlug;
  const hero = caseStudies.find((c) => c.slug === slug);
  if (!hero) return {};
  const cover = caseStudyVisuals[slug];
  return buildPageMetadata({
    title: hero.title,
    description: hero.summary,
    path: `/work/${slug}`,
    image: cover.src,
  });
}

export default async function CaseDetailPage({ params }: Props) {
  const slug = (await params).slug as CaseSlug;
  const hero = caseStudies.find((c) => c.slug === slug);
  if (!hero) notFound();
  const d = caseStudyDetails[slug];
  const gallery = caseStudyGallery[slug];
  const caseStudySchema = caseStudyJsonLd({
    title: hero.title,
    description: hero.summary,
    path: `/work/${slug}`,
    client: d.client,
    metrics: d.metrics,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <PageHero
        eyebrow="Case study"
        title={hero.title}
        description={
          <>
            <span className="block">{hero.summary}</span>
            <span className="type-caption mt-4 block not-italic">{d.client}</span>
          </>
        }
        visual={gallery[0]}
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
            <Link href={primaryCtas.viewWork.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              More case studies
            </Link>
          </>
        }
      >
        <Container className="mt-8 max-w-6xl px-0 lg:px-6">
          <div className="flex flex-wrap gap-2">
            {hero.tags.map((t) => (
              <Badge key={t} variant="outline" className="font-normal">
                {t}
              </Badge>
            ))}
            <Badge variant="secondary" className="font-sans text-xs tabular-nums tracking-tight">
              {hero.metric}
            </Badge>
          </div>
        </Container>
      </PageHero>

      <Section tone="muted" dividerTop>
        <Container className="max-w-5xl space-y-6">
          <p className="type-caption text-[color:var(--text-secondary)]">
            Client name and some project details have been changed to protect confidentiality. Metrics are representative of actual delivery outcomes.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {d.metrics.map((m) => (
              <div key={m.label} className="surface-card stat-card-accent p-6 text-center sm:text-left">
                <p className="type-stat text-[var(--color-accent)]">{m.value}</p>
                <p className="type-stat-label mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="max-w-3xl grid gap-10">
          {[
            { title: "Problem", body: d.problem },
            { title: "Research", body: d.research },
            { title: "Solution", body: d.solution },
          ].map((s) => (
            <article key={s.title} className="space-y-3">
              <h2 className="type-h3 text-foreground">{s.title}</h2>
              <p className="type-body text-[color:var(--text-secondary)]">{s.body}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section tone="muted" dividerTop>
        <Container className="grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionHeader eyebrow="Product" title="UI process" />
            <p className="type-body text-[color:var(--text-secondary)]">{d.ui}</p>
          </div>
          <div className="space-y-4">
            <SectionHeader eyebrow="Engineering" title="Development process" />
            <p className="type-body text-[color:var(--text-secondary)]">{d.dev}</p>
          </div>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="max-w-3xl grid gap-8">
          <div>
            <h2 className="type-h3 text-foreground">Challenges</h2>
            <p className="type-body mt-3 text-[color:var(--text-secondary)]">{d.challenges}</p>
          </div>
          <Separator className="bg-[var(--section-divider)]" />
          <div>
            <h2 className="type-h3 text-foreground">Outcome</h2>
            <p className="type-body mt-3 text-[color:var(--text-secondary)]">{d.outcome}</p>
          </div>
          <blockquote className="surface-card border-l-4 border-l-[var(--color-accent)] p-8">
            <p className="type-body text-lg leading-snug italic text-foreground">“{d.testimonial}”</p>
          </blockquote>
        </Container>
      </Section>

      <MarketingTrustSection>
        <MarketingTrustSignals withRatings withStats={false} withTestimonials />
      </MarketingTrustSection>

      <Section tone="muted" dividerTop>
        <Container className="max-w-5xl">
          <SectionHeader
            eyebrow="Deliverables"
            title="Screens & artifacts"
            description="Representative views from the engagement - product UI, dashboards, and key flows."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {gallery.map((image, i) => (
              <div key={image.src} className="surface-card relative aspect-video overflow-hidden p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "inline-flex gap-2")}>
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "inline-flex")}>
              {primaryCtas.book.label}
            </Link>
          </div>
        </Container>
      </Section>

      <LeadCaptureCta
        eyebrow="Start a project"
        title="Want results like these for your product?"
        description="Share your goals and timeline - we'll outline a clear path forward."
      />
    </>
  );
}
