import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/what-is',
    '/about',
    '/group',
    '/private',
    '/corporate',
    '/retreats',
    '/testimonials',
    '/gallery',
    '/blog',
    '/faq',
    '/contact',
    '/booking',
  ].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
    priority: p === '' ? 1 : 0.7,
  }))

  const articles = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.5,
  }))

  return [...pages, ...articles]
}
