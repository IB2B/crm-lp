"use client"

import { CalendarDays, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingHref } from "@/content/embeds"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BrandLogo } from "@/components/landing/brand-logo"
import { navLinks } from "@/components/landing/nav-links"
import { LanguageSwitcher } from "@/components/language-switcher"
import { dirOf, type Locale } from "@/i18n/config"
import type { ChromeDict } from "@/i18n/dictionaries/chrome"

export function MobileMenu({ t, lang }: { t: ChromeDict; lang: Locale }) {
  const m = t.mobileMenu
  // The sheet slides in from the inline end: right in LTR, left in Arabic.
  const side = dirOf(lang) === "rtl" ? "left" : "right"

  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="size-11" />}
      >
        <Menu className="size-5" />
        <span className="sr-only">{m.open}</span>
      </SheetTrigger>

      <SheetContent side={side} showCloseButton={false} className="w-full max-w-sm">
        <SheetHeader className="flex-row items-center justify-between border-b px-4 py-3">
          <SheetTitle className="sr-only">{m.title}</SheetTitle>
          <BrandLogo lang={lang} homeLabel={t.header.logoHome} />
          <SheetClose
            render={<Button variant="ghost" size="icon" className="size-11" />}
          >
            <X className="size-5" />
            <span className="sr-only">{m.close}</span>
          </SheetClose>
        </SheetHeader>

        <nav aria-label={m.navLabel} className="px-2">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="flex h-12 items-center rounded-lg px-3 text-base font-medium hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
                    />
                  }
                >
                  {t.nav[link.key]}
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 border-t px-2 pt-4">
          <p className="px-3 pb-1 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
            {t.languageSwitcher.label}
          </p>
          <LanguageSwitcher t={t.languageSwitcher} lang={lang} variant="inline" />
        </div>

        <SheetFooter className="mt-auto gap-3 border-t p-4">
          <SheetClose
            nativeButton={false}
            render={<Button size="xl" variant="outline" nativeButton={false} render={<a href={bookingHref(lang)} />} />}
          >
            <CalendarDays data-icon="inline-start" />
            {m.bookSetupCall}
          </SheetClose>
          <SheetClose
            nativeButton={false}
            render={<Button size="xl" nativeButton={false} render={<a href="#pricing" />} />}
          >
            {m.startTrial}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
