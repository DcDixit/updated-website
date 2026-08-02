import { TechBrandLogo } from "@/components/marketing/tech-brand-logo";
import type { TechBrandItem, TechBrandSlug } from "@/lib/tech-brands";
import { TECH_BRAND_LABELS, techBrandCategories } from "@/lib/tech-brands";
import { cn } from "@/lib/utils";

type TechLogoGridProps = {
  items?: readonly TechBrandItem[];
  /** Categorized layout for AI & tools section */
  categorized?: boolean;
  className?: string;
  /** Animate as marquee on desktop only */
  marquee?: boolean;
};

function TechLogoTile({
  brand,
  showLabel = false,
  compact = false,
}: {
  brand: TechBrandSlug;
  showLabel?: boolean;
  compact?: boolean;
}) {
  const label = TECH_BRAND_LABELS[brand];

  if (showLabel) {
    return (
      <li
        className={cn(
          "group/logo flex shrink-0 items-center rounded-xl border border-[var(--surface-border)] bg-[var(--card)]",
          "shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200",
          "hover:border-[color-mix(in_oklab,var(--color-accent)_25%,var(--surface-border))]",
          "hover:shadow-[0_4px_14px_color-mix(in_oklab,var(--color-accent)_6%,transparent)]",
          "motion-reduce:transform-none",
          compact
            ? "gap-2 px-2.5 py-2 sm:gap-2.5 sm:px-3 sm:py-2.5"
            : "gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-3.5 sm:py-3"
        )}
      >
        <div
          className={cn(
            "flex shrink-0 items-center justify-center",
            compact ? "size-7 sm:size-8" : "size-8 sm:size-9"
          )}
        >
          <TechBrandLogo
            brand={brand}
            className="opacity-95 transition-opacity duration-200 group-hover/logo:opacity-100"
          />
        </div>
        <span
          className={cn(
            "whitespace-nowrap font-semibold tracking-tight text-foreground",
            compact ? "text-[12px] sm:text-[13px]" : "text-[13px] sm:text-sm"
          )}
        >
          {label}
        </span>
      </li>
    );
  }

  return (
    <li className="group/logo flex h-12 w-[5.5rem] shrink-0 items-center justify-center sm:h-14 sm:w-24">
      <TechBrandLogo
        brand={brand}
        className="opacity-80 transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-none group-hover/logo:scale-[1.06] group-hover/logo:opacity-100"
      />
    </li>
  );
}

export function TechLogoGrid({ items, categorized = false, className, marquee = false }: TechLogoGridProps) {
  if (categorized) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-[var(--card-radius)] border border-[var(--surface-border)]",
          className
        )}
      >
        <div className="grid gap-px bg-[var(--section-divider)] sm:grid-cols-2 lg:grid-cols-6">
          {techBrandCategories.map((cat, index) => (
            <div
              key={cat.id}
              className={cn(
                "bg-[var(--card)] p-5 sm:p-6",
                index < 3 ? "lg:col-span-2" : "lg:col-span-3",
                index === techBrandCategories.length - 1 && "sm:col-span-2 lg:col-span-3"
              )}
            >
              <p className="type-badge-label mb-4">{cat.label}</p>
              <ul className="flex list-none flex-wrap gap-2 sm:gap-2.5" aria-label={cat.label}>
                {cat.brands.map((brand) => (
                  <TechLogoTile key={brand} brand={brand} showLabel compact />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const brands = items ?? [];

  if (marquee) {
    const doubled = [...brands, ...brands];
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
        <ul
          className="home-client-marquee flex w-max list-none items-center gap-4 px-6 motion-reduce:animate-none max-md:hidden"
          aria-label="Technologies and platforms"
        >
          {doubled.map((item, i) => (
            <TechLogoTile key={`${item.brand}-${i}`} brand={item.brand} showLabel />
          ))}
        </ul>
        <ul
          className="mx-auto grid max-w-4xl list-none grid-cols-2 place-items-stretch gap-3 px-4 sm:grid-cols-3 md:hidden"
          aria-label="Technologies and platforms"
        >
          {brands.map((item) => (
            <TechLogoTile key={item.brand} brand={item.brand} showLabel />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul
      className={cn(
        "mx-auto grid max-w-4xl list-none grid-cols-4 place-items-center gap-x-6 gap-y-8 sm:grid-cols-6 lg:grid-cols-8",
        className
      )}
      aria-label="Technologies and platforms"
    >
      {brands.map((item) => (
        <TechLogoTile key={item.brand} brand={item.brand} />
      ))}
    </ul>
  );
}

