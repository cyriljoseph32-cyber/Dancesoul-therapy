import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'
import { wa, SITE_URL, WHATSAPP, INSTAGRAM } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DanceSoulTherapy — Dance Therapy in Koh Samui',
    template: '%s — DanceSoulTherapy',
  },
  description:
    'Release tension and emotion through guided movement and breath. Premium movement therapy, private sessions and retreats in Koh Samui.',
  openGraph: {
    title: 'DanceSoulTherapy — Dance Therapy in Koh Samui',
    description:
      'Move what you carry. One hour to release tension and come back to yourself.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'DanceSoulTherapy',
  },
  icons: { icon: '/favicon.svg' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'DanceSoulTherapy',
  description:
    'Movement therapy — releasing emotion through guided movement and breath. Koh Samui, Thailand.',
  url: SITE_URL,
  telephone: `+${WHATSAPP}`,
  sameAs: [INSTAGRAM],
  areaServed: 'Koh Samui',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Koh Samui',
    addressRegion: 'Surat Thani',
    addressCountry: 'TH',
  },
  slogan: 'Awaken · Express · Heal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#10362B" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <RevealInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <a href={wa()} className="fab" target="_blank" rel="noreferrer">
          Book
        </a>
      </body>
    </html>
  )
}
