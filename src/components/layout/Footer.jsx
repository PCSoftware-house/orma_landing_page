import { useState } from 'react'
import { Link } from 'react-router'
import { FOOTER_COLUMNS } from '../../config/site'
import PrivacyPolicyModal from '../legal/PrivacyPolicyModal'
import Logo from '../ui/Logo'

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo wordmark="Orma" />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Il sistema operativo essenziale per la ristorazione.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[13px] text-muted transition hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-faint">
            Orma è un progetto software sviluppato da PC Software. Attività in fase di costituzione.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="text-left text-[12px] text-muted transition hover:text-ink"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
              className="text-left text-[12px] text-muted transition hover:text-ink"
            >
              Preferenze Cookie
            </button>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  )
}
