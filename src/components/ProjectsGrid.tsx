import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle, X } from '@/components/slab'
import {
  CASE_FILTERS,
  CASE_STUDIES,
  type CaseCategory,
  type CaseStudy,
} from '@/data/project-case-studies'

function CaseCard({ study, onOpen }: { study: CaseStudy; onOpen: (study: CaseStudy, trigger: HTMLButtonElement) => void }) {
  return (
    <button
      className={`casework__card${study.index === '01' ? ' casework__card--featured' : ''}`}
      type="button"
      onClick={(event) => onOpen(study, event.currentTarget)}
      aria-haspopup="dialog"
    >
      <span className="casework__card-top">
        <span className="casework__index">
  {study.index} / {study.status === 'complete' ? 'PORTFOLIO PROJECT' : 'COMING SOON'}
</span>
        <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
      </span>
      <span className="casework__card-copy">
        <span className="casework__category">{study.categoryLabel}</span>
        <span className="casework__card-title">{study.title}</span>
        <span className="casework__card-summary">{study.summary}</span>
      </span>
      <span className="casework__flow" aria-hidden="true">
        {study.flow.map((step, index) => (
          <span className="casework__flow-step" key={step}>
            {index > 0 && <ArrowRight size={12} weight="bold" />}
            <span>{step}</span>
          </span>
        ))}
      </span>
      <span className="casework__card-bottom">
        <span className="casework__card-metric">
          <strong>{study.metric.value}</strong>
          <span>{study.metric.label}</span>
        </span>
        <span className="casework__card-cta">View case study <ArrowUpRight size={14} weight="bold" aria-hidden="true" /></span>
      </span>
    </button>
  )
}

function CaseDialog({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  const panelRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const scroller = document.querySelector<HTMLElement>('.shell__panel')
    const previousScrollerOverflow = scroller?.style.overflowY ?? ''
    document.body.style.overflow = 'hidden'
    if (scroller) scroller.style.overflowY = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const controls = Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      if (!controls.length) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (scroller) scroller.style.overflowY = previousScrollerOverflow
    }
  }, [onClose])

  return createPortal(
    <div
      className="case-dialog__backdrop"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <section
        ref={panelRef}
        className="case-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-title-${study.id}`}
        aria-describedby={`case-summary-${study.id}`}
      >
        <header className="case-dialog__header">
          <span className="casework__index">
  {study.index} / {study.status === 'complete' ? 'PORTFOLIO PROJECT' : 'COMING SOON'}
</span>
          <button ref={closeRef} type="button" className="case-dialog__close" onClick={onClose} aria-label="Close case study">
            <X size={20} weight="bold" aria-hidden="true" />
          </button>
        </header>
        <div className="case-dialog__content">
          <p className="case-dialog__org">{study.organization} <span aria-hidden="true">·</span> {study.role}</p>
          <h2 className="case-dialog__title" id={`case-title-${study.id}`}>{study.title}</h2>
          <p className="case-dialog__intro" id={`case-summary-${study.id}`}>{study.summary}</p>
          <div className="case-dialog__metric">
            <strong>{study.metric.value}</strong>
            <span>{study.metric.label}</span>
          </div>
{study.status === 'complete' ? (
  <>
    <div className="case-dialog__section">
      <h3>The challenge</h3>
      <p>{study.challenge}</p>
    </div>

    <div className="case-dialog__section">
      <h3>What I handled</h3>

      <ul className="case-dialog__tasks">
        {study.actions.map((action) => (
          <li key={action}>
            <CheckCircle size={18} weight="duotone" aria-hidden="true" />
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="case-dialog__section">
      <h3>The outcome</h3>
      <p>{study.outcome}</p>
    </div>
  </>
) : (
  <>
    <div className="case-dialog__section">
      <h3>What I'm building</h3>
      <p>{study.challenge}</p>
    </div>

    <div className="case-dialog__section">
      <h3>Planned deliverables</h3>

      <ul className="case-dialog__tasks">
        {study.actions.map((action) => (
          <li key={action}>
            <CheckCircle size={18} weight="duotone" aria-hidden="true" />
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="case-dialog__section">
      <h3>Status</h3>
      <p>{study.outcome}</p>
    </div>
  </>
)}
{study.id === 'executive-calendar' && (
  <div className="case-dialog__section case-dialog__deliverables">
    <h3>Project deliverables</h3>

    <p>
      The complete workflow includes the weekly calendar, executive briefing,
      scheduling decision summary, and stakeholder communication drafts.
    </p>

    <div className="case-dialog__gallery">
      <figure className="case-dialog__visual case-dialog__visual--wide">
        <img
          src="/projects/project-01/calendar.png"
          alt="Executive weekly calendar"
          loading="lazy"
        />
        <figcaption>Executive weekly calendar</figcaption>
      </figure>

      <figure className="case-dialog__visual">
        <img
          src="/projects/project-01/weekly-briefing.png"
          alt="Weekly executive briefing"
          loading="lazy"
        />
        <figcaption>Weekly executive briefing</figcaption>
      </figure>

      <figure className="case-dialog__visual">
        <img
          src="/projects/project-01/scheduling-summary.png"
          alt="Scheduling decision summary"
          loading="lazy"
        />
        <figcaption>Scheduling decision summary</figcaption>
      </figure>

      <figure className="case-dialog__visual">
        <img
          src="/projects/project-01/vendor-email.png"
          alt="Vendor scheduling email"
          loading="lazy"
        />
        <figcaption>Vendor scheduling email</figcaption>
      </figure>

      <figure className="case-dialog__visual">
        <img
          src="/projects/project-01/candidate-email.png"
          alt="Candidate interview scheduling email"
          loading="lazy"
        />
        <figcaption>Candidate interview scheduling email</figcaption>
      </figure>
    </div>
  </div>
)}
{study.id === 'inbox-management' && (
  <div className="case-dialog__section case-dialog__deliverables">
    <h3>Project deliverables</h3>

    <p>
      The complete workflow includes inbox prioritization, follow-up tracking,
      three drafted responses, an executive inbox summary, and a written
      explanation of the prioritization decisions.
    </p>

    <div className="case-dialog__gallery">

      <figure className="case-dialog__visual case-dialog__visual--wide">
        <img
          src="/projects/project-02/inbox-tracker.png"
          alt="Executive inbox management tracker showing prioritized messages"
          loading="lazy"
        />
        <figcaption>Inbox priority tracker</figcaption>
      </figure>

      <figure className="case-dialog__visual case-dialog__visual--wide">
        <img
          src="/projects/project-02/follow-up-actions.png"
          alt="Follow-up and action tracker with responsibilities, deadlines and statuses"
          loading="lazy"
        />
        <figcaption>Follow-up &amp; actions tracker</figcaption>
      </figure>

      <figure className="case-dialog__visual case-dialog__visual--wide">
        <img
          src="/projects/project-02/email-contract-renewal.png"
          alt="Draft response for an urgent contract renewal request"
          loading="lazy"
        />
        <figcaption>Draft reply · Contract renewal</figcaption>
      </figure>

      <figure className="case-dialog__visual case-dialog__visual--wide">
        <img
          src="/projects/project-02/email-meeting-request.png"
          alt="Draft response for a client meeting request"
          loading="lazy"
        />
        <figcaption>Draft reply · Meeting request</figcaption>
      </figure>

      <figure className="case-dialog__visual case-dialog__visual--wide">
        <img
          src="/projects/project-02/email-invoice-followup.png"
          alt="Draft response for an invoice follow-up"
          loading="lazy"
        />
        <figcaption>Draft reply · Invoice follow-up</figcaption>
      </figure>

      <figure className="case-dialog__visual">
        <img
          src="/projects/project-02/daily-inbox-summary.png"
          alt="Daily Executive Inbox Summary"
          loading="lazy"
        />
        <figcaption>Daily Executive Inbox Summary</figcaption>
      </figure>

      <figure className="case-dialog__visual">
        <img
          src="/projects/project-02/prioritization-summary.png"
          alt="Prioritization Decision Summary"
          loading="lazy"
        />
        <figcaption>Prioritization Decision Summary</figcaption>
      </figure>

    </div>
  </div>
)}
<div className="case-dialog__skills" aria-label="Skills demonstrated">
  {study.skills.map((skill) => <span key={skill}>{skill}</span>)}
</div>
          <div className="case-dialog__skills" aria-label="Skills demonstrated">
            {study.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <p className="case-dialog__integrity">
  {study.status === 'complete'
    ? 'Simulated portfolio project created to demonstrate an Executive Assistant workflow.'
    : 'This portfolio project is currently in development.'}
</p>
          <Link className="case-dialog__contact" to="/contact">
            Discuss similar support <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>,
    document.body,
  )
}

export default function ProjectsGrid() {
  const [category, setCategory] = useState<CaseCategory | 'all'>('all')
  const [selected, setSelected] = useState<CaseStudy | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const visible = CASE_STUDIES.filter((study) => category === 'all' || study.category === category)

  const openCase = useCallback((study: CaseStudy, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setSelected(study)
  }, [])
  const closeCase = useCallback(() => {
    setSelected(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="casework" aria-labelledby="projects-title">
      <header className="casework__header">
        <div className="casework__hero-copy">
<span className="casework__eyebrow">
  Projects / Selected work
</span>

<h1 id="projects-title">
  See how I turn<br /><em>priorities into progress.</em>
</h1>

<p>
  Practical executive and administrative support projects showing how I plan,
  organize, communicate, and keep important work moving.
</p>
        </div>
        <div className="casework__proof" aria-label="Highlights from work experience">
          <div><strong>9+</strong><span>quarters of on-time reporting</span></div>
          <div><strong>200+</strong><span>Salesforce-ready records</span></div>
          <div><strong>150+</strong><span>qualified leads researched</span></div>
        </div>
      </header>

      <div className="casework__toolbar">
        <h2>Work in practice <span aria-live="polite">({visible.length.toString().padStart(2, '0')})</span></h2>
        <div className="casework__filters" role="group" aria-label="Filter case studies">
          {CASE_FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={category === filter.key ? 'casework__filter is-active' : 'casework__filter'}
              aria-pressed={category === filter.key}
              onClick={() => setCategory(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="casework__grid">
        {visible.map((study) => <CaseCard key={study.id} study={study} onOpen={openCase} />)}
      </div>

      <footer className="casework__footer">
        <div>
<strong>Support you can see in practice.</strong>

<p>
  These portfolio projects demonstrate how I approach executive and
  administrative work. Completed simulations are clearly labeled, and
  unfinished case studies are marked as in progress.
</p>
        </div>
        <Link to="/contact" className="casework__footer-link">Let's work together <ArrowUpRight size={17} weight="bold" aria-hidden="true" /></Link>
      </footer>
      {selected && <CaseDialog study={selected} onClose={closeCase} />}
    </section>
  )
}
