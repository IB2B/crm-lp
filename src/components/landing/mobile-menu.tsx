"use client"

import { CalendarDays, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingLinkProps } from "@/content/embeds"
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

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="size-11" />}
      >
        <Menu className="size-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>

      <SheetContent side="right" showCloseButton={false} className="w-full max-w-sm">
        <SheetHeader className="flex-row items-center justify-between border-b px-4 py-3">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <BrandLogo />
          <SheetClose
            render={<Button variant="ghost" size="icon" className="size-11" />}
          >
            <X className="size-5" />
            <span className="sr-only">Close menu</span>
          </SheetClose>
        </SheetHeader>

        <nav aria-label="Mobile" className="px-2">
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
                  {link.label}
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <SheetFooter className="mt-auto gap-3 border-t p-4">
          <SheetClose
            nativeButton={false}
            render={<Button size="xl" variant="outline" nativeButton={false} render={<a {...bookingLinkProps} />} />}
          >
            <CalendarDays data-icon="inline-start" />
            Book a free setup call
          </SheetClose>
          <SheetClose
            nativeButton={false}
            render={<Button size="xl" nativeButton={false} render={<a href="#pricing" />} />}
          >
            Start my free trial
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
