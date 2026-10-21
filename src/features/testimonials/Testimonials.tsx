import { createElement } from 'react'
import { testimonials } from '@/content/testimonials'
import './testimonials.css'

export function Testimonials() {
  if (!testimonials.items.length) return null

  return (
    <section
      className="pg pg--section testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <header className="testimonials__heading">
        <p className="eyebrow">Testimonials</p>
        <h2 id="testimonials-title">Working together.</h2>

        {testimonials.preview && (
          <p className="testimonials__preview">
            Design preview. The quotes and names below are placeholders.
          </p>
        )}
      </header>

      {createElement(
        'portfolio-testimonials',
        {
          className: 'testimonials__carousel',
          'data-autoplay': String(testimonials.autoplay),
        },
        <>
          <div
            className="testimonials__slides"
            id="testimonial-quotes"
          >
            {testimonials.items.map((item, index) => (
              <figure
                className="testimonials__slide"
                id={item.id}
                key={item.id}
                data-quote-slide
                data-state={index === 0 ? 'active' : 'inactive'}
                aria-hidden={index !== 0}
              >
                <span
                  className="testimonials__mark"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="testimonials__quote">
                  {item.quote}
                </blockquote>

                <figcaption className="testimonials__author">
                  {item.avatar ? (
                    <img
                      className="testimonials__avatar"
                      src={item.avatar}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="testimonials__avatar"
                      aria-hidden="true"
                    >
                      <svg
  viewBox="0 0 24 24"
  width="22"
  height="22"
  fill="currentColor"
  aria-hidden="true"
>
  <circle cx="12" cy="7.5" r="3.5" />
  <path d="M5 21v-2a7 7 0 0 1 14 0v2Z" />
</svg>
                    </span>
                  )}

                  <span className="testimonials__person">
                    <strong>{item.name}</strong>
                                        {item.role && <span>{item.role}</span>}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {testimonials.items.length > 1 && (
            <div className="testimonials__controls">
              <div
                className="testimonials__dots"
                role="group"
                aria-label="Choose a testimonial"
              >
                {testimonials.items.map((item, index) => (
                  <button
                    type="button"
                    key={item.id}
                    data-quote-index={index}
                    aria-pressed={index === 0}
                    aria-controls={item.id}
                    aria-label={
                      'Show testimonial ' + (index + 1) +
                      ' of ' + testimonials.items.length
                    }
                  >
                    <span aria-hidden="true" />
                  </button>
                ))}
              </div>

            </div>
          )}
        </>,
      )}
    </section>
  )
}