import { Link } from 'react-router-dom';
import company from '../data/company';
import { footerNav } from '../data/navigation';
import { Wordmark } from './bits';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <Wordmark />
            <p className="footer__blurb">
              {company.tagline} Built in {company.address.locality}, for the people who actually
              light the lamp.
            </p>
            <p className="footer__legalname">{company.legalNameCaps}</p>
          </div>

          {footerNav.map((col) => (
            <div className="footer__col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} {company.legalName}. {company.address.line}.
          </p>
          <nav aria-label="Legal">
            <a href={`mailto:${company.email.general}`}>{company.email.general}</a>
            <Link to="/legal/privacy">Privacy</Link>
            <Link to="/legal/terms">Terms</Link>
            <Link to="/legal">Policies</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
