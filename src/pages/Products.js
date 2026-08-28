import { Link } from 'react-router-dom';
import { divyaMaarg, saiVani } from '../data/products';
import Seo from '../components/Seo';
import { Arrow, Chip, Crumbs, GoLink, Label, Reveal, SectionHead, Tags } from '../components/bits';

const comparison = {
  head: ['', 'Divya Maarg', 'Sai Vani'],
  rows: [
    ['Tradition', 'Vedic jyotisha, Mahavatar Babaji parampara', 'Sai Baba of Shirdi, with Sai Samsthana'],
    ['Core question it answers', '“What does my chart ask of me, and what do I do about it?”', '“How do I keep faith and patience today?”'],
    ['Primary surface', 'Web platform, with a companion app', 'Mobile app, with a supporting site'],
    ['Languages', 'English, Kannada, Hindi', 'English, Hindi, Marathi, Kannada, Telugu, Tamil, Malayalam'],
    ['What you can buy', 'Readings, chat time, alert packs, remedies, puja bookings, donations', 'Nothing yet — plan tiers designed, billing not wired'],
    ['AI grounding', 'Your own computed chart and saved reading', 'Retrieval over the published devotional library'],
    ['Physical fulfilment', 'Yes — temple-energised articles shipped', 'No'],
    ['Store status', 'Android in production testing, iOS planned', 'Pre-release on Android and iOS'],
  ],
};

function Card({ p, to }) {
  return (
    <Reveal as="article" className="product">
      <div>
        <Chip tone={p.slug === 'sai-vani' ? 'plain' : undefined}>{p.status}</Chip>
        <h2 className="product__title" style={{ fontSize: 'var(--step-3)' }}>
          {p.name}
        </h2>
        <p className="product__sanskrit">
          <span className="deva">{p.sanskrit}</span> — {p.meaning}
        </p>
        <p style={{ fontSize: '0.9375rem' }}>{p.one}</p>
        <p className="small muted mt-2">{p.statusNote}</p>
        <div className="btn-row mt-3">
          <Link className="btn btn--sm" to={to}>
            Full detail <Arrow />
          </Link>
          <a
            className="btn btn--sm btn--ghost"
            href={p.urls[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {p.urls[0].url.replace('https://', '')}
          </a>
        </div>
      </div>

      <div>
        <Label>Links</Label>
        <ul className="linkset mt-2">
          {p.urls.map((u) => (
            <li key={u.url}>
              <a href={u.url} target="_blank" rel="noopener noreferrer">
                <span>
                  <span className="u">{u.url.replace('https://', '')}</span>
                  <br />
                  <span className="small muted">{u.label}</span>
                </span>
                <span className="w">{u.note}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <Tags items={p.platforms} title="Platforms" />
        </div>
      </div>
    </Reveal>
  );
}

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description={
          'Divya Maarg — a dharmic life navigation platform. Sai Vani — a companion app for Sai ' +
          'devotees. Both built and operated by Taatvam in Bengaluru.'
        }
        path="/products"
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />
        <span className="label">What we make</span>
        <h1>Two products. Both ours end to end.</h1>
        <p className="lede">
          We do not take client work, so this page is the whole company. Each product owns its
          computation, its content pipeline, its apps and its fulfilment — and each carries the same
          refusal to trade a devotee’s trust for a conversion.
        </p>
      </section>

      <section className="wrap band band--tight" style={{ paddingTop: 0 }}>
        <Card p={divyaMaarg} to="/products/divya-maarg" />
        <Card p={saiVani} to="/products/sai-vani" />
      </section>

      <section className="wrap band band--tint">
        <SectionHead
          n="01"
          label="Side by side"
          title="Where they differ."
          lede="They share a spine — auth, payments, i18n, offline caching, the safety layer — and almost nothing else. Different traditions do not take kindly to a shared template."
        />
        <div className="table-scroll">
          <table className="grid">
            <thead>
              <tr>
                {comparison.head.map((h, i) => (
                  <th key={i} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r) => (
                <tr key={r[0]}>
                  <th scope="row" style={{ fontWeight: 500, color: 'var(--ink)' }}>
                    {r[0]}
                  </th>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="band band--night">
        <div className="wrap">
          <SectionHead
            n="02"
            label="Common ground"
            title="What both products are built on."
          />
          <div className="cols cols--3 cols--ruled">
            <div className="entry">
              <h4>One safety layer</h4>
              <p className="mt-1">
                A crisis keyword filter in every script we support, running before any model call, so
                it works when the network does not. Identical logic in both products.
              </p>
            </div>
            <div className="entry">
              <h4>Phone-number identity</h4>
              <p className="mt-1">
                A mobile number and a one-time password. No stored password to leak, and no social
                login — which also means Apple’s Sign in with Apple requirement never applies.
              </p>
            </div>
            <div className="entry">
              <h4>Offline first</h4>
              <p className="mt-1">
                Every fetch is cached and replayed. A temple basement has no signal, and that is
                exactly where somebody wants to read a chapter.
              </p>
            </div>
            <div className="entry">
              <h4>Content is uploaded, not deployed</h4>
              <p className="mt-1">
                An admin dashboard rather than a source edit. The institution changes its own
                content without waiting for an engineer.
              </p>
            </div>
            <div className="entry">
              <h4>Operator cannot read your diary</h4>
              <p className="mt-1">
                Admin views are built to show counts, not content. It is a schema decision, not a
                policy promise.
              </p>
            </div>
            <div className="entry">
              <h4>Payment routing by law, not convenience</h4>
              <p className="mt-1">
                Digital goods through store billing; physical articles and temple services through
                our gateway. Getting that backwards is the commonest store rejection there is.
              </p>
            </div>
          </div>
          <div className="btn-row mt-5">
            <Link className="btn btn--onnight" to="/app-compliance">
              Store compliance matrix <Arrow />
            </Link>
            <Link className="btn btn--ghost-onnight" to="/legal/ai-disclosure">
              How the AI is bounded
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <Label>Institutions</Label>
        <h2 className="mt-2">Have content that belongs in an app like these?</h2>
        <p className="lede mt-2" style={{ maxWidth: '42rem' }}>
          A temple, a math, a trust or a lineage with texts, recordings or a devotee base — we
          build with institutions, and the content stays yours.
        </p>
        <div className="btn-row">
          <Link className="btn" to="/contact">
            Start a conversation <Arrow />
          </Link>
          <GoLink to="/press">Press &amp; brand assets</GoLink>
        </div>
      </section>
    </>
  );
}
