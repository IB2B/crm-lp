import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LegalPage } from "@/components/legal-page"
import { isLocale } from "@/i18n/config"
import { dpa } from "@/i18n/legal/dpa"

// The text for every language lives in src/i18n/legal/dpa.tsx.
export async function generateMetadata({ params }: PageProps<"/[lang]/dpa">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const content = dpa[lang]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    robots: { index: false },
  }
}

export default async function Page({ params }: PageProps<"/[lang]/dpa">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const content = dpa[lang]

  return (
    <LegalPage
      lang={lang}
      title={content.title}
      draft
      intro={content.intro}
      sections={content.sections}
    />
  )
}
