import './App.css'

// ⚙️ À personnaliser avant mise en ligne
const WHATSAPP = '66000000000' // numéro WhatsApp (format international sans +)
const INSTAGRAM = 'https://instagram.com/dancesoultherapy'
const BOOK_MSG = encodeURIComponent(
  "Bonjour DanceSoulTherapy, j'aimerais réserver une séance 🙏",
)
const waLink = `https://wa.me/${WHATSAPP}?text=${BOOK_MSG}`

const nav = [
  ['Le Concept', '#concept'],
  ['Expériences', '#offres'],
  ['Privé', '#prive'],
  ['Hôtels & Retreats', '#hotels'],
  ['À propos', '#apropos'],
  ['FAQ', '#faq'],
]

const benefits = [
  ['Relâcher', 'ce que le corps retient.'],
  ['Respirer', 'plus ample, plus libre.'],
  ['Revenir', 'de la tête vers le corps.'],
  ['Repartir', 'plus léger, plus clair.'],
]

const offers = [
  {
    t: 'Cours collectifs',
    d: 'En groupe, tous niveaux. Six rendez-vous par semaine à Lamai et Chaweng, petit groupe (10 max).',
    p: 'dès 400 THB',
  },
  {
    t: 'Cours enfants',
    d: 'La danse comme espace de confiance et de joie. L’enfant apprend à habiter son corps.',
    p: '400 THB',
  },
  {
    t: 'Séances privées',
    d: 'Sur mesure, en salle ou à domicile. Une attention entière, sans regard, à votre rythme.',
    p: 'dès 800 THB',
  },
  {
    t: 'Sessions extérieures',
    d: 'Le mouvement rencontre le paysage. En groupe, face à la mer, dans la lumière de fin de journée.',
    p: 'dès 500 THB / pers.',
  },
  {
    t: 'Hôtels & Resorts',
    d: 'Une expérience signature clé en main, animée sur votre site pour votre clientèle wellness.',
    p: '2 500 – 3 500 THB',
  },
  {
    t: 'Retreats',
    d: 'Des retraites immersives autour du mouvement et de la libération émotionnelle.',
    p: '6 000 – 12 000 THB',
  },
]

const testimonials = [
  [
    'Je suis venue sceptique, je suis repartie en larmes — les bonnes. Un soulagement que je n’avais pas senti depuis des mois.',
    'Camille, expatriée',
  ],
  [
    'Rien à voir avec un cours de danse. J’ai relâché des tensions que je portais sans le savoir.',
    'Marc, résident',
  ],
  [
    'Nos clients en parlent encore. Une expérience à part.',
    'Manager, resort Chaweng',
  ],
]

const faqs = [
  [
    'Je ne sais pas danser. C’est un problème ?',
    'Non, au contraire. Il n’y a rien à savoir. Le mouvement est libre, guidé, sans chorégraphie.',
  ],
  [
    'C’est un cours ou une thérapie ?',
    'Une pratique de bien-être par le mouvement. Ce n’est pas un soin médical, mais l’effet émotionnel est réel et immédiat.',
  ],
  [
    'Je suis timide, mal à l’aise avec mon corps.',
    'C’est justement là que ça commence. Petit groupe, cadre sans jugement, aucune obligation de « faire bien ».',
  ],
  [
    'Les hommes sont-ils bienvenus ?',
    'Oui, absolument. Tous les corps, tous les genres, tous les âges.',
  ],
  [
    'Comment réserver ?',
    'En ligne via WhatsApp, en quelques secondes. Paiement sur place ou en ligne.',
  ],
]

function App() {
  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <a href="#top" className="brand">
          DanceSoul<span>Therapy</span>
        </a>
        <nav className="nav">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href={waLink} className="btn btn-sm" target="_blank" rel="noreferrer">
          Réserver
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">Danse thérapeutique · Koh Samui</p>
          <h1>Bougez ce que vous portez.</h1>
          <p className="hero-sub">
            Une heure pour libérer les tensions, retrouver votre souffle et
            revenir à vous.
          </p>
          <div className="hero-cta">
            <a href={waLink} className="btn" target="_blank" rel="noreferrer">
              Réserver une séance
            </a>
            <a href="#concept" className="btn btn-ghost">
              Découvrir le concept
            </a>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
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
          <p className="eyebrow">Le concept</p>
          <h2>Ce n’est pas un cours de danse.</h2>
        </div>
        <p className="lead">
          C’est une pratique où le mouvement libre et la respiration laissent
          remonter, puis partir, ce que vous portez : stress, tensions, émotions
          retenues. Aucun niveau, aucun regard. Juste votre corps qui reprend la
          parole.
        </p>
        <div className="pillars">
          {[
            ['Mouvement', 'libre, intuitif, sans chorégraphie.'],
            ['Respiration', 'le fil qui relie le geste à l’émotion.'],
            ['Expression', 'le corps dit ce que les mots taisent.'],
            ['Libération', 'la tension part, la clarté revient.'],
          ].map(([t, d]) => (
            <div key={t} className="pillar">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFRES */}
      <section className="offers" id="offres">
        <div className="section-head">
          <p className="eyebrow">Cours & expériences</p>
          <h2>Trouvez votre format.</h2>
        </div>
        <div className="offer-grid">
          {offers.map((o) => (
            <article
              key={o.t}
              className="offer"
              id={o.t === 'Séances privées' ? 'prive' : undefined}
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
          <p className="eyebrow light">Avant, après</p>
          <h2>
            Vous arrivez chargé.
            <br />
            Vous repartez allégé.
          </h2>
          <p>
            Une semaine, une émotion, une tension logée quelque part. Vous
            bougez. Vous respirez. Vous laissez sortir. Vous repartez présent,
            réaccordé à vous-même.
          </p>
          <p className="whisper">
            Ce n’est pas magique. C’est votre corps qui fait son travail.
          </p>
        </div>
      </section>

      {/* HÔTELS */}
      <section className="hotels" id="hotels">
        <div className="hotels-text">
          <p className="eyebrow">Hôtels · Resorts · Retreats</p>
          <h2>Une expérience signature pour votre lieu.</h2>
          <p>
            Offrez à vos clients une pratique rare et mémorable, animée sur site
            avec une exécution premium. Ateliers clé en main et retraites
            immersives.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              'Bonjour, je représente un hôtel/resort et souhaite discuter d’un partenariat.',
            )}`}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Construisons votre expérience
          </a>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testimonials">
        <div className="section-head center">
          <p className="eyebrow">Elles & ils l’ont vécu</p>
          <h2>Ce qu’on ressent après.</h2>
        </div>
        <div className="quotes">
          {testimonials.map(([q, a]) => (
            <blockquote key={a}>
              <p>« {q} »</p>
              <cite>— {a}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* À PROPOS */}
      <section className="about" id="apropos">
        <div className="section-head">
          <p className="eyebrow">Derrière la marque</p>
          <h2>Le corps guérit ce que le mental n’atteint pas.</h2>
        </div>
        <p className="lead">
          Née d’une conviction simple : nos émotions se logent dans le corps.
          DanceSoulTherapy est un espace rare à Koh Samui — où l’on danse non
          pour performer, mais pour se libérer. Chaque séance est une rencontre :
          sécurisante, sincère, sans jugement.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-head center">
          <p className="eyebrow">Vos questions</p>
          <h2>Avant de venir.</h2>
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
        <h2>Une heure pour vous.</h2>
        <p>Réservez-la.</p>
        <a
          href={waLink}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Réserver maintenant
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          DanceSoul<span>Therapy</span>
        </div>
        <p>Danse thérapeutique à Koh Samui</p>
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
          <a href="#top">Réserver</a>
        </div>
        <p className="signature">Bougez. Respirez. Libérez.</p>
      </footer>

      {/* CTA FLOTTANT MOBILE */}
      <a href={waLink} className="fab" target="_blank" rel="noreferrer">
        Réserver
      </a>
    </div>
  )
}

export default App
