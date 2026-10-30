import { useLayoutEffect, useRef, useState } from 'react'
import DiningTable from './DiningTable'
import { floorBounds, isOccupied, tableOrigin, tableSize } from '../../data/venue'

function tableCenter(table, zones) {
  const origin = tableOrigin(table, zones)
  const size = tableSize(table)
  return { x: origin.left + size.width / 2, y: origin.top + size.height / 2 }
}

export default function FloorPlan({ zones, tables, reservations = [] }) {
  const frame = useRef(null)
  const bounds = floorBounds(zones)
  const [scale, setScale] = useState(null)

  useLayoutEffect(() => {
    const node = frame.current
    if (!node) return undefined
    const measure = () => {
      const { width, height } = node.getBoundingClientRect()
      if (!width || !height) return
      setScale(Math.min(width / bounds.width, height / bounds.height))
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [bounds.width, bounds.height])

  return (
    <div ref={frame} className="relative h-full w-full overflow-hidden bg-[#0E0E11]">
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: bounds.width,
          height: bounds.height,
          visibility: scale ? 'visible' : 'hidden',
          transform: `translate(-50%, -50%) scale(${scale ?? 1})`,
        }}
      >
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="absolute border border-[#27272A]"
            style={{
              left: zone.pos_x,
              top: zone.pos_y,
              width: zone.width,
              height: zone.height,
            }}
          >
            <span className="absolute left-2 top-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#A1A1AA]">
              {zone.name}
            </span>
          </div>
        ))}
        <svg
          className="pointer-events-none absolute inset-0"
          width={bounds.width}
          height={bounds.height}
          aria-hidden="true"
        >
          {reservations.map((reservation) => {
            const numbers = reservation.tableNumbers ?? []
            const points = numbers
              .map((number) => tables.find((table) => table.table_number === number))
              .filter(Boolean)
              .map((table) => {
                const center = tableCenter(table, zones)
                return `${center.x},${center.y}`
              })
            if (points.length < 2) return null
            return (
              <polyline
                key={reservation.id}
                points={points.join(' ')}
                fill="none"
                stroke="#F97316"
                strokeWidth="2.5"
                strokeDasharray="8 5"
                strokeLinejoin="round"
                strokeLinecap="butt"
              />
            )
          })}
        </svg>
        {tables.map((table) => {
          const origin = tableOrigin(table, zones)
          const size = tableSize(table)
          const note = reservations.find(
            (item) =>
              item.table_id === table.id || item.tableNumbers?.includes(table.table_number),
          )
          return (
            <DiningTable
              key={table.id}
              number={table.table_number}
              capacity={table.capacity}
              width={size.width}
              height={size.height}
              occupied={isOccupied(table)}
              reservation={note ? `${note.time} ${note.name}` : undefined}
              style={{ left: origin.left, top: origin.top }}
            />
          )
        })}
      </div>
    </div>
  )
}
