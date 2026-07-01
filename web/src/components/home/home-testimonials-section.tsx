import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import type { HomepageTestimonial } from "@/data/homepage";

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-sm text-accent">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: HomepageTestimonial }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 shadow-card">
      <StarRow />
      <blockquote className="text-[0.9375rem] leading-relaxed text-text-primary">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
          aria-label={`${item.name}, ${item.role} at ${item.company}`}
          role="img"
        >
          {item.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-text-primary">{item.name}</div>
          <div className="text-xs text-text-muted">
            {item.role} · {item.company}
          </div>
        </div>
        <div className="ml-auto">
          <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
            {item.outcome}
          </span>
        </div>
      </div>
    </article>
  );
}

export function HomeTestimonialsSection({ items }: { items: readonly HomepageTestimonial[] }) {
  return (
    <SectionShell id="testimonials" size="default" className="bg-bg-alt">
      <Reveal>
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Client feedback</p>
            <h2 className="text-h2 font-bold text-text-primary">What clients actually say.</h2>
            <p className="mt-3 text-body text-text-secondary">
              From SaaS founders, ops leads, and engineering teams — named with permission.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="https://g.page/r/northline-digital/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span className="text-accent">★</span>
              5.0 on Google Reviews · 8 verified reviews →
            </Link>
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
