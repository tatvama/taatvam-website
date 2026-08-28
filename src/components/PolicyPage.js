import { Link, useLocation } from 'react-router-dom';
import company from '../data/company';
import Seo from './Seo';
import { Crumbs, Facts, Grid, GoLink } from './bits';

/**
 * Renders a policy from the data in src/data/legal/.
 *
 * A policy body is an array whose entries are one of:
 *   'a string'              a paragraph, with [text](/link) supported
 *   { h3 }                  a sub-heading
 *   { ul } / { ol }         a list of strings, links supported
 *   { note }                a set-off caution
 *   { facts }               [[term, definition], ...]
 *   { table }               { head: [], rows: [[]] }
 */

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Turns [label](/path) into a real link without pulling in a markdown parser. */
function inline(text, keyPrefix) {
  const out = [];
  let last = 0;
  let m;
  LINK.lastIndex = 0;
  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    out.push(
      href.startsWith('/') ? (
        <Link key={`${keyPrefix}-${m.index}`} to={href}>
          {label}
        </Link>
      ) : (
        <a key={`${keyPrefix}-${m.index}`} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : text;
}

function Block({ block, k }) {
  if (typeof block === 'string') return <p>{inline(block, k)}</p>;
  if (block.h3) return <h3>{block.h3}</h3>;
  if (block.note) return <p className="note">{inline(block.note, k)}</p>;
  if (block.facts) return <Facts rows={block.facts} />;
  if (block.table) return <Grid head={block.table.head} rows={block.table.rows} />;
  if (block.ul)
    return (
      <ul>
        {block.ul.map((li, i) => (
          <li key={i}>{inline(li, `${k}-${i}`)}</li>
        ))}
      </ul>
    );
  if (block.ol)
    return (
      <ol>
        {block.ol.map((li, i) => (
          <li key={i}>{inline(li, `${k}-${i}`)}</li>
        ))}
      </ol>
    );
  return null;
}

export default function PolicyPage({ policy }) {
  const { pathname } = useLocation();

  return (
    <>
      <Seo
        title={policy.title}
        description={policy.summary}
        path={pathname}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: policy.title,
          description: policy.summary,
          url: company.site + pathname,
          dateModified: '2026-08-28',
          publisher: { '@type': 'Organization', name: company.legalNameCaps },
        }}
      />

      <section className="wrap pagehead">
        <Crumbs
          trail={[
            { label: 'Home', to: '/' },
            { label: 'Policies', to: '/legal' },
            { label: policy.title },
          ]}
        />
        <span className="label">{policy.kicker}</span>
        <h1>{policy.title}</h1>
        <p className="lede">{policy.summary}</p>
      </section>

      <section className="wrap band band--tight" style={{ paddingTop: 0 }}>
        <div className="split">
          <aside className="split__rail toc">
            <span className="label">On this page</span>
            <ol>
              {policy.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.h}</a>
                </li>
              ))}
            </ol>
            <hr style={{ margin: '1.75rem 0 1.25rem' }} />
            <p className="small muted" style={{ marginBottom: '1rem' }}>
              Questions about this document go straight to a person.
            </p>
            <GoLink href={`mailto:${company.email.general}`}>{company.email.general}</GoLink>
          </aside>

          <div>
            <div className="doc-meta">
              <span>
                <strong style={{ color: 'var(--ink)' }}>Last updated</strong> {company.policiesUpdated}
              </span>
              <span>
                <strong style={{ color: 'var(--ink)' }}>Applies to</strong> {policy.appliesTo}
              </span>
              <span>
                <strong style={{ color: 'var(--ink)' }}>Issued by</strong> {company.legalName}
              </span>
            </div>

            <div className="doc">
              {policy.sections.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2>{s.h}</h2>
                  {s.body.map((b, i) => (
                    <Block key={i} block={b} k={`${s.id}-${i}`} />
                  ))}
                </section>
              ))}
            </div>

            <hr className="mt-5" />
            <p className="small muted mt-3">
              This document is one of {' '}
              <Link to="/legal" className="uline">
                our published policies
              </Link>
              . If something here contradicts something there, tell us — that is a bug and we will
              fix the text rather than argue about it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
