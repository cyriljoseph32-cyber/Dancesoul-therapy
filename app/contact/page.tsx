import type { Metadata } from 'next'
import { wa, WHATSAPP, INSTAGRAM } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact — DanceSoulTherapy Koh Samui',
  description:
    'Reach DanceSoulTherapy on WhatsApp or Instagram. Sessions in Lamai (Koh 33 Stadium) and Chaweng (Chor Ratchawat Gym), Koh Samui.',
}

const channels: [string, string, string][] = [
  ['WhatsApp', `+66 81 473 4649 — fastest, answered personally`, wa('Hi! 🙏')],
  ['Instagram', '@dancesoultherapy — the practice, day to day', INSTAGRAM],
]

const places: [string, string, string][] = [
  [
    'Lamai',
    'Koh 33 Stadium',
    'https://www.google.com/maps/search/?api=1&query=Koh+33+Stadium+Lamai+Koh+Samui',
  ],
  [
    'Chaweng',
    'Chor Ratchawat Gym',
    'https://www.google.com/maps/search/?api=1&query=Chor+Ratchawat+Gym+Chaweng+Koh+Samui',
  ],
]

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Get in touch.</h1>
        <p>A question, a booking, a partnership — one message away.</p>
      </section>

      <section className="offers">
        <div className="section-head">
          <p className="eyebrow">Channels</p>
          <h2>Talk to a human.</h2>
        </div>
        <div className="offer-grid two">
          {channels.map(([t, d, href]) => (
            <a key={t} href={href} target="_blank" rel="noreferrer" className="offer link">
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="price">Open →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="concept">
        <div className="section-head">
          <p className="eyebrow">Locations</p>
          <h2>Two rooms on the east coast.</h2>
        </div>
        <div className="offer-grid two">
          {places.map(([area, venue, map]) => (
            <a key={area} href={map} target="_blank" rel="noreferrer" className="offer link">
              <h3>{area}</h3>
              <p>{venue} — evening sessions, see the weekly schedule.</p>
              <span className="price">Open in Google Maps →</span>
            </a>
          ))}
        </div>
        <p className="fineprint">
          WhatsApp +{WHATSAPP} · Koh Samui, Surat Thani, Thailand
        </p>
      </section>

      <section className="final-cta">
        <h2>Say hello.</h2>
        <p>We reply quickly — and kindly.</p>
        <a href={wa('Hi! 🙏')} className="btn btn-light" target="_blank" rel="noreferrer">
          Message on WhatsApp
        </a>
      </section>
    </>
  )
}
