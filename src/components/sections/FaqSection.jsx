import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const QUESTIONS = [
  {
    q: 'Serve un hardware speciale o un cassa dedicata?',
    a: 'No. Orma funziona su qualsiasi iPad, tablet Android, PC o smartphone che già possiedi.',
  },
  {
    q: 'Quanto ci vuole per configurare il menu e la sala?',
    a: 'Meno di 10 minuti. Puoi caricare il tuo menu o chiedere al nostro supporto di configurarlo per te.',
  },
  {
    q: 'Il personale deve fare un corso per imparare a usarlo?',
    a: "L'interfaccia è progettata per essere istantanea. Qualsiasi cameriere o operatore impara a usarlo in 5 minuti.",
  },
  {
    q: 'Come posso provare Orma nel mio locale?',
    a: "Contattaci direttamente: analizzeremo le esigenze della tua sala e della tua cucina e ti attiveremo un accesso dimostrativo guidato senza alcun costo d'ingresso.",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <h2 className="text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl">
        Domande frequenti
      </h2>
      <div className="mt-10 max-w-3xl divide-y divide-[#27272A] overflow-hidden rounded-xl border border-[#27272A] bg-[#18181B]">
        {QUESTIONS.map((item, index) => {
          const expanded = open === index
          return (
            <div key={item.q}>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-[15px] font-medium text-ink">{item.q}</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-[#A1A1AA] transition-transform duration-200 ${
                    expanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expanded ? (
                <p className="px-5 pb-5 text-[14px] leading-relaxed text-muted">{item.a}</p>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
