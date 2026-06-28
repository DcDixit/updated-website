import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

type SolutionPillarCardProps = {
  title: string;
  summary: string;
  market: string;
  href: string;
  services: readonly string[];
  cta: string;
  icon: React.ComponentType<{ size?: number; stroke?: number; className?: string; "aria-hidden"?: boolean }>;
  featured?: boolean;
  className?: string;
};

export function SolutionPillarCard({
  title,
  summary,
  market,
  href,
  services,
  cta,
  icon: Icon,
  featured = false,
  className,
}: SolutionPillarCardProps) {
  const visibleServices = services.slice(0, 3);
  const extraServices = services.length - visibleServices.length;

  return (
    <Link
      href={href}
      className={cn("group block h-full", className)}
      data-track="solution_card_click"
      data-track-location="solution-section"
      data-track-label={title}
    >
      <article
        className={cn(
          "surface-card card-hover-rise flex h-full flex-col p-5 sm:p-6",
          featured && "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.03]"
        )}
      >
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-lg border border-[var(--surface-border)]",
              featured ? "bg-[var(--color-accent)]/10" : "bg-[var(--surface-muted)]"
            )}
          >
            <Icon size={20} stroke={1.5} className="text-[var(--color-accent)]" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="type-caption line-clamp-1 text-[11px] text-[color:var(--text-secondary)]">{market}</p>
            <h3 className="type-h3 mt-1 transition-colors group-hover:text-[var(--color-accent)]">{title}</h3>
          </div>
        </div>

        <p className="type-body mt-4 line-clamp-3 max-w-none text-sm leading-relaxed text-[color:var(--text-secondary)]">
          {summary}
        </p>

        <div className="mt-auto pt-5">
          <ul className="grid min-h-[3.25rem] grid-cols-2 gap-1.5 content-start" aria-label={`${title} capabilities`}>
            {visibleServices.map((service) => (
              <li key={service}>
                <span className="type-caption block truncate rounded-md border border-[var(--surface-border)] bg-[var(--surface-muted)] px-2 py-1 text-[11px]">
                  {service}
                </span>
              </li>
            ))}
            {extraServices > 0 ? (
              <li>
                <span className="type-caption block rounded-md border border-dashed border-[var(--surface-border)] px-2 py-1 text-[11px] text-[color:var(--text-secondary)]">
                  +{extraServices} more
                </span>
              </li>
            ) : null}
          </ul>

          <span className="type-body mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
            {cta}
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
