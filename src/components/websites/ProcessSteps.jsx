import { PROCESS, PROCESS_INTRO } from '../../data/websites'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <SectionHeading {...PROCESS_INTRO} />
      </Reveal>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delay={index * 80}
            className="relative rounded-xl border border-line bg-surface/60 p-5"
          >
            <span className="text-[12px] font-medium tabular-nums text-faint">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
