import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Journal — Movement, Emotion, Wellbeing',
  description:
    'Essays on movement therapy, somatic practice and emotional wellbeing — from DanceSoulTherapy in Koh Samui.',
}

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <h1>Journal.</h1>
        <p>Short essays on movement, emotion and the practice of feeling.</p>
      </section>

      <section className="offers">
        <div className="offer-grid">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="offer link">
              <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>
                {p.category}
              </p>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="price">Read →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
