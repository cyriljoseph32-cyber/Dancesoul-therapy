import Link from 'next/link'
import RiseMark, { Wordmark } from './RiseMark'
import { nav, wa } from '@/lib/site'

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand" aria-label="DanceSoulTherapy home">
        <RiseMark size={30} />
        <Wordmark />
      </Link>
      <nav className="nav">
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
      </nav>
      <a href={wa()} className="btn btn-sm" target="_blank" rel="noreferrer">
        Book
      </a>
    </header>
  )
}
