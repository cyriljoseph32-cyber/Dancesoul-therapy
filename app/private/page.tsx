import type { Metadata } from 'next'
import { wa } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Private Movement Therapy Sessions — Koh Samui',
  description:
    'One-to-one movement therapy tailored to you — in-studio from 800 THB, at your villa or on the beach from 1,000 THB. Full attention, no eyes on you.',
}

const formats: [string, string, string][] = [
  [
    'In studio',
    'A dedicated space in Lamai or Chaweng, held entirely for you. The full arc, paced to your body.',
    '800 THB · 60 min',
  ],
  [
    'At your villa or outdoors',
    'Hannah comes to you — your terrace, your garden, the beach at golden hour. Complete privacy.',
    'from 1,000 THB · 60–90 min',
  ],
]

export default function Private() {
  return (
    <>
      <section className="page-hero">
        <h1>Private sessions.</h1>
        <p>
          For those who want to go further, at their own pace, with no one
          watching.
        </p>
      </section>

      <section className="concept">
        <div className="section-head">
          <p className="eyebrow">Who it’s for</p>
          <h2>One hour that is entirely yours.</h2>
        </div>
        <p className="lead">
          A transition, a block, a season of burnout — or simply the wish for
          undivided attention. In private, the arc adapts to you: deeper where
          you need depth, slower where you need time. Nothing to perform,
          no one to compare with.
        </p>
      </section>

      <section className="offers">
        <div className="section-head">
          <p className="eyebrow">Two formats</p>
          <h2>Studio, or your own space.</h2>
        </div>
        <div className="offer-grid two">
          {formats.map(([t, d, p]) => (
            <article key={t} className="offer">
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="price">{p}</span>
            </article>
          ))}
        </div>
        <p className="fineprint">
          Sessions with Hannah, by appointment · packs of 5 available · couples
          and duo sessions on request.
        </p>
      </section>

      <section className="final-cta">
        <h2>Begin privately.</h2>
        <p>Tell us what you’re carrying. We’ll take it from there.</p>
        <a
          href={wa("Hi Hannah, I'd like to book a private session 🙏")}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Book a private session
        </a>
      </section>
    </>
  )
}
