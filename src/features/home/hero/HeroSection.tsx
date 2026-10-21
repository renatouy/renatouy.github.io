import { useRef } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { homeHero } from '@/content/home'
import { scrollToSection } from '@/lib/motion/smooth-scroll'
import { useHeroScroll } from './use-hero-scroll'
import './hero.css'

/** Original V2 centered thin/bold headline, using Renato's approved copy. */
export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  useHeroScroll(ref)

  return (
    <section ref={ref} id="hero" className="hero" aria-labelledby="hero-title">
      <p className="hero__eyebrow">{homeHero.eyebrow}</p>
      <h1 id="hero-title" className="hero__title">
        <span className="hero__layer hero__layer--thin"><span className="hero__line hero__line--thin">{homeHero.headlineThin}</span></span>
        <span className="hero__layer hero__layer--bold"><span className="hero__line hero__line--bold">{homeHero.headlineBold}</span></span>
      </h1>
      <div className="hero__foot">
        <p className="hero__sub">{homeHero.subhead}</p>
              <div className="hero__actions">
          <Link
            to="/#projects"
            className="hero__cta btn-line"
            onClick={(event) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              ) return

              event.preventDefault()
              scrollToSection('projects')
            }}
          >
            Explore my projects
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
