import { useEffect } from 'react';
import company from '../data/company';

/**
 * Title, description, canonical, Open Graph and optional JSON-LD, without
 * pulling in a helmet dependency. On a static export the crawler-relevant
 * defaults are in public/index.html; this keeps them right as you navigate.
 */

const setMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.property ? 'meta' : 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
};

export default function Seo({ title, description, path, noindex, jsonLd }) {
  useEffect(() => {
    const full = title ? `${title} — ${company.brand}` : `${company.brand} — ${company.tagline}`;
    document.title = full;

    if (description) {
      setMeta('meta[name="description"]', { name: 'description', content: description });
      setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    }

    setMeta('meta[property="og:title"]', { property: 'og:title', content: full });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: company.brand });

    const url = company.site + (path || window.location.pathname);
    setMeta('meta[property="og:url"]', { property: 'og:url', content: url });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    });

    let script = document.getElementById('page-jsonld');
    if (script) script.remove();
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, noindex, jsonLd]);

  return null;
}
