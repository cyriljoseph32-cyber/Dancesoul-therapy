import Link from 'next/link'
import RiseMark, { Wordmark } from './RiseMark'
import { nav } from '@/lib/site'

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
      <Link href="/booking" className="btn btn-sm">
        Book
      </Link>
    </header>
  )
}
