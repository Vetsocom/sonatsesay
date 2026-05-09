import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import '../styles/tailwind.css';
import WhatsAppFAB from './components/WhatsAppFAB';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Sona T. Sesay — Education Leader & Public Servant',
  description:
    'Sona T. Sesay is a senior Liberian education leader serving in the Ministry of Education, advancing student development, policy, and national educational progress.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Sona T. Sesay — Education Leader',
    description: 'Senior leadership in Liberia’s Ministry of Education. Advancing educational equity, student wellbeing, and national development.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <body className={poppins.className}>
        {children}
        <WhatsAppFAB />
</body>
    </html>
  );
}