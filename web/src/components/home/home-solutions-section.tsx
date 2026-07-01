"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { homepageSolutionSections, primaryCtas } from "@/content/site-content";
import { cn } from "@/lib/utils";

type SolutionItem = (typeof homepageSolutionSections)[number];

const solutionGroups = [
  {
    label: "Core markets",
    items: homepageSolutionSections.slice(0, 2),
  },
  {
    label: "Platform & operations",
    items: homepageSolutionSections.slice(2),
  },
] as const;

function SolutionPreviewPanel({ solution, index }: { solution: SolutionItem; index: number }) {
  const Icon = solution.icon;
  const visibleServices = solution.services.slice(0, 4);
  const extraServices = solution.services.length - visibleServices.length;

  return (
    <div className="solution-preview-enter flex h-full flex-col px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8">
          <Icon size={22} stroke={1.5} className="text-[var(--color-accent)]" aria-hidden />
        </div>
        <p className="type-caption tabular-nums text-[color:var(--text-secondary)]">
          {String(index + 1).padStart(2, "0")} / {String(homepageSolutionSections.length).padStart(2, "0")}
        </p>
      </div>

      <p className="type-badge-label mt-6 text-[11px]">{solution.market}</p>
      <h3 className="type-h3 mt-2 max-w-lg text-balance">{solution.title}</h3>
      <p className="type-body mt-4 max-w-xl text-[color:var(--text-body)]">{solution.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${solution.title} capabilities`}>
        {visibleServices.map((service) => (
          <li key={service}>
            <span className="type-caption inline-flex rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-3 py-1 text-[11px]">
              {service}
            </span>
          </li>
        ))}
        {extraServices > 0 ? (
          <li>
            <span className="type-caption inline-flex rounded-full border border-dashed border-[var(--surface-border)] px-3 py-1 text-[11px] text-[color:var(--text-secondary)]">
              +{extraServices} more
            </span>
          </li>
        ) : null}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          href={solution.href}
          className={cn(buttonVariants({ variant: "primary", size: "cta" }), "inline-flex w-full gap-2 sm:w-auto")}
          data-track="solution_card_click"
          data-track-location="solution-section"
          data-track-label={solution.title}
        >
          {solution.cta}
          <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
        </Link>
      </div>
    </div>
  );
}

function SolutionListItem({
  solution,
  index,
  isActive,
  onSelect,
  compact = false,
}: {
  solution: SolutionItem;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  compact?: boolean;
}) {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      role="tab"
      tabIndex={isActive ? 0 : -1}
      id={`solution-tab-${solution.slug}${compact ? "-mobile" : ""}`}
      aria-selected={isActive}
      aria-controls={`solution-panel-${solution.slug}${compact ? "-mobile" : ""}`}
      onClick={onSelect}
      className={cn(
        "group relative flex shrink-0 items-center gap-3 text-left transition-colors",
        compact ? "rounded-full px-4 py-2.5" : "w-full px-5 py-3.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)]/35",
        isActive
          ? compact
            ? "bg-primary text-white"
            : "bg-[var(--card)]"
          : compact
            ? "border border-[var(--surface-border)] bg-[var(--card)] hover:border-[var(--color-accent)]/40"
            : "hover:bg-[var(--card)]/60"
      )}
    >
      {!compact ? (
        <span
          className={cn(
            "type-caption w-6 shrink-0 tabular-nums transition-colors",
            isActive ? "font-medium text-[var(--color-accent)]" : "text-[color:var(--text-secondary)]"
          )}
        >
          {indexLabel}
        </span>
      ) : null}
      <span
        className={cn(
          "type-body min-w-0 flex-1 text-sm transition-colors",
          compact ? "whitespace-nowrap font-medium" : "flex-1",
          isActive
            ? compact
              ? "text-white"
              : "font-semibold text-foreground"
            : compact
              ? "text-[color:var(--text-body)]"
              : "text-[color:var(--text-secondary)] group-hover:text-foreground"
        )}
      >
        {solution.title}
      </span>
      {!compact ? (
        <IconArrowUpRight
          size={15}
          stroke={1.5}
          className={cn(
            "shrink-0 transition-all",
            isActive ? "text-[var(--color-accent)] opacity-100" : "opacity-0 group-hover:opacity-50"
          )}
          aria-hidden
        />
      ) : null}
    </button>
  );
}

export function HomeSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = homepageSolutionSections[activeIndex];

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const lastIndex = homepageSolutionSections.length - 1;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((current) => (current >= lastIndex ? 0 : current + 1));
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? lastIndex : current - 1));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(lastIndex);
    }
  }, []);

  return (
    <>
      <SectionHeader
        eyebrow="Solutions"
        title="Two industries. One focused team."
        description="Design, engineering, and AI delivery under one roof — each solution area backed by specialists who know the market."
      />

      <div className="mt-10 hidden overflow-hidden rounded-[var(--card-radius)] border border-[var(--surface-border)] bg-[var(--card)] md:grid md:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
        <div
          role="tablist"
          aria-label="Solution areas"
          aria-orientation="vertical"
          className="flex flex-col border-r border-[var(--surface-border)] bg-[var(--surface-muted)]/50"
          onKeyDown={handleKeyDown}
        >
          {solutionGroups.map((group, groupIndex) => (
            <div key={group.label} className={cn(groupIndex > 0 && "border-t border-[var(--surface-border)]")}>
              <p className="type-badge-label px-5 pb-2 pt-4 text-[10px]">{group.label}</p>
              <div className="space-y-0.5 px-2 pb-3">
                {group.items.map((solution) => {
                  const index = homepageSolutionSections.findIndex((item) => item.slug === solution.slug);
                  return (
                    <SolutionListItem
                      key={solution.slug}
                      solution={solution}
                      index={index}
                      isActive={activeIndex === index}
                      onSelect={() => setActiveIndex(index)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`solution-panel-${activeSolution.slug}`}
          aria-labelledby={`solution-tab-${activeSolution.slug}`}
          className="min-h-[24rem]"
        >
          <SolutionPreviewPanel key={activeSolution.slug} solution={activeSolution} index={activeIndex} />
        </div>
      </div>

      <div className="mt-8 md:hidden">
        <div
          role="tablist"
          aria-label="Solution areas"
          aria-orientation="horizontal"
          className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-4"
          onKeyDown={handleKeyDown}
        >
          {homepageSolutionSections.map((solution, index) => (
            <SolutionListItem
              key={solution.slug}
              solution={solution}
              index={index}
              isActive={activeIndex === index}
              onSelect={() => setActiveIndex(index)}
              compact
            />
          ))}
        </div>

        <div
          role="tabpanel"
          id={`solution-panel-${activeSolution.slug}-mobile`}
          aria-labelledby={`solution-tab-${activeSolution.slug}-mobile`}
          className="overflow-hidden rounded-[var(--card-radius)] border border-[var(--surface-border)] bg-[var(--card)]"
        >
          <SolutionPreviewPanel key={activeSolution.slug} solution={activeSolution} index={activeIndex} />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/solutions"
          className={cn(buttonVariants({ variant: "link", size: "default" }), "inline-flex items-center gap-2 text-base font-semibold")}
        >
          View all solutions
          <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
        </Link>
        <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full sm:w-auto")}>
          {primaryCtas.book.label}
        </Link>
      </div>
    </>
  );
}
