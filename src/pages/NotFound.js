import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Arrow, Label } from '../components/bits';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="That page does not exist on taatvam.com."
        noindex
      />
      <section className="wrap void">
        <Label>404</Label>
        <h1 className="mt-2">This path does not exist.</h1>
        <p className="lede mt-2" style={{ maxWidth: '34rem', marginInline: 'auto' }}>
          The page you asked for is not here. It may have moved, or the link may have been typed
          from memory.
        </p>
        <div className="btn-row">
          <Link className="btn" to="/">
            Back to the start <Arrow />
          </Link>
          <Link className="btn btn--ghost" to="/products">
            Products
          </Link>
          <Link className="btn btn--ghost" to="/legal">
            Policies
          </Link>
        </div>
      </section>
    </>
  );
}
