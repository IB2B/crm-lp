import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { company, legalLinks } from "@/content/site"

export type LegalSection = { title: string; body: React.ReactNode }

/** Date shown under every legal page title. Update it whenever a legal text changes. */
export const legalUpdated = "12 October 2026"

// Shared layout for Terms, Privacy Policy and Cookie Policy: logo, title, numbered sections,
// a contact box and links to the other legal pages.
export function LegalPage({
  title,
  intro,
  sections,
  draft = false,
}: {
  title: string
  intro: React.ReactNode
  sections: LegalSection[]
  /** Shows a "Draft – to be reviewed by a lawyer" label under the title. */
  draft?: boolean
}) {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:py-20">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2.5 rounded-lg">
          <Image src="/brand/torch-mark.png" alt="" width={28} height={28} className="size-7" />
          <span className="text-lg font-semibold tracking-tight">TORCH</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">by {company.name}</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>

      <h1 className="mt-14 text-4xl font-light tracking-tight sm:text-5xl">{title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>Last updated: {legalUpdated}</span>
        {draft ? (
          <span className="rounded-full border border-dashed border-brand px-2.5 py-0.5 text-xs font-medium text-brand">
            Draft – to be reviewed by a lawyer
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
        <p className="font-medium">Questions?</p>
        <p className="mt-1 text-foreground/80">
          Write to us at{" "}
          <a href={`mailto:${company.email}`} className="text-foreground underline underline-offset-4">
            {company.email}
          </a>
          . {company.legalName}, {company.address}. VAT {company.vat}
          {company.tradeRegister ? `, Trade Register ${company.tradeRegister}` : ""}.
        </p>
      </div>

      <nav aria-label="Legal" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {legalLinks
          .flatMap((l) => (l.href ? [{ ...l, href: l.href }] : []))
          .map((l) => (
            <Link key={l.label} href={l.href} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
      </nav>
    </main>
  )
}
