// Single source of truth — contacts, offers, content.
// Pages must not re-declare prices, links or copy that lives here.

export const WHATSAPP = '66814734649'
export const WHATSAPP_DISPLAY = '+66 81 473 4649'
export const INSTAGRAM = 'https://www.instagram.com/dancesoultherapy'
export const SITE_URL = 'https://dancesoultherapy.com'

export const wa = (msg = "Hi DanceSoulTherapy, I'd like to book a session 🙏") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

// Group and Private now live on one /experiences page; both labels are kept
// so the header still reads as designed, with Private deep-linking to its band.
export const nav = [
  { label: 'What is DST', href: '/what-is' },
  { label: 'Sessions', href: '/experiences' },
  { label: 'Private', href: '/experiences#private' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// Cal.com booking link — set once Hannah claims the handle (e.g. 'dancesoultherapy')
// Until set, the booking page offers the WhatsApp flow.
export const CAL_LINK = ''

// --- Prices — the only place a THB figure may be written ---
export const prices = {
  group: 'from 400 THB',
  groupDropIn: '400 THB',
  kids: '400 THB',
  private: 'from 800 THB',
  privateStudio: '800 THB · 60 min',
  privateVilla: 'from 1,000 THB · 60–90 min',
  outdoor: 'from 500 THB / person',
  hotels: '2,500 – 3,500 THB',
  retreats: 'from 6,000 THB',
  retreatDay: '6,000 THB / person',
  retreatMulti: 'from 12,000 THB / person',
  corporate: 'on request',
} as const

// --- Locations ---
export const locations = [
  {
    area: 'Lamai',
    venue: 'Koh 33 Stadium',
    note: 'evening sessions, see the weekly schedule.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Koh+33+Stadium+Lamai+Koh+Samui',
  },
  {
    area: 'Chaweng',
    venue: 'Chor Ratchawat Gym',
    note: 'evening sessions, see the weekly schedule.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Chor+Ratchawat+Gym+Chaweng+Koh+Samui',
  },
]

// --- Experiences index (home) ---
export const experiences: {
  no: string
  name: string
  desc: string
  tag: string
  href: string
}[] = [
  {
    no: '01',
    name: 'Group classes',
    desc: 'Six evenings a week in Lamai and Chaweng. Ten people at most.',
    tag: prices.group,
    href: '/experiences',
  },
  {
    no: '02',
    name: 'Private sessions',
    desc: 'In studio, at your villa, on the beach. One hour, entirely yours.',
    tag: prices.private,
    href: '/experiences#private',
  },
  {
    no: '03',
    name: 'Outdoor sessions',
    desc: 'Movement facing the sea, in the last light of the day.',
    tag: prices.outdoor,
    href: '/booking',
  },
  {
    no: '04',
    name: 'Corporate',
    desc: 'A physical reset for teams — on-site, beginner-safe.',
    tag: prices.corporate,
    href: '/corporate',
  },
  {
    no: '05',
    name: 'Retreats',
    desc: 'Day immersions and three-day journeys between jungle and sea.',
    tag: prices.retreats,
    href: '/retreats',
  },
]

// --- Private formats (was app/private/page.tsx) ---
export const privateFormats: [string, string, string][] = [
  [
    'In studio',
    'A dedicated space in Lamai or Chaweng, held entirely for you. The full arc, paced to your body.',
    prices.privateStudio,
  ],
  [
    'At your villa or outdoors',
    'Hannah comes to you — your terrace, your garden, the beach at golden hour. Complete privacy.',
    prices.privateVilla,
  ],
]

// --- Booking ---
export const bookingSteps: [string, string][] = [
  ['1 · Choose', 'Group, private, outdoor — or ask, and we’ll guide you.'],
  ['2 · Confirm', 'Pick a time on WhatsApp. You’ll get a confirmation right away.'],
  ['3 · Come as you are', 'Comfortable clothes, water, nothing else. Pay on-site or online.'],
]

export const bookingOptions: [string, string][] = [
  ['Group class', "Hi! I'd like to reserve a spot in a group class 🙏"],
  ['Private session', "Hi Hannah, I'd like to book a private session 🙏"],
  ['Outdoor / sunset session', "Hi! I'd like to join an outdoor session 🙏"],
  ['Retreat waitlist', "Hi! I'd like to join the retreat waitlist 🙏"],
]

export const testimonials: [string, string][] = [
  [
    'I came in sceptical and left in tears — the good kind. A relief I hadn’t felt in months.',
    'Camille — expat, Lamai',
  ],
  [
    'Nothing like a dance class. I released tension I didn’t know I was carrying.',
    'Marc — resident',
  ],
  ['Our guests still talk about it.', 'Resort manager — Chaweng'],
]

// All nine — the last four used to live only on the (now removed) /faq route.
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

export const schedule: [string, string, string][] = [
  // [day, time, location] — placeholder grid, confirm with Hannah
  ['Monday', '17:30', 'Lamai · Koh 33 Stadium'],
  ['Tuesday', '17:30', 'Chaweng · Chor Ratchawat Gym'],
  ['Wednesday', '17:30', 'Lamai · Koh 33 Stadium'],
  ['Thursday', '17:30', 'Chaweng · Chor Ratchawat Gym'],
  ['Friday', '17:30', 'Lamai · Koh 33 Stadium'],
  ['Saturday', '10:00 (kids) · 17:00', 'Chaweng · Chor Ratchawat Gym'],
]

// --- Homepage narrative spine (outcomes / pillars / process / credibility) ---

// Real, honest facts — no invented percentages.
export const outcomes: [string, string][] = [
  ['One hour', 'is enough to feel lighter'],
  ['Zero skill', 'required — no choreography, no level'],
  ['Ten people', 'at most, in every room'],
  ['Six evenings', 'a week — Lamai & Chaweng'],
]

export const pillarsHome: { no: string; t: string; d: string; href: string }[] = [
  {
    no: '01',
    t: 'The body listens',
    d: 'Stress, grief and tension live in the body as held patterns — a tight chest, a guarded posture, a shallow breath. Talking reaches the mind; movement reaches the rest. That is the premise, and the practice.',
    href: '/what-is',
  },
  {
    no: '02',
    t: 'The arc',
    d: 'Every session follows the DanceSoul Method: arrive, awaken, express, release, integrate. A repeatable structure that makes each hour safe — and each release possible.',
    href: '/what-is',
  },
  {
    no: '03',
    t: 'The sanctuary',
    d: 'Koh Samui, small rooms, low light, no mirrors. Ten people at most, held by Hannah. A place built so your body can say everything.',
    href: '/about',
  },
]

export const processSteps: [string, string, string][] = [
  ['01', 'Reach out', 'One WhatsApp message. A human answers, usually within the hour.'],
  ['02', 'Arrive', 'Comfortable clothes, water, nothing else. The room does the rest.'],
  ['03', 'Move & release', 'Guided by breath and music through the arc — no eyes on you, nothing to get right.'],
  ['04', 'Return', 'Leave lighter. Come back weekly, go private, or go deeper on a retreat.'],
]

export const held: [string, string][] = [
  ['Opt out of anything', 'Every invitation is optional. Pausing is part of the practice.'],
  ['No judgement, no mirrors', 'Nobody watches, nobody corrects. Emotion is welcome and unremarked.'],
  ['Within scope', 'A wellbeing practice, not medical care — with clear referral when someone needs more.'],
]
