"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

// Sticky header behaviour:
// - dark while over the (dark) hero, light and translucent after it
// - hides when scrolling down, comes back as soon as the user scrolls up
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [overHero, setOverHero] = useState(true)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]")
    let observer: IntersectionObserver | undefined
    if (hero) {
      observer = new IntersectionObserver(
        ([entry]) => setOverHero(entry.isIntersecting),
        // Treat the hero as "under the header" until its bottom passes the header line.
        { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
      )
      observer.observe(hero)
    }

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 160)
        lastY.current = y
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      observer?.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header
      // Keep the header visible while anything inside it has keyboard focus.
      onFocusCapture={() => setHidden(false)}
      className={cn(
        "sticky top-0 z-40 text-foreground transition-[transform,background-color,border-color] duration-300 ease-out motion-reduce:transition-none",
        overHero
          ? "border-b border-transparent bg-paper text-paper-foreground"
          : "border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70",
        hidden && "-translate-y-full"
      )}
    >
      {children}
    </header>
  )
}
