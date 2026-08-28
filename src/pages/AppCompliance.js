import { Link } from 'react-router-dom';
import company from '../data/company';
import {
  playRequirements,
  appleRequirements,
  sharedRequirements,
  paymentRouting,
  ratings,
  legend,
} from '../data/compliance';
import Seo from '../components/Seo';
import { Arrow, Crumbs, Grid, Label, SectionHead } from '../components/bits';

const StatusTag = ({ status }) => {
  const tone = status === 'published' ? 'chip--ok' : status === 'todo' ? '' : 'chip--plain';
  return (
    <span className={`chip ${tone}`} style={{ whiteSpace: 'nowrap' }}>
      <span className="dot" aria-hidden="true" />
      {legend[status]}
    </span>
  );
};

const Satisfies = ({ to }) =>
  to ? (
    <Link to={to} className="uline mono">
      {to}
    </Link>
  ) : (
    <span className="muted">—</span>
  );

function RequirementTable({ rows, showWhere }) {
  return (
    <div className="table-scroll">
      <table className="grid">
        <thead>
          <tr>
            <th scope="col">Requirement</th>
            {showWhere ? <th scope="col">Where it is asked</th> : null}
            <th scope="col">Why it matters</th>
            <th scope="col">Satisfied by</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.req}>
              <td>{r.req}</td>
              {showWhere ? (
                <td>
                  <span className="muted small">{r.where}</span>
                </td>
              ) : null}
              <td>{r.why}</td>
              <td>
                <Satisfies to={r.satisfy} />
              </td>
              <td>
                <StatusTag status={r.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AppCompliance() {
  const counts = [...playRequirements, ...appleRequirements, ...sharedRequirements].reduce(
    (acc, r) => {
      acc[r.status] = (acc[r.status] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <>
      <Seo
        title="App store disclosures"
        description={
          'Every Google Play and Apple App Store submission requirement for Divya Maarg and Sai ' +
          'Vani, mapped to the published policy or in-app screen that satisfies it.'
        }
        path="/app-compliance"
      />

      <section className="wrap pagehead">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'App store disclosures' }]} />
        <span className="label">Store submission</span>
        <h1>Every disclosure both stores ask for, and where we answer it.</h1>
        <p className="lede">
          Published in full because a store reviewer, an institutional partner and a user all have
          reason to check. This is the page we open during a submission, so it is written for that
          rather than for marketing.
        </p>
        <div className="strip mt-3">
          <span>{counts.published || 0} published URLs</span>
          <span>{counts['in-app'] || 0} satisfied in the app</span>
          <span>{counts.todo || 0} still on us</span>
          <span>Divya Maarg · Sai Vani</span>
        </div>
      </section>

      {/* Google Play */}
      <section className="wrap band band--tight" style={{ paddingTop: 0 }} id="play">
        <SectionHead
          n="01"
          label="Google Play"
          title="Play Console — App content."
          lede="Every declaration Play requires before a release can be reviewed, and the one that most often gets an app removed after launch: a data safety form that does not match the privacy policy."
        />
        <RequirementTable rows={playRequirements} showWhere />
      </section>

      {/* Apple */}
      <section className="wrap band band--tint" id="apple">
        <SectionHead
          n="02"
          label="Apple App Store"
          title="App Store Connect and the Review Guidelines."
          lede="Apple rejects on specifics. Each row names the guideline, because “it complies” is not an answer a reviewer accepts."
        />
        <RequirementTable rows={appleRequirements} showWhere />
      </section>

      {/* Payments */}
      <section className="wrap band" id="payments">
        <SectionHead
          n="03"
          label="Payment routing"
          title="The line between digital content and the real world."
          lede="Both stores mandate their billing for digital content and forbid it for physical goods and real-world services. Divya Maarg sells on both sides of that line, so each purchase type is routed on purpose."
        />
        <div className="table-scroll">
          <table className="grid">
            <thead>
              <tr>
                <th scope="col">What is sold</th>
                <th scope="col">Nature</th>
                <th scope="col">Paid through</th>
                <th scope="col">Note</th>
              </tr>
            </thead>
            <tbody>
              {paymentRouting.map((r) => (
                <tr key={r.kind}>
                  <td>{r.kind}</td>
                  <td>
                    <span className="muted">{r.nature}</span>
                  </td>
                  <td>{r.route}</td>
                  <td>
                    <span className="small muted">{r.note}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note doc mt-3" style={{ maxWidth: '46rem' }}>
          The rule we hold ourselves to: if a human being does something in the physical world as a
          result of the purchase, it is not in-app content. A priest at a temple and a parcel at a
          door both fail that test, and routing either through store billing would be as wrong as
          routing a subscription around it.
        </p>
      </section>

      {/* Ratings */}
      <section className="wrap band band--tint" id="ratings">
        <SectionHead
          n="04"
          label="Age ratings"
          title="How the questionnaires are answered."
          lede="Both apps are adult products. Declaring that plainly keeps us out of the Families programme and its restrictions, and it is also simply true."
        />
        <div className="split">
          <div>
            <h3 style={{ fontSize: '1.25rem' }}>{ratings.play.title}</h3>
            <div className="mt-2">
              <Grid rows={ratings.play.rows} />
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem' }}>{ratings.apple.title}</h3>
            <div className="mt-2">
              <Grid rows={ratings.apple.rows} />
            </div>
          </div>
        </div>
      </section>

      {/* Shared / India */}
      <section className="band band--night" id="shared">
        <div className="wrap">
          <SectionHead
            n="05"
            label="Both stores, and Indian law"
            title="What is required of us regardless of platform."
            lede="An app that takes payments in India has obligations that neither store asks about and both assume you have met."
          />
          <RequirementTable rows={sharedRequirements} showWhere={false} />
        </div>
      </section>

      {/* Reviewer notes */}
      <section className="wrap band band--tight">
        <SectionHead
          n="06"
          label="For a reviewer"
          title="What you will need to test either app."
        />
        <div className="split">
          <div className="split__rail">
            <p className="small muted">
              Both apps authenticate with a mobile number and a one-time password, which a reviewer
              cannot receive. This is the standing note attached to every submission.
            </p>
          </div>
          <div style={{ maxWidth: '44rem' }}>
            <ul className="ticks">
              <li>
                A permanent demo account with a fixed review code is supplied in App Review
                Information and in the Play Console test instructions for every build.
              </li>
              <li>
                Most of each app works signed out — reading, the daily message, panchanga, the
                library. An account is required only where the feature is genuinely per-person.
              </li>
              <li>
                Purchases are testable in the sandbox. Physical and puja purchases route to our
                gateway’s test mode, which is documented in the submission notes.
              </li>
              <li>
                The crisis safety path can be exercised safely — the notes include a phrase that
                triggers it, so the behaviour can be verified without guessing.
              </li>
              <li>
                Every AI reply carries a report control. That is the mechanism satisfying Play’s
                generative-AI reporting requirement and Apple’s 1.2 content controls.
              </li>
            </ul>
            <p className="small muted mt-3">
              Anything a review needs that is not here:{' '}
              <a className="uline" href={`mailto:${company.email.general}`}>
                {company.email.general}
              </a>
              . We answer store queries the same working day.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap band closer">
        <Label>Everything referenced above</Label>
        <h2 className="mt-2">All of it is published, not promised.</h2>
        <div className="btn-row">
          <Link className="btn" to="/legal">
            All policies <Arrow />
          </Link>
          <Link className="btn btn--ghost" to="/legal/privacy">
            Privacy policy
          </Link>
          <Link className="btn btn--ghost" to="/legal/account-deletion">
            Account deletion
          </Link>
        </div>
      </section>
    </>
  );
}
