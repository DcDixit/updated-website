import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { AnimatedStatValue } from "@/components/marketing/animated-stat-value";
import { reviewProfiles } from "@/content/site-content";
import type { HomepageStat } from "@/data/homepage";
import { cn } from "@/lib/utils";

type HomeStatsBentoProps = {
  stats: readonly HomepageStat[];
  className?: string;
};

/**
 * Collaboration / delivery signals only. Returns null when there is nothing
 * verified to show (empty stats and no review profile).
 */
export function HomeStatsBento({ stats, className }: HomeStatsBentoProps) {
  const reviewProfile = reviewProfiles.google;
  const showReview = Boolean(reviewProfile.href) && Boolean(reviewProfile.headline);

  if (stats.length === 0 && !showReview) return null;

  const [featuredStat, ...supportingStats] = stats;
  const isCollaborationOnly =
    stats.length === 1 && /time zone/i.test(featuredStat?.label ?? "");

  return (
    <div className={cn("bento-grid grid grid-cols-12", className)}>
      {featuredStat ? (
        <article
          className={cn(
            "bento-card relative col-span-12 overflow-hidden",
            isCollaborationOnly ? "lg:col-span-12" : "bento-card-featured lg:col-span-6 lg:row-span-2"
          )}
        >
          <div
            className={cn(
              "relative flex h-full flex-col justify-center p-8 sm:p-10",
              isCollaborationOnly ? "lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:p-10" : "lg:p-12"
            )}
          >
            <div className="min-w-0">
              <p className="type-badge-label">{isCollaborationOnly ? "How we collaborate" : "Track record"}</p>
              <p className="mt-4">
                <AnimatedStatValue
                  value={featuredStat.value}
                  className={cn(
                    "type-stat font-sans text-[var(--color-accent)]",
                    isCollaborationOnly
                      ? "text-[clamp(2.5rem,5vw,3.5rem)]"
                      : "text-[clamp(3rem,6vw,4.5rem)]"
                  )}
                />
              </p>
              <h3 className="type-h3 mt-3 text-foreground">{featuredStat.label}</h3>
              <p className="type-body mt-2 max-w-sm text-[color:var(--text-secondary)]">{featuredStat.caption}</p>
            </div>
            <Link
              href="/process"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 lg:mt-0 lg:shrink-0"
            >
              How we work
              <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
            </Link>
          </div>
        </article>
      ) : null}

      {supportingStats.map((stat) => (
        <article
          key={stat.label}
          className="bento-card relative col-span-6 overflow-hidden sm:col-span-4 lg:col-span-2"
        >
          <div className="relative flex h-full flex-col justify-center p-6 sm:p-7">
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

      {showReview && reviewProfile.href && reviewProfile.headline ? (
        <Link
          href={reviewProfile.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card bento-card-interactive group relative col-span-12 overflow-hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35 lg:col-span-6"
        >
          <div className="relative flex h-full flex-col justify-between gap-4 p-7 sm:flex-row sm:items-center sm:p-8">
            <div className="min-w-0">
              <p className="type-badge-label">{reviewProfile.label} reviews</p>
              <p className="type-h3 mt-2 text-foreground transition-colors group-hover:text-[var(--color-accent)]">
                {reviewProfile.headline}
              </p>
              {reviewProfile.subtitle ? (
                <p className="type-caption mt-1">{reviewProfile.subtitle}</p>
              ) : null}
            </div>
            <div className="flex shrink-0 items-center gap-3">
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
      ) : null}
    </div>
  );
}
