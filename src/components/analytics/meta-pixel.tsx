"use client"

import { useEffect } from "react"
import Script from "next/script"

import { useConsent } from "@/lib/consent"

const PIXEL_ID = "1655285189050807"

type Fbq = (command: "track", event: string) => void

// Which Meta event a click counts as, or null. Plan buttons first: without a checkout
// link they also open the booking page, but they are still a trial start.
function eventFor(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null
  const link = target.closest("a")
  if (!link) return null
  if (link.hasAttribute("data-plan")) return "StartTrial"
  const href = link.getAttribute("href") ?? ""
  if (href.startsWith("https://wa.me/") || href.startsWith("tel:") || href.startsWith("mailto:")) return "Contact"
  return null
}

// Meta Pixel, loaded only after the visitor accepts cookies (GDPR).
// Tracks PageView on load, then StartTrial / Contact clicks anywhere on the page.
// Lead is sent by the booking page when a call is actually booked (src/components/booking/booking-flow.tsx).
export function MetaPixel() {
  const consent = useConsent()

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const fbq = (window as unknown as { fbq?: Fbq }).fbq
      const event = fbq ? eventFor(e.target) : null
      if (fbq && event) fbq("track", event)
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  if (consent !== "accepted") return null

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  )
}
