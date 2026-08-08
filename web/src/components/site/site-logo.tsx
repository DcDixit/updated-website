import Image from "next/image";
import Link from "next/link";

import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  href?: string;
};

const LOGO_WIDTH = 400;
const LOGO_HEIGHT = 111;

export function SiteLogo({ className, href = "/" }: SiteLogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-visible:ring-ring z-[1] flex min-w-0 shrink-0 items-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Logo mark is dark ink — light plate keeps contrast on dark header without inventing assets
        "dark:rounded-md dark:bg-white dark:px-2 dark:py-1",
        className
      )}
      aria-label={`${brand.legalName} - home`}
    >
      <Image
        src={brand.logoSrc}
        alt=""
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        sizes="(max-width: 768px) 160px, 200px"
        className="h-9 w-auto max-w-[min(200px,52vw)]"
        aria-hidden
      />
    </Link>
  );
}
