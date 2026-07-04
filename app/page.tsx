import Link from 'next/link'
import { wa, outcomes, pillarsHome, processSteps, held } from '@/lib/site'

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
      {/* 1 · HERO — promise */}
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

      {/* 2 · OUTCOMES STRIP — honest facts */}
      <section className="arc-strip tight" aria-label="What to expect">
        <div className="grid12">
          {outcomes.map(([t, d]) => (
            <div key={t} className="arc-item" data-reveal>
              <span className="t">{t}</span>
              <span className="d">{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · THREE PILLARS — premise, method, place */}
      <section className="pillars-home" id="concept">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Why it works</p>
          <h2>Not a dance class. A practice.</h2>
        </div>
        <div className="ph-grid">
          {pillarsHome.map((p, i) => (
            <Link
              key={p.no}
              href={p.href}
              className={`ph-block ${i === 0 ? 'wide' : ''}`}
              data-reveal
            >
              <span className="idx">{p.no}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <span className="ph-more">Read more</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 · PROCESS — diagonal four steps */}
      <section className="process" aria-label="How it works">
        <div className="section-head" data-reveal>
          <p className="eyebrow">How it begins</p>
          <h2>Four steps, no forms.</h2>
        </div>
        <ol className="steps">
          {processSteps.map(([no, t, d], i) => (
            <li key={no} className="step" style={{ ['--i' as string]: i }} data-reveal>
              <span className="idx">{no}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* EXPERIENCES — the offer (index table) */}
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

      {/* 5 · TESTIMONIALS — proof */}
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

      {/* 6 · TRUST / CREDIBILITY — held safely */}
      <section className="credibility" id="hotels">
        <div className="grid12">
          <div className="cred-left" data-reveal>
            <p className="eyebrow">Held safely</p>
            <h2>The room is built for trust.</h2>
            <div className="cred-list">
              {held.map(([t, d]) => (
                <div key={t} className="cred-item">
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cred-right" data-reveal>
            <div className="cred-block">
              <h4>Where</h4>
              <p>
                Lamai — Koh 33 Stadium
                <br />
                Chaweng — Chor Ratchawat Gym
              </p>
              <Link href="/contact" className="ph-more">
                Maps & contact
              </Link>
            </div>
            <div className="cred-block">
              <h4>With hotels & resorts</h4>
              <p>Signature workshops hosted on-site across Koh Samui.</p>
              <Link href="/retreats" className="ph-more">
                Partnerships
              </Link>
            </div>
            <div className="cred-block">
              <h4>Questions first?</h4>
              <p>The honest answers, before you come.</p>
              <Link href="/faq" className="ph-more">
                Read the FAQ
              </Link>
            </div>
          </div>
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
