import './App.css'

// Contacts
const WHATSAPP = '66814734649' // WhatsApp number, international format without +
const INSTAGRAM = 'https://www.instagram.com/dancesoultherapy'
const BOOK_MSG = encodeURIComponent(
  "Hi DanceSoulTherapy, I'd like to book a session 🙏",
)
const waLink = `https://wa.me/${WHATSAPP}?text=${BOOK_MSG}`

// "Rise" brand mark
function RiseMark({
  size = 44,
  arch = 'var(--gold)',
  sun = 'var(--gold)',
}: {
  size?: number
  arch?: string
  sun?: string
}) {
  return (
    <svg
      width={size}
      height={size * 0.78}
      viewBox="0 0 100 78"
      fill="none"
      strokeLinecap="round"
      strokeWidth={4}
      aria-hidden="true"
    >
      <path d="M16 66 A34 34 0 0 1 84 66" stroke={arch} />
      <line x1="20" y1="66" x2="80" y2="66" stroke={arch} />
      <path d="M37 66 A13 13 0 0 1 63 66" stroke={sun} />
      <line x1="50" y1="49" x2="50" y2="41" stroke={sun} />
      <line x1="39" y1="52" x2="34.5" y2="46.5" stroke={sun} />
      <line x1="61" y1="52" x2="65.5" y2="46.5" stroke={sun} />
    </svg>
  )
}

function Wordmark() {
  return (
    <span className="wm">
      Dance<span className="wm-gold">Soul</span>Therapy
    </span>
  )
}

const nav = [
  ['The Concept', '#concept'],
  ['Experiences', '#offers'],
  ['Private', '#private'],
  ['Hotels & Retreats', '#hotels'],
  ['About', '#about'],
  ['FAQ', '#faq'],
]

const benefits = [
  ['Release', 'what the body holds.'],
  ['Breathe', 'deeper, freer.'],
  ['Return', 'from your head to your body.'],
  ['Leave', 'lighter, clearer.'],
]

const offers = [
  {
    t: 'Group classes',
    d: 'In a group, all levels. Six sessions a week in Lamai and Chaweng, small groups (max 10).',
    p: 'from 400 THB',
  },
  {
    t: 'Kids classes',
    d: 'Dance as a space of confidence and joy. Children learn to inhabit their own bodies.',
    p: '400 THB',
  },
  {
    t: 'Private sessions',
    d: 'Tailored to you, in-studio or at home. Full attention, no eyes on you, at your own pace.',
    p: 'from 800 THB',
  },
  {
    t: 'Outdoor sessions',
    d: 'Movement meets the landscape. In a group, facing the sea, in the light of late afternoon.',
    p: 'from 500 THB / person',
  },
  {
    t: 'Hotels & Resorts',
    d: 'A signature, turnkey experience hosted on-site for your wellness guests.',
    p: '2,500 – 3,500 THB',
  },
  {
    t: 'Retreats',
    d: 'Immersive retreats built around movement and emotional release.',
    p: '6,000 – 12,000 THB',
  },
]

const testimonials = [
  [
    'I came in sceptical and left in tears — the good kind. A relief I hadn’t felt in months.',
    'Camille, expat',
  ],
  [
    'Nothing like a dance class. I released tension I didn’t even know I was carrying.',
    'Marc, resident',
  ],
  [
    'Our guests still talk about it. A truly unique experience.',
    'Manager, Chaweng resort',
  ],
]

const faqs = [
  [
    'I can’t dance. Is that a problem?',
    'Not at all — quite the opposite. There’s nothing to know. The movement is free, guided, with no choreography.',
  ],
  [
    'Is it a class or therapy?',
    'A movement-based wellbeing practice. It’s not medical care, but the emotional effect is real and immediate.',
  ],
  [
    'I’m shy and uncomfortable with my body.',
    'That’s exactly where it begins. Small group, no judgement, no pressure to “do it right”.',
  ],
  ['Are men welcome?', 'Absolutely. All bodies, all genders, all ages.'],
  [
    'How do I book?',
    'Online via WhatsApp, in seconds. Pay on-site or online.',
  ],
]

function App() {
  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <a href="#top" className="brand">
          <RiseMark size={30} />
          <Wordmark />
        </a>
        <nav className="nav">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href={waLink} className="btn btn-sm" target="_blank" rel="noreferrer">
          Book
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-mark">
            <RiseMark size={72} />
          </div>
          <p className="eyebrow">Dance therapy · Koh Samui</p>
          <h1>Move what you carry.</h1>
          <p className="hero-sub">
            One hour to release tension, find your breath again and come back to
            yourself.
          </p>
          <div className="hero-cta">
            <a href={waLink} className="btn" target="_blank" rel="noreferrer">
              Book a session
            </a>
            <a href="#concept" className="btn btn-ghost">
              Discover the concept
            </a>
          </div>
          <p className="hero-tag">Awaken · Express · Heal</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        {benefits.map(([t, d]) => (
          <div key={t} className="benefit">
            <span className="benefit-t">{t}</span>
            <span className="benefit-d">{d}</span>
          </div>
        ))}
      </section>

      {/* CONCEPT */}
      <section className="concept" id="concept">
        <div className="section-head">
          <p className="eyebrow">The concept</p>
          <h2>This isn’t a dance class.</h2>
        </div>
        <p className="lead">
          It’s a practice where free movement and breath let what you carry rise
          up and then leave: stress, tension, held-back emotion. No level, no
          eyes on you. Just your body finding its voice again.
        </p>
        <div className="pillars">
          {[
            ['Movement', 'free, intuitive, no choreography.'],
            ['Breath', 'the thread linking gesture to emotion.'],
            ['Expression', 'the body says what words won’t.'],
            ['Release', 'tension leaves, clarity returns.'],
          ].map(([t, d]) => (
            <div key={t} className="pillar">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="offers" id="offers">
        <div className="section-head">
          <p className="eyebrow">Classes & experiences</p>
          <h2>Find your format.</h2>
        </div>
        <div className="offer-grid">
          {offers.map((o) => (
            <article
              key={o.t}
              className="offer"
              id={o.t === 'Private sessions' ? 'private' : undefined}
            >
              <h3>{o.t}</h3>
              <p>{o.d}</p>
              <span className="price">{o.p}</span>
            </article>
          ))}
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="transform">
        <div className="transform-inner">
          <p className="eyebrow light">Before, after</p>
          <h2>
            You arrive weighed down.
            <br />
            You leave lighter.
          </h2>
          <p>
            A week, an emotion, tension lodged somewhere. You move. You breathe.
            You let it out. You leave present, back in tune with yourself.
          </p>
          <p className="whisper">
            It’s not magic. It’s your body doing its work.
          </p>
        </div>
      </section>

      {/* HOTELS */}
      <section className="hotels" id="hotels">
        <div className="hotels-text">
          <p className="eyebrow">Hotels · Resorts · Retreats</p>
          <h2>A signature experience for your venue.</h2>
          <p>
            Give your guests a rare, memorable practice, hosted on-site with
            premium execution. Turnkey workshops and immersive retreats.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              'Hi, I represent a hotel/resort and would like to discuss a partnership.',
            )}`}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Let’s build your experience
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-head center">
          <p className="eyebrow">They lived it</p>
          <h2>What it feels like after.</h2>
        </div>
        <div className="quotes">
          {testimonials.map(([q, a]) => (
            <blockquote key={a}>
              <p>“{q}”</p>
              <cite>— {a}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-head">
          <p className="eyebrow">Behind the brand</p>
          <h2>The body heals what the mind can’t reach.</h2>
        </div>
        <p className="lead">
          Born from a simple conviction: our emotions live in the body.
          DanceSoulTherapy is a rare space in Koh Samui — where you dance not to
          perform, but to set yourself free. Every session is an encounter: safe,
          sincere, without judgement.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-head center">
          <p className="eyebrow">Your questions</p>
          <h2>Before you come.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <RiseMark size={56} />
        <h2>One hour for you.</h2>
        <p>Book it.</p>
        <a
          href={waLink}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Book now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <RiseMark size={34} />
          <Wordmark />
        </div>
        <p>Dance therapy in Koh Samui</p>
        <p className="footer-loc">
          Lamai · Koh 33 Stadium&nbsp;&nbsp;|&nbsp;&nbsp;Chaweng · Chor Ratchawat
          Gym
        </p>
        <div className="footer-links">
          <a href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#top">Book</a>
        </div>
        <p className="signature">Awaken · Express · Heal</p>
      </footer>

      {/* MOBILE FLOATING CTA */}
      <a href={waLink} className="fab" target="_blank" rel="noreferrer">
        Book
      </a>
    </div>
  )
}

export default App
