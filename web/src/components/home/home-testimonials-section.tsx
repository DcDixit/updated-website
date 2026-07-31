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
  clientTestimonials,
  primaryCtas,
} from "@/content/site-content";
import { cn } from "@/lib/utils";

const PLACEHOLDER_SLOTS = [
  {
    id: "slot-1",
    market: "UK SaaS",
    hint: "Founders & product leads",
  },
  {
    id: "slot-2",
    market: "US Trucking",
    hint: "Ops & dispatch leaders",
  },
  {
    id: "slot-3",
    market: "Integrations",
    hint: "Finance & platform teams",
  },
] as const;

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

function PlaceholderCard({ market, hint }: { market: string; hint: string }) {
  return (
    <article className="surface-card flex h-full flex-col gap-5 border-dashed p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{market}</p>
          <p className="type-caption mt-0.5">{hint}</p>
        </div>
        <span className="type-caption rounded-md border border-[var(--surface-border)] px-2 py-1 text-[10px] uppercase tracking-wide">
          Coming soon
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="space-y-2.5" aria-hidden>
          <div className="h-3 w-full rounded-full bg-[var(--surface-muted)]" />
          <div className="h-3 w-[92%] rounded-full bg-[var(--surface-muted)]" />
          <div className="h-3 w-[78%] rounded-full bg-[var(--surface-muted)]" />
        </div>
        <p className="type-caption text-[color:var(--text-secondary)]">
          Approved written feedback from clients will appear here — nothing invented in the meantime.
        </p>
      </div>
    </article>
  );
}

export function HomeTestimonialsSection({
  items = clientTestimonials,
}: {
  items?: readonly ClientTestimonial[];
}) {
  const hasTestimonials = items.length > 0;

  return (
    <SectionShell id="testimonials" size="default">
      <Reveal>
        <Container>
          <div className="cta-band-premium rounded-[var(--card-radius)] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                className="max-w-xl"
                eyebrow="Testimonials"
                title="What clients say about working with us."
                description="We're gathering real written feedback from operators and product teams. Until those quotes are approved, this space stays honest and empty of filler."
              />
              <Link
                href={primaryCtas.book.href}
                className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "shrink-0")}
              >
                Book a discovery call
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {hasTestimonials
                ? items.map((item) => <TestimonialCard key={item.id} item={item} />)
                : PLACEHOLDER_SLOTS.map((slot) => (
                    <PlaceholderCard key={slot.id} market={slot.market} hint={slot.hint} />
                  ))}
            </div>
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
