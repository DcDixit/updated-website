"use client";



import Link from "next/link";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { IconMenu2 } from "@tabler/icons-react";



import { Container } from "@/components/layout/container";

import { MobileSolutionsNav, SolutionsMegaMenu } from "@/components/site/services-mega-menu";

import { ThemeToggle } from "@/components/site/theme-toggle";

import { buttonVariants } from "@/components/ui/button";

import {

  Sheet,

  SheetContent,

  SheetHeader,

  SheetTitle,

  SheetTrigger,

} from "@/components/ui/sheet";

import { brand, nav, navSecondary, primaryCtas } from "@/content/site-content";

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



  return (

    <header

      className={cn(

        "sticky top-0 z-[100] border-b transition-[border-color,background-color,backdrop-filter] duration-200 ease-out",

        scrolled

          ? "border-[var(--section-divider)] bg-background/85 backdrop-blur-xl"

          : "border-transparent bg-background/70 backdrop-blur-md"

      )}

    >

      <Container className="flex h-16 min-w-0 items-center justify-between gap-3 lg:h-[4.25rem]">

        <Link

          href="/"

          className="focus-visible:ring-ring z-[1] min-w-0 shrink rounded-md text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background"

        >

          {brand.shortName}

        </Link>



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

                        "nav-link focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background",

                        active && "nav-link-active"

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

              buttonVariants({ variant: "primary", size: "cta" }),

              "hidden link-subtle lg:inline-flex"

            )}
            data-track="header_cta_click"
            data-track-location="header"
            data-track-label={primaryCtas.brief.label}

          >

            {primaryCtas.brief.label}

          </Link>

          <Link

            href={primaryCtas.book.href}

            className={cn(

              buttonVariants({ variant: "secondary", size: "cta" }),

              "hidden lg:inline-flex"

            )}
            data-track="header_cta_click_secondary"
            data-track-location="header"
            data-track-label={primaryCtas.book.label}

          >

            {primaryCtas.book.label}

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

                className="w-[min(360px,92vw)] gap-0 overflow-y-auto border-l border-[var(--surface-border)] p-0"

              >

                <SheetHeader className="border-b border-[var(--surface-border)] p-6 text-left">

                  <SheetTitle className="font-semibold tracking-tight">{brand.shortName}</SheetTitle>

                  <p className="type-caption mt-1">{brand.tagline}</p>

                </SheetHeader>

                <nav className="flex flex-col p-4" aria-label="Mobile">

                  <p className="type-badge-label mb-2 px-3">Solutions & services</p>

                  <MobileSolutionsNav />

                  <p className="type-badge-label mb-2 mt-6 px-3">Menu</p>

                  {nav

                    .filter((item) => item.href !== "/solutions")

                    .map((item) => {

                      const active = pathname ? isNavActive(pathname, item.href) : false;

                      return (

                        <Link

                          key={item.href}

                          href={item.href}

                          className={cn(

                            "rounded-lg px-3 py-3 text-base transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35",

                            active

                              ? "bg-muted font-medium text-foreground"

                              : "text-[color:var(--text-secondary)] hover:bg-muted/70 hover:text-foreground"

                          )}

                          aria-current={active ? "page" : undefined}

                        >

                          {item.label}

                        </Link>

                      );

                    })}

                  <p className="type-badge-label mb-2 mt-6 px-3">More</p>

                  {navSecondary.map((item) => (

                    <Link

                      key={item.href}

                      href={item.href}

                      className="rounded-lg px-3 py-2.5 text-sm text-[color:var(--text-secondary)] transition-colors hover:bg-muted/70 hover:text-foreground"

                    >

                      {item.label}

                    </Link>

                  ))}

                  <div className="mt-6 grid gap-2 border-t border-[var(--surface-border)] pt-6">

                    <Link

                      href={primaryCtas.brief.href}

                      className={cn(buttonVariants({ variant: "primary", size: "cta" }), "w-full")}

                    >

                      {primaryCtas.brief.label}

                    </Link>

                    <Link

                      href={primaryCtas.book.href}

                      className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full")}

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

  );

}


