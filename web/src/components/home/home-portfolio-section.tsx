"use client";

import Link from "next/link";
import { useState } from "react";

import { HomeCaseStudyCard } from "@/components/home/home-case-study-card";
import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/marketing/reveal";
import { featuredCaseStudies } from "@/content/site-content";
import {
  caseStudyFilterMap,
  portfolioFilterCategories,
  type HomepageCaseStudySlug,
  type PortfolioFilterCategory,
} from "@/data/homepage";
import { cn } from "@/lib/utils";

export function HomePortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterCategory>("All");

  const filtered =
    activeFilter === "All"
      ? featuredCaseStudies
      : featuredCaseStudies.filter((c) =>
          (caseStudyFilterMap[c.slug] ?? []).includes(activeFilter)
        );

  return (
    <SectionShell id="work" size="default">
      <Reveal>
        <Container>
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Selected work"
              title="Projects that moved the needle."
              description="Recent work across SaaS, trucking, CRM, integrations, and AI automation."
              className="sm:max-w-lg"
            />
            <Link
              href="/work"
              className="hidden shrink-0 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 sm:block"
            >
              View all work →
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {portfolioFilterCategories.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
                  activeFilter === tab
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white dark:text-[#0f172a]"
                    : "border-[var(--surface-border)] text-[color:var(--text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="stagger-grid stagger-grid-visible grid gap-6 lg:grid-cols-3">
            {filtered.map((c) => (
              <HomeCaseStudyCard
                key={c.slug}
                slug={c.slug as HomepageCaseStudySlug}
                title={c.title}
                summary={c.summary}
                href={`/work/${c.slug}`}
                tags={c.tags}
              />
            ))}
          </div>

          <Link
            href="/work"
            className="mt-8 inline-flex text-sm font-semibold text-[var(--color-accent)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 sm:hidden"
          >
            View all work →
          </Link>
        </Container>
      </Reveal>
    </SectionShell>
  );
}

