import Image from "next/image";

import { industryFocus } from "@/content/site-content";
import { cn } from "@/lib/utils";

type ClientLogoStripProps = {
  className?: string;
  title?: string;
};

export function ClientLogoStrip({
  className,
  title = "Industries we build for",
}: ClientLogoStripProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <p className="type-badge-label text-center sm:text-left">{title}</p>
      <div className="surface-card px-4 py-5 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8" aria-label="Industry focus areas">
          {industryFocus.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center justify-center rounded-lg border border-transparent px-2 py-3 text-center"
            >
              <Image
                src={item.logoSrc}
                alt=""
                width={140}
                height={40}
                className="h-9 w-auto"
                aria-hidden
              />
              <span className="sr-only">{item.name}</span>
              <span className="text-sm font-semibold tracking-tight text-foreground">{item.name}</span>
              <span className="type-caption mt-1 text-[10px] uppercase tracking-wide">{item.industry}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
