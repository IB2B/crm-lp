import { cn } from "@/lib/utils"

// TODO(ib2b): replace every placeholder with a real client quote (with permission).
// Best quotes mention a concrete result: more bookings, fewer no-shows, time saved.
const featured = {
  quote:
    "[Client quote: what changed after TORCH, in their own words. Ideally a real result, like more bookings or fewer missed calls.]",
  name: "[Client name]",
  business: "[Business · City]",
}

const short = [
  { quote: "[Quote about how easy the setup was]", business: "[Dental clinic · City]" },
  { quote: "[Quote about fewer missed calls]", business: "[Beauty salon · City]" },
  { quote: "[Quote about WhatsApp replies]", business: "[Real estate agency · City]" },
  { quote: "[Quote about more Google reviews]", business: "[Restaurant · City]" },
  { quote: "[Quote about support in their language]", business: "[Travel agency · City]" },
  { quote: "[Quote about saving time every week]", business: "[Marketing agency · City]" },
  { quote: "[Quote about fewer no-shows]", business: "[Physio clinic · City]" },
  { quote: "[Quote about follow-ups that run alone]", business: "[Sales agency · City]" },
]

const rowA = short.slice(0, 4)
const rowB = short.slice(4)

function PlaceholderTag() {
  return (
    <span className="rounded-full border border-dashed border-brand px-2 py-0.5 text-[11px] font-semibold tracking-wide text-brand uppercase">
      Placeholder
    </span>
  )
}

function Avatar() {
  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-dashed text-sm text-muted-foreground"
    >
      ?
    </span>
  )
}

// One row of quotes, duplicated so the loop is seamless.
function MarqueeRow({ items, reverse }: { items: typeof short; reverse?: boolean }) {
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
            <Avatar />
            <div>
              <p className="text-[15px] leading-snug">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-2 text-xs text-muted-foreground">
                [Client name] · {t.business}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TestimonialsSection() {
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
          <PlaceholderTag />
        </div>

        <figure className="mt-12 border-t pt-10 lg:mt-16 lg:pt-14">
          <span
            aria-hidden="true"
            className="block animate-in text-7xl leading-none font-light text-brand fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none"
          >
            &ldquo;
          </span>
          <blockquote className="mt-2 max-w-4xl text-2xl leading-snug font-light tracking-tight text-balance text-muted-foreground sm:text-4xl">
            {featured.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <Avatar />
            <div>
              <p className="font-medium">{featured.name}</p>
              <p className="text-sm text-muted-foreground">{featured.business}</p>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="mt-16 space-y-4" aria-label="More client quotes">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  )
}
