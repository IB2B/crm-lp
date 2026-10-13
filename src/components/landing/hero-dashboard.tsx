import { fmt, type Locale } from "@/i18n/config"
import type { HeroDict } from "@/i18n/dictionaries/hero"
import { cn } from "@/lib/utils"

// Mock dashboard cards for the hero. All figures are illustrative.
// They rise in after the hero text, then their bars and gauge fill (timings match hero.tsx).
// Labels come from src/i18n/dictionaries/hero.ts (dashboard), matched to these figures by index.

type DashDict = HeroDict["dashboard"]

const funnelFilled = [3, 4, 6, 5, 2]

const speedMetrics = [
  { value: "128", progress: 92 },
  { value: "642", progress: 74 },
  { value: "312", progress: 58 },
]

const pipelineBars = [80, 100]

const deals = [
  { name: "Sarah R.", value: "€180" },
  { name: "Marco B.", value: "€420" },
  { name: "Lena F.", value: "€95" },
]

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-paper p-5 text-start text-paper-foreground shadow-2xl shadow-black/40 ring-1 ring-black/5",
        className
      )}
    >
      {children}
    </div>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-brand/15 px-1.5 py-0.5 text-[10px] font-medium text-paper-foreground">
      {children}
    </span>
  )
}

function FunnelCard({ t, lang }: { t: DashDict; lang: Locale }) {
  // Western digits in every language, so the figure matches the rest of the card.
  const leads = (1248).toLocaleString(lang === "ar" ? "ar-u-nu-latn" : lang)
  return (
    <Card className="w-full max-w-sm">
      <p className="text-sm font-medium">{t.leadPerformance}</p>
      <p className="mt-4 text-4xl font-light tracking-tight tabular-nums">{leads}</p>
      <p className="text-xs text-paper-foreground/60">{t.leadsCaptured}</p>

      <div className="mt-5 grid grid-cols-5 gap-2">
        {t.funnel.map((label, stepIndex) => ({ label, filled: funnelFilled[stepIndex] ?? 0 })).map((step) => (
          <div key={step.label} className="flex flex-col items-center gap-1.5">
            <div className="flex w-full flex-col-reverse gap-1">
              {Array.from({ length: 6 }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-3 rounded-[3px]",
                    i < step.filled
                      ? "animate-fade-in bg-brand motion-reduce:animate-none"
                      : "bg-white ring-1 ring-black/5"
                  )}
                  style={i < step.filled ? { animationDelay: `${1700 + i * 70}ms` } : undefined}
                />
              ))}
            </div>
            <span className="text-[9px] text-paper-foreground/60">{step.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2.5 border-t border-black/10 pt-4 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-paper-foreground/60">{t.avgReply}</span>
          <Chip>{t.underOneMin}</Chip>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium tabular-nums">{fmt(t.appointmentsBooked, { n: 312 })}</span>
          <Chip>{t.last30Days}</Chip>
        </div>
      </div>
    </Card>
  )
}

function SpeedCard({ t }: { t: DashDict }) {
  // Semicircle gauge: arc length of a radius-40 half circle is ~125.7.
  const arc = 125.7
  const value = 0.92
  return (
    <Card className="w-72">
      <div className="relative mx-auto h-24 w-44">
        <svg viewBox="0 0 100 55" className="size-full rtl:-scale-x-100">
          <path
            d="M10 50 A40 40 0 0 1 90 50"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M10 50 A40 40 0 0 1 90 50"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${arc * value} ${arc}`}
            className="animate-gauge motion-reduce:animate-none"
            style={{ "--gauge-length": arc * value, animationDelay: "1800ms" } as React.CSSProperties}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 text-center">
          <p className="text-2xl font-light tabular-nums">92%</p>
          <p className="text-[10px] text-paper-foreground/60">{t.callsAnswered}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-3 text-xs">
        {speedMetrics.map((m, i) => ({ ...m, label: t.speedMetrics[i] })).map((m) => (
          <li key={m.value}>
            <div className="flex justify-between">
              <span className="text-paper-foreground/70">{m.label}</span>
              <span className="font-medium tabular-nums">{m.value}</span>
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-black/10">
              <div
                className="h-full origin-left animate-draw-line rounded-full rtl:origin-right bg-brand motion-reduce:animate-none"
                style={{ width: `${m.progress}%`, animationDelay: "1900ms" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function PipelineCard({ t }: { t: DashDict }) {
  const stripes =
    "repeating-linear-gradient(-45deg, var(--brand) 0 6px, color-mix(in oklch, var(--brand), white 25%) 6px 12px)"
  return (
    <Card className="w-72">
      <p className="text-sm font-medium">{t.pipeline}</p>
      <div className="mt-4 space-y-3 text-xs">
        {pipelineBars.map((value, i) => ({ label: t.pipelineBars[i], value })).map((bar) => (
          <div key={bar.value}>
            <div className="flex justify-between">
              <span className="text-paper-foreground/70">{bar.label}</span>
              <span className="font-medium tabular-nums">{bar.value}%</span>
            </div>
            <div className="mt-1.5 h-4 overflow-hidden rounded-md bg-black/10">
              <div
                className="h-full origin-left animate-draw-line rounded-md rtl:origin-right motion-reduce:animate-none"
                style={{ width: `${bar.value}%`, background: stripes, animationDelay: "1900ms" }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs font-medium">{t.recentBookings}</p>
      <ul className="mt-2 divide-y divide-black/10 text-xs">
        {deals.map((deal, i) => (
          <li key={deal.name} className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium">{deal.name}</p>
              <p className="text-paper-foreground/60">{t.services[i]}</p>
            </div>
            <span className="font-medium tabular-nums">{deal.value}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function HeroDashboard({ t, lang }: { t: DashDict; lang: Locale }) {
  return (
    <figure className="relative mx-auto w-full max-w-5xl">
      <figcaption className="sr-only">
        {t.caption}
      </figcaption>

      <div aria-hidden="true" className="relative flex justify-center pt-10">
        {/* Connector: a line from under the buttons down to the bracket joining the side cards */}
        <span
          className="absolute -top-9 left-1/2 hidden size-2 -translate-x-1/2 animate-fade-in rounded-full bg-brand shadow-[0_0_12px] shadow-brand motion-reduce:animate-none md:block"
          style={{ animationDelay: "1050ms" }}
        />
        <span className="absolute -top-7 left-1/2 hidden h-[4.75rem] w-px -translate-x-1/2 md:block">
          <span
            className="block size-full origin-top animate-draw-down bg-gradient-to-b from-brand/80 to-white/20 motion-reduce:animate-none"
            style={{ animationDelay: "1100ms" }}
          />
        </span>
        <span
          className="absolute top-10 left-[18%] right-[18%] hidden h-10 animate-fade-in rounded-t-2xl border-x border-t border-white/20 motion-reduce:animate-none md:block"
          style={{ animationDelay: "1250ms" }}
        />

        <div className="absolute start-0 top-20 hidden -rotate-2 md:block lg:start-[4%] rtl:rotate-2">
          <div className="animate-rise-in motion-reduce:animate-none" style={{ animationDelay: "1450ms" }}>
            <SpeedCard t={t} />
          </div>
        </div>
        <div className="absolute end-0 top-20 hidden rotate-2 md:block lg:end-[4%] rtl:-rotate-2">
          <div className="animate-rise-in motion-reduce:animate-none" style={{ animationDelay: "1550ms" }}>
            <PipelineCard t={t} />
          </div>
        </div>

        <div
          className="relative z-10 w-full max-w-sm animate-rise-in motion-reduce:animate-none"
          style={{ animationDelay: "1300ms" }}
        >
          <FunnelCard t={t} lang={lang} />
        </div>
      </div>
    </figure>
  )
}
