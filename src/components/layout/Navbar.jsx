import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'

const LINKS = [
  { href: '#prodotto', label: 'Prodotto' },
  { href: '#flussi', label: 'Flussi' },
]

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
