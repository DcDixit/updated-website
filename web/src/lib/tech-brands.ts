/** Tech & platform brand slugs for logo components. */

export type TechBrandSlug =
  | "nextjs"
  | "react"
  | "react-native"
  | "figma"
  | "stripe"
  | "supabase"
  | "vercel"
  | "quickbooks"
  | "xero"
  | "hubspot"
  | "webflow"
  | "bubble"
  | "make"
  | "claude"
  | "openai"
  | "github"
  | "cursor"
  | "typescript"
  | "tailwind";

/** Per-brand optical sizing - height is the normalized visual anchor; maxWidth caps wide wordmarks. */
export type TechBrandVisual = {
  height: number;
  maxWidth?: number;
  /** Monochrome marks that invert on dark backgrounds (official single-color assets). */
  themeAdaptive?: boolean;
};

export const TECH_BRAND_VISUAL: Record<TechBrandSlug, TechBrandVisual> = {
  nextjs: { height: 22, themeAdaptive: true },
  react: { height: 26 },
  "react-native": { height: 26 },
  figma: { height: 28 },
  stripe: { height: 24 },
  supabase: { height: 28 },
  vercel: { height: 16, themeAdaptive: true },
  quickbooks: { height: 28 },
  xero: { height: 26 },
  hubspot: { height: 26 },
  webflow: { height: 18, maxWidth: 92 },
  bubble: { height: 24, themeAdaptive: true },
  make: { height: 22 },
  claude: { height: 20, themeAdaptive: true },
  openai: { height: 26, themeAdaptive: true },
  github: { height: 26, themeAdaptive: true },
  cursor: { height: 22 },
  typescript: { height: 24 },
  tailwind: { height: 20 },
};

export const TECH_BRAND_LABELS: Record<TechBrandSlug, string> = {
  nextjs: "Next.js",
  react: "React",
  "react-native": "React Native",
  figma: "Figma",
  stripe: "Stripe",
  supabase: "Supabase",
  vercel: "Vercel",
  quickbooks: "QuickBooks",
  xero: "Xero",
  hubspot: "HubSpot",
  webflow: "Webflow",
  bubble: "Bubble",
  make: "Make",
  claude: "Claude",
  openai: "ChatGPT",
  github: "GitHub",
  cursor: "Cursor",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
};

export type TechBrandItem = {
  brand: TechBrandSlug;
  category: string;
};

export const homepageTechBrands: TechBrandItem[] = [
  { brand: "nextjs", category: "Frontend" },
  { brand: "react-native", category: "Mobile" },
  { brand: "quickbooks", category: "Integrations" },
  { brand: "xero", category: "Integrations" },
  { brand: "hubspot", category: "CRM" },
  { brand: "figma", category: "Design" },
  { brand: "webflow", category: "No-Code" },
  { brand: "bubble", category: "No-Code" },
  { brand: "make", category: "Automation" },
  { brand: "stripe", category: "Payments" },
  { brand: "supabase", category: "Backend" },
  { brand: "vercel", category: "Deployment" },
];

export const homepageAiToolBrands: TechBrandItem[] = [
  { brand: "claude", category: "AI" },
  { brand: "openai", category: "AI" },
  { brand: "github", category: "AI" },
  { brand: "cursor", category: "AI" },
  { brand: "figma", category: "Design" },
  { brand: "make", category: "Automation" },
  { brand: "quickbooks", category: "Integrations" },
];

export const techBrandCategories = [
  { id: "design", label: "Design", brands: ["figma"] as TechBrandSlug[] },
  { id: "frontend", label: "Development", brands: ["nextjs", "react", "typescript", "tailwind"] as TechBrandSlug[] },
  { id: "ai", label: "AI", brands: ["claude", "openai", "cursor", "github"] as TechBrandSlug[] },
  { id: "infra", label: "Infrastructure", brands: ["vercel", "supabase", "stripe"] as TechBrandSlug[] },
  { id: "integrations", label: "Integrations", brands: ["quickbooks", "xero", "hubspot", "make"] as TechBrandSlug[] },
] as const;

