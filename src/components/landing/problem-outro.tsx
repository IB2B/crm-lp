"use client"

import { useEffect, useRef, useState } from "react"

// Closing line of "Sound familiar?". When it scrolls into view the words rise in one by one
// (like the hero headline), then an orange line draws under the lead.
// Without JavaScript, or with reduced motion, it simply shows.
export function ProblemOutro({ lead, rest }: { lead: string; rest: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  // "waiting": hidden until it scrolls into view. "play": animate in. null: just show.
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
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const leadWords = lead.split(" ")
  const restWords = rest.split(" ")
  const step = 0.07
  const underlineAt = leadWords.length * step + 0.35
  const restFrom = underlineAt + 0.3

  function word(text: string, i: number, delay: number, space = true, className?: string) {
    return (
      <span key={i} className="inline-block whitespace-pre">
        <span
          className={
            state === "waiting"
              ? "inline-block opacity-0"
              : state === "play"
                ? `inline-block animate-word-in ${className ?? ""}`
                : `inline-block ${className ?? ""}`
          }
          style={state === "play" ? { animationDelay: `${delay}s` } : undefined}
        >
          {text}
        </span>
        {space ? " " : null}
      </span>
    )
  }

  return (
    <p ref={ref} className="text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl">
      {/* The underline is a background line, so it follows the text if it wraps onto two lines. */}
      <span
        className={
          "box-decoration-clone bg-no-repeat pb-1 [background-image:linear-gradient(var(--brand),var(--brand))] [background-position:left_bottom] rtl:[background-position:right_bottom] " +
          (state === "waiting"
            ? "[background-size:0%_3px]"
            : state === "play"
              ? "animate-underline-in"
              : "[background-size:100%_3px]")
        }
        style={state === "play" ? { animationDelay: `${underlineAt}s` } : undefined}
      >
        {leadWords.map((w, i) => word(w, i, i * step, i < leadWords.length - 1))}
      </span>{" "}
      <span className="text-muted-foreground">
        {restWords.map((w, i) => word(w, i, restFrom + i * step * 0.6))}
      </span>
    </p>
  )
}
