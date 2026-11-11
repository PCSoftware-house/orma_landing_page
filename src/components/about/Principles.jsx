import { PRINCIPLES, PRINCIPLES_INTRO } from '../../data/about'
import GlassCard from '../ui/GlassCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Principles() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <SectionHeading {...PRINCIPLES_INTRO} />
      </Reveal>
      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {PRINCIPLES.map((principle, index) => {
          const Icon = principle.icon
          return (
            <Reveal key={principle.title} delay={index * 80} className="h-full">
              <GlassCard interactive className="h-full p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-elevate text-ink">
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.02em] text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{principle.body}</p>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
