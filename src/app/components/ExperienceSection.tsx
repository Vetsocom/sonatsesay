import React from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
{ value: '10+', label: 'Years of Educational Leadership' },
{ value: '3+', label: 'Senior Government & Executive Roles' },
{ value: '8+', label: 'International Partner Organisations' },
{ value: '4', label: 'Awards & Fellowships' }];


const experiences = [
{
  period: '2022 — Present',
  role: 'Assistant Minister for Student Personnel Services',
  organisation: 'Ministry of Education, Republic of Liberia',
  location: 'Monrovia, Liberia',
  type: 'Government · Senior Leadership',
  summary:
  'Serves as a senior official within the Ministry of Education, providing strategic oversight of student personnel services across Liberia’s national education system. Responsibilities include policy development, inter-agency coordination, and institutional strengthening in student welfare and academic support.',
  highlights: [
  'Provides ministerial-level leadership on student welfare policy and implementation frameworks',
  'Coordinates with UNICEF, UNFPA, WFP, WaterAid, and Sightsavers on joint educational programmes',
  'Leads national initiatives addressing student wellbeing, school enrolment, and retention',
  'Oversees institutional partnerships and stakeholder engagement at national and international levels',
  'Represents the Ministry in high-level forums, policy dialogues, and development partner meetings']

},
{
  period: '2018 — 2022',
  role: 'Executive Director',
  organisation: 'LEAD Monrovia Football Academy',
  location: 'Monrovia, Liberia',
  type: 'Non-Governmental · Executive Leadership',
  summary:
  'Led the strategic direction and operational management of LEAD Monrovia Football Academy, an institution combining athletic development with life skills education for Liberian youth. Oversaw programme design, donor relations, community outreach, and institutional governance.',
  highlights: [
  'Directed the Academy’s dual mandate of athletic excellence and youth life skills development',
  'Secured and managed institutional partnerships with national and international development organisations',
  'Designed and implemented life skills curricula aligned with national educational standards',
  'Built a team of educators, coaches, and programme officers to deliver high-impact youth programming',
  'Represented the Academy in national policy forums and community development dialogues']

},
{
  period: '2015 — 2018',
  role: 'Teacher & Life Skills Programme Officer',
  organisation: 'LEAD Monrovia Football Academy',
  location: 'Monrovia, Liberia',
  type: 'Education · Programme Management',
  summary:
  'Combined classroom instruction with the design and delivery of structured life skills programming for Academy students. Developed curriculum resources, facilitated youth workshops, and supported student mentorship initiatives.',
  highlights: [
  'Delivered academic instruction and mentorship to student-athletes across multiple year groups',
  'Designed and facilitated life skills workshops addressing communication, leadership, and civic responsibility',
  'Developed programme monitoring tools to track student engagement and learning outcomes',
  'Collaborated with coaches and programme staff to integrate educational objectives into training schedules',
  'Contributed to institutional reporting and donor communications on programme impact']

}];


export default function ExperienceSection() {
  return (
    <>
      {/* Stats Section - 4 column dark */}
      <section
        id="experience"
        style={{ backgroundColor: 'var(--primary)', padding: '60px 0' }}>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats?.map((stat, index) =>
            <div key={index} className="stat-block">
                <div>
                  <span>{stat?.value}</span>
                  <br />
                  {stat?.label}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F1F1F0', borderTop: '1px solid #E5E5E5' }}>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left sticky heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
                  <span
                    className="text-[11px] uppercase tracking-widest font-bold"
                    style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}>
                    
                    Career
                  </span>
                </div>
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 500,
                    color: '#262626',
                    lineHeight: 1.1
                  }}>
                  
                  Professional Experience
                </h2>
                <p
                  className="leading-relaxed mb-8"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8 }}>
                  
                  A career spanning senior government leadership, executive management, and direct educational service — each role building toward a singular mission of national educational advancement.
                </p>
                <div
                  className="p-6 rounded"
                  style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 2px 12px rgba(26,26,62,0.06)' }}>
                  
                  <p
                    className="text-[10px] uppercase tracking-widest mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}>
                    
                    Current Institution
                  </p>
                  <p
                    className="font-bold text-lg leading-snug"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}>
                    
                    Ministry of Education
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}>
                    
                    Republic of Liberia
                  </p>
                  <div
                    className="mt-4 pt-4 flex items-center gap-2"
                    style={{ borderTop: '1px solid #E5E5E5' }}>
                    
                    <div className="w-2 h-2 rounded-full" style={{ background: '#22c55e' }} />
                    <span className="text-xs font-medium" style={{ color: '#22c55e', fontFamily: 'Poppins, sans-serif' }}>Active Position</span>
                  </div>
                </div>

                {/* Image */}
                <div className="mt-8 overflow-hidden rounded hidden lg:block">
                  <AppImage
                    src="/assets/images/sona-leadership-laptop-session.png"
                    alt="Bright institutional education building exterior with students walking, clean modern government architecture"
                    width={400}
                    height={280}
                    className="w-full object-cover"
                    style={{ filter: 'grayscale(30%)' }}
                    unoptimized />
                  
                </div>
              </div>
            </div>

            {/* Right: Experience cards */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {experiences?.map((exp, index) =>
              <article key={index} className="experience-card p-8 rounded">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <span
                      className="text-[10px] uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)', fontWeight: 700 }}>
                      
                        {exp?.period}
                      </span>
                      <h3
                      className="font-bold text-xl leading-tight"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--primary)' }}>
                      
                        {exp?.role}
                      </h3>
                      <p
                      className="font-medium text-base mt-1"
                      style={{ fontFamily: 'Poppins, sans-serif', color: '#3C3C3C' }}>
                      
                        {exp?.organisation}
                      </p>
                      <p
                      className="text-sm mt-0.5"
                      style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280' }}>
                      
                        {exp?.location}
                      </p>
                    </div>
                    <span
                    className="text-[10px] px-3 py-1.5 rounded shrink-0 uppercase tracking-wider"
                    style={{ background: '#F1F1F0', color: '#6B7280', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    
                      {exp?.type}
                    </span>
                  </div>

                  <p
                  className="text-sm leading-relaxed mb-6 pb-6"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#6B7280', borderBottom: '1px solid #E5E5E5' }}>
                  
                    {exp?.summary}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {exp?.highlights?.map((h, i) =>
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', color: '#3C3C3C' }}>
                        <span
                      className="shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--accent)' }} />
                    
                        {h}
                      </li>
                  )}
                  </ul>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>
    </>);

}