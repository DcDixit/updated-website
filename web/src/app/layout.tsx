import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";

import { AnalyticsProvider } from "@/components/site/analytics-provider";
import { SiteBreadcrumbs } from "@/components/site/site-breadcrumbs";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StickyCtaBar } from "@/components/site/sticky-cta-bar";
import { ThemeProvider } from "@/components/site/theme-provider";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { brand } from "@/content/site-content";
import { organizationJsonLd, siteUrl, websiteJsonLd } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.shortName} · AI-powered digital product agency`,
    template: `%s · ${brand.shortName}`,
  },
  description:
    "Northline designs and builds SaaS platforms for UK startups and trucking software for US operators — dispatch CRM, fleet dashboards, and accounting integrations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brand.shortName,
    title: `${brand.shortName} · AI-powered digital product agency`,
    description:
      "Northline designs and builds SaaS platforms for UK startups and trucking software for US operators — dispatch CRM, fleet dashboards, and accounting integrations.",
    images: [{ url: `${siteUrl}/brand/og-default.png`, width: 1200, height: 630, alt: brand.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.shortName} · AI-powered digital product agency`,
    description:
      "Northline designs and builds SaaS platforms for UK startups and trucking software for US operators — dispatch CRM, fleet dashboards, and accounting integrations.",
    images: [`${siteUrl}/brand/og-default.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = organizationJsonLd();
  const websiteJsonLdData = websiteJsonLd();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${instrumentSans.className} h-full font-sans`}
    >
      <head>
        <link rel="preload" href="/brand/og-default.png" as="image" type="image/png" />
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {gaMeasurementId || gtmId ? (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          </>
        ) : null}
        {gtmId ? (
          <Script id="gtm-loader" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { anonymize_ip: true, send_page_view: false });`}
            </Script>
          </>
        ) : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLdData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="text-foreground bg-background relative flex min-h-full flex-col font-sans antialiased"
      >
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <ThemeProvider>
          <AnalyticsProvider>
            <a
              href="#main-content"
              className="bg-background text-foreground ring-ring focus:ring-ring/50 fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-transform focus:translate-y-0 focus:outline-none focus:ring-[3px]"
            >
              Skip to content
            </a>
            <SiteHeader />
            <SiteBreadcrumbs />
            <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
              {children}
            </main>
            <SiteFooter />
            <ErrorBoundary>
              <StickyCtaBar />
            </ErrorBoundary>
            <ErrorBoundary>
              <WhatsAppButton />
            </ErrorBoundary>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
