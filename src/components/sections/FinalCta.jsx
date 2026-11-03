import { Mail, Phone } from 'lucide-react'

const VALERIO_PHONE_DISPLAY = '351 826 8907'
const VALERIO_PHONE_TEL = '+393518268907'
const DAMIANO_PHONE_DISPLAY = '334 854 5132'
const DAMIANO_PHONE_TEL = '+393348545132'

export default function FinalCta() {
  return (
    <section id="contatti" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#27272A] bg-[#18181B] px-6 py-12 text-center sm:px-12">
        <h2 className="text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl">
          Porta Orma nel tuo locale
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
          Chiamaci per prenotare una dimostrazione dal vivo o per richiedere l&apos;attivazione per la
          tua struttura.
        </p>
        <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-stretch gap-3">
            <p className="text-sm font-medium text-ink">Valerio</p>
            <a href={`tel:${VALERIO_PHONE_TEL}`} className="btn-primary !h-11 !px-5">
              <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Chiamaci · {VALERIO_PHONE_DISPLAY}
            </a>
            <a href="mailto:valerio@getorma.app" className="btn-primary !h-11 !px-5">
              <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Scrivici · valerio@getorma.app
            </a>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <p className="text-sm font-medium text-ink">Damiano</p>
            <a href={`tel:${DAMIANO_PHONE_TEL}`} className="btn-primary !h-11 !px-5">
              <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Chiamaci · {DAMIANO_PHONE_DISPLAY}
            </a>
            <a href="mailto:damiano@getorma.app" className="btn-primary !h-11 !px-5">
              <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Scrivici · damiano@getorma.app
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
