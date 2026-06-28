"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const isVisible = reducedMotion || visible;

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(el);
        timeoutId = setTimeout(() => setVisible(true), delayMs);
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delayMs, reducedMotion]);

  return (
    <div
      ref={ref}
      className={cn("marketing-reveal", isVisible && "marketing-reveal-visible", className)}
    >
      {children}
    </div>
  );
}
