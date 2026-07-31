"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { homeJumpLinks } from "@/content/audience";
import { cn } from "@/lib/utils";

/** Sticky in-page navigation — homepage only. */
export function HomeSubNav() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = homeJumpLinks.map((l) => l.href.replace("#", ""));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className={cn(
        "sticky top-16 z-[90] border-b border-[var(--section-divider)] bg-background/85 backdrop-blur-md transition-[opacity,transform] duration-300 lg:top-[4.25rem]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
      )}
    >
      <Container>
        <ul className="scrollbar-hide flex gap-1 overflow-x-auto py-2.5">
          {homeJumpLinks.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeId === id;
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex rounded-full px-3.5 py-2 text-sm font-medium font-sans transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35",
                    active
                      ? "bg-[var(--color-accent)] text-white dark:text-[#0f172a]"
                      : "text-[color:var(--text-secondary)] hover:bg-[var(--color-accent)] hover:text-white dark:hover:text-[#0f172a]"
                  )}
                  aria-current={active ? "true" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
