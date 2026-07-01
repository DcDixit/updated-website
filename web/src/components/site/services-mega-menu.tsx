"use client";

import Link from "next/link";
import { IconArrowUpRight, IconChevronDown } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

import { primaryCtas, serviceCategories, servicesByCategory, solutionPillars } from "@/content/site-content";
import { cn } from "@/lib/utils";

type SolutionsMegaMenuProps = {
  active?: boolean;
};

export function SolutionsMegaMenu({ active }: SolutionsMegaMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current === null) return;
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const closeMenuSoon = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, 120);
  };

  const closeMenuNow = () => {
    clearCloseTimer();
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) closeMenuNow();
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenuNow();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  useEffect(
    () => () => {
      clearCloseTimer();
    },
    []
  );

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuSoon}
      onFocus={openMenu}
      onBlur={(event) => {
        const nextFocused = event.relatedTarget;
        if (nextFocused instanceof Node && rootRef.current?.contains(nextFocused)) return;
        closeMenuNow();
      }}
    >
      <button
        type="button"
        className={cn(
          "nav-link inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35",
          active && "nav-link-active"
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="solutions-mega-menu-panel"
        onClick={() => setOpen((v) => !v)}
      >
        Solutions
        <IconChevronDown size={16} stroke={1.5} className={cn("transition-transform", open && "rotate-180")} aria-hidden />
      </button>

      <div
        id="solutions-mega-menu-panel"
        className={cn(
          "absolute left-1/2 top-full z-50 w-[min(820px,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="surface-card overflow-hidden rounded-xl border border-[var(--surface-border)] bg-popover p-6 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-4">
              <div>
                <p className="type-badge-label">Solutions</p>
                <p className="type-caption mt-2 leading-relaxed">Industry-focused product solutions for SaaS, trucking, and integrations.</p>
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/solutions"
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--surface-muted)]"
                    onClick={() => setOpen(false)}
                  >
                    <span className="type-body block font-medium text-foreground">All solutions</span>
                  </Link>
                </li>
                {solutionPillars.map((solution) => (
                  <li key={solution.slug}>
                    <Link
                      href={solution.href}
                      className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--surface-muted)]"
                      onClick={() => setOpen(false)}
                    >
                      <span className="type-body block font-medium text-foreground">{solution.title}</span>
                      <span className="type-caption mt-0.5 line-clamp-2">{solution.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 border-t border-[var(--section-divider)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="type-badge-label">Services</p>
                <p className="type-caption mt-2 leading-relaxed">Design, development, and automation capabilities.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {serviceCategories.map((category) => (
                  <div key={category.id} className="space-y-3">
                    <p className="type-caption font-medium text-foreground">{category.label}</p>
                    <ul className="space-y-1">
                      {servicesByCategory(category.id).slice(0, 3).map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="type-caption block rounded-md px-2 py-1.5 transition-colors hover:bg-[var(--surface-muted)] hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="type-body inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)] hover:underline"
                onClick={() => setOpen(false)}
              >
                All services
                <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-[var(--section-divider)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-caption">Not sure where to start? Book a discovery call - we&apos;ll recommend the right path.</p>
            <Link
              href={primaryCtas.book.href}
              className="type-body inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-[var(--color-accent)]"
              onClick={() => setOpen(false)}
            >
              {primaryCtas.book.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Backward-compatible export */
export const ServicesMegaMenu = SolutionsMegaMenu;

/** Grouped navigation for mobile. */
export function MobileSolutionsNav() {
  return (
    <div className="space-y-4">
      <div>
        <p className="type-badge-label mb-2 px-3">Solutions</p>
        <ul className="space-y-0.5">
          <li>
            <Link href="/solutions" className="block rounded-lg px-3 py-2.5 text-sm text-[color:var(--text-secondary)] transition-colors hover:bg-muted/70 hover:text-foreground">
              All solutions
            </Link>
          </li>
          {solutionPillars.map((solution) => (
            <li key={solution.slug}>
              <Link
                href={solution.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-[color:var(--text-secondary)] transition-colors hover:bg-muted/70 hover:text-foreground"
              >
                {solution.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {serviceCategories.map((category) => (
        <div key={category.id}>
          <p className="type-badge-label mb-2 px-3">{category.label}</p>
          <ul className="space-y-0.5">
            {servicesByCategory(category.id).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block rounded-lg px-3 py-2.5 text-sm text-[color:var(--text-secondary)] transition-colors hover:bg-muted/70 hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Link href="/services" className="type-body mx-3 inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)]">
        View all services
        <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
      </Link>
    </div>
  );
}

export const MobileServicesNav = MobileSolutionsNav;
