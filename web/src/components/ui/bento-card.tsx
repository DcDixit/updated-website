import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { MarketingImage } from "@/components/marketing/marketing-image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BentoCardIcon = React.ComponentType<{
  size?: number;
  stroke?: number;
  className?: string;
  "aria-hidden"?: boolean;
}>;

export type BentoCardProps = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  ctaVariant?: "primary" | "secondary";
  icon?: BentoCardIcon;
  eyebrow?: string;
  tags?: readonly string[];
  visual?: { src: string; alt: string };
  featured?: boolean;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  /** When true, visual renders beside content on large screens (featured layout). */
  visualAside?: boolean;
  trackingLabel?: string;
};

export function BentoCard({
  title,
  description,
  href,
  cta,
  ctaVariant,
  icon: Icon,
  eyebrow,
  tags,
  visual,
  featured = false,
  className,
  contentClassName,
  children,
  visualAside = false,
  trackingLabel,
}: BentoCardProps) {
  const resolvedCtaVariant = ctaVariant ?? (featured ? "primary" : "secondary");
  const showAsideVisual = Boolean(visual && visualAside && featured);

  const inner = (
    <article
      className={cn(
        "bento-card bento-card-interactive group relative flex h-full overflow-hidden",
        showAsideVisual ? "flex-col lg:flex-row lg:items-stretch" : "flex-col",
        featured && "bento-card-featured",
        className
      )}
    >
      <div className="bento-card-glow" aria-hidden />

      <div
        className={cn(
          "relative z-[1] flex flex-1 flex-col",
          featured ? "p-7 sm:p-8 lg:p-10" : "p-6 sm:p-7",
          contentClassName
        )}
      >
        {Icon ? (
          <div className={cn("icon-container-md mb-4 w-fit", featured && "mb-5")}>
            <Icon size={featured ? 22 : 20} stroke={1.5} aria-hidden />
          </div>
        ) : null}

        {eyebrow ? <p className="type-badge-label mb-2">{eyebrow}</p> : null}

        <h3
          className={cn(
            "type-h3 text-balance text-foreground transition-colors",
            href && "group-hover:text-[var(--color-accent)]"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "type-body mt-3 max-w-none leading-relaxed text-[color:var(--text-secondary)]",
            featured ? "text-base" : "text-sm"
          )}
        >
          {description}
        </p>

        {tags && tags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} capabilities`}>
            {tags.map((tag) => (
              <li key={tag}>
                <span className="type-caption inline-flex rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-3 py-1 text-[11px]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        {children}

        {cta && href ? (
          <div className="mt-auto pt-6">
            <span
              className={cn(
                buttonVariants({
                  variant: resolvedCtaVariant,
                  size: featured ? "cta" : "lg",
                }),
                "pointer-events-none inline-flex gap-2"
              )}
            >
              {cta}
              <IconArrowUpRight size={featured ? 20 : 18} stroke={1.5} aria-hidden />
            </span>
          </div>
        ) : null}
      </div>

      {visual ? (
        <div
          className={cn(
            "relative z-[1]",
            showAsideVisual
              ? "hidden min-h-[14rem] border-t border-[var(--surface-border)] lg:block lg:w-[min(42%,22rem)] lg:shrink-0 lg:border-l lg:border-t-0"
              : "mt-auto px-6 pb-6 pt-2 sm:px-7 sm:pb-7"
          )}
        >
          <MarketingImage
            src={visual.src}
            alt={visual.alt}
            sizes={showAsideVisual ? "320px" : "(max-width: 768px) 100vw, 400px"}
            aspectClassName={cn(
              "aspect-[4/3] w-full",
              showAsideVisual && "h-full min-h-[14rem] rounded-none border-0 lg:aspect-auto"
            )}
            overlay="bottom"
            className={cn(showAsideVisual && "h-full rounded-none border-0")}
          />
        </div>
      ) : null}
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        data-track="bento_card_click"
        data-track-location="homepage"
        data-track-label={trackingLabel ?? title}
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
