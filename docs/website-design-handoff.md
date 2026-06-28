# Website design & build handoff

**Audience:** Design (Figma), development, content.  
**Purpose:** Page structure, reusable components, URL sitemap, and editable copy tokens for future updates.

---

## 1. Verbal identity (use everywhere)

Replace `{{brand}}` with the final company name in CMS, Figma notes, and code. Do not mix alternate names in the same file.

| Token | Value (editable) |
| --- | --- |
| `{{brand}}` | `{{brand}}` |
| **Positioning (one line)** | `{{brand}} designs and builds reliable software, integrations, and infrastructure for growing operations-led businesses.` |
| **Voice** | Calm, precise, human. Short sentences. Proof over hype. |
| **Avoid** | “Award-winning,” “world-class,” “synergy,” “we do everything” walls of text. |
| **Primary CTA verb** | `Book a discovery call` |
| **Secondary CTA verb** | `Send a project brief` |
| **Tertiary / navigation** | `View work` · `Explore services` · `Read insights` |

**Microcopy pattern for sections**

- **Eyebrow:** category label (mono or small caps), e.g. `Solutions`  
- **Heading:** outcome-oriented, not internal jargon  
- **Body:** 1–2 sentences max in dense sections; link to detail pages for depth  
- **CTA pair:** one primary (conversion), one secondary (explore trust)

---

## 2. Naming conventions

### 2.1 Figma

| Rule | Convention | Example |
| --- | --- | --- |
| **Pages** | `00 - Cover` … `99 - Archive` | `10 - Marketing / Desktop` |
| **Top-level frames** | `Page / {Route} / {Breakpoint}` | `Page / Home / Desktop` |
| **Sections** | `Section / {Name}` | `Section / Hero` |
| **Components** | `Cmp / {Category} / {Name} / {Variant}` | `Cmp / Button / Primary / Default` |
| **Instances** | Same as main; add state in property | `State=Hover` |
| **Auto-layout direction** | Document in component description | `Hug` vs `Fill` |

### 2.2 Design tokens (Figma variables)

Prefix: `core/` for primitives, `sem/` for semantic.

Suggested groups:

- `core/color/*` - canvas, text, border, accent  
- `core/space/*` - 4, 8, 12, 16, 24, 32, 48, 64, 96  
- `core/radius/*` - sm, md, lg, xl  
- `core/type/*` - font families, sizes (use `clamp` notes in dev)  
- `sem/surface/default` · `sem/surface/raised` · `sem/text/primary`  
- `sem/button/primary/bg` …

### 2.3 CMS & code (parity with Figma)

| Layer | Naming |
| --- | --- |
| **Routes** | kebab-case: `/insights`, `/services/crm-development` |
| **React components / blocks** | `PascalCase` matching Figma omitting `Cmp /`: `ButtonPrimary`, `CardService` |
| **Content fields** | `snake_case` or `camelCase` (pick one stack-wide). Below: **`snake_case`** examples. |

**Repeatable section schema (writers edit these keys only)**

```yaml
section_id: hero                    # anchor slug, stable
eyebrow: string | null              # editable
heading: string                     # editable
description: string | null          # editable
cta_primary_label: string
cta_primary_href: string
cta_secondary_label: string | null
cta_secondary_href: string | null
media: reference | null             # image / video / lottie
```

---

## 3. Figma file - page structure

Create one Figma file: **`{{brand}} - Marketing Web`**.

### 3.1 Pages (in order)

| # | Page name | Contents |
| --- | --- | --- |
| `00` | `00 - Cover & changelog` | Title, owners, token version, last updated |
| `01` | `01 - Foundations` | Color, type, spacing, elevation, icons, grids |
| `02` | `02 - Components` | All `Cmp / *` variants, states, responsive rules |
| `03` | `03 - Templates / Sections` | Composed sections only (no full pages) |
| `10` | `10 - Pages / Desktop` | Full page frames, desktop width |
| `11` | `11 - Pages / Tablet` | Key pages only or responsive notes |
| `12` | `12 - Pages / Mobile` | Full mobile frames for top routes |
| `20` | `20 - CMS field map` | Tables: page → section → CMS keys (mirror §6) |
| `90` | `90 - Archive` | Deprecated explorations |

### 3.2 Full page frames (`10 - Pages / Desktop`)

Each frame: **`Page / {Route} / Desktop`** · width **1440** (or 1280 if team standard) · background token `sem/surface/canvas`.

| Frame name | Route | Notes |
| --- | --- | --- |
| `Page / Home / Desktop` | `/` | All home sections in vertical stack |
| `Page / About / Desktop` | `/about` | |
| `Page / Services / Desktop` | `/services` | Hub + filters |
| `Page / Service - UI-UX / Desktop` | `/services/ui-ux-design` | Template for other services |
| `Page / Service - Web / Desktop` | `/services/web-development` | |
| `Page / Service - Mobile / Desktop` | `/services/mobile-applications` | |
| `Page / Service - SaaS / Desktop` | `/services/saas-platforms` | |
| `Page / Service - CRM / Desktop` | `/services/crm-development` | |
| `Page / Service - API / Desktop` | `/services/api-integrations` | |
| `Page / Service - Branding / Desktop` | `/services/branding` | |
| `Page / Service - Infra / Desktop` | `/services/infrastructure` | |
| `Page / Service - Automation / Desktop` | `/services/automation-systems` | |
| `Page / Work / Desktop` | `/work` | Case study index |
| `Page / Work - Detail / Desktop` | `/work/{{slug}}` | One representative template |
| `Page / Industries / Desktop` | `/industries` | |
| `Page / Process / Desktop` | `/process` | |
| `Page / Technologies / Desktop` | `/technologies` | |
| `Page / Insights / Desktop` | `/insights` | Blog index |
| `Page / Insights - Article / Desktop` | `/insights/{{slug}}` | Article template |
| `Page / Careers / Desktop` | `/careers` | Optional |
| `Page / Contact / Desktop` | `/contact` | |
| `Page / FAQ / Desktop` | `/faq` | |
| `Page / Privacy / Desktop` | `/privacy` | |
| `Page / Terms / Desktop` | `/terms` | |
| `Page / 404 / Desktop` | `404` | |

**Tablet / mobile:** duplicate highest-traffic frames first: `Home`, `Contact`, `Service - Web`, `Work`, `Insights - Article`.

### 3.3 Section order per page (Figma layer stack = scroll order)

**Home `/`**

1. `Section / Nav / Marketing`  
2. `Section / Hero`  
3. `Section / TrustStats`  
4. `Section / ServicesSnapshot`  
5. `Section / WhyChoose`  
6. `Section / IndustriesRibbon`  
7. `Section / Technologies`  
8. `Section / Process`  
9. `Section / WorkTeaser`  
10. `Section / Testimonials`  
11. `Section / FAQ`  
12. `Section / FinalCTA`  
13. `Section / Footer`  
14. `Section / StickyCTA` (optional overlay)

**About `/about`**

`Nav` → `Hero` → `FounderStory` → `MissionVision` → `Culture` → `Collaboration` → `Trust` → `FinalCTA` → `Footer`

**Services hub `/services`**

`Nav` → `Hero` → `ServiceGrid` → `EngagementModels` (optional) → `FinalCTA` → `Footer`

**Service detail `/services/{slug}`** (template)

`Nav` → `Hero` → `Overview` → `Challenges` → `Approach` → `Deliverables` → `TechStack` → `Benefits` → `RelatedWork` → `FAQ` → `FinalCTA` → `Footer`

**Work `/work`**

`Nav` → `Hero` → `CaseFilters` → `CaseGrid` → `FinalCTA` → `Footer`

**Work detail `/work/{slug}`**

`Nav` → `HeroCase` → `ClientOverview` → `Problem` → `Research` → `Solution` → `UIProcess` → `DevProcess` → `Challenges` → `Outcomes` → `Metrics` → `Testimonial` → `Gallery` → `RelatedCases` → `FinalCTA` → `Footer`

**Industries `/industries`**

`Nav` → `Hero` → `IndustryGrid` → `ProofTeaser` → `FinalCTA` → `Footer`

**Process `/process`**

`Nav` → `Hero` → `Timeline` → `Artifacts` → `EngagementFAQ` → `FinalCTA` → `Footer`

**Technologies `/technologies`**

`Nav` → `Hero` → `TechCategories` → `Philosophy` → `FinalCTA` → `Footer`

**Insights `/insights`**

`Nav` → `Hero` → `FeaturedPost` → `CategoryChips` → `PostGrid` → `Newsletter` (optional) → `Footer`

**Insights article `/insights/{slug}`**

`Nav` → `ArticleHero` → `TOC` (optional) → `ArticleBody` → `AuthorBio` → `RelatedPosts` → `FinalCTA` → `Footer`

**Careers `/careers`** (optional)

`Nav` → `Hero` → `Values` → `OpenRoles` → `Process` → `Footer`

**Contact `/contact`**

`Nav` → `Hero` → `ContactSplit` (form + side panel) → `Map` → `Footer`

**FAQ `/faq`**

`Nav` → `Hero` → `FAQAccordion` → `StillQuestions` → `Footer`

**Privacy / Terms**

`Nav` → `LegalHero` → `LegalBody` (rich text) → `Footer`

---

## 4. Component inventory

Legend: **Figma name** → **Purpose** → **Key properties / variants** → **CMS binding (if any)**

### 4.1 Navigation & chrome

| Component | Purpose | Variants / props | CMS |
| --- | --- | --- | --- |
| `Cmp / Nav / Marketing` | Primary site nav | `Theme=Light|Dark`, `Sticky=True|False` | `nav_items[]`, `cta_label`, `cta_href` |
| `Cmp / Nav / Footer` | Multi-column footer | `Theme` | `footer_columns[]`, `legal_links[]`, `social_links[]` |
| `Cmp / Bar / StickyCTA` | Persistent conversion | `Show=Always|Scroll` | `cta_label`, `cta_href`, `supporting_text` |

### 4.2 Primitives - typography

| Component | Purpose | Variants |
| --- | --- | --- |
| `Cmp / Text / Eyebrow` | Section label | `Theme` |
| `Cmp / Text / H1`–`H4` | Headings | `Theme` |
| `Cmp / Text / Body` | Paragraph | `Size=Large|Medium|Small`, `Theme` |
| `Cmp / Text / Caption` | Meta, legal | `Theme` |

### 4.3 Primitives - actions

| Component | Purpose | Variants |
| --- | --- | --- |
| `Cmp / Button / Primary` | Main CTA | `Size=LG|MD|SM`, `State=Default|Hover|Focus|Disabled`, `Icon=None|Leading|Trailing` |
| `Cmp / Button / Secondary` | Secondary CTA | same |
| `Cmp / Button / Ghost` | Tertiary | same |
| `Cmp / Link / Inline` | Text link with chevron | `Icon=True|False` |

### 4.4 Media & surfaces

| Component | Purpose | Variants |
| --- | --- | --- |
| `Cmp / Surface / Card` | Base card shell | `Elevation=Flat|Raised`, `Radius=MD|LG` |
| `Cmp / Media / DeviceMock` | Dashboard / app frame | `Device=Desktop|Mobile` |
| `Cmp / Media / LogoRow` | Client logos | `Count=6|8|Scroll` |
| `Cmp / Badge / Tag` | Service/industry tags | `Style=Neutral|Accent` |
| `Cmp / Badge / Metric` | Case study stat | `Style=Positive|Neutral` |

### 4.5 Forms

| Component | Purpose | Notes |
| --- | --- | --- |
| `Cmp / Input / Text` | Single line | label, hint, error |
| `Cmp / Input / Textarea` | Message | |
| `Cmp / Input / Select` | Inquiry category | options from CMS |
| `Cmp / Input / File` | Attachments | optional |
| `Cmp / Form / Contact` | Full form block | field list configurable per locale |

### 4.6 Content blocks (molecules)

| Component | Purpose | CMS |
| --- | --- | --- |
| `Cmp / Block / StatTile` | Number + label + caption | `stat_value`, `stat_label`, `stat_caption` |
| `Cmp / Block / ServiceCard` | Service teaser | `title`, `summary`, `href`, `icon` |
| `Cmp / Block / IndustryCard` | Industry teaser | `title`, `summary`, `href`, `image` |
| `Cmp / Block / CaseCard` | Case study tile | `title`, `metric`, `summary`, `href`, `tags[]`, `thumb` |
| `Cmp / Block / PostCard` | Blog tile | `title`, `summary`, `href`, `date`, `category`, `thumb` |
| `Cmp / Block / Testimonial` | Quote | `quote`, `name`, `role`, `company`, `avatar` |
| `Cmp / Block / FAQItem` | Single FAQ | `question`, `answer` (richtext) |
| `Cmp / Block / TimelineStep` | Process step | `title`, `description`, `step_index` |
| `Cmp / Block / TechChip` | Tech label | `label`, `href` optional |
| `Cmp / Block / TeamMember` | Optional | `name`, `role`, `bio_short`, `photo` |

### 4.7 Sections (organisms) - compose from molecules

Each maps 1:1 to `Section / *` frames in templates.

| Component | Includes | Editable slots |
| --- | --- | --- |
| `Cmp / Section / Hero` | eyebrow, H1, body, 2 CTAs, media | all text + media |
| `Cmp / Section / TrustStats` | eyebrow, heading, logo row, stat tiles | stats collection |
| `Cmp / Section / ServicesSnapshot` | heading, grid of `ServiceCard` | references to services |
| `Cmp / Section / WhyChoose` | heading, 2×2 pillar cards | `pillars[]` |
| `Cmp / Section / IndustriesRibbon` | heading, chips or cards | industries refs |
| `Cmp / Section / Technologies` | heading, tech chip groups | grouped chips |
| `Cmp / Section / Process` | timeline | `steps[]` |
| `Cmp / Section / WorkTeaser` | heading, 3× `CaseCard` | curated cases |
| `Cmp / Section / Testimonials` | carousel or stack | testimonials collection |
| `Cmp / Section / FAQ` | accordion list | FAQ subset |
| `Cmp / Section / FinalCTA` | headline, supporting, buttons | |
| `Cmp / Section / ServiceDetail*` | repeatable service blocks | per §6 |
| `Cmp / Section / LegalBody` | richtext | long-form legal |

---

## 5. Markdown sitemap (development)

### 5.1 Route table

| Route | Page frame | Primary goal | Content type |
| --- | --- | --- | --- |
| `/` | Home | Qualify + convert | `page_home` |
| `/about` | About | Trust + culture | `page_about` |
| `/services` | Services hub | Route to solutions | `page_services_hub` |
| `/services/ui-ux-design` | Service | SEO + lead | `document_service` |
| `/services/branding` | Service | SEO + lead | `document_service` |
| `/services/web-development` | Service | SEO + lead | `document_service` |
| `/services/mobile-applications` | Service | SEO + lead | `document_service` |
| `/services/saas-platforms` | Service | SEO + lead | `document_service` |
| `/services/crm-development` | Service | SEO + lead | `document_service` |
| `/services/api-integrations` | Service | SEO + lead | `document_service` |
| `/services/infrastructure` | Service | SEO + lead | `document_service` |
| `/services/automation-systems` | Service | SEO + lead | `document_service` |
| `/services/business-process-optimization` | Service (optional separate) | SEO + lead | `document_service` |
| `/services/support-maintenance` | Service (optional) | SEO + lead | `document_service` |
| `/work` | Work index | Proof | `page_work_index` |
| `/work/{slug}` | Work detail | Proof depth | `document_case_study` |
| `/industries` | Industries | Vertical relevance | `page_industries` |
| `/industries/{slug}` | Industry detail (optional) | Long-tail SEO | `document_industry` |
| `/process` | Process | Reduce fear | `page_process` |
| `/technologies` | Technologies | Technical trust | `page_technologies` |
| `/insights` | Blog index | SEO + nurture | `page_insights_index` |
| `/insights/{slug}` | Article | SEO + nurture | `document_post` |
| `/careers` | Careers | Hiring | `page_careers` |
| `/contact` | Contact | Convert | `page_contact` |
| `/faq` | FAQ | Objections | `page_faq` |
| `/privacy` | Privacy | Legal | `page_legal` |
| `/terms` | Terms | Legal | `page_legal` |

**Canonical slug list (service documents)**

```text
ui-ux-design
branding
web-development
mobile-applications
saas-platforms
crm-development
api-integrations
infrastructure
automation-systems
business-process-optimization   # optional
support-maintenance             # optional
```

### 5.2 `robots.txt` / `sitemap.xml` (reference)

- Include all public routes above; exclude draft posts and preview URLs.  
- Set `lastmod` from CMS `updated_at`.

### 5.3 Internal linking map (minimum)

- Every **service** page → 2 **case studies** + **contact**  
- Every **case study** → relevant **services** + **industries**  
- **Insights** articles → pillar **hub** pages (`/services/...`, `/industries`)  
- **Footer** → FAQ, Privacy, Terms, Contact  

---

## 6. CMS collections & editable fields (writer-friendly)

Use collection names in **Title Case** in CMS UI; store **API IDs** in `snake_case`.

### 6.1 Globals (`singleton`)

`global_site`

- `brand_name` (replaces `{{brand}}` in UI only if different from env)  
- `default_seo_title`, `default_seo_description`  
- `primary_cta_label`, `primary_cta_href`  
- `secondary_cta_label`, `secondary_cta_href`  
- `nav`, `footer` (structured JSON or nested singletons)

### 6.2 Repeatables

**`collection_stat`** - for home / about numbers  
- `key`, `value`, `label`, `caption`  

**`collection_logo`**  
- `name`, `image`, `url` optional  

**`collection_service`**  
- `slug`, `title`, `summary`, `icon`, `hero`, `overview`, `challenges[]`, `approach`, `deliverables[]`, `benefits[]`, `tech_notes`, `faq_refs[]`, `related_case_refs[]`

**`collection_industry`**  
- `slug`, `title`, `summary`, `body`, `related_cases[]`

**`collection_case_study`**  
- `slug`, `title`, `client_name`, `industry_ref`, `summary`, `metric_primary`,  
  `sections` (richtext blocks or keyed fields): `problem`, `research`, `solution`, `ui_process`, `dev_process`, `challenges`, `outcome`,  
  `metrics[]` { `label`, `value` }, `testimonial_ref`, `gallery[]`

**`collection_testimonial`**  
- `quote`, `person_name`, `person_title`, `company`, `photo`, `case_ref` optional  

**`collection_faq`**  
- `question`, `answer` (richtext), `topics[]`, `related_service_slugs[]`  

**`collection_post`** (Insights)  
- `slug`, `title`, `summary`, `body`, `category`, `tags[]`, `author_ref`, `published_at`, `hero_image`, `seo_*`  

**`collection_job`** (Careers - optional)  
- `title`, `location`, `type`, `body`, `apply_href`

### 6.3 Page-type documents (`page_*`)

Each `page_*` uses **sections** as an ordered array: `sections[]` where each item has `section_type` + `fields` matching §2.3 schema.

Suggested `page_*` ids:

- `page_home`, `page_about`, `page_services_hub`, `page_work_index`, `page_industries`, `page_process`, `page_technologies`, `page_insights_index`, `page_careers`, `page_contact`, `page_faq`, `page_legal_privacy`, `page_legal_terms`

---

## 7. Anchor IDs (deep links)

Stable HTML `id`s for QA and analytics:

```text
#hero #trust #services #why #industries #technologies #process #work #testimonials #faq #cta
#overview #challenges #approach #deliverables #technology #benefits #related-work
```

---

## 8. Placeholder copy deck (consistent with verbal identity)

**Home hero (editable)**

- `eyebrow`: `Digital products & integrations`  
- `heading`: `Calm systems for serious operations.`  
- `description`: `{{brand}} ships software, dashboards, and integrations your team can rely on - designed clearly, engineered carefully, and supported long after launch.`  
- `cta_primary_label`: `Book a discovery call`  
- `cta_secondary_label`: `View selected work`

**Final CTA (global default)**

- `heading`: `Let’s tighten the weakest link in your stack.`  
- `description`: `Share your goals and constraints - we’ll propose a pragmatic plan within a few days.`  

**Trust stats labels (writers fill numbers)**

- `Years of combined experience · Projects delivered · Industries supported · Typical partnership length`

---

## 9. Changelog

| Date | Author | Note |
| --- | --- | --- |
| `{{YYYY-MM-DD}}` | `{{owner}}` | Initial handoff scaffold |
