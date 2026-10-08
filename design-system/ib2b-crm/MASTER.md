# Design System Master File

> **LOGIC:** When building a specific page or section, first check `design-system/ib2b-crm/pages/[name].md`.
> If that file exists, its rules **override** this Master file. If not, follow the rules below.

**Project:** ib2b CRM landing page
**Category:** CRM & Client Management (ui-ux-pro-max product match)
**Positioning source:** `reports/GHL CRM landing page blueprint.md`: "sell the setup, not the software"

---

## Style

- **Flat Design + Minimalism**, Swiss-leaning grid, single accent color.
- Avoid the generic AI-SaaS look: no glassmorphism, gradient blobs, glowing borders or purple gradients.
- Product visuals are coded UI mocks in an app-window frame (see `src/components/landing/hero-product.tsx`) that show an outcome, not decorative illustrations.

## Brand

- Product name: **TORCH by Intelligent B2B** (matches crm.intelligentb2b.com). Logo: `public/brand/torch-mark.png` (256px, optimized from `torch-logo.png`), rendered by `src/components/landing/brand-logo.tsx`. Favicon: `src/app/icon.png`.
- Language: English for now. Italian, French and Arabic come later, so use logical Tailwind classes (`ms-/me-/ps-/pe-`, `start-/end-`, `rounded-s/e`) to keep RTL possible. Keep copy in data arrays/constants, not scattered, to ease i18n.

## Color (tokens in `src/app/globals.css`, never raw hex in components)

Target look comes from a user reference: a dark hero, a thin light headline, an orange pill CTA, and cream dashboard cards connected to the CTA by thin lines.

| Token | Value | Use |
|-------|-------|-----|
| shadcn neutral tokens | stock | Everything by default |
| `--brand` / `--brand-foreground` | `oklch(0.705 0.187 47.6)` ≈ #F97415 / near-black | The one accent: hero CTA pill, chart highlights. Text on it is dark (white fails contrast) |
| `--paper` / `--paper-foreground` | warm cream / warm near-black | Mock dashboard cards |

- Hero section and header carry the `dark` class (scoped dark tokens). Sections below can be light.
- No other accents (no navy/amber, success green or blue). The user rejected those.

## Typography

- **Sans:** DM Sans (`next/font/google`, `latin` + `latin-ext` for French). Chosen by the user; overrides the skill's Calistoga/Inter suggestion.
- **Mono:** Geist Mono (`geist` package).
- Headings: `font-semibold tracking-tight text-balance`. Hero H1 `font-light leading-[1.05] text-4xl sm:text-5xl lg:text-[3.5rem]` (bold 6xl was too heavy).
- Body: `text-lg leading-relaxed text-pretty text-muted-foreground` for lead paragraphs; min 16px on mobile.
- Copy at a 5th–7th grade reading level.

## Layout

- Container: `mx-auto max-w-6xl px-4 sm:px-6`.
- Section rhythm: `py-16 lg:py-24`.
- Mobile-first; verify at 375 / 768 / 1024 / 1440. No horizontal scroll.

## Components

- Header: `site-header.tsx` (sticky, solid bg, skip link, desktop nav ≥ md, mobile Sheet menu with 44px controls; header primary CTA hidden below md to avoid two primaries in one view). Nav anchors live in `nav-links.ts`.

- shadcn/ui `base-nova` (Base UI). Links styled as buttons: `<Button nativeButton={false} render={<a href="…" />}>`.
- Button size `xl` (h-12, 48px) added for primary page CTAs (touch target ≥ 44px). One filled primary CTA per view; secondary is `variant="outline"`.
- Icons: lucide-react only, `data-icon="inline-start|inline-end"` inside buttons, `aria-hidden` when decorative.

## Motion

- Max 1–2 animated elements per view; enter with `animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out`.
- Always add `motion-reduce:animate-none`. No infinite or decorative loops.

## Copy guardrails (from research)

- Never name GoHighLevel, HighLevel or LeadConnector.
- No "proprietary", "HIPAA-compliant", "text from day one", branded-app or unsourced stat claims.
- Offer terms ("Setup included", "No contracts", "Unlimited users", "Live in X days") must be confirmed by the ib2b team before launch.

## Pre-delivery checklist

- [ ] Contrast ≥ 4.5:1 for text in light and dark
- [ ] Visible focus rings, keyboard reachable, one `h1` per page
- [ ] `prefers-reduced-motion` respected
- [ ] No layout shift (reserve space for media)
- [ ] 375px checked, no horizontal scroll
