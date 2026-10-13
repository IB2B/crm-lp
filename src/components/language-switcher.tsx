"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe } from "lucide-react"

import { LOCALE_COOKIE, isLocale, localeNames, localeShort, locales, type Locale } from "@/i18n/config"
import type { ChromeDict } from "@/i18n/dictionaries/chrome"
import { cn } from "@/lib/utils"

type Props = {
  t: ChromeDict["languageSwitcher"]
  lang: Locale
  /** "menu": compact dropdown (header). "inline": a row of links (mobile menu, footer). */
  variant?: "menu" | "inline"
  className?: string
}

/** Same page in another language: /it/privacy → /fr/privacy. */
function swapLocale(pathname: string, target: Locale): string {
  const parts = pathname.split("/")
  if (parts[1] && isLocale(parts[1])) parts[1] = target
  else parts.splice(1, 0, target)
  return parts.join("/").replace(/\/$/, "") || `/${target}`
}

// Plain links, so switching works without JavaScript and search engines can follow them.
// On click we remember the choice (the proxy reads it for addresses without a language)
// and carry over the #section the visitor was looking at.
function onPick(e: React.MouseEvent<HTMLAnchorElement>, target: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`
  const { hash } = window.location
  if (hash) e.currentTarget.href = `${e.currentTarget.pathname}${hash}`
}

export function LanguageSwitcher({ t, lang, variant = "menu", className }: Props) {
  const pathname = usePathname() ?? `/${lang}`

  if (variant === "inline") {
    return (
      <nav aria-label={t.label} className={className}>
        <ul className="flex flex-wrap items-center gap-1">
          {locales.map((l) => {
            const active = l === lang
            return (
              <li key={l}>
                <a
                  href={swapLocale(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  aria-current={active ? "true" : undefined}
                  onClick={(e) => onPick(e, l)}
                  className={cn(
                    "inline-flex h-10 items-center rounded-lg px-3 text-sm transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                    active
                      ? "font-semibold text-foreground underline decoration-brand decoration-2 underline-offset-[6px]"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {localeNames[l]}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return <LanguageMenu t={t} lang={lang} pathname={pathname} className={className} />
}

// <details> opens and closes without JavaScript; the effect only adds "close on outside click / Escape".
function LanguageMenu({
  t,
  lang,
  pathname,
  className,
}: {
  t: ChromeDict["languageSwitcher"]
  lang: Locale
  pathname: string
  className?: string
}) {
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const close = (e: Event) => {
      const el = ref.current
      if (!el?.open) return
      if (e instanceof KeyboardEvent) {
        if (e.key !== "Escape") return
        el.open = false
        el.querySelector("summary")?.focus()
        return
      }
      if (!el.contains(e.target as Node)) el.open = false
    }
    document.addEventListener("pointerdown", close)
    document.addEventListener("keydown", close)
    return () => {
      document.removeEventListener("pointerdown", close)
      document.removeEventListener("keydown", close)
    }
  }, [])

  return (
    <details ref={ref} className={cn("group relative", className)}>
      <summary
        aria-label={`${t.change}: ${localeNames[lang]}`}
        className="flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors select-none hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none group-open:text-foreground [&::-webkit-details-marker]:hidden"
      >
        <Globe className="size-[15px]" strokeWidth={1.75} aria-hidden="true" />
        <span aria-hidden="true" className="tracking-wide">
          {localeShort[lang]}
        </span>
        <ChevronDown
          className="size-3 opacity-60 transition-transform group-open:rotate-180 motion-reduce:transition-none"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </summary>

      <ul
        aria-label={t.label}
        className="absolute end-0 top-full z-50 mt-1.5 min-w-36 rounded-lg border border-border/70 bg-popover py-1 text-popover-foreground shadow-[0_10px_30px_-12px_rgb(0_0_0/0.25)]"
      >
        {locales.map((l) => {
          const active = l === lang
          return (
            <li key={l}>
              <a
                href={swapLocale(pathname, l)}
                hrefLang={l}
                lang={l}
                aria-current={active ? "true" : undefined}
                onClick={(e) => onPick(e, l)}
                className={cn(
                  "relative flex h-9 items-center px-4 text-sm transition-colors focus-visible:outline-none",
                  active
                    ? "font-medium text-foreground before:absolute before:inset-y-2.5 before:start-1.5 before:w-0.5 before:rounded-full before:bg-brand"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground focus-visible:bg-muted/60 focus-visible:text-foreground",
                    l === "ar" && "text-[15px]"
                )}
              >
                {localeNames[l]}
              </a>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
