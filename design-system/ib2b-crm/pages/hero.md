# Hero overrides

Implemented in `src/components/landing/hero.tsx` and `hero-dashboard.tsx`, modeled on the user's reference screenshot.

- Dark section (`dark` class), centered. Order: avatar trust chip ("Set up by a real team, not a ticket queue"), then a light-weight H1 on two lines, then a short sub, then a single orange pill CTA.
- Below it: a vertical line from the CTA that splits into a bracket reaching two tilted side cards (speed-to-lead gauge, pipeline). The front center card shows lead performance (block bar chart). Cards use `bg-paper`. The section crops them at the bottom.
- Mobile: only the center card; connectors and side cards are hidden below md.
- The earlier inbox mockup (`hero-product.tsx`) is kept for a later "one inbox" section.
- All numbers in the cards are illustrative. Team avatars are placeholder initials until real photos exist.
