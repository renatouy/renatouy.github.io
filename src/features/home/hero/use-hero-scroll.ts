import { useEffect, type RefObject } from 'react'

/** The original parting/sinking exit, driven by native scroll without changing routes. */
export function useHeroScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let last = -1
    const clamp = (value: number) => Math.min(1, Math.max(0, value))
    const update = () => {
      frame = 0
      const bounds = root.getBoundingClientRect()
      const bar = window.innerWidth < 1024 ? 56 : 0
      const progress = motion.matches ? 0 : clamp((bar - bounds.top) / Math.max(1, bounds.height))
      if (progress === last) return
      last = progress
      root.style.setProperty('--hero-sink', `${progress * 38}vh`)
      root.style.setProperty('--hero-scale', String(1 - progress * 0.1))
      root.style.setProperty('--hero-opacity', String(1 - clamp((progress - 0.3) / 0.55)))
      root.style.setProperty('--hero-thin-x', `${progress * -7}%`)
      root.style.setProperty('--hero-bold-x', `${progress * 5}%`)
      root.style.setProperty('--hero-foot-y', `${clamp(progress / 0.35) * -60}px`)
      root.style.setProperty('--hero-foot-opacity', String(1 - clamp(progress / 0.35)))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    motion.addEventListener('change', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      motion.removeEventListener('change', schedule)
    }
  }, [ref])
}
