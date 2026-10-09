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
      {/* Soft white bezel with a warm shadow, sized to fill the deck slot */}
      <div className="size-full rounded-[20px] bg-white p-1.5 shadow-[0_30px_60px_-25px_rgb(60_40_20/0.35)] ring-1 ring-black/5 sm:p-2">
        <DialogTrigger
          render={
            <button
              type="button"
              className="group relative block size-full cursor-zoom-in overflow-hidden rounded-[14px] bg-white text-start outline-none focus-visible:ring-3 focus-visible:ring-brand/60"
            />
          }
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized
            className="size-full object-contain object-top"
          />
          <span className="absolute start-3 bottom-3 flex items-center gap-1.5 rounded-full bg-paper-foreground/90 px-3 py-1.5 text-xs font-medium text-paper opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
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
