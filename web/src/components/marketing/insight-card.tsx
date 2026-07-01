import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconClock } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import type { InsightSlug } from "@/content/insights";
import { cn } from "@/lib/utils";

type InsightCardProps = {
  slug: InsightSlug;
  title: string;
  category: string;
  published: string;
  excerpt: string;
  read: string;
  imageSrc: string;
  imageAlt: string;
  showCta?: boolean;
  className?: string;
};

export function InsightCard({
  slug,
  title,
  category,
  published,
  excerpt,
  read,
  imageSrc,
  imageAlt,
  showCta = true,
  className,
}: InsightCardProps) {
  return (
    <article className={cn("surface-card card-hover-rise group flex h-full flex-col overflow-hidden", className)}>
      <Link
        href={`/insights/${slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%)" }}
          aria-hidden
        />
        {/* Category badge overlay */}
        <div className="absolute left-4 top-4">
          <Badge variant="outline" className="border-[var(--color-accent)]/40 bg-background/90 backdrop-blur-sm text-[11px] font-medium">
            {category}
          </Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="type-caption text-[11px]">{published}</span>
          <span className="text-[var(--surface-border)] text-xs" aria-hidden>·</span>
          <span className="flex items-center gap-1 type-caption text-[11px]">
            <IconClock size={11} stroke={1.75} aria-hidden />
            {read}
          </span>
        </div>

        <h2 className="type-h3">
          <Link
            href={`/insights/${slug}`}
            className="link-subtle hover:text-[var(--color-accent)] transition-colors"
          >
            {title}
          </Link>
        </h2>
        <p className="type-body mt-3 flex-1 text-sm text-[color:var(--text-secondary)]">{excerpt}</p>

        {showCta ? (
          <Link
            href={`/insights/${slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-80"
          >
            Read article
            <IconArrowUpRight
              size={16}
              stroke={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
