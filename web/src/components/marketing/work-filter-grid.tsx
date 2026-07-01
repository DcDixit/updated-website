"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CaseStudyCard } from "@/components/marketing/case-study-card";
import { SectionHeader } from "@/components/marketing/section-header";
import { caseStudies } from "@/content/site-content";
import { caseStudyVisuals } from "@/content/visuals";
import { trackEvent } from "@/lib/analytics";
import { getCaseStudiesByTag, workFilterTags, type WorkFilterTag } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

type WorkFilterGridProps = {
  initialTag?: string | null;
};

export function WorkFilterGrid({ initialTag = null }: WorkFilterGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTag, setActiveTag] = useState<WorkFilterTag>(
    initialTag && workFilterTags.includes(initialTag as WorkFilterTag) ? (initialTag as WorkFilterTag) : "All"
  );

  useEffect(() => {
    const urlTag = searchParams.get("tag");
    if (!urlTag || !workFilterTags.includes(urlTag as WorkFilterTag)) return;
    setActiveTag(urlTag as WorkFilterTag);
  }, [searchParams]);

  function handleTagChange(tag: WorkFilterTag) {
    setActiveTag(tag);
    trackEvent("work_filter_change", { filter: tag });
    const params = new URLSearchParams(searchParams.toString());
    if (tag === "All") {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const filtered = useMemo(() => getCaseStudiesByTag(activeTag), [activeTag]);

  return (
    <>
      <div className="surface-card flex flex-col gap-6 p-6 sm:p-8 lg:max-w-3xl lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="type-badge-label">Browse by focus</p>
          <p className="type-body max-w-md text-sm text-[color:var(--text-secondary)]">
            Filter case studies by industry and capability - SaaS, logistics, CRM, integrations, and more.
          </p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
          {workFilterTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagChange(tag)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35",
                  isActive
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 font-medium text-foreground"
                    : "border-[var(--surface-border)] bg-background text-[color:var(--text-secondary)] hover:border-[var(--color-accent)]/40 hover:text-foreground"
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12">
        <SectionHeader
          eyebrow="Case studies"
          title={activeTag === "All" ? "Selected work" : `${activeTag} projects`}
          description={
            filtered.length === 0
              ? "No case studies match this filter yet - view all work or contact us about similar projects."
              : undefined
          }
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3" aria-live="polite">
          {filtered.map((c) => {
            const cover = caseStudyVisuals[c.slug];
            return (
              <CaseStudyCard
                key={c.slug}
                title={c.title}
                summary={c.summary}
                metric={c.metric}
                href={`/work/${c.slug}`}
                imageSrc={cover.src}
                imageAlt={cover.alt}
                tags={c.tags}
              />
            );
          })}
        </div>
        {filtered.length === 0 ? (
          <p className="type-body mt-6 text-[color:var(--text-secondary)]">
            Showing {caseStudies.length} projects across SaaS, logistics, CRM, and automation.
          </p>
        ) : null}
      </div>
    </>
  );
}
