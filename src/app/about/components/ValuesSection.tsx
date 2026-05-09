import React from 'react';
import Link from 'next/link';

const values = [
  { number: '01', title: 'Integrity', desc: 'Conducting public service with transparency, honesty, and unwavering ethical commitment.' },
  { number: '02', title: 'Compassion', desc: 'Centring the wellbeing of students and communities in every institutional decision.' },
  { number: '03', title: 'Innovation', desc: 'Embracing evidence-based approaches and adaptive solutions to complex educational challenges.' },
  { number: '04', title: 'Accountability', desc: 'Maintaining rigorous standards of institutional responsibility and outcome measurement.' },
  { number: '05', title: 'Partnership', desc: 'Fostering genuine collaboration across government, civil society, and international development partners.' },
  { number: '06', title: 'Inclusion', desc: 'Ensuring that educational policy and practice actively serve the most marginalised populations.' },
];

export default function ValuesSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
            <span
              className="text-[11px] uppercase tracking-widest font-bold"
              style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
            >
              Core Values
            </span>
            <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
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
            Guided by Principle
          </h2>
          <p
            className="max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8 }}
          >
            The values that underpin Sona T. Sesay’s leadership and public service commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {values?.map((val, index) => (
            <div key={index} className="focus-card p-8 rounded">
              <div
                className="w-11 h-11 flex items-center justify-center rounded mb-5"
                style={{ background: 'rgba(0,33,71,0.05)', border: '1px solid rgba(0,33,71,0.1)' }}
              >
                <span
                  className="font-bold text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--accent)' }}
                >
                  {val?.number}
                </span>
              </div>
              <h3
                className="font-bold text-lg mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}
              >
                {val?.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
              >
                {val?.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA - dark navy */}
        <div
          className="rounded p-10 lg:p-14 text-center"
          style={{ background: 'var(--primary)' }}
        >
          <h3
            className="text-white mb-4"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            Committed to Liberia’s Educational Future
          </h3>
          <p
            className="max-w-xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)' }}
          >
            For enquiries, institutional partnerships, or media engagement, please contact Sona T. Sesay’s office directly.
          </p>
          <Link href="/contact" className="btn-pill-ministerial">
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}