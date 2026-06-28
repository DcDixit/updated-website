"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

function parseStat(value: string): { digits: number; suffix: string } | null {
  const m = value.trim().match(/^(\d+)(.*)$/);
  if (!m) return null;
  return { digits: Number(m[1]), suffix: m[2] ?? "" };
}

export function AnimatedStatValue({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseStat(value), [value]);
  const target = parsed?.digits ?? 0;
  const suffix = parsed?.suffix ?? "";
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    hasAnimated.current = false;

    if (!parsed) {
      setDisplay(value);
      return;
    }

    setDisplay(`0${suffix}`);
  }, [parsed, suffix, value]);

  useEffect(() => {
    if (!parsed) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setDisplay(`${target}${suffix}`);
        return;
      }

      const start = performance.now();
      const duration = 1100;

      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - progress) ** 3;
        const current = Math.round(target * eased);
        setDisplay(`${current}${suffix}`);
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        }
      };

      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animate();
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [parsed, suffix, target]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={value}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
