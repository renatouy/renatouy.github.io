import type { CSSProperties } from 'react'
import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const ZAPIER = { src: '/icons/ai/zapier.svg', name: 'Zapier' }
const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const CHATGPT = { src: '/icons/openai.svg', name: 'ChatGPT' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const FACEBOOK = { src: '/icons/facebook.svg', name: 'Facebook' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Inbox, calendar and admin support',
    marks: [GWS, SLACK],
  },
  {
    index: '02',
    title: 'Lead generation and CRM data',
    marks: [GWS],
  },
  {
    index: '03',
    title: 'AI tools and workflow automation',
    marks: [CLAUDE, CHATGPT, ZAPIER],
  },
  {
    index: '04',
    title: 'Social media and content support',
    marks: [FACEBOOK],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Virtual and executive assistant keeping inboxes, calendars and data in order for founders and small teams.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I take the busywork off your plate.
            <span> So you can spend your time on the work only you can do.</span>
          </p>

          <p className="agrid__note">
            <strong>Remote work since 2022.</strong> From Salesforce cleanup and lead
            research to quality checks on AI-translated course modules, I support remote
            teams across admin, operations and data work, using Google Workspace, Slack,
            Asana and AI tools to keep things moving.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Executive Assistant Masterclass</span>
                <span className="agrid__cell-meta">Alison · 2026</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · flexible for US hours</span>
              </span>
            </span>

            <span className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Fundamentals of Digital Marketing</span>
                <span className="agrid__cell-meta">Google · 2026</span>
              </span>
            </span>
          </div>
        </div>

<div className="agrid__portrait">
  <img
    src={profile.aboutPortraitSrc}
    alt={`Portrait of ${profile.name}`}
    loading="eager"
    decoding="async"
    width={400}
    height={400}
  />
</div>
      </div>
    </section>
  )
}
