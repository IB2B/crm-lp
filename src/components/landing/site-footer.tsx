import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { NewsletterForm } from "@/components/landing/newsletter-form"
import { bookingCalendarSrc, phoneLink, whatsappLink } from "@/content/embeds"
import { company, legalLinks, newsletterWebhook, socialLinks } from "@/content/site"

const columns = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#how-it-works", label: "How it works" },
      { href: "#industries", label: "Industries" },
      { href: "#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#agencies", label: "For agencies" },
      { href: bookingCalendarSrc, label: "Book a call" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: whatsappLink, label: "WhatsApp" },
      { href: phoneLink, label: "Call us" },
      { href: `mailto:${company.email}`, label: "Email us" },
      { href: bookingCalendarSrc, label: "Video call" },
    ],
  },
]

// Red signal for anything still waiting for a link (set it in src/content/site.ts).
export function MissingLinkDot() {
  return (
    <span className="inline-flex items-center" title="Link missing">
      <span aria-hidden="true" className="size-2 rounded-full bg-red-500" />
      <span className="sr-only">(link missing)</span>
    </span>
  )
}

const linkClass =
  "rounded transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-paper text-paper-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        {/* Top: brand + newsletter */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/brand/torch-mark.png" alt="" width={28} height={28} className="size-7" />
              <span className="text-2xl font-semibold tracking-tight">TORCH</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The CRM we set up for you. Calls, WhatsApp, bookings and reviews in
              one app, with support in Italiano, English, Français and{" "}
              <span lang="ar">العربية</span>.
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 text-xl font-light tracking-tight">
              Subscribe to our newsletter
              {newsletterWebhook ? null : <MissingLinkDot />}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Simple tips to win more customers, once a month.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Middle: social + link columns */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xl font-light tracking-tight">Social media</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href ?? "#"}
                    target={s.href ? "_blank" : undefined}
                    rel={s.href ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between border-b border-foreground/15 py-2.5 text-sm transition-colors hover:border-foreground/50"
                  >
                    <span className="flex items-center gap-2">
                      {s.label}
                      {s.href ? null : <MissingLinkDot />}
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3">
            {columns.map((col, i) => (
              <div key={col.title} className={i > 0 ? "border-s ps-5 sm:ps-8" : ""}>
                <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={linkClass}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: rights + company + legal */}
        <div className="mt-16 flex flex-col gap-4 border-t pt-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              © {year} TORCH by {company.legalName ?? company.name}. All rights reserved.
            </span>
            {company.vat ? <span>VAT {company.vat}</span> : null}
            {company.address ? <span>{company.address}</span> : null}
            {company.email ? (
              <a href={`mailto:${company.email}`} className={linkClass}>
                {company.email}
              </a>
            ) : null}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href ?? "#"} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {l.label}
                  {l.href ? null : " [link to add]"}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
