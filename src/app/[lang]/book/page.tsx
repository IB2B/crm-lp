import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { BookingFlow } from "@/components/booking/booking-flow"
import { LanguageSwitcher } from "@/components/language-switcher"
import { company } from "@/content/site"
import { isLocale, localizeHref } from "@/i18n/config"
import { booking } from "@/i18n/dictionaries/booking"
import { chrome } from "@/i18n/dictionaries/chrome"
import { PLAN_FROM_QUERY } from "@/lib/booking"

// Our own booking page: replaces the GoHighLevel booking widget. Text: src/i18n/dictionaries/booking.ts.
export async function generateMetadata({ params }: PageProps<"/[lang]/book">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = booking[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: localizeHref(lang, "/book") },
  }
}

export default async function Page({ params, searchParams }: PageProps<"/[lang]/book">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = booking[lang]

  // ?plan=starter|growth|agency preselects the plan in the form.
  const planParam = (await searchParams).plan
  const initialPlan = typeof planParam === "string" ? (PLAN_FROM_QUERY[planParam.toLowerCase()] ?? "") : ""
  const home = localizeHref(lang, "/")

  return (
    <main id="main" className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6 lg:py-16">
      <div className="flex items-center justify-between gap-4">
        <Link href={home} className="inline-flex items-center gap-2.5 rounded-lg">
          <Image src="/brand/torch-mark.png" alt="" width={28} height={28} className="size-7" />
          <span className="text-lg font-semibold tracking-tight">TORCH</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            {t.by} {company.name}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher t={chrome[lang].languageSwitcher} lang={lang} />
          <Link
            href={home}
            className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            {t.backHome}
          </Link>
        </div>
      </div>

      <div className="mt-12 max-w-2xl lg:mt-16">
        <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
        <h1 className="mt-3 text-4xl font-light tracking-tight text-balance sm:text-5xl">{t.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{t.intro}</p>
      </div>

      <div className="mt-10 rounded-3xl border bg-background p-5 shadow-xs sm:p-8">
        <BookingFlow t={t} lang={lang} initialPlan={initialPlan} />
      </div>
    </main>
  )
}
