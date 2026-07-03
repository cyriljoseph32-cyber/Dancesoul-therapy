import Link from 'next/link'
import RiseMark, { Wordmark } from './RiseMark'
import { wa, INSTAGRAM } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <RiseMark size={34} />
        <Wordmark />
      </div>
      <p>Dance therapy in Koh Samui</p>
      <p className="footer-loc">
        Lamai · Koh 33 Stadium&nbsp;&nbsp;|&nbsp;&nbsp;Chaweng · Chor Ratchawat Gym
      </p>
      <div className="footer-links">
        <a href={wa()} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <Link href="/">Book</Link>
      </div>
      <p className="signature">Awaken · Express · Heal</p>
    </footer>
  )
}
