import { useLayoutEffect, useRef } from 'react'
import './count-up.css'

const LOAD_STARTED_AT =
  typeof window === 'undefined' ? 0 : performance.now()

const DELAY = 250
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

    if (
      !match ||
      motion.matches ||
      performance.now() >= LOAD_STARTED_AT + DELAY + DURATION
    ) {
      finish()
      return
    }

    const target = Number(match[1])
    const suffix = match[2]
    let frame = 0

    const update = (now: number) => {
      const progress = Math.min(
        1,
        Math.max(0, (now - LOAD_STARTED_AT - DELAY) / DURATION),
      )

      // Starts quickly, then gradually slows down.
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(target * eased)

      element.textContent = `${current}${suffix}`

      if (progress < 1) {
        frame = requestAnimationFrame(update)
      } else {
        finish()
      }
    }

    const handleMotionChange = () => {
      if (motion.matches) {
        cancelAnimationFrame(frame)
        finish()
      }
    }

    update(performance.now())
    motion.addEventListener('change', handleMotionChange)

    return () => {
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