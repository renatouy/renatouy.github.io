import { useState } from 'react'
import { Pause, Play } from '@phosphor-icons/react'
import type { ToolMark } from '@/content/schema'
import { ToolLogo } from './Shared'
import './tools-marquee.css'

/** V1's moving tool strip, with a clean semantic list and controls for motion. */
export function ToolsMarquee({ tools, idPrefix = 'about-tools', headingLevel = 2 }: { tools: ToolMark[]; idPrefix?: string; headingLevel?: 2 | 3 }) {
  const [paused, setPaused] = useState(false)
  const MotionIcon = paused ? Play : Pause
  const Title = headingLevel === 3 ? 'h3' : 'h2'

  return (
    <section className="about-tools" aria-labelledby={`${idPrefix}-title`}>
      <div className="tools-marquee__heading">
        <Title id={`${idPrefix}-title`}>Tools I work with.</Title>
        <button className="tools-marquee__toggle" type="button" aria-controls={`${idPrefix}-track`} aria-label={paused ? 'Resume tool scrolling' : 'Pause tool scrolling'} onClick={() => setPaused(!paused)}>
          <MotionIcon size={15} weight="fill" aria-hidden="true" />
          <span>{paused ? 'Play' : 'Pause'}</span>
        </button>
      </div>

      <div className="tools-marquee" data-paused={paused}>
        <div className="tools-marquee__track" id={`${idPrefix}-track`} aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="tools-marquee__set" key={copy}>
              {tools.map((tool) => (
                <div className="tools-marquee__item" key={tool.name}>
                  <ToolLogo tool={tool} />
                  {tool.wordmark ? null : <span className="tools-marquee__label">{tool.name}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ul className="sr-only" aria-label="Tools I work with">
        {tools.map((tool) => <li key={tool.name}>{tool.name}</li>)}
      </ul>
    </section>
  )
}
