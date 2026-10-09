import { Button } from "@/components/ui/button"
import { bookingLinkProps } from "@/content/embeds"
import { BrandLogo } from "@/components/landing/brand-logo"
import { HeaderShell } from "@/components/landing/header-shell"
import { MobileMenu } from "@/components/landing/mobile-menu"
import { navLinks } from "@/components/landing/nav-links"

export function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-3 focus:ring-ring/50"
      >
        Skip to content
      </a>

      <HeaderShell>
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <BrandLogo />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              nativeButton={false}
              render={<a {...bookingLinkProps} />}
              className="hidden h-10 px-3 lg:inline-flex"
            >
              Book a call
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#pricing" />}
              className="hidden h-10 px-4 md:inline-flex"
            >
              Start my free trial
            </Button>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </HeaderShell>
    </>
  )
}
