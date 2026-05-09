import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const visionPillars = [
  {
    number: '01',
    title: 'Educational Equity',
    body: 'Every Liberian child deserves equal access to quality education regardless of geography, gender, or socioeconomic background. Policy must be the instrument of this equity.',
  },
  {
    number: '02',
    title: 'Student Wellbeing',
    body: 'Academic achievement is inseparable from holistic student welfare. Institutions must address the full spectrum of student needs — social, emotional, and academic.',
  },
  {
    number: '03',
    title: 'Institutional Strengthening',
    body: 'Sustainable educational progress requires robust institutions with capable leadership, transparent governance, and systems built for long-term national development.',
  },
  {
    number: '04',
    title: 'Women & Youth Empowerment',
    body: 'Empowering women and young people through education is not a secondary objective — it is the foundation of Liberia’s national growth and democratic future.',
  },
];

const partners = [
  { name: 'UNICEF', full: 'United Nations Children’s Fund' },
  { name: 'UNFPA', full: 'United Nations Population Fund' },
  { name: 'WFP', full: 'World Food Programme' },
  { name: 'WaterAid', full: 'WaterAid International' },
  { name: 'Sightsavers', full: 'Sightsavers International' },
  { name: 'World Literacy Foundation', full: 'World Literacy Foundation' },
  { name: 'Gratitude Network', full: 'The Gratitude Network' },
  { name: 'U.S. Dept. of State', full: 'U.S. Department of State — IVLP' },
];

const pressItems = [
  {
    date: 'March 2023',
    title: 'Amujae Leader: Sona T. Sesay Recognised for Public Service Excellence',
    excerpt: 'The Ellen Johnson Sirleaf Presidential Center for Women & Development names Sona T. Sesay as an Amujae Leader for her outstanding contributions to education in Liberia.',
    link: '/about',
    image: '/assets/images/sona-award-portrait-tsue.png',
  },
  {
    date: 'November 2022',
    title: 'IVLP Awardee Brings Global Best Practices to Liberian Education',
    excerpt: 'The U.S. Department of State recognises Sona T. Sesay through the International Visitor Leadership Program for her impactful leadership in student personnel services.',
    link: '/about',
    image: '/assets/images/sona-award-presentation-ceremony.png',
  },
  {
    date: 'June 2021',
    title: 'Gratitude Network Fellow Champions Educational Equity in West Africa',
    excerpt: 'Sona T. Sesay joins the Gratitude Network Fellowship, bringing her commitment to scaling educational impact and youth development across West Africa.',
    link: '/about',
    image: '/assets/images/sona-bluecrest-graduation-speech.png',
  },
];

export default function VisionPartnersSection() {
  return (
    <>
      {/* Press Section */}
      <section
        className="py-24"
        style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 500,
                color: '#262626',
                lineHeight: 1.1,
              }}
            >
              Press &amp; Recognition
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressItems?.map((item, index) => (
              <div key={index} className="press-block">
                <div
                  className="overflow-hidden rounded"
                  style={{ height: '200px', background: '#F1F1F0' }}
                >
                  <AppImage
                    src={item.image}
                    alt={`Press coverage: ${item?.title}`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(20%)' }}
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <div className="press-block-date">{item?.date}</div>
                  <div className="press-block-heading">{item?.title}</div>
                  <div className="press-block-content">{item?.excerpt}</div>
                  <div className="press-block-link">
                    <Link href={item?.link}>Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vision Block - dark navy */}
      <section
        id="vision"
        className="vision-block py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
                <span
                  className="text-[11px] uppercase tracking-widest font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
                >
                  Leadership Vision
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                }}
              >
                A Vision for Education
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end">
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}
              >
                Sona T. Sesay envisions a Liberian education system where every student has the opportunity to thrive — supported by equitable policies, strong institutions, and leaders who serve with integrity, purpose, and a genuine commitment to national progress.
              </p>
              <div className="w-full h-64 lg:h-80 overflow-hidden rounded">
                <AppImage
                  src="/assets/images/sona-student-engagement-group.png"
                  alt="Student engagement and educational leadership vision"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Vision Pillars */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {visionPillars?.map((pillar, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 hover:bg-white/5"
                style={{ background: 'var(--primary)' }}
              >
                <span
                  className="block mb-6 leading-none"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '3rem',
                    fontWeight: 300,
                    color: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  {pillar?.number}
                </span>
                <h3
                  className="font-bold text-lg mb-4 leading-tight"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF' }}
                >
                  {pillar?.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.55)' }}
                >
                  {pillar?.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/about" className="btn-pill-ministerial">
              Read Full Vision Statement
            </Link>
            <Link href="/contact" className="btn-pill-outline">
              Engage with Her Work
            </Link>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section
        id="partners"
        className="py-20"
        style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="banner-bottom-heading">Development Partners &amp; Collaborating Organisations</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners?.map((partner, index) => (
              <div
                key={index}
                className="partner-logo-box rounded px-6 py-7 flex flex-col justify-center items-center text-center"
              >
                <p
                  className="font-bold text-base leading-tight"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}
                >
                  {partner?.name}
                </p>
                <p
                  className="text-xs mt-2 leading-snug"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
                >
                  {partner?.full}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-sm mt-8 text-center mb-10"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
          >
            Collaborating with leading international organisations in the delivery of national education programmes and student welfare initiatives.
          </p>
          <div className="w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-sm">
            <AppImage
              src="/assets/images/sona-stakeholder-engagement-group.png"
              alt="Stakeholder engagement and institutional collaboration"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>
      {/* Contact CTA Banner - warm brown like ayachebbi.com */}
      <section
        className="contact-section-bg py-24"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="contact-heading">Join Sona’s Network</div>
              <p
                className="leading-relaxed mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}
              >
                For speaking engagements, institutional partnerships, media requests, or policy collaboration, please reach out through the official contact channels.
              </p>
              <a
                href="mailto:sona.sesay@moe.gov.lr"
                className="text-white font-medium underline"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
              >
                sona.sesay@moe.gov.lr
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn-pill-ministerial">
                Contact the Office
              </Link>
              <a
                href="mailto:sona.sesay@moe.gov.lr"
                className="btn-pill-outline"
                style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#FFFFFF' }}
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}