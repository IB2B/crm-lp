"use client"

import { createElement, useEffect } from "react"
import { Play, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const WISTIA_MEDIA_ID = "38chcywcfy"

// Adds a script tag once; later opens reuse it.
function loadScript(src: string, module = false) {
  if (document.querySelector(`script[src="${src}"]`)) return
  const script = document.createElement("script")
  script.src = src
  script.async = true
  if (module) script.type = "module"
  document.body.appendChild(script)
}

// Ad blockers block the player's playback reports to pipedream.wistia.com. Wistia then logs
// "Failed to fetch" as an error, which the Next.js dev overlay shows as an issue. A blocked
// report gets an empty reply instead; every other request behaves exactly as before.
function quietBlockedWistiaReports() {
  const w = window as Window & { __wistiaReportsQuiet?: boolean }
  if (w.__wistiaReportsQuiet) return
  w.__wistiaReportsQuiet = true
  const original = window.fetch
  window.fetch = async (input, init) => {
    try {
      return await original.call(window, input, init)
    } catch (error) {
      const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url
      if (new URL(url, window.location.href).hostname === "pipedream.wistia.com") {
        return new Response(null, { status: 204 })
      }
      throw error
    }
  }
}

// Mounted only while the modal is open, so Wistia loads on first open and not before.
function WistiaPlayer() {
  useEffect(() => {
    quietBlockedWistiaReports()
    loadScript("https://fast.wistia.com/player.js")
    loadScript(`https://fast.wistia.com/embed/${WISTIA_MEDIA_ID}.js`, true)
  }, [])

  return (
    <div className="aspect-video w-full bg-black">
      {createElement("wistia-player", {
        "media-id": WISTIA_MEDIA_ID,
        aspect: "1.7777777777777777",
        autoplay: "",
        style: { display: "block", width: "100%", height: "100%" },
      })}
    </div>
  )
}

/** "Watch the demo" button for the hero. Opens the Wistia video in a modal. */
export function DemoVideoButton() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button size="xl" variant="ghost" className="text-foreground hover:bg-foreground/10" />}
      >
        <Play data-icon="inline-start" className="fill-current" />
        Watch the demo
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="w-[min(64rem,calc(100vw-2rem))] max-w-none gap-0 overflow-hidden rounded-2xl p-0 ring-0 sm:max-w-none"
      >
        <DialogTitle className="sr-only">TORCH demo video</DialogTitle>
        <DialogClose
          render={
            <Button
              variant="secondary"
              size="icon"
              className="absolute end-3 top-3 z-10 size-10 rounded-full shadow-md"
            />
          }
        >
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <WistiaPlayer />
      </DialogContent>
    </Dialog>
  )
}
