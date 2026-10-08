import type { Metadata } from "next"

import { LegalPlaceholder } from "@/components/legal-placeholder"

// TODO(ib2b): replace with the real legal text.
export const metadata: Metadata = {
  title: "Terms and Conditions | TORCH by Intelligent B2B",
  robots: { index: false },
}

export default function Page() {
  return <LegalPlaceholder title="Terms and Conditions" />
}
