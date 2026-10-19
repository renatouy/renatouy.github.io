import type { ToolMark } from '@/content/schema'
import { ToolLogo } from './Shared'
import './tools-marquee.css'

/** V1's moving tool strip, with a clean semantic list and controls for motion. */
export function ToolsMarquee({ tools, idPrefix = 'about-tools', headingLevel = 2 }: { tools: ToolMark[]; idPrefix?: string; headingLevel?: 2 | 3 }) {
  const Title = headingLevel === 3 ? 'h3' : 'h2'

  return (
    <section className="about-tools" aria-labelledby={`${idPrefix}-title`}>
      <div className="tools-marquee__heading">
        <Title id={`${idPrefix}-title`}>Tools I work with.</Title>
      </div>

            <div className="tools-marquee">
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
