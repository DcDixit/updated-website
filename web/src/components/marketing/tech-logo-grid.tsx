import { TechBrandLogo } from "@/components/marketing/tech-brand-logo";
import type { TechBrandItem, TechBrandSlug } from "@/lib/tech-brands";
import { techBrandCategories } from "@/lib/tech-brands";
import { cn } from "@/lib/utils";

type TechLogoGridProps = {
  items?: readonly TechBrandItem[];
  /** Categorized layout for AI & tools section */
  categorized?: boolean;
  className?: string;
  /** Animate as marquee on desktop only */
  marquee?: boolean;
};

function TechLogoTile({ brand }: { brand: TechBrandSlug }) {
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
      <div className={cn("grid gap-10 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {techBrandCategories.map((cat) => (
          <div key={cat.id}>
            <p className="type-badge-label mb-4">{cat.label}</p>
            <ul
              className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-6"
              aria-label={cat.label}
            >
              {cat.brands.map((brand) => (
                <TechLogoTile key={brand} brand={brand} />
              ))}
            </ul>
          </div>
        ))}
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
            <TechLogoTile key={`${item.brand}-${i}`} brand={item.brand} />
          ))}
        </ul>
        <ul
          className="mx-auto grid max-w-3xl list-none grid-cols-4 place-items-center gap-x-4 gap-y-6 px-4 sm:grid-cols-6 md:hidden"
          aria-label="Technologies and platforms"
        >
          {brands.map((item) => (
            <TechLogoTile key={item.brand} brand={item.brand} />
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
