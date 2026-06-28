"use client";

import { IconBuildingSkyscraper, IconQuote, IconStarFilled, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

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
        "testimonial-card flex h-full flex-col gap-5 transition-all duration-300",
        isActive && "border-[var(--color-accent)]/30 shadow-[0_4px_24px_color-mix(in_oklab,var(--color-accent)_6%,transparent)]",
        className
      )}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/12 text-sm font-semibold text-[var(--color-accent)]"
            aria-label={`${item.name}, ${item.role} at ${item.company}`}
            role="img"
          >
            {item.initials}
          </div>
          <div>
            <p className="type-body text-sm font-semibold text-foreground">{item.name}</p>
            <p className="type-caption text-[11px]">{item.role}</p>
          </div>
        </div>
        <IconQuote
          size={22}
          stroke={1.5}
          className="mt-0.5 shrink-0 text-[var(--color-accent)]/35"
          aria-hidden
        />
      </div>

      {/* Stars + company */}
      <div className="flex flex-wrap items-center gap-3">
        <StarRow count={item.rating} />
        <Badge
          variant="outline"
          className="h-auto gap-1.5 rounded-full border-[var(--surface-border)] px-2 py-0.5 text-[10px] font-normal"
        >
          <IconBuildingSkyscraper size={10} stroke={1.5} aria-hidden />
          {item.company}
        </Badge>
      </div>

      {/* Quote */}
      <blockquote className="type-body flex-1 max-w-none text-[color:var(--text-body)]">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      {/* Project tag */}
      <p className="type-caption text-[var(--color-accent)] text-[11px] font-medium">
        {item.project}
      </p>
    </article>
  );
}

export function HomeTestimonialsSection({ items }: { items: readonly HomepageTestimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : items.length - 1));
  const next = () => setActiveIndex((i) => (i < items.length - 1 ? i + 1 : 0));

  return (
    <SectionShell id="testimonials" size="default" className="bg-[var(--surface-muted)]">
      <Reveal>
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            {/* Left: header + nav */}
            <div className="flex flex-col gap-8 lg:w-72 lg:shrink-0">
              <SectionHeader
                eyebrow="Testimonials"
                title="What clients actually say."
                description="Feedback from SaaS founders, ops leads, and engineering teams after working with us."
              />

              {/* Dot navigation */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="surface-card flex size-9 items-center justify-center rounded-full transition-colors hover:border-[var(--color-accent)]/40"
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
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === activeIndex
                          ? "w-6 bg-[var(--color-accent)]"
                          : "w-1.5 bg-[var(--surface-border)] hover:bg-[var(--text-secondary)]/40"
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="surface-card flex size-9 items-center justify-center rounded-full transition-colors hover:border-[var(--color-accent)]/40"
                >
                  <IconChevronRight size={16} stroke={2} aria-hidden />
                </button>
              </div>

              <p className="type-caption text-[11px] text-[color:var(--text-secondary)]">
                All feedback is anonymized with client permission. Names and roles are accurate; company names are categories.
              </p>
            </div>

            {/* Right: card + preview */}
            <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-5">
              {/* Active card */}
              <TestimonialCard
                item={items[activeIndex]!}
                isActive
                className="flex-1"
              />
              {/* Secondary cards (desktop) */}
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
                        className="testimonial-card flex flex-col gap-3 p-4 text-left opacity-60 transition-opacity hover:opacity-90"
                        aria-label={`View testimonial from ${item.name}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[11px] font-semibold text-[var(--color-accent)]"
                            aria-hidden
                          >
                            {item.initials}
                          </div>
                          <div>
                            <p className="text-[12px] font-semibold text-foreground">{item.name}</p>
                            <p className="type-caption text-[10px]">{item.company}</p>
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
        </Container>
      </Reveal>
    </SectionShell>
  );
}
