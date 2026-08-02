/** Brand identity, contact, and social - single source of truth for production content. */

export const brand = {
  shortName: "KRIVA",
  legalName: "KRIVA Technologies",
  logoSrc: "/brand/kriva-logo.png",
  logoMarkSrc: "/brand/kriva-icon.png",
  founded: 2025,
  positioning:
    "KRIVA Technologies is a product design and engineering studio founded by a designer with 9+ years of experience. We design and build SaaS platforms, trucking software, and accounting integrations - including dispatch CRM, fleet dashboards, and QuickBooks/Xero integrations.",
  tagline: "Product design & engineering · SaaS · Trucking · Integrations",
  mission:
    "Product design and engineering for SaaS teams, trucking operators, and anyone who needs software that actually works.",
} as const;

export const siteContact = {
  email: "hello@krivatechnologies.com",
  displayPhone: "+91 97244 54455",
  telHref: "+919724454455",
  whatsappHref: "https://wa.me/919724454455?text=Hi%20KRIVA%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  /** Set your Cal.com or Calendly URL - leave empty to fall back to email booking. */
  schedulingUrl: "https://cal.com/kriva/discovery" as string,
  hqLabel: "Ahmedabad, India · Remote-first · Global clients",
  addressLine: "511 - I The Address, Ahmedabad, Gujarat 380060, India",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=I+The+Address+Ahmedabad+Gujarat+380060",
  responseTime: "Replies within 24 hours on business days",
} as const;

export const reviewProfiles = {
  google: {
    label: "Google",
    rating: "5.0",
    maxRating: "5.0",
    reviewCount: "8 reviews",
    href: "https://g.page/r/kriva-technologies/review",
    headline: "5.0 · 8 reviews",
    subtitle: "Rated for communication, quality, and on-time delivery.",
  },
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kriva-technologies" },
  { label: "Instagram", href: "https://www.instagram.com/krivatechnologies" },
  { label: "X", href: "https://x.com/krivatechnologies" },
  { label: "Dribbble", href: "https://dribbble.com/krivatechnologies" },
] as const;

