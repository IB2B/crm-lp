import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LegalPage } from "@/components/legal-page"
import { isLocale } from "@/i18n/config"
import { terms } from "@/i18n/legal/terms"

// The text for every language lives in src/i18n/legal/terms.tsx.
export async function generateMetadata({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const content = terms[lang]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  }
}

export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const content = terms[lang]

  return (
    <LegalPage
      lang={lang}
      title={content.title}
      intro={content.intro}
      sections={content.sections}
    />
  )
}
