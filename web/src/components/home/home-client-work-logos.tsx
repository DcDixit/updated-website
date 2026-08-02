import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { clientProductLogos } from "@/content/visuals";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

type HomeClientWorkLogosProps = {
  className?: string;
};

type ProductItem = (typeof clientProductLogos)[number];

function ProductMetric({
  value,
  label,
  size = "md",
}: {
  value: string;
  label: string;
  size?: "md" | "lg";
}) {
  return (
    <div className="min-w-0">
      <p
        className={cn(
          "font-sans font-semibold tracking-tight text-[var(--color-accent)]",
          size === "lg" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
        )}
      >
        {value}
      </p>
      <p className="type-caption mt-1 text-[color:var(--text-secondary)]">{label}</p>
    </div>
  );
}

function FeaturedProduct({ product }: { product: ProductItem }) {
  return (
    <Link
      href={product.href}
      className={cn(
        "group/featured relative flex h-full flex-col overflow-hidden rounded-[var(--card-radius)]",
        "border border-[var(--surface-border)] bg-[var(--card)]",
        "transition-[border-color,box-shadow,transform] duration-300 ease-out",
        "hover:border-[color-mix(in_oklab,var(--color-accent)_35%,var(--surface-border))]",
        "hover:shadow-[0_16px_40px_color-mix(in_oklab,var(--color-accent)_10%,transparent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transition-none lg:hover:-translate-y-0.5"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:min-h-[280px] lg:flex-1">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          className="object-cover transition-transform duration-500 ease-out group-hover/featured:scale-[1.03] motion-reduce:transform-none"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
          <span className="type-badge-label inline-flex items-center gap-2 rounded-md border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
            Featured
          </span>
        </div>
      </div>

      <div className="relative z-[1] flex flex-col gap-5 p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0 max-w-md">
            <p className="type-badge-label text-[11px]">{product.category}</p>
            <h3 className="type-h3 mt-2 text-foreground transition-colors group-hover/featured:text-[var(--color-accent)]">
              {product.name}
            </h3>
            <p className="type-body mt-2 max-w-none text-sm text-[color:var(--text-secondary)]">
              {product.summary}
            </p>
          </div>
          <ProductMetric value={product.metricValue} label={product.metricLabel} size="lg" />
        </div>

        <span className="type-caption inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)]">
          View case study
          <IconArrowUpRight
            size={16}
            stroke={1.75}
            className="transition-transform duration-200 group-hover/featured:translate-x-0.5 group-hover/featured:-translate-y-0.5 motion-reduce:transform-none"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

function RailProduct({ product }: { product: ProductItem }) {
  return (
    <Link
      href={product.href}
      className={cn(
        "group/rail grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] overflow-hidden rounded-[var(--card-radius)]",
        "border border-[var(--surface-border)] bg-[var(--card)]",
        "transition-[border-color,box-shadow,transform] duration-250 ease-out",
        "hover:border-[color-mix(in_oklab,var(--color-accent)_30%,var(--surface-border))]",
        "hover:shadow-[0_10px_28px_color-mix(in_oklab,var(--color-accent)_8%,transparent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transition-none sm:hover:-translate-y-0.5"
      )}
    >
      <div className="relative min-h-[108px] overflow-hidden">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 50vw, 22vw"
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          className="object-cover transition-transform duration-500 ease-out group-hover/rail:scale-[1.04] motion-reduce:transform-none"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between gap-3 p-3.5 sm:p-4">
        <div className="min-w-0">
          <p className="type-caption truncate text-[11px] uppercase tracking-[0.08em] text-[color:var(--text-secondary)]">
            {product.category}
          </p>
          <p className="mt-1 truncate text-sm font-semibold tracking-tight text-foreground transition-colors group-hover/rail:text-[var(--color-accent)]">
            {product.name}
          </p>
        </div>

        <div className="flex items-end justify-between gap-2">
          <ProductMetric value={product.metricValue} label={product.metricLabel} />
          <span
            className="mb-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--surface-border)] text-[color:var(--text-secondary)] transition-[border-color,color,background-color,transform] duration-200 group-hover/rail:border-[color-mix(in_oklab,var(--color-accent)_35%,var(--surface-border))] group-hover/rail:bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] group-hover/rail:text-[var(--color-accent)] group-hover/rail:translate-x-0.5 group-hover/rail:-translate-y-0.5 motion-reduce:transform-none"
            aria-hidden
          >
            <IconArrowUpRight size={14} stroke={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Featured product + supporting work - case imagery linked to case studies. */
export function HomeClientWorkLogos({ className }: HomeClientWorkLogosProps) {
  const featured = clientProductLogos.find((item) => item.featured) ?? clientProductLogos[0];
  const rail = clientProductLogos.filter((item) => item.name !== featured.name);

  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="type-badge-label inline-flex items-center gap-2 text-[12px]">
            <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
            Selected work
          </p>
          <h2 id="shipped-products-heading" className="type-h2 text-balance text-foreground">
            Products we&apos;ve designed and shipped.
          </h2>
          <p className="type-body text-[color:var(--text-secondary)]">
            A few of the platforms, dashboards, and tools we&apos;ve taken from brief to production - each
            linked to the full project story.
          </p>
        </div>
        <Link
          href="/work"
          className="type-caption shrink-0 font-semibold text-[var(--color-accent)] underline-offset-4 transition-opacity hover:opacity-85 hover:underline"
        >
          View all work
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-7">
          <FeaturedProduct product={featured} />
        </div>
        <ul className="grid list-none gap-3 sm:grid-cols-1 lg:col-span-5 lg:gap-4" aria-label="More shipped products">
          {rail.map((product) => (
            <li key={product.name}>
              <RailProduct product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

