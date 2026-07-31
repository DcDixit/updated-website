import Image from "next/image";

import { pageHeroVisuals } from "@/content/visuals";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

type HeroProductShowcaseProps = {
  className?: string;
};

/** Hero visual — featured product screenshot with outcome metric. */
export function HeroProductShowcase({ className }: HeroProductShowcaseProps) {
  const visual = pageHeroVisuals.home;

  return (
    <div className={cn("relative mx-auto w-full max-w-[580px]", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklab, var(--color-accent) 25%, transparent) 0%, transparent 70%)",
        }}
      />
      <figure className="overflow-hidden rounded-xl border border-[var(--surface-border)] shadow-2xl">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 580px"
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
            className="object-cover object-center"
          />
        </div>
        <figcaption className="type-caption px-4 py-3 text-center text-[color:var(--text-secondary)]">
          Live product view — your product here
        </figcaption>
      </figure>
      <div
        className="metric-callout absolute -bottom-3 left-4 z-[2] sm:-left-3 sm:bottom-6"
        aria-label="Client outcome: 32 percent reduction in handle time"
      >
        <span className="type-caption font-semibold tabular-nums text-[var(--color-accent)]">−32%</span>
        <span className="type-caption text-[color:var(--text-secondary)]">handle time</span>
      </div>
    </div>
  );
}
