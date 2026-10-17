import { useEffect, useRef } from 'react'
import { createSignalFlow, type FlowSettings, type SignalFlow } from './signal-flow'
import './background.css'

/** Align the original V2 line convergence with the content column. */
export type ContentLayout = 'sidebar-expanded' | 'sidebar-collapsed' | 'full-width'
const SETTINGS: FlowSettings = { strength: 0.8, speed: 1, calm: true }
const CENTER_EASE = 0.08
const BACKGROUND_DELAY_MS = 600

function readColors() {
  const css = getComputedStyle(document.documentElement)
  return { accent: css.getPropertyValue('--accent'), deep: css.getPropertyValue('--accent-deep') }
}

function contentCenter(layout: ContentLayout, viewportWidth: number): number {
  if (layout === 'full-width') return viewportWidth / 2
  const css = getComputedStyle(document.documentElement)
  const px = (name: string) => parseFloat(css.getPropertyValue(name))
  const sidebar = px('--sidebar-w')
  const pad = sidebar + 2 * px('--sidebar-gap')
  const shift = layout === 'sidebar-collapsed' ? (px('--rail-w') - sidebar) / 2 : 0
  return pad + (viewportWidth - pad) / 2 + shift
}

/** Original V2 flowing lines. Static import also keeps the offline preview self-contained. */
export function SignalFlowBackground({ layout }: { layout: ContentLayout }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const layoutRef = useRef(layout)
  const redrawRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    layoutRef.current = layout
    redrawRef.current?.()
  }, [layout])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let flow: SignalFlow | null = null
    let frame = 0
    let cancelled = false
    let center = 0
    let idleId = 0
    let timer = 0
    const cleanups: (() => void)[] = []

    const draw = (now: number) => {
      if (!flow) return
      const target = contentCenter(layoutRef.current, window.innerWidth)
      center += (target - center) * (motion.matches ? 1 : CENTER_EASE)
      flow.setCenter(center)
      flow.render(now / 1000)
    }
    const loop = (now: number) => {
      draw(now)
      frame = requestAnimationFrame(loop)
    }
    const resume = () => {
      cancelAnimationFrame(frame)
      draw(motion.matches ? 40_000 : performance.now())
      if (!motion.matches && !document.hidden) frame = requestAnimationFrame(loop)
    }
    const start = () => {
      if (cancelled) return
      center = contentCenter(layoutRef.current, window.innerWidth)
      // Unsupported WebGL must never prevent the portfolio itself from opening.
      try { flow = createSignalFlow(canvas, readColors(), SETTINGS) } catch { return }
      const resize = () => {
        flow?.resize(window.innerWidth, window.innerHeight)
        if (motion.matches) draw(40_000)
      }
      resize()
      window.addEventListener('resize', resize)
      motion.addEventListener('change', resume)
      document.addEventListener('visibilitychange', resume)
      cleanups.push(() => {
        window.removeEventListener('resize', resize)
        motion.removeEventListener('change', resume)
        document.removeEventListener('visibilitychange', resume)
      })
      const themeObserver = new MutationObserver(() => {
        flow?.setColors(readColors())
        if (motion.matches) draw(40_000)
      })
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
      cleanups.push(() => themeObserver.disconnect())
      redrawRef.current = () => { if (motion.matches) draw(40_000) }
      resume()
      canvas.dataset.ready = 'true'
    }

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200))
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout
    const WAKE_EVENTS = ['pointermove', 'pointerdown', 'touchstart', 'wheel', 'keydown', 'scroll'] as const
    const unlisten = () => {
      WAKE_EVENTS.forEach((type) => window.removeEventListener(type, wake))
      window.removeEventListener('load', armTimer)
      window.clearTimeout(timer)
    }
    const wake = () => {
      if (idleId) return
      unlisten()
      idleId = idle(start)
    }
    const armTimer = () => { timer = window.setTimeout(wake, BACKGROUND_DELAY_MS) }
    WAKE_EVENTS.forEach((type) => window.addEventListener(type, wake, { passive: true, once: true }))
    if (document.readyState === 'complete') armTimer()
    else window.addEventListener('load', armTimer, { once: true })

    return () => {
      cancelled = true
      unlisten()
      if (idleId) cancelIdle(idleId)
      cancelAnimationFrame(frame)
      cleanups.forEach((cleanup) => cleanup())
      redrawRef.current = null
      flow?.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="app-bg" aria-hidden="true" />
}
