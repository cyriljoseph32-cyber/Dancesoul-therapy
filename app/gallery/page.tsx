import type { Metadata } from 'next'
import { wa, INSTAGRAM } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Gallery — In Motion',
  description: 'Movement, light and place — DanceSoulTherapy in Koh Samui.',
}

// TODO: replace tiles with the commissioned brand shoot (real movement, golden light)
const tiles: [string, string][] = [
  ['Sunset session · Lamai', 'g1'],
  ['The arc, mid-express', 'g2'],
  ['Breath before movement', 'g3'],
  ['Group class · Chaweng', 'g4'],
  ['Retreat · integration', 'g5'],
  ['Outdoor · golden hour', 'g6'],
]

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <h1>In motion.</h1>
        <p>Movement, light and place. Follow the practice day-to-day on Instagram.</p>
      </section>

      <section className="offers">
        <div className="gallery-grid">
          {tiles.map(([cap, tone]) => (
            <figure key={cap} className={`g-tile ${tone}`}>
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
        <p className="fineprint" style={{ textAlign: 'center' }}>
          Full gallery coming with our brand shoot — meanwhile, the practice
          lives on{' '}
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>
            Instagram
          </a>
          .
        </p>
      </section>

      <section className="final-cta">
        <h2>Better felt than seen.</h2>
        <p>Come move with us.</p>
        <a href={wa()} className="btn btn-light" target="_blank" rel="noreferrer">
          Book a session
        </a>
      </section>
    </>
  )
}
