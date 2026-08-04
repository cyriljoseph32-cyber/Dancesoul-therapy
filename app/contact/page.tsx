import type { Metadata } from 'next'
import { wa, WHATSAPP_DISPLAY, INSTAGRAM, locations, faqs } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & FAQ — DanceSoulTherapy Koh Samui',
  description:
    'Reach DanceSoulTherapy on WhatsApp or Instagram, find both rooms in Lamai and Chaweng, and read the honest answers to everything people wonder about before a first session.',
}

const channels: [string, string, string][] = [
  ['WhatsApp', `${WHATSAPP_DISPLAY} — fastest, answered personally`, wa('Hi! 🙏')],
  ['Instagram', '@dancesoultherapy — the practice, day to day', INSTAGRAM],
]

export default function Contact() {
  // Carried over from the removed /faq route — dropping it would regress SEO.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-hero">
        <h1>Get in touch.</h1>
        <p>A question, a booking, a partnership — one message away.</p>
      </section>

      <section className="offers" data-reveal>
        <div className="section-head">
          <p className="eyebrow">Channels</p>
          <h2>Talk to a human.</h2>
        </div>
        <div className="offer-grid two">
          {channels.map(([t, d, href]) => (
            <a
              key={t}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="offer link"
            >
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="go">Open →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="concept" data-reveal>
        <div className="section-head">
          <p className="eyebrow">Locations</p>
          <h2>Two rooms on the east coast.</h2>
        </div>
        <div className="offer-grid two">
          {locations.map(({ area, venue, note, maps }) => (
            <a
              key={area}
              href={maps}
              target="_blank"
              rel="noreferrer"
              className="offer link"
            >
              <h3>{area}</h3>
              <p>
                {venue} — {note}
              </p>
              <span className="go">Open in Google Maps →</span>
            </a>
          ))}
        </div>
        <p className="fineprint">
          WhatsApp {WHATSAPP_DISPLAY} · Koh Samui, Surat Thani, Thailand
        </p>
      </section>

      <section className="faq" data-reveal>
        <div className="section-head">
          <p className="eyebrow">Before you come</p>
          <h2>FAQ.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Say hello.</h2>
        <p>We reply quickly — and kindly.</p>
        <a
          href={wa('Hi! 🙏')}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Message on WhatsApp
        </a>
      </section>
    </>
  )
}
