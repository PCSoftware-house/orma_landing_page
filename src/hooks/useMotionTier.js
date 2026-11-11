import { useSyncExternalStore } from 'react'

const REDUCED = '(prefers-reduced-motion: reduce)'
const SMALL = '(max-width: 767px)'
const COARSE = '(pointer: coarse)'
const TIERS = ['static', 'lite', 'full']

function read() {
  const forced = new URLSearchParams(window.location.search).get('motion')
  if (TIERS.includes(forced)) return forced
  const matches = (query) => window.matchMedia(query).matches
  if (matches(REDUCED) || navigator.connection?.saveData) return 'static'
  if (matches(SMALL) || matches(COARSE)) return 'lite'
  return 'full'
}

function subscribe(onChange) {
  const lists = [REDUCED, SMALL, COARSE].map((query) => window.matchMedia(query))
  lists.forEach((list) => list.addEventListener('change', onChange))
  return () => lists.forEach((list) => list.removeEventListener('change', onChange))
}

export function useMotionTier() {
  return useSyncExternalStore(subscribe, read, () => 'static')
}
