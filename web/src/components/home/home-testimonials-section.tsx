"use client";

import Link from "next/link";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
  IconQuote,
  IconStarFilled,
} from "@tabler/icons-react";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import { TestimonialAvatar } from "@/components/home/testimonial-avatar";
import type { HomepageTestimonial } from "@/data/homepage";
import { cn } from "@/lib/utils";

function StarRow({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5 text-[var(--color-accent)]", className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <IconStarFilled key={i} size={15} />
      ))}
    </div>
  );
}

function ActiveTestimonialCard({ item }: { item: HomepageTestimonial }) {
  return (
    <article className="testimonial-card flex h-full flex-col gap-6 border-[color-mix(in_oklab,var(--color-accent)_22%,var(--surface-border))] bg-background p-6 shadow-[0_8px_32px_color-mix(in_oklab,var(--color-accent)_7%,transparent)] sm:p-7 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3.5">
          <TestimonialAvatar initials={item.initials} name={item.name} />
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

      <div className="flex flex-wrap items-center gap-2.5">
        <StarRow count={item.rating} />
        {item.outcome ? (
          item.caseStudySlug ? (
            <Link
              href={`/work/${item.caseStudySlug}`}
              className="metric-callout type-caption py-1 font-semibold tabular-nums transition-opacity hover:opacity-90"
            >
              {item.outcome}
            </Link>
          ) : (
            <span className="metric-callout type-caption py-1 font-semibold tabular-nums">{item.outcome}</span>
          )
        ) : null}
      </div>

      <blockquote className="type-body flex-1 max-w-none text-base leading-relaxed text-[color:var(--text-body)] sm:text-[1.0625rem] sm:leading-[1.7]">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      {item.caseStudySlug ? (
        <Link
          href={`/work/${item.caseStudySlug}`}
          className="type-caption inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-85"
        >
          {item.project}
          <IconArrowUpRight size={14} stroke={1.5} aria-hidden />
        </Link>
      ) : (
        <p className="type-caption font-medium text-[var(--color-accent)]">{item.project}</p>
      )}
    </article>
  );
}

function PreviewTestimonialCard({
  item,
  isActive,
  onSelect,
}: {
  item: HomepageTestimonial;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={`View testimonial from ${item.name}`}
      className={cn(
        "testimonial-card flex w-full flex-col gap-3 p-4 text-left transition-[opacity,border-color,box-shadow,background-color] sm:p-5",
        isActive
          ? "border-[color-mix(in_oklab,var(--color-accent)_30%,var(--surface-border))] bg-background shadow-sm"
          : "border-transparent bg-background/50 opacity-75 hover:border-[var(--surface-border)] hover:bg-background hover:opacity-100"
      )}
    >
      <div className="flex items-center gap-3">
        <TestimonialAvatar initials={item.initials} name={item.name} size="sm" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
          <p className="type-caption mt-0.5 truncate">{item.role}</p>
        </div>
        {item.outcome ? (
          <span className="type-caption shrink-0 rounded-full border border-[color-mix(in_oklab,var(--color-accent)_22%,transparent)] bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] px-2 py-0.5 text-[11px] font-semibold tabular-nums text-[var(--color-accent)]">
            {item.outcome}
          </span>
        ) : null}
      </div>
      <p className="type-caption line-clamp-3 max-w-none leading-relaxed text-[color:var(--text-body)]">
        &ldquo;{item.quote}&rdquo;
      </p>
    </button>
  );
}

export function HomeTestimonialsSection({ items }: { items: readonly HomepageTestimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex]!;

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : items.length - 1));
  const next = () => setActiveIndex((i) => (i < items.length - 1 ? i + 1 : 0));

  return (
    <SectionShell id="testimonials" size="default">
      <Reveal>
        <Container>
          <div className="cta-band-premium rounded-[var(--card-radius)] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-14">
              <div className="flex flex-col justify-between gap-8 lg:w-[min(100%,17.5rem)] lg:shrink-0">
                <SectionHeader
                  eyebrow="Testimonials"
                  title="What clients actually say."
                  description="Feedback from SaaS founders, ops leads, and engineering teams after working with us."
                />

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="surface-card flex size-10 items-center justify-center rounded-full transition-colors hover:border-[var(--color-accent)]/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                    >
                      <IconChevronLeft size={16} stroke={2} aria-hidden />
                    </button>

                    <div className="flex gap-1.5" role="tablist" aria-label="Testimonial navigation">
                      {items.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          role="tab"
                          aria-selected={i === activeIndex}
                          aria-label={`Testimonial ${i + 1}`}
                          onClick={() => setActiveIndex(i)}
                          className="flex size-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                        >
                          <span
                            className={cn(
                              "block rounded-full transition-all duration-300",
                              i === activeIndex
                                ? "h-1.5 w-6 bg-[var(--color-accent)]"
                                : "size-1.5 bg-[var(--surface-border)] hover:bg-[var(--text-secondary)]/40"
                            )}
                            aria-hidden
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="surface-card flex size-10 items-center justify-center rounded-full transition-colors hover:border-[var(--color-accent)]/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                    >
                      <IconChevronRight size={16} stroke={2} aria-hidden />
                    </button>
                  </div>

                  <p className="type-caption text-[color:var(--text-secondary)]">
                    Named feedback shared with client permission.
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-4 lg:flex-row lg:gap-5">
                <div aria-live="polite" aria-atomic="true" className="min-w-0 flex-1">
                  <ActiveTestimonialCard item={activeItem} />
                </div>

                {items.length > 1 ? (
                  <div className="flex flex-col gap-3 lg:w-64 xl:w-72">
                    {items.map((item, i) =>
                      i === activeIndex ? null : (
                        <PreviewTestimonialCard
                          key={item.name}
                          item={item}
                          isActive={false}
                          onSelect={() => setActiveIndex(i)}
                        />
                      )
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
