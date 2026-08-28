import company from '../company';

export const dataRequests = {
  slug: 'data-requests',
  title: 'Your Data Rights & Grievances',
  kicker: 'DPDP Act, 2023 · IT Rules, 2021',
  summary:
    'Every right you have over your data, how to use it, what we will ask you for, and how long ' +
    'we take. Plus the officers named by law and how to reach them.',
  appliesTo: 'Every user of Taatvam, Divya Maarg and Sai Vani',
  sections: [
    {
      id: 'officers',
      h: 'The people responsible',
      body: [
        'We are a small team, so we name the actual person rather than a department that does not ' +
          'exist.',
        {
          facts: [
            [company.officers.dpo.title, company.officers.dpo.name],
            ['Email', company.officers.dpo.email],
            [company.officers.grievance.title, company.officers.grievance.name],
            ['Email', company.officers.grievance.email],
            ['Entity', company.legalNameCaps],
            ['Address', company.address.line],
            ['Hours', company.hours],
          ],
        },
        company.officers.grievance.basis,
      ],
    },
    {
      id: 'rights',
      h: 'What you can ask for',
      body: [
        {
          table: {
            head: ['Right', 'What it gets you', 'We respond in'],
            rows: [
              ['Access', 'A summary of the data we hold about you, what we use it for, and who we have shared it with', '30 days'],
              ['Correction', 'Anything inaccurate corrected, anything incomplete completed', '15 days'],
              ['Erasure', 'Your data deleted and your account closed', '30 days'],
              ['Withdraw consent', 'A purpose you previously agreed to stopped — a single alert stream, or all of them', 'Immediately, in-app'],
              ['Data portability', 'Your readings, prayers, journal and reading progress in a machine-readable file', '30 days'],
              ['Nomination', 'A person named to exercise these rights if you die or become incapacitated', '15 days to record'],
              ['Grievance', 'A complaint reviewed by the Grievance Officer', 'Acknowledged in 24 hours, resolved in 15 days'],
            ],
          },
        },
      ],
    },
    {
      id: 'how',
      h: 'How to make a request',
      body: [
        'Most of it you can do yourself without asking us.',
        { h3: 'In the app' },
        {
          ul: [
            'Correct your name, language, notification schedule and quiet hours under Account.',
            'Turn any alert stream off — that is a withdrawal of consent for that purpose and takes effect at once.',
            'Export your data and delete your account under Account → Privacy.',
          ],
        },
        { h3: 'By email' },
        {
          ol: [
            `Write to ${company.email.privacy} from the email address on your account, or from any address if you tell us the mobile number instead.`,
            'Say which right you are exercising. "Please delete my account" is enough — you do not need to cite a section.',
            'We will verify it is you. Usually that is a one-time password to the number on the account. We will not ask you for a document you have never given us.',
          ],
        },
        {
          note:
            'We do not charge for any of this, and we will not make you explain why. A request is ' +
            'not a negotiation.',
        },
      ],
    },
    {
      id: 'limits',
      h: 'When we may not be able to comply fully',
      body: [
        'There are narrow cases, and we will tell you which one applies rather than refusing ' +
          'vaguely.',
        {
          ul: [
            'Payment and invoice records must be retained for 8 years under Indian tax law. They survive an erasure request; nothing else does.',
            'We may pause a request where we cannot verify that you are the account holder.',
            'We may decline a request that is being used to obtain another person’s data.',
            'We may retain what a court or regulator has specifically ordered us to preserve.',
          ],
        },
      ],
    },
    {
      id: 'grievance',
      h: 'Raising a grievance',
      body: [
        `Send it to ${company.email.grievance} with "Grievance" in the subject line. Under the IT ` +
          'Rules, 2021 we must acknowledge within 24 hours and dispose of it within 15 days. We ' +
          'will give you a reference number and a named person, not a ticket queue.',
        { h3: 'If we do not resolve it' },
        {
          ul: [
            'For a data protection matter: the Data Protection Board of India, once you have exhausted our process — the DPDP Act requires you to come to us first.',
            'For a consumer matter: the National Consumer Helpline, or a District Consumer Disputes Redressal Commission.',
            'For a content or intermediary matter: the Grievance Appellate Committee constituted under the IT Rules, 2021.',
          ],
        },
      ],
    },
  ],
};

export const accountDeletion = {
  slug: 'account-deletion',
  title: 'Delete Your Account & Data',
  kicker: 'Required by Google Play and Apple',
  summary:
    'Two ways to delete your account and everything in it — one inside the app, one from this ' +
    'page without reinstalling anything. What gets deleted, what survives, and how long it takes.',
  appliesTo: 'Divya Maarg and Sai Vani accounts',
  sections: [
    {
      id: 'in-app',
      h: 'Option 1 — in the app',
      body: [
        'The fastest route, and the one both app stores require us to provide.',
        {
          ol: [
            'Open the app and sign in.',
            'Go to Account, then Privacy.',
            'Tap Delete my account.',
            'Confirm with the one-time password sent to your number.',
          ],
        },
        'Your account is closed immediately and your data is erased within 30 days.',
      ],
    },
    {
      id: 'web',
      h: 'Option 2 — from here, without the app',
      body: [
        'You do not need to reinstall the app to delete your data. Google Play requires a web route ' +
          'and this is it.',
        {
          ol: [
            `Email ${company.email.privacy} with the subject line "Delete my account".`,
            'Include the mobile number on the account and which product it is — Divya Maarg or Sai Vani.',
            'Reply to the verification code we send to that number.',
          ],
        },
        {
          facts: [
            ['Acknowledgement', 'Within 2 working days'],
            ['Account closed', 'On verification'],
            ['Data erased', 'Within 30 days'],
            ['Cost', 'Free'],
            ['Reason required', 'None'],
          ],
        },
      ],
    },
    {
      id: 'what-goes',
      h: 'What is deleted',
      body: [
        {
          ul: [
            'Your profile, name, mobile number and email address.',
            'Your birth details, your computed chart and every reading generated from it.',
            'Your prayers, sankalpa, journal entries, bookmarks, reading progress, streaks and saved messages.',
            'Your entire chat history.',
            'Your seva log and your family circle membership.',
            'Your device tokens, so notifications stop at once.',
            'Any unused chat-time balance or alert entitlement, which is forfeited.',
          ],
        },
      ],
    },
    {
      id: 'what-stays',
      h: 'What survives, and why',
      body: [
        {
          table: {
            head: ['Retained', 'For how long', 'Why'],
            rows: [
              ['Invoices and payment records', '8 years', 'Required by Indian tax law. Contains what was bought and for how much — not your chart, your journal or your messages.'],
              ['A puja already performed', 'Temple’s own records', 'The ritual happened and the temple keeps its own record of it. We cannot edit a temple’s register.'],
              ['Anonymous aggregate counts', 'Indefinitely', 'Cannot be traced back to you — a number in a total, nothing more.'],
              ['Security logs', '90 days', 'Expire on their own rotation.'],
            ],
          },
        },
      ],
    },
    {
      id: 'before',
      h: 'Before you delete',
      body: [
        {
          ul: [
            'Export your data first if you want to keep it. Account → Privacy → Export, or ask us. Once erased, we cannot restore it — there is no undo and no grace period.',
            'Cancel any store subscription separately. Deleting your account does not cancel an Apple or Google subscription; only Apple or Google can do that.',
            'Deleting and creating a new account with the same number does not restore anything. It is a new account.',
          ],
        },
        {
          note:
            'If you only want the notifications to stop, you do not need to delete your account. ' +
            'Turn off the streams you do not want under Account, or ask us to.',
        },
      ],
    },
  ],
};

export const cookies = {
  slug: 'cookies',
  title: 'Cookie Policy',
  kicker: 'What we store in your browser',
  summary:
    'A short policy, because we use very few cookies. No advertising cookies, no third-party ' +
    'trackers, and no consent banner designed to be clicked through.',
  appliesTo: 'taatvam.com and the Divya Maarg and Sai Vani websites',
  sections: [
    {
      id: 'what',
      h: 'What we use',
      body: [
        {
          table: {
            head: ['Cookie', 'Purpose', 'Type', 'Lifetime'],
            rows: [
              ['Session token', 'Keeps you signed in. Set as httpOnly, so no script can read it.', 'Strictly necessary', '30 days or until you sign out'],
              ['CSRF token', 'Stops another site submitting a form as you.', 'Strictly necessary', 'Session'],
              ['Language', 'Remembers whether you chose English, Kannada, Hindi or another language.', 'Preference', '1 year'],
              ['Cart', 'Holds what you put in your basket before checkout.', 'Functional', '7 days'],
            ],
          },
        },
        {
          note:
            'That is the whole list. We run no advertising pixel, no social plugin, no session ' +
            'recorder and no cross-site tracker. taatvam.com itself — the site you are reading — ' +
            'sets no cookies at all.',
        },
      ],
    },
    {
      id: 'consent',
      h: 'Consent',
      body: [
        'Strictly necessary cookies do not require consent, because without them you could not sign ' +
          'in. Preference and functional cookies are set only once you take the action that needs ' +
          'them — choosing a language, adding to a cart. We do not show a banner asking permission ' +
          'to do something we are not doing.',
      ],
    },
    {
      id: 'control',
      h: 'Your control',
      body: [
        {
          ul: [
            'Every browser lets you view, block and delete cookies for a site. Blocking the session cookie will mean you cannot stay signed in.',
            'Our mobile apps do not use cookies. They store an authentication token and a cache in the app’s own private storage, cleared when you sign out or uninstall.',
          ],
        },
      ],
    },
    {
      id: 'analytics',
      h: 'Analytics',
      body: [
        'We measure aggregate usage — page counts, feature counts, error rates — from our own ' +
          'server logs, which do not require a cookie in your browser and are not joined to your ' +
          'identity. If we ever adopt a client-side analytics tool, this page and the privacy ' +
          'policy will name it before it is switched on.',
      ],
    },
  ],
};
