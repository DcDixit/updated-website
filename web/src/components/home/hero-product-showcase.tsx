import Image from "next/image";

import { pageHeroVisuals } from "@/content/visuals";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

type HeroProductShowcaseProps = {
  className?: string;
};

/** Hero visual - featured product screenshot with outcome metric. */
export function HeroProductShowcase({ className }: HeroProductShowcaseProps) {
  const visual = pageHeroVisuals.home;

  return (
    <div className={cn("relative mx-auto w-full max-w-[580px]", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklab, var(--color-accent) 22%, transparent) 0%, transparent 70%)",
        }}
      />
      <figure className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--card)] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.28)]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 580px"
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
            className="object-cover object-center transition-transform duration-700 ease-out motion-safe:hover:scale-[1.02]"
          />
        </div>
        <figcaption className="type-caption border-t border-[var(--surface-border)] px-4 py-3.5 text-center text-[color:var(--text-secondary)]">
          Live product view — your product here
        </figcaption>
      </figure>
    </div>
  );
}

