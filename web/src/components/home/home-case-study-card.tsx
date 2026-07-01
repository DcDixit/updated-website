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
        "group overflow-hidden rounded-xl border border-border bg-white shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg",
        className
      )}
    >
      <div className="relative">
        <div className="relative aspect-[16/9] overflow-hidden bg-bg-alt">
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
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <span className="font-mono text-xs text-text-muted">[ UI screenshot ]</span>
            </div>
          )}
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-success/20 bg-white/95 px-2.5 py-1 text-xs font-bold text-success shadow-sm backdrop-blur-sm">
          {metric}
        </div>
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">
            {industry}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-1 font-bold text-text-primary">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">{summary}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Read case study →
        </Link>
      </div>
    </div>
  );
}
