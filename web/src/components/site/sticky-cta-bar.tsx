"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryCtas } from "@/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        "fixed inset-x-0 z-40 px-4 pl-4 pr-[4.75rem] transition-[opacity,transform] duration-300 ease-out lg:hidden",
        "bottom-[max(1rem,env(safe-area-inset-bottom))]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
      aria-hidden={visible ? undefined : true}
    >
      <div
        className="surface-card mx-auto flex w-full max-w-[min(20rem,calc(100vw-5.5rem))] gap-2 p-2 shadow-lg backdrop-blur-xl"
        style={{ borderColor: "color-mix(in oklab, var(--color-accent) 15%, var(--surface-border))" }}
        role="region"
        aria-label="Quick action"
      >
        <Link
          href={primaryCtas.book.href}
          className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "flex-1 text-center")}
          data-track="mobile_sticky_book_click"
          data-track-location="sticky-cta-bar"
          data-track-label={primaryCtas.book.label}
        >
          {primaryCtas.book.label}
        </Link>
        <Link
          href={primaryCtas.brief.href}
          className={cn(buttonVariants({ variant: "primary", size: "cta" }), "btn-accent-glow flex-1 text-center")}
          data-track="mobile_sticky_cta_click"
          data-track-location="sticky-cta-bar"
          data-track-label={primaryCtas.brief.label}
        >
          {primaryCtas.brief.label}
        </Link>
      </div>
    </div>
  );
}
