import Link from 'next/link'
import RiseMark from '@/components/RiseMark'
import {
  wa,
  WHATSAPP,
  benefits,
  pillars,
  offers,
  testimonials,
  faqs,
} from '@/lib/site'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-mark">
            <RiseMark size={72} />
          </div>
          <p className="eyebrow">Dance therapy · Koh Samui</p>
          <h1>Move what you carry.</h1>
          <p className="hero-sub">
            One hour to release tension, find your breath again and come back to
            yourself.
          </p>
          <div className="hero-cta">
            <a href={wa()} className="btn" target="_blank" rel="noreferrer">
              Book a session
            </a>
            <Link href="/what-is" className="btn btn-ghost">
              Discover the concept
            </Link>
          </div>
          <p className="hero-tag">Awaken · Express · Heal</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        {benefits.map(([t, d]) => (
          <div key={t} className="benefit">
            <span className="benefit-t">{t}</span>
            <span className="benefit-d">{d}</span>
          </div>
        ))}
      </section>

      {/* CONCEPT */}
      <section className="concept" id="concept">
        <div className="section-head">
          <p className="eyebrow">The concept</p>
          <h2>This isn’t a dance class.</h2>
        </div>
        <p className="lead">
          It’s a practice where free movement and breath let what you carry rise
          up and then leave: stress, tension, held-back emotion. No level, no
          eyes on you. Just your body finding its voice again.
        </p>
        <div className="pillars">
          {pillars.map(([t, d]) => (
            <div key={t} className="pillar">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '2.5rem' }}>
          <Link href="/what-is" className="btn btn-ghost">
            What is DanceSoulTherapy
          </Link>
        </p>
      </section>

      {/* OFFERS */}
      <section className="offers" id="offers">
        <div className="section-head">
          <p className="eyebrow">Classes & experiences</p>
          <h2>Find your format.</h2>
        </div>
        <div className="offer-grid">
          {offers.map((o) => (
            <article key={o.t} className="offer" id={o.id}>
              <h3>{o.t}</h3>
              <p>{o.d}</p>
              <span className="price">{o.p}</span>
            </article>
          ))}
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="transform">
        <div className="transform-inner">
          <p className="eyebrow light">Before, after</p>
          <h2>
            You arrive weighed down.
            <br />
            You leave lighter.
          </h2>
          <p>
            A week, an emotion, tension lodged somewhere. You move. You breathe.
            You let it out. You leave present, back in tune with yourself.
          </p>
          <p className="whisper">It’s not magic. It’s your body doing its work.</p>
        </div>
      </section>

      {/* HOTELS */}
      <section className="hotels" id="hotels">
        <div className="hotels-text">
          <p className="eyebrow">Hotels · Resorts · Retreats</p>
          <h2>A signature experience for your venue.</h2>
          <p>
            Give your guests a rare, memorable practice, hosted on-site with
            premium execution. Turnkey workshops and immersive retreats.
          </p>
          <a
            href={wa(
              'Hi, I represent a hotel/resort and would like to discuss a partnership.',
            )}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Let’s build your experience
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-head center">
          <p className="eyebrow">They lived it</p>
          <h2>What it feels like after.</h2>
        </div>
        <div className="quotes">
          {testimonials.map(([q, a]) => (
            <blockquote key={a}>
              <p>“{q}”</p>
              <cite>— {a}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="about" id="about">
        <div className="section-head">
          <p className="eyebrow">Behind the brand</p>
          <h2>The body heals what the mind can’t reach.</h2>
        </div>
        <p className="lead">
          Founded by Hannah in Koh Samui — a rare space where you dance not to
          perform, but to set yourself free. Every session is an encounter: safe,
          sincere, without judgement.
        </p>
        <p style={{ marginTop: '2rem' }}>
          <Link href="/about" className="btn btn-ghost">
            Meet Hannah
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-head center">
          <p className="eyebrow">Your questions</p>
          <h2>Before you come.</h2>
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

      {/* FINAL CTA */}
      <section className="final-cta">
        <RiseMark size={56} />
        <h2>One hour for you.</h2>
        <p>Book it.</p>
        <a
          href={wa()}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Book now
        </a>
      </section>
    </>
  )
}
