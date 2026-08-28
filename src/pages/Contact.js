import { useState } from 'react';
import { Link } from 'react-router-dom';
import company from '../data/company';
import Seo from '../components/Seo';
import { Arrow, CopyButton, Crumbs, Facts, Label, SectionHead } from '../components/bits';

const topics = [
  'Support for Divya Maarg',
  'Support for Sai Vani',
  'Refund or order enquiry',
  'Privacy, data or account deletion',
  'A grievance',
  'Institutional partnership',
  'Press',
  'Careers',
  'Something else',
];

const routes = [
  {
    label: 'Product support',
    body: 'A reading that did not arrive, a booking, a payment, a bug. Start here — most things are resolved in one reply.',
    to: '/support',
    cta: 'Support hub',
  },
  {
    label: 'Your data',
    body: 'Access, correction, export, or deleting your account. You can do most of it yourself without asking us.',
    to: '/legal/data-requests',
    cta: 'Data rights',
  },
  {
    label: 'A grievance',
    body: `Goes to ${company.officers.grievance.name}, our ${company.officers.grievance.title}. Acknowledged within 24 hours by law.`,
    to: '/legal/data-requests#grievance',
    cta: 'Grievance route',
  },
  {
    label: 'Security',
    body: 'Found a vulnerability? There is a published disclosure route, and safe harbour if you follow it.',
    to: '/legal/security',
    cta: 'Disclosure policy',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  /* Static hosting has no server. The form composes a mail draft, which is
     honest about what happens rather than faking a success state. Swap this
     for a fetch() the day an endpoint exists. */
  const onSubmit = (e) => {
    e.preventDefault();
    const f = e.target.elements;
    const get = (n) => (f[n] ? String(f[n].value || '').trim() : '');

    const subject = `[${get('topic') || 'Enquiry'}] ${get('name') || 'Website enquiry'}`;
    const body = [
      `Name:         ${get('name')}`,
      `Email:        ${get('email')}`,
      `Phone:        ${get('phone') || '—'}`,
      `Organisation: ${get('org') || '—'}`,
      `Topic:        ${get('topic')}`,
      '',
      get('message'),
      '',
      '— sent from taatvam.com',
    ].join('\n');

    setSent(true);
    window.location.href = `mailto:${company.email.general}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Seo
        title="Contact"
        description={`Reach Tatvam AI Labs in Bengaluru. Support, privacy requests, grievances, partnerships and press — ${company.email.general}.`}
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Taatvam',
          url: `${company.site}/contact`,
          mainEntity: {
            '@type': 'Organization',
            name: company.legalNameCaps,
            email: company.email.general,
            address: {
              '@type': 'PostalAddress',
              addressLocality: company.address.locality,
              addressRegion: company.address.region,
              postalCode: company.address.postal,
              addressCountry: company.address.countryCode,
            },
          },
        }}
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <span className="label">Get in touch</span>
        <h1>One inbox, and a person at the end of it.</h1>
        <p className="lede">
          We are small enough that there is no ticket routing to get lost in. Everything arrives at{' '}
          {company.email.general} and is read {company.responseSla}.
        </p>
      </section>

      <section className="wrap band band--tight" style={{ paddingTop: 0 }}>
        <div className="split">
          {/* Details rail */}
          <aside className="split__rail">
            <Label>Direct</Label>
            <p className="mt-2" style={{ fontSize: '1.0625rem' }}>
              <a className="uline" href={`mailto:${company.email.general}`}>
                {company.email.general}
              </a>
            </p>
            <div style={{ marginTop: '0.35rem' }}>
              <CopyButton value={company.email.general} />
            </div>

            <hr style={{ margin: '1.75rem 0' }} />

            <Facts
              rows={[
                ['Hours', company.hours],
                ['We reply', company.responseSla],
                ['Grievances', 'Acknowledged in 24 hours'],
                ['Where', company.address.line],
              ]}
            />

            <p className="small muted mt-3">
              We do not run a phone line. Written enquiries get a considered answer and leave a
              record you can hold us to, which serves you better than being put on hold.
            </p>
          </aside>

          {/* Form */}
          <div>
            <h2 style={{ fontSize: 'var(--step-3)' }}>Write to us</h2>
            <p className="mt-2" style={{ maxWidth: '34rem' }}>
              This form opens your own mail app with everything filled in, so the message comes from
              your address and you keep a copy in your sent folder. Nothing is submitted to a server
              here.
            </p>

            <form className="form mt-3" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="topic">What is this about?</label>
                <select id="topic" name="topic" defaultValue={topics[0]}>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>

              <div className="field">
                <label htmlFor="phone">
                  Phone <span className="muted">(optional)</span>
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
                <span className="hint">
                  Include it if your enquiry is about an account — it is how we find you.
                </span>
              </div>

              <div className="field">
                <label htmlFor="org">
                  Organisation <span className="muted">(optional)</span>
                </label>
                <input id="org" name="org" type="text" autoComplete="organization" />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>

              <div className="btn-row">
                <button className="btn" type="submit">
                  Open in my mail app <Arrow />
                </button>
                {sent ? (
                  <span className="form__status" role="status">
                    Your mail app should be opening.
                  </span>
                ) : null}
              </div>

              <p className="form__note">
                We use what you send only to answer you. See the{' '}
                <Link to="/legal/privacy" className="uline">
                  privacy policy
                </Link>
                . Please do not send passwords, card numbers or OTPs — we will never ask for them.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="wrap band band--tint">
        <SectionHead
          n="01"
          label="Faster routes"
          title="Some things have their own door."
          lede="Each of these has a page that answers the question in full, usually faster than we can."
        />
        <div className="cols cols--2 cols--ruled">
          {routes.map((r) => (
            <div className="entry" key={r.label}>
              <span className="label">{r.label}</span>
              <p className="mt-2">{r.body}</p>
              <p className="mt-2">
                <Link className="golink" to={r.to}>
                  {r.cta} <span className="arrow" aria-hidden="true">&#8594;</span>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap band closer">
        <Label>Institutions</Label>
        <h2 className="mt-2">Bringing content, not looking for a service.</h2>
        <p className="lede mt-2" style={{ maxWidth: '44rem' }}>
          If you are a temple, a math, a trust or a lineage with texts, recordings or a devotee base
          — write and tell us what you have and who it is for. We do not take client work, but we do
          build with institutions, and the content stays yours.
        </p>
        <div className="btn-row">
          <a className="btn" href={`mailto:${company.email.general}?subject=${encodeURIComponent('[Institutional partnership] ')}`}>
            Start that conversation <Arrow />
          </a>
          <Link className="btn btn--ghost" to="/products">
            See what we have built
          </Link>
        </div>
      </section>
    </>
  );
}
