import company from '../company';

const terms = {
  slug: 'terms',
  title: 'Terms of Service',
  kicker: 'The agreement between us',
  summary:
    'What you are agreeing to when you use our websites or apps, what we owe you, what happens ' +
    'when something goes wrong, and the limits on what our products claim to be.',
  appliesTo: 'taatvam.com, Divya Maarg and Sai Vani — websites and mobile apps',
  sections: [
    {
      id: 'agreement',
      h: 'The agreement',
      body: [
        `These terms are a contract between you and ${company.legalNameCaps} ("Taatvam", "we"). ` +
          'By creating an account, buying anything, or simply using one of our products, you accept ' +
          'them. If you do not accept them, do not use the products.',
        'Where a product has its own additional terms — the mobile app end-user licence, for ' +
          'instance — those apply on top of these, and these govern if the two ever conflict.',
      ],
    },
    {
      id: 'eligibility',
      h: 'Who may use our products',
      body: [
        {
          ul: [
            'You must be 18 or older.',
            'You must be legally able to enter a contract.',
            'You must not be barred from receiving our services under Indian law.',
            'One account per person. Your mobile number identifies you, and you are responsible for everything done through your account.',
          ],
        },
      ],
    },
    {
      id: 'what-we-provide',
      h: 'What we provide — and what we do not claim',
      body: [
        'This is the most important clause in these terms, so it is not buried at the bottom.',
        { h3: 'Divya Maarg' },
        'Divya Maarg computes a Vedic chart from the birth details you supply and interprets it in ' +
          'the classical tradition. The computation is mathematical and we stand behind its ' +
          'accuracy given accurate inputs. The interpretation is a traditional reading. It is ' +
          'offered for guidance and reflection.',
        { h3: 'Sai Vani' },
        'Sai Vani is a devotional companion. It presents sacred texts, devotional practice and ' +
          'conversation in the spirit of shraddha and saburi. It does not speak as Sai Baba, it ' +
          'is not a channel to him, and it does not intercede on your behalf.',
        { h3: 'Both products' },
        {
          note:
            'Nothing in either product is medical, psychological, legal, financial or ' +
            'investment advice. Nothing in either product predicts a certain outcome. No reading, ' +
            'remedy, puja, mantra or reply guarantees a result in your life, and we will never say ' +
            'that it does. If you face a medical, legal or financial matter, consult a qualified ' +
            'professional. If you are in crisis, contact a helpline or emergency services.',
        },
        'A remedy is a traditional article. A puja is a ritual performed by a priest. We are ' +
          'accountable for supplying the genuine article and for the ritual actually being ' +
          'performed by the named priest at the named temple. We are not accountable for what ' +
          'happens in your life afterwards.',
      ],
    },
    {
      id: 'accounts',
      h: 'Your account',
      body: [
        {
          ul: [
            'Keep your mobile number secure. Anybody who can receive your OTP can reach your account.',
            'Tell us immediately if you think somebody else has access.',
            'Give us accurate details. A chart computed from a wrong birth time is a wrong chart, and that is not a defect we can refund.',
            'Do not share, sell or transfer your account.',
          ],
        },
      ],
    },
    {
      id: 'purchases',
      h: 'Purchases, prices and payment',
      body: [
        {
          ul: [
            'All prices are in Indian Rupees and include applicable taxes unless stated otherwise.',
            'Prices can change, but never for an order you have already paid for.',
            'Payment is taken through a licensed payment gateway. We do not see or store your card or UPI credentials.',
            'A purchase made inside a mobile app for digital content is processed by the app store’s billing system, and that store’s own refund policy applies alongside ours.',
            'A purchase of a physical article or of a puja is processed by our payment gateway, because both stores exclude physical goods and real-world services from in-app purchase.',
          ],
        },
        'Refunds, cancellations and what happens to a puja that cannot be performed are dealt with ' +
          'in full in our [refund and cancellation policy](/legal/refund). Delivery commitments for ' +
          'physical articles are in the [shipping policy](/legal/shipping).',
      ],
    },
    {
      id: 'subscriptions',
      h: 'Subscriptions and recurring payments',
      body: [
        {
          ul: [
            'A subscription renews automatically at the interval shown at purchase until you cancel it.',
            'You can cancel at any time. Cancellation stops the next renewal; it does not refund the period you are already in.',
            'Where you subscribed through an app store, cancel through that store — we cannot cancel an Apple or Google subscription on your behalf.',
            'We will tell you before a renewal price changes, with enough time to cancel.',
          ],
        },
      ],
    },
    {
      id: 'your-content',
      h: 'Content you create',
      body: [
        'Your prayers, journal entries, notes and messages remain yours. You grant us only the ' +
          'narrow licence we need to store them, show them back to you, and show them to a person ' +
          'you deliberately share them with.',
        'We do not use your content to train models, we do not publish it, and we do not show it ' +
          'to other users. What you may not post is set out in the ' +
          '[acceptable use policy](/legal/acceptable-use).',
      ],
    },
    {
      id: 'our-content',
      h: 'Our content and marks',
      body: [
        'The software, design, written interpretations, and the names Taatvam, Divya Maarg and Sai ' +
          'Vani belong to us or to our licensors. Sacred texts are the shared inheritance of ' +
          'everybody; our particular translation, arrangement, audio recording and commentary are ' +
          'not.',
        'You may read, listen and use the products for your own devotional purpose. You may not ' +
          'copy our content wholesale, scrape it, resell it, or use it to train a model.',
      ],
    },
    {
      id: 'availability',
      h: 'Availability',
      body: [
        'We work to keep the products up but we do not promise uninterrupted service. We may take ' +
          'systems down for maintenance, and a third party we depend on may fail.',
        'If a paid feature is unavailable long enough to deprive you of something you paid for, ' +
          'write to us and we will make it right — by extending your access, reperforming the ' +
          'service, or refunding it.',
      ],
    },
    {
      id: 'termination',
      h: 'Suspension and termination',
      body: [
        'You can close your account at any time, from inside the app or through the ' +
          '[account deletion page](/legal/account-deletion).',
        'We may suspend or close an account that breaches these terms or the acceptable use ' +
          'policy, that is being used fraudulently, or that we are legally required to close. ' +
          'Except where the breach is serious or a law prevents it, we will tell you why and give ' +
          'you a chance to respond. Where we close an account for our own reasons and you have paid ' +
          'for something undelivered, we refund it.',
      ],
    },
    {
      id: 'liability',
      h: 'Limits of our liability',
      body: [
        'To the extent Indian law allows:',
        {
          ul: [
            'We are not liable for a decision you take on the strength of a reading, a remedy or a reply. Those are offered for guidance.',
            'We are not liable for indirect or consequential loss — lost profit, lost opportunity, or loss you say followed from a spiritual outcome.',
            'Our total liability to you for any claim is limited to the amount you paid us in the twelve months before the claim arose.',
          ],
        },
        'Nothing here limits liability that cannot lawfully be limited, including for fraud, or for ' +
          'death or personal injury caused by our negligence.',
      ],
    },
    {
      id: 'grievance',
      h: 'Complaints and grievances',
      body: [
        `Write to ${company.email.general}. We acknowledge a grievance within 24 hours and aim to ` +
          'resolve it within 15 days, as the Information Technology (Intermediary Guidelines and ' +
          'Digital Media Ethics Code) Rules, 2021 require.',
        {
          facts: [
            [company.officers.grievance.title, company.officers.grievance.name],
            ['Email', company.officers.grievance.email],
            ['Acknowledgement', 'Within 24 hours'],
            ['Resolution target', 'Within 15 days'],
          ],
        },
      ],
    },
    {
      id: 'law',
      h: 'Governing law',
      body: [
        `These terms are governed by ${company.governingLaw}. The ${company.jurisdiction} have ` +
          'exclusive jurisdiction. We would rather resolve a dispute by talking to you first, and ' +
          'we ask you to write to us before filing anything.',
      ],
    },
    {
      id: 'changes',
      h: 'Changes',
      body: [
        'We may update these terms. For a material change we will notify you in the app or by ' +
          'email at least seven days before it takes effect, and continuing to use the products ' +
          'after that date means you accept the new version. The date at the top always reflects ' +
          'the current text.',
      ],
    },
  ],
};

export default terms;
