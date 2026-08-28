import { Link } from 'react-router-dom';
import company from '../data/company';
import { groups, allPolicies } from '../data/legal';
import Seo from '../components/Seo';
import { Arrow, Crumbs, Facts, GoLink, Label, SectionHead } from '../components/bits';

export default function LegalIndex() {
  return (
    <>
      <Seo
        title="Policies"
        description={
          'Every policy Taatvam publishes — privacy, terms, refunds, shipping, data rights, ' +
          'account deletion, child safety, AI transparency, security, subprocessors and accessibility.'
        }
        path="/legal"
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Policies' }]} />
        <span className="label">Legal &amp; policies</span>
        <h1>{allPolicies.length} documents, written to be read.</h1>
        <p className="lede">
          Everything that governs how we handle your money, your data and your account. Written in
          plain sentences, because a policy nobody can read is not a disclosure — it is a defence.
        </p>
      </section>

      <section className="wrap band band--tight" style={{ paddingTop: 0 }}>
        <div className="split">
          <aside className="split__rail">
            <Label>Issued by</Label>
            <div className="mt-2">
              <Facts
                rows={[
                  ['Entity', company.legalNameCaps],
                  ['Location', company.address.line],
                  ['Last updated', company.policiesUpdated],
                  ['Contact', company.email.general],
                ]}
              />
            </div>
            <p className="small muted mt-3">
              These policies cover taatvam.com and both products — Divya Maarg and Sai Vani, on the
              web and in the apps.
            </p>
            <div className="mt-3">
              <GoLink to="/app-compliance">Store disclosure matrix</GoLink>
            </div>
          </aside>

          <div>
            {groups.map((g, gi) => (
              <div key={g.heading} className={gi ? 'mt-5' : ''}>
                <div className="sechead" style={{ marginBottom: '1.25rem' }}>
                  <Label n={String(gi + 1).padStart(2, '0')}>{g.heading}</Label>
                  <p className="small muted mt-1" style={{ maxWidth: '38rem' }}>
                    {g.note}
                  </p>
                </div>
                <ul className="index-list">
                  {g.policies.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/legal/${p.slug}`}>
                        <span className="t">{p.title}</span>
                        <p className="d">{p.summary}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast answers */}
      <section className="wrap band band--tint">
        <SectionHead
          n="01"
          label="Straight to it"
          title="The four things people actually come here for."
        />
        <div className="cols cols--4 cols--ruled">
          <div className="entry">
            <h4>Delete my account</h4>
            <p className="mt-1">
              Two routes, one of them without reinstalling the app. Everything that goes, and the one
              thing that stays.
            </p>
            <p className="mt-2">
              <Link className="golink" to="/legal/account-deletion">
                Account deletion <span className="arrow" aria-hidden="true">&#8594;</span>
              </Link>
            </p>
          </div>
          <div className="entry">
            <h4>Get my money back</h4>
            <p className="mt-1">
              Per product type, because a report, a parcel and a ritual cannot honestly share one
              rule.
            </p>
            <p className="mt-2">
              <Link className="golink" to="/legal/refund">
                Refund policy <span className="arrow" aria-hidden="true">&#8594;</span>
              </Link>
            </p>
          </div>
          <div className="entry">
            <h4>What data do you hold?</h4>
            <p className="mt-1">
              Four categories and nothing outside them. Plus what we deliberately never ask for.
            </p>
            <p className="mt-2">
              <Link className="golink" to="/legal/privacy">
                Privacy policy <span className="arrow" aria-hidden="true">&#8594;</span>
              </Link>
            </p>
          </div>
          <div className="entry">
            <h4>Is the AI pretending?</h4>
            <p className="mt-1">
              No. What grounds a reply, what it refuses, and the safety layer that runs before any
              model.
            </p>
            <p className="mt-2">
              <Link className="golink" to="/legal/ai-disclosure">
                AI transparency <span className="arrow" aria-hidden="true">&#8594;</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <h2>Something in here reads wrong to you?</h2>
        <p className="lede mt-2" style={{ maxWidth: '42rem' }}>
          Tell us. An unclear policy is a bug in the writing, and we would rather fix the sentence
          than defend it.
        </p>
        <div className="btn-row">
          <a className="btn" href={`mailto:${company.email.general}?subject=${encodeURIComponent('[Policies] ')}`}>
            {company.email.general} <Arrow />
          </a>
          <Link className="btn btn--ghost" to="/contact">
            Contact page
          </Link>
        </div>
      </section>
    </>
  );
}
