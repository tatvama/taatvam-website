import company from '../company';

export const acceptableUse = {
  slug: 'acceptable-use',
  title: 'Acceptable Use Policy',
  kicker: 'Community rules',
  summary:
    'What you may not do with our products, what happens if you do, and how to report somebody ' +
    'who has. Short, because the rules are few and none of them are surprising.',
  appliesTo: 'Every user, and every place a user can write something others can see',
  sections: [
    {
      id: 'spirit',
      h: 'The spirit of it',
      body: [
        'Our products are used by people at difficult moments in their lives, often by elderly ' +
          'people, and always around something they hold sacred. Everything below follows from ' +
          'protecting that.',
      ],
    },
    {
      id: 'not-allowed',
      h: 'What is not allowed',
      body: [
        { h3: 'Towards other people' },
        {
          ul: [
            'Harassing, threatening, abusing or impersonating anybody, including in a family circle.',
            'Posting somebody else’s personal information.',
            'Anything sexual, and anything at all involving a minor.',
            'Hate speech, or attacking a person for their religion, caste, gender, region, disability or sexuality. That includes attacking a tradition other than your own.',
          ],
        },
        { h3: 'Towards the sacred content' },
        {
          ul: [
            'Deliberately corrupting scripture, a mantra or an aarti text.',
            'Passing off our translation, recording or commentary as your own.',
            'Using devotional material to defraud or to solicit money from other devotees.',
          ],
        },
        { h3: 'Towards the service' },
        {
          ul: [
            'Scraping, bulk-downloading or reselling our content, or using it to train a model.',
            'Probing, load-testing or attacking our systems — except under the [security policy](/legal/security), which invites exactly that, responsibly.',
            'Circumventing paywalls, metering or rate limits, or automating a free tier.',
            'Creating multiple accounts to abuse a trial or a referral.',
          ],
        },
        { h3: 'Towards the AI features' },
        {
          ul: [
            'Trying to make the companion claim to be Sai Baba, a deity or a guru.',
            'Trying to extract a medical diagnosis, a legal opinion or a financial recommendation from it.',
            'Trying to make it produce content prohibited by this policy, then publishing the result as though it were ours.',
          ],
        },
      ],
    },
    {
      id: 'report',
      h: 'Reporting something',
      body: [
        {
          ul: [
            'Every AI reply has a report control. Use it — it tells us exactly which reply you mean.',
            'Every shared message in a family circle can be reported, and any member can be removed or blocked by the person who invited them.',
            `Anything else, or anything urgent: ${company.email.general}. Put "Report" in the subject line.`,
            'Child safety concerns have a dedicated route, which is prioritised above everything else: see the [child safety policy](/legal/child-safety).',
          ],
        },
        {
          facts: [
            ['Acknowledged', 'Within 24 hours'],
            ['Child safety reports', 'Immediately, ahead of any other queue'],
            ['Action or explanation', 'Within 15 days'],
          ],
        },
      ],
    },
    {
      id: 'consequences',
      h: 'What we do about it',
      body: [
        'Proportionate to what happened, and explained rather than done silently.',
        {
          ul: [
            'Remove the content.',
            'Warn the account.',
            'Suspend a feature — a family circle, or chat.',
            'Close the account.',
            'Report to law enforcement, which we will do without hesitation for anything involving a child, a credible threat to a person, or fraud.',
          ],
        },
        'If we act against your account you may appeal to the ' +
          `${company.officers.grievance.title} at ${company.officers.grievance.email}, and a person ` +
          'will review it.',
      ],
    },
  ],
};

export const childSafety = {
  slug: 'child-safety',
  title: 'Child Safety Standards',
  kicker: 'Required by Google Play',
  summary:
    'Our standards against child sexual abuse and exploitation, how to report a concern, and the ' +
    'in-product measures that make this more than a statement.',
  appliesTo: 'Divya Maarg and Sai Vani',
  sections: [
    {
      id: 'stance',
      h: 'Our position',
      body: [
        'Child sexual abuse and exploitation material, and any conduct that sexualises a child, is ' +
          'absolutely prohibited across everything we operate. There is no threshold, no context ' +
          'and no appeal that makes it acceptable.',
        {
          note:
            'This policy is published to meet Google Play’s Child Safety Standards requirements and ' +
            'is our own standing commitment regardless of any store’s requirements.',
        },
      ],
    },
    {
      id: 'adults',
      h: 'Our products are for adults',
      body: [
        {
          ul: [
            'Both apps are declared for users aged 18 and over, and neither is enrolled in Google Play’s Families programme.',
            'Our terms require you to be 18 to hold an account.',
            'We do not knowingly collect data from a child, and we do not design any feature to appeal to children.',
            'Signing up requires a mobile number and a one-time password, which is a meaningful barrier to a young child creating an account unnoticed.',
          ],
        },
      ],
    },
    {
      id: 'measures',
      h: 'What we actually do',
      body: [
        {
          ul: [
            'User-generated content — prayers, journal entries, family-circle messages — is private by default and is never surfaced to strangers. There is no public feed, no discovery of other users, and no way to message somebody you have not invited.',
            'Every shared message and every AI reply carries a report control.',
            'Our AI features refuse sexual content categorically, and a reply that trips a guardrail is discarded before the user sees it.',
            'Reports of child safety concerns bypass the normal support queue.',
            'Any confirmed CSAE material is removed, the account is closed permanently, and the matter is reported to the National Center for Missing and Exploited Children and to Indian law enforcement, with the evidence preserved.',
          ],
        },
      ],
    },
    {
      id: 'report',
      h: 'Reporting a child safety concern',
      body: [
        `Email ${company.email.general} with "CHILD SAFETY" in the subject line. It is read as a ` +
          'priority, ahead of every other queue.',
        {
          facts: [
            ['Route', `${company.email.general} — subject "CHILD SAFETY"`],
            ['Responsible person', company.officers.grievance.name],
            ['In-app route', 'Report control on any message or AI reply'],
            ['Escalation', 'NCMEC and Indian law enforcement'],
          ],
        },
        'In India you can also report directly to the National Cyber Crime Reporting Portal, or to ' +
          'the police on 1098 (Childline) or 112. If a child is in immediate danger, contact them ' +
          'first and us second.',
      ],
    },
    {
      id: 'compliance',
      h: 'Legal framework',
      body: [
        'We comply with the Protection of Children from Sexual Offences Act, 2012, the Information ' +
          'Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital ' +
          'Media Ethics Code) Rules, 2021, including the obligation to remove such material within ' +
          '24 hours of notice and to preserve records for investigation.',
      ],
    },
  ],
};

export const aiDisclosure = {
  slug: 'ai-disclosure',
  title: 'AI Transparency & Limitations',
  kicker: 'What the AI is, and is not',
  summary:
    'Where we use a language model, what grounds its answers, what it refuses to do, and the ' +
    'safety layer that runs before it. Written for a user, not for a compliance file.',
  appliesTo: 'Ask My Kundli in Divya Maarg · Talk to Sai in Sai Vani',
  sections: [
    {
      id: 'plainly',
      h: 'Plainly',
      body: [
        'When you use one of our conversational features you are talking to software. It is not a ' +
          'guru, not a priest, not a deity, and not a channel to one.',
        {
          note:
            'Sai Vani’s companion does not claim to be Sai Baba and will not pretend to be. Divya ' +
            'Maarg’s chat does not claim to be Guruji. If a reply ever reads as though it does, ' +
            'that is a defect — report it with the control on the reply and we will look at it.',
        },
      ],
    },
    {
      id: 'grounding',
      h: 'What the answers are built from',
      body: [
        {
          ul: [
            'In Divya Maarg: your own computed chart and saved reading. It is not making a general prediction; it is reading a document that already exists about you.',
            'In Sai Vani: passages retrieved from the published library — the texts the institution has approved and uploaded. A reply cites the passage it used, so you can check it against the book.',
            'If nothing relevant is retrieved, the feature says so or falls back to a pre-written answer. It does not invent a citation, and an unrelated question retrieves nothing rather than a confident-looking near-match.',
          ],
        },
      ],
    },
    {
      id: 'refuses',
      h: 'What it will not do',
      body: [
        {
          ul: [
            'Promise a specific outcome — a job, a marriage, a recovery, a date by which something will happen. A reply that does is discarded before you see it.',
            'Diagnose, treat or advise on a medical condition.',
            'Give legal or financial advice, or tell you what to invest in.',
            'Speak in the voice of a deity or a living guru.',
            'Produce sexual, hateful or violent content.',
          ],
        },
      ],
    },
    {
      id: 'safety',
      h: 'The safety layer',
      body: [
        'A crisis filter runs before any model is called, across all the scripts our apps support. ' +
          'If your message suggests you may be in danger, you get a helpline and a human route — ' +
          'immediately, and free of any metering.',
        {
          ul: [
            'It is a plain keyword match, not a model, so it works when the model is unavailable or the network is bad. This is deliberate: the most important path must be the least fragile.',
            'That reply is styled differently so it is unmistakable.',
            'It is not a report. We do not notify your family or the authorities.',
            'It is not a substitute for emergency services. If you are in immediate danger, call 112 in India.',
          ],
        },
      ],
    },
    {
      id: 'data',
      h: 'What happens to what you type',
      body: [
        {
          ul: [
            'Your message, and the relevant passages, are sent to the model provider to generate that one reply.',
            'The provider is contractually bound not to train on API traffic.',
            'We do not use your conversations to train anything.',
            'Your chat history is stored against your account for 24 months so you can read it back, and is deleted with your account.',
          ],
        },
        'The provider is named on the [subprocessors page](/legal/subprocessors).',
      ],
    },
    {
      id: 'errors',
      h: 'It will be wrong sometimes',
      body: [
        'Language models produce fluent text, and fluent text is convincing whether or not it is ' +
          'right. We reduce the risk by grounding replies in a source and citing it, but we do not ' +
          'claim to have eliminated it.',
        'Check anything that matters against the cited passage, against a priest, or against a ' +
          `qualified professional. And report a bad reply — ${company.email.general} or the report ` +
          'control. We read them.',
      ],
    },
  ],
};

export const eula = {
  slug: 'eula',
  title: 'Mobile App End-User Licence',
  kicker: 'For the Android and iOS apps',
  summary:
    'The licence covering the Divya Maarg and Sai Vani mobile applications, supplied in place of ' +
    'the app stores’ standard agreement because our apps sell physical goods and temple services ' +
    'that the standard text does not contemplate.',
  appliesTo: 'The Divya Maarg and Sai Vani mobile apps on Android and iOS',
  sections: [
    {
      id: 'licence',
      h: 'The licence',
      body: [
        `${company.legalNameCaps} grants you a personal, non-exclusive, non-transferable, revocable ` +
          'licence to install and use the app on devices you own or control, for your own ' +
          'non-commercial devotional use.',
        'The app is licensed to you, not sold. We retain all rights we do not expressly grant here.',
      ],
    },
    {
      id: 'restrictions',
      h: 'What you may not do',
      body: [
        {
          ul: [
            'Copy, modify, translate or create a derivative of the app.',
            'Reverse-engineer, decompile or disassemble it, except to the extent a law says you may.',
            'Rent, lease, lend, sell, sublicense or redistribute it.',
            'Remove or obscure any proprietary notice.',
            'Use it to build a competing product, or to train a model.',
            'Run it on a modified or rooted operating system in a way that circumvents our security or our metering.',
          ],
        },
      ],
    },
    {
      id: 'content',
      h: 'Content within the app',
      body: [
        'Scripture is the inheritance of everybody. Our particular translations, arrangements, audio ' +
          'recordings, commentary, readings and software are ours or our licensors’, and are ' +
          'licensed to you for use inside the app only.',
        'Where content is supplied by a partner institution, it remains that institution’s and is ' +
          'used with permission.',
      ],
    },
    {
      id: 'store-terms',
      h: 'App store terms',
      body: [
        {
          ul: [
            'This licence is between you and us. Apple and Google are not parties to it and are not responsible for the app.',
            'Apple and Google have no obligation to provide support for the app; support comes from us, at [our support page](/support).',
            'Apple is a third-party beneficiary of this licence and may enforce it against you.',
            'Where a store’s own terms conflict with this licence on a matter that store governs — billing, refunds through the store, or its own liability — the store’s terms prevail on that matter.',
            'You confirm you are not located in a country subject to an embargo that would make your use unlawful, and are not on a restricted-parties list.',
          ],
        },
      ],
    },
    {
      id: 'purchases',
      h: 'Purchases inside the app',
      body: [
        'Digital content is bought through the store’s billing system. Physical articles and puja ' +
          'bookings are bought through our payment gateway, because both stores exclude physical ' +
          'goods and real-world services from in-app purchase. Our ' +
          '[refund policy](/legal/refund) governs ours; the store’s governs theirs.',
      ],
    },
    {
      id: 'warranty',
      h: 'Warranty and liability',
      body: [
        'The app is provided as-is. We do not warrant that it will be uninterrupted or error-free.',
        'Our [terms of service](/legal/terms) govern liability, and the limits set out there apply ' +
          'equally to the app. Nothing in this licence limits a liability that cannot lawfully be ' +
          'limited.',
      ],
    },
    {
      id: 'termination',
      h: 'Termination',
      body: [
        'This licence ends if you breach it, or when you delete the app or your account. On ' +
          'termination you must stop using the app and remove it from your devices. Clauses on ' +
          'intellectual property and liability survive.',
      ],
    },
    {
      id: 'law',
      h: 'Governing law',
      body: [
        `${company.governingLaw.charAt(0).toUpperCase()}${company.governingLaw.slice(1)} governs ` +
          `this licence, and the ${company.jurisdiction} have exclusive jurisdiction.`,
      ],
    },
  ],
};
