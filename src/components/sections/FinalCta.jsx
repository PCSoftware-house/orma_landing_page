import { Mail, Phone } from 'lucide-react'

const PHONE_DISPLAY = '+393348545132'
const PHONE_TEL = '+393348545132'

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
        <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch gap-3">
          <a href={`tel:${PHONE_TEL}`} className="btn-primary !h-11 !px-5">
            <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            Chiamaci · {PHONE_DISPLAY}
          </a>
          <a href="mailto:pcsoftware875@gmail.com" className="btn-primary !h-11 !px-5">
            <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            Scrivici · pcsoftware875@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
