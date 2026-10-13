import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LegalPage } from "@/components/legal-page"
import { isLocale } from "@/i18n/config"
import { privacy } from "@/i18n/legal/privacy"

// The text for every language lives in src/i18n/legal/privacy.tsx.
export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const content = privacy[lang]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  }
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const content = privacy[lang]

  return (
    <LegalPage
      lang={lang}
      title={content.title}
      intro={content.intro}
      sections={content.sections}
    />
  )
}
