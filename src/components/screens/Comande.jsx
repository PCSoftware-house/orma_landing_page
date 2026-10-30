function Screw() {
  return <span className="h-1.5 w-1.5 rounded-full bg-[#6E7267] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
}

function Ticket({ order, tone }) {
  const pending = tone === 'pending'
  const accent = pending ? '#E8C547' : '#10B981'
  const action = pending ? 'PRONTO' : 'PARTITO'
  const actionColor = pending ? '#F59E0B' : '#10B981'

  return (
    <article className="rounded-lg border border-[#27272A] bg-[#18181B]">
      <header className="flex items-start justify-between gap-2 px-3.5 pb-2 pt-3">
        <div>
          <h3 className="text-[20px] font-extrabold leading-none text-os-text">{order.table_name}</h3>
          <p className="mt-1 text-[12px] tabular-nums text-os-secondary">
            {order.time} · {order.waiter_name}
          </p>
        </div>
        <span
          className="rounded-full border border-[#27272A] bg-[#111113] px-2 py-0.5 text-[10px] font-bold tracking-[0.04em]"
          style={{ color: accent }}
        >
          {order.status}
        </span>
      </header>
      <ul>
        {order.items.map((item) => {
          const done = item.status === 'READY'
          return (
            <li
              key={item.menu_item_id}
              className="flex items-start gap-2 border-t border-os-line px-3.5 py-2"
            >
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border text-[10px] ${
                  done ? 'border-os-ready bg-os-ready text-os-bg' : 'border-os-line'
                }`}
              >
                {done ? '✓' : ''}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="rounded bg-os-high px-1.5 py-0.5 text-[11px] font-bold tabular-nums text-os-text">
                    {item.quantity}x
                  </span>
                  <span className={`text-[13px] ${done ? 'text-os-secondary line-through' : 'text-os-text'}`}>
                    {item.name}
                  </span>
                </span>
                {item.notes ? (
                  <span className="mt-0.5 block pl-8 text-[12px] italic text-[#F97316]">{item.notes}</span>
                ) : null}
              </span>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-end px-3 pb-3 pt-2">
        <div
          className="rounded-full px-4 py-2 text-[12px] font-extrabold tracking-[0.08em]"
          style={{
            color: actionColor,
            background: `${actionColor}24`,
            border: `1px solid ${actionColor}59`,
          }}
        >
          {action}
        </div>
      </div>
    </article>
  )
}

function Column({ title, tone, orders }) {
  const pending = tone === 'pending'
  const accent = pending ? '#E8C547' : '#10B981'
  return (
    <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-[#27272A] bg-[#18181B]">
      <div className="flex h-4 items-center justify-between rounded-t-lg bg-gradient-to-r from-[#A1A1AA] via-[#A8AC9F] to-[#8D9185] px-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
        <Screw />
        <Screw />
      </div>
      <header className="flex items-center gap-2 px-3 py-2.5">
        <span className="h-1.5 w-1.5 shrink-0" style={{ background: accent }} />
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#A1A1AA]">{title}</h2>
        <span className="ml-auto text-[11px] tabular-nums text-[#71717A]">{orders.length}</span>
      </header>
      <div className="min-h-0 flex-1 space-y-3 overflow-auto px-3 pb-3">
        {orders.length === 0 ? (
          <p className="px-1 text-[13px] text-os-muted">
            {pending ? 'Niente in lavorazione' : 'Nessuna comanda pronta'}
          </p>
        ) : (
          orders.map((order) => <Ticket key={order.id} order={order} tone={tone} />)
        )}
      </div>
    </section>
  )
}

export default function Comande({ data }) {
  const pending = data.active_orders.filter((order) => order.status === 'PENDING')
  const ready = data.active_orders.filter((order) => order.status === 'READY')

  return (
    <div data-screen="comande" className="grid h-full min-w-0 grid-cols-2 gap-4 bg-[#0E0E11] p-4">
      <Column title="COMANDE DA FARE" tone="pending" orders={pending} />
      <Column title="COMANDE PRONTE" tone="ready" orders={ready} />
    </div>
  )
}
