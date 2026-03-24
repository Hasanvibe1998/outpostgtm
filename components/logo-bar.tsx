export function LogoBar() {
  const tools = ["Clay", "Instantly", "Apollo", "HubSpot", "Lemlist"]

  return (
    <section className="border-y border-border bg-paper py-8 md:py-10">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.09em] text-muted mb-6">
          Powered by 20+ best-in-class tools
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-semibold tracking-tight text-ink/60 transition-all duration-300 hover:text-ink hover:scale-105"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {tool}
            </span>
          ))}
          <span 
            className="text-lg md:text-xl font-semibold tracking-tight text-signal/80 transition-all duration-300 hover:text-signal hover:scale-105"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            + more
          </span>
        </div>
      </div>
    </section>
  )
}
