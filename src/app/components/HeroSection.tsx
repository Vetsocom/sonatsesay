'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
<section
  className="relative w-full min-h-screen flex items-center overflow-hidden"
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
      className="object-cover object-center " // Focus on subject for mobile
      unoptimized
    />
    
    {/* Dark overlay - unified for mobile, stronger on right for desktop */}
    <div className="absolute inset-0 bg-black/40 lg:bg-transparent" />
    
    {/* Bottom fade */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to top, rgba(0,33,71,0.9) 0%, transparent 60%)'
      }}
    />
    
    {/* Decorative circles - Hidden on small screens to reduce clutter */}
    <div className="hidden lg:block absolute right-[-5%] top-[10%] w-[400px] h-[400px] rounded-full border border-[rgba(212,175,55,0.15)] pointer-events-none" />
  </div>

  {/* Content Container */}
  <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center py-30 top-[10rem] md:top-0 md:py-24">
    <div className="flex justify-center md:justify-end">
      <div className="w-full md:w-1/2 xl:w-5/12 text-right mt-16 top-19">
        
        <div className="flex justify-end  ">
          <span className="ministerial-divider" />
        </div>

        {/* Stacked title words - Adjusted scales for mobile */}
        <div className="mb-6">
          <div className="text-3xl md:text-5xl lg:text-6xl text-leading text-white mb-1">Minister</div>
          <div className="text-4xl md:text-6xl lg:text-7xl hero-caption-style2 mb-1">Educator</div>
          <div className="text-3xl md:text-5xl lg:text-6xl hero-caption-style3">Leader</div>
        </div>

        {/* Red divider line bottom */}
        <div className="flex justify-end">
          <span className="ministerial-divider" />
        </div>

        {/* CTA - Centered on mobile */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-end">
          <Link href="/about" className="btn-pill-ministerial text-sm md:text-base">
            Learn More
          </Link>
          <Link href="/contact" className="btn-pill-outline text-sm md:text-base">
            Contact
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom credential strip - Visible on mobile but scrollable/stacked */}
    <div className="mt-8 md:mt-16">
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
        <div
          className="px-4 py-2 md:px-5 md:py-3 rounded flex flex-col justify-center"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p className="text-white/50 text-[8px] md:text-[9px] uppercase tracking-widest mb-0.5">Current Role</p>
          <p className="text-white font-semibold text-xs md:text-sm">Asst. Minister, Student Personnel Services</p>
        </div>
        
        <div
          className="px-4 py-2 md:px-5 md:py-3 rounded flex flex-col justify-center"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p className="text-white/50 text-[8px] md:text-[9px] uppercase tracking-widest mb-0.5">Education</p>
          <p className="text-white font-semibold text-xs md:text-sm">M.Ed., Boston College</p>
        </div>
        
        <div
          className="px-4 py-2 md:px-5 md:py-3 rounded flex flex-col justify-center border-l-2 border-l-[#D4AF37]"
          style={{ background: 'rgba(212,175,55,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.3)' }}
        >
          <p className="text-[#D4AF37] text-[8px] md:text-[9px] uppercase tracking-widest mb-0.5">Recognition</p>
          <p className="text-white font-semibold text-xs md:text-sm">Amujae Leader · IVLP Awardee</p>
        </div>
      </div>
    </div>
  </div>
</section>);

}