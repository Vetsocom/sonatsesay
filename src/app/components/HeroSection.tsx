'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center"
      style={{ backgroundColor: 'var(--primary)' }}
      aria-label="Hero"
    >
      {/* Background portrait image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/sona-national-student-symposium-podium.png"
          alt="Sona T. Sesay"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-center"
          unoptimized
        />

        {/* Lighter dark overlay */}
        <div className="absolute inset-0 bg-black/35 lg:bg-black/10" />

        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,33,71,0.75) 0%, rgba(0,33,71,0.10) 42%, transparent 70%)',
          }}
        />

        {/* Decorative circle */}
        <div className="hidden lg:block absolute right-[-5%] top-[10%] w-[400px] h-[400px] rounded-full border border-[rgba(212,175,55,0.15)] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between min-h-screen pt-28 pb-8 lg:pt-24 lg:pb-12">
        <div className="flex justify-end">
          <div className="w-full sm:w-[88%] md:w-[78%] lg:w-1/2 xl:w-5/12 text-right mt-[13rem] md:mt-[14rem] lg:mt-16">
            <div className="flex justify-end">
              <span className="ministerial-divider" />
            </div>

            {/* Stacked title words */}
            <div className="mb-6">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-leading text-white mb-1">
                Entrepreneur
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl hero-caption-style2 mb-1">
                Educator
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hero-caption-style3">
                Leader
              </div>
            </div>

            <div className="flex justify-end">
              <span className="ministerial-divider" />
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-end">
              <Link href="/about" className="btn-pill-ministerial text-sm md:text-base">
                Learn More
              </Link>
              <Link href="/contact" className="btn-pill-outline text-sm md:text-base">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom credential strip */}
        <div className="mt-6 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
            <div
              className="w-full min-w-0 px-4 py-3 md:px-5 md:py-4 rounded-lg flex flex-col justify-center break-words"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <p className="text-white/50 text-[8px] md:text-[9px] uppercase tracking-widest mb-1">
                Current Role
              </p>
              <p className="text-white font-semibold text-xs md:text-sm leading-snug">
                Asst. Minister, Student Personnel Services
              </p>
            </div>

            <div
              className="w-full min-w-0 px-4 py-3 md:px-5 md:py-4 rounded-lg flex flex-col justify-center break-words"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <p className="text-white/50 text-[8px] md:text-[9px] uppercase tracking-widest mb-1">
                Education
              </p>
              <p className="text-white font-semibold text-xs md:text-sm leading-snug">
                M.Ed., Boston College
              </p>
            </div>

            <div
              className="w-full min-w-0 px-4 py-3 md:px-5 md:py-4 rounded-lg flex flex-col justify-center break-words border-l-2 border-l-[#D4AF37]"
              style={{
                background: 'rgba(212,175,55,0.15)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(212,175,55,0.3)',
                borderRight: '1px solid rgba(212,175,55,0.3)',
                borderBottom: '1px solid rgba(212,175,55,0.3)',
              }}
            >
              <p className="text-[#D4AF37] text-[8px] md:text-[9px] uppercase tracking-widest mb-1">
                Recognition
              </p>
              <p className="text-white font-semibold text-xs md:text-sm leading-snug">
                Amujae Leader · IVLP Awardee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}