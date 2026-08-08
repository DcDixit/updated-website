import Link from "next/link";
import {
  IconSearch,
  IconPencil,
  IconCode,
  IconRocket,
  IconHeartHandshake,
  IconArrowUpRight,
} from "@tabler/icons-react";

import { SectionHeader } from "@/components/marketing/section-header";
import type { HomepageProcessStep } from "@/data/homepage";
import { engagementModels, primaryCtas } from "@/content/site-content";
import { cn } from "@/lib/utils";

const stepIcons = [IconSearch, IconPencil, IconCode, IconRocket, IconHeartHandshake];

const stepDurations = ["Week 1-2", "Week 2-4", "Week 4-8", "Week 8-10", "Week 10+"] as const;
const checkpointSteps = new Set([0, 2, 4]);

const engagementDetails = [
  {
    icon: IconSearch,
    timeline: "1-2 weeks",
    cta: primaryCtas.book.label,
    featured: false,
  },
  {
    icon: IconRocket,
    timeline: "6-16 weeks",
    cta: "Start a project brief",
    featured: true,
  },
  {
    icon: IconHeartHandshake,
    timeline: "Rolling monthly",
    cta: "Discuss a retainer",
    featured: false,
  },
] as const;

type ProcessSectionProps = {
  steps: readonly HomepageProcessStep[];
  className?: string;
};

export function ProcessSection({ steps, className }: ProcessSectionProps) {
  return (
    <div className={className}>
      <SectionHeader
        eyebrow="How we work"
        title="How a project works, start to finish."
        description="Every project follows this structure. You'll know what's happening, what's next, and what you're approving at each stage."
        className="mb-10 max-w-2xl"
      />

      <div className="overflow-hidden rounded-[var(--card-radius)] border border-[var(--surface-border)]">
        <ol className="grid gap-px bg-[var(--section-divider)] md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = stepIcons[index] ?? IconSearch;
            const isCheckpoint = checkpointSteps.has(index);

            return (
              <li key={step.title} className="flex h-full flex-col bg-[var(--card)] p-5 sm:p-6">
                <Icon
                  size={29}
                  stroke={1.75}
                  className="shrink-0 text-[var(--color-accent)]"
                  aria-hidden
                />

                <div className="mt-4 flex flex-1 flex-col">
                  <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="type-caption mt-1.5 leading-relaxed">
                    {stepDurations[index]}
                    {isCheckpoint ? (
                      <>
                        <span className="mx-1.5 text-[color:var(--surface-border)]" aria-hidden>
                          ·
                        </span>
                        <span className="font-medium text-[var(--color-accent)]">Client checkpoint</span>
                      </>
                    ) : null}
                  </p>
                  <p className="type-caption mt-3 flex-1 leading-relaxed text-[color:var(--text-body)]">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-14 border-t border-[var(--surface-border)] pt-10">
        <SectionHeader
          eyebrow="Engagement models"
          title="Pick the path that fits your stage."
          className="mb-8 max-w-xl"
        />

        <div className="overflow-hidden rounded-[var(--card-radius)] border border-[var(--surface-border)]">
          <div className="grid gap-px bg-[var(--section-divider)] lg:grid-cols-3">
            {engagementModels.map((model, index) => {
              const detail = engagementDetails[index]!;
              const Icon = detail.icon;

              return (
                <article
                  key={model.title}
                  className={cn(
                    "relative flex h-full flex-col bg-[var(--card)] p-6 sm:p-7",
                    detail.featured &&
                      "bg-[color-mix(in_oklab,var(--color-accent)_4%,var(--card))]"
                  )}
                >
                  <Icon
                    size={29}
                    stroke={1.75}
                    className="shrink-0 text-[var(--color-accent)]"
                    aria-hidden
                  />

                  <div className="mt-4 flex flex-1 flex-col">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <h4 className="text-base font-semibold tracking-tight text-foreground">{model.title}</h4>
                      {detail.featured ? (
                        <span className="type-badge-label rounded-full border border-[color-mix(in_oklab,var(--color-accent)_25%,var(--surface-border))] bg-[color-mix(in_oklab,var(--color-accent)_10%,transparent)] px-2 py-0.5 text-[10px] text-[var(--color-accent)]">
                          Most common path
                        </span>
                      ) : null}
                    </div>
                    <p className="type-caption mt-1.5 font-medium text-[var(--color-accent)]">
                      {detail.timeline}
                    </p>
                    <p className="type-caption mt-3 flex-1 leading-relaxed text-[color:var(--text-body)]">
                      {model.body}
                    </p>
                  </div>

                  <Link
                    href={model.href}
                    className="type-caption mt-6 inline-flex min-h-10 items-center gap-1.5 border-t border-[var(--section-divider)] pt-5 font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-85"
                  >
                    {detail.cta}
                    <IconArrowUpRight size={14} stroke={1.5} aria-hidden />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

