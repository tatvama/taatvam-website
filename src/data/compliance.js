/**
 * The store-submission matrix.
 *
 * Every field Google Play Console and App Store Connect will not let you past,
 * mapped to the page or the in-app screen that satisfies it. This is the page
 * we actually open during a submission, so it is written for that use — not as
 * marketing.
 *
 * status: 'published'  a public URL on this site now serves it
 *         'in-app'     satisfied inside the app, nothing to host
 *         'todo'       still on us — a console form, an artefact, or a decision
 */

export const legend = {
  published: 'Published URL',
  'in-app': 'In the app',
  todo: 'Action pending',
};

export const playRequirements = [
  {
    req: 'Privacy policy URL',
    where: 'Play Console → App content → Privacy policy',
    why: 'Mandatory for every app, whether or not it collects data. Must be a live, app-specific URL outside a login wall.',
    satisfy: '/legal/privacy',
    status: 'published',
  },
  {
    req: 'Data safety form',
    where: 'Play Console → App content → Data safety',
    why: 'Declares what you collect, why, whether it is shared, whether it is encrypted in transit, and whether deletion can be requested. It must match the privacy policy exactly — a mismatch is a removal, not a warning.',
    satisfy: '/legal/privacy',
    status: 'published',
  },
  {
    req: 'Account deletion URL',
    where: 'Play Console → App content → Data deletion',
    why: 'Required for any app that lets a user create an account. There must be a route to deletion from the web, reachable without reinstalling the app.',
    satisfy: '/legal/account-deletion',
    status: 'published',
  },
  {
    req: 'Child safety standards policy',
    where: 'Play Console → App content → Child safety standards',
    why: 'Required since 2024 for apps in social or user-generated-content categories. Needs a published policy URL and an in-app CSAE reporting path.',
    satisfy: '/legal/child-safety',
    status: 'published',
  },
  {
    req: 'Content rating (IARC)',
    where: 'Play Console → App content → Content ratings',
    why: 'A questionnaire, not a claim. Devotional content, user-written prayers and an AI conversation each change the answers, and the resulting rating is binding.',
    satisfy: '/app-compliance#ratings',
    status: 'published',
  },
  {
    req: 'Target audience and content',
    where: 'Play Console → App content → Target audience',
    why: 'Both our apps are declared for adults only (18+). That keeps us out of the Families policy programme and its ads and SDK restrictions.',
    satisfy: '/legal/terms',
    status: 'published',
  },
  {
    req: 'Ads declaration',
    where: 'Play Console → App content → Ads',
    why: 'Declared: no advertising in either app. If that ever changes, the declaration, the privacy policy and the data safety form all change together.',
    satisfy: '/legal/privacy',
    status: 'published',
  },
  {
    req: 'Financial features declaration',
    where: 'Play Console → App content → Financial features',
    why: 'Declared: none. We take payments for our own goods and services; we are not a lending, investment or banking app.',
    satisfy: '/legal/terms',
    status: 'published',
  },
  {
    req: 'Google Play Billing vs. an external gateway',
    where: 'Payments policy',
    why: 'Digital content consumed in the app must use Play Billing. Physical goods and real-world services — a temple-energised remedy shipped to a door, a puja performed by a priest — must not. Both our apps sell across that line, so each purchase type is routed deliberately.',
    satisfy: '/app-compliance#payments',
    status: 'published',
  },
  {
    req: 'Foreground service type declaration',
    where: 'Play Console → App content → Foreground service permissions',
    why: 'Sai Vani plays audio while the screen is off, so it declares mediaPlayback and has to justify it. Without the declaration Android 14 and above kills the service.',
    satisfy: '/products/sai-vani',
    status: 'in-app',
  },
  {
    req: 'Generative AI content policy',
    where: 'Play Console → AI-generated content',
    why: 'An app whose output is model-generated needs in-app reporting of offensive output and documented safeguards against prohibited content. Both apps ship a report control on every AI reply.',
    satisfy: '/legal/ai-disclosure',
    status: 'published',
  },
  {
    req: 'Permissions and sensitive APIs',
    where: 'Play Console → App content → Sensitive app permissions',
    why: 'We request microphone, notifications and coarse location, each on first use with a plain reason. We request no SMS, no call log, no contacts and no all-files access, which avoids the declaration forms entirely.',
    satisfy: '/legal/privacy',
    status: 'published',
  },
  {
    req: 'Support email and website',
    where: 'Play Console → Store listing',
    why: 'A working contact route is part of the listing. It is checked.',
    satisfy: '/support',
    status: 'published',
  },
  {
    req: 'Target API level and signing',
    where: 'Play Console → Release',
    why: 'An AAB signed by Play App Signing, built against the API level Google currently requires for updates. The upload key is held offline, not in the repository.',
    satisfy: null,
    status: 'todo',
  },
  {
    req: 'Closed testing before production',
    where: 'Play Console → Testing',
    why: 'A personal developer account must run a closed test with a minimum number of testers for a minimum number of days before it can apply for production access.',
    satisfy: null,
    status: 'todo',
  },
];

export const appleRequirements = [
  {
    req: 'Privacy policy URL',
    where: 'App Store Connect → App Information',
    why: 'Mandatory for every app. Must be publicly reachable and specific to the app.',
    satisfy: '/legal/privacy',
    status: 'published',
  },
  {
    req: 'Support URL',
    where: 'App Store Connect → Version Information',
    why: 'Mandatory. Must lead to actual help for this app, not to a company homepage.',
    satisfy: '/support',
    status: 'published',
  },
  {
    req: 'App privacy details',
    where: 'App Store Connect → App Privacy',
    why: 'The nutrition label. Every data type, its purpose, and whether it is linked to identity or used for tracking. Third-party SDKs count as yours.',
    satisfy: '/legal/privacy',
    status: 'published',
  },
  {
    req: 'Account deletion in the app — 5.1.1(v)',
    where: 'Guideline 5.1.1(v)',
    why: 'If an account can be created in the app, it must be deletable from inside the app. A support email alone is a rejection. The web route exists in addition, not instead.',
    satisfy: '/legal/account-deletion',
    status: 'published',
  },
  {
    req: 'In-app purchase boundary — 3.1.1 and 3.1.3(e)',
    where: 'Guideline 3.1',
    why: 'Digital content unlocked in the app goes through IAP. Physical goods and real-world services must use another method and must not use IAP. Getting this backwards is the most common rejection for a commerce app.',
    satisfy: '/app-compliance#payments',
    status: 'published',
  },
  {
    req: 'User-generated content controls — 1.2',
    where: 'Guideline 1.2',
    why: 'Sai Vani has a family circle and shared messages. That needs a content filter, a report mechanism, the ability to block a user, and published contact details.',
    satisfy: '/legal/acceptable-use',
    status: 'published',
  },
  {
    req: 'No medical, legal or financial claims — 1.4.1',
    where: 'Guideline 1.4.1',
    why: 'A chart reading and a devotional conversation must never present themselves as diagnosis, treatment or professional advice. Both products carry the disclaimer in-app and in policy.',
    satisfy: '/legal/ai-disclosure',
    status: 'published',
  },
  {
    req: 'Religious content handled respectfully — 1.1',
    where: 'Guideline 1.1',
    why: 'Devotional apps are reviewed for accuracy and respect. Our content is sourced from named institutions and priests, and the app never speaks in a deity’s voice.',
    satisfy: '/legal/ai-disclosure',
    status: 'published',
  },
  {
    req: 'Sign in with Apple — 4.8',
    where: 'Guideline 4.8',
    why: 'Required only if a third-party or social login is offered. Both apps use a phone number with an OTP and no social login, so 4.8 does not apply — which is a design decision, not an accident.',
    satisfy: '/legal/privacy',
    status: 'in-app',
  },
  {
    req: 'Login only where it is needed — 5.1.1(i) and (iv)',
    where: 'Guideline 5.1.1',
    why: 'An app may not force an account for features that do not need one. Reading, panchanga and the daily message all work signed out.',
    satisfy: null,
    status: 'in-app',
  },
  {
    req: 'Age rating questionnaire',
    where: 'App Store Connect → Age Rating',
    why: 'Answered for an unrestricted-web-access-free, AI-chat-bearing app with user content. Both apps are rated for a mature audience and declared 18+ in their terms.',
    satisfy: '/app-compliance#ratings',
    status: 'published',
  },
  {
    req: 'Export compliance / encryption',
    where: 'Info.plist → ITSAppUsesNonExemptEncryption',
    why: 'Set to false: both apps use only standard HTTPS, which is exempt. Declaring it in the plist avoids the question on every single upload.',
    satisfy: null,
    status: 'in-app',
  },
  {
    req: 'Demo account for review',
    where: 'App Store Connect → App Review Information',
    why: 'Phone-and-OTP login means a reviewer cannot sign in unaided. A permanent demo number with a fixed review code, and notes explaining it, must be attached to every submission.',
    satisfy: null,
    status: 'todo',
  },
  {
    req: 'EULA',
    where: 'App Store Connect → App Information → License Agreement',
    why: 'Either Apple’s standard EULA or a custom one. We supply our own, because our terms cover puja bookings and shipped goods that the standard text does not contemplate.',
    satisfy: '/legal/eula',
    status: 'published',
  },
  {
    req: 'Accurate metadata — 2.3',
    where: 'Guideline 2.3',
    why: 'Screenshots must be of the shipped build, the description must not promise a feature behind a flag, and no reference may be made to a platform other than the one being submitted to.',
    satisfy: '/press',
    status: 'todo',
  },
];

export const sharedRequirements = [
  {
    req: 'Terms of service',
    why: 'The contract for both the apps and the websites, including what happens to a puja that cannot be performed.',
    satisfy: '/legal/terms',
    status: 'published',
  },
  {
    req: 'Refund and cancellation policy',
    why: 'Required by both stores, by our payment gateway, and by the Consumer Protection (E-Commerce) Rules, 2020.',
    satisfy: '/legal/refund',
    status: 'published',
  },
  {
    req: 'Shipping and delivery policy',
    why: 'Divya Maarg ships physical remedies. A published dispatch and delivery commitment is a condition of accepting online payments in India.',
    satisfy: '/legal/shipping',
    status: 'published',
  },
  {
    req: 'Grievance Officer under the IT Rules, 2021',
    why: 'An intermediary hosting user content in India must publish the name and contact of a Grievance Officer and acknowledge complaints within 24 hours.',
    satisfy: '/legal/data-requests',
    status: 'published',
  },
  {
    req: 'DPDP Act, 2023 — notice, consent and rights',
    why: 'Purpose-specific notice, withdrawable consent, and the rights to access, correction, erasure and grievance redress for every Data Principal.',
    satisfy: '/legal/data-requests',
    status: 'published',
  },
  {
    req: 'Third-party subprocessors',
    why: 'Named, with what each one receives. It is what a serious buyer, an institutional partner and a store reviewer all ask for.',
    satisfy: '/legal/subprocessors',
    status: 'published',
  },
  {
    req: 'Vulnerability disclosure',
    why: 'A published route for a researcher to reach us, and a promise not to threaten them for using it.',
    satisfy: '/legal/security',
    status: 'published',
  },
  {
    req: 'Accessibility statement',
    why: 'Our target audience includes elderly devotees. Large text, read-aloud and contrast are product requirements, not a checkbox.',
    satisfy: '/legal/accessibility',
    status: 'published',
  },
];

export const paymentRouting = [
  {
    kind: 'Chart readings and reports',
    nature: 'Digital content consumed in the app',
    route: 'Store billing — Play Billing on Android, StoreKit on iOS',
    note: 'Bought on the website instead, the same report is a web purchase through Razorpay. That is permitted; what is not permitted is steering an app user to the website from inside the app.',
  },
  {
    kind: 'Chat time packs and alert subscriptions',
    nature: 'Digital content consumed in the app',
    route: 'Store billing',
    note: 'Consumables and auto-renewing subscriptions declared to each store, with restore-purchases support.',
  },
  {
    kind: 'Puja booking at a temple',
    nature: 'A real-world service performed by a person',
    route: 'Razorpay — must not use store billing',
    note: 'A priest performing a ritual at a named temple is a service delivered outside the app. Both stores exclude it from mandatory in-app purchase.',
  },
  {
    kind: 'Rudraksha, gemstones, yantras',
    nature: 'Physical goods shipped to an address',
    route: 'Razorpay — must not use store billing',
    note: 'Physical goods are explicitly outside in-app purchase on both platforms.',
  },
  {
    kind: 'Sankalp — donation',
    nature: 'A charitable contribution',
    route: 'Razorpay',
    note: 'Both stores permit collecting donations outside their billing systems; Apple requires that they are not styled as a purchase of anything.',
  },
];

export const ratings = {
  play: {
    title: 'Google Play — IARC',
    rows: [
      ['Declared target audience', '18 and over'],
      ['Families policy programme', 'Not enrolled'],
      ['User-generated content', 'Yes — prayers, journal entries, family-circle messages'],
      ['AI-generated content', 'Yes — reported in-app on every reply'],
      ['Ads', 'None'],
      ['Gambling, violence, sexual content', 'None'],
    ],
  },
  apple: {
    title: 'Apple — Age Rating',
    rows: [
      ['Rating sought', '17+ / Unrestricted app'],
      ['Unrestricted web access', 'No in-app browser to arbitrary URLs'],
      ['User-generated content', 'Yes — filtered, reportable, blockable'],
      ['Horoscopes and fortune telling', 'Disclosed — entertainment and guidance, never advice'],
      ['Medical or treatment claims', 'None'],
      ['Tracking (ATT)', 'No tracking, so no ATT prompt'],
    ],
  },
};
