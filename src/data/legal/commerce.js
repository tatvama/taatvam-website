import company from '../company';

export const refund = {
  slug: 'refund',
  title: 'Refund & Cancellation Policy',
  kicker: 'Money back, and when',
  summary:
    'Written per product type, because a computed report, a shipped article and a ritual ' +
    'performed by a priest cannot honestly share one rule.',
  appliesTo: 'All purchases from Taatvam, Divya Maarg and Sai Vani',
  sections: [
    {
      id: 'principle',
      h: 'The principle',
      body: [
        'If we failed to deliver what you paid for, you get your money back. If we delivered it, ' +
          'we generally do not refund it — and we say so before you pay rather than after.',
        {
          note:
            'This policy sits alongside your rights under the Consumer Protection Act, 2019 and ' +
            'the Consumer Protection (E-Commerce) Rules, 2020. Nothing here takes those away.',
        },
      ],
    },
    {
      id: 'reports',
      h: 'Chart readings and reports',
      body: [
        'A reading is generated the moment payment succeeds, which makes it delivered on the spot.',
        {
          ul: [
            'Not refundable once generated and shown to you.',
            'Fully refunded if generation fails and we cannot produce it — we attempt a manual regeneration first, at no extra cost.',
            'Fully refunded if you were charged twice for the same reading.',
            'Upgrading from a lower tier credits what you already paid against the higher price.',
          ],
        },
        {
          note:
            'A reading computed from birth details you entered incorrectly is not a defect. Write ' +
            'to us before you pay if you are unsure of your birth time — we will tell you how the ' +
            'reading changes and help you narrow it down.',
        },
      ],
    },
    {
      id: 'packs',
      h: 'Chat time packs and alert subscriptions',
      body: [
        {
          ul: [
            'A time pack is refundable in full while it is entirely unused. Once any of it is spent, the unused balance is not refunded in cash but stays on your account and does not expire.',
            'A subscription can be cancelled at any time. Cancellation stops the next renewal; the period already paid for runs out.',
            'A free trial converts to a paid period only if you do not cancel before it ends, and we remind you before it does.',
            'If you bought inside a mobile app, the store processed the payment. Its refund window applies, and you request it there — we will help, but Apple and Google will not let us issue it for you.',
          ],
        },
      ],
    },
    {
      id: 'pujas',
      h: 'Puja bookings',
      body: [
        'A puja involves a temple, a priest and a date. Once those are committed, they cannot be ' +
          'undone at no cost to somebody.',
        {
          table: {
            head: ['When you cancel', 'What you get'],
            rows: [
              ['More than 48 hours before the scheduled ritual', 'Full refund'],
              ['24 to 48 hours before', 'Refund less the temple’s committed cost, shown to you before you confirm'],
              ['Less than 24 hours before', 'Not refundable — the sankalpa and the priest are already committed'],
              ['We could not perform it — temple closure, priest unavailable, any reason on our side', 'Your choice: reschedule at no cost, or a full refund'],
              ['Performed but no video proof supplied', 'Reperformed at our cost, or fully refunded'],
            ],
          },
        },
      ],
    },
    {
      id: 'products',
      h: 'Physical articles — Rudraksha, gemstones, yantras',
      body: [
        {
          ul: [
            'Cancellable for a full refund any time before dispatch, and before the article is energised at the temple.',
            'Replaced free if it arrives damaged, defective or is not what you ordered. Email us photographs within 48 hours of delivery.',
            'Not returnable simply because you changed your mind. A consecrated article cannot be resold, and we will not pretend otherwise.',
            'Fully refunded if it never arrives, or if the courier loses it.',
          ],
        },
      ],
    },
    {
      id: 'donations',
      h: 'Sankalp — donations',
      body: [
        'A donation is voluntary and is not a purchase, so it is not refundable. If you donated by ' +
          'mistake or were charged twice, write to us within seven days and we will return it.',
      ],
    },
    {
      id: 'how',
      h: 'How to request a refund',
      body: [
        {
          ol: [
            `Email ${company.email.support} from the address or with the number on your account.`,
            'Include the order or booking reference and the transaction ID.',
            'Tell us what went wrong in a line or two.',
          ],
        },
        {
          facts: [
            ['We acknowledge', 'Within 2 working days'],
            ['We decide', 'Within 7 working days'],
            ['Money reaches you', '5 to 14 working days after approval, by the original payment method'],
            ['Duplicate charges', 'Always refunded, regardless of anything else in this policy'],
          ],
        },
        'We refund to the original payment method. We cannot refund to a different account, and we ' +
          'do not offer cash or cheque.',
      ],
    },
    {
      id: 'disputes',
      h: 'If you disagree with our decision',
      body: [
        `Reply and say so. It is escalated to ${company.officers.grievance.name}, our ` +
          `${company.officers.grievance.title}, who will review it personally. If you are still not ` +
          'satisfied you may approach a consumer forum, or the National Consumer Helpline. Raising a ' +
          'chargeback with your bank is your right, and we would rather you spoke to us first.',
      ],
    },
  ],
};

export const shipping = {
  slug: 'shipping',
  title: 'Shipping & Delivery Policy',
  kicker: 'Getting the article to you',
  summary:
    'Applies to physical articles sold through Divya Maarg — Rudraksha, gemstones and yantras. ' +
    'Everything else we sell is digital or is a service performed at a temple.',
  appliesTo: 'Physical articles sold through Divya Maarg',
  sections: [
    {
      id: 'where',
      h: 'Where we ship',
      body: [
        {
          ul: [
            'Anywhere in India, to a serviceable pincode.',
            'International shipping on request. Write to us for a quote before ordering — duties and taxes at the destination are yours to pay.',
            'We cannot ship a consecrated article to a PO box.',
          ],
        },
      ],
    },
    {
      id: 'timelines',
      h: 'Dispatch and delivery',
      body: [
        'A remedy is energised at a temple before it leaves us. That step is the reason our ' +
          'dispatch window is longer than a general retailer’s, and we would rather be slow than ' +
          'skip it.',
        {
          table: {
            head: ['Stage', 'Timeline'],
            rows: [
              ['Order confirmed', 'Immediately on successful payment'],
              ['Energised at the temple', '2 to 5 working days, depending on the ritual required'],
              ['Dispatched', 'Within 1 working day of energisation'],
              ['Delivered — metros', '2 to 4 working days after dispatch'],
              ['Delivered — rest of India', '4 to 8 working days after dispatch'],
              ['Delivered — international', '10 to 21 working days after dispatch'],
            ],
          },
        },
        'Festival periods, weather and courier disruption can extend this. If your order will be ' +
          'materially late we tell you rather than waiting for you to ask.',
      ],
    },
    {
      id: 'charges',
      h: 'Shipping charges',
      body: [
        {
          ul: [
            'Standard shipping within India is included in the displayed price unless the product page says otherwise.',
            'Express shipping is available on request at cost.',
            'International shipping is quoted per order.',
            'Customs duties, import taxes and local handling at the destination are payable by you.',
          ],
        },
      ],
    },
    {
      id: 'tracking',
      h: 'Tracking',
      body: [
        'You get a tracking number by SMS or WhatsApp and in your account the moment the article is ' +
          'handed to the courier. You can see the status of every order under your account at any ' +
          'time.',
      ],
    },
    {
      id: 'problems',
      h: 'If something goes wrong',
      body: [
        {
          ul: [
            'Delivery attempted and you were not there: the courier will re-attempt. After three failed attempts the parcel returns to us and we will contact you to arrange redelivery at cost.',
            'Wrong address given: we will help, but a reshipment is chargeable.',
            'Parcel damaged in transit: photograph it before opening if you can, and email us within 48 hours. We replace it free.',
            'Parcel lost: we replace or refund in full once the courier confirms the loss, and we chase the courier, not you.',
          ],
        },
        `Write to ${company.email.support} with your order reference. We reply ` +
          `${company.responseSla}.`,
      ],
    },
  ],
};
