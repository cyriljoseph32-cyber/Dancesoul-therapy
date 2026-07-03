import type { Metadata } from 'next'
import { wa } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Movement Therapy Retreats — Koh Samui',
  description:
    'Immersive movement therapy retreats in Koh Samui — day immersions and multi-day journeys built around release and integration. From 6,000 THB.',
}

const arc: [string, string][] = [
  ['Day one · Arrive', 'Land on the island, land in your body. First arc, gently.'],
  ['The middle · Deepen', 'Daily sessions layering deeper — movement, breath, sea, silence.'],
  ['Final day · Integrate', 'Carry it home. Integration practice and a personal closing.'],
]

const options: [string, string, string][] = [
  [
    'Day immersion',
    'One full day: two arcs, breathwork, a sunset session by the sea, and shared food.',
    '6,000 THB / person',
  ],
  [
    'Signature retreat (3 days)',
    'Three days of layered practice in a private venue. Small cohort, held completely.',
    'from 12,000 THB / person',
  ],
]

export default function Retreats() {
  return (
    <>
      <section className="page-hero">
        <h1>Retreats.</h1>
        <p>
          Days built around one intention: release what a single hour can’t
          reach.
        </p>
      </section>

      <section className="concept">
        <div className="section-head">
          <p className="eyebrow">The experience</p>
          <h2>Depth needs time.</h2>
        </div>
        <p className="lead">
          A weekly class keeps you clear. A retreat goes further — days of
          layered practice where each session opens the next, in a private
          setting between jungle and sea. Small cohorts, everything held: venue,
          food, music, silence.
        </p>
        <div className="pillars three">
          {arc.map(([t, d]) => (
            <div key={t} className="pillar">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="offers">
        <div className="section-head">
          <p className="eyebrow">Formats & dates</p>
          <h2>Two ways in.</h2>
        </div>
        <div className="offer-grid two">
          {options.map(([t, d, p]) => (
            <article key={t} className="offer">
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="price">{p}</span>
            </article>
          ))}
        </div>
        <p className="fineprint">
          Next cohort dates announced on Instagram and by WhatsApp · places are
          limited by design — ask to join the waitlist.
        </p>
      </section>

      <section className="hotels">
        <div className="hotels-text">
          <p className="eyebrow">Hotels & resorts</p>
          <h2>Host the experience at your venue.</h2>
          <p>
            We design signature workshops and retreat modules for hotels and
            resorts across Koh Samui — a rare, memorable offering for your
            wellness guests, delivered turnkey. 2,500–3,500 THB per workshop.
          </p>
          <a
            href={wa('Hi, I represent a hotel/resort and would like to discuss a partnership.')}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Partner with us
          </a>
        </div>
      </section>

      <section className="final-cta">
        <h2>Join the next retreat.</h2>
        <p>Ask for dates, or tell us yours.</p>
        <a
          href={wa("Hi! I'm interested in the next retreat — could you tell me more? 🙏")}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Ask about dates
        </a>
      </section>
    </>
  )
}
