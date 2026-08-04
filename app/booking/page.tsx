import type { Metadata } from 'next'
import Link from 'next/link'
import { wa, CAL_LINK, bookingSteps, bookingOptions } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Book Your Session',
  description:
    'Book a DanceSoulTherapy session in seconds — group classes, private sessions, outdoor and retreats. Pay on-site or online.',
}

export default function Booking() {
  return (
    <>
      <section className="page-hero">
        <h1>Book your session.</h1>
        <p>Three steps, no forms, no friction.</p>
      </section>

      <section className="concept tight" data-reveal>
        <div className="pillars three">
          {bookingSteps.map(([t, d]) => (
            <div key={t} className="pillar">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {CAL_LINK ? (
        <section className="offers">
          <div className="section-head">
            <p className="eyebrow">Online calendar</p>
            <h2>Pick your time.</h2>
          </div>
          <iframe
            src={`https://cal.com/${CAL_LINK}?theme=dark`}
            title="Book a session — calendar"
            style={{
              width: '100%',
              minHeight: 620,
              border: '1px solid var(--hairline)',
              borderRadius: 2,
            }}
          />
        </section>
      ) : (
        <section className="offers" data-reveal>
          <div className="section-head">
            <p className="eyebrow">One tap</p>
            <h2>Choose your experience.</h2>
          </div>
          {/* Rows, not cards — a booking link must not wear the price token. */}
          <div className="tap-list">
            {bookingOptions.map(([t, msg]) => (
              <a
                key={t}
                href={wa(msg)}
                target="_blank"
                rel="noreferrer"
                className="tap-row"
              >
                <span className="label">{t}</span>
                <span className="go">Open WhatsApp →</span>
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
        <Link href="/experiences" className="btn btn-ghost">
          See the schedule
        </Link>
      </section>
    </>
  )
}
