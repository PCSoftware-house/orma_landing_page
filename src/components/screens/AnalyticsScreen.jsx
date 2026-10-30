import { useState } from 'react'
import { BarChart3, Clock, Users, UtensilsCrossed } from 'lucide-react'

const PERIODS = ['Oggi', 'Settimana', 'Mese', 'Anno', 'Personalizzato']

const VIEWS = [
  { id: 'panoramica', label: 'Panoramica', icon: BarChart3 },
  { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
  { id: 'sala', label: 'Sala', icon: Clock },
  { id: 'staff', label: 'Staff', icon: Users },
]

const ROOMS = [
  { name: 'Sala Principale', share: 54, amount: 3031, color: '#10B981' },
  { name: 'Esterno 4', share: 20, amount: 1148, color: '#5C80BC' },
  { name: 'Esterno 2', share: 13, amount: 732, color: '#E8C547' },
  { name: 'Esterno 1', share: 7, amount: 393, color: '#A1A1AA' },
  { name: 'Esterno 3', share: 6, amount: 320, color: '#F97316' },
]

const TOP = [
  { rank: 1, name: 'Acqua', qty: 57, amount: 114 },
  { rank: 2, name: 'Supplì', qty: 53, amount: 132.5 },
  { rank: 3, name: 'Coda alla vaccinara', qty: 51, amount: 714 },
  { rank: 4, name: 'Cacio e Pepe', qty: 46, amount: 460 },
  { rank: 5, name: 'Chianti', qty: 45, amount: 810 },
]

const FLOP = [
  { rank: 1, name: 'Pasta alla Norma', qty: 2, amount: 30 },
  { rank: 2, name: 'Baozi', qty: 4, amount: 22 },
  { rank: 3, name: 'Gricia', qty: 29, amount: 319 },
  { rank: 4, name: 'Vino Casa', qty: 32, amount: 256 },
  { rank: 5, name: 'Arrosto', qty: 33, amount: 429 },
]

const MATRIX = [
  {
    id: 'stelle',
    name: 'Stelle',
    axis: 'Alta vendita / Alto margine',
    tone: '#10B981',
    action: 'Proporre maggiormente in sala.',
    dishes: [
      { name: 'Coda alla vaccinara', detail: '42 ordini · Margine 68% · € 12,20/piatto' },
      { name: 'Cacio e Pepe', detail: '46 ordini · Margine 74% · € 9,60/piatto' },
    ],
  },
  {
    id: 'enigmi',
    name: 'Enigmi',
    axis: 'Bassa vendita / Alto margine',
    tone: '#5C80BC',
    action: 'Consigliare attivamente con up-selling.',
    dishes: [
      { name: 'Chianti Riserva', detail: '12 ordini · Margine 81% · € 22,00/bottiglia' },
      { name: 'Tiramisù Artigianale', detail: '18 ordini · Margine 78% · € 4,70/piatto' },
    ],
  },
  {
    id: 'cavalli',
    name: 'Cavalli di traino',
    axis: 'Alta vendita / Basso margine',
    tone: '#E8C547',
    action: 'Ritoccare prezzo di listino o porzionatura.',
    dishes: [
      { name: 'Supplì', detail: '53 ordini · Margine 32% · € 0,80/pezzo' },
      { name: 'Acqua Microfiltrata', detail: '57 ordini · Margine 40% · € 0,80/bottiglia' },
    ],
  },
  {
    id: 'palla',
    name: 'Palla al piede',
    axis: 'Bassa vendita / Basso margine',
    tone: '#B25B5B',
    action: 'Rimuovere o sostituire nel prossimo menu.',
    dishes: [
      { name: 'Pasta alla Norma', detail: '2 ordini · Margine 22% · € 2,60/piatto' },
      { name: 'Baozi', detail: '4 ordini · Margine 18% · € 1,20/piatto' },
    ],
  },
]

const FOOD_COST = [
  { name: 'Primi', value: 26, color: '#5C80BC' },
  { name: 'Secondi', value: 34, color: '#E8C547' },
  { name: 'Bevande', value: 12, color: '#10B981' },
  { name: 'Dolci', value: 18, color: '#F97316' },
  { name: 'Antipasti', value: 28, color: '#A1A1AA' },
]

const FUNNEL = [
  { from: 'Presa Comanda', to: 'Invio KDS', time: 'Istantaneo (0s)', badge: 'Orma Realtime' },
  { from: 'In Coda', to: 'Inizio Preparazione', time: '3 min 40s' },
  { from: 'Preparazione', to: 'Piatto Pronto KDS', time: '7 min 40s' },
  { from: 'Piatto Pronto', to: 'Servito al Tavolo', time: '2 min 40s' },
]

const STAFF = [
  { name: 'Giulia', role: 'Cassa/Sala', orders: 52, revenue: 2840, ticket: 54.6, upsell: 34, dwell: '46 min', lead: true },
  { name: 'Marco', role: 'Sala', orders: 41, revenue: 1950, ticket: 47.5, upsell: 22, dwell: '52 min' },
  { name: 'Damiano', role: 'Sala', orders: 25, revenue: 834.5, ticket: 33.3, upsell: 18, dwell: '58 min' },
]

function euroIt(value) {
  const [whole, fraction] = Number(value).toFixed(2).split('.')
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `€ ${grouped},${fraction}`
}

function euroRoom(value) {
  const grouped = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `€ ${grouped}`
}

function Panel({ title, note, children, className = '' }) {
  return (
    <section className={`border border-os-line bg-os-surface px-3 pb-3 pt-2.5 ${className}`}>
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.11em] text-os-muted">{title}</h2>
        {note ? <p className="text-[11px] text-os-secondary">{note}</p> : null}
      </div>
      <div className="mt-2.5">{children}</div>
    </section>
  )
}

function Kpi({ label, value, hint, tone = 'text-os-text' }) {
  return (
    <article className="min-w-0 border border-os-line bg-os-surface px-2.5 py-2.5">
      <p className="text-[10px] font-semibold uppercase leading-tight tracking-[0.06em] text-os-muted">{label}</p>
      <p className={`mt-1.5 text-[18px] font-bold tabular-nums leading-none ${tone}`}>{value}</p>
      <p className="mt-1.5 text-[11px] leading-snug text-os-secondary">{hint}</p>
    </article>
  )
}

function Traffic({ traffic }) {
  const max = Math.max(...traffic.map((day) => day.orders), 1)
  return (
    <div className="flex h-32 items-end gap-1.5">
      {traffic.map((day) => (
        <div key={day.day} className="flex h-full min-w-0 flex-1 flex-col items-center">
          <span className="text-[11px] font-semibold tabular-nums text-os-secondary">{day.orders}</span>
          <div className="flex w-full flex-1 items-end justify-center pt-1.5">
            <div
              className="w-full max-w-7"
              style={{
                height: `${(day.orders / max) * 100}%`,
                minHeight: 4,
                background: day.peak ? '#E8C547' : '#5C80BC',
              }}
            />
          </div>
          <span className="mt-1.5 text-[10px] font-medium uppercase text-os-muted">{day.day}</span>
        </div>
      ))}
    </div>
  )
}

function ShareBars() {
  return (
    <ul className="space-y-2">
      {ROOMS.map((room) => (
        <li key={room.name} className="grid grid-cols-[108px_minmax(0,1fr)_32px_64px] items-center gap-2">
          <span className="truncate text-[12px] text-os-text">{room.name}</span>
          <span className="h-1.5 bg-os-high">
            <span className="block h-full" style={{ width: `${room.share}%`, background: room.color }} />
          </span>
          <span className="text-right text-[11px] tabular-nums text-os-secondary">{room.share}%</span>
          <span className="text-right text-[11px] font-medium tabular-nums text-os-text">{euroRoom(room.amount)}</span>
        </li>
      ))}
    </ul>
  )
}

function RankList({ items, bar }) {
  const max = Math.max(...items.map((item) => item.qty), 1)
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.name} className="grid grid-cols-[14px_minmax(0,1.2fr)_minmax(36px,0.7fr)_28px_72px] items-center gap-1.5">
          <span className="text-[11px] tabular-nums text-os-muted">{item.rank}</span>
          <span className="truncate text-[12px] text-os-text">{item.name}</span>
          <span className="h-1 bg-os-high">
            <span className="block h-full" style={{ width: `${(item.qty / max) * 100}%`, background: bar }} />
          </span>
          <span className="text-right text-[11px] tabular-nums text-os-secondary">{item.qty}x</span>
          <span className="text-right text-[11px] font-medium tabular-nums text-os-text">{euroIt(item.amount)}</span>
        </li>
      ))}
    </ul>
  )
}

function Panoramica({ traffic }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2.5 min-[760px]:grid-cols-3 min-[1100px]:grid-cols-5">
        <Kpi label="Incasso totale" value={euroIt(5624.5)} hint="+14% vs prec." tone="text-[#10B981]" />
        <Kpi label="Scontrino medio" value={euroIt(47.67)} hint="118 comande saldate" />
        <Kpi label="RevPASH (Resa/Sedia-Ora)" value={`${euroIt(14.2)}/h`} hint="Target: >12€/h" />
        <Kpi label="Prime Cost (Cibo + Personale)" value="57%" hint="Indicatore ottimo" tone="text-[#10B981]" />
        <Kpi label="Coperti totali" value="404" hint="32 tavoli serviti" />
      </div>

      <div className="grid gap-2.5 min-[900px]:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <Panel title="Affluenza settimanale" note="Picco sabato">
          <Traffic traffic={traffic} />
        </Panel>
        <Panel title="Incasso per sala">
          <ShareBars />
        </Panel>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        <Panel title="Top 5 venduti">
          <RankList items={TOP} bar="#5C80BC" />
        </Panel>
        <Panel title="Meno venduti">
          <RankList items={FLOP} bar="#71717A" />
        </Panel>
      </div>
    </div>
  )
}

function MenuEngineering() {
  return (
    <div className="space-y-3">
      <div className="grid gap-2.5 sm:grid-cols-2">
        {MATRIX.map((cell) => (
          <article key={cell.id} className="border border-os-line bg-os-surface px-3 py-2.5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-os-text">{cell.name}</h2>
              <span
                className="shrink-0 border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: cell.tone, borderColor: `${cell.tone}66`, background: `${cell.tone}1F` }}
              >
                {cell.axis}
              </span>
            </div>
            <ul className="mt-2.5 space-y-2">
              {cell.dishes.map((dish) => (
                <li key={dish.name}>
                  <p className="text-[13px] font-medium text-os-text">{dish.name}</p>
                  <p className="text-[11px] tabular-nums text-os-secondary">{dish.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-2.5 border-t border-os-line pt-2 text-[12px] text-os-secondary">{cell.action}</p>
          </article>
        ))}
      </div>

      <Panel title="Food cost medio per categoria" note="Materie prime stimate € 1.171,80">
        <ul className="space-y-2">
          {FOOD_COST.map((row) => (
            <li key={row.name} className="grid grid-cols-[84px_minmax(0,1fr)_40px] items-center gap-2">
              <span className="text-[12px] text-os-text">{row.name}</span>
              <span className="h-1.5 bg-os-high">
                <span className="block h-full" style={{ width: `${row.value}%`, background: row.color }} />
              </span>
              <span className="text-right text-[12px] font-medium tabular-nums text-os-text">{row.value}%</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  )
}

function Sala() {
  return (
    <div className="space-y-3">
      <Panel title="KDS funnel operativo">
        <ol className="space-y-2">
          {FUNNEL.map((step, index) => (
            <li key={step.to} className="grid grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-2.5">
              <span className="text-[11px] font-semibold tabular-nums text-os-muted">{index + 1}</span>
              <div className="min-w-0">
                <p className="text-[13px] text-os-text">
                  {step.from}
                  <span className="px-1.5 text-os-muted">→</span>
                  {step.to}
                </p>
                {step.badge ? (
                  <p className="mt-1 inline-flex border border-[#10B981]/40 bg-[#10B981]/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#10B981]">
                    {step.badge}
                  </p>
                ) : null}
              </div>
              <p className="text-right text-[13px] font-semibold tabular-nums text-os-text">{step.time}</p>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-os-line pt-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-os-muted">Tempo totale medio evasione</p>
          <p className="text-[20px] font-bold tabular-nums leading-none text-[#10B981]">14 min 00s</p>
        </div>
      </Panel>

      <div className="grid grid-cols-2 gap-2.5 min-[900px]:grid-cols-4">
        <article className="border border-os-line bg-os-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-os-muted">Rotazione media tavoli</p>
          <p className="mt-1.5 text-[20px] font-bold tabular-nums leading-none text-os-text">1,8x</p>
          <p className="mt-1.5 text-[11px] text-os-secondary">per turno · target weekend 2,0x</p>
        </article>
        <article className="border border-os-line bg-os-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-os-muted">Permanenza 2 coperti</p>
          <p className="mt-1.5 text-[20px] font-bold tabular-nums leading-none text-os-text">48 min</p>
          <p className="mt-1.5 text-[11px] text-os-secondary">media tavolo</p>
        </article>
        <article className="border border-os-line bg-os-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-os-muted">Permanenza gruppi 6+</p>
          <p className="mt-1.5 text-[20px] font-bold tabular-nums leading-none text-os-text">82 min</p>
          <p className="mt-1.5 text-[11px] text-os-secondary">media tavolo</p>
        </article>
        <article className="border border-os-line bg-os-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-os-muted">Storni / annullamenti</p>
          <p className="mt-1.5 text-[20px] font-bold tabular-nums leading-none text-os-text">1,7%</p>
          <p className="mt-1.5 text-[11px] text-os-secondary">2 comande stornate su 118</p>
        </article>
      </div>
    </div>
  )
}

function StaffView() {
  return (
    <div className="space-y-3">
      <Panel title="Classifica operatori">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-os-line text-[10px] font-semibold uppercase tracking-[0.08em] text-os-muted">
                <th className="py-1.5 pr-3 font-semibold">Operatore</th>
                <th className="py-1.5 pr-3 font-semibold">Comande gestite</th>
                <th className="py-1.5 pr-3 font-semibold">Incasso totale</th>
                <th className="py-1.5 pr-3 font-semibold">Scontrino medio</th>
                <th className="py-1.5 pr-3 font-semibold">Up-selling dolce/caffè</th>
                <th className="py-1.5 font-semibold">Tempo medio tavolo</th>
              </tr>
            </thead>
            <tbody>
              {STAFF.map((person) => (
                <tr key={person.name} className="border-b border-os-line last:border-0">
                  <td className="py-2 pr-3">
                    <p className="text-[13px] font-medium text-os-text">{person.name}</p>
                    <p className="text-[11px] text-os-muted">{person.role}</p>
                  </td>
                  <td className="py-2 pr-3 text-[13px] tabular-nums text-os-text">{person.orders}</td>
                  <td className="py-2 pr-3 text-[13px] tabular-nums text-os-text">{euroIt(person.revenue)}</td>
                  <td className="py-2 pr-3 text-[13px] tabular-nums text-os-secondary">{euroIt(person.ticket)}</td>
                  <td className={`py-2 pr-3 text-[13px] font-semibold tabular-nums ${person.lead ? 'text-[#10B981]' : 'text-os-text'}`}>
                    {person.upsell}%
                  </td>
                  <td className="py-2 text-[13px] tabular-nums text-os-secondary">{person.dwell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="grid gap-2.5 sm:grid-cols-3">
        <article className="border border-os-line bg-os-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-os-muted">Coperto con aperitivo/dolce</p>
          <p className="mt-1.5 text-[20px] font-bold tabular-nums leading-none text-os-text">42%</p>
          <p className="mt-1.5 text-[11px] text-[#10B981]">+8% vs media di settore</p>
        </article>
        <article className="border border-os-line bg-os-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-os-muted">Extra da varianti/aggiunte</p>
          <p className="mt-1.5 text-[20px] font-bold tabular-nums leading-none text-[#10B981]">+6,80 €</p>
          <p className="mt-1.5 text-[11px] text-os-secondary">media per comanda</p>
        </article>
        <article className="border border-os-line bg-os-surface px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-os-muted">Amari/caffè a fine pasto</p>
          <p className="mt-1.5 text-[20px] font-bold tabular-nums leading-none text-os-text">68%</p>
          <p className="mt-1.5 text-[11px] text-os-secondary">tasso di conversione</p>
        </article>
      </div>
    </div>
  )
}

const PANELS = {
  panoramica: Panoramica,
  menu: MenuEngineering,
  sala: Sala,
  staff: StaffView,
}

export default function AnalyticsScreen({ data }) {
  const [activeAnalyticsTab, setActiveAnalyticsTab] = useState('panoramica')
  const Active = PANELS[activeAnalyticsTab]

  return (
    <div data-screen="analytics" className="h-full overflow-auto bg-os-bg px-4 pb-4 pt-4">
      <h1 className="text-[16px] font-semibold tracking-[-0.02em] text-os-text">Statistiche e analytics</h1>

      <div className="mt-3 flex gap-1.5 overflow-x-auto" role="tablist" aria-label="Periodo">
        {PERIODS.map((item) => {
          const selected = item === 'Settimana'
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              disabled={!selected}
              className={`shrink-0 border px-3 py-1.5 text-[12px] font-medium ${
                selected
                  ? 'border-[#3F3F46] bg-[#27272A] text-[#FAFAFA]'
                  : 'pointer-events-none border-[#27272A] bg-transparent text-os-secondary opacity-60'
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>

      <div className="mt-2 flex gap-1 overflow-x-auto border-b border-os-line" role="tablist" aria-label="Viste di controllo">
        {VIEWS.map((view) => {
          const selected = view.id === activeAnalyticsTab
          const Icon = view.icon
          return (
            <button
              key={view.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveAnalyticsTab(view.id)}
              className={`flex shrink-0 items-center gap-1.5 border-b-2 px-2.5 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] transition-colors duration-150 ${
                selected ? 'border-os-accent text-os-text' : 'border-transparent text-os-muted hover:text-os-secondary'
              }`}
            >
              <Icon size={13} strokeWidth={1.5} />
              {view.label}
            </button>
          )
        })}
      </div>

      <div className="mt-3" role="tabpanel">
        <Active traffic={data.weekly_traffic} />
      </div>
    </div>
  )
}
