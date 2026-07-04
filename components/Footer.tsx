import Link from 'next/link'
import RiseMark, { Wordmark } from './RiseMark'
import { wa, INSTAGRAM } from '@/lib/site'

const explore = [
  ['The practice', '/what-is'],
  ['Group classes', '/group'],
  ['Private sessions', '/private'],
  ['Retreats', '/retreats'],
  ['Journal', '/blog'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <RiseMark size={30} />
            <Wordmark />
          </div>
          <p>Movement therapy in Koh Samui.</p>
          <p className="footer-loc">
            Lamai · Koh 33 Stadium — Chaweng · Chor Ratchawat Gym
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            {explore.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="footer-links">
            <a href={wa()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <Link href="/booking">Book a session</Link>
            <Link href="/contact">All contact details</Link>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <p>© {new Date().getFullYear()} DanceSoulTherapy — Koh Samui, Thailand</p>
        <p className="signature">Awaken · Express · Heal</p>
      </div>
    </footer>
  )
}
