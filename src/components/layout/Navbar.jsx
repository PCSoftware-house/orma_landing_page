import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#prodotto', label: 'Prodotto' },
  { href: '#flussi', label: 'Flussi' },
]

export function Logo({ className = '', wordmark = 'Orma' }) {
  return (
    <a href="#prodotto" className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect
          x="2.25"
          y="2.25"
          width="19.5"
          height="19.5"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="text-ink"
        />
        <path
          d="M8 15.5V8.5h5.2"
          fill="none"
          stroke="#5e6ad2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15.2" cy="15.2" r="1.35" fill="#3ee0a2" />
      </svg>
      <span className="text-[14px] font-medium tracking-tight text-ink">{wordmark}</span>
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a
        href="#prodotto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas"
      >
        Vai al contenuto
      </a>
      <header className="fixed left-1/2 top-4 z-50 w-[min(72rem,calc(100%-1.5rem))] -translate-x-1/2">
        <div className="relative flex h-12 items-center gap-2 rounded-2xl border border-line bg-canvas/70 px-2.5 shadow-glass backdrop-blur-xl sm:px-3">
          <Logo />

          <nav className="ml-6 hidden items-center gap-1 md:flex" aria-label="Principale">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-[13px] text-muted transition hover:bg-white/[0.04] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center md:flex">
            <a href="#contatti" className="btn-primary group">
              Prova ora
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="text-muted transition group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </a>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition hover:bg-white/5 hover:text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-2 rounded-2xl border border-line bg-canvas/95 p-2 shadow-window backdrop-blur-xl md:hidden">
            <nav className="flex flex-col" aria-label="Mobile">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-[14px] text-muted transition hover:bg-white/[0.04] hover:text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 border-t border-line p-2">
              <a href="#contatti" className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
                Prova ora
              </a>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}
