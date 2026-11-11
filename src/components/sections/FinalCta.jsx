import { Mail, Phone } from 'lucide-react'
import { CONTACTS } from '../../config/site'

export default function FinalCta({
  title = 'Porta Orma nel tuo locale',
  body = "Chiamaci per prenotare una dimostrazione dal vivo o per richiedere l'attivazione per la tua struttura.",
}) {
  return (
    <section id="contatti" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#27272A] bg-[#18181B] px-6 py-12 text-center sm:px-12">
        <h2 className="text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">{body}</p>
        <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {CONTACTS.map((contact) => (
            <div key={contact.name} className="flex flex-col items-stretch gap-3">
              <p className="text-sm font-medium text-ink">{contact.name}</p>
              <a href={`tel:${contact.phoneTel}`} className="btn-primary !h-11 !px-5">
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Chiamaci · {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="btn-primary !h-11 !px-5">
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Scrivici · {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
