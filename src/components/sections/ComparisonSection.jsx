const ROWS = [
  {
    title: 'Presenza Web & Traffico Pubblicitario',
    today:
      'Spendi soldi in pubblicità sui social ma rimandi i clienti a un menu PDF illeggibile o a un telefono che squilla mentre sei occupato a servire.',
    next: 'Un sito web ultra-veloce che trasforma chi ti vede online in prenotazioni reali sul gestionale, senza intermediari o commissioni.',
  },
  {
    title: 'Menu sincronizzato',
    today:
      'Piatti esauriti comunicati a voce, listini da ristampare e cameriere che deve tornare al tavolo a dire “questo è finito”.',
    next: 'Cambi un prezzo o disattivi un piatto finito dal telefono: si aggiorna all’istante sul palmare del cameriere, sul QR code al tavolo e sul tuo sito web. Zero scuse, zero errori.',
  },
  {
    title: 'Rotazione Tavoli e Comande',
    today: 'Malintesi tra sala e cucina, comande perse e tempi di attesa che si allungano.',
    next: 'Passaggio istantaneo tra cassa, palmare e KDS cucina. Zero errori, rotazione dei tavoli +20% più veloce.',
  },
]

export default function ComparisonSection() {
  return (
    <section id="confronto" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl">
          La differenza tra rincorrere il locale e averne il controllo.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Vedi cosa cambia concretamente durante il servizio di ogni giorno.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {ROWS.map((row) => (
          <article
            key={row.title}
            className="flex flex-col rounded-xl border border-[#27272A] bg-[#18181B] p-5"
          >
            <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-ink">{row.title}</h3>
            <div className="mt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">Oggi</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{row.today}</p>
            </div>
            <div className="mt-5 border-t border-[#27272A] pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                Con Orma
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#FAFAFA]">{row.next}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
