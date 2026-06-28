import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";

type CaseStudyCardProps = {
  title: string;
  summary: string;
  metric: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tags?: readonly string[];
  className?: string;
};

export function CaseStudyCard({
  title,
  summary,
  metric,
  href,
  imageSrc,
  imageAlt,
  tags = [],
  className,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <article className="surface-card card-hover-rise flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {/* Gradient overlay for readability */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)" }}
            aria-hidden
          />
          {/* Metric badge */}
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/50 bg-background/90 px-3 py-1 backdrop-blur-sm">
            <IconTrendingUp size={12} stroke={2} className="text-[var(--color-accent)]" aria-hidden />
            <span className="type-caption font-semibold tabular-nums text-foreground text-[11px]">{metric}</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="type-h3 transition-colors group-hover:text-[var(--color-accent)]">{title}</h3>
          <p className="type-body mt-3 flex-1 text-sm text-[color:var(--text-secondary)]">{summary}</p>
          {tags.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal text-[11px]">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
          <span className="type-body mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
            View case study
            <IconArrowUpRight
              size={18}
              stroke={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
