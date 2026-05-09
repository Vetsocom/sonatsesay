import React from 'react';

const philosophyPoints = [
  {
    title: 'Service as Foundation',
    body: 'Leadership in public education is fundamentally an act of service. Every policy decision, every institutional initiative, and every partnership must be evaluated by its impact on the students and communities it is meant to serve.',
  },
  {
    title: 'Evidence-Informed Practice',
    body: 'Sound educational leadership requires grounding decisions in evidence, research, and data. Policy without analysis is ineffective; leadership without accountability is unsustainable.',
  },
  {
    title: 'Collaborative Governance',
    body: 'No single institution or individual can advance national education alone. Meaningful progress requires the sustained collaboration of government, civil society, development partners, and communities working toward shared goals.',
  },
  {
    title: 'Equity as Non-Negotiable',
    body: 'An education system that fails its most marginalised students — its girls, its rural youth, its most economically vulnerable — has failed in its fundamental purpose. Equity is not an aspiration; it is an obligation.',
  },
];

export default function PhilosophySection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#F1F1F0', borderTop: '1px solid #E5E5E5' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
              <span
                className="text-[11px] uppercase tracking-widest font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Leadership Philosophy
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 500,
                color: '#262626',
                lineHeight: 1.1,
              }}
            >
              Principles of Leadership
            </h2>
            <p
              className="leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8 }}
            >
              Sona T. Sesay’s approach to educational leadership is shaped by four core principles that guide her decision-making, her relationships with stakeholders, and her vision for Liberia’s educational future.
            </p>

            {/* Pull quote */}
            <blockquote
              className="mt-10 pl-6 py-2"
              style={{ borderLeft: '3px solid var(--accent)' }}
            >
              <p
                className="text-lg italic leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)', fontWeight: 300 }}
              >
                &ldquo;Education is the most powerful investment a nation can make in its own future. My responsibility is to ensure that investment reaches every student.&rdquo;
              </p>
              <footer className="mt-4">
                <span
                  className="text-[10px] uppercase tracking-widest font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
                >
                  Sona T. Sesay
                </span>
              </footer>
            </blockquote>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {philosophyPoints?.map((point, index) => (
              <div
                key={index}
                className="p-8 rounded"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E5E5',
                  borderLeft: '3px solid var(--accent)',
                  boxShadow: '0 2px 12px rgba(26,26,62,0.06)',
                }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 leading-none"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '3rem',
                      fontWeight: 300,
                      color: 'rgba(0,33,71,0.15)',
                    }}
                  >
                    {String(index + 1)?.padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="font-bold text-xl mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}
                    >
                      {point?.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}
                    >
                      {point?.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}