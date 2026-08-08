import type { Metadata } from "next";

import {
  activeSocialLinks,
  brand,
  reviewUrl,
  siteContact,
} from "@/content/brand";

/** Public site URL — set NEXT_PUBLIC_SITE_URL in production; never hardcode at call sites. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://krivatechnologies.com").replace(
  /\/$/,
  ""
);

const defaultOgImage = `${siteUrl}/brand/og-default.png`;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  locale?: "en_US";
};

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  locale = "en_US",
}: PageMetadataInput): Metadata {
  const ogImage = image ?? defaultOgImage;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: brand.shortName,
      locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  const sameAs = activeSocialLinks().map((link) => link.href);
  if (reviewUrl) sameAs.push(reviewUrl);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: brand.shortName,
    legalName: brand.legalName,
    url: siteUrl,
    logo: absoluteUrl(brand.logoSrc),
    description: brand.positioning,
    email: siteContact.email,
    telephone: siteContact.phoneIn.href.replace(/^tel:/, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "511 - I The Address",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380060",
      addressCountry: "IN",
    },
    areaServed: ["United States", "United Kingdom"],
    // Do NOT emit aggregateRating — review data is unverified (manual-action risk).
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.shortName,
    url: siteUrl,
    description: brand.positioning,
    inLanguage: ["en-US"],
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(input: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.title,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: brand.legalName,
      url: siteUrl,
    },
    areaServed: ["United States", "United Kingdom"],
    url: absoluteUrl(input.path),
  };
}

export function webPageJsonLd(input: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: brand.shortName,
      url: siteUrl,
    },
    inLanguage: "en",
  };
}

export function faqJsonLd(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  publishedISO: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedISO,
    author: { "@type": "Organization", name: input.author },
    publisher: {
      "@type": "Organization",
      name: brand.legalName,
      url: siteUrl,
    },
    mainEntityOfPage: absoluteUrl(input.path),
    image: input.image ?? defaultOgImage,
  };
}

export function caseStudyJsonLd(input: {
  title: string;
  description: string;
  path: string;
  client: string;
  metrics: Array<{ label: string; value: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    creator: {
      "@type": "Organization",
      name: brand.legalName,
      url: siteUrl,
    },
    about: input.client,
    keywords: input.metrics.map((metric) => `${metric.label} ${metric.value}`).join(", "),
  };
}
