import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * The live automation demo at the bottom still needs your own example.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Understand',
    body: 'We go over your workflow, tools and priorities so I know how you like things done.',
    Icon: MagnetStraight,
    chips: ['Workflow', 'Tools', 'Priorities', 'Schedule'],
  },
  {
    index: '02',
    label: 'Organize',
    body: 'I set up the inbox, calendar, trackers and SOPs so tasks stop slipping through.',
    Icon: Timer,
    chips: ['Inbox', 'Calendar', 'SOPs'],
  },
  {
    index: '03',
    label: 'Deliver',
    body: 'You get steady day-to-day support and a clear view of what got done.',
    Icon: Trophy,
    chips: ['Daily support', 'Updates', 'Handoffs'],
  },
]

/* ---------- The services ---------- */

// Example tool marks from /public/icons. Swap for the tools you actually use.
const OPENAI = '/icons/openai.svg'
const GWS = '/icons/googleworkspace.svg'
const SLACK = '/icons/slack.svg'
const CLAUDE = '/icons/ai/claude-color.svg'
const ZAPIER = '/icons/ai/zapier.svg'
const FACEBOOK = '/icons/facebook.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Inbox & Calendar Management',
    description: 'Keep email triaged, meetings scheduled and follow-ups from slipping.',
    chip: 'Executive support',
    logos: [GWS, SLACK],
    bullets: ['Inbox triage and replies', 'Scheduling and meeting coordination', 'Daily priorities and follow-ups'],
  },
  {
    index: '02',
    title: 'Lead Generation & Research',
    description: 'Qualified lead lists and research your outreach can actually use.',
    chip: 'Lead gen',
    logos: [GWS],
    bullets: ['Prospect research and qualification', 'Competitor analysis', 'Clean, organized lead lists'],
  },
  {
    index: '03',
    title: 'CRM & Data Management',
    description: 'Clean, current records so your CRM stays something you can trust.',
    chip: 'CRM',
    logos: [GWS],
    bullets: ['Salesforce record cleanup', 'Accurate, high-volume data entry', 'Organized records and reporting'],
  },
  {
    index: '04',
    title: 'AI-Assisted Workflows',
    description: 'Claude, ChatGPT and automation tools doing the repeat work faster.',
    chip: 'AI tools',
    logos: [CLAUDE, OPENAI, ZAPIER],
    bullets: ['Drafting and summarizing with AI', 'Zapier and Make automations', 'SOPs for repeatable tasks'],
  },
  {
    index: '05',
    title: 'Social Media & Content Support',
    description: 'Scheduled posts, a managed Facebook Page and analytics you can read.',
    chip: 'Social',
    logos: [FACEBOOK],
    bullets: ['Canva and CapCut content', 'Hootsuite scheduling', 'Page analytics and reporting'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Admin support that keeps your business moving.
        </h1>
        <p className="pgrid__lede">
          Admin, lead generation, CRM data and AI-assisted workflows, handled so you can focus on the work only you can do.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Understand. Organize. Deliver.
              <br />
              <span>Three steps to a smoother week.</span>
            </h2>
            <p className="sgrid__method-sub">
              Starting with how you already work means less change for you and faster results.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I can take off your plate.</h2>
            <p className="sgrid__offers-sub">Pick one, or mix and match.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Live automation</span>
              <h2 className="sgrid__flow-title">Your automation headline.</h2>
              <p className="sgrid__flow-sub">
                PLACEHOLDER - tell me what to put here: one sentence on what this example automation does for a client.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
