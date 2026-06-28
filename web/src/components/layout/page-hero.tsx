import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { SectionShell, type SectionShellSize } from "@/components/layout/section-shell";
import { HeroWithImage } from "@/components/marketing/hero-with-image";
import { HeroEyebrow } from "@/components/marketing/hero-eyebrow";
import type { VisualAsset } from "@/content/visuals";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  visual?: VisualAsset;
  priority?: boolean;
  size?: SectionShellSize;
  className?: string;
  children?: ReactNode;
};

/** Standard page hero - consistent typography and spacing sitewide. */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
  priority,
  size = "hero",
  className,
  children,
}: PageHeroProps) {
  const content = (
    <div className="flex flex-col gap-6 sm:gap-8">
      {eyebrow ? <HeroEyebrow>{eyebrow}</HeroEyebrow> : null}
      <h1 className="type-hero text-foreground text-balance">{title}</h1>
      {description ? (
        <p className="type-body max-w-[640px] text-[color:var(--text-secondary)]">{description}</p>
      ) : null}
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      {children}
    </div>
  );

  return (
    <SectionShell size={size} bordered className={className}>
      {visual ? (
        <HeroWithImage visual={visual} priority={priority}>
          {content}
        </HeroWithImage>
      ) : (
        <Container>{content}</Container>
      )}
    </SectionShell>
  );
}
