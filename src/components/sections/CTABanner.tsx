import React from 'react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

export const CTABanner: React.FC = () => {
  const { ctaBanner } = siteContent;

  return (
    <section className="section-spacing">
      <div className="site-container">
        <Reveal>
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1.5rem, 4vw, 3.5rem)',
              textAlign: 'center',
              backgroundColor: 'var(--color-deep-teal)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            {/* Background Image with Dark Gradient */}
            <img
              src={ctaBanner.backgroundImage}
              alt="Industrial plant background"
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.35
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(13, 58, 61, 0.85) 0%, rgba(7, 37, 40, 0.95) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Content Box */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '720px',
                margin: '0 auto'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(216, 243, 93, 0.12)',
                  border: '1px solid rgba(216, 243, 93, 0.3)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '700',
                  color: 'var(--color-lime)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '1.25rem'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-lime)' }} />
                Harohalli Industrial Facility
              </div>

              <h2
                style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: '800',
                  lineHeight: '1.12',
                  letterSpacing: '-0.03em',
                  color: 'var(--color-white)',
                  marginBottom: '1.25rem'
                }}
              >
                {ctaBanner.heading}
              </h2>

              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  maxWidth: '560px',
                  margin: '0 auto 2.5rem'
                }}
              >
                {ctaBanner.description}
              </p>

              {/* Action CTAs */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem'
                }}
              >
                <Button
                  variant="lime"
                  size="lg"
                  href="#contact"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  }
                >
                  {ctaBanner.primaryCta}
                </Button>

                <Button
                  variant="whatsapp"
                  size="lg"
                  href={createQuickStartWhatsAppUrl()}
                  isExternal
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
                    </svg>
                  }
                >
                  {ctaBanner.whatsappCta}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
