import { EnvelopeSimple } from '@phosphor-icons/react'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { SocialLinks } from '@/components/brand/SocialLinks'
import { contactPage as c } from '@/content/contact'
import { allFaqs } from '@/content/faqs'
import { mailtoHref, site } from '@/content/site'
import { contactJsonLd } from '@/lib/seo'
import { ContactForm } from './ContactForm'
import './contact.css'


/** The answers plate beside the form. Nested = inside a Home section, so every heading steps down one level. */
function ContactSheet({ nested }: { nested: boolean }) {
  const H = nested ? 'h3' : 'h2'
  return (
    <div className="ct-sheet">
      <section className="ct-plate" aria-labelledby="ct-faq-title">
        <p className="pg-mono">{c.faqEyebrow}</p>
        <H id="ct-faq-title" className="ct-plate__title">
          {c.faqTitle}. <span>{c.faqSub}</span>
        </H>
<div className="faq-list" data-faq>
  {allFaqs.map((q, i) => {
    const id = `faq-${nested ? 'home' : 'contact'}-${i + 1}`

    return (
      <div
        className="faq-item"
        data-open="false"
        key={q.question}
      >
        <button
          type="button"
          className="faq-question"
          id={`${id}-question`}
          aria-expanded={false}
          aria-controls={`${id}-answer`}
          data-faq-trigger
        >
          <span>{q.question}</span>
          <span className="faq-icon" aria-hidden="true" />
        </button>

        <div
          className="faq-answer"
          id={`${id}-answer`}
          role="region"
          aria-labelledby={`${id}-question`}
          aria-hidden={true}
          inert
        >
          <div className="faq-answer__inner">
            <p>{q.answer}</p>
          </div>
        </div>
      </div>
    )
  })}
</div>
        <div className="ct-direct">
          <a className="ct-mail" href={mailtoHref()}>
            <EnvelopeSimple size={16} weight="fill" aria-hidden />
            {site.email}
          </a>
          <SocialLinks />
        </div>
      </section>

      <section className="ct-panel" aria-labelledby="ct-card-title">
        <H id="ct-card-title" className="ct-panel__title">
          {c.cardTitle}
        </H>
        <p className="ct-panel__body">{c.cardBody}</p>
        <ContactForm nested={nested} />
      </section>
    </div>
  )
}

/**
 * Contact, "answers, then write": the answers on a plate,
 * one open at a time (native exclusive <details>), the form on the panel beside it. The address and
 * the socials sit under the answers for anyone who would rather write directly.
 */
export function ContactPage({ page }: { page: PageRoute }) {
  return (
    <div className="pg ct">
      <PageMeta page={page} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: contactJsonLd({ path: page.path, title: page.title, description: page.description, faq: allFaqs }) }} />
      <PageHeader eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <ContactSheet nested={false} />
    </div>
  )
}

/** The same page as the last Home section, after Showcase (the sidebar Contact entry scrolls Home to #contact). */
export function ContactSection() {
  return (
    <section id="contact" className="pg pg--section ct" aria-labelledby="contact-title">
      <PageHeader level={2} id="contact-title" eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <ContactSheet nested />
    </section>
  )
}
