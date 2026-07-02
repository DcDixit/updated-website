"use client";

import { IconStarFilled } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/ui/GlassCard";
import { homepageTestimonials } from "@/data/homepage";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

const AVATAR_GRADIENTS = [
  "from-[#1B2A6B] to-[#2E44A0]",
  "from-[#0B1B4D] to-[#1B2A6B]",
  "from-[#D97706] to-[#F59E0B]",
  "from-[#111D4A] to-[#3D4A6B]",
  "from-[#1B2A6B] to-[#F59E0B]",
] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <IconStarFilled
          key={i}
          className={cn("h-3.5 w-3.5", i < rating ? "text-brand-amber" : "text-text-muted-v2/30")}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialAvatar({ initials, index }: { initials: string; index: number }) {
  const gradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
        "border-[1.5px] border-[rgba(27,42,107,0.25)] bg-gradient-to-br shadow-sm",
        gradient
      )}
      aria-hidden
    >
      <span className="font-body text-sm font-semibold text-white">{initials}</span>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  company,
  project,
  rating,
  outcome,
  initials,
  variant,
  delayMs,
  index,
}: (typeof homepageTestimonials)[number] & {
  variant: "default" | "featured";
  delayMs: number;
  index: number;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal-up h-full"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <GlassCard variant={variant} className="relative flex h-full flex-col pt-8">
        <span
          className="pointer-events-none absolute top-3 left-4 font-heading text-[64px] leading-none text-[rgba(27,42,107,0.18)] dark:text-[rgba(27,42,107,0.35)]"
          aria-hidden
        >
          "
        </span>

        <div className="mb-4 flex items-center justify-between gap-3">
          <StarRating rating={rating} />
          <span className="rounded-full border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.08)] px-2.5 py-0.5 font-body text-[11px] font-semibold text-brand-amber">
            {outcome}
          </span>
        </div>

        <blockquote className="relative flex-1 font-body text-[15px] leading-[1.7] text-text-secondary-v2">
          {quote}
        </blockquote>

        <div className="my-5 h-px bg-surface-card-border" />

        <div className="flex items-center gap-3">
          <TestimonialAvatar initials={initials} index={index} />
          <div className="min-w-0">
            <p className="font-body text-sm font-semibold text-text-primary-v2">{name}</p>
            <p className="truncate font-body text-xs text-text-muted-v2">
              {role} · {company}
            </p>
            <p className="mt-0.5 font-body text-[11px] text-text-muted-v2/80">{project}</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

const featuredIndices = [1, 3];

export function Testimonials() {
  const headerRef = useScrollReveal();
  const displayed = homepageTestimonials.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-surface-base py-[72px] sm:py-[120px]">
      <div className="glow-dual" aria-hidden="true" />
      <div className="section-grid-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <Container className="relative z-10">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-up max-w-xl">
          <p className="eyebrow-amber mb-3">CLIENT RESULTS</p>
          <h2 className="font-heading text-[44px] leading-tight font-bold text-text-primary-v2">
            Built with Northline. Running in production.
          </h2>
          <p className="mt-4 font-body text-base text-text-secondary-v2">
            Real outcomes from SaaS founders, ops leaders, and finance teams we&apos;ve partnered with.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {displayed.map((item, index) => (
            <TestimonialCard
              key={item.name}
              {...item}
              variant={featuredIndices.includes(index) ? "featured" : "default"}
              delayMs={index * 60}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
