import { useMemo } from 'react'

/**
 * ToolsMarquee
 *
 * Horizontally scrolling strip of brand logos + labels for the tools you work with.
 * The tools listed below (icons live in public/icons/).
 * The strip lives on the cream shader page, NOT inside a dark section.
 *
 * Implementation notes:
 * - The tools list is duplicated in JSX (`doubled`) so the CSS keyframe can translate
 *   by exactly -50% and produce a seamless loop. The halfway point lands on the seam
 *   between the two copies, so the reset at 100% is invisible.
 * - Icons come in two flavors:
 *     1. Single-color simple-icons SVGs (.svg) are rendered as CSS masks tinted
 *        via a per-item `--brand-color` custom property. This lets us ship one
 *        black-shape file per brand and paint it with the brand color.
 *     2. Multi-color brand marks (PNG or multi-color SVG - GoHighLevel,
 *        Lightspeed, Claude Code, VS Code, Google Workspace) are rendered as
 *        raw `<img>` tags because gradients/layered fills cannot be reduced to
 *        a single silhouette.
 *   The renderer picks the mode by whether a `color` is set: color -> mask,
 *   no color -> img.
 * - Brand colors live in the data layer below (not tokens.css) because they are
 *   external brand identifiers, not part of the site palette. They are passed to
 *   CSS via `--brand-color` custom properties so the component stylesheet stays
 *   free of inline hex values.
 * - Accessibility: the animated track is aria-hidden because its content is
 *   duplicated and moving. The real semantic list sits in an sr-only <ul> so
 *   screen readers get a clean, deduped enumeration of the tools.
 */

type Tool = {
  name: string
  iconPath: string
  /** When set, the SVG silhouette is tinted via CSS mask. Omit for multi-color marks. */
  color?: string
}

export const tools: Tool[] = [
  { name: 'Google Workspace',     iconPath: '/icons/googleworkspace.svg' },
  { name: 'Microsoft Office 365', iconPath: '/icons/office365.svg',   color: '#2B579A' },
  { name: 'Notion',               iconPath: '/icons/notion.svg',      color: '#000000' },
  { name: 'Slack',                iconPath: '/icons/slack.svg',       color: '#611F69' },
  { name: 'Asana',                iconPath: '/icons/asana.svg',       color: '#F06A6A' },
  { name: 'Trello',               iconPath: '/icons/trello.svg',      color: '#0052CC' },
  { name: 'ClickUp',              iconPath: '/icons/clickup.svg',     color: '#7B68EE' },
  { name: 'Salesforce',           iconPath: '/icons/salesforce.svg' },
  { name: 'Claude',               iconPath: '/icons/anthropic.svg',   color: '#D97757' },
  { name: 'ChatGPT',              iconPath: '/icons/openai.svg',      color: '#000000' },
  { name: 'Zapier',               iconPath: '/icons/ai/zapier.svg',   color: '#FF4F00' },
  { name: 'Make',                 iconPath: '/icons/make.svg',        color: '#6D00CC' },
  { name: 'Canva',                iconPath: '/icons/canva.svg',       color: '#00A3AD' },
  { name: 'Photoshop',            iconPath: '/icons/photoshop.svg' },
  { name: 'Adobe Creative Suite', iconPath: '/icons/adobe.svg' },
  { name: 'CapCut',               iconPath: '/icons/capcut.svg',      color: '#111111' },
  { name: 'Hootsuite',            iconPath: '/icons/hootsuite.svg',   color: '#000000' },
  { name: 'Mailchimp',            iconPath: '/icons/mailchimp.svg',   color: '#241C15' },
  { name: 'WordPress',            iconPath: '/icons/wordpress.svg' },
  { name: 'Wix',                  iconPath: '/icons/wix.svg',         color: '#000000' },
]

export default function ToolsMarquee() {
  // Duplicate the list so the -50% translate lands on a seamless seam.
  // useMemo keeps the doubled array reference-stable across renders.
  const doubled = useMemo(() => [...tools, ...tools], [])

  return (
    <section className="tools-marquee" aria-label="Tools I work with" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => {
          const useMask = tool.iconPath.endsWith('.svg') && !!tool.color
          return (
            <div key={`${tool.name}-${i}`} className="tools-marquee__item">
              {/* A plain box on desktop (display: contents); on phones it is
                  the rounded app-icon tile - a masked icon cannot carry its
                  own background, so the tile needs its own element. */}
              <span className="tools-marquee__tile">
                {useMask ? (
                  <span
                    className="tools-marquee__icon"
                    style={{
                      ['--icon-url' as string]: `url('${tool.iconPath}')`,
                      ['--brand-color' as string]: tool.color ?? 'var(--navy)',
                    }}
                  />
                ) : (
                  <img
                    className="tools-marquee__img"
                    src={tool.iconPath}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                  />
                )}
              </span>
              <span className="tools-marquee__label">{tool.name}</span>
            </div>
          )
        })}
      </div>

      {/* Real semantic list for screen readers, dedupes the visual loop. */}
      <ul className="sr-only">
        {tools.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>
    </section>
  )
}
