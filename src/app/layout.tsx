import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import '../styles/tailwind.css';
import WhatsAppFAB from './components/WhatsAppFAB';

export const metadata: Metadata = {
  metadataBase: new URL("https://sonatesay.vesocom.com"),
  title: {
    default: "Sona T. Sesay | Education Leadership in Liberia",
    template: "%s",
  },
  description:
    "Official portfolio of Sona T. Sesay, a Liberian education leader and public servant committed to educational progress, student development, and national impact.",
  applicationName: "Sona T. Sesay Portfolio",
  authors: [{ name: "Solomon P. Billot" }],
  creator: "Solomon P. Billot",
  publisher: "Sona T. Sesay",
  category: "Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sona T. Sesay | Education Leadership in Liberia",
    description:
      "Official portfolio of Sona T. Sesay, a Liberian education leader and public servant committed to educational progress, student development, and national impact.",
    url: "https://sonatesay.vesocom.com",
    siteName: "Sona T. Sesay",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/sona-national-student-symposium-podium.png",
        width: 1200,
        height: 630,
        alt: "Sona T. Sesay official portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sona T. Sesay | Education Leadership in Liberia",
    description:
      "Official portfolio of Sona T. Sesay, a Liberian education leader and public servant committed to educational progress, student development, and national impact.",
    images: ["/assets/images/sona-national-student-symposium-podium.png"],
  },
};

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