import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNav } from '../data/navigation';
import company from '../data/company';
import { Wordmark, Arrow } from './bits';

export default function Masthead() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const location = useLocation();

  /* Hairline appears only once the page has moved. */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close the drawer on navigation, on Escape, and at desktop width. */
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 58rem)');
    const onChange = (e) => e.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  useEffect(() => () => document.body.classList.remove('is-locked'), []);

  return (
    <>
      <header className={`masthead${stuck ? ' is-stuck' : ''}`}>
        <div className="wrap masthead__inner">
          <Wordmark />

          <nav className="nav" aria-label="Main">
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link className="btn btn--sm masthead__cta" to="/contact">
            Talk to us <Arrow />
          </Link>

          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open ? (
        <div className="drawer" id="drawer">
          <nav aria-label="Main, mobile">
            {primaryNav.map((item, i) => (
              <Link key={item.to} className="drawer__link" to={item.to}>
                {item.label}
                <span className="numeral">{String(i + 1).padStart(2, '0')}</span>
              </Link>
            ))}
            <Link className="drawer__link" to="/legal">
              Policies
              <span className="numeral">{String(primaryNav.length + 1).padStart(2, '0')}</span>
            </Link>
          </nav>
          <div className="drawer__foot">
            <Link className="btn" to="/contact">
              Talk to us <Arrow />
            </Link>
            <p className="small muted">
              <a href={`mailto:${company.email.general}`}>{company.email.general}</a>
              <br />
              {company.address.line}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
