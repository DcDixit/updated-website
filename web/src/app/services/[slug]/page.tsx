import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowUpRight } from "@tabler/icons-react";

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
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  primaryCtas,
  serviceDetails,
  services,
  type ServiceSlug,
} from "@/content/site-content";
import { caseStudyVisuals, serviceVisuals } from "@/content/visuals";
import { buildPageMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { getRelatedCaseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug as ServiceSlug;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${slug}`,
    image: serviceVisuals[slug].src,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const slug = (await params).slug as ServiceSlug;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const detail = serviceDetails[service.slug];
  const related = getRelatedCaseStudies(service.slug, 2);
  const visual = serviceVisuals[service.slug];
  const serviceSchema = serviceJsonLd({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
  const faqSchema = faqJsonLd(detail.faq);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        visual={visual}
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
      >
        <Container className="mt-6 max-w-4xl px-0 lg:px-6">
          <div className="flex flex-wrap gap-2">
            {service.bullets.map((b) => (
              <Badge key={b} variant="outline" className="font-normal">
                {b}
              </Badge>
            ))}
          </div>
        </Container>
      </PageHero>

      <Section tone="muted" dividerTop>
        <Container className="grid max-w-5xl gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <SectionHeader eyebrow="Challenges" title="Problems we help solve" />
            <ul className="space-y-3">
              {detail.challenges.map((c) => (
                <li key={c} className="type-body flex gap-3 text-[color:var(--text-secondary)]">
                  <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <SectionHeader eyebrow="Outcomes" title="What you gain" />
            <ul className="space-y-2">
              {detail.benefits.map((b) => (
                <li key={b} className="type-body text-[color:var(--text-secondary)]">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="surface-card h-fit space-y-4 p-6 lg:sticky lg:top-28">
            <p className="type-badge-label">Deliverables</p>
            <ul className="space-y-2">
              {detail.deliverables.map((d) => (
                <li key={d} className="type-caption text-foreground">
                  • {d}
                </li>
              ))}
            </ul>
            <Link
              href={primaryCtas.brief.href}
              className={cn(buttonVariants({ variant: "primary", size: "cta" }), "mt-4 w-full")}
            >
              {primaryCtas.brief.label}
            </Link>
          </aside>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="FAQ" title={`About ${service.title}`} align="center" />
          <Accordion className="surface-card mt-8 px-6">
            {detail.faq.map((item, idx) => (
              <AccordionItem key={item.q} value={`faq-${idx}`} className="border-[var(--surface-border)]">
                <AccordionTrigger className="type-body py-5 text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="type-body pb-5 text-[color:var(--text-secondary)]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      <Section tone="muted" dividerTop>
        <Container>
          <SectionHeader eyebrow="Related work" title="Case studies" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((c) => {
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
    </>
  );
}
