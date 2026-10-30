import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'orma_cookie_consent'
const GA_MEASUREMENT_ID = 'G-J3NG91KYT9'

function ensureGtag() {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
  }
}

function loadAnalytics() {
  ensureGtag()
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
  if (!document.querySelector('script[data-orma-ga]')) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.dataset.ormaGa = GA_MEASUREMENT_ID
    document.head.appendChild(script)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [nudge, setNudge] = useState(false)
  const nudgeTimer = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'granted') loadAnalytics()
    else if (stored !== 'denied') setVisible(true)

    function open() {
      setVisible(true)
    }
    window.addEventListener('open-cookie-settings', open)
    return () => window.removeEventListener('open-cookie-settings', open)
  }, [])

  useEffect(() => {
    if (!visible) return undefined
    const html = document.documentElement
    const body = document.body
    const previousHtml = html.style.overflow
    const previousBody = body.style.overflow
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    function flash() {
      setNudge(true)
      clearTimeout(nudgeTimer.current)
      nudgeTimer.current = setTimeout(() => setNudge(false), 900)
    }
    function blockScroll(event) {
      event.preventDefault()
      flash()
    }
    function blockKeys(event) {
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
      if (!keys.includes(event.key)) return
      event.preventDefault()
      flash()
    }
    window.addEventListener('wheel', blockScroll, { passive: false })
    window.addEventListener('touchmove', blockScroll, { passive: false })
    window.addEventListener('keydown', blockKeys)
    return () => {
      html.style.overflow = previousHtml
      body.style.overflow = previousBody
      window.removeEventListener('wheel', blockScroll)
      window.removeEventListener('touchmove', blockScroll)
      window.removeEventListener('keydown', blockKeys)
      clearTimeout(nudgeTimer.current)
    }
  }, [visible])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    loadAnalytics()
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'denied' })
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className={`fixed bottom-4 left-1/2 z-[70] w-[min(28rem,calc(100%-2rem))] -translate-x-1/2 rounded-2xl border bg-[#0B0B0C] p-5 transition duration-200 ${
        nudge
          ? 'border-[#5C80BC] shadow-[0_0_0_4px_rgba(92,128,188,0.45),0_24px_80px_rgba(0,0,0,0.45)]'
          : 'border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]'
      }`}
      aria-label="Informativa cookie"
    >
      <p className="text-[14px] font-medium tracking-[-0.02em] text-ink">Informativa Privacy &amp; Cookie</p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        Utilizziamo cookie tecnici essenziali e cookie analitici anonimi per analizzare il traffico e
        migliorare l&apos;esperienza su Orma.
      </p>
      {nudge ? (
        <p className="mt-3 text-[12px] font-medium text-[#FAFAFA]">Scegli un&apos;opzione per scorrere il sito.</p>
      ) : null}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button type="button" className="btn-primary !h-10 flex-1 !px-4" onClick={accept}>
          Accetta tutti
        </button>
        <button type="button" className="btn-secondary !h-10 flex-1 !px-4" onClick={reject}>
          Solo essenziali
        </button>
      </div>
    </aside>
  )
}
