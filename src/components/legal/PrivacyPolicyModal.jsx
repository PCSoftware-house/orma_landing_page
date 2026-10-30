import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function PrivacyPolicyModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    function onKey(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center" role="presentation">
      <button
        type="button"
        aria-label="Chiudi informativa privacy"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="relative max-h-[min(640px,calc(100vh-2rem))] w-full max-w-lg overflow-auto rounded-2xl border border-[#27272A] bg-[#18181B] px-6 py-6 shadow-window sm:px-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="privacy-title" className="text-[18px] font-medium tracking-[-0.03em] text-ink">
            Informativa privacy
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition hover:bg-white/[0.04] hover:text-ink"
            aria-label="Chiudi"
          >
            <X size={16} strokeWidth={1.75} />
          </button>
        </div>
        <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-muted">
          <p>
            Questo sito è una landing page dimostrativa gestita da PC Software per il progetto Orma.
          </p>
          <p>
            I dati inviati tramite i canali di contatto sono usati esclusivamente per rispondere alle
            richieste di informazioni e non vengono ceduti a terzi.
          </p>
          <p>
            I cookie tecnici restano sempre attivi. I cookie analitici di Google Analytics partono solo
            dopo il consenso e servono a misurare il traffico in forma aggregata. Non usiamo cookie di
            profilazione pubblicitaria.
          </p>
        </div>
      </div>
    </div>
  )
}
