import { cn } from "@/lib/utils"

import { testimonials, type Testimonial } from "@/content/testimonials"

// Real quotes only (see src/content/testimonials.ts). First one is featured, the rest slide.
const [featured, ...short] = testimonials
const half = Math.ceil(short.length / 2)
const rowA = short.slice(0, half)
const rowB = short.slice(half)

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((p) => p[0]).join("").slice(0, 2)
  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-medium text-brand"
    >
      {initials}
    </span>
  )
}

// One row of quotes, duplicated so the loop is seamless.
function MarqueeRow({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className={cn(
          "flex shrink-0 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {[...items, ...items].map((t, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="me-4 flex w-80 shrink-0 items-start gap-3 rounded-2xl border bg-background p-5"
          >
            <Avatar name={t.name} />
            <div>
              <p className="text-[15px] leading-snug">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {t.name} · {t.business}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TestimonialsSection() {
  if (!featured) return null

  return (
    <section aria-labelledby="testimonials-title" className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Testimonials</p>
            <h2
              id="testimonials-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              What our clients say.
            </h2>
          </div>
        </div>

        <figure className="mt-12 border-t pt-10 lg:mt-16 lg:pt-14">
          <span
            aria-hidden="true"
            className="block animate-in text-7xl leading-none font-light text-brand fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none"
          >
            &ldquo;
          </span>
          <blockquote className="mt-2 max-w-4xl text-2xl leading-snug font-light tracking-tight text-balance sm:text-4xl">
            {featured.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <Avatar name={featured.name} />
            <div>
              <p className="font-medium">{featured.name}</p>
              <p className="text-sm text-muted-foreground">{featured.business}</p>
            </div>
          </figcaption>
        </figure>
      </div>

      {short.length ? (
      <div className="mt-16 space-y-4" aria-label="More client quotes">
        {rowA.length ? <MarqueeRow items={rowA} /> : null}
        {rowB.length ? <MarqueeRow items={rowB} reverse /> : null}
      </div>
      ) : null}
    </section>
  )
}
