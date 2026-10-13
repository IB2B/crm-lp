import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { CookieSettingsButton } from "@/components/cookie-banner"
import { NewsletterForm } from "@/components/landing/newsletter-form"
import { bookingCalendarSrc, phoneLink, whatsappLink } from "@/content/embeds"
import { company, legalLinks, socialLinks } from "@/content/site"
import { LanguageSwitcher } from "@/components/language-switcher"
import { fmt, localeNames, localizeHref, type Locale } from "@/i18n/config"
import type { ChromeDict } from "@/i18n/dictionaries/chrome"
import { newsletterEnabled } from "@/lib/newsletter"

// Hrefs live here; labels come from src/i18n/dictionaries/chrome.ts (footer.columns).
function footerColumns(c: ChromeDict["footer"]["columns"]) {
  return [
    {
      title: c.product.title,
      links: [
        { href: "#features", label: c.product.features },
        { href: "#how-it-works", label: c.product.howItWorks },
        { href: "#industries", label: c.product.industries },
        { href: "#pricing", label: c.product.pricing },
      ],
    },
    {
      title: c.company.title,
      links: [
        { href: "#agencies", label: c.company.agencies },
        { href: bookingCalendarSrc, label: c.company.bookCall },
        { href: "#faq", label: c.company.faq },
      ],
    },
    {
      title: c.support.title,
      links: [
        { href: whatsappLink, label: c.support.whatsapp },
        { href: phoneLink, label: c.support.callUs },
        { href: `mailto:${company.email}`, label: c.support.emailUs },
        { href: bookingCalendarSrc, label: c.support.videoCall },
      ],
    },
  ]
}

// Which label in chrome.legalLinks belongs to which page in src/content/site.ts.
const legalLabelKey: Record<string, keyof ChromeDict["legalLinks"]> = {
  "/terms": "terms",
  "/privacy": "privacy",
  "/cookie-policy": "cookiePolicy",
  "/dpa": "dpa",
}

// Support languages, each written in its own language: "Italiano, English, Français and العربية".
const supportLocales: Locale[] = ["it", "en", "fr", "ar"]

const linkClass =
  "rounded transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"

// Text comes from src/i18n/dictionaries/chrome.ts.
export function SiteFooter({ t, lang }: { t: ChromeDict; lang: Locale }) {
  const year = new Date().getFullYear()
  const f = t.footer
  const columns = footerColumns(f.columns)
  const languageParts = new Intl.ListFormat(lang, { type: "conjunction" }).formatToParts(
    supportLocales.map((l) => localeNames[l])
  )

  return (
    <footer className="bg-paper text-paper-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        {/* Top: brand + newsletter */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/brand/torch-mark.png" alt="" width={28} height={28} className="size-7" />
              <span className="text-2xl font-semibold tracking-tight">TORCH</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {f.tagline}{" "}
              {languageParts.map((part, i) =>
                part.type === "element" ? (
                  <span key={i} lang={supportLocales.find((l) => localeNames[l] === part.value)}>
                    {part.value}
                  </span>
                ) : (
                  part.value
                )
              )}
              .
            </p>
          </div>

          {/* Only when GHL_PRIVATE_TOKEN and GHL_LOCATION_ID are set (see .env.example) */}
          {newsletterEnabled() ? (
            <div>
              <p className="text-xl font-light tracking-tight">{t.newsletter.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.newsletter.intro}
              </p>
              <div className="mt-5">
                <NewsletterForm t={t.newsletter} lang={lang} />
              </div>
            </div>
          ) : null}
        </div>

        {/* Middle: social + link columns */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xl font-light tracking-tight">{f.socialTitle}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
              {/* Only accounts that exist; add the others in src/content/site.ts to show them */}
              {socialLinks.flatMap((s) => (s.href ? [{ ...s, href: s.href }] : [])).map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-b border-foreground/15 py-2.5 text-sm transition-colors hover:border-foreground/50"
                  >
                    {s.label}
                    <ArrowUpRight className="size-4 text-muted-foreground rtl:-scale-x-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3">
            {columns.map((col, i) => (
              <div key={col.title} className={i > 0 ? "border-s ps-5 sm:ps-8" : ""}>
                <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3 text-sm hyphens-auto [overflow-wrap:anywhere]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={linkClass}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="mt-12">
          <LanguageSwitcher t={t.languageSwitcher} lang={lang} variant="inline" className="-ms-3" />
        </div>

        {/* Bottom: rights + company + legal */}
        <div className="mt-6 flex flex-col gap-4 border-t pt-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{fmt(f.rights, { year, company: company.legalName ?? company.name })}</span>
            {company.vat ? (
              <span>
                {f.vat} <span dir="ltr">{company.vat}</span>
              </span>
            ) : null}
            {company.tradeRegister ? (
              <span>
                {f.tradeRegister} <span dir="ltr">{company.tradeRegister}</span>
              </span>
            ) : null}
            {company.address ? <span dir="ltr">{company.address}</span> : null}
            {company.email ? (
              <a href={`mailto:${company.email}`} className={linkClass}>
                {company.email}
              </a>
            ) : null}
          </p>
          <ul aria-label={f.legalLabel} className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => {
              const key = l.href ? legalLabelKey[l.href] : undefined
              return (
                <li key={l.href ?? l.label}>
                  <a href={l.href ? localizeHref(lang, l.href) : "#"} className={linkClass}>
                    {key ? t.legalLinks[key] : l.label}
                  </a>
                </li>
              )
            })}
            <li>
              <CookieSettingsButton label={t.cookieBanner.settings} className={`cursor-pointer ${linkClass}`} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
