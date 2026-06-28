import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconSearch,
  IconPencil,
  IconCode,
  IconRocket,
  IconHeartHandshake,
} from "@tabler/icons-react";

const processStepIcons = [IconSearch, IconPencil, IconCode, IconRocket, IconHeartHandshake] as const;

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { LeadCaptureCta } from "@/components/marketing/lead-capture-cta";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { primaryCtas, processSteps, techCategories } from "@/content/site-content";
import { pageHeroVisuals, techCategoryVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Process",
  description: "Our five-phase delivery process - discover, design, build, launch, and support - with AI-accelerated workflows.",
  path: "/process",
  image: pageHeroVisuals.process.src,
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Five phases. No black-box delivery."
        description="Discovery, design, build, launch, and support — each phase with clear milestones, weekly demos, and deliverables you review before we move on. AI tools accelerate where they can; humans own every decision."
        visual={pageHeroVisuals.process}
        priority
        actions={
          <>
            <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}>
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              {primaryCtas.book.label}
            </Link>
          </>
        }
      />

      <Section tone="muted" dividerTop>
        <Container className="max-w-3xl">
          <ol className="space-y-0">
            {processSteps.map((step, idx) => {
              const StepIcon = processStepIcons[idx] ?? IconSearch;
              const isLast = idx === processSteps.length - 1;
              return (
                <li
                  key={step.title}
                  className="relative flex gap-6 pl-16 pb-10 last:pb-0"
                >
                  {/* Vertical connector */}
                  {!isLast ? (
                    <div
                      className="absolute left-[1.5rem] top-12 bottom-0 w-px"
                      style={{
                        background: `repeating-linear-gradient(
                          to bottom,
                          color-mix(in oklab, var(--color-accent) 30%, transparent) 0,
                          color-mix(in oklab, var(--color-accent) 30%, transparent) 5px,
                          transparent 5px,
                          transparent 10px
                        )`,
                      }}
                      aria-hidden
                    />
                  ) : null}

                  {/* Step icon bubble */}
                  <div
                    className="absolute left-0 flex size-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[#0D0D0D] shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-accent)_15%,transparent)]"
                    aria-label={`Step ${idx + 1}`}
                  >
                    <StepIcon size={20} stroke={2} aria-hidden />
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2">
                      <span className="type-caption text-[10px] tabular-nums font-semibold text-[var(--color-accent)] opacity-80">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="type-h3">{step.title}</h2>
                    </div>
                    <p className="type-body mt-2 text-[color:var(--text-secondary)]">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container>
          <SectionHeader
            eyebrow="AI-accelerated"
            title="Tools we use at every phase"
            description="Claude, ChatGPT, Figma, GitHub Copilot, Make, and Cursor - integrated into our workflow with human review at every step."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((cat) => {
              const visual = techCategoryVisuals[cat.id];
              return (
                <article key={cat.id} className="surface-card card-hover-rise overflow-hidden">
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={visual.src} alt={visual.alt} fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="type-h3">{cat.label}</h3>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <Badge key={item} variant="secondary" className="font-normal">
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

      <LeadCaptureCta
        eyebrow="Get started"
        title="Want to see how this works for your project?"
        description="Send a brief or book a discovery call — we'll walk through a realistic timeline and specific deliverables for your scope."
      />
    </>
  );
}
