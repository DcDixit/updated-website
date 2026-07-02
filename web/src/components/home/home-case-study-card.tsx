import Link from "next/link";
import Image from "next/image";

import { caseStudyIndustryLabels } from "@/data/homepage";
import { caseStudyVisuals } from "@/content/visuals";
import type { HomepageCaseStudySlug } from "@/data/homepage";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

type HomeCaseStudyCardProps = {
  slug: HomepageCaseStudySlug;
  title: string;
  summary: string;
  metric: string;
  href: string;
  tags?: readonly string[];
  className?: string;
};

export function HomeCaseStudyCard({
  slug,
  title,
  summary,
  metric,
  href,
  className,
}: HomeCaseStudyCardProps) {
  const visual = caseStudyVisuals[slug];
  const industry = caseStudyIndustryLabels[slug] ?? "Product · Digital";

  return (
    <div
      className={cn(
        "surface-card card-hover-rise group overflow-hidden",
        className
      )}
    >
      <div className="relative">
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-muted)]">
          {visual ? (
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5">
              <span className="font-mono text-xs text-[color:var(--text-secondary)]">[ UI screenshot ]</span>
            </div>
          )}
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-[var(--color-success)]/20 bg-[var(--surface-elevated)]/95 px-2.5 py-1 text-xs font-bold text-[var(--color-success)] shadow-sm backdrop-blur-sm">
          {metric}
        </div>
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-[var(--color-primary)] px-2.5 py-1 text-xs font-semibold text-white">
            {industry}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-1.5 font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-[color:var(--text-secondary)]">{summary}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
        >
          Read case study →
        </Link>
      </div>
    </div>
  );
}
