import Link from "next/link";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  href?: string;
};

export function SiteLogo({ className, href = "/" }: SiteLogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-visible:ring-ring z-[1] flex min-w-0 shrink-0 items-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label="Northline — home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 148 32"
        fill="none"
        className="h-7 w-auto max-w-[min(132px,42vw)]"
        aria-hidden
      >
        <path
          d="M4 24V8h3.6l5.4 8.3V8h3.8v16h-3.5l-5.6-8.8V24H4z"
          className="fill-[var(--color-accent)]"
        />
        <text
          x="32"
          y="22"
          fill="currentColor"
          fontFamily="var(--font-instrument-sans, ui-sans-serif, system-ui, sans-serif)"
          fontSize="17"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          Northline
        </text>
      </svg>
    </Link>
  );
}
