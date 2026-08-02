import Image from "next/image";
import Link from "next/link";

import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  href?: string;
};

const LOGO_WIDTH = 1024;
const LOGO_HEIGHT = 284;

export function SiteLogo({ className, href = "/" }: SiteLogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-visible:ring-ring z-[1] flex min-w-0 shrink-0 items-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
        className="h-9 w-auto max-w-[min(200px,52vw)]"
        aria-hidden
      />
    </Link>
  );
}
