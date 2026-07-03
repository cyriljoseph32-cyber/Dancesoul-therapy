// Single source of truth — contacts, offers, content

export const WHATSAPP = '66814734649'
export const INSTAGRAM = 'https://www.instagram.com/dancesoultherapy'
export const SITE_URL = 'https://dancesoultherapy.com'

export const wa = (msg = "Hi DanceSoulTherapy, I'd like to book a session 🙏") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export const nav = [
  { label: 'What is DST', href: '/what-is' },
  { label: 'Sessions', href: '/group' },
  { label: 'Private', href: '/private' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// Cal.com booking link — set once Hannah claims the handle (e.g. 'dancesoultherapy')
// Until set, the booking page offers the WhatsApp flow.
export const CAL_LINK = ''

export const benefits: [string, string][] = [
  ['Release', 'what the body holds.'],
  ['Breathe', 'deeper, freer.'],
  ['Return', 'from your head to your body.'],
  ['Leave', 'lighter, clearer.'],
]

export const pillars: [string, string][] = [
  ['Movement', 'free, intuitive, no choreography.'],
  ['Breath', 'the thread linking gesture to emotion.'],
  ['Expression', 'the body says what words won’t.'],
  ['Release', 'tension leaves, clarity returns.'],
]

export type Offer = { t: string; d: string; p: string; id?: string }
export const offers: Offer[] = [
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
    id: 'private',
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

export const testimonials: [string, string][] = [
  [
    'I came in sceptical and left in tears — the good kind. A relief I hadn’t felt in months.',
    'Camille, expat',
  ],
  [
    'Nothing like a dance class. I released tension I didn’t even know I was carrying.',
    'Marc, resident',
  ],
  ['Our guests still talk about it. A truly unique experience.', 'Manager, Chaweng resort'],
]

export const faqs: [string, string][] = [
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
  ['How do I book?', 'Online via WhatsApp, in seconds. Pay on-site or online.'],
]

export const schedule: [string, string, string][] = [
  // [day, time, location] — placeholder grid, confirm with Hannah
  ['Monday', '17:30', 'Lamai · Koh 33 Stadium'],
  ['Tuesday', '17:30', 'Chaweng · Chor Ratchawat Gym'],
  ['Wednesday', '17:30', 'Lamai · Koh 33 Stadium'],
  ['Thursday', '17:30', 'Chaweng · Chor Ratchawat Gym'],
  ['Friday', '17:30', 'Lamai · Koh 33 Stadium'],
  ['Saturday', '10:00 (kids) · 17:00', 'Chaweng · Chor Ratchawat Gym'],
]
