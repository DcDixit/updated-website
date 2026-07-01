"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { MobileSolutionsNav, SolutionsMegaMenu } from "@/components/site/services-mega-menu";
import { SiteLogo } from "@/components/site/site-logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, navSecondary, primaryCtas } from "@/content/site-content";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solutionsActive =
    pathname ? pathname === "/solutions" || pathname.startsWith("/solutions/") || isNavActive(pathname, "/services") : false;

  const isHome = pathname === "/";

  return (
    <>
      <div className="fixed top-0 z-[110] h-0.5 w-full bg-accent" aria-hidden />
      <header
        className={cn(
          "sticky top-0.5 z-[100] transition-[background-color,border-color,backdrop-filter] duration-200",
          scrolled || !isHome
            ? "border-b border-border bg-white/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-16 min-w-0 items-center justify-between gap-3 lg:h-[4.25rem]">
          <SiteLogo />

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:gap-0.5"
            aria-label="Primary"
          >
            <SolutionsMegaMenu active={solutionsActive} />
            <ul className="flex items-center gap-0.5">
              {nav
                .filter((item) => item.href !== "/solutions")
                .map((item) => {
                  const active = pathname ? isNavActive(pathname, item.href) : false;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-lg px-3 py-2 text-sm font-medium text-text-primary transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                          active && "text-primary"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>

          <div className="z-[1] flex shrink-0 items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <Link
              href={primaryCtas.brief.href}
              className={cn(
                "hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:inline-flex"
              )}
              data-track="header_cta_click"
              data-track-location="header"
              data-track-label={primaryCtas.brief.label}
            >
              {primaryCtas.brief.label}
            </Link>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger
                  aria-label="Open menu"
                  className={cn(buttonVariants({ variant: "secondary", size: "icon-sm" }), "rounded-lg")}
                >
                  <IconMenu2 size={20} stroke={1.5} aria-hidden />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full max-w-none gap-0 overflow-y-auto border-l border-border p-0 sm:max-w-none"
                >
                  <SheetHeader className="border-b border-border p-6 text-left">
                    <SheetTitle className="font-semibold tracking-tight">Northline</SheetTitle>
                    <p className="mt-1 text-sm text-text-muted">
                      SaaS products. Trucking platforms. Accounting integrations.
                    </p>
                  </SheetHeader>
                  <nav className="flex flex-col p-4" aria-label="Mobile">
                    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
                      Solutions & services
                    </p>
                    <MobileSolutionsNav />
                    <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
                      Menu
                    </p>
                    {nav
                      .filter((item) => item.href !== "/solutions")
                      .map((item) => {
                        const active = pathname ? isNavActive(pathname, item.href) : false;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "border-b border-border py-4 text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                              active ? "text-primary" : "text-text-primary hover:text-primary"
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
                      More
                    </p>
                    {navSecondary.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="border-b border-border py-4 text-lg font-semibold text-text-primary transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="mt-6 grid gap-2 border-t border-border pt-6">
                      <Link
                        href={primaryCtas.brief.href}
                        className={cn(buttonVariants({ variant: "primary", size: "cta" }), "w-full rounded-md")}
                      >
                        {primaryCtas.brief.label}
                      </Link>
                      <Link
                        href={primaryCtas.book.href}
                        className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full rounded-md")}
                      >
                        {primaryCtas.book.label}
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
