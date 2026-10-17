import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, CalendarBlank, CheckCircle, EnvelopeSimple, ArrowRight } from '@phosphor-icons/react'
import type { Project, ToolMark } from '@/content/schema'

export function ToolRow({ tools, catalog = false }: { tools: ToolMark[]; catalog?: boolean }) {
  return (
    <ul className={`tool-row${catalog ? ' tool-row--catalog' : ''}`} aria-label={catalog ? 'Tools I work with' : 'Tools'}>
      {tools.map((tool) => (
        <li key={tool.name}>
          <ToolLogo tool={tool} />
          <span className={`tool-name${tool.wordmark ? ' sr-only' : ''}`}>{tool.name}</span>
        </li>
      ))}
    </ul>
  )
}

export function ToolLogo({ tool }: { tool: ToolMark }) {
  return <span className={`tool-logo${tool.wordmark ? ' tool-logo--wordmark' : ''}`} aria-hidden="true"><span className="tool-mark" style={{ '--tool-mark': `url("${tool.logo}")` } as CSSProperties} /></span>
}

export function Status({ value }: { value: Project['status'] }) {
  return <span className={`project-status project-status--${value.toLowerCase().replaceAll(' ', '-')}`}><span aria-hidden />{value}</span>
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link className={`project-card${featured ? ' project-card--featured' : ''}${project.status === 'Planned' ? ' project-card--planned' : ''}`} to={`/projects/${project.id}`}>
    <div className="project-card__image"><img src={project.cover} alt={project.id === 'project-01' ? 'Preview of the finished executive calendar' : `${project.title}, ${project.status === 'Complete' ? 'sample preview' : 'planned sample illustration'}`} loading="lazy" decoding="async" width={1200} height={700} /><span className="project-card__open" aria-hidden><ArrowUpRight size={22} /></span></div>
    <div className="project-card__body"><div className="project-card__meta"><span>Project {project.number}</span><Status value={project.status} /></div><span className="eyebrow">{project.category}</span><h3>{project.shortTitle}</h3><p>{project.summary}</p><div className="project-card__foot"><span>{project.status === 'Complete' ? `${project.deliverables.length} deliverables · Simulated work sample` : project.status === 'Planned' ? 'Planned work sample' : 'Practice project in progress'}</span><span className="text-link">{project.status === 'Complete' ? 'View case study' : 'View project plan'} <ArrowUpRight size={16} aria-hidden /></span></div></div>
  </Link>
}

export function ContactBand() {
  return <section className="contact-band" aria-labelledby="band-title"><div><p className="eyebrow">Let’s work together</p><h2 id="band-title">Make room for<br /><strong>your priorities.</strong></h2><p>Tell me where the details are piling up.<br />We can start there.</p></div><Link className="button button--light" to="/contact">Let’s talk <ArrowUpRight size={19} aria-hidden /></Link></section>
}

const days = [
  { day: 'MON', date: '12', events: [{ label: 'Leadership check-in', start: 9, length: .5 }, { label: 'Operations meeting', start: 13, length: 1 }] },
  { day: 'TUE', date: '13', events: [{ label: 'Client review', start: 10, length: 1 }, { label: 'Focus time', start: 13, length: 1.5 }] },
  { day: 'WED', date: '14', events: [{ label: 'Client renewal', start: 9, length: 1 }, { label: 'Hiring interview', start: 14, length: 1 }] },
  { day: 'THU', date: '15', events: [{ label: 'Financial review', start: 9, length: 1 }, { label: 'Candidate interview', start: 10.25, length: .75 }, { label: 'Vendor demo', start: 13, length: 1 }] },
  { day: 'FRI', date: '16', events: [{ label: 'Report preparation', start: 11, length: .75 }, { label: 'Weekly wrap-up', start: 15, length: 1 }] },
]

/** A small, code-native preview of Project 01, not a live calendar or a new work claim. */
export function CalendarPreview() {
  return <Link to="/projects/project-01" className="calendar-preview" aria-label="Explore Project 01, Executive Calendar and Meeting Coordination">
    <div className="calendar-preview__top"><span className="calendar-preview__icon"><CalendarBlank size={18} weight="duotone" /></span><span>THE WEEK, ORGANIZED</span><ArrowUpRight size={17} aria-hidden /></div>
    <div className="calendar-preview__heading"><div><p>Executive calendar</p><h2>Room to focus.</h2></div><span>OCT<br /><b>12–16</b><br />2026</span></div>
    <div className="mini-calendar" aria-hidden="true">{days.map((day) => <div key={day.day} className="mini-calendar__day"><span>{day.day}<b>{day.date}</b></span><div className="mini-calendar__slots">{day.events.map((event) => <span key={event.label} className={`mini-calendar__event${event.label === 'Focus time' ? ' mini-calendar__event--focus' : ''}`} style={{ top: `${(event.start - 9) / 7 * 100}%`, height: `${event.length / 7 * 100}%` }}>{event.label}</span>)}</div></div>)}</div>
    <div className="calendar-preview__bottom"><CheckCircle size={15} weight="fill" aria-hidden /><span>Priorities, meetings, and focus time in one view.</span></div>
    <span className="calendar-preview__caption">PROJECT 01 / SIMULATED WORK SAMPLE <ArrowRight size={14} aria-hidden /></span>
    <span className="calendar-preview__note"><EnvelopeSimple size={18} aria-hidden /><span><strong>Changes handled.</strong><small>Briefing and reply drafts included.</small></span></span>
  </Link>
}
