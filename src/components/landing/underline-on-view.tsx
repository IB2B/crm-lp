"use client"

import { useEffect, useRef, useState } from "react"

// Draws an orange underline under its text the first time it scrolls into view
// (same effect as the "Sound familiar?" closing line). Without JavaScript or with reduced motion,
// the underline is simply there.
export function UnderlineOnView({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  // "waiting": hidden until in view. "play": draw it. null: just show it.
  const [state, setState] = useState<"waiting" | "play" | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("play")
          io.disconnect()
        } else {
          setState((s) => s ?? "waiting")
        }
      },
      { threshold: 1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={
        "box-decoration-clone bg-no-repeat pb-1 [background-image:linear-gradient(var(--brand),var(--brand))] [background-position:left_bottom] rtl:[background-position:right_bottom] " +
        (state === "waiting"
          ? "[background-size:0%_3px] "
          : state === "play"
            ? "animate-underline-in "
            : "[background-size:100%_3px] ") +
        (className ?? "")
      }
      style={state === "play" ? { animationDelay: "0.3s" } : undefined}
    >
      {children}
    </span>
  )
}
