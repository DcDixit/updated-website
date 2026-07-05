import Image from "next/image";

import { clientProductLogos } from "@/content/visuals";
import { cn } from "@/lib/utils";

type HomeClientWorkLogosProps = {
  className?: string;
};

/** Product marks from selected client work — placeholder until approved client logos are available. */
export function HomeClientWorkLogos({ className }: HomeClientWorkLogosProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-x-8 gap-y-4", className)}>
      <p className="type-caption w-full text-center text-[color:var(--text-secondary)] sm:w-auto sm:text-left">
        Selected products we&apos;ve built
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8" aria-label="Selected client products">
        {clientProductLogos.map((logo) => (
          <li key={logo.name}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={32}
              className="h-7 w-auto max-w-[7.5rem] opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-80 dark:hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
