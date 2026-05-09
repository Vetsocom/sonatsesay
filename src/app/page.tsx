import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import IntroFocusSection from '@/app/components/IntroFocusSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import CredentialsAwardsSection from '@/app/components/CredentialsAwardsSection';
import VisionPartnersSection from '@/app/components/VisionPartnersSection';
import type { Metadata } from "next";
import Script from "next/script";
import { seoData } from "@/lib/seo";

export const metadata = seoData.home;

export default function HomePage() {
  const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sona T. Sesay",
  jobTitle: "Education Leader",
  description:
    "Liberian education leader and public servant focused on student development, educational progress, and public service.",
  url: "https://sonatsesay.vetsocom.com",
  image:
    "https://sonatsesay.vetsocom.com/assets/images/sona-national-student-symposium-podium.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Liberia",
  },
};
  return (
    
    <>
      <Header />
      <main id="main-content">
         <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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