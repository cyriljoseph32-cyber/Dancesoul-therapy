import type { Metadata } from 'next'
import { wa, faqs } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FAQ — Before You Come',
  description:
    'Do I need to dance? Is it therapy? What should I wear? Everything to know before your first DanceSoulTherapy session in Koh Samui.',
}

const all: [string, string][] = [
  ...faqs,
  [
    'What should I wear or bring?',
    'Comfortable clothes you can move in, and water. Everything else is provided. Barefoot or socks — your choice.',
  ],
  [
    'What if I get emotional during a session?',
    'That’s welcome, and more common than you’d think. The space is held for exactly that — no one will intervene, interpret or stare. You can pause any time.',
  ],
  [
    'Is it suitable during pregnancy or with an injury?',
    'Often yes, gently adapted — message us first and tell us where you’re at, so the session can be shaped around you.',
  ],
  [
    'Do you speak English and French?',
    'Yes — sessions are held in English, and French is spoken fluently.',
  ],
]

export default function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: all.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="page-hero">
        <h1>Before you come.</h1>
        <p>The honest answers to everything people wonder about.</p>
      </section>

      <section className="faq">
        <div className="faq-list">
          {all.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Still wondering?</h2>
        <p>Ask us anything — a human answers.</p>
        <a
          href={wa('Hi! I have a question before booking 🙏')}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Ask on WhatsApp
        </a>
      </section>
    </>
  )
}
