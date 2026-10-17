import { useEffect, useState } from 'react'
import { ArrowUp } from '@phosphor-icons/react'
import './back-to-top.css'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 400)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [])

  const goToTop = () => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    document.getElementById('main')?.focus({ preventScroll: true })

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'instant' : 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={goToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={22} weight="bold" aria-hidden="true" />
    </button>
  )
}