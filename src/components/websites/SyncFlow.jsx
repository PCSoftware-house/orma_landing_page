import { Fragment } from 'react'
import { SYNC } from '../../data/websites'
import GlassCard from '../ui/GlassCard'
import { LogoMark } from '../ui/Logo'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Node({ node }) {
  const Icon = node.icon
  const isHub = node.id === 'orma'
  return (
    <div className="flex flex-col items-center text-center md:w-44">
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-2xl border bg-elevate text-ink ${
          isHub ? 'border-accent/50 shadow-[0_0_32px] shadow-accent/30' : 'border-line'
        }`}
      >
        {Icon ? <Icon size={20} strokeWidth={1.5} aria-hidden="true" /> : <LogoMark className="h-6 w-6" />}
      </span>
      <p className="mt-3 text-[14px] font-medium text-ink">{node.label}</p>
      <p className="mt-1 text-[12px] text-muted">{node.detail}</p>
    </div>
  )
}

export default function SyncFlow() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <Reveal>
        <SectionHeading eyebrow={SYNC.eyebrow} title={SYNC.title} body={SYNC.body} />
      </Reveal>
      <Reveal delay={80}>
        <GlassCard className="px-6 py-10 sm:px-10">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center">
            {SYNC.nodes.map((node, index) => (
              <Fragment key={node.id}>
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="sync-line my-3 h-10 w-px md:mx-2 md:mb-0 md:mt-7 md:h-px md:max-w-[9rem] md:flex-1"
                  />
                ) : null}
                <Node node={node} />
              </Fragment>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl border-t border-line pt-6 text-center text-[14px] leading-relaxed text-muted">
            {SYNC.caption}
          </p>
        </GlassCard>
      </Reveal>
    </section>
  )
}
