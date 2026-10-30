import { Printer } from 'lucide-react'
import FloorPlan from '../floor/FloorPlan'
import { euro, isOccupied, queueOrders, taxOf } from '../../data/venue'

function Pill({ active, children }) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-2 py-1 text-center text-[10px] font-bold leading-tight ${
        active
          ? 'border border-os-accent bg-os-accent/15 text-os-accent'
          : 'text-os-secondary'
      }`}
    >
      {children}
    </span>
  )
}

function StatusBadge({ status }) {
  const ready = status === 'READY'
  return (
    <span
      className={`inline-flex rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.04em] ${
        ready ? 'bg-os-accent text-os-text' : 'bg-os-pending text-os-bg'
      }`}
    >
      {ready ? 'PARTITO' : status}
    </span>
  )
}

export default function Registratore({ data }) {
  const occupied = data.tables.filter(isOccupied).length
  const orders = queueOrders(data.active_orders)
  const selected = orders.find((order) => order.status === 'READY') ?? orders[0]
  const tax = selected ? taxOf(selected.total) : null

  return (
    <div data-screen="registratore" className="flex h-full min-w-0 gap-4 p-4">
      <section className="relative flex w-1/2 min-w-0 flex-col border border-os-line bg-[#121215]">
        <header className="flex h-11 shrink-0 items-center gap-2 px-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-os-free" />
          <span className="text-[11px] font-semibold tracking-[0.14em] text-os-secondary">
            PLANIMETRIA SALA
          </span>
          <span className="ml-auto text-[12px] text-os-muted">
            Tavoli occupati: {occupied}/{data.tables.length}
          </span>
        </header>
        <div className="min-h-0 flex-1">
          <FloorPlan zones={data.zones} tables={data.tables} reservations={data.reservations} />
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-lg border border-os-line bg-os-surface px-3 py-2 text-[12px] font-medium text-os-text shadow-lg">
          Apri planimetria
        </div>
      </section>

      <section className="flex w-1/4 min-w-0 flex-col border border-os-line bg-os-surface">
        <header className="flex h-11 shrink-0 items-center gap-1.5 border-b border-os-line px-3">
          <Pill>Solo da incassare</Pill>
          <Pill active>Tutti</Pill>
        </header>
        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-3">
          {orders.map((order) => {
            const active = order.id === selected?.id
            return (
              <article
                key={order.id}
                className={`rounded-xl bg-os-low p-3 ${
                  active ? 'border-2 border-white' : 'border border-os-line'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[14px] font-extrabold text-os-text">{order.table_name}</span>
                  <span className="text-[13px] font-bold tabular-nums text-os-text">
                    {euro(order.total)}
                  </span>
                </div>
                <p className="mt-1 text-[12px] tabular-nums text-os-secondary">
                  {order.time} · {order.waiter_name}
                </p>
                <div className="mt-2">
                  <StatusBadge status={order.status} />
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="flex w-1/4 min-w-0 flex-col overflow-hidden rounded-xl border border-os-line bg-os-surface">
        <header className="flex h-11 shrink-0 items-center gap-1.5 border-b border-os-line px-2">
          <Pill active>Pre-conto</Pill>
          <Pill>Scontrino fiscale</Pill>
        </header>
        {selected && tax ? (
          <>
            <div className="border-b border-os-line bg-os-low px-3 py-3">
              <div className="flex items-center justify-between gap-2">
                <h2 className="truncate text-[16px] font-bold text-os-text">{selected.table_name}</h2>
                <span className="shrink-0 rounded bg-os-reservation/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-os-reservation">
                  PRE-CONTO
                </span>
              </div>
              <p className="mt-1 text-[12px] tabular-nums text-os-secondary">
                {selected.time} · {selected.waiter_name}
              </p>
            </div>
            <ul className="min-h-0 flex-1 overflow-auto">
              {selected.items.map((item) => (
                <li key={`${selected.id}-${item.menu_item_id}`} className="border-b border-os-line px-3 py-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex min-w-0 items-start gap-2">
                      <span className="rounded bg-os-high px-1.5 py-0.5 text-[11px] font-bold tabular-nums text-os-text">
                        {item.quantity}x
                      </span>
                      <span className="min-w-0 text-[13px] text-os-text">{item.name}</span>
                    </div>
                    <span className="shrink-0 text-[13px] tabular-nums text-os-secondary">
                      {euro(item.line_total)}
                    </span>
                  </div>
                  {item.notes ? (
                    <p className="mt-1 pl-8 text-[12px] italic text-os-reservation">{item.notes}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <footer className="shrink-0 border-t border-os-line bg-os-low px-3 py-3">
              <div className="flex items-center justify-between text-[12px] text-os-secondary">
                <span>Imponibile (10%)</span>
                <span className="tabular-nums">{euro(tax.net)}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[12px] text-os-secondary">
                <span>IVA (10%)</span>
                <span className="tabular-nums">{euro(tax.vat)}</span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-[16px] font-bold text-os-text">TOTALE</span>
                <span className="text-[22px] font-extrabold leading-none tabular-nums text-[#10B981]">
                  {euro(selected.total)}
                </span>
              </div>
              <div className="mt-3 flex h-10 items-center justify-center gap-2 rounded-lg border border-os-line text-[13px] font-bold text-os-text">
                <Printer size={14} strokeWidth={1.75} />
                Stampa Pre-conto
              </div>
            </footer>
          </>
        ) : null}
      </section>
    </div>
  )
}
