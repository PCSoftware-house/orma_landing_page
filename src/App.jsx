import CookieBanner from './components/legal/CookieBanner'
import BackgroundGlow from './components/layout/BackgroundGlow'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import FeatureGrid from './components/features/FeatureGrid'
import HeroSection from './components/hero/HeroSection'
import ComparisonSection from './components/sections/ComparisonSection'
import FaqSection from './components/sections/FaqSection'
import FinalCta from './components/sections/FinalCta'
import { SavingsSection } from './components/sections/ROIWidget'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <ComparisonSection />
        <SavingsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
