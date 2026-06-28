import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { MarketingImage } from "@/components/marketing/marketing-image";
import type { VisualAsset } from "@/content/visuals";
import { cn } from "@/lib/utils";

export function HeroWithImage({
  visual,
  children,
  priority,
  className,
  imageClassName,
  containerClassName,
}: {
  visual: VisualAsset;
  children: ReactNode;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  containerClassName?: string;
}) {
  return (
    <Container className={cn(containerClassName)}>
      <div
        className={cn(
          "grid-layout-12 items-center",
          className
        )}
      >
        <div className="col-span-12 flex flex-col gap-8 lg:col-span-6">
          {children}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <MarketingImage
            src={visual.src}
            alt={visual.alt}
            priority={priority}
            className={imageClassName}
            aspectClassName="aspect-video min-h-[200px] w-full"
            overlay="subtle"
          />
        </div>
      </div>
    </Container>
  );
}
