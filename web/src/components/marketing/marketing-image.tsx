import Image from "next/image";

import { IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

export type MarketingImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: "none" | "subtle" | "bottom";
  aspectClassName?: string;
};

export function MarketingImage({
  src,
  alt,
  className,
  priority,
  sizes = "(max-width: 1024px) 100vw, 42vw",
  overlay = "subtle",
  aspectClassName = "aspect-video min-h-[12rem]",
}: MarketingImageProps) {
  const isSvg = src.endsWith(".svg");
  const useBlur = !isSvg;

  return (
    <figure
      className={cn(
        "group relative w-full overflow-hidden rounded-[var(--image-radius)] border border-[var(--card-on-dark-border)] bg-background",
        aspectClassName,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized={isSvg}
        placeholder={useBlur ? "blur" : "empty"}
        blurDataURL={useBlur ? IMAGE_BLUR_DATA_URL : undefined}
        className="object-cover motion-safe:transition-[transform,filter] motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-[1.02]"
      />
      {overlay === "subtle" ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/25 via-transparent to-[var(--color-accent)]/5"
          aria-hidden
        />
      ) : null}
      {overlay === "bottom" ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/65 via-background/5 to-transparent"
          aria-hidden
        />
      ) : null}
    </figure>
  );
}
