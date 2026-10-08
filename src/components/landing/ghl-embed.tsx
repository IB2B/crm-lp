import Script from "next/script"
import { CalendarDays } from "lucide-react"

import { ghlEmbedScript } from "@/content/embeds"

// Shows a GoHighLevel calendar/form embed, or a clear placeholder until the URL is set.
export function GhlEmbed({
  src,
  title,
  minHeight = 640,
}: {
  src: string | null
  title: string
  minHeight?: number
}) {
  if (!src) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-8 py-12 text-center">
        <CalendarDays className="size-8 text-muted-foreground" aria-hidden="true" />
        <p className="font-medium">{title}</p>
        <p className="max-w-xs text-sm text-muted-foreground">
          Placeholder: paste the GoHighLevel embed URL in{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">src/content/embeds.ts</code>
        </p>
      </div>
    )
  }

  return (
    <>
      <iframe
        src={src}
        title={title}
        className="w-full rounded-2xl border-0"
        style={{ minHeight }}
        scrolling="no"
      />
      <Script src={ghlEmbedScript} strategy="lazyOnload" />
    </>
  )
}
