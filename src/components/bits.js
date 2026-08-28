import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/** Small shared pieces. Kept in one file because each is a few lines. */

export const Mark = ({ className = 'wordmark__mark' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="12" y="1.6" width="14.7" height="14.7" transform="rotate(45 12 1.6)" stroke="currentColor" strokeWidth="1.3" />
    <path d="M12 7.4 16.6 12 12 16.6 7.4 12z" fill="#a8471e" />
  </svg>
);

export const Wordmark = ({ to = '/', onClick }) => (
  <Link className="wordmark" to={to} onClick={onClick} aria-label="Taatvam — home">
    <Mark />
    <span className="wordmark__text">
      Taatvam<sup>AI Labs</sup>
    </span>
  </Link>
);

export const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    &#8594;
  </span>
);

/** An internal or external link that always looks like the same component. */
export const GoLink = ({ to, href, children, className = 'golink' }) => {
  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children} <Arrow />
      </a>
    );
  }
  return (
    <Link className={className} to={to}>
      {children} <Arrow />
    </Link>
  );
};

export const Label = ({ n, children }) => (
  <span className="label">
    {n ? <span className="numeral">{n}&nbsp;&nbsp;</span> : null}
    {children}
  </span>
);

export const SectionHead = ({ n, label, title, lede, aside, children }) => (
  <header className="sechead">
    <div className="sechead__row">
      <div style={{ maxWidth: '46rem' }}>
        {label ? <Label n={n}>{label}</Label> : null}
        {title ? <h2>{title}</h2> : null}
      </div>
      {aside}
    </div>
    {lede ? <p className="lede">{lede}</p> : null}
    {children}
  </header>
);

export const Facts = ({ rows, className = 'facts' }) => (
  <dl className={className}>
    {rows.map(([k, v], i) => (
      <div key={`${k}-${i}`}>
        <dt>{k}</dt>
        <dd>{v}</dd>
      </div>
    ))}
  </dl>
);

export const Grid = ({ head, rows }) => (
  <div className="table-scroll">
    <table className="grid">
      {head ? (
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Tags = ({ items, title }) => (
  <>
    {title ? <span className="label" style={{ marginBottom: '0.85rem', display: 'block' }}>{title}</span> : null}
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  </>
);

export const Stats = ({ items }) => (
  <div className="stats">
    {items.map((s) => (
      <div key={s.label}>
        <span className="stat__num">
          {s.n}
          {s.suffix ? <sup>{s.suffix}</sup> : null}
        </span>
        <span className="stat__label">{s.label}</span>
      </div>
    ))}
  </div>
);

export const Crumbs = ({ trail }) => (
  <nav className="crumbs" aria-label="Breadcrumb">
    {trail.map((c, i) => (
      <span key={c.label}>
        {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
        {i < trail.length - 1 ? <i aria-hidden="true">&nbsp;/</i> : null}
      </span>
    ))}
  </nav>
);

/** Fades a block in once as it enters the viewport. Off under reduced motion. */
export const Reveal = ({ children, as: Tag = 'div', delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const node = ref.current;
    if (!node) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const t = setTimeout(() => setShown(true), delay);
          io.unobserve(entry.target);
          return () => clearTimeout(t);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal${shown ? ' is-in' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  );
};

/** Copies a value and says so, for an email address you want people to take. */
export const CopyButton = ({ value, label = 'Copy' }) => {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, () => {});
      return;
    }
    const ta = document.createElement('textarea');
    ta.value = value;
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      done();
    } catch (e) {
      /* clipboard unavailable — the address is still selectable on the page */
    }
    document.body.removeChild(ta);
  };

  return (
    <button type="button" className={`copy${copied ? ' is-copied' : ''}`} onClick={onClick}>
      {copied ? 'Copied' : label}
    </button>
  );
};

export const Chip = ({ children, tone }) => (
  <span className={`chip${tone ? ` chip--${tone}` : ''}`}>
    <span className="dot" aria-hidden="true" />
    {children}
  </span>
);
