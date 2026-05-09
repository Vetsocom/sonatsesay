'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top: Social + Nav */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-10" style={{ borderBottom: '1px solid #E5E5E5' }}>
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div>
              <span
                className="font-bold text-xl block"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#1a1a3e', letterSpacing: '0.02em' }}
              >
                Sona T. Sesay
              </span>
              <span
                className="text-[10px] uppercase tracking-widest block mt-1"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280', letterSpacing: '0.15em' }}
              >
                Ministry of Education · Republic of Liberia
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
            >
              Advancing Education Through Leadership, Policy, and Service in the Republic of Liberia.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {[
                { label: 'LinkedIn', href: '#', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )},
                { label: 'Twitter', href: '#', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                )},
                { label: 'Facebook', href: 'https://web.facebook.com/SonaTraore', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                )},
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: '#F1F1F0', color: '#3C3C3C' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#FF5757';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#F1F1F0';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#3C3C3C';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] uppercase tracking-widest font-bold mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Navigation
              </span>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Experience', href: '/#experience' },
                { label: 'Credentials', href: '/#credentials' },
                { label: 'Vision', href: '/#vision' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#FF5757'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] uppercase tracking-widest font-bold mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Contact
              </span>
              <a
                href="mailto:sona.sesay@moe.gov.lr"
                className="text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
              >
                sona.sesay@moe.gov.lr
              </a>
              <a
                href="tel:+231770000000"
                className="text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
              >
                +231 77 000 0000
              </a>
              <span
                className="text-sm"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF' }}
              >
                Monrovia, Liberia
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[11px] uppercase tracking-widest"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF' }}
          >
            © 2026 Sona T. Sesay. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/contact"
              className="text-[11px] uppercase tracking-widest transition-colors duration-200"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF' }}
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-[11px] uppercase tracking-widest transition-colors duration-200"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF' }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}