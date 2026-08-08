"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryCtas } from "@/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Mobile sticky bar — one filled primary (book) only. */
export function StickyCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const hiddenOnContact = pathname === "/contact";

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 480);
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (hiddenOnContact) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-40 px-3 transition-[opacity,transform] duration-240 ease-out min-[360px]:px-4 lg:hidden",
        "bottom-[max(1rem,env(safe-area-inset-bottom))]",
        "[[data-mobile-nav-open=true]_&]:pointer-events-none [[data-mobile-nav-open=true]_&]:opacity-0",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
      inert={!visible ? true : undefined}
      aria-hidden={visible ? undefined : true}
    >
      <div
        className="surface-card mx-auto flex w-full max-w-[min(24rem,calc(100vw-1.5rem))] gap-2 p-1.5 backdrop-blur-xl min-[360px]:p-2"
        style={{ borderColor: "color-mix(in oklab, var(--color-accent) 15%, var(--surface-border))" }}
        role="region"
        aria-label="Quick action"
      >
        <Link
          href={primaryCtas.book.href}
          className={cn(
            buttonVariants({ variant: "primary", size: "cta" }),
            "btn-accent-glow flex-1 min-h-11 px-2 text-center text-[0.8125rem] leading-snug whitespace-normal min-[360px]:px-3 min-[360px]:text-sm min-[400px]:text-base"
          )}
          data-track="mobile_sticky_book_click"
          data-track-location="sticky-cta-bar"
          data-track-label={primaryCtas.book.label}
        >
          {primaryCtas.book.label}
        </Link>
      </div>
    </div>
  );
}
