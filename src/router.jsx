import { createBrowserRouter } from 'react-router'
import BackgroundGlow from './components/layout/BackgroundGlow'
import SiteLayout from './layouts/SiteLayout'
import OrmaLandingPage from './pages/OrmaLandingPage'

const lazyPage = (load) => async () => ({ Component: (await load()).default })

function RouteFallback() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <BackgroundGlow />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SiteLayout,
    HydrateFallback: RouteFallback,
    children: [
      { index: true, Component: OrmaLandingPage },
      { path: '*', lazy: lazyPage(() => import('./pages/NotFoundPage')) },
    ],
  },
])
