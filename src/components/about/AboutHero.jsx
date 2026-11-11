import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { HERO } from '../../data/about'
import Eyebrow from '../ui/Eyebrow'

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 pt-36 sm:px-6 sm:pt-44">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Eyebrow>{HERO.eyebrow}</Eyebrow>
        <h1 className="text-gradient mt-6 text-balance pb-2 text-4xl font-medium leading-[1.15] tracking-[-0.045em] sm:text-5xl lg:text-[3.25rem]">
          {HERO.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
          {HERO.body}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <Link to="/about#contatti" className="btn-primary group !h-10 !px-4">
            Parliamone
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="text-muted transition group-hover:translate-x-0.5 group-hover:text-ink"
            />
          </Link>
          <Link to="/" className="btn-secondary !h-10 !px-4">
            Scopri Orma
          </Link>
        </div>
      </div>
    </section>
  )
}
