"use client"

import Link from "next/link"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-[-0.02em] text-ink" style={{ fontFamily: 'var(--font-space-grotesk)' }}>OUTPOST</span>
          </Link>
          
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[4px] bg-signal px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:translate-y-[-1px] hover:bg-[#b54f24]"
          >
            Book a call
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
