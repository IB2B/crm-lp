"use client"

import Image from "next/image"
import { Maximize2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Shot = { src: string; width: number; height: number; alt: string }

// A real app screenshot shown crisp (served as-is, no recompression),
// with click-to-enlarge so every detail is readable.
export function ScreenshotShowcase({ src, width, height, alt }: Shot) {
  return (
    <Dialog>
      <div className="rounded-2xl bg-paper p-2 sm:p-3">
        <DialogTrigger
          render={
            <button
              type="button"
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-black/10 bg-card text-start shadow-xl shadow-black/10 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          }
        >
          <div className="flex h-7 items-center gap-1.5 border-b bg-muted/50 px-3">
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
          </div>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized
            className="h-auto w-full"
          />
          <span className="absolute end-3 bottom-3 flex items-center gap-1.5 rounded-full bg-foreground/85 px-3 py-1.5 text-xs font-medium text-background opacity-90 shadow-lg transition-opacity group-hover:opacity-100">
            <Maximize2 className="size-3.5" />
            Click to enlarge
          </span>
        </DialogTrigger>
      </div>

      <DialogContent
        showCloseButton={false}
        className="max-h-[92vh] w-auto max-w-[96vw] gap-0 overflow-auto p-0 sm:max-w-[96vw]"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
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
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          className="h-auto max-w-none"
          style={{ width: `min(${width}px, 96vw)` }}
        />
      </DialogContent>
    </Dialog>
  )
}
