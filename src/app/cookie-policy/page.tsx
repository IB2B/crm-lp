import type { Metadata } from "next"

import { CookieSettingsButton } from "@/components/cookie-banner"
import { LegalPage, type LegalSection } from "@/components/legal-page"

// TODO(ib2b): have a lawyer or DPO review this text before launch. Keep the table in line with
// what the site really loads (src/components/analytics, src/components/landing/demo-video.tsx).
export const metadata: Metadata = {
  title: "Cookie Policy | TORCH by Intelligent B2B",
  description: "Which cookies the TORCH website uses and how to change your choice.",
}

const cookies = [
  {
    name: "torch-cookie-consent",
    provider: "TORCH",
    purpose: "Remembers whether you allowed or refused cookies, so we don't ask again.",
    duration: "Until you clear it",
    type: "Necessary",
  },
  {
    name: "_fbp",
    provider: "Meta",
    purpose: "Shows which of our Facebook and Instagram ads brought you here.",
    duration: "3 months",
    type: "Marketing",
  },
  {
    name: "fr",
    provider: "Meta",
    purpose: "Used by Meta to measure and improve ads.",
    duration: "3 months",
    type: "Marketing",
  },
]

const sections: LegalSection[] = [
  {
    title: "What cookies are",
    body: (
      <p>
        Cookies are small files a website stores in your browser. Some are needed for the site to work. Others
        help a business understand its visitors, and these need your permission.
      </p>
    ),
  },
  {
    title: "The cookies we use",
    body: (
      <>
        <p>
          Marketing cookies are only set after you click &quot;Allow&quot;. If you click &quot;No thanks&quot;, none
          are set.
        </p>
        <div className="-mx-1 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b text-foreground">
                <th className="py-2 pe-4 font-medium">Name</th>
                <th className="py-2 pe-4 font-medium">Provider</th>
                <th className="py-2 pe-4 font-medium">Purpose</th>
                <th className="py-2 pe-4 font-medium">Kept for</th>
                <th className="py-2 font-medium">Type</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.name} className="border-b align-top">
                  <td className="py-2.5 pe-4 font-mono text-xs text-foreground">{c.name}</td>
                  <td className="py-2.5 pe-4">{c.provider}</td>
                  <td className="py-2.5 pe-4">{c.purpose}</td>
                  <td className="py-2.5 pe-4 whitespace-nowrap">{c.duration}</td>
                  <td className="py-2.5">{c.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <code className="font-mono text-xs">torch-cookie-consent</code> is stored in your browser&apos;s local
          storage rather than as a cookie, and never leaves your device.
        </p>
      </>
    ),
  },
  {
    title: "Demo video and booking calendar",
    body: (
      <p>
        Our demo video is played by Wistia, and only loads when you click &quot;Watch the demo&quot;. Our booking
        calendar is run by GoHighLevel (LeadConnector) and opens on their site. These providers may use their own
        cookies, as described in their own policies.
      </p>
    ),
  },
  {
    title: "Changing your choice",
    body: (
      <>
        <p>
          You can change your mind at any time. Use the button below, or the &quot;Cookie settings&quot; link at the
          bottom of every page, to bring back the cookie choice.
        </p>
        <CookieSettingsButton className="inline-flex h-10 cursor-pointer items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90" />
        <p>You can also delete or block cookies in your browser settings.</p>
      </>
    ),
  },
  {
    title: "More information",
    body: (
      <p>
        To learn how we handle personal data, read our <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
]

export default function Page() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro={
        <p>
          This page explains which cookies the TORCH website uses, why, and how you can change your choice.
        </p>
      }
      sections={sections}
    />
  )
}
