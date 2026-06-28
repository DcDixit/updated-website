import Link from "next/link";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";

import { MarketingImage } from "@/components/marketing/marketing-image";
import type { VisualAsset } from "@/content/visuals";
import { cn } from "@/lib/utils";

type SolutionSpotlightCardProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  services: readonly string[];
  href: string;
  ctaLabel: string;
  visual: VisualAsset;
  className?: string;
};

export function SolutionSpotlightCard({
  id,
  eyebrow,
  title,
  description,
  services,
  href,
  ctaLabel,
  visual,
  className,
}: SolutionSpotlightCardProps) {
  return (
    <article
      id={id}
      className={cn(
        "group content-card card-hover-rise scroll-mt-[var(--header-offset)] flex h-full flex-col overflow-hidden p-0",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <MarketingImage
          src={visual.src}
          alt={visual.alt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          aspectClassName="aspect-[16/9] min-h-0 rounded-none border-0"
          overlay="bottom"
          className="rounded-none border-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        {/* Eyebrow overlay */}
        <div className="absolute left-4 top-4">
          <span className="highlight-badge">
            <span className="accent-live-dot" aria-hidden />
            {eyebrow}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="space-y-2">
          <h3 className="type-h3 text-balance transition-colors group-hover:text-[var(--color-accent)]">
            {title}
          </h3>
          <p className="type-body max-w-none text-sm leading-relaxed text-[color:var(--text-secondary)]">
            {description}
          </p>
        </div>

        {/* Services as check-list */}
        <ul className="grid gap-1.5 sm:grid-cols-2" aria-label="Key capabilities">
          {services.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <IconCheck
                size={13}
                stroke={2.5}
                className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                aria-hidden
              />
              <span className="type-caption text-[11px] leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)] text-sm no-underline transition-opacity hover:opacity-80"
        >
          {ctaLabel}
          <IconArrowUpRight
            size={16}
            stroke={1.5}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
