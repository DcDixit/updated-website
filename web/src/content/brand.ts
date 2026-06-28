/** Brand identity, contact, and social - single source of truth for production content. */

export const brand = {
  shortName: "Northline",
  legalName: "Northline Digital Pvt. Ltd.",
  founded: 2018,
  positioning:
    "Northline is a digital product agency with a 15+ person in-house team. We design and build SaaS platforms for UK startups and trucking & logistics software for US operators — including dispatch CRM, fleet dashboards, and QuickBooks/Xero integrations.",
  tagline: "SaaS products. Trucking platforms. Accounting integrations.",
  mission:
    "Help product companies and logistics operators ship reliable, conversion-focused digital products - with one in-house team from discovery through launch and beyond.",
} as const;

export const siteContact = {
  email: "hello@northlinedigital.com",
  displayPhone: "+91 97244 54455",
  telHref: "+919724454455",
  whatsappHref: "https://wa.me/919724454455?text=Hi%20Northline%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  /** Set your Cal.com or Calendly URL - leave empty to fall back to email booking. */
  schedulingUrl: "https://cal.com/northline/discovery" as string,
  hqLabel: "Ahmedabad, Gujarat · Remote-first · Global clients",
  addressLine: "511 – I The Address, Ahmedabad, Gujarat 380060, India",
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
    href: "https://g.page/r/northline-digital/review",
    headline: "5.0 · 8 reviews",
    subtitle: "Rated for communication, quality, and on-time delivery.",
  },
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/northline-digital" },
  { label: "Instagram", href: "https://www.instagram.com/northlinedigital" },
  { label: "X", href: "https://x.com/northlinedigital" },
  { label: "Dribbble", href: "https://dribbble.com/northlinedigital" },
] as const;
