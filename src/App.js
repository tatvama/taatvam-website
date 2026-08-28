import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Masthead from './components/Masthead';
import Footer from './components/Footer';
import PolicyPage from './components/PolicyPage';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import DivyaMaarg from './pages/DivyaMaarg';
import SaiVani from './pages/SaiVani';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Press from './pages/Press';
import AppCompliance from './pages/AppCompliance';
import LegalIndex from './pages/LegalIndex';
import NotFound from './pages/NotFound';

import { allPolicies } from './data/legal';

/** Reset scroll on navigation, but honour an in-page anchor. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Masthead />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/divya-maarg" element={<DivyaMaarg />} />
          <Route path="/products/sai-vani" element={<SaiVani />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/press" element={<Press />} />
          <Route path="/app-compliance" element={<AppCompliance />} />

          <Route path="/legal" element={<LegalIndex />} />
          {allPolicies.map((policy) => (
            <Route
              key={policy.slug}
              path={`/legal/${policy.slug}`}
              element={<PolicyPage policy={policy} />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
