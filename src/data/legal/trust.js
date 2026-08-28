import company from '../company';

export const security = {
  slug: 'security',
  title: 'Security & Vulnerability Disclosure',
  kicker: 'How to report a flaw',
  summary:
    'How we protect the data we hold, and a standing invitation for researchers to tell us what ' +
    'we got wrong — with a promise not to come after you for it.',
  appliesTo: 'taatvam.com, divyamaarg.com, saivani.org and their APIs and mobile apps',
  sections: [
    {
      id: 'report',
      h: 'Reporting a vulnerability',
      body: [
        `Email ${company.email.security} with "SECURITY" in the subject line. Include what you ` +
          'found, how to reproduce it, and what an attacker could do with it. A proof of concept ' +
          'helps enormously.',
        {
          facts: [
            ['Where', company.email.security],
            ['Acknowledgement', 'Within 2 working days'],
            ['Triage and severity', 'Within 5 working days'],
            ['Fix — critical', 'Within 7 days'],
            ['Fix — high', 'Within 30 days'],
            ['Credit', 'Named on request, once the fix has shipped'],
          ],
        },
        'We do not run a paid bounty programme at our size. We will say thank you properly, credit ' +
          'you publicly if you want it, and tell you when the fix lands.',
      ],
    },
    {
      id: 'safe-harbour',
      h: 'Safe harbour',
      body: [
        'If you follow this policy in good faith, we will not pursue legal action against you, and ' +
          'we will say so to anybody who asks.',
        { h3: 'Please do' },
        {
          ul: [
            'Test only against your own account and your own data.',
            'Stop at the point you have proved the flaw exists.',
            'Give us reasonable time to fix it before publishing.',
          ],
        },
        { h3: 'Please do not' },
        {
          ul: [
            'Access, modify or exfiltrate another person’s data. If you access somebody’s data accidentally, stop, tell us, and delete it.',
            'Run denial-of-service or volumetric testing against production.',
            'Use social engineering, phishing or physical intrusion against our people or our partners.',
            'Plant a backdoor, or leave anything behind.',
            'Test a third party’s system through ours — our payment gateway and our model provider have their own programmes.',
          ],
        },
      ],
    },
    {
      id: 'measures',
      h: 'What we do',
      body: [
        {
          ul: [
            'TLS everywhere. No unencrypted endpoint exists.',
            'Databases encrypted at rest, not reachable from the public internet.',
            'No password to steal — authentication is a one-time password to your mobile number, and sessions are short-lived revocable tokens.',
            'No card data on our systems at all. Payments go straight to a PCI-DSS certified gateway.',
            'Least-privilege access to production, logged. Admin dashboards are built to show counts rather than user content, so an operator cannot read a devotee’s journal.',
            'Secrets held outside the repository. Rate limiting on every authentication and payment route.',
            'Dependencies patched on a regular cadence, and on the day for anything critical.',
          ],
        },
      ],
    },
    {
      id: 'breach',
      h: 'If we are breached',
      body: [
        'We will notify the Data Protection Board of India and every affected user as the Digital ' +
          'Personal Data Protection Act, 2023 requires. The notice will say what happened, what ' +
          'data was involved, what we have done, and what you should do. We would rather publish an ' +
          'uncomfortable fact than a comfortable summary.',
      ],
    },
    {
      id: 'out-of-scope',
      h: 'Out of scope',
      body: [
        {
          ul: [
            'Findings from automated scanners without a demonstrated impact.',
            'Missing security headers with no exploitable consequence.',
            'Rate limiting on a route where abuse has no effect.',
            'Self-XSS, or anything requiring a compromised device or a physically unlocked phone.',
            'Social engineering of our staff, our temple partners or our couriers.',
            'Vulnerabilities in a third-party service we merely consume — report those to them.',
          ],
        },
      ],
    },
  ],
};

export const subprocessors = {
  slug: 'subprocessors',
  title: 'Subprocessors',
  kicker: 'Who processes data for us',
  summary:
    'Every third party that touches personal data on our behalf, what it receives, and where it ' +
    'processes it. Named, because an unnamed list is not a disclosure.',
  appliesTo: 'Divya Maarg and Sai Vani',
  sections: [
    {
      id: 'list',
      h: 'Current subprocessors',
      body: [
        {
          table: {
            head: ['Provider', 'What it does', 'What it receives', 'Where'],
            rows: [
              ['Cloudflare', 'DNS, CDN, TLS termination, WAF', 'IP address, request metadata', 'Global edge'],
              ['Managed PostgreSQL host', 'Primary database', 'All account and product data', 'India'],
              ['Container hosting', 'Runs the API and web services', 'Data in transit through the application', 'India'],
              ['Razorpay', 'Payment gateway', 'Name, contact, order amount, card or UPI data — which never reaches us', 'India'],
              ['Anthropic', 'Language model for the conversational features', 'Your message and the retrieved passages for that reply. Contractually not used for training.', 'United States'],
              ['Firebase Cloud Messaging (Google)', 'Push notifications on Android', 'Device push token, notification payload', 'Global'],
              ['Apple Push Notification service', 'Push notifications on iOS', 'Device push token, notification payload', 'Global'],
              ['WhatsApp Business API provider', 'One-time passwords and opted-in alerts', 'Mobile number, message content', 'India'],
              ['Cloudflare R2', 'Audio and media object storage', 'Media files. No personal data.', 'Global'],
              ['Courier partners', 'Delivery of physical articles', 'Name, delivery address, phone number', 'India'],
              ['Temples and priests', 'Performing a booked puja', 'Name, gotra, sankalpa details — never chart, contact or payment data', 'India'],
            ],
          },
        },
      ],
    },
    {
      id: 'terms',
      h: 'How we engage them',
      body: [
        {
          ul: [
            'Each receives the minimum data its function needs, and no more.',
            'Each is bound by a data processing agreement or equivalent contractual terms.',
            'None is permitted to use the data for its own purposes, and none may train a model on it.',
            'We assess a new provider’s security posture before we adopt it.',
          ],
        },
      ],
    },
    {
      id: 'changes',
      h: 'Changes to this list',
      body: [
        'This page is updated when a provider is added or removed. Institutional partners who want ' +
          `advance notice of a change can ask for it — write to ${company.email.privacy} and we ` +
          'will put you on the list.',
      ],
    },
  ],
};

export const accessibility = {
  slug: 'accessibility',
  title: 'Accessibility Statement',
  kicker: 'Built for elderly devotees too',
  summary:
    'Our users include people in their seventies and eighties reading scripture on a phone. ' +
    'Accessibility is a product requirement here, not a compliance exercise — and this page says ' +
    'honestly where we are not there yet.',
  appliesTo: 'taatvam.com, Divya Maarg and Sai Vani',
  sections: [
    {
      id: 'target',
      h: 'What we aim for',
      body: [
        'We target the Web Content Accessibility Guidelines 2.1 at Level AA across our websites, ' +
          'and the equivalent platform accessibility guidance on Android and iOS.',
      ],
    },
    {
      id: 'built',
      h: 'What is built',
      body: [
        {
          ul: [
            'A large-text mode in both apps that scales the whole interface, not just the body copy.',
            'Read-aloud on scripture, on the daily message and on every AI reply — with an auto-read-aloud setting for users who prefer to listen rather than read.',
            'Full audio for the library, with background playback and lock-screen controls, so a devotee can listen with the phone in a pocket.',
            'Seven languages in Sai Vani and three in Divya Maarg, including the reply content — not a machine translation layered over an English app.',
            'Text contrast that meets AA, and never colour alone to convey meaning.',
            'Visible keyboard focus and a skip-to-content link on every web page.',
            'Semantic headings, real landmarks and labelled form fields, so a screen reader gets a usable document.',
            'Touch targets sized for an unsteady hand.',
            'Respect for reduced-motion preferences — animation is decorative here and turns off entirely.',
          ],
        },
      ],
    },
    {
      id: 'gaps',
      h: 'Where we fall short',
      body: [
        'Stating this plainly is more useful to you than a claim of full conformance.',
        {
          ul: [
            'Recorded human narration does not exist for every text yet; some audio is speech synthesis, which is harder to follow for long passages.',
            'The chart diagrams in Divya Maarg are visual by nature. A text equivalent of each chart is available, but it is not yet as good as the diagram.',
            'Native voice input works on the web but not yet in every mobile build.',
            'Some longer legal and documentation tables scroll horizontally on a small screen.',
          ],
        },
      ],
    },
    {
      id: 'feedback',
      h: 'Tell us',
      body: [
        `If something is unusable for you, write to ${company.email.support} and describe what ` +
          'happened and what you were using. We treat an accessibility report as a bug, not a ' +
          'suggestion, and we will tell you what we are doing about it.',
      ],
    },
  ],
};
