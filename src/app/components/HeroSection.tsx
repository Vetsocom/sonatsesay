'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--primary)' }}
      aria-label="Hero">
      
      {/* Background portrait image - left side */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/sona-national-student-symposium-podium.png"
          alt="Sona T. Sesay, Assistant Minister for Student Personnel Services, Ministry of Education, Republic of Liberia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized />
        
        {/* Dark overlay - stronger on right side where text is */}
        <div
          className="absolute inset-0"
          />
        
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,33,71,0.7) 0%, transparent 40%)'
          }} />
        
        {/* Decorative circles - like ayachebbi.com */}
        <div
          className="absolute"
          style={{
            right: '-5%',
            top: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '1px solid rgba(212,175,55,0.15)',
            pointerEvents: 'none'
          }} />
        
        <div
          className="absolute"
          style={{
            right: '-8%',
            bottom: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px solid rgba(212,175,55,0.1)',
            pointerEvents: 'none'
          }} />
        
      </div>

      {/* Content - right aligned like ayachebbi.com */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col  min-h-screen py-24 justify-center top-20 md:top-10">
        <div className="flex justify-end mb-auto mt-auto">
          <div className="w-full lg:w-1/2 xl:w-5/12 text-right lg:text-right md:top-4 top-6  ">
      
            <div className="flex justify-end mb-6">
              <span className="ministerial-divider" />
            </div>

            {/* Stacked title words - ayachebbi style */}
            <div className="mb-8">
              <div className="hero-caption-style1 mb-1">Minister</div>
              <div className="hero-caption-style2 mb-1">Educator</div>
              <div className="hero-caption-style3">Leader</div>
            </div>

            {/* Red divider line bottom */}
            <div className="flex justify-end mb-8">
              <span className="ministerial-divider" />
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-end">
              <Link href="/about" className="btn-pill-ministerial">
                Learn More
              </Link>
              <Link href="/contact" className="btn-pill-outline">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom credential strip - now relative to content flow but pushed to bottom */}
        <div className="mt-12 lg:mt-16 hidden md:block">
          <div className="flex flex-wrap gap-4 items-stretch">
            <div
              className="px-5 py-3 rounded flex flex-col justify-center"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}>
              
              <p className="text-white/50 text-[9px] uppercase tracking-widest mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>Current Role</p>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Asst. Minister, Student Personnel Services</p>
            </div>
            <div
              className="px-5 py-3 rounded flex flex-col justify-center"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}>
              
              <p className="text-white/50 text-[9px] uppercase tracking-widest mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>Education</p>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>M.Ed., Boston College</p>
            </div>
            <div
              className="px-5 py-3 rounded flex flex-col justify-center border-l-2 border-l-[#D4AF37]"
              style={{ background: 'rgba(212,175,55,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.3)' }}>
              
              <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>Recognition</p>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Amujae Leader · IVLP Awardee</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}