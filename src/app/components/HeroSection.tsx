'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
   <section
  className="relative w-full min-h-screen md:min-h-[calc(100vh-100px)] flex flex-col overflow-hidden"
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
      className="object-cover object-center md:object-right-top"
      unoptimized
    />
    
    <div className="absolute inset-0 bg-black/40 lg:bg-transparent" />
    
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to top, rgba(0,33,71,0.9) 0%, transparent 60%)'
      }}
    />
  </div>

  {/* Content Container */}
  <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col flex-grow py-12 md:py-24">
    
    {/* Top/Middle Section: Titles */}
    <div className="flex flex-col flex-grow justify-center md:justify-center">
      <div className="w-full md:w-1/2 xl:w-5/12 ml-auto text-center md:text-right">
        
        <div className="flex justify-center md:justify-end mb-4 md:mb-6">
          <span className="ministerial-divider" />
        </div>

        <div className="mb-6 md:mb-8">
          <div className="text-3xl md:text-5xl lg:text-6xl hero-caption-style1 mb-1">Minister</div>
          <div className="text-4xl md:text-6xl lg:text-7xl hero-caption-style2 mb-1">Educator</div>
          <div className="text-3xl md:text-5xl lg:text-6xl hero-caption-style3">Leader</div>
        </div>

        <div className="flex justify-center md:justify-end mb-6 md:mb-8">
          <span className="ministerial-divider" />
        </div>
      </div>
    </div>

    {/* Bottom Section: CTA on mobile / Credentials on Desktop */}
    <div className="mt-auto pb-8 md:pb-0">
      {/* CTA Buttons: Centered at bottom on mobile, aligned right on desktop */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-0 md:mb-16">
        <Link href="/about" className="btn-pill-ministerial w-[45%] md:w-auto text-center">
          Learn More
        </Link>
        <Link href="/contact" className="btn-pill-outline w-[45%] md:w-auto text-center">
          Contact
        </Link>
      </div>

      {/* Credentials: Hidden on mobile, Flex on desktop */}
      <div className="hidden md:flex flex-row gap-4 items-stretch mt-12">
        <div
          className="px-5 py-3 rounded flex flex-col justify-center"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p className="text-white/50 text-[9px] uppercase tracking-widest mb-0.5">Current Role</p>
          <p className="text-white font-semibold text-sm">Asst. Minister, Student Personnel Services</p>
        </div>
        
        <div
          className="px-5 py-3 rounded flex flex-col justify-center"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p className="text-white/50 text-[9px] uppercase tracking-widest mb-0.5">Education</p>
          <p className="text-white font-semibold text-sm">M.Ed., Boston College</p>
        </div>
        
        <div
          className="px-5 py-3 rounded flex flex-col justify-center border-l-2 border-l-[#D4AF37]"
          style={{ background: 'rgba(212,175,55,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.3)' }}
        >
          <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mb-0.5">Recognition</p>
          <p className="text-white font-semibold text-sm">Amujae Leader · IVLP Awardee</p>
        </div>
      </div>
    </div>
  </div>
</section>);

}