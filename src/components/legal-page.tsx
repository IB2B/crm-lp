import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { LanguageSwitcher } from "@/components/language-switcher"
import { company } from "@/content/site"
import { localizeHref, type Locale } from "@/i18n/config"
import { chrome } from "@/i18n/dictionaries/chrome"
import { legalUi } from "@/i18n/legal/ui"

export type LegalSection = { title: string; body: React.ReactNode }

/** Everything a legal page needs in one language (see src/i18n/legal). */
export type LegalContent = {
  metaTitle: string
  metaDescription: string
  title: string
  intro: React.ReactNode
  sections: LegalSection[]
}

// Shared layout for Terms, Privacy Policy, Cookie Policy and DPA: logo, title, numbered sections,
// a contact box and links to the other legal pages, all in the page's language.
export function LegalPage({
  lang,
  title,
  intro,
  sections,
  draft = false,
}: {
  lang: Locale
  title: string
  intro: React.ReactNode
  sections: LegalSection[]
  /** Shows a "Draft – to be reviewed by a lawyer" label under the title. */
  draft?: boolean
}) {
  const ui = legalUi[lang]
  const home = localizeHref(lang, "/")
  const nav = [
    { label: ui.nav.terms, href: "/terms" },
    { label: ui.nav.privacy, href: "/privacy" },
    { label: ui.nav.cookies, href: "/cookie-policy" },
    { label: ui.nav.dpa, href: "/dpa" },
  ]

  return (
    <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:py-20">
      <div className="flex items-center justify-between gap-4">
        <Link href={home} className="inline-flex items-center gap-2.5 rounded-lg">
          <Image src="/brand/torch-mark.png" alt="" width={28} height={28} className="size-7" />
          <span className="text-lg font-semibold tracking-tight">TORCH</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            {ui.by} {company.name}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher t={chrome[lang].languageSwitcher} lang={lang} />
          <Link
            href={home}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            {ui.backHome}
          </Link>
        </div>
      </div>

      <h1 className="mt-14 text-4xl font-light tracking-tight sm:text-5xl">{title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>
          {ui.lastUpdated} {ui.updatedDate}
        </span>
        {draft ? (
          <span className="rounded-full border border-dashed border-brand px-2.5 py-0.5 text-xs font-medium text-brand">
            {ui.draft}
          </span>
        ) : null}
      </div>
      <div className="mt-8 text-base leading-relaxed text-pretty text-foreground/80">{intro}</div>

      <div className="mt-12 space-y-10 border-t pt-10">
        {sections.map((s, i) => (
          <section key={s.title} aria-labelledby={`section-${i + 1}`}>
            <h2 id={`section-${i + 1}`} className="text-lg font-semibold tracking-tight">
              {i + 1}. {s.title}
            </h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-pretty text-foreground/80 [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_li]:ps-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-5">
              {s.body}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-muted/60 p-6 text-[15px] leading-relaxed">
        <p className="font-medium">{ui.questions}</p>
        <p className="mt-1 text-foreground/80">
          {ui.writeTo}{" "}
          <a href={`mailto:${company.email}`} className="text-foreground underline underline-offset-4" dir="ltr">
            {company.email}
          </a>
          . {company.legalName}, {company.address}. {ui.vat} {company.vat}
          {company.tradeRegister ? `, ${ui.tradeRegister} ${company.tradeRegister}` : ""}.
        </p>
      </div>

      <nav aria-label={ui.navLabel} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {nav.map((l) => (
          <Link
            key={l.href}
            href={localizeHref(lang, l.href)}
            className="text-muted-foreground hover:text-foreground"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </main>
  )
}
