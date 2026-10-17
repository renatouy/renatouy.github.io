import { ClipboardText, ListChecks, Tray, Target } from '@phosphor-icons/react'
import { PageMeta } from '@/app/PageMeta'
import { pages, type PageRoute } from '@/app/routes'
import { proofPoints, workflow } from '@/content/home'
import { CountUp } from './CountUp'
import { personJsonLd } from '@/lib/seo'
import { HeroSection } from '@/features/home/hero/HeroSection'
import { ShowcasePage } from '@/features/showcase/ShowcasePage'
import { ContactSection } from '@/features/contact/ContactPage'
import { ProjectsPage } from './ProjectsPage'
import { AboutPage, ExperiencePage, ServicesPage } from './Pages'
import './portfolio.css'

const steps = [Tray, ClipboardText, ListChecks, Target]
const sections = [
  { id: 'projects', Component: ProjectsPage },
  { id: 'showcase', Component: ShowcasePage },
  { id: 'services', Component: ServicesPage },
  { id: 'about', Component: AboutPage },
  { id: 'experience', Component: ExperiencePage },
]

/** Original V2 continuous Home. Standalone pages and detailed project routes remain available. */
export function HomePage({ page }: { page: PageRoute }) {
  return (
    <div className="portfolio-home">
      <PageMeta page={page} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd() }} />
      <section id="top" className="home-intro" aria-labelledby="hero-title">
        <HeroSection />
        <section className="proof-strip section-wrap" aria-label="Highlights from real work experience">
          {proofPoints.map((point) => <div key={point.label}><CountUp value={point.value} /><span>{point.label}<small>{point.detail}</small></span></div>)}
        </section>
        <section className="section-wrap workflow-section" aria-labelledby="workflow-title">
          <header className="section-heading"><div><p className="eyebrow">How I work</p><h2 id="workflow-title">You set the direction.<br /><strong>I keep things moving.</strong></h2></div><p>Clear priorities. Careful work.<br />Follow-through you can see.</p></header>
          <ol className="workflow">{workflow.map((step, index) => {
            const Icon = steps[index]!
            return <li key={step.title}><div className="workflow__top"><Icon size={25} weight="duotone" aria-hidden="true" /><span>0{index + 1}</span></div><h3>{step.title}</h3><p>{step.body}</p></li>
          })}</ol>
        </section>
      </section>
      {sections.map(({ id, Component }) => <Component key={id} page={pages.find((entry) => entry.id === id)!} nested />)}
      <ContactSection />
    </div>
  )
}
