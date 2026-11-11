import { ArrowUpRight } from 'lucide-react'
import { CLIENTS, CLIENTS_INTRO } from '../../data/websites'
import GlassCard from '../ui/GlassCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function ClientsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <SectionHeading {...CLIENTS_INTRO} />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CLIENTS.map((client, index) => (
          <Reveal key={client.name} delay={index * 80} className="h-full">
            <GlassCard
              as="a"
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              interactive
              className="group flex h-full flex-col items-center px-6 pb-6 pt-9 text-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                width={311}
                height={128}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto opacity-90 transition group-hover:opacity-100"
              />
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                {client.sector}
              </p>
              {client.description ? (
                <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-muted">{client.description}</p>
              ) : null}
              <span className="mt-auto inline-flex pt-5 items-center gap-1 text-[13px] font-medium text-muted transition group-hover:text-ink">
                Visita il sito
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </span>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
