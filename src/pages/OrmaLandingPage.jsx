import FeatureGrid from '../components/features/FeatureGrid'
import HeroSection from '../components/hero/HeroSection'
import ComparisonSection from '../components/sections/ComparisonSection'
import FaqSection from '../components/sections/FaqSection'
import FinalCta from '../components/sections/FinalCta'
import { SavingsSection } from '../components/sections/ROIWidget'

export default function OrmaLandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <ComparisonSection />
      <SavingsSection />
      <FaqSection />
      <FinalCta />
    </>
  )
}
