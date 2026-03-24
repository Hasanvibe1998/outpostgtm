"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "01",
    title: "ICP Workshop",
    description: "We define your ideal customer profile, personas, and pain-based messaging together. You walk away with clarity on who to target and what to say.",
    duration: "Week 1-2",
  },
  {
    number: "02",
    title: "System Setup",
    description: "We build your data engine in Clay, set up email infrastructure with proper warmup, and connect everything to your CRM with a simple dashboard.",
    duration: "Week 2-4",
  },
  {
    number: "03",
    title: "Launch & Iterate",
    description: "Campaigns go live. We test subject lines, angles, and segments weekly — reporting learnings so your system improves over time.",
    duration: "Week 4+",
  },
]

export function HowItWorksSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`bg-dark-bg py-16 md:py-24 lg:py-32 section-fade ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-white/20" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-white/40">
            How it works
          </span>
        </div>

        <h2 className="text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-white mb-12 max-w-2xl" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          From zero to demos{" "}
          <span className="text-signal">in 60 days.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-lg border border-white/[0.07] p-6 md:p-8 overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Watermark number */}
              <span className="absolute -right-4 -top-4 text-[80px] font-bold leading-none text-white/[0.06] select-none" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                {step.number}
              </span>
              
              <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-signal">
                Step {step.number}
              </span>
              <h3 className="mt-3 text-lg font-medium text-white">{step.title}</h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-white/50">
                {step.description}
              </p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.09em] text-white/30">
                {step.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
