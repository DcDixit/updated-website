import Image from "next/image";

import type { TechBrandSlug } from "@/lib/tech-brands";
import { TECH_BRAND_LABELS, TECH_BRAND_VISUAL } from "@/lib/tech-brands";
import { cn } from "@/lib/utils";

type TechBrandLogoProps = {
  brand: TechBrandSlug;
  className?: string;
  /** Render mark for dark tile backgrounds (inverts monochrome logos). */
  onDark?: boolean;
};

const BRAND_ASSETS: Record<TechBrandSlug, string> = {
  nextjs: "/brand/tech/nextjs.svg",
  react: "/brand/tech/react.svg",
  "react-native": "/brand/tech/react-native.svg",
  figma: "/brand/tech/figma.svg",
  stripe: "/brand/tech/stripe.svg",
  supabase: "/brand/tech/supabase.svg",
  vercel: "/brand/tech/vercel.svg",
  quickbooks: "/brand/tech/quickbooks.svg",
  xero: "/brand/tech/xero.svg",
  hubspot: "/brand/tech/hubspot.svg",
  webflow: "/brand/tech/webflow.svg",
  bubble: "/brand/tech/bubble.svg",
  make: "/brand/tech/make.svg",
  claude: "/brand/tech/claude.svg",
  openai: "/brand/tech/openai.svg",
  github: "/brand/tech/github.svg",
  cursor: "/brand/tech/cursor.svg",
  typescript: "/brand/tech/typescript.svg",
  tailwind: "/brand/tech/tailwind.svg",
};

/** Official brand marks (Simple Icons / brand assets) with optical normalization. */
export function TechBrandLogo({ brand, className, onDark = false }: TechBrandLogoProps) {
  const label = TECH_BRAND_LABELS[brand];
  const src = BRAND_ASSETS[brand];
  const { height, maxWidth, themeAdaptive } = TECH_BRAND_VISUAL[brand];
  const invertOnDark = onDark && themeAdaptive;

  return (
    <Image
      src={src}
      alt={label}
      width={maxWidth ?? Math.round(height * 1.6)}
      height={height}
      unoptimized
      className={cn(
        "h-auto w-auto max-w-full object-contain object-center",
        !onDark && themeAdaptive && "dark:brightness-0 dark:invert",
        invertOnDark && "brightness-0 invert",
        className
      )}
      style={{ height: onDark ? height + 4 : height, maxWidth: maxWidth ?? undefined, width: "auto" }}
    />
  );
}
