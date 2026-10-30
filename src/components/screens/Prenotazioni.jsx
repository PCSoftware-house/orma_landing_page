import FloorPlan from '../floor/FloorPlan'

const WEEK = [
  { id: 'lun', label: 'LUN', n: '26' },
  { id: 'mar', label: 'MAR', n: '27' },
  { id: 'mer', label: 'MER', n: '28' },
  { id: 'gio', label: 'GIO', n: '29' },
  { id: 'ven', label: 'VEN', n: '30' },
  { id: 'sab', label: 'SAB', n: '31' },
  { id: 'dom', label: 'DOM', n: '1' },
]

const ACTIONS = ['ANNULLA', 'MODIFICA', 'AGGIUNGI COMANDA']

export default function Prenotazioni({ data }) {
  const reservations = data.reservations
  return (
    <div data-screen="prenotazioni" className="flex h-full min-w-0">
      <section className="flex w-1/2 min-w-0 flex-col border-r border-[#27272A] bg-[#18181B]">
        <header className="border-b border-[#27272A] px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-[11px] font-semibold tracking-[0.12em] text-[#A1A1AA]">
              GESTORE PRENOTAZIONI
            </h1>
            <span className="rounded-lg bg-[#F97316] px-2.5 py-1 text-[11px] font-extrabold text-[#0B0B0C]">
              NUOVA
            </span>
          </div>
          <p className="mt-3 text-[14px] font-semibold text-[#FAFAFA]">Novembre 2026</p>
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {WEEK.map((item) => {
              const active = item.id === 'dom'
              return (
                <div
                  key={item.id}
                  className={`flex h-[72px] min-w-0 flex-col items-center justify-center rounded-[10px] border ${
                    active
                      ? 'border-[#F97316] bg-[#F97316]/10 text-[#F97316]'
                      : 'border-[#27272A] text-[#A1A1AA]'
                  }`}
                  style={active ? { borderWidth: 1.5 } : undefined}
                >
                  <span className="text-[10px] font-semibold tracking-wide">{item.label}</span>
                  <span className="mt-1 text-[16px] font-bold text-[#FAFAFA]">{item.n}</span>
                  {item.id === 'dom' && reservations.length ? (
                    <span className="mt-1 h-1 w-1 rounded-full bg-[#F97316]" />
                  ) : null}
                </div>
              )
            })}
          </div>
        </header>
        <div className="min-h-0 flex-1 space-y-2 overflow-auto p-4">
          {reservations.map((item) => (
            <article key={item.id} className="rounded-xl border border-[#27272A] bg-[#111113] p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[16px] font-extrabold tabular-nums leading-none text-[#F97316]">
                    {item.time}
                  </p>
                  <h2 className="mt-1 text-[15px] font-bold text-[#FAFAFA]">{item.name}</h2>
                </div>
                <span className="rounded-md bg-[#F97316]/15 px-2 py-1 text-[10px] font-bold tracking-wide text-[#F97316]">
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-[13px] text-[#A1A1AA]">
                {item.covers} persone · {item.phone}
              </p>
              <p className="mt-1 text-[12px] text-[#A1A1AA]">{item.tableNumbers.length} tavoli uniti</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-[#F97316]/40 bg-[#F97316]/15 px-2 py-1 text-[10px] font-extrabold tracking-wide text-[#F97316]">
                  CONFERMA
                </span>
                {ACTIONS.map((action) => (
                  <span
                    key={action}
                    className="rounded-lg border border-[#27272A] px-2 py-1 text-[10px] font-bold tracking-wide text-[#A1A1AA]"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="min-w-0 flex-1 bg-[#0E0E11]">
        <FloorPlan zones={data.zones} tables={data.tables} reservations={reservations} />
      </section>
    </div>
  )
}
