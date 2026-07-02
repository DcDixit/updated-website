"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

export function CtaBottom() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-surface-base py-20 sm:py-[140px]">
      <div className="glow-cta-center" aria-hidden="true" />
      <div className="cta-dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal-up mx-auto max-w-[640px] text-center"
        >
          <p className="eyebrow-amber mb-3">START YOUR PROJECT</p>
          <h2 className="font-heading text-4xl leading-tight font-bold text-text-primary-v2 sm:text-[52px]">
            Let&apos;s build something that actually ships.
          </h2>
          <p className="mt-4 font-body text-[17px] leading-relaxed text-text-secondary-v2">
            From discovery to deployment — Northline moves fast without cutting corners. NDA-first.
            Documentation included.
          </p>
          <Link
            href="/contact"
            className={cn(
              "btn-primary mt-8 inline-flex items-center rounded-[10px] px-9 py-4",
              "font-body text-base font-semibold text-white",
              "bg-[linear-gradient(135deg,#1B2A6B,#0F1A4A)]",
              "shadow-[0_4px_24px_rgba(27,42,107,0.50)]"
            )}
          >
            Start a project →
          </Link>
          <p className="mt-4 font-body text-xs text-text-muted-v2">
            No retainer required · Reply within 24hrs · India delivery, global clients
          </p>
        </div>
      </Container>
    </section>
  );
}
