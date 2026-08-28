import privacy from './privacy';
import terms from './terms';
import { refund, shipping } from './commerce';
import { dataRequests, accountDeletion, cookies } from './rights';
import { acceptableUse, childSafety, aiDisclosure, eula } from './platform';
import { security, subprocessors, accessibility } from './trust';

/**
 * The policy registry. Grouped the way somebody looking for a policy thinks,
 * not the way a lawyer files them.
 */
export const groups = [
  {
    heading: 'The essentials',
    note: 'The two documents that govern everything else.',
    policies: [privacy, terms],
  },
  {
    heading: 'Buying from us',
    note: 'Money, delivery, and what happens when something does not arrive.',
    policies: [refund, shipping],
  },
  {
    heading: 'Your data and your account',
    note: 'The rights you have, and how to use them without asking permission.',
    policies: [dataRequests, accountDeletion, cookies],
  },
  {
    heading: 'Conduct, safety and the apps',
    note: 'What is not allowed, how the AI is bounded, and the mobile app licence.',
    policies: [acceptableUse, childSafety, aiDisclosure, eula],
  },
  {
    heading: 'Trust and transparency',
    note: 'Who we let near your data, how to report a flaw, and where we fall short.',
    policies: [security, subprocessors, accessibility],
  },
];

export const allPolicies = groups.flatMap((g) => g.policies);

export const policyBySlug = allPolicies.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {});

export default allPolicies;
