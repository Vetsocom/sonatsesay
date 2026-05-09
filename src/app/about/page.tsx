import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import BiographySection from '@/app/about/components/BiographySection';
import PhilosophySection from '@/app/about/components/PhilosophySection';
import ValuesSection from '@/app/about/components/ValuesSection';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <AboutHero />
        <BiographySection />
        <PhilosophySection />
        <ValuesSection />
      </main>
      <Footer />
    </>
  );
}