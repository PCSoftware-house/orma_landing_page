import { useState } from 'react'
import { Globe, QrCode, Smartphone } from 'lucide-react'
import dataset from '../../data/mock_dataset.json'
import GlassCard from '../ui/GlassCard'
import WindowHeader from '../ui/WindowHeader'

const WEEK = dataset.weekly_traffic

function MiniTable({ number, covers, occupied, note }) {
  const color = occupied ? '#EF4444' : '#22C55E'
  const fill = occupied ? 'rgba(239, 68, 68, 0.18)' : 'rgba(34, 197, 94, 0.12)'
  const sides = covers > 2

  function chair(edge) {
    const horizontal = edge === 'top' || edge === 'bottom'
    const style = {
      position: 'absolute',
      width: horizontal ? 12 : 5,
      height: horizontal ? 5 : 12,
      borderRadius: 2,
      background: '#52525B',
    }
    if (edge === 'top') {
      style.top = 0
      style.left = '50%'
      style.transform = 'translateX(-50%)'
    }
    if (edge === 'bottom') {
      style.bottom = 0
      style.left = '50%'
      style.transform = 'translateX(-50%)'
    }
    if (edge === 'left') {
      style.left = 0
      style.top = '50%'
      style.transform = 'translateY(-50%)'
    }
    if (edge === 'right') {
      style.right = 0
      style.top = '50%'
      style.transform = 'translateY(-50%)'
    }
    return <span key={edge} aria-hidden="true" style={style} />
  }

  return (
    <div className="relative h-[72px] w-[78px]">
      {chair('top')}
      {chair('bottom')}
      {sides ? chair('left') : null}
      {sides ? chair('right') : null}
      <div
        className="absolute inset-x-2 bottom-2 top-2 flex flex-col items-center justify-center rounded-lg"
        style={{ border: `1.5px solid ${color}`, background: fill }}
      >
        <span className="text-[13px] font-extrabold leading-none text-[#FAFAFA]">{number}</span>
        <span className="mt-1 text-[8px] font-semibold text-[#A1A1AA]">{covers} cop.</span>
      </div>
      {note ? (
        <span className="absolute -top-3 left-1/2 z-10 w-max -translate-x-1/2 rotate-6 rounded-[3px] bg-[#F97316] px-1 py-0.5 text-[8px] font-bold leading-none text-[#1A1208] shadow-md">
          {note}
        </span>
      ) : null}
    </div>
  )
}

function FloorWidget() {
  return (
    <div className="relative flex min-h-[188px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-[#27272A] bg-[#0E0E11]">
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/15 px-2 py-1 text-[10px] font-bold tracking-[0.12em] text-[#10B981]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
        LIVE
      </span>
      <div className="flex items-center gap-6 sm:gap-8">
        <MiniTable number="101" covers={2} occupied />
        <MiniTable number="102" covers={4} />
        <MiniTable number="103" covers={4} note="22:00 valerio" />
      </div>
      <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E0E11] to-transparent px-3 pb-3 pt-6 text-center text-[11px] text-[#A1A1AA]">
        Aggiornamento di stato istantaneo
      </p>
    </div>
  )
}

function ReservationWidget() {
  const [joined, setJoined] = useState(false)

  return (
    <div className="flex min-h-[188px] flex-1 flex-col rounded-lg border border-[#27272A] bg-[#111113] p-3.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[14px] font-bold text-[#FAFAFA]">Valerio</p>
          <p className="mt-1 text-[12px] text-[#A1A1AA]">15 Persone · 21:00</p>
        </div>
        <span
          className={`shrink-0 rounded px-1.5 py-1 text-[10px] font-bold tracking-[0.06em] ${
            joined ? 'bg-[#10B981]/15 text-[#10B981]' : 'bg-[#F97316]/15 text-[#F97316]'
          }`}
        >
          {joined ? 'CONFERMATA' : 'IN ATTESA'}
        </span>
      </div>
      <div className="mt-3 rounded-lg border border-[#5C80BC]/35 bg-[#5C80BC]/10 px-3 py-2.5 text-[12px] leading-snug text-[#FAFAFA]">
        <span aria-hidden="true">✨ </span>
        Suggerimento Orma: Unisci Tavoli 501 + 502 + 503
      </div>
      <button
        type="button"
        onClick={() => setJoined(true)}
        className={`mt-auto h-9 w-full rounded-lg text-[12px] font-extrabold tracking-[0.06em] ${
          joined ? 'bg-[#10B981]/15 text-[#10B981]' : 'bg-[#5C80BC] text-[#FAFAFA]'
        }`}
      >
        {joined ? 'TAVOLI UNITI' : 'CONFERMA & UNISCI'}
      </button>
    </div>
  )
}

function MenuWidget() {
  const [available, setAvailable] = useState(true)

  return (
    <div className="flex min-h-[188px] flex-1 flex-col rounded-lg border border-[#27272A] bg-[#111113] p-3.5">
      <div className="flex items-center justify-between gap-3 border-b border-[#27272A] pb-3">
        <span
          className={`text-[14px] font-semibold ${
            available ? 'text-[#FAFAFA]' : 'text-[#71717A] line-through'
          }`}
        >
          Tagliata di Manzo
        </span>
        <span className="text-[14px] font-medium tabular-nums text-[#A1A1AA]">€ 18.00</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[13px] text-[#A1A1AA]">{available ? 'Disponibile' : 'Esaurito'}</span>
        <button
          type="button"
          role="switch"
          aria-checked={available}
          aria-label="Disponibile"
          onClick={() => setAvailable((value) => !value)}
          className={`relative h-[18px] w-8 rounded-full transition ${
            available ? 'bg-[#5C80BC]' : 'bg-white/10'
          }`}
        >
          <span
            className={`absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white shadow transition ${
              available ? 'left-[16px]' : 'left-[2px]'
            }`}
          />
        </button>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md bg-[#10B981]/10 px-2.5 py-2 text-[11px] text-[#A1A1AA]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
        <span className="text-[#FAFAFA]">Sincronizzato:</span>
        <span className="inline-flex items-center gap-1">
          <QrCode size={12} strokeWidth={1.75} /> QR Tavolo
        </span>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <Smartphone size={12} strokeWidth={1.75} /> Palmare Cameriere
        </span>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <Globe size={12} strokeWidth={1.75} /> Sito Web
        </span>
      </div>
    </div>
  )
}

function AnalyticsWidget() {
  const max = Math.max(...WEEK.map((day) => day.orders), 1)
  return (
    <div className="flex min-h-[188px] flex-1 flex-col rounded-lg border border-[#27272A] bg-[#111113] p-3.5">
      <p className="text-[22px] font-bold leading-none tabular-nums text-[#10B981]">€ 5.624,50</p>
      <p className="mt-1.5 text-[12px] text-[#A1A1AA]">
        Incasso Settimanale <span className="font-semibold text-[#10B981]">(+18%)</span>
      </p>
      <div className="mt-4 flex h-14 items-end gap-1.5">
        {WEEK.map((day) => (
          <div key={day.day} className="flex h-full min-w-0 flex-1 items-end justify-center">
            <div
              className="w-full max-w-6"
              style={{
                height: `${(day.orders / max) * 100}%`,
                minHeight: day.orders > 0 ? 3 : 0,
                background: day.peak ? '#E8C547' : '#5C80BC',
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex gap-1.5">
        {WEEK.map((day) => (
          <span key={day.day} className="min-w-0 flex-1 text-center text-[9px] text-[#71717A]">
            {day.day}
          </span>
        ))}
      </div>
      <p className="mt-auto pt-3 text-[12px] text-[#A1A1AA]">
        <span className="text-[#FAFAFA]">1. Acqua (57x)</span>
        <span className="mx-1.5 text-[#71717A]">·</span>
        <span className="text-[#FAFAFA]">2. Cacio e Pepe (46x)</span>
      </p>
    </div>
  )
}

const CARDS = [
  {
    title: 'Planimetria & Sala Live',
    body: 'Gestisci la disposizione della sala dal vivo. Traccia tavoli occupati, liberi e prenotati con il punto di vista esatto sulle sedie.',
    Widget: FloorWidget,
  },
  {
    title: 'Prenotazioni & Unione Tavoli',
    body: 'Il cliente prenota dal tuo sito in un secondo. La prenotazione compare sul gestionale con i tavoli già suggeriti e uniti automaticamente per i gruppi grandi.',
    Widget: ReservationWidget,
  },
  {
    title: 'Menu Sincronizzato in 1 Secondo',
    body: 'Cambi un prezzo o disattivi un piatto finito dal telefono: si aggiorna all’istante sul palmare del cameriere, sul QR code al tavolo e sul tuo sito web. Zero scuse, zero errori.',
    Widget: MenuWidget,
  },
  {
    title: 'Analytics & Margini Reali',
    body: 'Incasso totale, scontrino medio e classifica dei piatti più e meno venduti. Prendi decisioni basate sui numeri veri della tua settimana, non sulle sensazioni.',
    Widget: AnalyticsWidget,
  },
]

export default function FeatureGrid() {
  return (
    <section id="flussi" className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <div className="mb-12 max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
          Piattaforma essenziale
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl">
          Quattro pilastri. Zero fronzoli.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Niente centralini complessi o funzioni inutili. Soltanto gli strumenti che servono
          davvero per far girare la tua sala e proteggere i tuoi margini.
        </p>
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {CARDS.map((card) => (
          <GlassCard key={card.title} className="flex h-full flex-col">
            <WindowHeader dense />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-ink">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{card.body}</p>
              <div className="mt-4 flex flex-1 flex-col">
                <card.Widget />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
