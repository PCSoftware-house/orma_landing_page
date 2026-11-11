import { useEffect } from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import LiquidBackground from '../components/background/LiquidBackground'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import CookieBanner from '../components/legal/CookieBanner'
import { useMotionTier } from '../hooks/useMotionTier'

export default function SiteLayout() {
  const tier = useMotionTier()

  useEffect(() => {
    document.documentElement.dataset.motion = tier
  }, [tier])

  return (
    <div className="relative isolate min-h-screen">
      <LiquidBackground />
      <Navbar />
      <main id="contenuto" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <ScrollRestoration storageKey="orma-scroll" />
    </div>
  )
}
