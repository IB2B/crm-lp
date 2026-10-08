import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { company, legalLinks } from "@/content/site"

// Placeholder for legal pages until the real texts are provided by your lawyer/DPO.
export function LegalPlaceholder({ title }: { title: string }) {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:py-24">
      <Link href="/" className="inline-flex items-center gap-2.5 rounded-lg">
        <Image src="/brand/torch-mark.png" alt="" width={28} height={28} className="size-7" />
        <span className="text-lg font-semibold tracking-tight">TORCH</span>
        <span className="text-sm text-muted-foreground">by {company.name}</span>
      </Link>

      <h1 className="mt-12 text-4xl font-semibold tracking-tight">{title}</h1>

      <div className="mt-8 rounded-2xl border-2 border-dashed p-6 text-muted-foreground">
        <p className="font-medium text-foreground">Placeholder</p>
        <p className="mt-2">
          The full {title.toLowerCase()} of {company.legalName ?? company.name} will be published here.
          For any question, contact us{company.email ? ` at ${company.email}` : ""}.
        </p>
      </div>

      <nav aria-label="Legal" className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href="/" className="inline-flex items-center gap-1.5 font-medium">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
        {legalLinks
          .filter((l) => l.href)
          .map((l) => (
            <Link key={l.label} href={l.href!} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
      </nav>
    </main>
  )
}
