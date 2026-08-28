/**
 * The two products, described the way we would describe them to somebody who
 * has to build on them — not the way a brochure would.
 */

export const divyaMaarg = {
  slug: 'divya-maarg',
  name: 'Divya Maarg',
  sanskrit: 'दिव्य मार्ग',
  meaning: 'the divine path',
  motto: 'Ancient light. Your path.',
  status: 'In pre-launch',
  statusNote: 'Web platform built · Android build in production testing',
  since: '2025',
  one:
    'A dharmic life navigation platform. A Vedic chart computed from real ephemeris data, ' +
    'the remedies that chart actually calls for, a daily practice that keeps the reading ' +
    'alive, and puja at a verified temple with proof it happened.',
  positioning:
    'Not an astrology app. Astrology apps sell fear and sell it daily. Divya Maarg reads a ' +
    'chart, tells a person what their tradition asks of them, and then gives them somewhere ' +
    'to act on it.',
  urls: [
    { label: 'Main platform', url: 'https://divyamaarg.com', note: 'Web' },
    { label: 'Kundli engine', url: 'https://kundli.divyamaarg.com', note: 'Chart service' },
    { label: 'Android app', url: 'https://divyamaarg.com/app', note: 'APK / Play' },
  ],
  pillars: [
    {
      n: 'I',
      name: 'Jyotir Marga',
      sanskrit: 'ज्योतिर् मार्ग',
      gloss: 'The path of sacred light',
      body:
        'The birth chart. Planetary positions from the Swiss Ephemeris, vargas, dashas, ' +
        'yogas and doshas, read out in four tiers of depth rather than one generic report.',
    },
    {
      n: 'II',
      name: 'Divya Karma',
      sanskrit: 'दिव्य कर्म',
      gloss: 'Sacred action',
      body:
        'Remedies prescribed by the chart, not by a shop. Rudraksha of a stated mukhi, ' +
        'gemstones, yantras — each energised at a named temple before it is dispatched.',
    },
    {
      n: 'III',
      name: 'Divya Kriya',
      sanskrit: 'दिव्य क्रिया',
      gloss: 'Daily practice',
      body:
        'Panchanga for the user’s own location, the mantra for the day, and an alert engine ' +
        'that speaks only when the chart gives it a reason to.',
    },
    {
      n: 'IV',
      name: 'Divya Seva',
      sanskrit: 'दिव्य सेवा',
      gloss: 'Sacred service',
      body:
        'Puja booked at a verified temple with a named priest, a sankalpa in the devotee’s ' +
        'own name and gotra, and video of the ritual afterwards.',
    },
  ],
  features: [
    ['Chart engine', 'Swiss Ephemeris positions, vargas, dashas, yogas and dosha detection — computed, never templated.'],
    ['Readings', 'Four tiers of depth, each a real document rather than a longer version of the last one.'],
    ['Ask My Kundli', 'A metered conversation grounded in the user’s own saved chart, with a free lane that never calls a model.'],
    ['Cosmic Alerts', 'Daily, weekly, dasha, transit and dosha streams, delivered on the user’s own schedule and quiet hours.'],
    ['Puja booking', 'Verified temples, named priests, sankalpa in the devotee’s name, video proof after the ritual.'],
    ['Remedies', 'Temple-energised Rudraksha, gemstones and yantras, dispatched against the chart that prescribed them.'],
    ['Languages', 'English, Kannada and Hindi across the interface and the readings.'],
    ['Payments', 'Razorpay — UPI, cards, netbanking, wallets. Nothing stored on our side.'],
  ],
  stack: [
    'Next.js 14 (App Router)',
    'React',
    'Node.js · Express',
    'PostgreSQL',
    'Swiss Ephemeris',
    'React Native (Expo)',
    'Razorpay',
    'Firebase Cloud Messaging',
    'WhatsApp Business API',
    'Cloudflare',
  ],
  platforms: ['Web', 'Android', 'iOS planned'],
  numbers: [
    { n: '4', label: 'Pillars, each a working product surface' },
    { n: '3', label: 'Interface languages at launch' },
    { n: '22', suffix: '+', label: 'Tables behind a single reading' },
    { n: '12', label: 'Triggers in the alert engine' },
  ],
};

export const saiVani = {
  slug: 'sai-vani',
  name: 'Sai Vani',
  sanskrit: 'साई वाणी',
  meaning: 'the voice of Sai',
  motto: 'Shraddha and saburi, in your pocket.',
  status: 'In active build',
  statusNote: 'Library, audio, temples and AI chat shipped · pre-release',
  since: '2026',
  one:
    'A companion app for Sai devotees. The Satcharitra and other sacred texts as a real ' +
    'library with audio, the 1–108 draw, Shirdi and temple guidance, and a conversation that ' +
    'answers from the books rather than from thin air.',
  positioning:
    'The companion never claims to be Sai Baba and never promises an outcome. It speaks in ' +
    'shraddha, saburi, sincere effort and acceptance — and it hands off to real human help ' +
    'the moment somebody is in distress.',
  urls: [
    { label: 'Main site', url: 'https://saivani.org', note: 'Web' },
    { label: 'Android app', url: 'https://saivani.org/app', note: 'APK / Play' },
  ],
  builtWith: {
    partner: 'Sai Samsthana',
    note:
      'Built and maintained by Taatvam for Sai Samsthana. Devotional content — chapters, ' +
      'aarti text, darshan timings, temple details — is supplied and approved by the ' +
      'institution, never guessed by us.',
  },
  features: [
    ['Library', 'Multi-book shelf with a real reader — chapters, progress, bookmarks, streaks, seven scripts.'],
    ['Audiobooks', 'One player above the navigator, so audio survives every screen change. Mini-player, scrubber, speed, sleep timer, lock-screen controls.'],
    ['Talk to Sai', 'Grounded conversation over the published library, with a separate comfort-first mode for grief.'],
    ['Safety layer', 'A crisis keyword filter in seven scripts runs before any reply is generated, and returns a helpline. It works with the model offline.'],
    ['Ask Baba', 'The traditional 1–108 draw, with hundreds of authored answers seeded as data.'],
    ['Shirdi & temples', 'Distance-sorted temples, Baba’s life as a timeline, the eleven assurances, and a yatra guide.'],
    ['Prayer & seva', 'Sankalpa with a day counter, a journal, a seva tracker, and a family circle.'],
    ['Languages', 'English, Hindi, Marathi, Kannada, Telugu, Tamil and Malayalam.'],
    ['Offline', 'Every fetch is cached and replayed, so the app is usable on a temple’s dead signal.'],
    ['Admin', 'One dashboard. Content is uploaded, not redeployed — and it surfaces its own misconfiguration.'],
  ],
  stack: [
    'React Native (Expo)',
    'Expo Router',
    'Node.js · Express',
    'PostgreSQL',
    'Claude (Anthropic)',
    'BM25 retrieval',
    'expo-audio',
    'WhatsApp OTP',
    'Cloudflare R2',
    'Docker',
  ],
  platforms: ['Android', 'iOS', 'Web'],
  numbers: [
    { n: '7', label: 'Languages, including all reply content' },
    { n: '108', label: 'Numbers in the Ask Baba draw' },
    { n: '3', label: 'Reply tiers, crisis filter first' },
    { n: '0', label: 'Promises of a specific outcome' },
  ],
  honest: [
    'Devotional facts we do not have — a darshan timing, a temple phone number — are left blank rather than guessed. A wrong darshan time sends a devotee on a wasted journey.',
    'Retrieval is lexical, not vector. BM25 over the library is milliseconds of arithmetic, works in all seven scripts, and adds no second vendor. Embeddings are the upgrade if ranking needs it.',
    'A reply that promises an outcome, or claims to be Baba himself, is discarded before the devotee sees it and a curated answer is served instead.',
  ],
};

const products = [divyaMaarg, saiVani];
export default products;
