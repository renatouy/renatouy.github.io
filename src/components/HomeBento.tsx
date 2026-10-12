import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Medal,
  Stack,
  Briefcase,
  Envelope,
  MagnifyingGlass,
  Database,
  Sparkle,
  ShareNetwork,
  SealCheck,
} from '@/components/slab'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the funnels, the tools, the clients
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const PROJECT_HIGHLIGHTS = [
  { value: '9+', label: 'on-time quarters' },
  { value: '200+', label: 'CRM records' },
  { value: '150+', label: 'qualified leads' },
] as const

const OFFERS = [
  { Icon: Envelope, title: 'Inbox & Calendar', note: 'Triage, scheduling, follow-ups' },
  { Icon: MagnifyingGlass, title: 'Lead Generation', note: 'Research and qualified lists' },
  { Icon: Database, title: 'CRM & Data', note: 'Salesforce cleanup, accurate records' },
  { Icon: Sparkle, title: 'AI Workflows', note: 'Claude, ChatGPT, Zapier, Make' },
  { Icon: ShareNetwork, title: 'Social Media', note: 'Scheduling, Canva, analytics' },
] as const

const CLIENTS: { name: string; role: string; work: string; logo?: string }[] = [
  { name: 'Membership Organization', role: 'Administrative Clerk', work: 'Records · Reporting · Inbox & calendar' },
  { name: 'Remotasks', role: 'Quality Assurance Specialist', work: '95%+ accuracy · Data quality' },
  { name: 'Quanta', role: 'Administrative & Data Support Assistant', work: 'Salesforce · Lead research · Data cleanup' },
  { name: 'Kimavi', role: 'General Virtual Assistant', work: 'Lead gen · Competitor research · Testing' },
  { name: 'Melt Labs', role: 'Operations Assistant', work: 'Market research · QA · Documentation' },
]

// Three photos of you, fanned. Small copies are fine - the fan shows them under 100px.
const PHOTOS = [profile.avatarSrc, '/avatar.svg?2', '/avatar.svg?3']

/** The AI systems as a flat list: every leaf of the Projects tree, in order. */
const leaves = (n: StackNode): StackNode[] =>
  n.children?.length ? n.children.flatMap(leaves) : [n]
const AI_BUILDS = leaves(aiStack)

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(AI_BUILDS.length / 2)
  const toolRows = [AI_BUILDS.slice(0, half), AI_BUILDS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: real work proof, not unrelated funnel or app mockups. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Real admin, CRM, research, and QA results." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_HIGHLIGHTS, ...PROJECT_HIGHLIGHTS].map((item, i) => (
              <span key={i} className="bento__shot bento__shot--proof">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a fanned stack of photos. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Virtual and executive assistant in the Philippines." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* AI builds: the systems from the Projects tree, two chip rows
          scrolling against each other. */}
      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={Robot} title="AI Builds" desc="PLACEHOLDER - one line on your AI or side builds." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials: the badge that matters, on its plate. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Executive Assistant Masterclass, 2026." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/placeholders/badge.svg" alt="" width={72} height={72} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Executive Assistant
          </span>
        </div>
      </Link>

      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Admin, leads and data support for founders and small teams." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Experience: role cards drifting up a clipped column. */}
      <Link to="/experience" className="bento__card bento__card--quotes">
        <CardHead Icon={Briefcase} title="Experience" desc="Recent roles and the results behind them." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  {c.logo ? (
                    <img src={c.logo} alt="" width={18} height={18} />
                  ) : (
                    <Briefcase size={14} weight="fill" />
                  )}
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
