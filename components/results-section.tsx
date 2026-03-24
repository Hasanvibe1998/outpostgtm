"use client"

import { useInView } from "@/hooks/use-in-view"

const metrics = [
  {
    value: "10-20",
    unit: "/mo",
    label: "Qualified demos booked monthly",
  },
  {
    value: "60",
    unit: "days",
    label: "To a working outbound system",
  },
  {
    value: "0",
    unit: "hires",
    label: "SDRs or RevOps needed",
  },
]

export function ResultsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className={`bg-paper py-16 md:py-24 lg:py-32 border-t border-border section-fade ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-muted" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-muted">
            Results
          </span>
        </div>

        <h2 className="text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-ink mb-12 max-w-2xl" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Predictable pipeline.{" "}
          <span className="gradient-text">No guesswork.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-border bg-white p-6 md:p-8 overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top gradient border */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px]" 
                style={{ 
                  background: `linear-gradient(to right, var(--signal), rgba(200, 90, 42, 0.6))`
                }} 
              />
              
              <div className="flex items-baseline gap-1">
                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-ink" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {metric.value}
                </span>
                <span className="text-lg font-medium text-signal">{metric.unit}</span>
              </div>
              <p className="mt-3 text-[15px] font-light text-ink/70">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
