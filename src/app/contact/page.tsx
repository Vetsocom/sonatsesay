import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactDetailsSection from '@/app/contact/components/ContactDetailsSection';
import ContactFormSection from '@/app/contact/components/ContactFormSection';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactHero />
        <ContactDetailsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}