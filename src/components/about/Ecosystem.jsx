import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { ECOSYSTEM, ECOSYSTEM_INTRO } from '../../data/about'
import GlassCard from '../ui/GlassCard'
import { LogoMark } from '../ui/Logo'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Ecosystem() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <SectionHeading {...ECOSYSTEM_INTRO} />
      </Reveal>
      <div className="grid items-stretch gap-4 md:grid-cols-3">
        {ECOSYSTEM.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.id} delay={index * 80} className="h-full">
              <GlassCard as={Link} to={item.to} interactive className="group flex h-full flex-col p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-elevate text-ink">
                  {Icon ? <Icon size={18} strokeWidth={1.5} aria-hidden="true" /> : <LogoMark />}
                </span>
                <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.02em] text-ink">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.body}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-[13px] font-medium text-muted transition group-hover:text-ink">
                  {item.cta}
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
