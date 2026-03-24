"use client"

import { useInView } from "@/hooks/use-in-view"
import { Target, Mail, LineChart, Users, Settings } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "ICP & Messaging Workshop",
    description: "We help you define your ideal customer profile, personas, and pain-based messaging that actually resonates with your target buyers.",
    tools: ["Notion", "Figma", "Loom"],
  },
  {
    icon: Users,
    title: "Data & Enrichment Engine",
    description: "We build highly targeted lists using Clay plus lead sources, enriched with fit and intent signals like funding rounds, tech stack, and hiring activity.",
    tools: ["Clay", "Apollo", "LinkedIn Sales Nav"],
  },
  {
    icon: Mail,
    title: "Cold Outbound System",
    description: "Multi-step email sequences with AI-assisted personalisation — custom first lines and tailored value props. Plus domain setup, warmup, and deliverability best practices.",
    tools: ["Instantly", "Lemlist", "Mailreach"],
  },
  {
    icon: LineChart,
    title: "RevOps & CRM Integration",
    description: "We connect everything into HubSpot (or your CRM), define simple stages, and create a dashboard tracking outreach volume, replies, meetings, and pipeline.",
    tools: ["HubSpot", "Salesforce", "Zapier"],
  },
  {
    icon: Settings,
    title: "Continuous Testing & Iteration",
    description: "We run small experiments — subject lines, angles, segments — and report learnings so your outbound engine gets better over time.",
    tools: ["A/B Testing", "Weekly Reports"],
  },
]

export function ServicesSection() {
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
            What we do
          </span>
        </div>

        <h2 className="text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-ink mb-12 max-w-2xl" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          A complete outbound system.{" "}
          <span className="gradient-text">Built for you.</span>
        </h2>

        {/* Services Grid - 2x2 + 1 full width */}
        <div className="grid md:grid-cols-2 border border-border rounded-lg overflow-hidden bg-white">
          {services.slice(0, 4).map((service, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 transition-colors hover:bg-[#FEFEFE] ${
                i < 2 ? "border-b border-border" : ""
              } ${i % 2 === 0 ? "md:border-r border-border" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-paper-raised">
                <service.icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">{service.title}</h3>
              <p className="mt-2 text-[15px] font-light leading-relaxed text-ink/70">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((tool, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center rounded border border-border bg-paper-raised px-2 py-0.5 text-[11px] font-medium tracking-[0.03em] text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Full width bottom card */}
          {(() => {
            const infraService = services[4]
            const InfraIcon = infraService.icon
            return (
              <div className="md:col-span-2 border-t border-border p-6 md:p-8 transition-colors hover:bg-[#FEFEFE]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-paper-raised">
                  <InfraIcon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-base font-medium text-ink">{infraService.title}</h3>
                <p className="mt-2 text-[15px] font-light leading-relaxed text-ink/70 max-w-xl">
                  {infraService.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {infraService.tools.map((tool, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center rounded border border-border bg-paper-raised px-2 py-0.5 text-[11px] font-medium tracking-[0.03em] text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </section>
  )
}
