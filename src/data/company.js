/**
 * Single source of truth for every company fact that appears on the site.
 * Change it here and it changes in the footer, the policies, the JSON-LD and
 * the app-store compliance table at the same time.
 */

const company = {
  brand: 'Taatvam',
  legalName: 'Tatvam AI Labs Private Limited',
  legalNameCaps: 'TATVAM AI LABS PRIVATE LIMITED',
  tagline: 'A product house for India’s devotional life.',
  origin: 'Bengaluru, Karnataka, India',
  founded: '2024',

  site: 'https://taatvam.com',
  domain: 'taatvam.com',

  email: {
    general: 'team@taatvam.com',
    support: 'team@taatvam.com',
    privacy: 'team@taatvam.com',
    grievance: 'team@taatvam.com',
    security: 'team@taatvam.com',
    careers: 'team@taatvam.com',
    press: 'team@taatvam.com',
  },

  address: {
    locality: 'Bengaluru',
    region: 'Karnataka',
    postal: '560001',
    country: 'India',
    countryCode: 'IN',
    /* Kept as a single editable line so it is never assembled wrongly. */
    line: 'Bengaluru, Karnataka 560001, India',
  },

  hours: 'Monday to Saturday, 10:00 – 19:00 IST',
  responseSla: 'within two working days',

  people: [
    {
      name: 'Sairam Gowda D',
      role: 'Founder',
      note:
        'Sets product direction across both platforms and owns the relationships with the ' +
        'temples, priests and institutions the products depend on.',
    },
  ],

  /* Officers named by law. Both roles are filled by the founder at current headcount;
     the policies say so plainly rather than inventing a department. */
  officers: {
    grievance: {
      title: 'Grievance Officer',
      name: 'Sairam Gowda D',
      email: 'team@taatvam.com',
      basis:
        'Appointed under the Information Technology (Intermediary Guidelines and Digital Media ' +
        'Ethics Code) Rules, 2021 and the Digital Personal Data Protection Act, 2023.',
    },
    dpo: {
      title: 'Data Protection Contact',
      name: 'Sairam Gowda D',
      email: 'team@taatvam.com',
      basis:
        'Point of contact for the rights of Data Principals under the Digital Personal Data ' +
        'Protection Act, 2023.',
    },
  },

  jurisdiction: 'Courts at Bengaluru, Karnataka, India',
  governingLaw: 'the laws of India',

  /* Bumped whenever a policy is materially revised. */
  policiesUpdated: '28 August 2026',
};

export const mailto = (key, subject) => {
  const to = company.email[key] || company.email.general;
  return subject ? `mailto:${to}?subject=${encodeURIComponent(subject)}` : `mailto:${to}`;
};

export default company;
