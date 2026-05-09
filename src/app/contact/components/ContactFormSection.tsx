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

type Status = 'idle' | 'loading' | 'success' | 'error';

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
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({
        fullName: '',
        organisation: '',
        email: '',
        phone: '',
        subject: '',
        enquiryType: '',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.');
    }
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
            {status === 'success' ? (
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
                  Thank you for your correspondence. Sona T. Sesay's office will review your message and respond within 2–3 business days.
                  An auto-reply has been sent to your email.
                </p>
                <button
                  onClick={() => setStatus('idle')}
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

                {/* Error banner */}
                {status === 'error' && (
                  <div
                    className="mb-6 rounded px-4 py-3 flex items-start gap-3"
                    style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" className="shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8125rem', color: '#DC2626', margin: 0 }}>
                      {errorMsg || 'Something went wrong. Please try again.'}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <p
                    className="text-xs leading-relaxed max-w-sm"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#9CA3AF' }}
                  >
                    By submitting this form, you consent to your information being used to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-pill-ministerial shrink-0"
                    style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                          style={{ animation: 'spin 0.8s linear infinite' }}>
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending…
                      </>
                    ) : 'Submit Enquiry'}
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