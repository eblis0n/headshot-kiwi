/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 17:35:36
 */

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo'
import { footerSections, footerDescription } from '@/data/footer';

export function Footer() {
  return (
    <footer className="bg-green-950 text-white/80">
      <div className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-8 max-w-2xl">
            <div className="scale-110 origin-left w-fit">
              <Logo />
            </div>
            <p className="text-base text-white/60">
              {footerDescription.description}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm">{footerDescription.trustedby}</span>
            </div>
            <address className="text-sm text-white/60 not-italic">
              {footerDescription.icp}<br />
              All rights reserved
            </address>
          </div>

          {/* Links Sections */}
          <div className="flex gap-24">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold text-base mb-8">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors focus:ring-0"
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
