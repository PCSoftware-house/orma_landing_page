import { useState } from 'react'

const HOURLY_RATE = 11.5

function breakdown(covers, staff) {
  const booking = Math.round(6 * (covers / 80))
  const menu = Math.round(4 * (covers / 80))
  const orders = Math.round(2 * (staff / 6))
  const hours = booking + menu + orders
  return {
    booking,
    menu,
    orders,
    hours,
    savings: Math.round(hours * HOURLY_RATE),
  }
}

function euro(value) {
  const grouped = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `€ ${grouped}`
}

function Slider({ label, min, max, value, onChange }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-[13px] text-[#A1A1AA]">{label}</span>
        <span className="text-[18px] font-semibold tabular-nums text-ink">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#27272A] accent-[#5C80BC]"
      />
      <span className="mt-2 flex justify-between text-[11px] text-[#71717A]">
        <span>{min}</span>
        <span>{max}</span>
      </span>
    </label>
  )
}

export default function ROIWidget() {
  const [covers, setCovers] = useState(80)
  const [staff, setStaff] = useState(6)
  const estimate = breakdown(covers, staff)
  const details = [
    {
      title: 'Prenotazioni Automatiche',
      hours: estimate.booking,
      text: 'Risparmiati azzerando le chiamate e i messaggi WhatsApp durante il servizio. Il cliente prenota da solo dal tuo sito web.',
    },
    {
      title: 'Menu & Allergeni Sincronizzati',
      hours: estimate.menu,
      text: 'Niente spiegazioni a voce sui piatti esauriti. La modifica dal tuo telefono si aggiorna istantaneamente su QR, palmare e sito.',
    },
    {
      title: 'Comande Istantanee Sala-Cucina',
      hours: estimate.orders,
      text: 'Meno viaggi a piedi tra i tavoli e la cassa. Passaggio diretto della comanda al KDS della cucina senza errori di trascrizione.',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
    <div className="grid items-stretch gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col justify-center gap-8 rounded-xl border border-[#27272A] bg-[#18181B] p-5 sm:p-6">
        <Slider
          label="Coperti medi al giorno"
          min={20}
          max={300}
          value={covers}
          onChange={setCovers}
        />
        <Slider
          label="Numero dipendenti in sala/cucina"
          min={1}
          max={20}
          value={staff}
          onChange={setStaff}
        />
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-[#27272A] bg-[#111113] p-5 sm:p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#71717A]">
              Ore risparmiate/mese
            </p>
            <p className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-ink">
              ~{estimate.hours} ore/mese
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#71717A]">
              Risparmio stimato/mese
            </p>
            <p className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-[#10B981]">
              {euro(estimate.savings)} / mese
            </p>
          </div>
        </div>
        <p className="mt-6 inline-flex w-fit rounded-full bg-[#5C80BC] px-3 py-1.5 text-[12px] font-medium text-[#FAFAFA]">
          Orma può farti risparmiare fin da subito
        </p>
      </div>
    </div>

    <div className="rounded-xl border border-[#27272A] bg-[#111113] p-5 sm:p-6">
      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-ink">
        Dettaglio del tempo risparmiato ogni mese
      </h3>
      <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-[#A1A1AA]">
        Stima basata sui tempi medi di gestione manuale della ristorazione in Italia.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {details.map((item) => (
          <article key={item.title} className="rounded-xl border border-[#27272A] bg-transparent p-4">
            <p className="text-[13px] font-medium text-[#FAFAFA]">{item.title}</p>
            <p className="mt-3 text-[22px] font-semibold tabular-nums tracking-[-0.03em] text-[#10B981]">
              ~{item.hours} ore/mese
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#A1A1AA]">{item.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-[12px] leading-relaxed text-[#71717A]">
        *Calcolo economico basato su un valore orario operativo medio di 11.50€/ora per il personale di sala/cassa.
      </p>
    </div>
    </div>
  )
}

export function SavingsSection() {
  return (
    <section id="risparmio" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl">
          Fai due conti: quanto ti costa gestire tutto a mano?
        </h2>
      </div>
      <div className="mt-12">
        <ROIWidget />
      </div>
    </section>
  )
}
