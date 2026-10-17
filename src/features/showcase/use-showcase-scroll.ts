import { useEffect, type RefObject } from 'react'

const WALK_QUERY =
  '(min-width: 1101px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)'

export function useShowcaseScroll(
  ref: RefObject<HTMLElement | null>,
  count: number,
  onSelect: (index: number) => void,
) {
  useEffect(() => {
    const root = ref.current
    if (!root || count < 1) return

    const media = window.matchMedia(WALK_QUERY)
    let frame = 0

    const update = () => {
      frame = 0

      if (!media.matches) {
        root.style.removeProperty('--room-progress')
        return
      }

      const range = Math.max(1, root.offsetHeight - window.innerHeight)
      const progress = Math.min(
        1,
        Math.max(0, -root.getBoundingClientRect().top / range),
      )

      onSelect(Math.min(count - 1, Math.floor(progress * count)))
      root.style.setProperty('--room-progress', String(progress))
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    media.addEventListener('change', schedule)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      media.removeEventListener('change', schedule)
      root.style.removeProperty('--room-progress')
    }
  }, [ref, count, onSelect])

  return (index: number) => {
    const root = ref.current

    if (!root || !window.matchMedia(WALK_QUERY).matches) {
      onSelect(index)
      return
    }

    const start = window.scrollY + root.getBoundingClientRect().top
    const range = Math.max(0, root.offsetHeight - window.innerHeight)

    window.scrollTo({
      top: start + ((index + 0.5) / count) * range,
      behavior: 'smooth',
    })
  }
}