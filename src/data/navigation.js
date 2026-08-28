/** Navigation is data so the header, the drawer, the footer and the sitemap agree. */

export const primaryNav = [
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
];

export const footerNav = [
  {
    heading: 'Products',
    links: [
      { to: '/products/divya-maarg', label: 'Divya Maarg' },
      { to: '/products/sai-vani', label: 'Sai Vani' },
      { to: '/products', label: 'All products' },
      { to: '/app-compliance', label: 'App store disclosures' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/careers', label: 'Careers' },
      { to: '/press', label: 'Press & brand' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { to: '/support', label: 'Support' },
      { to: '/legal/account-deletion', label: 'Delete your account' },
      { to: '/legal/data-requests', label: 'Your data rights' },
      { to: '/legal/security', label: 'Report a vulnerability' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { to: '/legal/privacy', label: 'Privacy' },
      { to: '/legal/terms', label: 'Terms' },
      { to: '/legal/refund', label: 'Refunds' },
      { to: '/legal', label: 'All policies' },
    ],
  },
];
