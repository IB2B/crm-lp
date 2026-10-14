"use client"

import { useId, useMemo, useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { fmt, localizeHref, type Locale } from "@/i18n/config"
import type { BookingDict } from "@/i18n/dictionaries/booking"
import {
  PLAN_OPTIONS,
  bookingSchema,
  fieldErrors,
  type BookingData,
  type BookingFieldError,
  type BookingInput,
  type PlanOption,
} from "@/lib/booking"
import { countries, defaultCountry } from "@/lib/countries"
import { cn } from "@/lib/utils"

export type DetailsValues = {
  firstName: string
  lastName: string
  company: string
  email: string
  country: string
  phoneLocal: string
  plan: PlanOption | ""
  message: string
  consent: boolean
  website: string
}

export function emptyDetails(lang: Locale, plan: PlanOption | ""): DetailsValues {
  return {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: defaultCountry[lang],
    phoneLocal: "",
    plan,
    message: "",
    consent: false,
    website: "",
  }
}

/** Country code + the number as typed. A number typed with its own "+…" is kept as is. */
export function fullPhone(values: Pick<DetailsValues, "country" | "phoneLocal">): string {
  const typed = values.phoneLocal.trim()
  if (typed.startsWith("+")) return typed
  const dial = countries.find((c) => c.code === values.country)?.dial ?? ""
  return `${dial}${typed.replace(/^0+(?=\d)/, "")}`
}

type FieldErrors = Partial<Record<keyof BookingData, BookingFieldError>>

type Props = {
  t: BookingDict
  lang: Locale
  values: DetailsValues
  onChange: (values: DetailsValues) => void
  /** Builds the request body; null while the slot or timezone is missing. */
  toInput: (values: DetailsValues) => BookingInput
  onSubmit: (input: BookingInput) => void
  submitting: boolean
  /** Errors from the server (field errors and a general message). */
  serverFields?: FieldErrors
  serverError?: string
}

// shadcn Input and Select trigger at the same comfortable height, with the brand focus ring.
const fieldClass = "h-10 focus-visible:border-brand focus-visible:ring-brand/20"
const selectTriggerClass = "h-10! cursor-pointer px-3 text-base md:text-sm focus-visible:border-brand focus-visible:ring-brand/20"

// Step 2: who is booking. Validated in the browser with the same schema the server uses.
export function DetailsForm({ t, lang, values, onChange, toInput, onSubmit, submitting, serverFields, serverError }: Props) {
  const uid = useId()
  const [errors, setErrors] = useState<FieldErrors>({})
  const shown = { ...serverFields, ...errors }

  const countryNames = useMemo(() => {
    let names: Intl.DisplayNames | null = null
    try {
      names = new Intl.DisplayNames([lang], { type: "region" })
    } catch {
      names = null
    }
    return countries
      .map((c) => ({ ...c, name: names?.of(c.code) ?? c.code }))
      .sort((a, b) => a.name.localeCompare(b.name, lang))
  }, [lang])

  function set<K extends keyof DetailsValues>(key: K, value: DetailsValues[K]) {
    onChange({ ...values, [key]: value })
    const field = key === "country" || key === "phoneLocal" ? "phone" : key
    if (errors[field as keyof BookingData]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function message(field: keyof BookingData): string | null {
    const code = shown[field]
    if (!code) return null
    if (code === "required") return t.fieldErrors.required
    if (code === "too_long") return t.fieldErrors.tooLong
    if (field === "email") return t.fieldErrors.invalidEmail
    if (field === "phone") return t.fieldErrors.invalidPhone
    return t.fieldErrors.invalid
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const input = toInput(values)
    const parsed = bookingSchema.safeParse(input)
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error))
      // Move focus to the first field with a problem.
      const first = parsed.error.issues[0]?.path[0]
      if (first) document.getElementById(`${uid}-${String(first)}`)?.focus()
      return
    }
    setErrors({})
    onSubmit(input)
  }

  const field = (name: keyof BookingData) => ({
    id: `${uid}-${name}`,
    "aria-invalid": shown[name] ? true : undefined,
    "aria-describedby": shown[name] ? `${uid}-${name}-error` : undefined,
  })
  const errorText = (name: keyof BookingData) => {
    const text = message(name)
    return text ? (
      <p id={`${uid}-${name}-error`} className="mt-1.5 text-sm text-red-600">
        {text}
      </p>
    ) : null
  }
  const label = (name: keyof BookingData, text: string, optional = false) => (
    <Label htmlFor={`${uid}-${name}`} className="mb-2">
      <span>
        {text}
        {optional ? <span className="font-normal text-muted-foreground"> ({t.optional})</span> : null}
      </span>
    </Label>
  )

  const [privacyBefore, privacyAfter] = t.consent.split("{privacy}")

  return (
    <form onSubmit={submit} noValidate className="relative grid gap-x-4 gap-y-5 sm:grid-cols-2">
      <div>
        {label("firstName", t.firstName)}
        <Input
          {...field("firstName")}
          className={fieldClass}
          autoComplete="given-name"
          value={values.firstName}
          onChange={(e) => set("firstName", e.target.value)}
        />
        {errorText("firstName")}
      </div>
      <div>
        {label("lastName", t.lastName)}
        <Input
          {...field("lastName")}
          className={fieldClass}
          autoComplete="family-name"
          value={values.lastName}
          onChange={(e) => set("lastName", e.target.value)}
        />
        {errorText("lastName")}
      </div>

      <div>
        {label("company", t.company)}
        <Input
          {...field("company")}
          className={fieldClass}
          autoComplete="organization"
          value={values.company}
          onChange={(e) => set("company", e.target.value)}
        />
        {errorText("company")}
      </div>
      <div>
        {label("email", t.email)}
        <Input
          {...field("email")}
          className={fieldClass}
          type="email"
          inputMode="email"
          autoComplete="email"
          dir="ltr"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
        />
        {errorText("email")}
      </div>

      <div>
        {label("phone", t.phone)}
        {/* The country code stays left-to-right, even on the Arabic page. */}
        <div className="flex gap-2" dir="ltr">
          <Select
            items={countryNames.map((c) => ({ value: c.code, label: `${c.code} ${c.dial}` }))}
            value={values.country}
            onValueChange={(v) => v && set("country", v as string)}
          >
            <SelectTrigger aria-label={t.countryCode} className={cn(selectTriggerClass, "w-28 shrink-0")}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false} align="start" className="max-h-72 w-72">
              {countryNames.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  <span className="truncate">{c.name}</span>
                  <span className="ms-auto text-muted-foreground tabular-nums">{c.dial}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            {...field("phone")}
            className={fieldClass}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            value={values.phoneLocal}
            onChange={(e) => set("phoneLocal", e.target.value)}
          />
        </div>
        {errorText("phone")}
      </div>
      <div>
        {label("plan", t.plan)}
        <Select
          items={PLAN_OPTIONS.map((p) => ({ value: p, label: t.planLabels[p] }))}
          value={values.plan || null}
          onValueChange={(v) => set("plan", (v ?? "") as PlanOption | "")}
        >
          <SelectTrigger {...field("plan")} className={cn(selectTriggerClass, "w-full")}>
            <SelectValue placeholder={t.planPlaceholder} />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start">
            {PLAN_OPTIONS.map((p) => (
              <SelectItem key={p} value={p}>
                {t.planLabels[p]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errorText("plan")}
      </div>

      <div className="sm:col-span-2">
        {label("message", t.message, true)}
        <Textarea
          {...field("message")}
          className="min-h-24 focus-visible:border-brand focus-visible:ring-brand/20"
          maxLength={2000}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
        />
        {errorText("message")}
      </div>

      {/* Honeypot: hidden from people and screen readers; bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -start-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => set("website", e.target.value)}
          />
        </label>
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:col-span-2">
        <input
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[var(--brand)]"
          checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
        />
        <span>
          {privacyBefore}
          <a
            href={localizeHref(lang, "/privacy")}
            target="_blank"
            rel="noopener"
            className="font-medium text-foreground underline underline-offset-4"
          >
            {t.privacyLink}
          </a>
          {privacyAfter}
        </span>
      </label>

      {serverError ? (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" size="xl" disabled={submitting} className="w-full sm:col-span-2 sm:w-auto sm:justify-self-start">
        {submitting ? (
          <>
            <Loader2 className="animate-spin motion-reduce:animate-none" aria-hidden="true" />
            {t.submitting}
          </>
        ) : (
          <>
            {t.submit}
            <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" aria-hidden="true" />
          </>
        )}
      </Button>
      {/* Screen readers hear the progress. */}
      <span className="sr-only" aria-live="polite">
        {submitting ? fmt(t.submitting, {}) : ""}
      </span>
    </form>
  )
}
