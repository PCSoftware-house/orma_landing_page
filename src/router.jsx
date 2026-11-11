import { createBrowserRouter } from 'react-router'
import BackgroundGlow from './components/layout/BackgroundGlow'
import SiteLayout from './layouts/SiteLayout'
import OrmaLandingPage from './pages/OrmaLandingPage'

const lazyPage = (load) => async () => ({ Component: (await load()).default })

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SiteLayout,
    HydrateFallback: BackgroundGlow,
    children: [
      { index: true, Component: OrmaLandingPage },
      { path: '*', lazy: lazyPage(() => import('./pages/NotFoundPage')) },
    ],
  },
])
