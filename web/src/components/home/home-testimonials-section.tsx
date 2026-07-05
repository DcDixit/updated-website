"use client";

import Link from "next/link";
import {
  IconArrowUpRight,
  IconBuildingSkyscraper,
  IconChevronLeft,
  IconChevronRight,
  IconQuote,
  IconStarFilled,
} from "@tabler/icons-react";
import { useState } from "react";

import { TestimonialAvatar } from "@/components/home/testimonial-avatar";
import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import { Badge } from "@/components/ui/badge";
import type { HomepageTestimonial } from "@/data/homepage";
import { cn } from "@/lib/utils";

function StarRow({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5 text-[var(--color-accent)]", className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <IconStarFilled key={i} size={16} />
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
  isActive,
  className,
}: {
  item: HomepageTestimonial;
  isActive?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "testimonial-card flex h-full flex-col gap-5 border-transparent bg-background/80 transition-[border-color,box-shadow] duration-300",
        isActive &&
          "border-[var(--color-accent)]/25 shadow-[0_8px_32px_color-mix(in_oklab,var(--color-accent)_8%,transparent)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <TestimonialAvatar initials={item.initials} name={item.name} />
          <div>
            <p className="type-body text-sm font-semibold text-foreground">{item.name}</p>
            <p className="type-caption">{item.role}</p>
          </div>
        </div>
        <IconQuote size={22} stroke={1.5} className="mt-0.5 shrink-0 text-[var(--color-accent)]/35" aria-hidden />
      </div>

      <div className="flex flex-wrap items-center gap-3">
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
        <Badge variant="outline" className="h-auto gap-1.5 rounded-full border-[var(--surface-border)] px-2 py-0.5 font-normal">
          <IconBuildingSkyscraper size={12} stroke={1.5} aria-hidden />
          {item.company}
        </Badge>
      </div>

      <blockquote
        className={cn(
          "type-body flex-1 max-w-none text-[color:var(--text-body)]",
          isActive && "text-base leading-relaxed sm:text-lg sm:leading-relaxed"
        )}
      >
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

export function HomeTestimonialsSection({ items }: { items: readonly HomepageTestimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : items.length - 1));
  const next = () => setActiveIndex((i) => (i < items.length - 1 ? i + 1 : 0));

  return (
    <SectionShell id="testimonials" size="default">
      <Reveal>
        <Container>
          <div className="cta-band-premium rounded-[var(--card-radius)] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex flex-col gap-8 lg:w-72 lg:shrink-0">
                <SectionHeader
                  eyebrow="Testimonials"
                  title="What clients actually say."
                  description="Feedback from SaaS founders, ops leads, and engineering teams after working with us."
                />

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="surface-card flex size-11 items-center justify-center rounded-full transition-colors hover:border-[var(--color-accent)]/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
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
                        className="flex size-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
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
                    className="surface-card flex size-11 items-center justify-center rounded-full transition-colors hover:border-[var(--color-accent)]/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                  >
                    <IconChevronRight size={16} stroke={2} aria-hidden />
                  </button>
                </div>

                <p className="type-caption text-[color:var(--text-secondary)]">
                  Named feedback shared with client permission.
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-5">
                <div aria-live="polite" aria-atomic="true" className="flex-1">
                  <TestimonialCard item={items[activeIndex]!} isActive className="flex-1" />
                </div>
                {items.length > 1 ? (
                  <div className="hidden flex-col gap-4 md:flex md:w-64 lg:w-72">
                    {items
                      .map((item, i) => ({ item, i }))
                      .filter(({ i }) => i !== activeIndex)
                      .slice(0, 2)
                      .map(({ item, i }) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveIndex(i)}
                          className="testimonial-card flex flex-col gap-3 border-transparent bg-background/60 p-4 text-left opacity-70 transition-[opacity,box-shadow] hover:opacity-100 hover:shadow-sm"
                          aria-label={`View testimonial from ${item.name}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <TestimonialAvatar initials={item.initials} name={item.name} size="sm" />
                            <div>
                              <p className="text-sm font-semibold text-foreground">{item.name}</p>
                              <p className="type-caption">{item.company}</p>
                            </div>
                          </div>
                          <p className="type-caption line-clamp-2 max-w-none text-[color:var(--text-body)]">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </button>
                      ))}
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
