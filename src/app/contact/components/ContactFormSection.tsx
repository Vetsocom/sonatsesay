'use client';

import React, { useState } from 'react';

type FormData = {
  fullName: string;
  organisation: string;
  email: string;
  phone: string;
  subject: string;
  enquiryType: string;
  message: string;
};

const enquiryTypes = [
  'Institutional Partnership',
  'Policy Collaboration',
  'Media & Press Enquiry',
  'Academic or Research Collaboration',
  'Development Partner Engagement',
  'General Enquiry',
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    subject: '',
    enquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '4px',
    border: '1px solid #E5E5E5',
    background: '#FFFFFF',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.875rem',
    color: '#3C3C3C',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.6875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#3C3C3C',
    marginBottom: '0.5rem',
  };

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#F1F1F0', borderTop: '1px solid #E5E5E5' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="ministerial-divider" style={{ width: '40px', marginBottom: 0 }} />
              <span
                className="text-[11px] uppercase tracking-widest font-bold"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent)' }}
              >
                Send a Message
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 500,
                color: '#262626',
                lineHeight: 1.2,
              }}
            >
              Official Correspondence
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.8 }}
            >
              Please complete the form below with accurate institutional details. All correspondence will be reviewed and responded to within 2–3 business days.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { text: 'All enquiry types welcome' },
                { text: 'Correspondence is confidential' },
                { text: '2–3 business day response time' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,77,64,0.1)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#3C3C3C' }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div
                className="rounded p-12 text-center"
                style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 2px 12px rgba(26,26,62,0.06)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(0,77,64,0.1)', border: '2px solid var(--secondary)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}
                >
                  Message Received
                </h3>
                <p
                  className="max-w-md mx-auto leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', color: '#6B7280' }}
                >
                  Thank you for your correspondence. Sona T. Sesay’s office will review your message and respond within 2–3 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 btn-pill-dark"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded p-8 lg:p-10"
                style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 2px 12px rgba(26,26,62,0.06)' }}
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label style={labelStyle} htmlFor="fullName">
                      Full Name <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="organisation">
                      Organisation / Institution
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="Your organisation"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">
                      Email Address <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+231 00 000 0000"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label style={labelStyle} htmlFor="enquiryType">
                    Nature of Enquiry <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="" disabled>Select enquiry type</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label style={labelStyle} htmlFor="subject">
                    Subject <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief subject of your message"
                    style={inputStyle}
                  />
                </div>

                <div className="mb-8">
                  <label style={labelStyle} htmlFor="message">
                    Message <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details of your enquiry or collaboration proposal..."
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <p
                    className="text-xs leading-relaxed max-w-sm"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF' }}
                  >
                    By submitting this form, you consent to your information being used to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    className="btn-pill-ministerial shrink-0"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}