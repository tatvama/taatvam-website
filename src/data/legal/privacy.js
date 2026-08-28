import company from '../company';

const privacy = {
  slug: 'privacy',
  title: 'Privacy Policy',
  kicker: 'How we handle your data',
  summary:
    'What we collect, why we collect it, who else sees it, how long we keep it, and how you ' +
    'get it deleted. Written to be read, not to be survived.',
  appliesTo: 'taatvam.com, Divya Maarg and Sai Vani — websites and mobile apps',
  sections: [
    {
      id: 'who-we-are',
      h: 'Who we are',
      body: [
        `${company.legalNameCaps} ("Taatvam", "we", "us") is a company incorporated in India and ` +
          `based in ${company.origin}. We build and operate the products listed above.`,
        'For the purposes of the Digital Personal Data Protection Act, 2023, we are the Data ' +
          'Fiduciary for the personal data described in this policy, and you are the Data Principal.',
        {
          facts: [
            ['Entity', company.legalNameCaps],
            ['Registered location', company.address.line],
            [company.officers.dpo.title, `${company.officers.dpo.name} · ${company.officers.dpo.email}`],
            [company.officers.grievance.title, `${company.officers.grievance.name} · ${company.officers.grievance.email}`],
          ],
        },
      ],
    },
    {
      id: 'what-we-collect',
      h: 'What we collect',
      body: [
        'We collect four kinds of data, and nothing outside them.',
        { h3: '1. Identity and contact' },
        {
          ul: [
            'Your mobile number. It is your login — we use a one-time password rather than a stored password, so we never hold a credential that could be reused elsewhere.',
            'Your name, and an email address if you give us one.',
            'Nothing else is mandatory to create an account.',
          ],
        },
        { h3: '2. What the product needs to work' },
        {
          ul: [
            'Divya Maarg: your date, exact time and place of birth. A chart cannot be computed without them. We also store the chart and the reading generated from them, so you do not pay to recompute the same thing.',
            'Divya Maarg: gotra and family details, only where you enter them for a sankalpa, because the priest reads them aloud.',
            'Sai Vani: your reading progress, bookmarks, prayers, journal entries, seva log and saved messages.',
            'Either product: your language, your notification schedule and your quiet hours.',
          ],
        },
        { h3: '3. Payment records' },
        {
          ul: [
            'What you bought, when, for how much, and the transaction reference returned by our payment gateway.',
            'We never see or store your card number, UPI PIN, CVV or bank credentials. Those go directly to the gateway, which is PCI-DSS certified. We could not leak a card number, because we do not have one.',
          ],
        },
        { h3: '4. Technical and diagnostic' },
        {
          ul: [
            'Device model, operating system version, app version, and a push notification token if you allow notifications.',
            'IP address and request logs, retained briefly for security and abuse investigation.',
            'Crash reports and error traces.',
          ],
        },
        {
          note:
            'We do not collect your contacts, your call log, your SMS, your photo library, your ' +
            'precise background location, or your device identifiers for advertising. Neither app ' +
            'requests those permissions at all.',
        },
      ],
    },
    {
      id: 'sensitive',
      h: 'Sensitive material you may write to us',
      body: [
        'Both products invite people to write things they would not write elsewhere: a prayer, a ' +
          'grief, a journal entry, a question about a marriage or an illness. We treat that ' +
          'material as the most sensitive data we hold.',
        {
          ul: [
            'It is stored against your account and is not used to train any model.',
            'It is not read by our staff except when you ask us to look at something specific, or where we are compelled by law.',
            'Our own admin dashboards deliberately show counts and not content — an operator cannot open your journal.',
            'It is never shared with another user, including members of your family circle, unless you explicitly share it.',
          ],
        },
        {
          note:
            'If you write something indicating you may be in danger, our safety layer will show you ' +
            'a helpline. That is generated on the spot and is not a report to anybody. We do not ' +
            'notify your family, your emergency contacts or the authorities.',
        },
      ],
    },
    {
      id: 'why',
      h: 'Why we use it',
      body: [
        'Each purpose is listed separately because your consent is purpose-specific and you can ' +
          'withdraw it for one purpose without losing the others.',
        {
          table: {
            head: ['Purpose', 'Data used', 'Basis'],
            rows: [
              ['Create and secure your account', 'Mobile number, OTP, device', 'Necessary to provide the service you asked for'],
              ['Compute a chart and produce a reading', 'Birth date, time, place', 'Your consent, given when you submit the form'],
              ['Fulfil a purchase, booking or shipment', 'Name, contact, address, order record', 'Necessary to perform the contract'],
              ['Send the alerts and reminders you turned on', 'Chart, schedule, push token', 'Your consent, withdrawable per stream'],
              ['Answer your questions in a chat feature', 'Your message and your saved reading', 'Your consent, given by using the feature'],
              ['Keep the service up and abuse out', 'Logs, device, IP', 'Our legitimate interest in a working service'],
              ['Meet tax, accounting and legal duties', 'Payment records', 'Legal obligation'],
            ],
          },
        },
        'We do not profile you for advertising, we do not sell data, and we do not use your ' +
          'content to train a model — ours or anybody else’s.',
      ],
    },
    {
      id: 'ai',
      h: 'How AI features use your data',
      body: [
        'Where a feature is answered by a language model, your message and relevant passages from ' +
          'your own saved reading or from our published library are sent to the model provider to ' +
          'generate that single reply.',
        {
          ul: [
            'The provider is contractually bound not to train on data sent through its API.',
            'A grounded reply cites the source it came from, so you can check it.',
            'A reply that promises a specific outcome, or that speaks as though it were a deity, is discarded before you see it and a pre-written answer is served instead.',
            'The crisis safety layer runs before any model call, so it works even when the model does not.',
          ],
        },
        'The full account of what these features are and are not is on our ' +
          '[AI transparency page](/legal/ai-disclosure).',
      ],
    },
    {
      id: 'sharing',
      h: 'Who else sees it',
      body: [
        'Only the parties below, only the data each one needs, and only to do work for us.',
        {
          ul: [
            'Our infrastructure, payment, messaging and model providers — each is named, with what it receives, on the [subprocessors page](/legal/subprocessors).',
            'A temple or priest, when you book a puja: your name, gotra and sankalpa details, because the ritual requires them. Never your chart, your contact number or your payment details.',
            'A courier, when you order a physical remedy: your name, address and phone number.',
            'A partner institution whose content we host — currently Sai Samsthana for Sai Vani — receives aggregate usage counts only, never an individual devotee’s content.',
            'A court, regulator or law-enforcement authority, where we are legally obliged. We satisfy ourselves that the demand is lawful, and tell you unless we are prohibited from doing so.',
          ],
        },
        'If we are ever acquired or merged, your data moves with the service under this same ' +
          'policy, and you will be told before anything changes.',
      ],
    },
    {
      id: 'retention',
      h: 'How long we keep it',
      body: [
        {
          table: {
            head: ['What', 'Kept for'],
            rows: [
              ['Account, chart and reading', 'While your account is open'],
              ['Prayers, journal, bookmarks, progress', 'While your account is open'],
              ['Chat history', '24 months, then deleted'],
              ['Request and security logs', '90 days'],
              ['Payment and invoice records', '8 years — required by Indian tax law'],
              ['Deleted account', 'Erased within 30 days, except the payment records above'],
            ],
          },
        },
        'When we say erased we mean erased from live systems and expired from backups on their own ' +
          'rotation, not hidden behind a flag.',
      ],
    },
    {
      id: 'rights',
      h: 'Your rights',
      body: [
        'Under the DPDP Act, 2023 you may ask us for the following, free of charge:',
        {
          ul: [
            'A summary of the personal data we hold about you and what we have done with it.',
            'Correction of anything inaccurate, and completion of anything incomplete.',
            'Erasure of your data, and closure of your account.',
            'Withdrawal of a consent you previously gave — including for a single alert stream.',
            'Nomination of another person to exercise these rights if you die or become incapacitated.',
            'Redress of a grievance, through our Grievance Officer and then, if you are still not satisfied, through the Data Protection Board of India.',
          ],
        },
        'How to exercise each of these, and what we will ask you for, is set out on the ' +
          '[data rights page](/legal/data-requests). Deleting your account has its own page, ' +
          'including what survives deletion and why: [account deletion](/legal/account-deletion).',
      ],
    },
    {
      id: 'security',
      h: 'How we protect it',
      body: [
        {
          ul: [
            'Everything travels over TLS. There is no unencrypted endpoint.',
            'Databases are encrypted at rest and are not reachable from the public internet.',
            'Access is least-privilege and logged. Very few people can reach production, and none of them can read your journal from a dashboard.',
            'We hold no card data, so a breach of us is not a breach of your card.',
            'Sessions are short-lived tokens, revocable from your account.',
          ],
        },
        'No system is perfect. If we suffer a breach affecting your personal data, we will notify ' +
          'the Data Protection Board and every affected user as the DPDP Act requires, and we will ' +
          'say what happened rather than what sounds best. Our disclosure route for researchers is ' +
          'on the [security page](/legal/security).',
      ],
    },
    {
      id: 'children',
      h: 'Children',
      body: [
        'Our products are for adults. Both apps are declared 18+ and we do not knowingly collect ' +
          'data from anybody under 18.',
        'If you believe a child has created an account, write to us and we will verify and delete ' +
          'it. Our safeguarding commitments are on the ' +
          '[child safety page](/legal/child-safety).',
      ],
    },
    {
      id: 'transfers',
      h: 'Where your data is stored',
      body: [
        'Our primary databases are hosted in India. Some subprocessors — a model provider, a CDN, ' +
          'an object store — process data in other countries. Where that happens we rely on the ' +
          'provider’s contractual data-protection commitments, and we do not transfer to any ' +
          'country the Government of India has restricted.',
      ],
    },
    {
      id: 'changes',
      h: 'Changes to this policy',
      body: [
        'When we change something material we update the date at the top, and we tell you in the ' +
          'app or by email before the change takes effect. We do not make a material change ' +
          'quietly and date it retroactively.',
      ],
    },
    {
      id: 'contact',
      h: 'Contact us',
      body: [
        `Write to ${company.email.privacy}. We reply ${company.responseSla}. If your concern is a ` +
          'grievance rather than a question, say so in the subject line and it is routed to the ' +
          'Grievance Officer, who must acknowledge it within 24 hours.',
      ],
    },
  ],
};

export default privacy;
