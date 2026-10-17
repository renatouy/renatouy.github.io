import { useLayoutEffect, useRef } from 'react'
import './count-up.css'

const playedValues = new Set<string>()
const DURATION = 1600

export function CountUp({ value }: { value: string }) {
  const numberRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const element = numberRef.current
    if (!element) return

    const match = value.match(/^(\d+)(.*)$/)
    const motion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const finish = () => {
      element.textContent = value
    }

    if (!match || motion.matches || playedValues.has(value)) {
      playedValues.add(value)
      finish()
      return
    }

    const target = Number(match[1])
    const suffix = match[2]
    let frame = 0
    let observer: IntersectionObserver | null = null

    element.textContent = `0${suffix}`

    const start = () => {
      observer?.disconnect()

      if (playedValues.has(value)) {
        finish()
        return
      }

      playedValues.add(value)
      const startedAt = performance.now()

      const update = (now: number) => {
        const progress = Math.min(
          1,
          Math.max(0, (now - startedAt) / DURATION),
        )

        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(target * eased)

        element.textContent = `${current}${suffix}`

        if (progress < 1) {
          frame = requestAnimationFrame(update)
        } else {
          finish()
        }
      }

      frame = requestAnimationFrame(update)
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (
          entries.some(
            (entry) =>
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.5,
          )
        ) {
          start()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(element)

    const handleMotionChange = () => {
      if (motion.matches) {
        observer?.disconnect()
        cancelAnimationFrame(frame)
        playedValues.add(value)
        finish()
      }
    }

    motion.addEventListener('change', handleMotionChange)

    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      motion.removeEventListener('change', handleMotionChange)
    }
  }, [value])

  return (
    <strong className="count-up">
      <span className="count-up__sizer" aria-hidden="true">
        {value}
      </span>
      <span
        ref={numberRef}
        className="count-up__number"
        aria-hidden="true"
      >
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </strong>
  )
}