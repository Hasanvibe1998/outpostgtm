"use client"

import Link from "next/link"
import { HeroDashboard } from "./hero-dashboard"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />
      
      {/* Subtle gradient orb */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-signal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-positive/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-[1080px] px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal-soft/50 px-4 py-1.5 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-signal" />
              <span className="text-xs font-medium text-signal">For Pre-Seed to Series A SaaS</span>
            </div>
            
            <h1 
              className="text-[clamp(44px,5.5vw,68px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink text-balance animate-text-reveal" 
              style={{ fontFamily: 'var(--font-space-grotesk)', animationDelay: "0.2s" }}
            >
              10-20 demos.
              <br />
              <span className="gradient-text">60 days.</span>
            </h1>
            
            <p 
              className="mt-6 text-lg font-light leading-[1.7] text-ink/70 max-w-md animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              We build you a simple, data-driven outbound engine that books qualified demos every month — without hiring SDRs or RevOps.
            </p>
            
            <div 
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b54f24] hover:shadow-lg hover:shadow-signal/20 animate-glow-pulse"
              >
                Get your pipeline started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
              >
                See how it works
                <span className="text-xs">↓</span>
              </Link>
            </div>
            
            {/* Social proof mini */}
            <div 
              className="mt-12 flex items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-8 w-8 rounded-full border-2 border-paper bg-paper-raised flex items-center justify-center"
                  >
                    <span className="text-[10px] font-semibold text-muted">
                      {["JK", "SM", "AR", "TL"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium text-ink">Trusted by </span>
                <span className="text-ink/60">B2B SaaS founders</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard */}
          <div className="relative lg:pl-8 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
