"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { CalendarPlus, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fmt, type Locale } from "@/i18n/config"
import type { BookingDict } from "@/i18n/dictionaries/booking"
import type { BookingInput, BookingResponse, PlanOption, SlotsResponse } from "@/lib/booking"
import { cn } from "@/lib/utils"

import { DetailsForm, emptyDetails, fullPhone, type DetailsValues } from "./details-form"
import { downloadIcs } from "./ics"
import { SlotPicker, type SlotsState } from "./slot-picker"
import { browserTimeZone, formatLongDate, formatTime, timeZoneLabel } from "./time"

type Step = "time" | "details" | "done"
type Booked = { start: string; end: string }

// The whole booking: pick a time → details → confirmation. Slots and bookings go through our own
// API routes (/api/booking/slots, /api/booking), which talk to GoHighLevel on the server.
export function BookingFlow({ t, lang, initialPlan }: { t: BookingDict; lang: Locale; initialPlan: PlanOption | "" }) {
  const [step, setStep] = useState<Step>("time")
  // Empty until the browser tells us its timezone (it is unknown during server rendering).
  const [timeZone, setTimeZone] = useState("")
  const [slots, setSlots] = useState<SlotsState>({ status: "loading" })
  const [slot, setSlot] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | undefined>()
  const [details, setDetails] = useState<DetailsValues>(() => emptyDetails(lang, initialPlan))
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | undefined>()
  const [serverFields, setServerFields] = useState<Extract<BookingResponse, { ok: false }>["fields"]>()
  const [booked, setBooked] = useState<Booked | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  // `quiet`: refresh in the background, without the loading state (keeps the current times on errors).
  const loadSlots = useCallback(async (tz: string, quiet = false) => {
    if (!quiet) setSlots({ status: "loading" })
    try {
      const res = await fetch(`/api/booking/slots?timezone=${encodeURIComponent(tz)}`, { cache: "no-store" })
      const data = (await res.json()) as SlotsResponse
      if (data.ok) setSlots({ status: "ready", slots: data.slots })
      else if (!quiet) setSlots({ status: "error" })
    } catch {
      if (!quiet) setSlots({ status: "error" })
    }
  }, [])

  // The browser's timezone is only known on the client, so the first load starts here.
  useEffect(() => {
    const tz = browserTimeZone()
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading the browser timezone once on mount
    setTimeZone(tz)
    void loadSlots(tz)
  }, [loadSlots])

  // While the visitor is choosing, keep availability fresh (every 2 minutes and when they come back
  // to the tab), so times someone else just booked turn grey instead of failing later.
  useEffect(() => {
    if (step !== "time" || !timeZone) return
    const refresh = () => {
      if (document.visibilityState === "visible") void loadSlots(timeZone, true)
    }
    const id = window.setInterval(refresh, 120_000)
    document.addEventListener("visibilitychange", refresh)
    return () => {
      window.clearInterval(id)
      document.removeEventListener("visibilitychange", refresh)
    }
  }, [step, timeZone, loadSlots])

  function goTo(next: Step) {
    setStep(next)
    // Keep the step in view on phones.
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }))
  }

  function toInput(values: DetailsValues): BookingInput {
    return {
      firstName: values.firstName,
      lastName: values.lastName,
      company: values.company,
      email: values.email,
      // Only the country code typed so far counts as empty, so the form says "required".
      phone: values.phoneLocal.trim() ? fullPhone(values) : "",
      plan: values.plan as PlanOption,
      message: values.message,
      consent: values.consent,
      slot: slot ?? "",
      timezone: timeZone,
      lang,
      website: values.website,
    }
  }

  async function submit(input: BookingInput) {
    setSubmitting(true)
    setServerError(undefined)
    setServerFields(undefined)
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })
      const data = (await res.json()) as BookingResponse
      if (data.ok) {
        setBooked({ start: data.start, end: data.end })
        // Meta Pixel (only present after cookie consent): a finished booking is a lead.
        ;(window as unknown as { fbq?: (cmd: "track", event: string) => void }).fbq?.("track", "Lead")
        goTo("done")
        return
      }
      if (data.code === "slot_taken") {
        // Someone else got that time: back to the calendar with fresh slots.
        setSlot(null)
        setNotice(t.slotTaken)
        void loadSlots(timeZone)
        goTo("time")
        return
      }
      setServerFields(data.fields)
      setServerError(t.errors[data.code])
    } catch {
      setServerError(t.errors.failed)
    } finally {
      setSubmitting(false)
    }
  }

  const stepIndex = step === "time" ? 0 : step === "details" ? 1 : 2

  return (
    <div ref={topRef} className="scroll-mt-6">
      {/* Where you are: three plain labels, the current one highlighted. */}
      <ol className="flex flex-wrap gap-x-6 gap-y-2 border-b pb-4 text-sm">
        {t.steps.map((label, i) => (
          <li
            key={label}
            aria-current={i === stepIndex ? "step" : undefined}
            className={cn(
              "relative",
              i === stepIndex ? "font-medium text-foreground" : "text-muted-foreground",
              i === stepIndex && "after:absolute after:inset-x-0 after:-bottom-[17px] after:h-0.5 after:bg-brand"
            )}
          >
            <span className="tabular-nums">{i + 1}.</span> {label}
          </li>
        ))}
      </ol>

      <div className="pt-8">
        {step === "time" ? (
          <SlotPicker
            t={t}
            lang={lang}
            timeZone={timeZone}
            onTimeZoneChange={setTimeZone}
            state={slots}
            onRetry={() => void loadSlots(timeZone)}
            notice={notice}
            onPick={(s) => {
              setSlot(s)
              setNotice(undefined)
              setServerError(undefined)
              goTo("details")
            }}
          />
        ) : null}

        {step === "details" && slot ? (
          <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-muted/60 px-5 py-4">
              <div>
                <p className="text-sm text-muted-foreground">{t.yourCall}</p>
                <p className="mt-0.5 text-base font-medium">
                  {formatLongDate(slot, timeZone, lang)} · {formatTime(slot, timeZone, lang)}
                </p>
                <p className="text-sm text-muted-foreground">{timeZoneLabel(timeZone, lang)}</p>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  // Back to the calendar with fresh availability.
                  void loadSlots(timeZone, true)
                  goTo("time")
                }}
              >
                {t.changeTime}
              </Button>
            </div>
            <DetailsForm
              t={t}
              lang={lang}
              values={details}
              onChange={setDetails}
              toInput={toInput}
              onSubmit={submit}
              submitting={submitting}
              serverError={serverError}
              serverFields={serverFields}
            />
          </div>
        ) : null}

        {step === "done" && booked ? (
          <div className="max-w-xl">
            <span className="flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
              <Check className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-3xl font-light tracking-tight sm:text-4xl" tabIndex={-1}>
              {fmt(t.confirmedTitle, { name: details.firstName.trim() })}
            </h2>
            <dl className="mt-6 grid gap-3 rounded-2xl bg-muted/60 px-5 py-4 text-base">
              <div className="flex flex-wrap justify-between gap-x-4">
                <dt className="text-muted-foreground">{t.dateLabel}</dt>
                <dd className="font-medium">{formatLongDate(booked.start, timeZone, lang)}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-4">
                <dt className="text-muted-foreground">{t.timeLabel}</dt>
                <dd className="font-medium tabular-nums">
                  {formatTime(booked.start, timeZone, lang)} – {formatTime(booked.end, timeZone, lang)}
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-4">
                <dt className="text-muted-foreground">{t.timezoneLabelShort}</dt>
                <dd className="font-medium">{timeZoneLabel(timeZone, lang)}</dd>
              </div>
            </dl>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.confirmedText}</p>
            <p className="mt-3 text-sm text-muted-foreground">{t.confirmedChange}</p>
            <Button
              variant="outline"
              size="xl"
              className="mt-6"
              onClick={() =>
                downloadIcs({ start: booked.start, end: booked.end, title: t.icsTitle, description: t.icsDescription })
              }
            >
              <CalendarPlus data-icon="inline-start" aria-hidden="true" />
              {t.addToCalendar}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
