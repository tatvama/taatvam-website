import { Link } from 'react-router-dom';
import company from '../data/company';
import { divyaMaarg, saiVani } from '../data/products';
import Seo from '../components/Seo';
import { Arrow, Chip, GoLink, Label, Reveal, SectionHead, Tags } from '../components/bits';

const capabilities = [
  'Vedic computation',
  'React Native',
  'Next.js',
  'PostgreSQL',
  'Retrieval-grounded AI',
  'Seven Indian languages',
  'Payments & fulfilment',
  'Play Store & App Store',
];

const principles = [
  {
    n: '01',
    title: 'The tradition is the specification',
    body:
      'A mukhi count, a gotra, a chapter number, a darshan timing — these are not content to be ' +
      'approximated. Where we do not have the fact, we leave it blank and go and ask a priest, ' +
      'because a wrong darshan time sends a devotee on a wasted journey.',
  },
  {
    n: '02',
    title: 'No fear, and no promises',
    body:
      'The category we work in sells anxiety by the notification. We refuse it. A dosha is a ' +
      'dharmic invitation, not a curse. No product of ours will ever tell you what will happen ' +
      'to you, and a model reply that does is discarded before you see it.',
  },
  {
    n: '03',
    title: 'Safety before generation',
    body:
      'In both products the crisis filter runs before any model is called, in every script we ' +
      'support, so somebody in danger reaches a helpline even when the network is bad and the ' +
      'model is down. The most important path has to be the least fragile one.',
  },
  {
    n: '04',
    title: 'Proof, not assurance',
    body:
      'A puja comes back with video of the ritual and the priest who performed it. A grounded ' +
      'answer cites the passage it came from. If we say a thing happened, you should be able to ' +
      'check that it happened.',
  },
];

const numbers = [
  { n: '2', label: 'Products in build, both shipping this year' },
  { n: '7', label: 'Indian languages across our apps' },
  { n: '4', label: 'Platforms — web, Android, iOS, admin' },
  { n: '0', label: 'Predictions we will ever guarantee' },
];

function ProductRow({ p, to, index }) {
  return (
    <Reveal as="article" className="product">
      <div>
        <Chip tone={p.slug === 'divya-maarg' ? undefined : 'plain'}>{p.status}</Chip>
        <h3 className="product__title">{p.name}</h3>
        <p className="product__sanskrit">
          <span className="deva">{p.sanskrit}</span> — {p.meaning}
        </p>
        <a className="product__url" href={p.urls[0].url} target="_blank" rel="noopener noreferrer">
          {p.urls[0].url.replace('https://', '')}
        </a>
        <p className="mt-3" style={{ fontSize: '0.9375rem' }}>
          {p.one}
        </p>
        <div className="mt-3">
          <GoLink to={to}>Read about {p.name}</GoLink>
        </div>
      </div>

      <div>
        <Label n={index}>What it does</Label>
        <ul className="features mt-2">
          {p.features.slice(0, 5).map(([k, v]) => (
            <li key={k}>
              <span className="k">{k}</span>
              <span className="v">{v}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <Tags items={p.stack.slice(0, 6)} title="Built with" />
        </div>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title={null}
        description={
          'Taatvam is a Bengaluru product house building devotional software — Divya Maarg, a ' +
          'dharmic life navigation platform, and Sai Vani, a companion app for Sai devotees.'
        }
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: company.legalNameCaps,
          legalName: company.legalNameCaps,
          alternateName: company.brand,
          url: company.site,
          email: company.email.general,
          foundingDate: company.founded,
          description:
            'Bengaluru-based product house building devotional and spiritual technology for Indian users.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: company.address.locality,
            addressRegion: company.address.region,
            postalCode: company.address.postal,
            addressCountry: company.address.countryCode,
          },
          founder: { '@type': 'Person', name: company.people[0].name },
          makesOffer: [
            { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Divya Maarg', url: 'https://divyamaarg.com' } },
            { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Sai Vani', url: 'https://saivani.org' } },
          ],
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="wrap hero">
        <div className="hero__eyebrow">
          <span className="dot" aria-hidden="true" />
          <Label>
            {company.legalNameCaps} &nbsp;·&nbsp; {company.address.locality}
          </Label>
        </div>

        <h1>
          A product house for India’s <em>devotional</em> life.
        </h1>

        <div className="hero__grid">
          <div>
            <p className="lede">
              We build software for people who light a lamp before they open a phone. Two products,
              both ours end to end — the chart engine, the API, the app, the temple relationship and
              the parcel that arrives at the door.
            </p>
            <div className="btn-row mt-3">
              <Link className="btn" to="/products">
                See the products <Arrow />
              </Link>
              <Link className="btn btn--ghost" to="/about">
                Why we exist
              </Link>
            </div>
          </div>

          <div className="hero__meta">
            <dl>
              <div>
                <dt>Founded</dt>
                <dd>{company.founded}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{company.address.locality}, India</dd>
              </div>
              <div>
                <dt>Products live</dt>
                <dd>Divya Maarg · Sai Vani</dd>
              </div>
              <div>
                <dt>Model</dt>
                <dd>Own products, not services</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="strip">
          {capabilities.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>

      {/* ── What we are ──────────────────────────────────────────────── */}
      <section className="wrap band">
        <div className="split">
          <div className="split__rail">
            <Label n="01">What we are</Label>
          </div>
          <div>
            <p className="dictum">
              Taatvam is a <em>product</em> company, not an agency. Nobody here is billing anybody
              by the hour. We ship two things and we are judged on how well they work.
            </p>
            <div className="cols cols--2 mt-4">
              <div className="entry">
                <h4>Built, not assembled</h4>
                <p className="mt-1">
                  The ephemeris computation, the retrieval index, the audio player that survives a
                  screen lock, the admin CMS — written here. Where we buy, we name what we bought
                  and why on the {' '}
                  <Link to="/legal/subprocessors" className="uline">
                    subprocessors page
                  </Link>
                  .
                </p>
              </div>
              <div className="entry">
                <h4>Devotional first, technical second</h4>
                <p className="mt-1">
                  The hardest problems in our work are not engineering problems. They are: which
                  edition of the Satcharitra, whose translation, which priest, and what we do when
                  the temple’s recorded darshan time is wrong.
                </p>
              </div>
              <div className="entry">
                <h4>Institutions, not influencers</h4>
                <p className="mt-1">
                  Sacred content is supplied and approved by the lineage or institution it belongs
                  to. Sai Vani is built with Sai Samsthana; Divya Maarg’s readings sit within the
                  Mahavatar Babaji parampara.
                </p>
              </div>
              <div className="entry">
                <h4>India, properly</h4>
                <p className="mt-1">
                  Seven languages including the reply content, not an English app with a translate
                  toggle. Offline caching, because temples have dead signal. UPI, because that is
                  how India pays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────────────────── */}
      <section className="wrap band band--tint">
        <SectionHead
          n="02"
          label="The products"
          title="Two platforms, both in build."
          lede="Different traditions, different users, one set of standards about what devotional software is allowed to claim."
          aside={<GoLink to="/products">All products</GoLink>}
        />
        <ProductRow p={divyaMaarg} to="/products/divya-maarg" index="I" />
        <ProductRow p={saiVani} to="/products/sai-vani" index="II" />
      </section>

      {/* ── Principles ───────────────────────────────────────────────── */}
      <section className="wrap band">
        <SectionHead
          n="03"
          label="How we work"
          title="Four rules we do not trade away."
          lede="They cost us features and they cost us revenue. They are the reason the products are worth building."
        />
        <ol className="principles">
          {principles.map((p) => (
            <Reveal as="li" key={p.n}>
              <span className="numeral">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ── Numbers ──────────────────────────────────────────────────── */}
      <section className="band band--night">
        <div className="wrap">
          <SectionHead n="04" label="Where we are" title="The state of things, plainly." />
          <div className="stats">
            {numbers.map((s) => (
              <div key={s.label}>
                <span className="stat__num">{s.n}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <hr className="mt-5" />

          <div className="split mt-5">
            <div className="split__rail">
              <Label>Store readiness</Label>
            </div>
            <div>
              <p className="lede">
                Both apps go to Google Play and the App Store. Every disclosure either store
                requires — privacy, data safety, account deletion, child safety, AI content,
                payment routing, age rating — is published and mapped to the requirement it
                satisfies.
              </p>
              <div className="btn-row mt-3">
                <Link className="btn btn--onnight" to="/app-compliance">
                  The compliance matrix <Arrow />
                </Link>
                <Link className="btn btn--ghost-onnight" to="/legal">
                  All policies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closer ───────────────────────────────────────────────────── */}
      <section className="wrap band closer">
        <Label n="05">Next</Label>
        <h2 className="mt-2">
          Working on something devotional, or want to build one of these with us?
        </h2>
        <p className="lede mt-2" style={{ maxWidth: '44rem' }}>
          We are hiring engineers, a content lead and somebody to stand in temples and make the
          seva promise true. Institutions with content to bring: we would like to talk.
        </p>
        <div className="btn-row">
          <Link className="btn" to="/careers">
            Open roles <Arrow />
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
