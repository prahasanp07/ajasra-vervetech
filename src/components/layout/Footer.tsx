import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-ink)',
        color: 'var(--color-white)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 'clamp(3.5rem, 5vw, 5rem)',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="site-container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-deep-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-lime)'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M12 36L24 12L36 36H29.5L24 24.5L18.5 36H12Z" fill="#D8F35D" />
                  <circle cx="24" cy="18" r="3" fill="#FFFFFF" />
                </svg>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--color-white)' }}>
                AJASRA VERVETECH
              </span>
            </div>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}
            >
              Precision hot dip galvanizing for iron, steel and ferrous alloys. Operating temperatures up to 650°C providing double cathodic and barrier protection with ~3600 psi coating strength.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(216, 243, 93, 0.1)',
                border: '1px solid rgba(216, 243, 93, 0.2)',
                color: 'var(--color-lime)',
                fontSize: 'var(--text-xs)',
                fontWeight: '600'
              }}
            >
              <span>{siteConfig.standards}</span>
              <span>•</span>
              <span>Est. {siteConfig.establishedYear}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-lime)',
                marginBottom: '1.25rem'
              }}
            >
              Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {siteConfig.navLinks.map((link) => {
                const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');

                return (
                  <li key={link.label}>
                    {isInternalRoute ? (
                      <Link
                        to={link.href}
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'rgba(255, 255, 255, 0.75)',
                          transition: 'color var(--transition-fast)'
                        }}
                        className="footer-link-hover"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'rgba(255, 255, 255, 0.75)',
                          transition: 'color var(--transition-fast)'
                        }}
                        className="footer-link-hover"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Services & Capabilities */}
          <div>
            <h4
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-lime)',
                marginBottom: '1.25rem'
              }}
            >
              Galvanizing Steps
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li>
                <Link to="/services#process" className="footer-link-hover" style={{ color: 'inherit' }}>
                  1. Surface Preparation (NaOH & Pickling)
                </Link>
              </li>
              <li>
                <Link to="/services#process" className="footer-link-hover" style={{ color: 'inherit' }}>
                  2. Hot Dip Zinc Bath & Centrifuge
                </Link>
              </li>
              <li>
                <Link to="/services#process" className="footer-link-hover" style={{ color: 'inherit' }}>
                  3. 4-Point Quality Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-hover" style={{ color: 'inherit' }}>
                  Wet Scrubber & Environmental Controls
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Plant Location & Direct Contact */}
          <div>
            <h4
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-lime)',
                marginBottom: '1.25rem'
              }}
            >
              Facility & Support
            </h4>
            <address
              style={{
                fontStyle: 'normal',
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: '1.6',
                marginBottom: '1.25rem'
              }}
            >
              {siteConfig.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  color: 'var(--color-white)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>✉️</span>
                <span>{siteConfig.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneTel}`}
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  color: 'var(--color-white)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>📞</span>
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={createQuickStartWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  color: 'var(--color-whatsapp)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: 'var(--text-xs)',
            color: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved. {siteConfig.businessType}.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Harohalli Industrial Area, Karnataka</span>
            <span>IS 2629 Aligned</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link-hover:hover {
          color: var(--color-lime) !important;
        }
      `}</style>
    </footer>
  );
};
