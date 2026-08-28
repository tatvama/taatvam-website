import { Link } from 'react-router-dom';
import { divyaMaarg as p } from '../data/products';
import company from '../data/company';
import Seo from '../components/Seo';
import {
  Arrow,
  Chip,
  Crumbs,
  Facts,
  GoLink,
  Grid,
  Label,
  Reveal,
  SectionHead,
  Stats,
  Tags,
} from '../components/bits';

const commerce = {
  head: ['What you buy', 'Nature', 'Paid through'],
  rows: [
    ['A chart reading, in four tiers', 'Digital', 'Store billing in-app · Razorpay on web'],
    ['Chat time packs', 'Digital', 'Store billing in-app'],
    ['Alert subscriptions', 'Digital', 'Store billing in-app'],
    ['Rudraksha, gemstones, yantras', 'Physical, shipped', 'Razorpay — never store billing'],
    ['Puja at a verified temple', 'Real-world service', 'Razorpay — never store billing'],
    ['Sankalp donation', 'Contribution', 'Razorpay'],
  ],
};

export default function DivyaMaarg() {
  return (
    <>
      <Seo
        title="Divya Maarg"
        description={
          'Divya Maarg is a dharmic life navigation platform — a computed Vedic chart, the remedies ' +
          'it prescribes, a daily practice, and puja at a verified temple with video proof.'
        }
        path="/products/divya-maarg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Divya Maarg',
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Android, Web',
          url: 'https://divyamaarg.com',
          description: p.one,
          inLanguage: ['en', 'kn', 'hi'],
          publisher: { '@type': 'Organization', name: company.legalNameCaps },
        }}
      />

      <section className="wrap pagehead">
        <Crumbs
          trail={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: p.name }]}
        />
        <Chip>{p.status}</Chip>
        <h1 className="mt-2">{p.name}</h1>
        <p className="product__sanskrit mt-1">
          <span className="deva">{p.sanskrit}</span> — {p.meaning} &nbsp;·&nbsp; “{p.motto}”
        </p>
        <p className="lede">{p.one}</p>
        <div className="btn-row mt-3">
          <a className="btn" href={p.urls[0].url} target="_blank" rel="noopener noreferrer">
            divyamaarg.com <Arrow />
          </a>
          <Link className="btn btn--ghost" to="/support">
            Support for this app
          </Link>
        </div>
      </section>

      {/* Positioning */}
      <section className="wrap band band--tight">
        <div className="split">
          <div className="split__rail">
            <Label n="01">The position</Label>
          </div>
          <div>
            <p className="dictum">
              Not an astrology app. Astrology apps sell fear and sell it <em>daily</em>.
            </p>
            <p className="mt-3" style={{ maxWidth: '44rem' }}>
              {p.positioning}
            </p>
            <p className="mt-2" style={{ maxWidth: '44rem' }}>
              A dosha is reframed as a dharmic invitation rather than a curse. Mangal is the Fire of
              Mars. Kaal Sarp is the Serpent’s Path. That is not decoration — it is the difference
              between a person acting from resolve and a person acting from dread, and it is
              enforced in the copy rules the product is written against.
            </p>
            <div className="mt-4">
              <Stats items={p.numbers} />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="wrap band band--tint">
        <SectionHead
          n="02"
          label="The four pillars"
          title="Each pillar is a working surface, not a section heading."
          lede="Read the chart, act on what it asks, keep the practice, and serve. All four exist in the product; none is a placeholder."
        />
        <ol className="pillars">
          {p.pillars.map((x) => (
            <Reveal as="li" key={x.n}>
              <span className="rn">{x.n}</span>
              <h3>
                {x.name} <span className="deva muted" style={{ fontSize: '0.8em' }}>{x.sanskrit}</span>
              </h3>
              <p className="gl">{x.gloss}</p>
              <p>{x.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Features */}
      <section className="wrap band">
        <div className="split">
          <div className="split__rail">
            <Label n="03">Capabilities</Label>
            <p className="small muted mt-3">
              The chart engine is the part that decides whether any of the rest is worth having. It
              computes; it does not look up a table and paraphrase.
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

      {/* Commerce */}
      <section className="wrap band band--tint">
        <SectionHead
          n="04"
          label="Commerce"
          title="What is for sale, and which rail it is paid on."
          lede="Divya Maarg sells across the line both app stores draw between digital content and the real world, so every purchase type is routed deliberately."
        />
        <Grid head={commerce.head} rows={commerce.rows} />
        <p className="small muted mt-3" style={{ maxWidth: '46rem' }}>
          A priest performing a ritual at a named temple, and a consecrated article shipped to a
          door, are both excluded from mandatory in-app purchase by Apple and Google alike. Routing
          them through store billing would be as wrong as routing a subscription around it. The full
          reasoning is in the{' '}
          <Link to="/app-compliance#payments" className="uline">
            compliance matrix
          </Link>
          .
        </p>
      </section>

      {/* Trust */}
      <section className="band band--night">
        <div className="wrap">
          <SectionHead n="05" label="What we stand behind" title="And what we do not claim." />
          <div className="split">
            <div className="split__rail">
              <p className="small">
                Stated here rather than in a disclaimer nobody reads, because it is the whole
                proposition.
              </p>
            </div>
            <div>
              <ul className="ticks" style={{ maxWidth: '44rem' }}>
                <li>The computation is mathematical, and we stand behind it given accurate birth details.</li>
                <li>The article you receive is genuine, of the stated mukhi or grade, and was energised at a named temple.</li>
                <li>The puja was performed, by the named priest, at the named temple, and you get video of it.</li>
                <li>The sankalpa was made in your own name and gotra.</li>
              </ul>
              <ul className="crosses mt-4" style={{ maxWidth: '44rem' }}>
                <li>We do not claim to know what will happen in your life.</li>
                <li>No reading, remedy, mantra or puja guarantees an outcome, and we will not imply that it does.</li>
                <li>Nothing here is medical, legal or financial advice — see our <Link to="/legal/ai-disclosure" style={{ color: 'inherit', textDecoration: 'underline' }}>AI and limitations page</Link>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="wrap band band--tight">
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
                ['Operated by', company.legalNameCaps],
                ['Status', p.statusNote],
                ['Platforms', p.platforms.join(' · ')],
                ['Languages', 'English · Kannada · Hindi'],
                ['Payments', 'Razorpay on web · store billing in-app'],
                ['Support', <Link to="/support">taatvam.com/support</Link>],
                ['Privacy', <Link to="/legal/privacy">Privacy policy</Link>],
                ['Refunds', <Link to="/legal/refund">Refund &amp; cancellation policy</Link>],
                ['Shipping', <Link to="/legal/shipping">Shipping &amp; delivery policy</Link>],
                ['Delete account', <Link to="/legal/account-deletion">Account deletion</Link>],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <h2>The other one is for Sai devotees.</h2>
        <div className="btn-row">
          <Link className="btn" to="/products/sai-vani">
            Sai Vani <Arrow />
          </Link>
          <GoLink to="/products">Both products</GoLink>
        </div>
      </section>
    </>
  );
}
