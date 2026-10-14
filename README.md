This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Booking page (`/[lang]/book`)

Visitors book a 30-minute call on our own page (en, it, fr, ar). The server talks to GoHighLevel's API v2; the token never reaches the browser. Every "Book a call" button links here (`bookingHref()` in `src/content/embeds.ts`), and `?plan=starter|growth|agency` preselects the plan.

### Environment variables

Set these in `.env.local` (and in Vercel → Settings → Environment Variables). See `.env.example`.

| Variable | What it is |
| --- | --- |
| `GHL_PRIVATE_TOKEN` | Private Integration token. Scopes: `calendars.readonly`, `calendars/events.write`, `contacts.write`, `locations/customFields.readonly` |
| `GHL_LOCATION_ID` | Sub-account (location) ID |
| `GHL_CALENDAR_ID` | Calendar to book on (`G0rSuqw8F7nD13Jn91DH`) |
| `GHL_PLAN_FIELD_ID` | Optional. ID of the `plan_interest` field; skips the lookup by key |

If any is missing, the booking API answers 503 and the page shows "Online booking isn't available right now".

### How it works

1. **Pick a time.** The page detects the visitor's timezone (they can change it) and calls `GET /api/booking/slots?timezone=…`. The server asks GHL for free slots for the next 30 days (`GET /calendars/{id}/free-slots`).
2. **Details.** First and last name, phone with country code, email, plan, optional message and an optional marketing-consent box. Validated in the browser and again on the server with the same zod schema (`src/lib/booking.ts`).
3. **Book.** `POST /api/booking`:
   - checks the honeypot field and a rate limit (5 bookings per hour per IP, in memory per server instance);
   - re-checks that the slot is still free (if not: `409 slot_taken`, and the page reloads the times);
   - upserts the contact (`POST /contacts/upsert`) with the `plan_interest` custom field (looked up by key with `GET /locations/{id}/customFields`);
   - adds tags with `POST /contacts/{id}/tags`: `website-booking`, `plan-<plan>` (e.g. `plan-agency-white-label`) and `marketing-consent` only if the box was ticked. Tags are not sent on upsert, because that would replace a returning contact's existing tags;
   - creates a confirmed appointment (`POST /calendars/events/appointments`) titled `TORCH call – {plan} – {first last}`;
   - saves the visitor's message as an appointment note (`POST /calendars/appointments/{id}/notes`).
4. **Confirmation** with date, time and timezone, and an "Add to calendar" `.ics` download. The Meta Pixel `Lead` event fires here (only after cookie consent).

All GHL calls live in `src/lib/ghl.ts`. Endpoints and `Version` headers (`2021-04-15` for calendars, `2021-07-28` for contacts and locations) follow HighLevel's official OpenAPI specs.

The `plan_interest` options in GHL must be exactly: `Starter`, `Growth`, `Agency (white-label)`, `Not sure yet`. The page translates the labels, never the values.

### How to test

1. Fill in the three variables in `.env.local` and run `npm run dev`.
2. Open `http://localhost:3000/en/book` (also try `/ar/book` for right-to-left, and `/it/book?plan=agency`).
3. Check that free times load and match the GHL calendar. Change the timezone and check the times move.
4. Book a test slot with your own email and phone. In GHL, check the contact (fields, `plan_interest`, tags) and the appointment (title, status confirmed, note). Then delete the test appointment.
5. To test "slot taken": open the page in two tabs, book a time in one, then try the same time in the other. You should be sent back to the calendar with a message.
6. Quick API check: `curl "http://localhost:3000/api/booking/slots?timezone=Europe/Rome"`.
