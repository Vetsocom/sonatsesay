import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export default function BiographySection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left image column */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded">
              <AppImage
                src="/assets/images/sona-official-portrait-yellow.png"
                alt="Sona T. Sesay, professional portrait in formal business attire, composed and confident, warm institutional lighting"
                width={480}
                height={620}
                className="w-full object-cover object-top"
                unoptimized />
              
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(0,33,71,0.9) 0%, transparent 100%)' }}>
                
                <p
                  className="font-bold text-lg text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  
                  Sona T. Sesay
                </p>
                <p
                  className="text-[10px] uppercase tracking-widest mt-1"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)', fontWeight: 700 }}>
                  
                  Assistant Minister · Ministry of Education
                </p>
              </div>
              {/* Red bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: 'var(--accent)' }} />
              
            </div>

            {/* Quick facts */}
            <div
              className="mt-6 rounded divide-y"
              style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 2px 12px rgba(26,26,62,0.06)', divideColor: '#E5E5E5' }}>
              
              {[
              { label: 'Nationality', value: 'Liberian' },
              { label: 'Current Role', value: 'Asst. Minister, Student Personnel Services' },
              { label: 'Institution', value: 'Ministry of Education, Liberia' },
              { label: 'Graduate Degree', value: 'M.Ed., Boston College' }]?.
              map((fact, i) =>
              <div key={i} className="px-5 py-4" style={{ borderBottom: i < 3 ? '1px solid #E5E5E5' : 'none' }}>
                  <p
                  className="text-[10px] uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF', fontWeight: 600 }}>
                  
                    {fact?.label}
                  </p>
                  <p
                  className="font-medium text-sm"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#3C3C3C' }}>
                  
                    {fact?.value}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right biography */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
              <span
                className="text-[11px] uppercase tracking-widest font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}>
                
                Biography
              </span>
            </div>
            <h2
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 500,
                color: '#262626',
                lineHeight: 1.2
              }}>
              
              A Life Dedicated to Educational Progress
            </h2>

            <div className="space-y-5">
              {[
              'Sona T. Sesay is a distinguished Liberian education leader and public servant whose career has been defined by an unwavering commitment to advancing educational equity, strengthening institutions, and empowering the next generation of Liberian citizens. Currently serving as Assistant Minister for Student Personnel Services within the Ministry of Education of the Republic of Liberia, she holds one of the most consequential student welfare roles in the national government.',
              'Born and educated in Liberia, Sona pursued advanced academic training internationally, earning a Master of Education in Educational Leadership and Policy from Boston College in the United States, and a Bachelor of Arts in Early Childhood Education from Gaziantep University in Turkey. These academic credentials, combined with her deep-rooted understanding of the Liberian educational context, have positioned her as a uniquely capable leader in national education governance.',
              'Her professional journey began in the classroom and youth development sector, where she served as both a teacher and Life Skills Programme Officer at the LEAD Monrovia Football Academy — an institution that uses sport as a vehicle for youth education and personal development. She later rose to serve as the Academy’s Executive Director, where she oversaw strategic direction, institutional partnerships, and programme delivery for Liberian youth.',
              'In her current ministerial role, Sona provides strategic oversight of student personnel services across Liberia’s national education system. She coordinates with leading international development organisations — including UNICEF, UNFPA, WFP, WaterAid, and Sightsavers — on joint programmes addressing school enrolment, student welfare, and educational access.',
              'Sona has been recognised internationally for her leadership and impact. She is a designated Amujae Leader by the Ellen Johnson Sirleaf Presidential Center for Women and Development, an International Visitor Leadership Program Impact Awardee from the U.S. Department of State, a Gratitude Network Fellow, and a World Literacy Foundation Ambassador.']?.
              map((para, i) =>
              <p
                key={i}
                className="leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8 }}>
                
                  {para}
                </p>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-pill-ministerial">
                Contact Her Office
              </Link>
              <Link
                href="/#experience"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}>
                
                View Career History
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}