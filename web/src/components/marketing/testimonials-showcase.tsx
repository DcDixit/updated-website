"use client";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  IconBuildingSkyscraper,
  IconChevronLeft,
  IconChevronRight,
  IconQuote,
  IconStarFilled,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating?: number;
  project?: string;
};

function StarRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-0.5 text-[var(--color-accent)]", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStarFilled key={i} size={20} stroke={1.5} />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export type TestimonialCarouselApi = {
  item: TestimonialItem;
  index: number;
  count: number;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
};

export function TestimonialCarousel({
  items,
  children,
}: {
  items: readonly TestimonialItem[];
  children: (api: TestimonialCarouselApi) => ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const n = items.length;
  const reducedMotion = useReducedMotion();

  const next = useCallback(() => {
    if (!items.length) return;
    setIndex((v) => (v + 1) % items.length);
  }, [items.length]);
  const prev = useCallback(() => {
    if (!items.length) return;
    setIndex((v) => (v - 1 + items.length) % items.length);
  }, [items.length]);
  const goTo = useCallback(
    (i: number) => {
      if (!items.length) return;
      setIndex(((i % items.length) + items.length) % items.length);
    },
    [items.length]
  );

  useEffect(() => {
    if (n <= 1 || reducedMotion) return;
    const id = window.setInterval(next, 7400);
    return () => window.clearInterval(id);
  }, [n, next, reducedMotion]);

  const api = useMemo<TestimonialCarouselApi | null>(() => {
    if (!items.length || !items[index]) return null;
    return {
      item: items[index]!,
      index,
      count: n,
      next,
      prev,
      goTo,
    };
  }, [items, index, n, next, prev, goTo]);

  if (!api) return null;

  return <>{children(api)}</>;
}

export function TestimonialSlideCard({
  item,
  className,
  live = false,
}: {
  item: TestimonialItem;
  className?: string;
  live?: boolean;
}) {
  return (
    <Card
      aria-live={live ? "polite" : undefined}
      aria-atomic={live ? true : undefined}
      className={cn(
        "card-hover-rise card-on-dark relative overflow-hidden rounded-[var(--card-radius)] p-6",
        className
      )}
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="relative shrink-0">
          <div className="relative size-[4.5rem] overflow-hidden rounded-[var(--image-radius)] border border-[var(--card-on-dark-border)] bg-background sm:size-[5.25rem]">
            <div
              className="flex size-full items-center justify-center bg-[var(--surface-muted)] text-lg font-semibold tracking-wide text-[var(--color-accent-strong)]"
              aria-label={`${item.name}, ${item.role} at ${item.company}`}
              role="img"
            >
              {initials(item.name)}
            </div>
          </div>
          <IconQuote
            size={20}
            stroke={1.5}
            className="absolute -right-1 bottom-0 text-[var(--color-accent)]/40"
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <StarRow />
            <Badge
              variant="outline"
              className="type-badge-label h-auto gap-1.5 rounded-lg border-[var(--card-on-dark-border)] px-2 py-1 text-[11px] font-normal"
            >
              <IconBuildingSkyscraper size={20} stroke={1.5} aria-hidden />
              {item.company}
            </Badge>
          </div>
          <blockquote className="type-body max-w-none text-foreground">“{item.quote}”</blockquote>
          {item.project ? (
            <div className="flex flex-wrap items-center gap-2">
              <p className="type-caption text-[var(--color-accent)]">Project: {item.project}</p>
              <span className="type-caption rounded-full border border-[var(--card-on-dark-border)] px-2 py-0.5">
                Representative client project
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <Separator className="my-6 bg-[var(--section-divider)]" />
      <div>
        <p className="type-body font-semibold text-foreground">{item.name}</p>
        <p className="type-stat-label mt-1">{item.role}</p>
      </div>
    </Card>
  );
}

export function TestimonialNavCluster({
  prev,
  next,
  index,
  count,
  goTo,
  className,
}: {
  prev: () => void;
  next: () => void;
  index: number;
  count: number;
  goTo: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        className="rounded-lg transition-opacity duration-150 ease-out hover:opacity-90"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <IconChevronLeft size={20} stroke={1.5} />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        className="rounded-lg transition-opacity duration-150 ease-out hover:opacity-90"
        onClick={next}
        aria-label="Next testimonial"
      >
        <IconChevronRight size={20} stroke={1.5} />
      </Button>
      <div className="ml-1 flex gap-1.5 pl-1" role="tablist" aria-label="Choose testimonial">
        {Array.from({ length: count }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === index}
            className={cn(
              "h-2 rounded-full transition-all duration-200 ease-out",
              idx === index
                ? "w-6 bg-[var(--color-accent)]"
                : "w-2 bg-[var(--text-secondary)]/35 hover:bg-[var(--text-secondary)]/55"
            )}
            onClick={() => goTo(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
