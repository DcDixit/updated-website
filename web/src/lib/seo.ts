import type { Metadata } from "next";

import { brand, reviewProfiles, siteContact } from "@/content/brand";

/** Public site URL - set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://northlinedigital.com").replace(/\/$/, "");

const defaultOgImage = `${siteUrl}/brand/hero-solutions.svg`;

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
  locale?: "en_US" | "en_GB";
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
  const url = absoluteUrl(path);
  const ogImage = image ?? defaultOgImage;
  const isUkFocused = path.includes("/solutions/saas") || description.toLowerCase().includes("uk");

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(isUkFocused ? { languages: { "en-GB": url, "en-US": url } } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.shortName,
      locale: isUkFocused ? "en_GB" : locale,
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
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: brand.legalName,
    alternateName: brand.shortName,
    url: siteUrl,
    description: brand.positioning,
    email: siteContact.email,
    telephone: siteContact.telHref,
    areaServed: ["United Kingdom", "United States"],
    knowsAbout: [
      "SaaS product design",
      "Trucking software development",
      "Dispatch CRM",
      "QuickBooks integration",
      "Xero integration",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewProfiles.clutch.rating,
      bestRating: reviewProfiles.clutch.maxRating,
      reviewCount: String(
        (parseInt(reviewProfiles.clutch.reviewCount, 10) || 0) +
          (parseInt(reviewProfiles.google.reviewCount, 10) || 0)
      ),
    },
    sameAs: [
      "https://www.linkedin.com/company/northline-digital",
      reviewProfiles.clutch.href,
      reviewProfiles.google.href,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.shortName,
    url: siteUrl,
    description: brand.positioning,
    inLanguage: ["en-GB", "en-US"],
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
    areaServed: ["United Kingdom", "United States"],
    url: absoluteUrl(input.path),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "0",
      description: "Discovery call and scoped proposal - pricing based on project requirements.",
    },
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

export function reviewJsonLd(
  reviews: ReadonlyArray<{
    author: string;
    reviewBody: string;
    ratingValue: number;
    itemReviewed?: string;
  }>
) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "ProfessionalService",
      name: review.itemReviewed ?? brand.legalName,
      url: siteUrl,
    },
  }));
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
