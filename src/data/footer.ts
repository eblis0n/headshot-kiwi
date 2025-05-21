/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 17:24:16
 * @LastEditTime: 2025-05-21 17:35:06
 */
interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterDescription {
  trustedby: string;
  icp: string;
  description: string;
}

export const footerDescription: FooterDescription = {
  trustedby:'Trusted by 12,677+ happy customers',
  icp:'© 2025 HeadshotKiwi',
  description: 'Create professional business headshots in minutes with HeadshotKiwi. Transform your professional image with our AI-powered platform.',
}

export const footerSections: FooterSection[] = [
  {
    title: 'Essential',
    links: [
      { href: '/reviews', label: 'Reviews' },
      { href: '/pricing', label: 'Pricing' },
      { href: 'mailto:support@headshot.kiwi', label: 'Contact' },
      { href: 'https://headshotkiwi.tolt.io', label: 'Affiliate', external: true }
    ]
  },
  {
    title: 'Legal',
    links: [
      { href: '/terms', label: 'Terms' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/refund', label: 'Refund' }
    ]
  }
];
