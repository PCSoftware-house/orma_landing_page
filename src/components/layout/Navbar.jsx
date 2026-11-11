import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router'
import { CTA, NAV } from '../../config/site'
import Logo from '../ui/Logo'

function skipToContent(event) {
  const main = document.getElementById('contenuto')
  if (!main) return
  event.preventDefault()
  main.focus({ preventScroll: true })
  main.scrollIntoView()
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const cta = CTA[pathname] ?? CTA['/']

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <a
        href="#contenuto"
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas"
      >
        Vai al contenuto
      </a>
      <header className="fixed left-1/2 top-4 z-50 w-[min(72rem,calc(100%-1.5rem))] -translate-x-1/2">
        <div className="relative flex h-12 items-center gap-2 rounded-2xl border border-line bg-canvas/70 px-2.5 shadow-glass backdrop-blur-xl sm:px-3">
          <Logo />

          <nav className="ml-6 hidden items-center gap-1 md:flex" aria-label="Principale">
            {NAV.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-md px-2.5 py-1.5 text-[13px] transition ${
                    isActive
                      ? 'bg-white/[0.06] text-ink'
                      : 'text-muted hover:bg-white/[0.04] hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden items-center md:flex">
            <Link to={cta.to} className="btn-primary group">
              {cta.label}
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="text-muted transition group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </Link>
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
              {NAV.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-[14px] transition ${
                      isActive
                        ? 'bg-white/[0.06] text-ink'
                        : 'text-muted hover:bg-white/[0.04] hover:text-ink'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-2 border-t border-line p-2">
              <Link to={cta.to} className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
                {cta.label}
              </Link>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}
