import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-12">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold tracking-[-0.02em] text-ink" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              OUTPOST
            </Link>
            <span className="text-sm text-muted">Your outbound advance team.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="mailto:hello@outpostgtm.io"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              hello@outpostgtm.io
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Outpost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
