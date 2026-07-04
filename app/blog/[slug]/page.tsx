import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/lib/posts'
import { wa, SITE_URL } from '@/lib/site'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Hannah — DanceSoulTherapy' },
    url: `${SITE_URL}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="page-hero">
        <p className="eyebrow">{post.category}</p>
        <h1 style={{ maxWidth: '20ch' }}>{post.title}</h1>
        <p>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </section>

      <section className="concept">
        <article className="article">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
        <p style={{ marginTop: '3rem' }}>
          <Link href="/blog" className="btn btn-ghost">
            ← All essays
          </Link>
        </p>
      </section>

      <section className="final-cta">
        <h2>Reading is one thing.</h2>
        <p>Feeling it is another.</p>
        <a href={wa()} className="btn btn-light" target="_blank" rel="noreferrer">
          Book a session
        </a>
      </section>
    </>
  )
}
