import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-h-[45vh] flex items-end overflow-hidden pt-32 pb-16"
      style={{ backgroundColor: 'var(--primary)' }}
    >
      <div className="absolute inset-0 z-0 opacity-8">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_10df38ada-1772176870956.png"
          alt="Elegant governmental office corridor with tall windows and polished floors, minimal and formal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />
      </div>
      <div
        className="absolute inset-0 z-5"
        style={{ background: 'linear-gradient(to top, rgba(0,33,71,0.98) 0%, rgba(0,33,71,0.85) 60%, rgba(0,33,71,0.7) 100%)' }}
      />
      {/* Decorative circles */}
      <div
        className="absolute"
        style={{
          right: '5%',
          top: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          border: '1px solid rgba(0,33,71,0.15)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
          <span
            className="text-[11px] uppercase tracking-widest font-bold"
            style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
          >
            Contact
          </span>
        </div>
        <h1
          className="mb-4"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            lineHeight: 1.1,
          }}
        >
          Get in Touch
        </h1>
        <p
          className="max-w-2xl leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)' }}
        >
          For institutional enquiries, partnership discussions, media requests, or policy collaboration, please reach out through the official channels below.
        </p>
      </div>
    </section>
  );
}