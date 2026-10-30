function chairCounts(capacity, width, height) {
  const wide = width >= height
  if (capacity <= 2) {
    return wide
      ? { top: 1, bottom: 1, left: 0, right: 0 }
      : { top: 0, bottom: 0, left: 1, right: 1 }
  }
  if (capacity <= 4) return { top: 1, right: 1, bottom: 1, left: 1 }
  const long = Math.ceil((capacity - 2) / 2)
  return wide
    ? { top: long, bottom: long, left: 1, right: 1 }
    : { top: 1, bottom: 1, left: long, right: long }
}

function Chairs({ width, height, capacity }) {
  const counts = chairCounts(capacity, width, height)
  const nodes = []

  function place(count, edge) {
    const along = edge === 'top' || edge === 'bottom' ? width : height
    const horizontal = edge === 'top' || edge === 'bottom'
    const chairWidth = horizontal ? 14 : 6
    const chairHeight = horizontal ? 6 : 14
    for (let index = 0; index < count; index += 1) {
      const offset = ((index + 1) / (count + 1)) * along
      const style = {
        position: 'absolute',
        width: chairWidth,
        height: chairHeight,
        borderRadius: 2,
        background: '#52525B',
      }
      if (edge === 'top') {
        style.left = offset - chairWidth / 2
        style.top = -chairHeight - 3
      }
      if (edge === 'bottom') {
        style.left = offset - chairWidth / 2
        style.bottom = -chairHeight - 3
      }
      if (edge === 'left') {
        style.top = offset - chairHeight / 2
        style.left = -chairWidth - 3
      }
      if (edge === 'right') {
        style.top = offset - chairHeight / 2
        style.right = -chairWidth - 3
      }
      nodes.push(<span key={`${edge}-${index}`} aria-hidden="true" style={style} />)
    }
  }

  place(counts.top, 'top')
  place(counts.bottom, 'bottom')
  place(counts.left, 'left')
  place(counts.right, 'right')
  return nodes
}

export default function DiningTable({
  number,
  capacity,
  width,
  height,
  occupied,
  reservation,
  style,
}) {
  const border = occupied ? '#EF4444' : '#22C55E'
  const fill = occupied ? 'rgba(239, 68, 68, 0.18)' : 'rgba(34, 197, 94, 0.12)'

  return (
    <div className="absolute" style={style}>
      <div className="relative" style={{ width, height }}>
        <Chairs width={width} height={height} capacity={capacity} />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-lg"
          style={{ border: `1.5px solid ${border}`, background: fill }}
        >
          <span className="text-[13px] font-extrabold leading-none text-os-text">{number}</span>
          <span className="mt-0.5 text-[8px] font-semibold leading-none text-os-secondary">
            {capacity} cop.
          </span>
        </div>
        {reservation ? (
          <div className="absolute -top-4 left-1/2 z-10 w-max max-w-[88px] -translate-x-1/2 rotate-6 rounded-[3px] bg-[#F97316] px-1 py-0.5 text-center text-[8px] font-bold leading-tight text-[#1A1208] shadow-md">
            {reservation}
          </div>
        ) : null}
      </div>
    </div>
  )
}
