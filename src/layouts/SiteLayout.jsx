import { Outlet, ScrollRestoration } from 'react-router'
import BackgroundGlow from '../components/layout/BackgroundGlow'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import CookieBanner from '../components/legal/CookieBanner'

export default function SiteLayout() {
  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
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
