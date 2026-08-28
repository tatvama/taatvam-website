/**
 * Openings. Keep this honest — an empty list with a good "write to us anyway"
 * note reads far better than four invented roles.
 */

export const openings = [
  {
    id: 'fullstack-engineer',
    title: 'Full-stack Engineer',
    team: 'Engineering',
    location: 'Bengaluru · On-site',
    type: 'Full-time',
    experience: '2–5 years',
    body:
      'You will own features end to end across a Next.js web app, an Express API and a ' +
      'PostgreSQL schema that is already load-bearing. We do not have a separate frontend ' +
      'team to hand work to.',
    looking: [
      'Comfortable in JavaScript across the stack, and willing to read SQL rather than hide behind an ORM.',
      'Has shipped something real to real users and stayed to fix it afterwards.',
      'Can write copy that does not need a rewrite before it ships.',
    ],
  },
  {
    id: 'mobile-engineer',
    title: 'Mobile Engineer — React Native',
    team: 'Engineering',
    location: 'Bengaluru · On-site',
    type: 'Full-time',
    experience: '2–5 years',
    body:
      'Two Expo apps, both heading for the Play Store and the App Store. Background audio, ' +
      'push notifications, deep links, offline caching and store review — the parts of mobile ' +
      'that are genuinely hard rather than the parts that are just screens.',
    looking: [
      'Has taken an app through Play Console and App Store Connect review, including a rejection.',
      'Understands why background audio dies after three minutes on Android, or is keen to find out.',
      'Tests on a cheap device on a bad network, not only on a simulator.',
    ],
  },
  {
    id: 'content-sanskrit',
    title: 'Devotional Content Lead',
    team: 'Content',
    location: 'Bengaluru · Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    body:
      'Every line of scripture, every mantra transliteration, every dosha description and every ' +
      'darshan timing on our platforms passes through this role. It is the difference between a ' +
      'product a devotee trusts and one they abandon.',
    looking: [
      'Reads Sanskrit and at least two of Kannada, Hindi, Marathi, Telugu, Tamil or Malayalam.',
      'Knows the difference between a source and a summary of a source, and cites the first.',
      'Will say "I do not know, let me ask the priest" instead of filling a gap.',
    ],
  },
  {
    id: 'ops-temple-relations',
    title: 'Temple & Seva Operations',
    team: 'Operations',
    location: 'Bengaluru · Field',
    type: 'Full-time',
    experience: '2+ years',
    body:
      'Divya Maarg promises a puja performed at a named temple by a named priest, with video ' +
      'proof. Somebody has to stand in those temples and make that true. That is this role.',
    looking: [
      'Willing to travel across Karnataka and neighbouring states regularly.',
      'Can hold a professional relationship with temple administrations and priests over years.',
      'Fluent in Kannada; Telugu, Tamil or Hindi is a strong plus.',
    ],
  },
];

export const hiringPrinciples = [
  {
    title: 'We hire for judgement, not for a stack',
    body:
      'Frameworks are learnable in a fortnight. Knowing which of two correct-looking options ' +
      'will still be correct in eighteen months is not.',
  },
  {
    title: 'You will talk to the people who use it',
    body:
      'Everybody here has read the support inbox. A product built for devotees cannot be built ' +
      'by people who have never sat with one.',
  },
  {
    title: 'Small team, real ownership',
    body:
      'Nobody is handed a ticket queue. You are handed a surface, its users and its consequences, ' +
      'and asked what it should be.',
  },
  {
    title: 'The subject matter is not a theme',
    body:
      'We ship devotional software. You do not have to be a believer, but you do have to treat ' +
      'what people believe as real, and get the details right because they matter to somebody.',
  },
];

export const process = [
  { step: '01', title: 'A written note', body: 'Email us. Tell us what you have built and what you would want to work on here. No cover letter template — a few honest paragraphs.' },
  { step: '02', title: 'A conversation', body: 'Forty-five minutes on your work and ours. You will speak with the founder, not a screener.' },
  { step: '03', title: 'A paid exercise', body: 'A small, real problem from our actual backlog, scoped to a day. We pay for your day at a fair market rate whatever the outcome.' },
  { step: '04', title: 'A day with the team', body: 'You sit with us, look at the code and the roadmap, and ask anything. Then we both decide.' },
];
