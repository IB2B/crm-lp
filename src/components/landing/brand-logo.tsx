import Image from "next/image"
import Link from "next/link"

export function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="TORCH by Intelligent B2B, home"
      className="flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="flex size-8 items-center justify-center rounded-lg border bg-muted/60">
        <Image
          src="/brand/torch-mark.png"
          alt=""
          width={24}
          height={24}
          priority
          className="size-6"
        />
      </span>
      <span className="text-base font-semibold tracking-tight">TORCH</span>
      <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
      <span className="hidden text-sm text-muted-foreground sm:block">
        by Intelligent B2B
      </span>
    </Link>
  )
}
