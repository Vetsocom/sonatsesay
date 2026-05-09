'use client';

import React, { useState, useEffect } from 'react';

// ─── UPDATE THIS NUMBER with the minister's WhatsApp number ───────────────────
// Format: country code + number, no spaces, no "+" sign
// Example: Liberia (+231) → 2310770000000
const WHATSAPP_NUMBER = '231776232616';

// Optional: Pre-filled message
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Minister Sesay, I would like to reach out to you."
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
// ─────────────────────────────────────────────────────────────────────────────

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    const p = setTimeout(() => setPulse(false), 6000);
    return () => { clearTimeout(t); clearTimeout(p); };
  }, []);

  return (
    <>
      {/* Styles injected inline so no extra CSS file is needed */}
      <style>{`
        .wa-fab-wrapper {
          position: fixed;
          bottom: 2rem;
          right: .85rem;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-direction: row-reverse;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
        }
        .wa-fab-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* The round button */
        .wa-fab-btn {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          flex-shrink: 0;
        }
        .wa-fab-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 12px 36px rgba(37, 211, 102, 0.55);
        }
        .wa-fab-btn:active {
          transform: scale(0.96);
        }

        /* Pulsing ring animation */
        .wa-fab-btn::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.5);
          animation: waPulse 1.8s ease-out infinite;
          opacity: 0;
        }
        .wa-fab-btn.no-pulse::before {
          animation: none;
          opacity: 0;
        }

        @keyframes waPulse {
          0%   { transform: scale(0.9); opacity: 0.8; }
          70%  { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        /* WhatsApp SVG icon */
        .wa-fab-icon {
          width: 30px;
          height: 30px;
          fill: #ffffff;
          transition: transform 0.25s ease;
        }
        .wa-fab-btn:hover .wa-fab-icon {
          transform: scale(1.08);
        }

        /* Tooltip / label */
        .wa-fab-label {
          background: #002147;
          color: #ffffff;
          font-family: var(--font-heading, 'Poppins', sans-serif);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          white-space: nowrap;
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          box-shadow: 0 4px 16px rgba(0, 33, 71, 0.25);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
          opacity: 0;
          transform: translateX(8px);
        }
        .wa-fab-label::after {
          content: '';
          position: absolute;
          right: -2px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 5px 0 5px 6px;
          border-style: solid;
          border-color: transparent transparent transparent #002147;
        }
        .wa-fab-label {
          position: relative;
        }
        .wa-fab-wrapper.hovered .wa-fab-label {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 640px) {
          .wa-fab-wrapper {
            bottom: 1.25rem;
            right: 1.25rem;
          }
          .wa-fab-btn {
            width: 52px;
            height: 52px;
          }
          .wa-fab-label {
            display: none;
          }
        }
      `}</style>

      <div
        className={`wa-fab-wrapper ${visible ? 'visible' : ''} ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Label */}
        <span className="wa-fab-label" aria-hidden="true">
          Chat with the Minister
        </span>

        {/* Button */}
        <a
          id="whatsapp-fab-btn"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`wa-fab-btn ${pulse ? '' : 'no-pulse'}`}
          aria-label="Chat with Minister Sesay on WhatsApp"
          title="Chat with Minister Sesay on WhatsApp"
        >
          {/* Official WhatsApp icon SVG */}
          <svg
            className="wa-fab-icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16.003 2C8.268 2 2 8.268 2 16.003c0 2.485.668 4.913 1.937 7.04L2 30l7.195-1.886A13.946 13.946 0 0016.003 30C23.734 30 30 23.734 30 16.003 30 8.268 23.734 2 16.003 2zm0 25.454a11.394 11.394 0 01-5.82-1.6l-.416-.248-4.27 1.12 1.137-4.155-.272-.43a11.41 11.41 0 01-1.747-6.138c0-6.313 5.135-11.45 11.45-11.45 6.31 0 11.443 5.137 11.443 11.45 0 6.311-5.133 11.45-11.505 11.45zm6.285-8.57c-.345-.172-2.034-1.004-2.35-1.118-.316-.115-.547-.172-.777.172-.23.345-.892 1.118-1.093 1.348-.2.23-.4.258-.746.086-.345-.172-1.455-.536-2.772-1.71-1.024-.913-1.716-2.04-1.916-2.385-.2-.345-.02-.53.15-.702.154-.153.345-.4.518-.602.172-.2.23-.345.345-.575.115-.23.057-.43-.028-.602-.086-.172-.777-1.873-1.065-2.562-.28-.672-.564-.58-.777-.591l-.662-.012c-.23 0-.603.086-.918.43-.316.346-1.207 1.177-1.207 2.872 0 1.695 1.235 3.332 1.407 3.562.172.23 2.43 3.71 5.888 5.204.824.355 1.467.567 1.968.728.826.264 1.578.226 2.172.137.663-.1 2.034-.83 2.32-1.633.287-.803.287-1.49.2-1.633-.086-.143-.316-.23-.66-.4z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
