import { useEffect, useRef, useState } from 'react'
import { useMotionTier } from '../../hooks/useMotionTier'
import BackgroundGlow from '../layout/BackgroundGlow'
import { startLiquid } from './liquidRenderer'

export default function LiquidBackground() {
  const tier = useMotionTier()
  const canvasRef = useRef(null)
  const [failed, setFailed] = useState(false)
  const [ready, setReady] = useState(false)
  const useGl = tier === 'full' && !failed

  useEffect(() => {
    if (!useGl) return undefined
    const stop = startLiquid(canvasRef.current, () => setFailed(true))
    if (!stop) {
      setFailed(true)
      return undefined
    }
    setReady(true)
    return () => {
      stop()
      setReady(false)
    }
  }, [useGl])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {useGl ? (
          <canvas
            ref={canvasRef}
            className={`h-full w-full transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <BackgroundGlow drift={tier !== 'static'} />
        )}
      </div>
      <div className="grain pointer-events-none fixed inset-0 opacity-[0.035]" aria-hidden="true" />
    </>
  )
}
