import type { MetadataRoute } from "next";

import { insightPosts } from "@/content/insights";
import { caseStudies, services } from "@/content/site-content";
import { solutionSlugs } from "@/content/solutions";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/solutions",
  "/services",
  "/work",
  "/process",
  "/technologies",
  "/industries",
  "/insights",
  "/faq",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/contact" || path === "/solutions" || path === "/services"
          ? 0.9
          : 0.7,
  }));

  const solutionPages = solutionSlugs.map((slug) => ({
    url: absoluteUrl(`/solutions/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const servicePages = services.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const workPages = caseStudies.map((c) => ({
    url: absoluteUrl(`/work/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const insightPages = insightPosts.map((p) => ({
    url: absoluteUrl(`/insights/${p.slug}`),
    lastModified: new Date(p.publishedISO),
    changeFrequency: "yearly" as const,
    priority: 0.65,
  }));

  return [...pages, ...solutionPages, ...servicePages, ...workPages, ...insightPages];
}
