import { Link } from 'react-router-dom';
import company, { mailto } from '../data/company';
import Seo from '../components/Seo';
import { Arrow, Crumbs, Facts, GoLink, Label, SectionHead } from '../components/bits';

/**
 * This page is the Support URL submitted to Apple and the support website
 * submitted to Google Play. It has to actually help somebody, because a
 * reviewer opens it.
 */

const faqs = [
  {
    q: 'My one-time password has not arrived.',
    a:
      'It normally arrives within thirty seconds. If it has not: check that the number you entered ' +
      'is right, wait a full sixty seconds before requesting another, and make sure WhatsApp is not ' +
      'blocked for business messages. If it still fails, write to us with the number and we will ' +
      'check the delivery log at our end.',
  },
  {
    q: 'I do not know my exact birth time. Can I still get a reading?',
    a:
      'Yes, and it is still useful — but be aware the dasha timeline becomes less precise, because ' +
      'the ascendant moves. Give us your closest estimate. If you want help narrowing it down, ' +
      'write to us with two or three known life events and we will work backwards with you.',
  },
  {
    q: 'My payment succeeded but nothing happened.',
    a:
      'A reading is generated within a couple of minutes of payment. If it has not appeared, write ' +
      'to us with the transaction ID from your bank or UPI app and we will regenerate it manually ' +
      'at no extra cost. If we cannot deliver it at all, you get a full refund.',
  },
  {
    q: 'I was charged twice.',
    a:
      'Email us both transaction IDs. A duplicate charge is always refunded within seven to ' +
      'fourteen working days, independently of anything else in our refund policy.',
  },
  {
    q: 'How do I stop the notifications?',
    a:
      'Each alert stream can be turned off on its own under Account. You do not have to delete your ' +
      'account to stop hearing from us, and turning a stream off takes effect immediately — it is ' +
      'treated as a withdrawal of consent for that purpose.',
  },
  {
    q: 'How do I cancel a subscription?',
    a:
      'If you subscribed inside the app, cancel through Google Play or the App Store — only they ' +
      'can cancel it, and we genuinely cannot do it for you. If you subscribed on the website, ' +
      'cancel under Account or write to us. Cancelling stops the next renewal; the period you have ' +
      'already paid for runs to its end.',
  },
  {
    q: 'How do I delete my account and everything in it?',
    a:
      'Inside the app: Account, then Privacy, then Delete my account. Or from the web without ' +
      'reinstalling anything — see the account deletion page, which also lists exactly what is ' +
      'deleted and the one category that has to survive for tax law.',
  },
  {
    q: 'The audio stops playing when I lock my phone.',
    a:
      'It should not — background playback is supported and lock-screen controls are wired. If it ' +
      'is stopping, check that battery optimisation is not restricting the app in your Android ' +
      'settings, which is the usual cause. Tell us your device model if it persists.',
  },
  {
    q: 'The app gave me an answer that felt wrong, or that promised something.',
    a:
      'Report it with the control on the reply. That tells us exactly which reply you mean, and we ' +
      'read them. A reply that promises a specific outcome is a defect, not a feature — see our AI ' +
      'transparency page for what the feature is and is not meant to do.',
  },
  {
    q: 'A darshan timing or temple detail is blank.',
    a:
      'That is deliberate. Where a devotional fact has not been confirmed by the institution, we ' +
      'leave it empty rather than guess, because a wrong darshan time sends somebody on a wasted ' +
      'journey. If you have the correct detail, please send it and we will verify and publish it.',
  },
];

const channels = [
  ['Email', <a className="uline" href={`mailto:${company.email.support}`}>{company.email.support}</a>],
  ['Hours', company.hours],
  ['We reply', company.responseSla],
  ['Grievances', 'Acknowledged within 24 hours'],
  ['Child safety reports', 'Prioritised ahead of every other queue'],
];

export default function Support() {
  return (
    <>
      <Seo
        title="Support"
        description={
          'Help for Divya Maarg and Sai Vani — sign-in problems, payments, refunds, notifications, ' +
          'account deletion and how to report a bad AI reply.'
        }
        path="/support"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Support' }]} />
        <span className="label">Help</span>
        <h1>Support for Divya Maarg and Sai Vani.</h1>
        <p className="lede">
          Start with the questions below — they cover most of what reaches us. Anything else, write
          to {company.email.support} and a person will answer.
        </p>
        <div className="btn-row mt-3">
          <a className="btn" href={mailto('support', 'Support — ')}>
            Email support <Arrow />
          </a>
          <Link className="btn btn--ghost" to="/legal/account-deletion">
            Delete my account
          </Link>
        </div>
      </section>

      <section className="wrap band band--tight" style={{ paddingTop: 0 }}>
        <div className="split">
          <aside className="split__rail">
            <Label>How to reach us</Label>
            <div className="mt-2">
              <Facts rows={channels} />
            </div>
            <p className="small muted mt-3">
              Include your registered mobile number and, for anything about an order, the transaction
              ID. It is the difference between one reply and four.
            </p>
            <div className="mt-3">
              <GoLink to="/contact">Full contact page</GoLink>
            </div>
          </aside>

          <div>
            <h2 style={{ fontSize: 'var(--step-3)' }}>Common questions</h2>
            <div className="acc mt-3">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="acc__body">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="wrap band band--tint">
        <SectionHead
          n="01"
          label="If you are in distress"
          title="Please talk to a person, not to an app."
        />
        <div className="split">
          <div className="split__rail">
            <p className="small muted">
              Our apps will show you a helpline if you write something suggesting you are in danger.
              That is a safety net, not a service.
            </p>
          </div>
          <div style={{ maxWidth: '44rem' }}>
            <p>
              Neither of our products is a crisis service, a counsellor or a doctor, and neither will
              ever pretend to be. If you are in immediate danger in India, call{' '}
              <strong style={{ color: 'var(--ink)' }}>112</strong>. For mental health support, the
              government KIRAN helpline is{' '}
              <strong style={{ color: 'var(--ink)' }}>1800-599-0019</strong>, free and available
              around the clock in several languages. For a child at risk, Childline is{' '}
              <strong style={{ color: 'var(--ink)' }}>1098</strong>.
            </p>
            <p className="mt-2">
              What you write to our apps in that moment is not reported to anybody — not to your
              family, not to your emergency contacts, and not to the authorities. The helpline is
              shown to you and nothing is sent anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Policy links */}
      <section className="wrap band band--tight">
        <SectionHead
          n="02"
          label="The relevant policies"
          title="If your question is really about a rule."
        />
        <ul className="index-list">
          {[
            ['Refund & cancellation', '/legal/refund', 'What is refundable per product type, and how long the money takes.'],
            ['Shipping & delivery', '/legal/shipping', 'Dispatch windows, tracking, and what happens if a parcel is lost or damaged.'],
            ['Your data rights', '/legal/data-requests', 'Access, correction, export, erasure, and how to raise a grievance.'],
            ['Delete your account', '/legal/account-deletion', 'Both routes, what is deleted, and the one thing that survives.'],
            ['AI transparency', '/legal/ai-disclosure', 'What the conversational features are, what they refuse, and where they get their answers.'],
            ['Acceptable use', '/legal/acceptable-use', 'Community rules, how to report somebody, and what we do about it.'],
          ].map(([t, to, d]) => (
            <li key={to}>
              <Link to={to}>
                <span className="t">{t}</span>
                <p className="d">{d}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap band closer">
        <h2>Still stuck? Write to us properly.</h2>
        <p className="lede mt-2" style={{ maxWidth: '42rem' }}>
          Tell us what you did, what you expected and what happened instead. A screenshot helps more
          than a paragraph.
        </p>
        <div className="btn-row">
          <a className="btn" href={mailto('support', 'Support — ')}>
            {company.email.support} <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
