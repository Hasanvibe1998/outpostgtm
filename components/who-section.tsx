"use client"

import { useInView } from "@/hooks/use-in-view"
import { X, Check } from "lucide-react"

export function WhoSection() {
  const { ref, isInView } = useInView()

  const goodFit = [
    "Pre-Seed to Series A B2B SaaS (2-50 employees)",
    "Founders doing manual prospecting and unpersonalised emails",
    "Teams without a clear system for tracking what works",
    "Companies ready to handle 10-20 new demos per month",
  ]

  const notFit = [
    "Companies still searching for product-market fit",
    "B2C businesses or those not selling to other businesses",
    "Teams expecting overnight results without iteration",
  ]

  return (
    <section
      ref={ref}
      className={`bg-paper-raised py-16 md:py-24 lg:py-32 section-fade ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-muted" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-muted">
            Who this is for
          </span>
        </div>

        <h2 className="text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-ink mb-12 max-w-2xl" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Built for early-stage{" "}
          <span className="gradient-text">B2B SaaS.</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Good fit */}
          <div className="rounded-lg border border-border bg-white p-6 md:p-8">
            <h3 className="text-sm font-medium text-ink mb-6">Good fit</h3>
            <ul className="space-y-4">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-positive-soft">
                    <Check className="h-3 w-3 text-positive" />
                  </span>
                  <span className="text-[15px] font-light leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div className="rounded-lg border border-border bg-white p-6 md:p-8">
            <h3 className="text-sm font-medium text-ink mb-6">Not a fit</h3>
            <ul className="space-y-4">
              {notFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-paper-raised">
                    <X className="h-3 w-3 text-muted" />
                  </span>
                  <span className="text-[15px] font-light leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
