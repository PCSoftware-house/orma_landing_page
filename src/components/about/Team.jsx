import { Mail } from 'lucide-react'
import { CONTACTS } from '../../config/site'
import { TEAM_INTRO } from '../../data/about'
import GlassCard from '../ui/GlassCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Team() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <SectionHeading {...TEAM_INTRO} />
      </Reveal>
      <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
        {CONTACTS.map((person, index) => (
          <Reveal key={person.name} delay={index * 80}>
            <GlassCard className="flex items-center gap-4 p-5">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-elevate text-[16px] font-medium text-ink"
              >
                {person.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-medium text-ink">{person.name}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink"
                >
                  <Mail size={13} strokeWidth={1.75} aria-hidden="true" />
                  {person.email}
                </a>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
