/** Keep regular wheel and touch scrolling; only explicit section jumps are smooth. */
export function scrollToSection(id: string, { instant = false } = {}) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({ behavior: instant || reduce ? 'auto' : 'smooth', block: 'start' })
}
