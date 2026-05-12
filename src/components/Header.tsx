'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Credentials', href: '/#credentials' },
  { label: 'Vision', href: '/#vision' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(26, 26, 62, 0.97)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Sona T. Sesay Home">
            <div className="flex flex-col">
              <span
                className="font-heading text-white font-bold text-lg tracking-tight block leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.02em' }}
              >
                Sona T. Sesay
              </span>
              <span
                className="text-white/60 text-[10px] tracking-widest uppercase"
                style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.15em' }}
              >
                Ministry of Education · Liberia
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8" aria-label="Primary navigation">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="nav-link-underline text-white/80 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                {link?.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-pill-ministerial"
              style={{ padding: '0.7rem 1.6rem', fontSize: '0.8125rem' }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 group"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-[1.5px] bg-white transition-all duration-300" />
            <span className="block w-4 h-[1.5px] bg-white transition-all duration-300 group-hover:w-6" />
            <span className="block w-6 h-[1.5px] bg-white transition-all duration-300" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] mobile-menu-overlay flex flex-col transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="font-bold text-white text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Sona T. Sesay</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-start px-8 pt-12 pb-12 gap-8 flex-1 overflow-y-auto" aria-label="Mobile navigation links">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="text-white text-3xl font-bold tracking-tight hover:text-[#D4AF37] transition-colors duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase' }}
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill-ministerial mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </nav>

        <div className="px-8 py-8 border-t border-white/10">
          <p className="text-white/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>Ministry of Education · Republic of Liberia</p>
        </div>
      </div>
    </>
  );
}