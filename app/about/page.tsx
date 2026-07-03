import type { Metadata } from 'next'
import { wa } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Hannah — The Story Behind DanceSoulTherapy',
  description:
    'DanceSoulTherapy was founded by Hannah in Koh Samui, on one conviction: the body heals what the mind can’t reach.',
}

const principles: [string, string][] = [
  ['No level, no eyes', 'Every body is welcome. There is nothing to get right.'],
  ['A safe container', 'An intimate, judgement-free space, held with care.'],
  ['Quality over spectacle', 'One honest hour that actually moves something.'],
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1>Behind DanceSoulTherapy</h1>
        <p>The body heals what the mind can’t reach.</p>
      </section>

      <section className="about">
        <div className="section-head">
          <p className="eyebrow">Founder</p>
          <h2>Meet Hannah.</h2>
        </div>
        <p className="lead">
          Hannah founded DanceSoulTherapy in Koh Samui from a simple conviction:
          our emotions live in the body, and movement is the way back to them.
          After years exploring movement as a form of release, she built a rare
          space on the island — where you dance not to perform, but to set
          yourself free.
        </p>
        <p className="lead" style={{ marginTop: '1.4rem' }}>
          Every session she leads is an encounter: safe, sincere, without
          judgement. Here, your body has permission to say everything.
        </p>
        {/* TODO: replace with Hannah's final bio + portrait */}
      </section>

      <section className="offers">
        <div className="section-head">
          <p className="eyebrow">What she stands for</p>
          <h2>Our principles.</h2>
        </div>
        <div className="offer-grid">
          {principles.map(([t, d]) => (
            <article key={t} className="offer">
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Come as you are.</h2>
        <p>Book a session with Hannah.</p>
        <a href={wa()} className="btn btn-light" target="_blank" rel="noreferrer">
          Book now
        </a>
      </section>
    </>
  )
}
