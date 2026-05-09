import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import IntroFocusSection from '@/app/components/IntroFocusSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import CredentialsAwardsSection from '@/app/components/CredentialsAwardsSection';
import VisionPartnersSection from '@/app/components/VisionPartnersSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <IntroFocusSection />
        <ExperienceSection />
        <CredentialsAwardsSection />
        <VisionPartnersSection />
      </main>
      <Footer />
    </>
  );
}