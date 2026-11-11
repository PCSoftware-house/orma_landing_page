import AboutHero from '../components/about/AboutHero'
import Ecosystem from '../components/about/Ecosystem'
import Principles from '../components/about/Principles'
import Team from '../components/about/Team'
import FinalCta from '../components/sections/FinalCta'
import { CONTACT } from '../data/about'
import { useSeo } from '../hooks/useSeo'

export default function AboutPage() {
  useSeo('/about')

  return (
    <>
      <AboutHero />
      <Principles />
      <Ecosystem />
      <Team />
      <FinalCta title={CONTACT.title} body={CONTACT.body} />
    </>
  )
}
