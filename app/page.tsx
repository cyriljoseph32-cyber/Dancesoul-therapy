import Link from 'next/link'
import { wa, faqs } from '@/lib/site'

const arc: [string, string, string][] = [
  ['01', 'Arrive', 'Land, settle, breathe.'],
  ['02', 'Awaken', 'Wake the body, sync breath.'],
  ['03', 'Express', 'Free movement — the release.'],
  ['04', 'Integrate', 'Return. Carry the calm out.'],
]

const practice: [string, string][] = [
  ['Movement', 'free, intuitive, no choreography'],
  ['Breath', 'the thread linking gesture to emotion'],
  ['Expression', 'the body says what words won’t'],
  ['Release', 'tension leaves, clarity returns'],
]

const experiences: [string, string, string, string, string][] = [
  ['01', 'Group classes', 'Six evenings a week in Lamai and Chaweng. Ten people at most.', 'from 400 THB', '/group'],
  ['02', 'Private sessions', 'In studio, at your villa, on the beach. One hour, entirely yours.', 'from 800 THB', '/private'],
  ['03', 'Outdoor sessions', 'Movement facing the sea, in the last light of the day.', 'from 500 THB', '/booking'],
  ['04', 'Corporate', 'A physical reset for teams — on-site, beginner-safe.', 'on request', '/corporate'],
  ['05', 'Retreats', 'Day immersions and three-day journeys between jungle and sea.', 'from 6,000 THB', '/retreats'],
]

export default function Home() {
  return (
    <>
      {/* HERO — asymmetric, left-anchored */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-grid grid12 gutter" style={{ padding: 0, width: '100%' }}>
          <div style={{ gridColumn: '1 / span 8' }} data-reveal>
            <p className="micro">Movement therapy · Koh Samui</p>
            <h1>
              Move what
              <br />
              you <em>carry</em>.
            </h1>
            <p className="hero-sub">
              One hour of guided movement and breath, to release what the body
              holds and come back to yourself.
            </p>
            <div className="hero-cta">
              <a href={wa()} className="btn" target="_blank" rel="noreferrer">
                Book a session
              </a>
              <Link href="/what-is" className="btn btn-ghost">
                The practice
              </Link>
            </div>
          </div>
          <div className="hero-side" style={{ gridColumn: '11 / span 2' }}>
            <span className="hero-coord">9°30′ N — 100°03′ E</span>
            <span className="hero-rule" aria-hidden="true" />
            <span className="micro" style={{ letterSpacing: '0.3em' }}>
              Awaken · Express · Heal
            </span>
          </div>
        </div>
      </section>

      {/* THE ARC — editorial index strip */}
      <section className="arc-strip tight" aria-label="The DanceSoul arc">
        <div className="grid12">
          {arc.map(([no, t, d]) => (
            <div key={no} className="arc-item" data-reveal>
              <span className="idx">{no}</span>
              <span className="t">{t}</span>
              <span className="d">{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE — asymmetric split, overlapping panel */}
      <section className="practice" id="concept">
        <div className="grid12">
          <div className="practice-copy" data-reveal>
            <p className="eyebrow">The practice</p>
            <h2>This isn’t a dance class.</h2>
            <p className="lead" style={{ marginTop: '1.4rem' }}>
              It’s a practice where free movement and breath let what you carry
              rise up and leave — stress, tension, held-back emotion. No level,
              no eyes on you.
            </p>
            <div className="plist">
              {practice.map(([t, d], i) => (
                <div key={t} className="plist-row">
                  <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="t">{t}</span>
                    <span className="d"> — {d}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="practice-panel" data-reveal>
            <p className="q">
              “Talking reaches the mind. It rarely reaches the body.”
            </p>
            <div className="a">
              <Link href="/what-is" className="btn btn-ghost btn-sm">
                What is movement therapy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES — index table, not cards */}
      <section className="offers" id="offers">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Experiences</p>
          <h2>Choose your way in.</h2>
        </div>
        <div className="index-table" data-reveal>
          {experiences.map(([no, name, desc, tag, href]) => (
            <Link key={no} href={href} className="index-row">
              <span className="no">{no}</span>
              <span className="name">{name}</span>
              <span className="desc">{desc}</span>
              <span className="tag">{tag}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FULL-BLEED BREAK — the exhale */}
      <section className="break" aria-label="Philosophy">
        <blockquote data-reveal>
          <p>The body says what words won’t.</p>
          <cite>The DanceSoul Method</cite>
        </blockquote>
      </section>

      {/* HOTELS — offset block */}
      <section className="hotels" id="hotels">
        <div className="grid12">
          <div className="hotels-text" data-reveal>
            <p className="eyebrow">Hotels · Resorts · Retreats</p>
            <h2>A signature experience for your venue.</h2>
            <p>
              Workshops and retreat modules designed for wellness guests,
              hosted on-site across Koh Samui, delivered turnkey.
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
        </div>
      </section>

      {/* TESTIMONIALS — one voice leads */}
      <section className="testimonials">
        <div className="grid12">
          <div className="quote-lead" data-reveal>
            <p className="eyebrow">After a session</p>
            <p>
              “I came in sceptical and left in tears — the good kind. A relief
              I hadn’t felt in months.”
            </p>
            <cite style={{ display: 'block', marginTop: '1.4rem' }}>
              Camille — expat, Lamai
            </cite>
          </div>
          <div className="quote-side" data-reveal>
            <blockquote>
              <p>“Nothing like a dance class. I released tension I didn’t know I was carrying.”</p>
              <cite>Marc — resident</cite>
            </blockquote>
            <blockquote>
              <p>“Our guests still talk about it.”</p>
              <cite>Resort manager — Chaweng</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ — condensed */}
      <section className="faq" id="faq">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Before you come</p>
          <h2>The honest answers.</h2>
        </div>
        <div className="faq-list" data-reveal>
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
        <p className="eyebrow" data-reveal>Lamai · Chaweng — six evenings a week</p>
        <h2 data-reveal>One hour for you.</h2>
        <p data-reveal>Book it.</p>
        <a href={wa()} className="btn" target="_blank" rel="noreferrer" data-reveal>
          Book now
        </a>
      </section>
    </>
  )
}
