"use client";

import Link from "next/link";
import { IconArrowUpRight, IconChevronDown } from "@tabler/icons-react";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getMegaMenuServiceTitle,
  megaMenuServiceGroups,
  primaryCtas,
  services,
  solutionMenuTeasers,
  solutionPillars,
} from "@/content/site-content";
import { cn } from "@/lib/utils";

type SolutionsMegaMenuProps = {
  active?: boolean;
};

/** Wide enough for four service columns without wrapping; height stays low via horizontal spread. */
const MEGA_MENU_WIDTH = "min(1180px, calc(100vw - 2rem))";

const serviceTitleBySlug = Object.fromEntries(services.map((service) => [service.slug, service.title]));

function useMegaMenuController() {
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

  return { open, setOpen, rootRef, openMenu, closeMenuSoon, closeMenuNow };
}

function ServiceLink({
  href,
  label,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "block rounded-md px-2 py-1.5 text-sm leading-snug text-[color:var(--text-secondary)] transition-[color,background-color] duration-150 outline-none",
        "hover:bg-[var(--surface-muted)] hover:text-foreground",
        "focus-visible:bg-[var(--surface-muted)] focus-visible:text-foreground focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/25",
        className
      )}
    >
      {label}
    </Link>
  );
}

function ServiceCategoryColumn({
  label,
  items,
  onNavigate,
  isLast = false,
}: {
  label: string;
  items: (typeof megaMenuServiceGroups)[number]["items"];
  onNavigate?: () => void;
  isLast?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-w-0 pl-5 first:pl-0",
        !isLast && "border-r border-[var(--section-divider)] pr-5"
      )}
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">{label}</p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.slug}>
            <ServiceLink
              href={`/services/${item.slug}`}
              label={getMegaMenuServiceTitle(item, serviceTitleBySlug[item.slug] ?? item.slug)}
              onNavigate={onNavigate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SolutionsMegaMenu({ active }: SolutionsMegaMenuProps) {
  const { open, setOpen, rootRef, openMenu, closeMenuSoon, closeMenuNow } = useMegaMenuController();

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
        onClick={() => setOpen((value) => !value)}
      >
        Solutions
        <IconChevronDown
          size={16}
          stroke={1.5}
          className={cn("transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <div
        id="solutions-mega-menu-panel"
        role="region"
        aria-label="Solutions and services"
        style={{ width: MEGA_MENU_WIDTH }}
        className={cn(
          "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="surface-card overflow-hidden rounded-xl border border-[var(--surface-border)] bg-popover shadow-xl">
          <div className="grid lg:grid-cols-[minmax(16rem,0.88fr)_minmax(0,1.62fr)]">
            <section
              aria-labelledby="mega-menu-solutions-heading"
              className="border-b border-[var(--section-divider)] bg-[color-mix(in_oklab,var(--surface-muted)_35%,var(--popover))] px-6 py-5 lg:border-r lg:border-b-0"
            >
              <div className="mb-4">
                <p id="mega-menu-solutions-heading" className="type-badge-label">
                  Solutions
                </p>
                <p className="type-caption mt-2 max-w-[18rem] leading-relaxed">
                  Industry-focused platforms for SaaS, logistics, and finance.
                </p>
              </div>
              <ul className="space-y-0.5">
                <li>
                  <Link
                    href="/solutions"
                    onClick={() => closeMenuNow()}
                    className="group block rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface-muted)]"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-foreground">All solutions</span>
                  </Link>
                </li>
                {solutionPillars.map((solution) => (
                  <li key={solution.slug}>
                    <Link
                      href={solution.href}
                      onClick={() => closeMenuNow()}
                      className="group block rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface-muted)]"
                    >
                      <span className="text-sm font-medium leading-snug text-foreground">{solution.title}</span>
                      <span className="type-caption mt-1 block line-clamp-1 leading-snug">
                        {solutionMenuTeasers[solution.slug]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="mega-menu-services-heading" className="px-6 py-5 lg:pl-7">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p id="mega-menu-services-heading" className="type-badge-label">
                    Services
                  </p>
                  <p className="type-caption mt-2 leading-relaxed">
                    Design, development, and automation capabilities.
                  </p>
                </div>
                <Link
                  href="/services"
                  onClick={() => closeMenuNow()}
                  className="inline-flex shrink-0 items-center gap-1 pt-0.5 text-xs font-semibold text-[var(--color-accent-strong)] transition-colors hover:text-foreground"
                >
                  View all
                  <IconArrowUpRight size={14} stroke={1.5} aria-hidden />
                </Link>
              </div>

              <div className="grid grid-cols-4">
                {megaMenuServiceGroups.map((group, index) => (
                  <ServiceCategoryColumn
                    key={group.id}
                    label={group.label}
                    items={group.items}
                    onNavigate={closeMenuNow}
                    isLast={index === megaMenuServiceGroups.length - 1}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-3 border-t border-[var(--section-divider)] bg-[color-mix(in_oklab,var(--surface-muted)_25%,var(--popover))] px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-caption max-w-xl leading-relaxed">
              Not sure where to start? Book a discovery call - we&apos;ll recommend the right path.
            </p>
            <div className="flex shrink-0 items-center gap-5">
              <Link
                href={primaryCtas.viewWork.href}
                onClick={() => closeMenuNow()}
                className="type-caption font-medium text-[color:var(--text-secondary)] transition-colors hover:text-foreground"
              >
                View portfolio
              </Link>
              <Link
                href={primaryCtas.book.href}
                onClick={() => closeMenuNow()}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-[var(--color-accent-strong)]"
              >
                {primaryCtas.book.label}
                <IconArrowUpRight size={15} stroke={1.5} aria-hidden />
              </Link>
            </div>
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
  const defaultOpenCategories = useMemo(() => [megaMenuServiceGroups[0]?.id].filter(Boolean) as string[], []);

  return (
    <div className="space-y-5">
      <div>
        <p className="type-badge-label mb-2 px-3">Solutions</p>
        <ul className="space-y-0.5">
          <li>
            <Link
              href="/solutions"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
            >
              All solutions
            </Link>
          </li>
          {solutionPillars.map((solution) => (
            <li key={solution.slug}>
              <Link
                href={solution.href}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/70"
              >
                <span className="block text-sm font-medium text-foreground">{solution.title}</span>
                <span className="type-caption mt-0.5 line-clamp-1">{solutionMenuTeasers[solution.slug]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between px-3">
          <p className="type-badge-label">Services</p>
          <Link href="/services" className="text-xs font-semibold text-[var(--color-accent-strong)]">
            View all
          </Link>
        </div>

        <Accordion defaultValue={defaultOpenCategories} className="px-1">
          {megaMenuServiceGroups.map((group) => (
            <AccordionItem key={group.id} value={group.id} className="border-[var(--surface-border)]">
              <AccordionTrigger className="px-2 py-3 text-sm font-semibold">{group.label}</AccordionTrigger>
              <AccordionContent className="px-1 pb-2">
                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <ServiceLink
                        href={`/services/${item.slug}`}
                        label={getMegaMenuServiceTitle(item, serviceTitleBySlug[item.slug] ?? item.slug)}
                        className="px-2"
                      />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="grid gap-2 border-t border-[var(--surface-border)] px-3 pt-4">
        <Link
          href={primaryCtas.book.href}
          className="text-sm font-semibold text-foreground transition-colors hover:text-[var(--color-accent-strong)]"
        >
          {primaryCtas.book.label}
        </Link>
        <Link
          href={primaryCtas.viewWork.href}
          className="type-caption text-[color:var(--text-secondary)] transition-colors hover:text-foreground"
        >
          View portfolio
        </Link>
      </div>
    </div>
  );
}

export const MobileServicesNav = MobileSolutionsNav;

