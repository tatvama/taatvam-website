/**
 * Generates public/sitemap.xml from the same route list the router uses, so a
 * new policy cannot be published without appearing in the sitemap.
 *
 * Runs automatically before every build (see package.json "prebuild").
 *   node scripts/sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE = 'https://taatvam.com';

/* The policy slugs are read out of the data directory rather than duplicated,
   which is the whole point of doing this in a script. */
const legalDir = path.join(__dirname, '..', 'src', 'data', 'legal');
const slugsFrom = (file) => {
  const src = fs.readFileSync(path.join(legalDir, file), 'utf8');
  return [...src.matchAll(/slug:\s*'([a-z-]+)'/g)].map((m) => m[1]);
};

const policySlugs = fs
  .readdirSync(legalDir)
  .filter((f) => f.endsWith('.js') && f !== 'index.js')
  .flatMap(slugsFrom);

const routes = [
  { path: '/', priority: '1.0', freq: 'monthly' },
  { path: '/products', priority: '0.9', freq: 'monthly' },
  { path: '/products/divya-maarg', priority: '0.9', freq: 'monthly' },
  { path: '/products/sai-vani', priority: '0.9', freq: 'monthly' },
  { path: '/about', priority: '0.8', freq: 'monthly' },
  { path: '/careers', priority: '0.8', freq: 'weekly' },
  { path: '/support', priority: '0.8', freq: 'monthly' },
  { path: '/contact', priority: '0.7', freq: 'yearly' },
  { path: '/app-compliance', priority: '0.6', freq: 'monthly' },
  { path: '/press', priority: '0.5', freq: 'yearly' },
  { path: '/legal', priority: '0.5', freq: 'monthly' },
  ...policySlugs.sort().map((s) => ({ path: `/legal/${s}`, priority: '0.4', freq: 'yearly' })),
];

const today = new Date().toISOString().slice(0, 10);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((r) =>
    [
      '  <url>',
      `    <loc>${SITE}${r.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${r.freq}</changefreq>`,
      `    <priority>${r.priority}</priority>`,
      '  </url>',
    ].join('\n')
  ),
  '</urlset>',
  '',
].join('\n');

const out = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(out, xml, 'utf8');
console.log(`sitemap.xml — ${routes.length} URLs written to public/sitemap.xml`);
