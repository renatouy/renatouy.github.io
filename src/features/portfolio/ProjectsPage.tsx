import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, Copy, MagnifyingGlassPlus, X } from '@phosphor-icons/react'
import { HeadMeta, PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { findProject, projects } from '@/content/projects'
import { site } from '@/content/site'
import type { Project, ProjectStatus } from '@/content/schema'
import { ContactBand, ProjectCard, Status } from './Shared'
import { NotFoundPage } from './Pages'
import './portfolio.css'

const filters: ('All projects' | ProjectStatus)[] = ['All projects', 'Complete', 'In progress', 'Planned']

export function ProjectsPage({ page, nested = false }: { page: PageRoute; nested?: boolean }) {
  const Root = nested ? 'section' : 'div'
  const [filter, setFilter] = useState<(typeof filters)[number]>('All projects')
  const visible = projects.filter((project) => filter === 'All projects' || project.status === filter)
  return <Root id={nested ? 'projects' : undefined} className={`pg portfolio-projects${nested ? ' pg--section' : ''}`} aria-labelledby={nested ? 'projects-title' : undefined}>{!nested && <PageMeta page={page} />}<PageHeader level={nested ? 2 : 1} id={nested ? 'projects-title' : undefined} eyebrow="Projects / Work in practice" titleThin="The work behind" titleBold="the support." lede="Explore the decisions, documents, and follow-through behind each sample. Start with the completed projects, or see what is coming next." /><div className="projects-toolbar"><div className="projects-filters" role="group" aria-label="Filter projects">{filters.map((value) => <button key={value} type="button" onClick={() => setFilter(value)} aria-pressed={value === filter}>{value === 'Complete' ? 'Completed' : value}<span>{value === 'All projects' ? projects.length : projects.filter((project) => project.status === value).length}</span></button>)}</div><p aria-live="polite">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p></div><div className="projects-grid">{visible.map((project) => <ProjectCard key={project.id} project={project} />)}</div><p className="section-note">All projects here are simulated work samples. Completed, in-progress, and planned work are labeled separately.</p>{!nested && <ContactBand />}</Root>
}

function DeliverableViewer({ project }: { project: Project }) {
  const [selected, setSelected] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const deliverable = project.deliverables[selected]!
  useEffect(() => {
    if (zoomed && !dialogRef.current?.open) dialogRef.current?.showModal()
    if (!zoomed && dialogRef.current?.open) dialogRef.current.close()
    if (zoomed) document.documentElement.dataset.scrollLocked = 'true'
    return () => { delete document.documentElement.dataset.scrollLocked }
  }, [zoomed])
  return <section className="deliverables" aria-labelledby="deliverables-title"><div className="deliverables__header"><div><p className="eyebrow">The finished work</p><h2 id="deliverables-title">Explore the deliverables.</h2></div><span>{String(selected + 1).padStart(2, '0')} / {String(project.deliverables.length).padStart(2, '0')}</span></div><div className="deliverables__layout"><nav className="deliverables__list" aria-label="Choose a deliverable">{project.deliverables.map((item, index) => <button type="button" key={item.id} aria-pressed={index === selected} onClick={() => setSelected(index)}><span>0{index + 1}</span><span>{item.label}</span><ArrowUpRight size={16} aria-hidden /></button>)}</nav><div className="deliverables__content"><div className="deliverables__caption"><h3>{deliverable.label}</h3><p>{deliverable.description}</p><a href={deliverable.src} target="_blank" rel="noreferrer" className="text-link">Open full sample <ArrowUpRight size={15} aria-hidden /><span className="sr-only"> in a new tab</span></a></div>{deliverable.type === 'image' ? <button className="deliverable-image" type="button" onClick={() => setZoomed(true)} aria-label={`Enlarge ${deliverable.label}`}><img src={deliverable.src} alt={deliverable.label} decoding="async" /><span><MagnifyingGlassPlus size={18} aria-hidden /> Click to enlarge</span></button> : <iframe key={deliverable.id} className="deliverable-document" src={deliverable.src} title={deliverable.label} sandbox="" loading="lazy" />}</div></div><dialog className="sample-lightbox" ref={dialogRef} data-lenis-prevent aria-label={deliverable.label} onClose={() => setZoomed(false)} onClick={(event) => { if (event.target === event.currentTarget) setZoomed(false) }}><div className="sample-lightbox__bar"><span>{deliverable.label}</span><button type="button" className="icon-button" aria-label="Close enlarged sample" onClick={() => setZoomed(false)}><X size={22} /></button></div>{zoomed ? <img src={deliverable.src} alt={deliverable.label} /> : null}</dialog></section>
}

export function ProjectPage() {
  const { projectId } = useParams()
  const project = findProject(projectId)
  const [copyState, setCopyState] = useState('Copy project link')
  if (!project) return <NotFoundPage />
  const next = projects[(projects.indexOf(project) + 1) % projects.length]!
  return <article className="pg project-detail"><HeadMeta title={`${project.title} | ${site.name}`} description={project.summary} path={`/projects/${project.id}`} /><div className="project-detail__nav"><Link to="/projects" className="text-link"><ArrowLeft size={17} aria-hidden /> All projects</Link><button type="button" className="text-link" onClick={async () => { try { await navigator.clipboard.writeText(window.location.href); setCopyState('Link copied') } catch { setCopyState('Copy the URL from your address bar') } }}><Copy size={15} aria-hidden /><span aria-live="polite">{copyState}</span></button></div><header className="project-detail__head"><div className="project-detail__meta"><p className="eyebrow">Project {project.number} / {project.category}</p><Status value={project.status} /></div><h1>{project.title}</h1><p>{project.summary}</p><ul className="tag-list" aria-label="Tools used or planned">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></header><div className="case-layout"><section><p className="eyebrow">01 / The brief</p><h2>{project.status === 'Planned' ? 'The planned exercise.' : 'What needed attention.'}</h2><p>{project.challenge}</p></section><section><p className="eyebrow">02 / The approach</p><h2>{project.actions.length ? 'What I handled.' : 'What I will prepare.'}</h2><ul className="check-list">{(project.actions.length ? project.actions : project.plannedDeliverables ?? []).map((action) => <li key={action}><CheckCircle size={18} aria-hidden /><span>{action}</span></li>)}</ul></section></div><section className="case-outcome"><p className="eyebrow">03 / {project.status === 'Complete' ? 'The handoff' : 'Current status'}</p><h2>{project.status === 'Complete' ? 'Ready to review.' : project.status === 'Planned' ? 'On the roadmap.' : 'Work in progress.'}</h2><p>{project.outcome}</p><ul className="tag-list" aria-label="Skills demonstrated or planned">{project.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>{project.deliverables.length ? <DeliverableViewer key={project.id} project={project} /> : <section className="project-planned"><p className="eyebrow">The deliverables</p><h2>{project.status === 'Planned' ? 'Coming as the work takes shape.' : 'The final samples are on their way.'}</h2><ul>{project.plannedDeliverables?.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></section>}<p className="sample-note">{project.note}</p><nav className="next-project" aria-label="Next project"><span>Keep exploring</span><Link to={`/projects/${next.id}`}>{next.title}<ArrowRight size={23} aria-hidden /></Link></nav><ContactBand /></article>
}
