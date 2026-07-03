import type { Metadata } from 'next'
import { wa } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Corporate Wellness & Team Movement — Koh Samui',
  description:
    'On-site movement therapy for teams, retreats and offsites in Koh Samui. Reduce stress, restore presence — a wellbeing session your team will remember.',
}

const formats: [string, string][] = [
  [
    'Team session (60 min)',
    'A guided movement session at your venue or ours. Beginner-safe framing, immediate stress release.',
  ],
  [
    'Offsite & retreat module',
    'Integrated into your company offsite — the session everyone still talks about on Monday.',
  ],
  [
    'Recurring programme',
    'Weekly or monthly sessions for teams based on the island. Wellbeing that compounds.',
  ],
]

export default function Corporate() {
  return (
    <>
      <section className="page-hero">
        <h1>Corporate wellbeing, in motion.</h1>
        <p>
          Your team doesn’t need another lecture on stress. It needs an hour
          that actually releases it.
        </p>
      </section>

      <section className="concept">
        <div className="section-head">
          <p className="eyebrow">The problem</p>
          <h2>Burnout isn’t solved by thinking.</h2>
        </div>
        <p className="lead">
          Screens, deadlines and pressure live in the body — shoulders, jaw,
          breath. A movement session gives your team what mindfulness apps
          can’t: a physical reset, together, with no skill required and no one
          made to feel awkward. People leave lighter, clearer, and more present
          with each other.
        </p>
      </section>

      <section className="offers">
        <div className="section-head">
          <p className="eyebrow">Formats</p>
          <h2>Built around your team.</h2>
        </div>
        <div className="offer-grid">
          {formats.map(([t, d]) => (
            <article key={t} className="offer">
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="fineprint">
          Groups up to 20 · English & French · on-site anywhere in Koh Samui ·
          proposals within 48 h.
        </p>
      </section>

      <section className="final-cta">
        <h2>Give your team an hour back.</h2>
        <p>Tell us your team size and dates — we’ll send a proposal.</p>
        <a
          href={wa('Hi, I’d like a corporate wellness proposal for my team.')}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Request a proposal
        </a>
      </section>
    </>
  )
}
