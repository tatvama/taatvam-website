import { Link } from 'react-router-dom';
import company, { mailto } from '../data/company';
import { divyaMaarg, saiVani } from '../data/products';
import Seo from '../components/Seo';
import { Arrow, Crumbs, Facts, Grid, Label, Mark, SectionHead } from '../components/bits';

const boilerplate =
  `${company.legalNameCaps}, trading as Taatvam, is a product company based in ` +
  `${company.origin}. It builds devotional software for Indian users: Divya Maarg, a dharmic life ` +
  `navigation platform built on a real Vedic chart engine, and Sai Vani, a companion app for Sai ` +
  `devotees built with Sai Samsthana. Both products refuse the fear-driven conventions of their ` +
  `category — no predictions stated as fact, no promises of an outcome, and a crisis safety layer ` +
  `that runs before any AI model is called.`;

const shortBoilerplate =
  'Taatvam is a Bengaluru product house building devotional software — Divya Maarg for Vedic ' +
  'chart guidance and temple seva, and Sai Vani for Sai devotees.';

const palette = [
  ['Ink', '#16130F', 'Text, dark bands, the primary button'],
  ['Paper', '#FBF9F5', 'Page background — warm, never pure white'],
  ['Sienna', '#A8471E', 'The single accent. Used sparingly and never for large areas'],
  ['Rule', '#E4DDCD', 'Hairlines, which do most of the layout work'],
];

export default function Press() {
  return (
    <>
      <Seo
        title="Press & brand"
        description={
          'Boilerplate, brand marks, colour and typography for Taatvam — Tatvam AI Labs Private ' +
          'Limited — and correct usage for the Divya Maarg and Sai Vani product names.'
        }
        path="/press"
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Press & brand' }]} />
        <span className="label">Press &amp; brand</span>
        <h1>Facts, marks and the right way to spell everything.</h1>
        <p className="lede">
          For journalists, partners and app store listings. If you need something that is not here,
          write and we will send it the same day.
        </p>
        <div className="btn-row mt-3">
          <a className="btn" href={mailto('press', 'Press enquiry — ')}>
            {company.email.press} <Arrow />
          </a>
        </div>
      </section>

      {/* Facts */}
      <section className="wrap band band--tight" style={{ paddingTop: 0 }}>
        <div className="split">
          <div className="split__rail">
            <Label n="01">Company facts</Label>
          </div>
          <div>
            <Facts
              rows={[
                ['Legal name', company.legalNameCaps],
                ['Trading name', 'Taatvam'],
                ['Founded', company.founded],
                ['Headquarters', company.address.line],
                ['Founder', company.people[0].name],
                ['Products', 'Divya Maarg · Sai Vani'],
                ['Website', 'taatvam.com'],
                ['Press contact', company.email.press],
              ]}
            />
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="wrap band band--tint">
        <SectionHead
          n="02"
          label="Boilerplate"
          title="Copy this rather than paraphrasing it."
          lede="Both versions are approved for use without checking with us first."
        />
        <div className="split">
          <div>
            <span className="label">Long — about 90 words</span>
            <p className="mt-2" style={{ maxWidth: '38rem' }}>
              {boilerplate}
            </p>
          </div>
          <div>
            <span className="label">Short — one line</span>
            <p className="mt-2" style={{ maxWidth: '38rem' }}>
              {shortBoilerplate}
            </p>
            <span className="label mt-4" style={{ display: 'block' }}>
              Product one-liners
            </span>
            <p className="small mt-2" style={{ maxWidth: '38rem' }}>
              <strong style={{ color: 'var(--ink)' }}>Divya Maarg</strong> — {divyaMaarg.one}
            </p>
            <p className="small mt-2" style={{ maxWidth: '38rem' }}>
              <strong style={{ color: 'var(--ink)' }}>Sai Vani</strong> — {saiVani.one}
            </p>
          </div>
        </div>
      </section>

      {/* Naming */}
      <section className="wrap band">
        <SectionHead
          n="03"
          label="Naming"
          title="Spelling, which we are fussy about."
        />
        <Grid
          head={['Correct', 'Not', 'Why']}
          rows={[
            ['Taatvam', 'TAATVAM, taatvam, Tatvam', 'The brand takes the double-a. Sentence case in running text.'],
            ['Tatvam AI Labs Private Limited', 'Taatvam AI Labs Pvt Ltd', 'The registered entity is spelled with one a. Use the full form in legal and store contexts.'],
            ['Divya Maarg', 'DivyaMaarg, Divya Marg', 'Two words, double-a in Maarg.'],
            ['Sai Vani', 'SaiVani, Saivani', 'Two words, both capitalised.'],
            ['Jyotir Marga, Divya Karma, Divya Kriya, Divya Seva', '—', 'The four pillars. Single a in Marga here — it is a different word from Maarg.'],
          ]}
        />
      </section>

      {/* Marks */}
      <section className="wrap band band--tint">
        <SectionHead
          n="04"
          label="The mark"
          title="A rotated square with a filled centre."
          lede="The outer diamond is drawn in the surrounding text colour so the mark works on paper and on night. The centre is always sienna."
        />
        <div className="split">
          <div>
            <div
              style={{
                display: 'flex',
                gap: '2.5rem',
                alignItems: 'center',
                padding: '2.5rem 2rem',
                background: 'var(--paper-raised)',
                border: '1px solid var(--rule)',
                borderRadius: '4px',
              }}
            >
              <span style={{ color: 'var(--ink)' }}>
                <Mark className="" />
              </span>
              <span style={{ color: 'var(--ink)' }}>
                <svg viewBox="0 0 24 24" width="56" height="56" fill="none" aria-hidden="true">
                  <rect x="12" y="1.6" width="14.7" height="14.7" transform="rotate(45 12 1.6)" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M12 7.4 16.6 12 12 16.6 7.4 12z" fill="#a8471e" />
                </svg>
              </span>
              <span className="wordmark__text" style={{ color: 'var(--ink)', fontSize: '1.75rem' }}>
                Taatvam
              </span>
            </div>
            <ul className="ticks mt-3">
              <li>Clear space of at least the mark’s own width on every side.</li>
              <li>Minimum size 20&nbsp;px on screen, 6&nbsp;mm in print.</li>
              <li>Do not recolour the centre, rotate the mark, add a shadow, or place it on a busy photograph.</li>
              <li>Do not set the wordmark in a different typeface. It is Instrument Serif.</li>
            </ul>
            <p className="small muted mt-3">
              Source files: <span className="mono">/mark.svg</span> and{' '}
              <span className="mono">/favicon.svg</span> at the root of this site, plus{' '}
              <span className="mono">/og.svg</span> for social cards.
            </p>
          </div>

          <div>
            <span className="label">Palette</span>
            <div className="mt-2">
              <Grid head={['Name', 'Hex', 'Used for']} rows={palette} />
            </div>
            <span className="label mt-4" style={{ display: 'block' }}>
              Typography
            </span>
            <div className="mt-2">
              <Facts
                rows={[
                  ['Display', 'Instrument Serif — headings and the wordmark'],
                  ['Text', 'Inter — body, navigation, interface'],
                  ['Mono', 'IBM Plex Mono — URLs, numerals, code'],
                  ['Devanagari', 'Noto Serif Devanagari'],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corrections */}
      <section className="band band--night">
        <div className="wrap">
          <SectionHead
            n="05"
            label="A request"
            title="Two things we ask you not to write."
          />
          <div className="split">
            <div className="split__rail">
              <p className="small">
                Neither is a legal demand. Both are simply inaccurate, and the inaccuracy is the
                thing we built the company to avoid.
              </p>
            </div>
            <div style={{ maxWidth: '44rem' }}>
              <ul className="crosses">
                <li>
                  <strong style={{ color: 'var(--paper)' }}>“Astrology app.”</strong> Divya Maarg
                  computes a chart and prescribes practice from it. It does not predict events, and
                  the distinction is the entire product.
                </li>
                <li>
                  <strong style={{ color: 'var(--paper)' }}>“AI Sai Baba” or “talk to Sai Baba”.</strong>{' '}
                  Sai Vani’s companion explicitly does not claim to be Sai Baba and is built to
                  refuse it. Describing it that way misrepresents the one commitment the product is
                  most careful about.
                </li>
              </ul>
              <p className="small mt-4">
                If a piece is already published with either, we will not chase you — but we would be
                grateful for a correction, and we will happily supply a quote for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <h2>Need a quote, a screenshot or an interview?</h2>
        <div className="btn-row">
          <a className="btn" href={mailto('press', 'Press enquiry — ')}>
            {company.email.press} <Arrow />
          </a>
          <Link className="btn btn--ghost" to="/products">
            Product detail
          </Link>
        </div>
      </section>
    </>
  );
}
