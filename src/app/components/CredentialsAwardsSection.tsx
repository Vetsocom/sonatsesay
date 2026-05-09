'use client';

import React, { useState } from 'react';

const education = [
  {
    degree: 'Master of Education',
    field: 'Educational Leadership and Policy',
    institution: 'Boston College',
    location: 'Boston, Massachusetts, USA',
    year: '2021',
    detail: 'Graduate programme focused on education policy, institutional leadership, and systemic reform in developing education contexts.',
  },
  {
    degree: 'Bachelor of Arts',
    field: 'Early Childhood Education',
    institution: 'Gaziantep University',
    location: 'Gaziantep, Turkey',
    year: '2015',
    detail: 'Undergraduate preparation in foundational educational theory, child development, and pedagogical practice.',
  },
  {
    degree: 'High School Diploma & WAEC Certificate',
    field: '',
    institution: 'Muslim Congress High School',
    location: 'Liberia',
    year: '2010',
    detail: 'West African Examinations Council certification with strong academic foundation.',
  },
];

const awards = [
  {
    title: 'Amujae Leader',
    issuer: 'Ellen Johnson Sirleaf Presidential Center for Women & Development',
    year: '2023',
    description: 'Selected as an Amujae Leader — a prestigious designation for African women demonstrating exceptional leadership potential and public service commitment.',
  },
  {
    title: 'International Visitor Leadership Program Impact Awardee',
    issuer: 'U.S. Department of State',
    year: '2022',
    description: 'Recognised for outstanding impact and leadership through the U.S. Department of State’s flagship professional exchange programme for emerging international leaders.',
  },
  {
    title: 'Gratitude Network Fellow',
    issuer: 'The Gratitude Network',
    year: '2021',
    description: 'Selected as a Fellow for demonstrated commitment to scaling social impact in education and youth development across West Africa.',
  },
  {
    title: 'World Literacy Foundation Ambassador',
    issuer: 'World Literacy Foundation',
    year: '2020',
    description: 'Appointed as Ambassador in recognition of advocacy for literacy, educational access, and reading promotion among Liberian youth.',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'Sona T. Sesay exemplifies the kind of dedicated, visionary leadership that Liberia’s education sector needs. Her commitment to student welfare and institutional excellence is truly inspiring.',
    author: 'Ellen Johnson Sirleaf Presidential Center',
  },
  {
    quote: 'As an Amujae Leader, Sona has demonstrated exceptional capacity to drive change in public education. Her work at the Ministry of Education reflects the highest standards of public service.',
    author: 'Amujae Initiative',
  },
  {
    quote: 'Sona’s participation in the IVLP programme showcased her remarkable ability to translate global best practices into meaningful local impact for Liberian students.',
    author: 'U.S. Department of State — IVLP',
  },
  {
    quote: 'The Gratitude Network is proud to have Sona as a Fellow. Her dedication to scaling educational impact across West Africa is a model for emerging leaders everywhere.',
    author: 'The Gratitude Network',
  },
  {
    quote: 'Sona T. Sesay is a leading voice for educational equity in Liberia. Her advocacy for girls’ education and student wellbeing is making a real difference in communities across the country.',
    author: 'World Literacy Foundation',
  },
  {
    quote: 'Through her work at LEAD Monrovia Football Academy and now the Ministry of Education, Sona has consistently demonstrated that education and youth empowerment go hand in hand.',
    author: 'LEAD Monrovia Football Academy',
  },
];

export default function CredentialsAwardsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials?.length - visibleCount : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev >= testimonials?.length - visibleCount ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials?.slice(activeTestimonial, activeTestimonial + visibleCount);

  return (
    <>
      {/* Education & Awards Section */}
      <section
        id="credentials"
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Education */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
              <span
                className="text-[11px] uppercase tracking-widest font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Academic Credentials
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h2
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 500,
                    color: '#262626',
                    lineHeight: 1.1,
                  }}
                >
                  Education &amp; Qualifications
                </h2>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-6">
                {education?.map((edu, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 p-6 rounded"
                    style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 2px 12px rgba(26,26,62,0.06)', transition: 'border-color 0.3s ease' }}
                  >
                    <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1">
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(0,33,71,0.05)' }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <span
                        className="text-[10px] uppercase tracking-widest"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280', fontWeight: 600 }}
                      >
                        {edu?.year}
                      </span>
                    </div>
                    <div className="sm:col-span-10">
                      <h3
                        className="font-bold text-lg leading-tight"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}
                      >
                        {edu?.degree}
                        {edu?.field && (
                          <span style={{ color: '#3C3C3C', fontWeight: 400 }}> — {edu?.field}</span>
                        )}
                      </h3>
                      <p
                        className="font-medium text-sm mt-1"
                        style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
                      >
                        {edu?.institution}
                      </p>
                      <p
                        className="text-sm"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
                      >
                        {edu?.location}
                      </p>
                      {edu?.detail && (
                        <p
                          className="text-sm leading-relaxed mt-3"
                          style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
                        >
                          {edu?.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '4rem' }}>
            <div className="flex items-center gap-3 mb-10">
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
              <span
                className="text-[11px] uppercase tracking-widest font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Honours &amp; Recognition
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {awards?.map((award, index) => (
                <article key={index} className="award-card p-8 rounded">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,33,71,0.05)', border: '1px solid rgba(0,33,71,0.1)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg leading-tight"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}
                      >
                        {award?.title}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
                      >
                        {award?.issuer}
                      </p>
                      <span
                        className="text-[10px] uppercase tracking-widest"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280', fontWeight: 600 }}
                      >
                        {award?.year}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
                  >
                    {award?.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section - carousel like ayachebbi.com */}
      <section
        className="py-24"
        style={{ backgroundColor: '#F1F1F0', borderTop: '1px solid #E5E5E5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
                <span
                  className="text-[11px] uppercase tracking-widest font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
                >
                  Testimonials
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 500,
                  color: '#262626',
                  lineHeight: 1.1,
                }}
              >
                What They Say
              </h2>
            </div>
            {/* Carousel controls */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: '2px solid #E5E5E5', background: '#FFFFFF', cursor: 'pointer' }}
                aria-label="Previous testimonials"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: '2px solid var(--accent)', background: 'var(--accent)', cursor: 'pointer' }}
                aria-label="Next testimonials"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials?.map((testimonial, index) => (
              <div key={`${activeTestimonial}-${index}`} className="testimonial-block">
                {/* Quote icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(0,33,71,0.05)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="testimonial-block-content">&ldquo;{testimonial?.quote}&rdquo;</p>
                <p className="testimonial-block-author">{testimonial?.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}