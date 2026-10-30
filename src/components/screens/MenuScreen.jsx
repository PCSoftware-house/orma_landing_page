import { euro } from '../../data/venue'

export default function MenuScreen({ data }) {
  const categories = [...data.menu.categories].sort((a, b) => a.display_order - b.display_order)

  return (
    <div data-screen="menu" className="flex h-full flex-col">
      <header className="border-b border-os-line px-5 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[11px] font-semibold tracking-[0.12em] text-os-secondary">MENU</h1>
          <span className="text-[18px] font-extrabold leading-none text-os-reservation">+</span>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {['TUTTI', ...categories.map((category) => category.name)].map((name, index) => (
            <span
              key={name}
              className={`shrink-0 rounded-full px-3 py-1 text-[12px] font-bold tracking-[0.08em] ${
                index === 0 ? 'bg-os-high text-os-text' : 'text-os-secondary'
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </header>
      <div className="min-h-0 flex-1 space-y-3 overflow-auto p-4">
        {categories.map((category) => (
          <section key={category.id} className="overflow-hidden border border-os-line">
            <div className="flex h-11 items-center bg-os-low px-4">
              <span className="text-[12px] font-bold tracking-[0.12em] text-os-secondary">
                {category.name}
              </span>
            </div>
            {category.items.map((item) => (
              <div
                key={item.id}
                className="flex h-[52px] items-center gap-3 border-t border-os-line bg-[#1C1C20] px-4"
              >
                <span
                  className={`min-w-0 flex-1 truncate text-[14px] font-semibold ${
                    item.is_available ? 'text-os-text' : 'text-os-secondary line-through'
                  }`}
                >
                  {item.name}
                </span>
                {item.is_available ? null : (
                  <span className="rounded border border-os-cancelled/70 bg-os-cancelled/15 px-1.5 py-0.5 text-[9px] font-extrabold tracking-wide text-os-cancelled">
                    ESAURITO
                  </span>
                )}
                <span className="w-16 text-right text-[14px] tabular-nums text-os-secondary">
                  {euro(item.price)}
                </span>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
