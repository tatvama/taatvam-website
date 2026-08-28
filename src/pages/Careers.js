import company, { mailto } from '../data/company';
import { openings, hiringPrinciples, process } from '../data/careers';
import Seo from '../components/Seo';
import { Arrow, Crumbs, GoLink, Label, Reveal, SectionHead } from '../components/bits';

const benefits = [
  ['Compensation', 'Market rate for Bengaluru, reviewed annually. We tell you the band in the first conversation instead of asking for your last salary.'],
  ['Equity', 'For senior hires, real equity with a plain-English agreement you can take to your own lawyer.'],
  ['Health cover', 'Insurance for you, your spouse, your children and your parents. Parents are not an add-on here.'],
  ['Leave', '22 days, plus public holidays, plus the festival days that matter to you rather than the ones on a default list.'],
  ['Hardware', 'A machine you choose. If the mobile work needs a cheap Android on a bad network — and it does — the company buys that too.'],
  ['Learning', 'Books, courses and conferences, approved by default. Ask afterwards.'],
  ['Working hours', 'We start at ten. We do not message at midnight, and nobody is measured by when they were online.'],
  ['Where', 'On-site in Bengaluru for engineering and content, field-based for temple operations. We are small enough that being in a room together is the advantage.'],
];

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description={
          'Open roles at Tatvam AI Labs in Bengaluru — engineering, devotional content and temple ' +
          'operations. How we hire, what we pay for, and what the work is actually like.'
        }
        path="/careers"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Open roles at Taatvam',
          itemListElement: openings.map((o, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'JobPosting',
              title: o.title,
              employmentType: 'FULL_TIME',
              hiringOrganization: { '@type': 'Organization', name: company.legalNameCaps },
              jobLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: company.address.locality,
                  addressRegion: company.address.region,
                  addressCountry: company.address.countryCode,
                },
              },
              description: o.body,
            },
          })),
        }}
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />
        <span className="label">Work with us</span>
        <h1>Small team, whole surfaces, and a subject that is not a theme.</h1>
        <p className="lede">
          There are four open roles. Each one owns something real from the first month — not a
          ticket queue, and not the third-most-important screen of somebody else’s feature.
        </p>
        <div className="btn-row mt-3">
          <a className="btn" href={mailto('careers', 'Application — ')}>
            {company.email.careers} <Arrow />
          </a>
          <a className="btn btn--ghost" href="#openings">
            See the roles
          </a>
        </div>
      </section>

      {/* Principles */}
      <section className="wrap band band--tight">
        <SectionHead n="01" label="How we hire" title="What we are actually looking for." />
        <div className="cols cols--2">
          {hiringPrinciples.map((h) => (
            <div className="entry" key={h.title}>
              <h3>{h.title}</h3>
              <p className="mt-1">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section className="wrap band band--tint" id="openings">
        <SectionHead
          n="02"
          label="Open roles"
          title={`${openings.length} roles open right now.`}
          lede="If none of them is you but you think you should be here, write anyway and say why. We have created a role for the right person before."
        />

        {openings.map((o) => (
          <Reveal as="article" className="opening" key={o.id} id={o.id}>
            <div className="opening__row">
              <div>
                <h3>{o.title}</h3>
                <div className="opening__meta">
                  <span>{o.team}</span>
                  <span>{o.location}</span>
                  <span>{o.type}</span>
                  <span>{o.experience}</span>
                </div>
              </div>
              <a
                className="btn btn--sm btn--ghost"
                href={mailto('careers', `Application — ${o.title}`)}
              >
                Apply <Arrow />
              </a>
            </div>
            <p>{o.body}</p>
            <ul className="ticks mt-3" style={{ maxWidth: '46rem' }}>
              {o.looking.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      {/* Process */}
      <section className="wrap band">
        <SectionHead
          n="03"
          label="The process"
          title="Four steps, and one of them we pay for."
          lede="No take-home you do for free, no panel of five strangers, and no aptitude test. Two to three weeks end to end."
        />
        <ol className="principles">
          {process.map((s) => (
            <Reveal as="li" key={s.step}>
              <span className="numeral">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <p className="small muted mt-3">
          We will tell you where you stand at every stage, including when the answer is no. A
          candidate who spent a day on our problem gets a real reason, not a template.
        </p>
      </section>

      {/* Benefits */}
      <section className="band band--night">
        <div className="wrap">
          <SectionHead
            n="04"
            label="What we offer"
            title="The specifics, since a list of adjectives helps nobody."
          />
          <ul className="features">
            {benefits.map(([k, v]) => (
              <li key={k}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Equal opportunity */}
      <section className="wrap band band--tight">
        <div className="split">
          <div className="split__rail">
            <Label n="05">Equal opportunity</Label>
          </div>
          <div style={{ maxWidth: '44rem' }}>
            <p>
              We hire on the work. Caste, religion, gender, region, language, age, disability,
              marital status and sexuality have nothing to do with whether somebody can do this job,
              and we do not ask.
            </p>
            <p className="mt-2">
              We build devotional software for one tradition at a time, and you do not have to
              belong to it — several of us do not. What is required is treating what people believe
              as real, and getting the details right because they matter to somebody.
            </p>
            <p className="mt-2">
              If you need an adjustment at any point in the process — a different format, more time,
              a remote conversation — say so. It has no bearing on the outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <h2>Write to us. A person reads it.</h2>
        <p className="lede mt-2" style={{ maxWidth: '42rem' }}>
          A few honest paragraphs about what you have built and what you would want to work on here
          is worth more than any CV template. Attach the CV as well, by all means.
        </p>
        <div className="btn-row">
          <a className="btn" href={mailto('careers', 'Application — ')}>
            {company.email.careers} <Arrow />
          </a>
          <GoLink to="/about">Read about the company first</GoLink>
        </div>
      </section>
    </>
  );
}
