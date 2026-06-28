"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconChevronRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { caseStudies, insightPosts, services } from "@/content/site-content";
import { getSolutionBySlug } from "@/content/solutions";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const SEGMENT_LABELS: Record<string, string> = {
  about: "About",
  services: "Services",
  work: "Work",
  process: "Process",
  insights: "Insights",
  contact: "Contact",
  faq: "FAQ",
  careers: "Careers",
  industries: "Industries",
  solutions: "Solutions",
  technologies: "Technologies",
  privacy: "Privacy",
  terms: "Terms",
};

function labelForSlug(parent: string, slug: string): string {
  if (parent === "services") {
    const s = services.find((x) => x.slug === slug);
    return s?.title ?? prettifySlug(slug);
  }
  if (parent === "work") {
    const c = caseStudies.find((x) => x.slug === slug);
    return c?.title ?? prettifySlug(slug);
  }
  if (parent === "insights") {
    const p = insightPosts.find((x) => x.slug === slug);
    return p?.title ?? prettifySlug(slug);
  }
  if (parent === "solutions") {
    const solution = getSolutionBySlug(slug);
    return solution?.title ?? prettifySlug(slug);
  }
  return prettifySlug(slug);
}

function prettifySlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function SiteBreadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { href: string; label: string }[] = [{ href: "/", label: "Home" }];

  let acc = "";
  segments.forEach((seg, i) => {
    acc += `/${seg}`;
    const parent = i > 0 ? segments[i - 1] : "";

    let label: string;
    if (i === segments.length - 1 && parent === "services") {
      label = labelForSlug("services", seg);
    } else if (i === segments.length - 1 && parent === "work") {
      label = labelForSlug("work", seg);
    } else if (i === segments.length - 1 && parent === "insights") {
      label = labelForSlug("insights", seg);
    } else if (i === segments.length - 1 && parent === "solutions") {
      label = labelForSlug("solutions", seg);
    } else {
      label = SEGMENT_LABELS[seg] ?? prettifySlug(seg);
    }

    crumbs.push({ href: acc, label });
  });

  const breadcrumbSchema = breadcrumbJsonLd(crumbs.map((crumb) => ({ name: crumb.label, path: crumb.href })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav aria-label="Breadcrumb" className="border-b border-[var(--section-divider)] bg-background/80">
        <Container>
          <ol className="m-0 flex list-none flex-wrap items-center gap-1 py-2.5 text-xs text-[color:var(--text-secondary)] sm:text-sm">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex max-w-full items-center gap-1">
                  {i > 0 ? (
                    <IconChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden stroke={1.5} />
                  ) : null}
                  {isLast ? (
                    <span className="min-w-0 truncate font-medium text-foreground" aria-current="page">
                      {c.label}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className={cn(
                        "min-w-0 truncate rounded transition-colors hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
                      )}
                    >
                      {c.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </nav>
    </>
  );
}
