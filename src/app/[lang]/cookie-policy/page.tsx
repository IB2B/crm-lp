import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LegalPage } from "@/components/legal-page"
import { isLocale } from "@/i18n/config"
import { cookiePolicy } from "@/i18n/legal/cookiePolicy"

// The text for every language lives in src/i18n/legal/cookiePolicy.tsx.
export async function generateMetadata({ params }: PageProps<"/[lang]/cookie-policy">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const content = cookiePolicy[lang]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  }
}

export default async function Page({ params }: PageProps<"/[lang]/cookie-policy">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const content = cookiePolicy[lang]

  return (
    <LegalPage
      lang={lang}
      title={content.title}
      intro={content.intro}
      sections={content.sections}
    />
  )
}
