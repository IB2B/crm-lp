import { brandPaths, type Brand } from "@/components/landing/brand-icons"
import { UnderlineOnView } from "@/components/landing/underline-on-view"
import type { Locale } from "@/i18n/config"
import type { AppsDict } from "@/i18n/dictionaries/apps"

// Text comes from src/i18n/dictionaries/apps.ts. App names are brand names and are not translated.

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

export function AppsSection({ t }: { t: AppsDict; lang: Locale }) {
  return (
    <section id="apps" aria-labelledby="apps-title" className="scroll-mt-16 overflow-hidden py-20 lg:py-28">
      <style>{marqueeCss}</style>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 id="apps-title" className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
          {t.intro} <UnderlineOnView className="font-semibold text-foreground">{t.introStrong}</UnderlineOnView>
        </p>
      </div>

      {/* dir="ltr" keeps the translateX(-50%) loop seamless on right-to-left pages */}
      <div
        dir="ltr"
        className="mt-12 flex flex-col gap-7 lg:mt-14"
        style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
      >
        {rows.map((row, r) => (
          <div key={r} className={r ? "torch-marquee is-reverse flex w-max" : "torch-marquee flex w-max"}>
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {row.map((app) => (
                  <li
                    key={app.name}
                    className="flex items-center gap-3 px-8 text-xl font-medium whitespace-nowrap text-foreground/80"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 shrink-0 fill-current">
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
