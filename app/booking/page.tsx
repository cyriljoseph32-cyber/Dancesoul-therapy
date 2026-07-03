import type { Metadata } from 'next'
import Link from 'next/link'
import { wa, CAL_LINK } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Book Your Session',
  description:
    'Book a DanceSoulTherapy session in seconds — group classes, private sessions, outdoor and retreats. Pay on-site or online.',
}

const steps: [string, string][] = [
  ['1 · Choose', 'Group, private, outdoor — or ask, and we’ll guide you.'],
  ['2 · Confirm', 'Pick a time on WhatsApp. You’ll get a confirmation right away.'],
  ['3 · Come as you are', 'Comfortable clothes, water, nothing else. Pay on-site or online.'],
]

const quick: [string, string][] = [
  ['Group class', "Hi! I'd like to reserve a spot in a group class 🙏"],
  ['Private session', "Hi Hannah, I'd like to book a private session 🙏"],
  ['Outdoor / sunset session', "Hi! I'd like to join an outdoor session 🙏"],
  ['Retreat waitlist', "Hi! I'd like to join the retreat waitlist 🙏"],
]

export default function Booking() {
  return (
    <>
      <section className="page-hero">
        <h1>Book your session.</h1>
        <p>Three steps, no forms, no friction.</p>
      </section>

      <section className="concept">
        <div className="pillars three">
          {steps.map(([t, d]) => (
            <div key={t} className="pillar">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {CAL_LINK ? (
        <section className="offers">
          <div className="section-head center">
            <p className="eyebrow">Online calendar</p>
            <h2>Pick your time.</h2>
          </div>
          <iframe
            src={`https://cal.com/${CAL_LINK}?theme=dark`}
            title="Book a session — calendar"
            style={{
              width: '100%',
              minHeight: 620,
              border: '1px solid var(--line)',
              borderRadius: 18,
            }}
          />
        </section>
      ) : (
        <section className="offers">
          <div className="section-head">
            <p className="eyebrow">One tap</p>
            <h2>Choose your experience.</h2>
          </div>
          <div className="offer-grid two">
            {quick.map(([t, msg]) => (
              <a
                key={t}
                href={wa(msg)}
                target="_blank"
                rel="noreferrer"
                className="offer link"
              >
                <h3>{t}</h3>
                <p>Opens WhatsApp with your request pre-written — just send.</p>
                <span className="price">Book →</span>
              </a>
            ))}
          </div>
          <p className="fineprint">
            Online calendar booking (Cal.com) arrives soon — WhatsApp remains
            the fastest way and always will work.
          </p>
        </section>
      )}

      <section className="final-cta">
        <h2>See you in the room.</h2>
        <p>Lamai or Chaweng — six evenings a week.</p>
        <Link href="/group" className="btn btn-light">
          See the schedule
        </Link>
      </section>
    </>
  )
}
