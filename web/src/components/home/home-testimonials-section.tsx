"use client";

import Link from "next/link";
import { IconArrowUpRight, IconQuote } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import {
  type ClientTestimonial,
  caseStudyDetails,
  clientTestimonials,
  featuredCaseStudies,
  primaryCtas,
} from "@/content/site-content";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function TestimonialCard({ item }: { item: ClientTestimonial }) {
  return (
    <article className="testimonial-card surface-card flex h-full flex-col gap-6 p-6 transition-colors hover:border-[color-mix(in_oklab,var(--color-accent)_28%,var(--surface-border))] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3.5">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] text-sm font-semibold text-[var(--color-accent)]"
            aria-hidden
          >
            {initials(item.name)}
          </div>
          <div className="min-w-0">
            <p className="text-base font-semibold tracking-tight text-foreground">{item.name}</p>
            <p className="type-caption mt-0.5 truncate text-[color:var(--text-secondary)]">
              {item.role}
              <span className="mx-1.5 text-[color:var(--surface-border)]" aria-hidden>
                ·
              </span>
              {item.company}
            </p>
          </div>
        </div>
        <IconQuote size={28} stroke={1.25} className="shrink-0 text-[var(--color-accent)]/25" aria-hidden />
      </div>

      <blockquote className="type-body flex-1 text-base leading-relaxed text-[color:var(--text-body)] sm:text-[1.0625rem] sm:leading-[1.7]">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      {item.caseStudySlug ? (
        <Link
          href={`/work/${item.caseStudySlug}`}
          className="type-caption inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-85"
        >
          {item.project ?? "Related work"}
          <IconArrowUpRight size={14} stroke={1.5} aria-hidden />
        </Link>
      ) : item.project ? (
        <p className="type-caption font-medium text-[color:var(--text-secondary)]">{item.project}</p>
      ) : null}
    </article>
  );
}

function OutcomeCard({
  slug,
  title,
  metric,
  tags,
}: {
  slug: string;
  title: string;
  metric: string;
  tags: readonly string[];
}) {
  const detail = caseStudyDetails[slug as keyof typeof caseStudyDetails];
  const shortTitle = title.includes(" - ") ? title.split(" - ")[0] : title;
  const supportingMetric = detail?.metrics[1];

  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "group/outcome surface-card card-hover-rise flex h-full flex-col gap-5 p-6 sm:p-7",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="type-caption font-medium text-[color:var(--text-secondary)]">
          {tags.slice(0, 2).join(" · ")}
        </p>
        <IconArrowUpRight
          size={18}
          stroke={1.5}
          className="shrink-0 text-[color:var(--text-secondary)] transition-transform duration-300 group-hover/outcome:-translate-y-0.5 group-hover/outcome:translate-x-0.5 group-hover/outcome:text-[var(--color-accent)]"
          aria-hidden
        />
      </div>

      <div>
        <p className="type-stat text-[var(--color-accent)]">{metric}</p>
        {supportingMetric ? (
          <p className="type-caption mt-1.5 text-[color:var(--text-secondary)]">
            {supportingMetric.value} {supportingMetric.label.toLowerCase()}
          </p>
        ) : null}
      </div>

      <div className="mt-auto space-y-2">
        <p className="text-base font-semibold tracking-tight text-foreground">{shortTitle}</p>
        <p className="type-body text-sm leading-relaxed text-[color:var(--text-body)]">
          {detail?.outcome ?? title}
        </p>
      </div>
    </Link>
  );
}

export function HomeTestimonialsSection({
  items = clientTestimonials,
}: {
  items?: readonly ClientTestimonial[];
}) {
  const hasTestimonials = items.length > 0;
  const outcomes = featuredCaseStudies.slice(0, 3);

  return (
    <SectionShell id="testimonials" size="default">
      <Reveal>
        <Container>
          <div className="cta-band-premium rounded-[var(--card-radius)] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                className="max-w-xl"
                eyebrow={hasTestimonials ? "Testimonials" : "Client results"}
                title={
                  hasTestimonials
                    ? "What clients say about working with us."
                    : "Outcomes from recent engagements."
                }
                description={
                  hasTestimonials
                    ? "Straight feedback from founders, ops leads, and finance teams we've shipped with."
                    : "Measured results from SaaS, trucking, and finance platforms — not invented quotes."
                }
              />
              <Link
                href={hasTestimonials ? primaryCtas.book.href : "/work"}
                className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "shrink-0")}
              >
                {hasTestimonials ? "Book a discovery call" : "View case studies"}
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {hasTestimonials
                ? items.map((item) => <TestimonialCard key={item.id} item={item} />)
                : outcomes.map((study) => (
                    <OutcomeCard
                      key={study.slug}
                      slug={study.slug}
                      title={study.title}
                      metric={study.metric}
                      tags={study.tags}
                    />
                  ))}
            </div>
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
