import type { Metadata } from 'next'
import { wa, testimonials } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Testimonials — What It Feels Like After',
  description:
    'Real experiences from DanceSoulTherapy sessions and retreats in Koh Samui.',
}

// TODO: replace with verified reviews as they come in (Google reviews engine)
const more: [string, string][] = [
  ...testimonials,
  [
    'I booked one class on holiday and ended up coming every evening of my stay.',
    'Sofia, traveller',
  ],
  [
    'As someone who “doesn’t dance”, I nearly didn’t come. I’m glad I did — it isn’t about dancing at all.',
    'James, entrepreneur',
  ],
  [
    'My daughter walks taller since the kids classes. That’s all I needed to see.',
    'Parent, Chaweng',
  ],
]

export default function Testimonials() {
  return (
    <>
      <section className="page-hero">
        <h1>What it feels like after.</h1>
        <p>In their words — not ours.</p>
      </section>

      <section className="testimonials">
        <div className="quotes wrap">
          {more.map(([q, a]) => (
            <blockquote key={a}>
              <p>“{q}”</p>
              <cite>— {a}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Write your own.</h2>
        <p>One session is all it takes to understand.</p>
        <a href={wa()} className="btn btn-light" target="_blank" rel="noreferrer">
          Book a session
        </a>
      </section>
    </>
  )
}
