"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { clientProductLogos, pageHeroVisuals } from "@/content/visuals";
import { cn } from "@/lib/utils";

export function Hero() {
  const heroVisual = pageHeroVisuals.home;

  return (
    <section
      id="hero"
      className="hero-mesh-bg hero-dot-grid relative overflow-hidden bg-surface-base pt-20 pb-0 sm:pt-[120px]"
    >
      <div className="glow-dual" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <p
            className="hero-fade-down inline-flex items-center rounded-full border border-[var(--hero-badge-border)] bg-[var(--hero-badge-bg)] px-4 py-1.5 font-body text-xs font-medium text-text-secondary-v2"
            style={{ animationDelay: "0ms" }}
          >
            ✦ Trusted by 40+ SaaS and finance teams
          </p>

          <h1
            className="hero-fade-up mt-6 font-heading text-[40px] leading-[1.1] font-bold tracking-[-1.5px] text-text-primary-v2 sm:text-[64px]"
            style={{ animationDelay: "80ms" }}
          >
            We build the{" "}
            <span className="text-gradient-brand">integrations</span> your product actually needs.
          </h1>

          <p
            className="hero-fade-up mt-5 max-w-[600px] font-body text-base leading-[1.65] text-text-secondary-v2 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            From QuickBooks to NetSuite, Xero to SAP — Northline ships production-grade
            integrations and digital products that scale with your business.
          </p>

          <div
            className="hero-fade-up mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contact"
              className={cn(
                "btn-primary inline-flex items-center rounded-[10px] px-7 py-3.5",
                "font-body text-[15px] font-semibold text-white",
                "bg-[linear-gradient(135deg,#1B2A6B,#0F1A4A)]",
                "shadow-[0_4px_20px_rgba(27,42,107,0.45)]"
              )}
            >
              Start a project →
            </Link>
            <Link
              href="/work"
              className={cn(
                "inline-flex items-center rounded-[10px] border-[1.5px] border-[var(--btn-secondary-border)]",
                "px-[26px] py-[13px] font-body text-[15px] font-medium text-text-primary-v2",
                "transition-colors hover:border-[var(--btn-secondary-border-hover)] hover:bg-[var(--btn-secondary-hover-bg)]"
              )}
            >
              See our work
            </Link>
          </div>

          <div
            className="hero-fade-up mt-8 flex flex-col items-center gap-4 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex items-center -space-x-2">
              {clientProductLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[var(--hero-badge-border)] bg-surface-card p-1"
                >
                  <Image
                    src={logo.src}
                    alt=""
                    width={24}
                    height={24}
                    className="h-5 w-auto object-contain"
                    unoptimized
                    aria-hidden
                  />
                </div>
              ))}
            </div>
            <p className="font-body text-[13px] text-text-muted-v2">
              40+ integrations shipped across SaaS and fintech
            </p>
          </div>
        </div>

        <div
          className="hero-fade-up relative mx-auto mt-12 max-w-[1100px] -mb-20 sm:mt-16"
          style={{ animationDelay: "400ms" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] -top-8 h-[60%] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,42,107,0.25) 0%, transparent 70%)",
            }}
          />
          <figure className="relative overflow-hidden rounded-xl border border-surface-card-border shadow-[var(--image-frame-shadow)]">
            <Image
              src={heroVisual.src}
              alt={heroVisual.alt}
              width={1100}
              height={620}
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="aspect-[16/9] h-auto w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(7,12,24,0.35)] via-transparent to-transparent"
              aria-hidden
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
