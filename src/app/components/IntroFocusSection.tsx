import React from 'react';
import AppImage from '@/components/ui/AppImage';

// Partners marquee data
const partners = [
'UNICEF',
'UNFPA',
'World Food Programme',
'WaterAid',
'Sightsavers',
'World Literacy Foundation',
'Gratitude Network',
'U.S. Dept. of State',
'Ministry of Education',
'Ellen Johnson Sirleaf Center',
'Boston College',
'Global Citizen'];


const focusAreas = [
{
  title: 'Educational Policy',
  description: 'Developing and implementing national education policies that strengthen institutional frameworks and improve student outcomes across Liberia.'
},
{
  title: 'Student Development',
  description: 'Championing holistic student wellbeing, academic support services, and life skills programming for Liberian youth.'
},
{
  title: 'Stakeholder Collaboration',
  description: 'Building strategic partnerships with UNICEF, UNFPA, WFP, and other development organisations to advance educational equity.'
},
{
  title: 'Women & Youth Empowerment',
  description: 'Advocating for inclusive education pathways that remove barriers for women, girls, and marginalised youth in Liberia.'
}];


export default function IntroFocusSection() {
  const doubledPartners = [...partners, ...partners];

  return (
    <>
      {/* Partners Marquee Strip */}
      <section className="banner-bottom-area py-10" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E5E5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="banner-bottom-heading">Organisations I Partnered With</div>
          <div className="overflow-hidden">
            <div
              className="marquee-track flex gap-12 items-center"
              style={{ width: 'max-content' }}>
              
              {doubledPartners?.map((partner, i) =>
              <div
                key={i}
                className="shrink-0 px-6 py-3 rounded"
                style={{
                  border: '1px solid #E5E5E5',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#3C3C3C',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}>
                
                  {partner}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Who is Sona? - Welcome Area */}
      <section
        className="welcome-area py-24"
        style={{ backgroundColor: '#F1F1F0' }}
        id="about-intro">
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <h2
                className="section-heading"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.75rem)', fontWeight: 500, color: '#262626', paddingBottom: '20px', marginBottom: '20px' }}>
                
                Who is Sona?
              </h2>
              <div className="welcome-heading">
                ASSISTANT MINISTER FOR STUDENT PERSONNEL SERVICES<br />
                MINISTRY OF EDUCATION, REPUBLIC OF LIBERIA
              </div>
              <p
                className="leading-relaxed mb-8"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#3C3C3C', lineHeight: 1.8 }}>
                
                Sona T. Sesay is a distinguished Liberian education leader and public servant currently serving as Assistant Minister for Student Personnel Services within the Ministry of Education of the Republic of Liberia. With a career defined by a commitment to student wellbeing, institutional growth, and educational equity, she has become a trusted figure in national education governance.
              </p>
              <p
                className="leading-relaxed mb-10"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#3C3C3C', lineHeight: 1.8 }}>
                
                A graduate of Boston College’s Master of Education programme in Educational Leadership and Policy, Sona brings both academic rigour and practical experience to her leadership role. She is an Amujae Leader, IVLP Awardee, Gratitude Network Fellow, and World Literacy Foundation Ambassador.
              </p>
              <a
                href="/about"
                className="btn-pill-ministerial">
                
                Learn More
              </a>
            </div>

            {/* Right: Portrait */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ borderRadius: '5px' }}>
                <AppImage
                  src="/assets/images/sona-public-speaking-portrait.png"
                  alt="Sona T. Sesay, professional portrait in formal attire, composed and confident expression"
                  width={600}
                  height={700}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: '600px' }}
                  unoptimized />
                
                {/* Red bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: 'var(--accent)' }} />
                
              </div>
              {/* Floating stat */}
              <div
                className="absolute -bottom-6 -left-4 lg:-left-8 px-6 py-5 rounded hidden sm:block"
                style={{ background: '#FFFFFF', boxShadow: '0 4px 24px rgba(26,26,62,0.12)', border: '1px solid #E5E5E5' }}>
                
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}>
                  
                  10+
                </p>
                <p
                  className="text-[10px] uppercase tracking-widest mt-1"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}>
                  
                  Years of Educational<br />Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Focus Areas - 4 column */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="section-heading"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 500, color: '#262626', display: 'inline-block' }}>
              
              Key Focus Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas?.map((area, index) =>
            <div key={index} className="focus-card p-7 rounded">
                <div
                className="w-10 h-10 flex items-center justify-center rounded mb-5"
                style={{ background: 'rgba(0,33,71,0.05)' }}>
                
                  <span
                  className="text-lg font-bold"
                  style={{ color: 'var(--accent)', fontFamily: 'Montserrat, sans-serif' }}>
                  
                    {String(index + 1)?.padStart(2, '0')}
                  </span>
                </div>
                <h3
                className="font-bold text-base mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#262626', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                
                  {area?.title}
                </h3>
                <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}>
                
                  {area?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>);

}