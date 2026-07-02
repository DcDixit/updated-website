import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/marketing/reveal";
import type { HomepageTestimonial } from "@/data/homepage";

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[var(--color-accent)]">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: HomepageTestimonial }) {
  return (
    <article className="testimonial-card flex flex-col gap-4">
      <StarRow />
      <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-foreground">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <div className="mt-auto flex items-center gap-3 border-t border-[var(--surface-border)] pt-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-semibold text-[var(--color-primary)]"
          aria-label={`${item.name}, ${item.role} at ${item.company}`}
          role="img"
        >
          {item.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-foreground">{item.name}</div>
          <div className="type-caption truncate">
            {item.role} · {item.company}
          </div>
        </div>
        {item.outcome ? (
          <div className="shrink-0">
            <span className="inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-2 py-0.5 text-xs font-semibold text-[var(--color-success)]">
              {item.outcome}
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function HomeTestimonialsSection({ items }: { items: readonly HomepageTestimonial[] }) {
  return (
    <SectionShell id="testimonials" size="default">
      <Reveal>
        <Container>
          <SectionHeader
            eyebrow="Client feedback"
            title="What clients actually say."
            description="From SaaS founders, ops leads, and engineering teams. All named with permission."
            align="center"
          />

          <div className="stagger-grid stagger-grid-visible mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="https://g.page/r/northline-digital/review"
              target="_blank"
              rel="noopener noreferrer"
              className="type-caption inline-flex items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
            >
              <span className="text-[var(--color-accent)]">★</span>
              5.0 on Google Reviews · 8 verified reviews →
            </Link>
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
