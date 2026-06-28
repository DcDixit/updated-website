import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconPencil,
  IconCode,
  IconDeviceMobile,
  IconServer,
  IconSparkles,
  IconBlocks,
} from "@tabler/icons-react";

const techCategoryIcons: Record<string, React.ComponentType<{ size?: number; stroke?: number; "aria-hidden"?: boolean; className?: string }>> = {
  design: IconPencil,
  frontend: IconCode,
  mobile: IconDeviceMobile,
  backend: IconServer,
  ai: IconSparkles,
  nocode: IconBlocks,
};

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { primaryCtas, techCategories } from "@/content/site-content";
import { pageHeroVisuals, techCategoryVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Tools & Stack",
  description: "Design, development, AI, and no-code tools we use - Figma, Next.js, Claude, ChatGPT, Make, Webflow, and more.",
  path: "/technologies",
  image: pageHeroVisuals.technologies.src,
});

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools & stack"
        title="The tools behind our delivery."
        description="Figma, Next.js, Claude, React Native, Make, and more — chosen for reliability and maintainability. Every tool used with human oversight, not as a replacement for it."
        visual={pageHeroVisuals.technologies}
        priority
        actions={
          <>
            <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}>
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href="/process" className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              See our process
            </Link>
          </>
        }
      />

      <Section tone="muted" dividerTop>
        <Container>
          <SectionHeader eyebrow="Stack" title="Technologies we work with daily" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((cat) => {
              const visual = techCategoryVisuals[cat.id];
              const CatIcon = techCategoryIcons[cat.id];
              return (
                <article key={cat.id} className="surface-card card-hover-rise group overflow-hidden">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="33vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }}
                      aria-hidden
                    />
                    {/* Category icon overlay */}
                    {CatIcon ? (
                      <div className="absolute left-4 top-4">
                        <div className="flex size-9 items-center justify-center rounded-lg border border-[var(--color-accent)]/40 bg-background/90 backdrop-blur-sm">
                          <CatIcon size={16} stroke={1.75} className="text-[var(--color-accent)]" aria-hidden />
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h2 className="type-h3 transition-colors group-hover:text-[var(--color-accent)]">{cat.label}</h2>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <Badge key={item} variant="secondary" className="font-normal text-[11px]">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
