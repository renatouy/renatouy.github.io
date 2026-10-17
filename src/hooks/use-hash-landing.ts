import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router'
import { scrollToSection } from '@/lib/motion/smooth-scroll'

/** Wait for fonts before landing a direct Home section link, including in the offline hash router. */
export function useHashLanding() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()
  useEffect(() => {
    if (pathname !== '/' || !hash) return
    // Back/forward uses the router's saved scroll position rather than resetting a long section.
    if (navigationType === 'POP' && key !== 'default') return
    let id: string
    try { id = decodeURIComponent(hash.slice(1)) } catch { return }
    let cancelled = false
    let frame = 0
    const land = () => {
      if (!cancelled) frame = requestAnimationFrame(() => scrollToSection(id, { instant: true }))
    }
    if (document.fonts) void document.fonts.ready.then(land)
    else land()
    return () => { cancelled = true; cancelAnimationFrame(frame) }
  }, [pathname, hash, key, navigationType])
}
