"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SiteLogo } from "@/components/site/site-logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  mainNav,
  primaryCtas,
  processNavItem,
  type NavChild,
  type NavItem,
} from "@/content/navigation";
import { brand, mailtoHref, siteContact, whatsappHref } from "@/content/brand";
import { cn } from "@/lib/utils";

const HOVER_OPEN_DELAY_MS = 120;
const MOBILE_BREAKPOINT_PX = 1024;

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemIsActive(pathname: string, item: NavItem) {
  if (item.children) {
    return item.children.some((child) => isNavActive(pathname, child.href));
  }
  return item.href ? isNavActive(pathname, item.href) : false;
}

function DesktopDropdown({
  item,
  pathname,
}: {
  item: Extract<NavItem, { children: readonly NavChild[] }>;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLLIElement>(null);
  const panelId = useId();
  const active = itemIsActive(pathname, item);

  if (openPath !== pathname) {
    setOpenPath(pathname);
    setOpen(false);
  }

  const clearTimers = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = null;
    openTimer.current = null;
  };

  const openMenu = useCallback(() => {
    clearTimers();
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    clearTimers();
    setOpen(false);
  }, []);

  const scheduleOpen = () => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), HOVER_OPEN_DELAY_MS);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), 80);
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeMenu();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  useEffect(() => () => clearTimers(), []);

  return (
    <li
      ref={rootRef}
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={cn(
          "nav-link inline-flex items-center gap-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          active && "nav-link-active"
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="true"
        onFocus={openMenu}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event: ReactKeyboardEvent) => {
          if (event.key === "Escape") closeMenu();
        }}
      >
        {item.label}
        <IconChevronDown
          size={14}
          stroke={1.75}
          className={cn("transition-transform duration-160", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="menu"
        hidden={!open}
        className={cn(
          "absolute left-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] rounded-[0.75rem] border border-[var(--surface-border)] bg-popover p-2 text-popover-foreground shadow-[0_12px_40px_rgba(14,18,24,0.12)]"
        )}
      >
        <ul className="flex flex-col gap-0.5">
          {item.children.map((child) => (
            <li key={child.href} role="none">
              <Link
                href={child.href}
                role="menuitem"
                tabIndex={open ? 0 : -1}
                className="block rounded-[0.5rem] px-3 py-2.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                onClick={closeMenu}
              >
                <span className="block text-sm font-semibold leading-snug text-foreground">{child.label}</span>
                {child.description ? (
                  <span className="mt-1 block text-xs leading-snug text-[color:var(--text-secondary)]">
                    {child.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileNavPanel({
  open,
  onClose,
  pathname,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const titleId = useId();

  // Defect 4: SCROLL-LOCK CLEANUP + close when viewport grows past breakpoint
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const onResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT_PX) onClose();
    };
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("resize", onResize);
    };
  }, [open, onClose]);

  // Defect 6: focus into panel on open; restore to trigger on close; Escape; focus trap
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const trigger = triggerRef.current;

    const focusables = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

    const first = focusables()[0];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open, onClose, triggerRef]);

  // Defect 6: swipe-right-to-close
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const panel = panelRef.current;
    let startX = 0;
    let tracking = false;

    const onTouchStart = (event: TouchEvent) => {
      startX = event.touches[0]?.clientX ?? 0;
      tracking = true;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (!tracking) return;
      tracking = false;
      const endX = event.changedTouches[0]?.clientX ?? 0;
      if (endX - startX > 80) onClose();
    };

    panel.addEventListener("touchstart", onTouchStart, { passive: true });
    panel.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      panel.removeEventListener("touchstart", onTouchStart);
      panel.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  const toggleAccordion = (key: string) => {
    // Defect 2: SINGLE-OPEN ACCORDIONS
    setOpenAccordion((current) => (current === key ? null : key));
  };

  // Portal to body so fixed inset-0 is viewport-relative (header backdrop-blur
  // would otherwise create a containing block and clip the backdrop to ~72px).
  return createPortal(
    <>
      {/* Defect 3: ONE-TAP CLOSE — backdrop is a SIBLING of the panel, not its parent */}
      <button
        type="button"
        aria-label="Close menu backdrop"
        className="fixed inset-0 z-[110] bg-black/40 lg:hidden"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="fixed inset-y-0 right-0 z-[120] flex w-[min(400px,92vw)] flex-col border-l border-[var(--surface-border)] bg-background lg:hidden"
      >
        <div className="flex items-center justify-between border-b border-[var(--surface-border)] p-4">
          <div>
            <p id={titleId} className="font-semibold tracking-tight">
              {brand.legalName}
            </p>
            <p className="type-caption mt-1 text-[color:var(--text-secondary)]">
              Trucking · SaaS · Integrations
            </p>
          </div>
          {/* Defect 5: TAP TARGETS — 48x48 icon button */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon-sm" }),
              "flex size-12 items-center justify-center rounded-lg"
            )}
          >
            <IconX size={20} stroke={1.5} aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              if (item.children) {
                const accordionOpen = openAccordion === item.label;
                const panelId = `mobile-acc-${item.label}`;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="flex min-h-14 w-full items-center justify-between rounded-lg px-3 text-base font-medium text-foreground"
                      aria-expanded={accordionOpen}
                      aria-controls={panelId}
                      onClick={() => toggleAccordion(item.label)}
                    >
                      {item.label}
                      <IconChevronDown
                        size={18}
                        className={cn("transition-transform", accordionOpen && "rotate-180")}
                        aria-hidden
                      />
                    </button>
                    <ul id={panelId} hidden={!accordionOpen} className="pb-2 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex min-h-[52px] items-center rounded-lg px-3 text-sm text-[color:var(--text-secondary)] hover:bg-muted/70 hover:text-foreground"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              const active = item.href ? isNavActive(pathname, item.href) : false;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href!}
                    className={cn(
                      "flex min-h-14 items-center rounded-lg px-3 text-base",
                      active
                        ? "bg-muted font-medium text-foreground"
                        : "text-[color:var(--text-secondary)] hover:bg-muted/70 hover:text-foreground"
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <Link
                href={processNavItem.href}
                className="flex min-h-14 items-center rounded-lg px-3 text-base text-[color:var(--text-secondary)] hover:bg-muted/70 hover:text-foreground"
                onClick={onClose}
              >
                {processNavItem.label}
              </Link>
            </li>
          </ul>

          <div className="mt-6 grid gap-3 border-t border-[var(--surface-border)] pt-6">
            <Link
              href={primaryCtas.book.href}
              className={cn(buttonVariants({ variant: "primary", size: "cta" }), "min-h-11 w-full")}
              onClick={onClose}
            >
              {primaryCtas.book.label}
            </Link>
            <Link
              href={primaryCtas.brief.href}
              className="type-body text-center font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline"
              onClick={onClose}
            >
              {primaryCtas.brief.label}
            </Link>
          </div>

          <div className="mt-6 space-y-3 border-t border-[var(--surface-border)] pt-6 text-sm">
            <a href={mailtoHref()} className="block text-foreground hover:text-[var(--color-accent)]">
              {siteContact.email}
            </a>
            {siteContact.phoneUs ? (
              <a href={siteContact.phoneUs.href} className="block text-[color:var(--text-secondary)]">
                {siteContact.phoneUs.display}
              </a>
            ) : null}
            <a href={siteContact.phoneIn.href} className="block text-[color:var(--text-secondary)]">
              {siteContact.phoneIn.display}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-medium text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>,
    document.body
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  // Defect 1: CLOSE ON NAVIGATION — adjust state during render when path changes
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrollProgress(Math.min(1, window.scrollY / 40));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide floating WhatsApp while mobile panel is open
  useEffect(() => {
    document.documentElement.dataset.mobileNavOpen = mobileOpen ? "true" : "false";
    return () => {
      delete document.documentElement.dataset.mobileNavOpen;
    };
  }, [mobileOpen]);

  const showBorder = scrollProgress > 0;

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] h-[var(--header-height)] border-b transition-[border-color,background-color] duration-240",
        "bg-[color-mix(in_oklab,var(--background)_92%,transparent)] backdrop-blur-[12px]"
      )}
      style={{
        borderColor: showBorder
          ? "color-mix(in oklab, var(--section-divider) 100%, transparent)"
          : "transparent",
      }}
    >
      <Container className="flex h-full min-w-0 max-w-[75rem] items-center justify-between gap-4">
        <SiteLogo />

        {/* Desktop nav — lg+ only so no width renders both navs */}
        <nav className="hidden min-w-0 items-center gap-0.5 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} pathname={pathname} />
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href!}
                    className={cn(
                      "nav-link focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isNavActive(pathname, item.href!) && "nav-link-active"
                    )}
                    aria-current={isNavActive(pathname, item.href!) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle className="relative z-[1] hidden lg:inline-flex" />
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={primaryCtas.brief.href}
              className="type-caption font-semibold text-[color:var(--text-secondary)] transition-colors hover:text-foreground"
              data-track="header_cta_click_secondary"
              data-track-location="header"
              data-track-label={primaryCtas.brief.label}
            >
              {primaryCtas.brief.label}
            </Link>
            <Link
              href={primaryCtas.book.href}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "min-h-11 whitespace-nowrap")}
              data-track="header_cta_click"
              data-track-location="header"
              data-track-label={primaryCtas.book.label}
            >
              {primaryCtas.book.label}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              ref={menuTriggerRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon-sm" }),
                "flex size-12 items-center justify-center rounded-lg"
              )}
              onClick={() => setMobileOpen(true)}
            >
              <IconMenu2 size={20} stroke={1.5} aria-hidden />
            </button>
          </div>
        </div>
      </Container>

      <MobileNavPanel
        key={pathname}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
        triggerRef={menuTriggerRef}
      />
    </header>
  );
}
