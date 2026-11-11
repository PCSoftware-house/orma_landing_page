import { PILLARS, PILLARS_INTRO } from '../../data/websites'
import GlassCard from '../ui/GlassCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function PillarsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <SectionHeading {...PILLARS_INTRO} />
      </Reveal>
      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {PILLARS.map((pillar, index) => {
          const Icon = pillar.icon
          return (
            <Reveal key={pillar.title} delay={index * 80} className="h-full">
              <GlassCard interactive className="h-full p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-elevate text-ink">
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.02em] text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{pillar.body}</p>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
