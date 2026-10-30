export function euro(value) {
  const formatted = Number(value).toLocaleString('it-IT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return `€ ${formatted}`
}

export function isOccupied(table) {
  return table.status !== 'libero'
}

export function floorBounds(zones) {
  let width = 0
  let height = 0
  for (const zone of zones) {
    width = Math.max(width, zone.pos_x + zone.width)
    height = Math.max(height, zone.pos_y + zone.height)
  }
  return { width: width + 16, height: height + 16 }
}

export function tableOrigin(table, zones) {
  const zone = zones.find((item) => item.id === table.zone_id)
  return {
    left: (zone?.pos_x ?? 0) + table.pos_x,
    top: (zone?.pos_y ?? 0) + table.pos_y,
  }
}

export function tableSize(table) {
  const turned = table.rotation === 90 || table.rotation === 270
  return {
    width: turned ? table.height : table.width,
    height: turned ? table.width : table.height,
  }
}

export function taxOf(total) {
  const net = Math.round((total / 1.1) * 100) / 100
  const vat = Math.round((total - net) * 100) / 100
  return { net, vat }
}

export function queueOrders(orders) {
  const rank = { READY: 0, PENDING: 1 }
  return [...orders].sort((a, b) => (rank[a.status] ?? 9) - (rank[b.status] ?? 9))
}
