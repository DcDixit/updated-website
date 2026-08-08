/** Brand identity, contact, and social — single source of truth for production content. */

export const brand = {
  shortName: "KRIVA",
  legalName: "KRIVA Technologies",
  logoSrc: "/brand/kriva-logo.png",
  logoMarkSrc: "/brand/kriva-icon.png",
  founded: 2025,
  /**
   * Verified positioning for SEO / JSON-LD. Unverified headcount / project counts
   * live in `siteStats` as nullables and must not render when null.
   */
  positioning:
    "Custom software for US trucking, moving, and auto-transport operators, and for SaaS teams who need onboarding, dashboards, and integrations that hold up.",
  /** Short About / hero supporting line — distinct from SEO positioning. */
  tagline: "Design and engineering for US trucking ops and SaaS product teams.",
  /** What we exist to do — used where mission/purpose copy is needed. */
  mission:
    "We design and build dispatch tools, fleet software, SaaS dashboards, and accounting integrations that operators and product teams actually want to use.",
  assurances: [
    "NDA from day one",
    "You own the design files, code, and documentation",
    "No subcontracting, the kickoff team is the build team",
    "Weekly demos on a shared board",
  ],
} as const;

/** Unverified metrics — render nothing when null. */
export const siteStats = {
  projects: null as string | null,
  years: null as string | null,
  teamSize: null as string | null,
  googleRating: null as number | null,
} as const;

export type SocialHandles = {
  linkedin: string | null;
  instagram: string | null;
  x: string | null;
  dribbble: string | null;
};

/** Unverified social handles — omit the row when all are null. */
export const social: SocialHandles = {
  linkedin: null,
  instagram: null,
  x: null,
  dribbble: null,
};

/** Unverified Google Business Profile URL. */
export const reviewUrl: string | null = null;

const WHATSAPP_NUMBER = "919724454455";
const WHATSAPP_MESSAGE = "Hi KRIVA, I'd like to discuss a project.";

export function whatsappHref(
  number = WHATSAPP_NUMBER,
  message = WHATSAPP_MESSAGE
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(email = "hello@krivatechnologies.com", subject?: string): string {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const siteContact = {
  email: "hello@krivatechnologies.com",
  phoneIn: {
    display: "+91 97244 54455",
    href: "tel:+919724454455",
  },
  /** US phone — render before India when set. */
  phoneUs: null as { display: string; href: string } | null,
  whatsapp: {
    number: WHATSAPP_NUMBER,
    message: WHATSAPP_MESSAGE,
  },
  /**
   * Cal.com / scheduler URL. Null until a verified slug is supplied.
   * When null, `/contact#book` shows the contact block only — no dead button.
   */
  scheduler: null as string | null,
  addressLine: "511 - I The Address, Ahmedabad, Gujarat 380060, IN",
  hqLabel: "Ahmedabad, India · Remote-first · Global clients",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=I+The+Address+Ahmedabad+Gujarat+380060",
  responseTime:
    "We reply within one business day and schedule fit calls across US and UK working hours.",
  /** Compat aliases for existing call sites. */
  displayPhone: "+91 97244 54455",
  telHref: "+919724454455",
  /** Empty string when scheduler is null — consumers must treat falsy as "no scheduler". */
  schedulingUrl: "" as string,
  whatsappHref: whatsappHref(),
};

/** Non-null social URLs only — for footer icons and JSON-LD sameAs. */
export function activeSocialLinks(): Array<{ label: string; href: string }> {
  const entries: Array<{ key: keyof SocialHandles; label: string }> = [
    { key: "linkedin", label: "LinkedIn" },
    { key: "instagram", label: "Instagram" },
    { key: "x", label: "X" },
    { key: "dribbble", label: "Dribbble" },
  ];
  return entries.flatMap(({ key, label }) => {
    const href = social[key];
    return href ? [{ label, href }] : [];
  });
}

/**
 * Empty while handles are unverified. Prefer activeSocialLinks().
 * Existing `.map()` call sites render nothing.
 */
export const socialLinks: ReadonlyArray<{ label: string; href: string }> = [];

/**
 * Review profile for UI. Consumers must gate on `href` / `headline` and render
 * nothing when unverified.
 */
export const reviewProfiles = {
  google: {
    label: "Google",
    rating: null as string | null,
    maxRating: null as string | null,
    reviewCount: null as string | null,
    href: reviewUrl,
    headline: null as string | null,
    subtitle: null as string | null,
  },
} as const;
