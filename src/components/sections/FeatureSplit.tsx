import React from 'react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

export const FeatureSplit: React.FC = () => {
  const { featureSplit } = siteContent;

  return (
    <section
      id="why-ajasra"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-paper-subtle)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Industrial Facility & Logistics Visual */}
          <Reveal>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-ink)',
                aspectRatio: '4 / 3'
              }}
            >
              <img
                src={featureSplit.image}
                alt={featureSplit.imageAlt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(11, 23, 36, 0.1) 0%, rgba(11, 23, 36, 0.6) 100%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Floating Bottom Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  backgroundColor: 'rgba(11, 23, 36, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(216, 243, 93, 0.15)',
                    color: 'var(--color-lime)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                  }}
                >
                  ⚙️
                </div>
                <div style={{ color: 'var(--color-white)', fontSize: 'var(--text-xs)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-lime)' }}>Harohalli Facility: </span>
                  Overhead crane staging and designated dipping bays.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Editorial Copy & Process Points */}
          <Reveal delay={120}>
            <div>
              {/* Eyebrow */}
              <div className="eyebrow-badge">
                <span className="eyebrow-dot" aria-hidden="true" />
                {featureSplit.eyebrow}
              </div>

              {/* Heading */}
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  lineHeight: '1.15',
                  letterSpacing: '-0.03em',
                  color: 'var(--color-ink)',
                  marginBottom: '1.25rem'
                }}
              >
                {featureSplit.heading}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-muted)',
                  lineHeight: '1.65',
                  marginBottom: '2rem'
                }}
              >
                {featureSplit.description}
              </p>

              {/* Structured Feature List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {featureSplit.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-deep-teal)',
                        color: 'var(--color-lime)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '700',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: '700',
                          color: 'var(--color-ink)',
                          marginBottom: '0.2rem'
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-muted)',
                          lineHeight: '1.5'
                        }}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  }
                >
                  {featureSplit.cta}
                </Button>

                <Button
                  variant="whatsapp"
                  size="md"
                  href={createQuickStartWhatsAppUrl("technical requirements")}
                  isExternal
                >
                  Direct WhatsApp Chat
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
