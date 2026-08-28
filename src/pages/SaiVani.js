import { Link } from 'react-router-dom';
import { saiVani as p } from '../data/products';
import company from '../data/company';
import Seo from '../components/Seo';
import {
  Arrow,
  Chip,
  Crumbs,
  Facts,
  GoLink,
  Label,
  Reveal,
  SectionHead,
  Stats,
  Tags,
} from '../components/bits';

const tiers = [
  {
    n: '01',
    title: 'The crisis filter',
    body:
      'A plain keyword match across all seven scripts. No model involved, so a devotee in danger ' +
      'reaches the helpline even when the API is down. It runs first, always, and costs nothing.',
  },
  {
    n: '02',
    title: 'Grounded in the library',
    body:
      'Retrieval over the published books, then a model call with the guardrails as its system ' +
      'prompt. The reply cites the passage it came from. Returns nothing rather than guessing.',
  },
  {
    n: '03',
    title: 'The curated engine',
    body:
      'Hand-written replies by theme, always available. It answers when there is no key, no ' +
      'network, a rate limit, or a guardrail trip — so there is never a dead end.',
  },
];

export default function SaiVani() {
  return (
    <>
      <Seo
        title="Sai Vani"
        description={
          'Sai Vani is a companion app for Sai devotees — the Satcharitra and other texts as a ' +
          'library with audio, the 1–108 draw, Shirdi guidance, and a conversation grounded in the books.'
        }
        path="/products/sai-vani"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: 'Sai Vani',
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Android, iOS',
          url: 'https://saivani.org',
          description: p.one,
          inLanguage: ['en', 'hi', 'mr', 'kn', 'te', 'ta', 'ml'],
          publisher: { '@type': 'Organization', name: company.legalNameCaps },
        }}
      />

      <section className="wrap pagehead">
        <Crumbs
          trail={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: p.name }]}
        />
        <Chip tone="plain">{p.status}</Chip>
        <h1 className="mt-2">{p.name}</h1>
        <p className="product__sanskrit mt-1">
          <span className="deva">{p.sanskrit}</span> — {p.meaning} &nbsp;·&nbsp; “{p.motto}”
        </p>
        <p className="lede">{p.one}</p>
        <div className="btn-row mt-3">
          <a className="btn" href={p.urls[0].url} target="_blank" rel="noopener noreferrer">
            saivani.org <Arrow />
          </a>
          <Link className="btn btn--ghost" to="/support">
            Support for this app
          </Link>
        </div>
      </section>

      {/* The line it will not cross */}
      <section className="wrap band band--tight">
        <div className="split">
          <div className="split__rail">
            <Label n="01">The one rule</Label>
          </div>
          <div>
            <p className="dictum">
              The companion never claims to be Sai Baba, and never promises a <em>specific</em>{' '}
              outcome.
            </p>
            <p className="mt-3" style={{ maxWidth: '44rem' }}>
              {p.positioning}
            </p>
            <p className="mt-2" style={{ maxWidth: '44rem' }}>
              This is enforced by code, not by good intentions. A reply that says “you will get the
              job”, or “within a few weeks”, or “I am Sai Baba” is discarded before the devotee sees
              it, and a curated answer is served in its place. Six of six guardrail cases verified.
            </p>
            <div className="mt-4">
              <Stats items={p.numbers} />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="wrap band band--tint">
        <SectionHead
          n="02"
          label="Built with an institution"
          title={`In partnership with ${p.builtWith.partner}.`}
        />
        <div className="split">
          <div className="split__rail">
            <p className="small muted">
              Devotional content is not ours to author. It is ours to present accurately.
            </p>
          </div>
          <div style={{ maxWidth: '44rem' }}>
            <p>{p.builtWith.note}</p>
            <p className="mt-2">
              That division has a visible consequence in the product: where we do not have a fact,
              the field is empty rather than filled. Addresses, phone numbers and darshan timings for
              Shirdi and other temples are left blank until the institution supplies them, because a
              wrong darshan time sends a devotee on a wasted journey and a plausible guess is worse
              than a gap.
            </p>
            <p className="mt-2">
              Chapter count follows the edition that is uploaded, not a number we hard-coded. Gunaji’s
              English Satcharitra is commonly published as 51 chapters; the Marathi original has 53.
              Both are legitimate, so the text decides — the uploader defines the chapters from the
              document, and nothing renumbers anything.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="wrap band">
        <div className="split">
          <div className="split__rail">
            <Label n="03">Capabilities</Label>
            <p className="small muted mt-3">
              Roughly the shape of a full devotional practice: read, listen, ask, pray, serve, and
              go.
            </p>
          </div>
          <div>
            <ul className="features">
              {p.features.map(([k, v]) => (
                <li key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Tags items={p.stack} title="Built with" />
            </div>
          </div>
        </div>
      </section>

      {/* Three tiers */}
      <section className="band band--night">
        <div className="wrap">
          <SectionHead
            n="04"
            label="How a reply is produced"
            title="Three tiers, in a fixed order."
            lede="Ordered by what must survive failure. The safety path is the simplest thing in the system precisely because it is the most important."
          />
          <ol className="principles">
            {tiers.map((t) => (
              <Reveal as="li" key={t.n}>
                <span className="numeral">{t.n}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </Reveal>
            ))}
          </ol>
          <div className="btn-row mt-5">
            <Link className="btn btn--onnight" to="/legal/ai-disclosure">
              Full AI disclosure <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Honest notes */}
      <section className="wrap band band--tight">
        <SectionHead
          n="05"
          label="Known limits"
          title="What we would tell you if you asked in private."
          lede="Published, because a partner institution and a devotee both deserve it before they commit."
        />
        <ul className="crosses" style={{ maxWidth: '46rem' }}>
          {p.honest.map((h) => (
            <li key={h}>{h}</li>
          ))}
          <li>
            Recorded human narration does not exist for every text yet — some audio is speech
            synthesis, which is harder to follow over a long passage.
          </li>
          <li>
            Billing is not wired. Plan tiers are designed but there is no payment path in the app
            today, which is why nothing on this page has a price.
          </li>
        </ul>
      </section>

      {/* Facts */}
      <section className="wrap band band--tint">
        <SectionHead n="06" label="At a glance" title="The details, and where to go next." />
        <div className="split">
          <div className="split__rail">
            <Label>Official links</Label>
            <ul className="linkset mt-2">
              {p.urls.map((u) => (
                <li key={u.url}>
                  <a href={u.url} target="_blank" rel="noopener noreferrer">
                    <span className="u">{u.url.replace('https://', '')}</span>
                    <span className="w">{u.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Facts
              rows={[
                ['Built and operated by', company.legalNameCaps],
                ['Content partner', p.builtWith.partner],
                ['Status', p.statusNote],
                ['Platforms', p.platforms.join(' · ')],
                ['Languages', 'English · Hindi · Marathi · Kannada · Telugu · Tamil · Malayalam'],
                ['Support', <Link to="/support">taatvam.com/support</Link>],
                ['Privacy', <Link to="/legal/privacy">Privacy policy</Link>],
                ['AI limits', <Link to="/legal/ai-disclosure">AI transparency</Link>],
                ['Community rules', <Link to="/legal/acceptable-use">Acceptable use</Link>],
                ['Delete account', <Link to="/legal/account-deletion">Account deletion</Link>],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <h2>The other one reads charts.</h2>
        <div className="btn-row">
          <Link className="btn" to="/products/divya-maarg">
            Divya Maarg <Arrow />
          </Link>
          <GoLink to="/products">Both products</GoLink>
        </div>
      </section>
    </>
  );
}
