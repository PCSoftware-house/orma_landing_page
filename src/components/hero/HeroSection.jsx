import { ArrowRight } from 'lucide-react'
import MainAppWindow from './MainAppWindow'

export default function HeroSection() {
  return (
    <section id="prodotto" className="mx-auto max-w-6xl px-4 pb-28 pt-32 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="text-gradient mx-auto max-w-5xl text-balance pb-2 text-4xl font-medium leading-[1.15] tracking-[-0.045em] sm:text-5xl lg:text-[3.25rem]">
          Dal primo click sul tuo sito al tavolo in sala.
          <br />
          Governa il tuo locale al massimo delle potenzialità.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
          Orma accoglie chi ti scopre online con una vetrina web impeccabile e prenotazioni
          dirette, mentre in sala azzera gli errori sulle comande e sincronizza cassa, palmari e
          KDS cucina in un secondo.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <a href="#contatti" className="btn-primary group !h-10 !px-4">
            Prova ora
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="text-muted transition group-hover:translate-x-0.5 group-hover:text-ink"
            />
          </a>
          <a href="#contatti" className="btn-secondary !h-10 !px-4">
            Richiedi una Demo
          </a>
        </div>

        <p className="mt-4 max-w-lg text-balance text-[12px] text-faint">
          Sito web &amp; Gestionale in un&apos;unica piattaforma · Attivo in 5 minuti · Nessun hardware dedicato
        </p>
      </div>

      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-48 w-[78%] -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(closest-side,rgba(94,106,210,0.38),transparent)] blur-2xl"
        />
        <MainAppWindow />
      </div>

      <p className="mx-auto mt-3 flex max-w-2xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-[#71717A] sm:text-sm">
        <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5C80BC]/60" />
        <span>
          Anteprima interattiva a scopo dimostrativo. La piattaforma completa Orma integra
          funzionalità avanzate e personalizzazioni su misura per la gestione totale del tuo locale.
        </span>
      </p>
    </section>
  )
}
