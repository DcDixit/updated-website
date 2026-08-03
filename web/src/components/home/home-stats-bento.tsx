import Link from "next/link";
import { IconArrowUpRight, IconStarFilled } from "@tabler/icons-react";

import { AnimatedStatValue } from "@/components/marketing/animated-stat-value";
import { reviewProfiles } from "@/content/site-content";
import type { HomepageStat } from "@/data/homepage";
import { cn } from "@/lib/utils";

type HomeStatsBentoProps = {
  stats: readonly HomepageStat[];
  className?: string;
};

export function HomeStatsBento({ stats, className }: HomeStatsBentoProps) {
  const [featuredStat, ...supportingStats] = stats;
  const reviewProfile = reviewProfiles.google;

  return (
    <div className={cn("bento-grid grid grid-cols-12", className)}>
      {/* Featured primary metric */}
      <article className="bento-card bento-card-featured relative col-span-12 overflow-hidden lg:col-span-6 lg:row-span-2">
        <div className="bento-card-glow" aria-hidden />
        <div className="relative z-[1] flex h-full flex-col justify-center p-8 sm:p-10 lg:p-12">
          <p className="type-badge-label">Track record</p>
          <p className="mt-4">
            <AnimatedStatValue
              value={featuredStat.value}
              className="type-stat text-[clamp(3rem,6vw,4.5rem)] font-sans text-[var(--color-accent)]"
            />
          </p>
          <h3 className="type-h3 mt-3 text-foreground">{featuredStat.label}</h3>
          <p className="type-body mt-2 max-w-sm text-[color:var(--text-secondary)]">{featuredStat.caption}</p>
          <Link
            href="/work"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5"
          >
            See our work
            <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
          </Link>
        </div>
      </article>

      {/* Supporting metrics */}
      {supportingStats.map((stat) => (
        <article
          key={stat.label}
          className="bento-card relative col-span-6 overflow-hidden sm:col-span-4 lg:col-span-2"
        >
          <div className="bento-card-glow" aria-hidden />
          <div className="relative z-[1] flex h-full flex-col justify-center p-6 sm:p-7">
            <p>
              <AnimatedStatValue
                value={stat.value}
                className="type-stat text-[clamp(1.75rem,3vw,2.25rem)] font-sans text-[var(--color-accent)]"
              />
            </p>
            <p className="type-stat-label mt-2 font-medium text-foreground">{stat.label}</p>
            <p className="type-caption mt-1 text-[12px] leading-snug">{stat.caption}</p>
          </div>
        </article>
      ))}

      {/* Google reviews proof */}
      <Link
        href={reviewProfile.href}
        target="_blank"
        rel="noopener noreferrer"
        className="bento-card bento-card-interactive group relative col-span-12 overflow-hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35 lg:col-span-6"
      >
        <div className="bento-card-glow" aria-hidden />
        <div className="relative z-[1] flex h-full flex-col justify-between gap-4 p-7 sm:flex-row sm:items-center sm:p-8">
          <div className="min-w-0">
            <p className="type-badge-label">{reviewProfile.label} reviews</p>
            <p className="type-h3 mt-2 text-foreground transition-colors group-hover:text-[var(--color-accent)]">
              {reviewProfile.headline}
            </p>
            <p className="type-caption mt-1">{reviewProfile.subtitle}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex gap-0.5 text-[var(--color-accent)]" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={16} />
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
              Read reviews
              <IconArrowUpRight
                size={16}
                stroke={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
