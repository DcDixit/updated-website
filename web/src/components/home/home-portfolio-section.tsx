"use client";

import Link from "next/link";
import { useState } from "react";

import { HomeCaseStudyCard } from "@/components/home/home-case-study-card";
import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
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
        <Container className="max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                Selected work
              </p>
              <h2 className="text-h2 font-bold text-text-primary">Projects that moved the needle.</h2>
              <p className="mt-2 max-w-lg text-text-secondary">
                Recent work across SaaS, trucking, CRM, integrations, and AI automation.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:block"
            >
              View all work →
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {portfolioFilterCategories.map((tab) => (
              <button
                key={tab}
                type="button"
                data-active={activeFilter === tab}
                onClick={() => setActiveFilter(tab)}
                className={cn(
                  "rounded-full border border-border px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors duration-150 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                  activeFilter === tab && "border-primary bg-primary text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {filtered.map((c) => (
              <HomeCaseStudyCard
                key={c.slug}
                slug={c.slug as HomepageCaseStudySlug}
                title={c.title}
                summary={c.summary}
                metric={c.metric}
                href={`/work/${c.slug}`}
                tags={c.tags}
              />
            ))}
          </div>

          <Link
            href="/work"
            className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:hidden"
          >
            View all work →
          </Link>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
