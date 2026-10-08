import { brandPaths, type Brand } from "@/components/landing/brand-icons"

// TODO(ib2b): confirm every app below is connected in the TORCH accounts we set up.
const rows: { name: string; brand: Brand }[][] = [
  [
    { name: "WhatsApp", brand: "whatsapp" },
    { name: "Facebook", brand: "facebook" },
    { name: "Instagram", brand: "instagram" },
    { name: "Messenger", brand: "messenger" },
    { name: "TikTok", brand: "tiktok" },
    { name: "YouTube", brand: "youtube" },
    { name: "Pinterest", brand: "pinterest" },
    { name: "Threads", brand: "threads" },
    { name: "Meta Ads", brand: "meta" },
  ],
  [
    { name: "Google", brand: "google" },
    { name: "Google Calendar", brand: "googleCalendar" },
    { name: "Google Meet", brand: "googleMeet" },
    { name: "Google Ads", brand: "googleAds" },
    { name: "Gmail", brand: "gmail" },
    { name: "Stripe", brand: "stripe" },
    { name: "PayPal", brand: "paypal" },
    { name: "n8n", brand: "n8n" },
    { name: "Zapier", brand: "zapier" },
  ],
]

// Each row is drawn twice and slides by half its width, so the loop has no seam.
const marqueeCss = `
@keyframes torch-marquee { to { transform: translateX(-50%) } }
.torch-marquee { animation: torch-marquee 60s linear infinite }
.torch-marquee.is-reverse { animation-direction: reverse }
@media (prefers-reduced-motion: reduce) { .torch-marquee { animation: none } }`

export function AppsSection() {
  return (
    <section id="apps" aria-labelledby="apps-title" className="scroll-mt-16 overflow-hidden py-16 lg:py-20">
      <style>{marqueeCss}</style>
      <h2
        id="apps-title"
        className="mx-auto max-w-6xl px-4 text-center text-sm font-medium text-muted-foreground sm:px-6"
      >
        Works with the apps you already use
      </h2>

      <div
        className="mt-8 flex flex-col gap-6"
        style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
      >
        {rows.map((row, r) => (
          <div key={r} className={r ? "torch-marquee is-reverse flex w-max" : "torch-marquee flex w-max"}>
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {row.map((app) => (
                  <li
                    key={app.name}
                    className="flex items-center gap-2.5 px-7 text-lg font-medium whitespace-nowrap text-foreground/55"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 shrink-0 fill-current">
                      <path d={brandPaths[app.brand]} />
                    </svg>
                    {app.name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
