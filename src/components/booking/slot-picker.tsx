"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Globe, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fmt } from "@/i18n/config"
import type { BookingDict } from "@/i18n/dictionaries/booking"
import { cn } from "@/lib/utils"

import { allTimeZones, clockKey, dayKey, formatDay, formatTime, keyToDate, timeZoneLabel } from "./time"

export type SlotsState = { status: "loading" } | { status: "error" } | { status: "ready"; slots: string[] }

type Props = {
  t: BookingDict
  lang: string
  timeZone: string
  onTimeZoneChange: (tz: string) => void
  state: SlotsState
  onRetry: () => void
  onPick: (slot: string) => void
  /** Shown above the calendar, e.g. "that time was just taken". */
  notice?: string
}

type Month = { year: number; month: number } // month: 0-11

function addMonths({ year, month }: Month, n: number): Month {
  const d = new Date(Date.UTC(year, month + n, 1))
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() }
}
const monthOf = (key: string): Month => ({ year: Number(key.slice(0, 4)), month: Number(key.slice(5, 7)) - 1 })
const monthIndex = (m: Month) => m.year * 12 + m.month

// Step 1: a month calendar (days with free times are clickable), then the free times of the chosen day.
// Clicking a time goes straight to the details form.
export function SlotPicker({ t, lang, timeZone, onTimeZoneChange, state, onRetry, onPick, notice }: Props) {
  const [editingTz, setEditingTz] = useState(false)
  // The current time, updated every minute so times grey out as soon as they pass.
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  // Future free slots grouped by day in the visitor's timezone.
  const byDay = useMemo(() => {
    const map = new Map<string, string[]>()
    if (state.status !== "ready" || !timeZone) return map
    for (const slot of state.slots) {
      if (Date.parse(slot) <= now) continue
      const key = dayKey(slot, timeZone)
      map.set(key, [...(map.get(key) ?? []), slot])
    }
    return map
  }, [state, timeZone, now])

  // Every time of day the calendar offers ("09:00", "09:30"…), taken from all free slots.
  // A day shows all of them; those without a free slot that day are booked or past, so they show disabled.
  const grid = useMemo(() => {
    const labels = new Map<string, string>()
    if (state.status !== "ready" || !timeZone) return labels
    for (const slot of state.slots) {
      const key = clockKey(slot, timeZone)
      if (!labels.has(key)) labels.set(key, formatTime(slot, timeZone, lang))
    }
    return new Map([...labels].sort(([a], [b]) => a.localeCompare(b)))
  }, [state, timeZone, lang])

  const days = [...byDay.keys()].sort()
  const firstDay = days[0]
  const lastDay = days[days.length - 1]

  const [pickedDay, setPickedDay] = useState<string | null>(null)
  const [shownMonth, setShownMonth] = useState<Month | null>(null)
  // Fall back to the first day with free times (also after a timezone change).
  const selectedDay = pickedDay && byDay.has(pickedDay) ? pickedDay : (firstDay ?? null)
  const month = shownMonth ?? (selectedDay ? monthOf(selectedDay) : monthOf(dayKey(now, timeZone || "UTC")))

  const canPrev = firstDay ? monthIndex(month) > monthIndex(monthOf(firstDay)) : false
  const canNext = lastDay ? monthIndex(month) < monthIndex(monthOf(lastDay)) : false

  const weekdays = useMemo(() => {
    const f = new Intl.DateTimeFormat(lang, { timeZone: "UTC", weekday: "short" })
    // 2024-01-01 is a Monday: weeks start on Monday.
    return Array.from({ length: 7 }, (_, i) => f.format(new Date(Date.UTC(2024, 0, 1 + i, 12))))
  }, [lang])

  const cells = useMemo(() => {
    const first = new Date(Date.UTC(month.year, month.month, 1))
    const lead = (first.getUTCDay() + 6) % 7 // Monday = 0
    const count = new Date(Date.UTC(month.year, month.month + 1, 0)).getUTCDate()
    const out: (string | null)[] = Array.from({ length: lead }, () => null)
    for (let d = 1; d <= count; d++) {
      out.push(`${month.year}-${String(month.month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`)
    }
    return out
  }, [month])

  const monthTitle = new Intl.DateTimeFormat(lang, { timeZone: "UTC", month: "long", year: "numeric" }).format(
    new Date(Date.UTC(month.year, month.month, 1, 12))
  )
  const today = dayKey(now, timeZone || "UTC")
  // The selected day's full grid: a free slot, or null when that time is taken or past.
  const freeByClock = new Map((selectedDay ? (byDay.get(selectedDay) ?? []) : []).map((s) => [clockKey(s, timeZone), s]))
  const times = selectedDay ? [...grid].map(([key, label]) => ({ key, label, slot: freeByClock.get(key) ?? null })) : []

  return (
    <div>
      {/* Timezone */}
      <div className="flex min-h-6 flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted-foreground">
        <Globe className="size-4 shrink-0" aria-hidden="true" />
        {!timeZone ? null : editingTz ? (
          <label className="flex min-w-0 flex-1 items-center gap-2">
            <span className="sr-only">{t.timezoneLabel}</span>
            <select
              autoFocus
              value={timeZone}
              onChange={(e) => {
                onTimeZoneChange(e.target.value)
                setEditingTz(false)
              }}
              onBlur={() => setEditingTz(false)}
              className="h-10 w-full max-w-sm min-w-0 rounded-lg border border-border bg-background px-3 text-sm text-foreground"
            >
              {allTimeZones(timeZone).map((tz) => (
                <option key={tz} value={tz}>
                  {tz.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <>
            <span>
              {t.timesShownIn} <span className="font-medium text-foreground">{timeZoneLabel(timeZone, lang)}</span>
            </span>
            <button
              type="button"
              onClick={() => setEditingTz(true)}
              className="cursor-pointer rounded font-medium text-foreground underline underline-offset-4 hover:text-brand"
            >
              {t.changeTimezone}
            </button>
          </>
        )}
      </div>

      {notice ? (
        <p role="alert" className="mt-5 rounded-xl bg-brand/10 px-4 py-3 text-sm font-medium text-foreground">
          {notice}
        </p>
      ) : null}

      <div className="mt-6 min-h-[22rem]">
        {state.status === "loading" || !timeZone ? (
          <p className="flex items-center gap-2 py-16 text-sm text-muted-foreground" role="status">
            <Loader2 className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
            {t.loading}
          </p>
        ) : state.status === "error" ? (
          <div className="py-12">
            <p className="text-sm text-muted-foreground">{t.loadError}</p>
            <Button variant="outline" size="lg" className="mt-4" onClick={onRetry}>
              {t.retry}
            </Button>
          </div>
        ) : days.length === 0 ? (
          <p className="py-12 text-base text-muted-foreground">{t.noSlots}</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-10">
            {/* Month calendar */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-base font-medium capitalize">{monthTitle}</p>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon-lg"
                    disabled={!canPrev}
                    onClick={() => setShownMonth(addMonths(month, -1))}
                    aria-label={t.prevMonth}
                  >
                    <ChevronLeft className="rtl:-scale-x-100" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-lg"
                    disabled={!canNext}
                    onClick={() => setShownMonth(addMonths(month, 1))}
                    aria-label={t.nextMonth}
                  >
                    <ChevronRight className="rtl:-scale-x-100" aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-7 gap-1 text-center" role="grid" aria-label={monthTitle}>
                {weekdays.map((w) => (
                  <span key={w} className="pb-1 text-xs text-muted-foreground" role="columnheader">
                    {w}
                  </span>
                ))}
                {cells.map((key, i) => {
                  if (!key) return <span key={`empty-${i}`} aria-hidden="true" />
                  const free = byDay.has(key)
                  const selected = key === selectedDay
                  return (
                    <button
                      key={key}
                      type="button"
                      role="gridcell"
                      disabled={!free}
                      aria-selected={selected}
                      aria-label={formatDay(key, lang)}
                      onClick={() => setPickedDay(key)}
                      className={cn(
                        "relative mx-auto flex aspect-square w-full max-w-11 items-center justify-center rounded-full text-sm tabular-nums transition-colors",
                        free ? "cursor-pointer font-medium" : "text-muted-foreground/40",
                        free && !selected && "bg-brand/10 text-foreground hover:bg-brand/20",
                        selected && "bg-brand text-brand-foreground",
                        key === today && !selected && "ring-1 ring-foreground/20"
                      )}
                    >
                      {keyToDate(key).getUTCDate()}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Free times of the selected day */}
            <div>
              <p className="text-sm font-medium">
                {selectedDay ? fmt(t.timesOn, { date: formatDay(selectedDay, lang) }) : t.pickDay}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.duration}</p>
              <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-2">
                {times.map(({ key, label, slot }) => (
                  <li key={key}>
                    <button
                      type="button"
                      disabled={!slot}
                      onClick={() => slot && onPick(slot)}
                      aria-label={slot ? label : `${label} · ${t.unavailable}`}
                      className={cn(
                        "h-11 w-full rounded-xl border text-sm font-medium tabular-nums transition-colors",
                        slot
                          ? "cursor-pointer border-foreground/15 bg-background hover:border-brand hover:bg-brand/5 focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-brand/20 focus-visible:outline-none"
                          : "cursor-not-allowed border-transparent bg-muted/60 text-muted-foreground/50 line-through"
                      )}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
