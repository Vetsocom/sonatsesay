'use client';

import React from 'react';

const contactDetails = [
  {
    label: 'Office Phone',
    value: '+231 77 000 0000',
    link: 'tel:+231770000000',
    note: 'Ministry of Education, Monrovia',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+231 88 000 0000',
    link: 'https://wa.me/231880000000',
    note: 'Available during business hours',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    label: 'Official Email',
    value: 'sona.sesay@moe.gov.lr',
    link: 'mailto:sona.sesay@moe.gov.lr',
    note: 'Ministry of Education',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'General Email',
    value: 'sonasesay@gmail.com',
    link: 'mailto:sonasesay@gmail.com',
    note: 'General correspondence',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Office Address',
    value: 'Ministry of Education, Capitol Hill',
    link: null,
    note: 'Monrovia, Republic of Liberia',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactDetailsSection() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
              <span
                className="text-[11px] uppercase tracking-widest font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Contact Information
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 500,
                color: '#262626',
                lineHeight: 1.2,
              }}
            >
              Official Contact Channels
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8 }}
            >
              Sona T. Sesay’s office welcomes enquiries from government stakeholders, development partners, academic institutions, media organisations, and members of the public.
            </p>

            {/* Location block - dark navy */}
            <div
              className="rounded p-6"
              style={{ background: 'var(--primary)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span
                  className="text-[10px] uppercase tracking-widest font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
                >
                  Office Location
                </span>
              </div>
              <p
                className="font-bold text-lg leading-tight text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Ministry of Education
              </p>
              <p
                className="text-sm mt-1"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.6)' }}
              >
                Capitol Hill, Monrovia
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.6)' }}
              >
                Republic of Liberia
              </p>
              <div
                className="mt-5 pt-5 flex items-center gap-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                <span
                  className="text-xs font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
                >
                  Active Government Office
                </span>
              </div>
            </div>
          </div>

          {/* Right: contact detail rows */}
          <div className="lg:col-span-8">
            <div
              className="rounded overflow-hidden"
              style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 2px 12px rgba(26,26,62,0.06)' }}
            >
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="px-7 py-6"
                  style={{ borderBottom: index < contactDetails.length - 1 ? '1px solid #E5E5E5' : 'none' }}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-11 h-11 rounded flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(0,33,71,0.05)' }}
                    >
                      {detail.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[10px] uppercase tracking-widest mb-1"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF', fontWeight: 600 }}
                      >
                        {detail.label}
                      </p>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          className="font-semibold text-base block transition-colors duration-200"
                          style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--primary)' }}
                          target={detail.link.startsWith('http') ? '_blank' : undefined}
                          rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--primary)'; }}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p
                          className="font-semibold text-base"
                          style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--primary)' }}
                        >
                          {detail.value}
                        </p>
                      )}
                      <p
                        className="text-sm mt-0.5"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF' }}
                      >
                        {detail.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div
              className="mt-6 p-6 rounded flex flex-wrap gap-8"
              style={{ background: '#F1F1F0' }}
            >
              {[
                { label: 'Office Hours', value: 'Monday — Friday', sub: '8:00 AM — 5:00 PM (GMT)' },
                { label: 'Response Time', value: 'Within 2–3 Business Days', sub: 'For official correspondence' },
                { label: 'Media Enquiries', value: 'sona.sesay@moe.gov.lr', sub: 'Marked: Media Request' },
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className="text-[10px] uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)', fontWeight: 700 }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-semibold text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--primary)' }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
                  >
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}