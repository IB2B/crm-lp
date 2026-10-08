import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// Everyday moments a busy owner recognises. Plain words, no jargon.
const moments = [
  {
    title: "The phone rings while you're with a customer.",
    body: "You call back an hour later. They already booked with someone else.",
  },
  {
    title: "Messages pile up everywhere.",
    body: "WhatsApp, Instagram, texts, email. Some people never get a reply.",
  },
  {
    title: "You forget to follow up.",
    body: "That quote you sent last week? They were ready to say yes. Nobody checked in.",
  },
  {
    title: "Happy customers never leave a review.",
    body: "Not because they didn't like you. Nobody asked them at the right time.",
  },
]

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            id="problem-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Sound familiar?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Running a business is busy. Things slip through the cracks. It&apos;s
            not your fault, but it costs you customers every week.
          </p>
          <Button
            size="xl"
            nativeButton={false}
            render={<a href="#book-call" />}
            className="mt-8 w-full sm:w-auto"
          >
            Book a free setup call
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <ol className="border-t">
          {moments.map((moment, i) => (
            <li key={moment.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b py-7 sm:py-8">
              <span className="pt-1 text-sm text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xl font-medium tracking-tight text-balance sm:text-2xl">
                  {moment.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-pretty text-muted-foreground">
                  {moment.body}
                </p>
              </div>
            </li>
          ))}

          <li className="pt-8 sm:pt-10">
            <p className="text-xl font-medium tracking-tight text-balance sm:text-2xl">
              TORCH takes care of all of it.{" "}
              <span className="text-muted-foreground">
                And we set it up for you, so you never have to touch the tech.
              </span>
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}
