# TORCH landing page: build spec

> Saved verbatim from the user on 2026-10-08. Not started yet. The spec asks for a plan first and an OK before any coding.
> Note: the spec refers to `torch-project-brief.md`, which is not in the repo yet.

---

You are working on the TORCH landing page (by Intelligent B2B) that is already
running on localhost:3000. Read the existing code and torch-project-brief.md first.
Keep the current visual style (clean, black/white, inbox mockup in the hero).

## ABOUT TORCH

A white-label GoHighLevel CRM. Our edge: we set everything up for the client,
WhatsApp-first, support in Italian, English, French and Arabic, and a reseller
offer for agencies. Main competitor: Squadd (Italy). Target: local businesses
(dentists, beauty salons, real estate, restaurants, travel agencies) and
marketing agencies.

## BUILD THESE SECTIONS, IN THIS ORDER

1. Navbar: logo, Features, How it works, Pricing, FAQ, "Book a call", "Start my free trial"
2. Hero
   - Headline: "Never miss a customer again."
   - Second line: "We build it. You close the deals."
   - Subheadline: "Torch texts back missed calls, answers WhatsApp and books
     appointments while you work, and our team sets everything up for you."
   - Buttons: "Start my free trial" + "Show me how it works"
   - Badges: Live in 7 days · No contracts · Cancel anytime
   - Keep the inbox mockup
3. Trust bar: placeholder for client logos and a rating (no fake names or numbers)
4. Problem: "You're losing customers every day": missed calls, slow replies,
   too many tools, no follow-up. 4 short cards.
5. How it works: 3 steps: Book a setup call → We build your system → You close the deals
6. Features (icon + title + one line each): missed-call text back, WhatsApp
   and unified inbox, pipeline, online booking and reminders, review requests,
   email and SMS campaigns, AI assistant, mobile app
7. Industries: tabs or cards for dentists, beauty, real estate, restaurants,
   travel, each with one concrete example of what Torch does for them
8. "Without Torch vs With Torch": side-by-side cost comparison of separate tools
   vs one Torch plan (amounts as placeholders)
9. Done-for-you setup and support: what our team does, support in 4 languages
10. For agencies: resell Torch under your own brand, with a "Become a partner" CTA
11. Testimonials: 3 placeholder cards, clearly marked "PLACEHOLDER"
12. Pricing: 3 plans, monthly/yearly toggle, all prices marked "To confirm"
13. Guarantee: money-back guarantee block (wording marked "To confirm")
14. FAQ: 8 questions (setup time, contracts, data migration, WhatsApp,
    languages, GDPR, cancelling, difference from GoHighLevel)
15. Final CTA: strong closing line + both buttons
16. Footer: links, Privacy, Cookie Policy, Terms, company details placeholder (P.IVA)

## RULES

- Never invent stats, reviews, client names or prices. Use clear placeholders.
- All lead forms and "Start my free trial" buttons must use a placeholder
  component where I will paste the GoHighLevel form/calendar embed code.
  Leads must go into GHL, not a custom backend.
- Add placeholders for the Meta Pixel and Google tag, and keep UTM parameters
  when users click CTAs.
- Mobile-first, fast, accessible, good SEO (title, meta description, OG image).
- Put all text in one content file so we can add Italian, French and Arabic
  (right-to-left) versions later.

BEFORE CODING: show me the plan (sections, components, files you will change)
and wait for my OK. After building, list every placeholder I need to fill.
