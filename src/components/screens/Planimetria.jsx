import FloorPlan from '../floor/FloorPlan'

export default function Planimetria({ data }) {
  return (
    <div data-screen="planimetria" className="relative h-full overflow-hidden bg-[#0E0E11]">
      <div className="absolute inset-x-0 bottom-16 top-14">
        <FloorPlan zones={data.zones} tables={data.tables} reservations={data.reservations} />
      </div>
      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1 rounded-[10px] border border-os-line bg-os-low/90 p-1.5 shadow-lg">
        <span className="px-2.5 py-1.5 text-[12px] text-os-secondary">Modifica planimetria</span>
        <span className="px-2.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-os-text">
          RICENTRA VISTA
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 flex gap-1.5 rounded-[10px] border border-os-line bg-os-low/90 p-1.5 shadow-lg">
        {data.zones.map((zone) => (
          <span
            key={zone.id}
            className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-os-secondary"
          >
            {zone.name}
          </span>
        ))}
      </div>
    </div>
  )
}
