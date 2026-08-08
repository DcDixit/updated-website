import type { NextConfig } from "next";

/**
 * Service consolidation redirects. Keep DISABLED until all three preconditions
 * are met for every mapped source:
 *   1. Source page content migrated into the destination page
 *   2. Destination anchor IDs present in the rendered DOM
 *   3. Source route removed
 * Do not enable this flag before those are true — source pages must stay live.
 */
const ENABLE_SERVICE_CONSOLIDATION_REDIRECTS = false;

const serviceConsolidationRedirects = [
  {
    source: "/services/ui-ux-design",
    destination: "/services/product-design#ui-ux",
    permanent: true,
  },
  {
    source: "/services/ux-research",
    destination: "/services/product-design#research",
    permanent: true,
  },
  {
    source: "/services/wireframing-prototyping",
    destination: "/services/product-design#prototyping",
    permanent: true,
  },
  {
    source: "/services/web-application-design",
    destination: "/services/saas-platforms#web-apps",
    permanent: true,
  },
  {
    source: "/services/logo-design",
    destination: "/services/branding#logo",
    permanent: true,
  },
  {
    source: "/services/no-code-low-code",
    destination: "/services/automation-systems#no-code",
    permanent: true,
  },
  {
    source: "/services/ai-assisted-development",
    destination: "/services/automation-systems#ai-assisted",
    permanent: true,
  },
] as const;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["@tabler/icons-react"],
  },
  async redirects() {
    if (!ENABLE_SERVICE_CONSOLIDATION_REDIRECTS) {
      return [];
    }
    return [...serviceConsolidationRedirects];
  },
};

export default nextConfig;
