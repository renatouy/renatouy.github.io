import { Briefcase, Database, MagnifyingGlass, ListChecks, ClipboardText } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ExperienceGrid - the Experience view as a fixed viewport.
 *
 * One glass sheet holding the work history as a single ledger, most recent
 * role first. Each row: the employer, the role, the dates, what was done and
 * the skills it used. Add or edit a role in ROLES below.
 */

type Role = {
  index: string
  name: string
  role: string
  period: string
  summary: string
  tags: string[]
  Icon: Icon
}

const ROLES: Role[] = [
  {
    index: '01',
    name: 'Non-Profit Membership Organization',
    role: 'Administrative Clerk',
    period: 'Jul 2021 - Present · Part-time',
    summary:
      'Records and finances for a 1,200+ member organization, plus inbox and calendar management. Reports filed 100% on time across 9+ quarters.',
    tags: ['Records', 'Reporting', 'Inbox & calendar'],
    Icon: Briefcase,
  },
  {
    index: '02',
    name: 'Remotasks',
    role: 'Quality Assurance Specialist',
    period: 'Nov 2022 - May 2026 · Project-based',
    summary:
      'Kept accuracy above 95% on high-volume data tasks and cut labeling errors by 20%.',
    tags: ['Quality checks', 'Data accuracy', 'Attention to detail'],
    Icon: ClipboardText,
  },
  {
    index: '03',
    name: 'Quanta',
    role: 'Administrative & Data Support Assistant',
    period: 'Jan - Apr 2025',
    summary:
      'Cleaned and prepared 200+ Salesforce records and compiled 76 qualified leads.',
    tags: ['Salesforce', 'Lead research', 'Data cleanup'],
    Icon: Database,
  },
  {
    index: '04',
    name: 'Kimavi',
    role: 'General Virtual Assistant',
    period: 'Nov 2024 - Mar 2025',
    summary:
      'Generated and qualified 150+ leads, supported 20+ YouTube videos, and ran competitor analysis and product testing across the web app.',
    tags: ['Lead gen', 'Competitor research', 'Testing'],
    Icon: MagnifyingGlass,
  },
  {
    index: '05',
    name: 'Melt Labs',
    role: 'Operations Assistant',
    period: 'Aug 2023 - Sep 2024',
    summary:
      'Market research, quality checks on AI-translated course modules and project documentation for an AI EdTech startup.',
    tags: ['Research', 'QA', 'Documentation'],
    Icon: ListChecks,
  },
]

export default function ExperienceGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="experience-title">
          Where I have worked, and what I did there.
        </h1>
        <p className="pgrid__lede">
          Five roles across admin support, data, operations and quality work.
        </p>
      </header>

      <div className="home__glass tgrid__glass">
        <ul className="tgrid__clients" role="list">
          {ROLES.map((r) => {
            const RoleIcon = r.Icon
            return (
              <li key={r.index} className="tgrid__client">
                <span className="tgrid__client-ghost" aria-hidden="true">{r.index}</span>
                <span className="tgrid__client-mark" aria-hidden="true">
                  <RoleIcon size={22} weight="duotone" />
                </span>

                <span className="tgrid__client-body">
                  <span className="tgrid__client-head">
                    <span className="tgrid__client-name">{r.name}</span>
                    <span className="tgrid__client-role">{r.role}</span>
                    <span className="tgrid__client-period">{r.period}</span>
                  </span>
                  <span className="tgrid__client-daily">{r.summary}</span>
                  <ul className="tgrid__client-tags" role="list">
                    {r.tags.map((t) => (
                      <li key={t} className="tgrid__client-tag">{t}</li>
                    ))}
                  </ul>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
