import { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation, useNavigationType } from 'react-router'
import LiquidBackground from '../components/background/LiquidBackground'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import CookieBanner from '../components/legal/CookieBanner'
import { useMotionTier } from '../hooks/useMotionTier'

// Rimontato a ogni cambio di pathname: l'animazione d'ingresso si decide al montaggio,
// così i link ad ancore sulla stessa pagina non la riattivano.
function RouteView() {
  const navigationType = useNavigationType()
  const [animate] = useState(navigationType !== 'POP')
  return (
    <div className={animate ? 'page-enter' : undefined}>
      <Outlet />
    </div>
  )
}

export default function SiteLayout() {
  const tier = useMotionTier()
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.dataset.motion = tier
  }, [tier])

  return (
    <div className="relative isolate min-h-screen">
      <LiquidBackground />
      <Navbar />
      <main id="contenuto" tabIndex={-1} className="outline-none">
        <RouteView key={pathname} />
      </main>
      <Footer />
      <CookieBanner />
      <ScrollRestoration storageKey="orma-scroll" />
    </div>
  )
}
