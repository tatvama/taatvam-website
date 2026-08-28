import { Link } from 'react-router-dom';
import company from '../data/company';
import Seo from '../components/Seo';
import { Arrow, Crumbs, Facts, GoLink, Label, Reveal, SectionHead } from '../components/bits';

const timeline = [
  {
    when: '2024',
    title: 'Tatvam AI Labs is incorporated',
    body:
      'A company set up in Bengaluru to build devotional products properly, after looking at what ' +
      'the category was shipping and deciding it could be done without the fear.',
  },
  {
    when: '2025',
    title: 'Divya Maarg — the chart engine',
    body:
      'The hard part first: real ephemeris computation, vargas, dashas and dosha detection, ' +
      'instead of a lookup table dressed as astrology. Then the web platform on top of it.',
  },
  {
    when: 'Early 2026',
    title: 'Divya Maarg — the commercial layer',
    body:
      'A React Native app, a metered conversation grounded in the user’s own chart, and the alert ' +
      'engine. A free lane that never calls a model, so the product is usable without paying.',
  },
  {
    when: 'Mid 2026',
    title: 'Sai Vani begins with Sai Samsthana',
    body:
      'A companion for Sai devotees, built with the institution rather than about it. Library, ' +
      'audiobooks, the 1–108 draw, Shirdi guidance, and a conversation grounded in the books.',
    now: true,
  },
  {
    when: 'Next',
    title: 'Both to the stores',
    body:
      'Play Store and App Store submission for both apps, with every disclosure published first. ' +
      'iOS for Divya Maarg follows Android.',
  },
];

const doNot = [
  'We do not tell anybody what is going to happen to them.',
  'We do not run advertising, and we do not sell data. There is nothing to sell — we do not collect it.',
  'We do not use anybody’s prayers, journal or conversations to train a model.',
  'We do not take client work. Two products is already more than enough.',
  'We do not guess a devotional fact to fill a gap in a screen.',
  'We do not send a notification whose real purpose is to make somebody anxious enough to buy.',
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description={
          'Tatvam AI Labs Private Limited is a Bengaluru product house building devotional ' +
          'software. Who we are, what we refuse to do, and where the company stands.'
        }
        path="/about"
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
        <span className="label">The company</span>
        <h1>We build devotional software, and we take the devotion as seriously as the software.</h1>
        <p className="lede">
          {company.legalNameCaps} is a product company in {company.address.locality}. We make two
          things and we own every layer of both — the computation, the interface, the temple
          relationship, and the parcel at the door.
        </p>
      </section>

      {/* Name */}
      <section className="wrap band band--tight">
        <div className="split">
          <div className="split__rail">
            <Label n="01">The name</Label>
          </div>
          <div>
            <p className="deva" style={{ fontSize: 'var(--step-4)', color: 'var(--ink)', lineHeight: 1.35 }}>
              तत् त्वम् असि
            </p>
            <p className="lede mt-2">
              <em>Tat tvam asi</em> — “that thou art”. One of the four mahāvākyas of the Upanishads,
              and the sentence our name is taken from. <strong style={{ color: 'var(--ink)' }}>Tattva</strong>{' '}
              is the essence of a thing: what remains when you take away everything that is
              decoration.
            </p>
            <p className="mt-2" style={{ maxWidth: '42rem' }}>
              It is a demanding name for a software company, and we chose it on purpose. It commits
              us to shipping the thing itself rather than the appearance of it — a real chart rather
              than a plausible one, a real citation rather than a confident sentence, a puja that was
              actually performed rather than a receipt that says it was.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="wrap band band--tint">
        <SectionHead
          n="02"
          label="Why we exist"
          title="The category was broken, and it was broken deliberately."
        />
        <div className="split">
          <div className="split__rail">
            <p className="small muted">
              This is the argument the company was started on, so it belongs on the about page
              rather than in a pitch deck.
            </p>
          </div>
          <div style={{ maxWidth: '44rem' }}>
            <p>
              Open the app store and look at what devotional software does to people. A daily push
              notification that something bad is coming. A dosha framed as a curse with a paid
              remedy attached. A prediction stated as fact. It converts, which is precisely why it
              is everywhere.
            </p>
            <p>
              None of that is in the tradition. Classical jyotisha describes tendencies and
              prescribes practice; it does not issue verdicts. The Satcharitra teaches patience;
              it does not promise a job in six weeks. The fear is a product decision somebody made
              because it moves numbers.
            </p>
            <p>
              So we made the opposite decision, and wrote it into the software rather than into a
              values page. A reply that promises an outcome is discarded by code before a user sees
              it. There is a free lane in both apps that never calls a paid model. The alert engine
              speaks when the chart gives it a reason to and stays quiet otherwise.
            </p>
            <p className="dictum mt-3">
              Guidance a person can act on, from a tradition that is quoted <em>accurately</em>,
              with proof attached.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="wrap band">
        <SectionHead n="03" label="Where we are" title="How the company got here." />
        <ol className="timeline">
          {timeline.map((t) => (
            <Reveal as="li" key={t.title} className={t.now ? 'is-now' : ''}>
              <time>{t.when}</time>
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="small muted mt-3">
          A note on honesty: Sai Vani’s AI path has been verified end to end against its guardrails,
          crisis filter and credit logic, but the live model call itself is written against the
          current API and has not been exercised with a production key. We would rather you read
          that here than discover it.
        </p>
      </section>

      {/* People */}
      <section className="wrap band band--tight">
        <div className="split">
          <div className="split__rail">
            <Label n="04">People</Label>
          </div>
          <div>
            <p className="lede" style={{ maxWidth: '40rem' }}>
              A small team. Small enough that the person named in our policies is the person who
              will actually read your email.
            </p>
            <div className="cols cols--2 mt-4">
              {company.people.map((p) => (
                <div className="entry" key={p.name}>
                  <span className="label">{p.role}</span>
                  <h3 className="mt-1">{p.name}</h3>
                  <p className="mt-1">{p.note}</p>
                </div>
              ))}
              <div className="entry">
                <span className="label">Everybody else</span>
                <h3 className="mt-1">Engineering, content and seva</h3>
                <p className="mt-1">
                  Engineers who ship end to end, a content lead who reads the source language, and
                  the operations people who stand in the temples. We are hiring for all three —{' '}
                  <Link to="/careers" className="uline">
                    open roles
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="band band--night">
        <div className="wrap">
          <SectionHead
            n="05"
            label="What we don’t do"
            title="The list that actually defines a company."
            lede="Anybody can write down what they value. This is the version with something at stake."
          />
          <ul className="crosses" style={{ maxWidth: '46rem' }}>
            {doNot.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Facts */}
      <section className="wrap band band--tight">
        <SectionHead n="06" label="Company details" title="For the record." />
        <div className="split">
          <div className="split__rail">
            <p className="small muted">
              These are the details a partner, a store reviewer or a regulator asks for. They are the
              same ones used throughout our policies.
            </p>
            <div className="mt-3">
              <GoLink to="/legal">All policies</GoLink>
            </div>
          </div>
          <div>
            <Facts
              rows={[
                ['Legal name', company.legalNameCaps],
                ['Trading as', company.brand],
                ['Incorporated in', `India, ${company.founded}`],
                ['Registered location', company.address.line],
                ['Founder', company.people[0].name],
                [company.officers.grievance.title, `${company.officers.grievance.name} · ${company.officers.grievance.email}`],
                [company.officers.dpo.title, `${company.officers.dpo.name} · ${company.officers.dpo.email}`],
                ['General enquiries', company.email.general],
                ['Working hours', company.hours],
                ['Governing law', `${company.governingLaw}, ${company.jurisdiction}`],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <h2>Two products, and room for the people who want to build them.</h2>
        <div className="btn-row">
          <Link className="btn" to="/products">
            The products <Arrow />
          </Link>
          <Link className="btn btn--ghost" to="/careers">
            Work with us
          </Link>
        </div>
      </section>
    </>
  );
}
