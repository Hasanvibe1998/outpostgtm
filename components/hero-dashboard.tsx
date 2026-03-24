"use client"

import { useEffect, useState } from "react"
import { Check, TrendingUp, Zap } from "lucide-react"

export function HeroDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ contacts: 0, demos: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  // Animate counters
  useEffect(() => {
    if (!isVisible) return
    
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
      
      setCounters({
        contacts: Math.round(1248 * eased),
        demos: Math.round(18 * eased),
      })
      
      if (step >= steps) clearInterval(timer)
    }, interval)
    
    return () => clearInterval(timer)
  }, [isVisible])

  const barHeights = [24, 32, 28, 48, 56, 64, 72, 80]

  return (
    <div
      className={`relative rounded-2xl border border-border bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-signal/10">
            <Zap className="h-3.5 w-3.5 text-signal" />
          </div>
          <span className="text-xs font-semibold text-ink">
            Outbound Dashboard
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-positive opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-positive"></span>
          </span>
          <span className="text-[11px] font-medium text-positive">Live</span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-px bg-border/50">
        {[
          { label: "Outreach", value: counters.contacts.toLocaleString(), trend: "+247", color: "text-ink" },
          { label: "Replies", value: "342", trend: "+28", color: "text-ink" },
          { label: "Meetings", value: counters.demos.toString(), trend: "+6", color: "text-positive" },
          { label: "Pipeline", value: "$84k", trend: "+$12k", color: "text-signal" },
        ].map((kpi, i) => (
          <div 
            key={i} 
            className={`bg-white p-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${0.8 + i * 0.1}s` }}
          >
            <div 
              className={`text-xl md:text-2xl font-bold tracking-[-0.02em] ${kpi.color}`} 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {kpi.value}
            </div>
            <div className="mt-1 flex items-center justify-center gap-1">
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted">
                {kpi.label}
              </span>
              <span className="text-[9px] font-medium text-positive">
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">
            Weekly Meetings
          </span>
          <div className="flex items-center gap-1 text-[10px] font-medium text-positive">
            <TrendingUp className="h-3 w-3" />
            <span>+34%</span>
          </div>
        </div>
        <div className="flex items-end justify-between gap-2 h-20">
          {barHeights.map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t transition-all ${
                i < 3
                  ? "bg-border"
                  : i < 5
                  ? "bg-signal/30"
                  : "bg-signal"
              } ${isVisible ? "animate-bar-grow" : ""}`}
              style={{
                height: `${height}%`,
                animationDelay: `${1 + i * 0.08}s`,
                animationFillMode: "both",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((week, i) => (
            <span key={i} className="flex-1 text-center text-[9px] text-muted">{week}</span>
          ))}
        </div>
      </div>

      {/* Pipeline Funnel */}
      <div className="border-t border-border px-5 py-4">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted mb-3 block">
          Pipeline Funnel
        </span>
        {[
          { label: "Contacted", value: 1248, progress: 100, color: "bg-ink/20" },
          { label: "Replied", value: 156, progress: 12.5, color: "bg-signal/50" },
          { label: "Meeting", value: 18, progress: 1.4, color: "bg-signal" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 py-2">
            <span className="w-20 text-xs font-medium text-ink">{item.label}</span>
            <div className="flex-1 h-2 rounded-full bg-paper-raised overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                style={{ 
                  width: isVisible ? `${Math.max(item.progress, 4)}%` : '0%',
                  transitionDelay: `${1.2 + i * 0.15}s`
                }}
              />
            </div>
            <span className="w-14 text-right text-xs font-semibold text-ink">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Floating Badge - Bottom Left */}
      <div 
        className={`absolute -bottom-5 -left-5 rounded-xl border border-border bg-white px-4 py-3 shadow-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1.5s' }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-positive-soft">
            <Check className="h-4 w-4 text-positive" />
          </span>
          <div>
            <div className="text-sm font-semibold text-ink">12 demos this month</div>
            <div className="text-[11px] text-muted">On track for 16+</div>
          </div>
        </div>
      </div>

      {/* Floating Badge - Top Right */}
      <div 
        className={`absolute -top-3 -right-3 rounded-lg border border-border bg-white px-3 py-2 shadow-md transition-all duration-700 animate-float ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.8s' }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal-soft">
            <TrendingUp className="h-3 w-3 text-signal" />
          </span>
          <span className="text-xs font-semibold text-ink">+127%</span>
        </div>
      </div>
    </div>
  )
}
