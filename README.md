# Taatvam — official website

Static marketing and policy site for **Tatvam AI Labs Private Limited** (`taatvam.com`),
covering both products: **Divya Maarg** and **Sai Vani**.

React (JavaScript, no TypeScript), created with `create-react-app`, hand-authored CSS,
no UI framework. Builds to plain static files.

---

## Run it

```bash
npm install
```

```bash
npm start
```

Dev server on `http://localhost:3000`.

```bash
npm run build
```

Static output in `build/`. `prebuild` regenerates `public/sitemap.xml` automatically, so
the sitemap can never drift from the routes.

```bash
npm run serve
```

Serves the production build locally with SPA fallback, which is what the host will do.

---

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | Company, the name, why it exists, what we don't do, company facts |
| `/products` | Both products, side-by-side comparison, shared foundations |
| `/products/divya-maarg` | Four pillars, capabilities, commerce routing, what we stand behind |
| `/products/sai-vani` | The one rule, institution partnership, three reply tiers, known limits |
| `/careers` | 4 open roles, hiring principles, process, benefits, equal opportunity |
| `/support` | **Apple Support URL / Play support website.** FAQ, crisis helplines, policy links |
| `/contact` | Contact form, faster routes, institutional enquiries |
| `/press` | Boilerplate, naming rules, mark, palette, typography |
| `/app-compliance` | **Store submission matrix** — every Play + Apple requirement mapped to its URL |
| `/legal` | Policy index, grouped |
| `/legal/:slug` | 14 policies (below) |
| `*` | 404 |

### The 14 policies

| Slug | Why it exists |
|---|---|
| `privacy` | Mandatory on both stores. Backs the Play Data safety form and Apple's privacy labels. |
| `terms` | The contract. Includes the "no predictions, no medical advice" clause. |
| `refund` | Required by both stores, Razorpay, and the Consumer Protection (E-Commerce) Rules 2020. |
| `shipping` | Required to take online payments in India for physical goods. |
| `data-requests` | DPDP Act 2023 rights + Grievance Officer under IT Rules 2021. |
| `account-deletion` | **Play "Data deletion" URL** and Apple guideline 5.1.1(v). Web route without reinstalling. |
| `cookies` | Cookie disclosure for the websites. |
| `acceptable-use` | Apple guideline 1.2 UGC controls — filter, report, block, contact. |
| `child-safety` | **Play Child Safety Standards policy URL** (mandatory for UGC apps). |
| `ai-disclosure` | Play generative-AI policy + Apple 1.4.1. What the AI refuses and the crisis layer. |
| `eula` | Apple App Information → License Agreement (custom, not Apple's standard). |
| `security` | Vulnerability disclosure with safe harbour. Also served at `/.well-known/security.txt`. |
| `subprocessors` | Named third parties. Asked for by partners and reviewers. |
| `accessibility` | WCAG 2.1 AA statement, including where we fall short. |

`/app-compliance` is the page to open during an actual store submission — it lists each
Play Console field and Apple guideline with the URL that satisfies it, plus payment
routing (store billing vs. Razorpay) and the age-rating answers.

---

## Where to edit what

Content is data. You should rarely need to touch a component.

```
src/data/
  company.js        Legal name, emails, address, officers, jurisdiction, policy date.
                    Edit here and it changes in the footer, every policy, and the JSON-LD.
  products.js       Divya Maarg + Sai Vani — copy, features, URLs, stack, pillars.
  navigation.js     Header, drawer and footer links. Keeps them in agreement.
  careers.js        Openings, hiring principles, process. Delete an entry to close a role.
  compliance.js     The store matrix, payment routing, age ratings.
  legal/            One file per policy group. index.js is the registry the router reads.
```

Adding a policy: add the object to a file in `src/data/legal/`, add it to a group in
`src/data/legal/index.js`. The route, the index page and the sitemap all pick it up with
no further changes.

### Policy body format

```js
sections: [
  { id: 'anchor', h: 'Heading', body: [
    'A paragraph. [Links](/legal/terms) work.',
    { h3: 'Sub-heading' },
    { ul: ['item', 'item'] },
    { ol: ['step', 'step'] },
    { note: 'A set-off caution.' },
    { facts: [['Term', 'Definition']] },
    { table: { head: ['A', 'B'], rows: [['1', '2']] } },
  ]},
]
```

---

## Design

Hand-written CSS in `src/styles/site.css`, organised in 17 numbered sections with
a table of contents at the top. No Tailwind or Bootstrap — the layouts here are
asymmetric and built from hairlines, which utility classes make harder to read.

- **Palette** — warm paper `#fbf9f5`, ink `#16130f`, one accent (burnt sienna `#a8471e`).
  Everything else is a hairline.
- **Type** — Instrument Serif for display, Inter for text, IBM Plex Mono for URLs and
  numerals, Noto Serif Devanagari for Sanskrit. Loaded from Google Fonts in
  `public/index.html`.
- **Layout** — `.wrap` container, `.band` vertical rhythm, `.split` for a sticky rail plus
  content, `.cols` for divider-based grids. Mobile-first; breakpoints are `min-width` only.
- **Tables** wrap in `.table-scroll` so they scroll inside themselves and the page body
  never scrolls sideways.
- **Motion** — one fade-in on scroll (`<Reveal>`), disabled entirely under
  `prefers-reduced-motion`.

Accessibility: skip link, visible focus rings, semantic headings and landmarks, labelled
form fields, `aria-current` on the active nav item, and a print stylesheet so policies
print cleanly.

---

## Deploying

The build is static files. Because routing is client-side, **the host must serve
`index.html` for any unmatched path** or `/legal/privacy` will 404 on a hard refresh.

Configs are already in the repo:

- **Netlify** — `netlify.toml` (build command, publish dir, SPA redirect, security headers)
  and `public/_redirects`.
- **Vercel** — `vercel.json` (rewrites + headers + immutable caching on `/static`).
- **Cloudflare Pages** — build `npm run build`, output `build`. Add a
  `/* → /index.html 200` rewrite.
- **GitHub Pages / plain nginx** — copy `build/index.html` to `build/404.html`, or add
  `try_files $uri /index.html;`.

Nothing needs a server, a database or an environment variable. `.env` only sets
`CI=false` and `GENERATE_SOURCEMAP=false`.

### Before it goes live

- [ ] Confirm the registered office line and PIN code in `src/data/company.js`
      — currently `Bengaluru, Karnataka 560001, India`, a placeholder.
- [ ] Add CIN and GSTIN to `company.js` and the About page facts table if you want them
      published (many Indian buyers look for them).
- [ ] Point DNS at the host; the site assumes it is served from the domain root.
- [ ] Export `public/og.svg` to a 1200×630 **PNG** and point `og:image` at it — some
      platforms will not render an SVG social card.
- [ ] Submit `https://taatvam.com/sitemap.xml` in Search Console.
- [ ] Set the `Expires` date in `public/.well-known/security.txt` forward each year.
- [ ] Have a lawyer read the 14 policies. They are written to be accurate and complete
      for an Indian product company, but they are not legal advice and they name real
      obligations under the DPDP Act and the IT Rules.

---

## Notes on the content

Everything on the site is drawn from the two product repositories — the four pillars, the
seven languages, the three reply tiers, the crisis-filter-before-generation ordering, the
Satcharitra edition question, the payment routing. Where a product is incomplete, the site
says so rather than implying otherwise: Sai Vani's billing is not wired, its live model
call has not been exercised with a production key, and several store artefacts are marked
"Action pending" on `/app-compliance`.

That is deliberate. Both product repos take the same position — publish the gap rather
than paper over it — and the website should not be the one place that stops doing it.
