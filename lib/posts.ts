// Journal — seed articles (SEO pillar/cluster). Migrates to Sanity in Phase 3.

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  body: string[] // paragraphs
}

export const posts: Post[] = [
  {
    slug: 'what-is-movement-therapy',
    title: 'What is movement therapy — and why words aren’t always enough',
    excerpt:
      'Emotion lives in the body. Here’s how guided movement and breath release what talking can’t reach.',
    date: '2026-07-01',
    category: 'The Method',
    body: [
      'We tend to treat emotion as a problem for the mind: think it through, talk it out, understand it better. Sometimes that works. Often, something stays — a tight chest, a jaw that won’t unclench, a breath that never quite reaches the belly.',
      'That residue is physical. Stress and unprocessed emotion are held in the body as patterns of tension and posture. You can understand an experience completely and still carry it.',
      'Movement therapy starts from the other end. Instead of reaching the body through the mind, it reaches the mind through the body. Guided by breath, free movement lets those held patterns surface, express, and leave — without needing to be named first.',
      'At DanceSoulTherapy, every session follows one arc: arrive, awaken, express, release, integrate. There is no choreography and no level. If you can breathe, you can practise.',
      'The most common thing people say after a first session isn’t “that was fun”. It’s “I feel lighter” — often followed by “I didn’t know I was carrying that”. That is the work.',
    ],
  },
  {
    slug: 'movement-therapy-vs-yoga',
    title: 'Movement therapy vs. yoga: what’s the difference?',
    excerpt:
      'Yoga aligns the body. Meditation stills the mind. Movement therapy moves the body to free what’s stored in it.',
    date: '2026-06-24',
    category: 'The Method',
    body: [
      'People arriving at DanceSoulTherapy often ask: “Is this like yoga?” The honest answer is no — and the difference matters.',
      'Yoga works through form. Postures are given, alignment is taught, and the practice deepens by refinement. It builds strength, flexibility and calm — through structure.',
      'Movement therapy works through freedom. Nothing is prescribed. Movement follows breath and impulse, not a shape to achieve. The aim is not a better posture but an emotional release: letting the body express and discharge what it holds.',
      'The two are complementary, not competing. Many of our regulars are dedicated yoga practitioners who come to us for the one thing a structured practice rarely gives: permission to move without doing it “right”.',
      'If yoga is a language you learn, this is the voice you already have.',
    ],
  },
  {
    slug: 'wellness-koh-samui-guide',
    title: 'A calmer Koh Samui: a short wellness guide to Lamai & Chaweng',
    excerpt:
      'Beyond the beach clubs — where to breathe, move and reset on the island’s east coast.',
    date: '2026-06-10',
    category: 'Koh Samui',
    body: [
      'Koh Samui has two speeds. There is the island of beach clubs and full-moon crowds — and, a few streets behind it, an island of gyms at golden hour, quiet shores at sunrise, and a wellness community that lives here year-round.',
      'Lamai, on the south-east coast, is the softer of the two hubs: morning markets, granite coves, and a slower rhythm that suits practice. Chaweng, busier, hides its calm in the early hours — the beach before nine belongs to runners and swimmers.',
      'Our sessions run in both: Lamai at Koh 33 Stadium and Chaweng at Chor Ratchawat Gym, six evenings a week, in small groups of ten at most. Outdoor sessions face the sea at the end of the day, when the light turns gold.',
      'If you are here for a week, our advice is simple: one sunrise swim, one sunset session, and one hour of movement for what the holiday alone won’t release.',
    ],
  },
]

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
