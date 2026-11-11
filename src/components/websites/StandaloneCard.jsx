import { Unlink } from 'lucide-react'
import { STANDALONE } from '../../data/websites'
import GlassCard from '../ui/GlassCard'
import Reveal from '../ui/Reveal'

export default function StandaloneCard() {
  return (
    // Segue "Un solo dato, ovunque": si avvicina alla sezione sopra per leggersi come sua nota.
    <section className="mx-auto -mt-16 max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <GlassCard className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-elevate text-neon">
            <Unlink size={18} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">{STANDALONE.badge}</p>
            <h2 className="mt-2 text-[17px] font-semibold tracking-[-0.02em] text-ink">{STANDALONE.title}</h2>
            <p className="mt-1.5 max-w-3xl text-[14px] leading-relaxed text-muted">{STANDALONE.body}</p>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  )
}
