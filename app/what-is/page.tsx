import type { Metadata } from 'next'
import Link from 'next/link'
import { wa } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What Is Movement Therapy? The DanceSoul Method',
  description:
    'How guided movement and breath release stored emotion — the DanceSoul Method explained. No level required, no choreography, no judgement.',
}

const arc: [string, string, string][] = [
  ['01', 'Arrive', 'Land, settle, breathe. Build a safe container.'],
  ['02', 'Awaken', 'Wake the body, sync breath to movement.'],
  ['03', 'Express', 'Free movement — the release. This is the heart of it.'],
  ['04', 'Release', 'Slow, soften, let go.'],
  ['05', 'Integrate', 'Return to stillness. Carry the calm out with you.'],
]

export default function WhatIs() {
  return (
    <>
      <section className="page-hero">
        <h1>What is movement therapy?</h1>
        <p>
          Not a dance class. A practice where guided movement and breath let the
          body release what it holds.
        </p>
      </section>

      <section className="concept">
        <div className="section-head">
          <p className="eyebrow">The premise</p>
          <h2>Emotion lives in the body.</h2>
        </div>
        <p className="lead">
          Stress, grief and tension we don’t process are held as physical
          patterns — a tight chest, a guarded posture, a held breath. Talking
          reaches the mind; it rarely reaches the body. The DanceSoul Method uses
          movement and breath to let the body release what it carries — safely,
          without choreography, without performance.
        </p>
      </section>

      <section className="offers">
        <div className="section-head">
          <p className="eyebrow">The DanceSoul Method™</p>
          <h2>Every session follows one arc.</h2>
        </div>
        {/* An ordered arc — index rows keep the sequence readable.
            A card grid reflowed to 3+2 and broke the read order. */}
        <div className="index-table">
          {arc.map(([no, name, desc]) => (
            <div key={no} className="index-row">
              <span className="no">{no}</span>
              <span className="name">{name}</span>
              <span className="desc">{desc}</span>
              <span className="tag" />
            </div>
          ))}
        </div>
      </section>

      <section className="concept">
        <div className="section-head">
          <p className="eyebrow">Where it sits</p>
          <h2>The counterpart to meditation.</h2>
        </div>
        <p className="lead">
          Meditation stills the mind. Yoga aligns the body. Movement therapy
          moves the body to free what’s stored in it. No experience needed — if
          you can breathe, you can practise.
        </p>
      </section>

      <section className="final-cta">
        <h2>Feel it once.</h2>
        <p>The first session explains more than any words.</p>
        <a href={wa()} className="btn btn-light" target="_blank" rel="noreferrer">
          Book a session
        </a>
        <p style={{ marginTop: '1.5rem' }}>
          <Link href="/about" className="btn btn-ghost">
            Meet Hannah
          </Link>
        </p>
      </section>
    </>
  )
}
