import FaqSection from '../components/sections/FaqSection'
import FinalCta from '../components/sections/FinalCta'
import ClientsSection from '../components/websites/ClientsSection'
import PillarsGrid from '../components/websites/PillarsGrid'
import ProcessSteps from '../components/websites/ProcessSteps'
import StandaloneCard from '../components/websites/StandaloneCard'
import SyncFlow from '../components/websites/SyncFlow'
import WebsitesHero from '../components/websites/WebsitesHero'
import { CONTACT, FAQ } from '../data/websites'
import { useSeo } from '../hooks/useSeo'

export default function WebsitesPage() {
  useSeo('/websites')

  return (
    <>
      <WebsitesHero />
      <PillarsGrid />
      <SyncFlow />
      <StandaloneCard />
      <ProcessSteps />
      <ClientsSection />
      <FaqSection title={FAQ.title} items={FAQ.items} />
      <FinalCta title={CONTACT.title} body={CONTACT.body} />
    </>
  )
}
