import React from 'react';
import { siteContent } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export const ServicePanel: React.FC = () => {
  const { servicePanel } = siteContent;

  const icons = [
    // 01: Shield / Corrosion
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    // 02: Specification / Sliders / Standards
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>,
    // 03: Practical Coordination / Message / Arrow loop
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
    // 04: Industrial Material / Layers
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="dark-panel-wrapper">
        <div className="dark-panel">
          <Reveal>
            <SectionHeading
              eyebrow={servicePanel.eyebrow}
              title={servicePanel.heading}
              subtitle={servicePanel.description}
              alignment="center"
              isDark={true}
            />
          </Reveal>

          {/* Grid matching the screenshot's dark feature blocks */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1.25rem, 3vw, 2rem)',
              marginTop: '1.5rem'
            }}
          >
            {servicePanel.features.map((feature, index) => (
              <Reveal key={feature.id} delay={index * 80}>
                <div
                  className="service-card-item"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(1.5rem, 3vw, 2rem)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'all var(--transition-base)'
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Arrow */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(216, 243, 93, 0.1)',
                          border: '1px solid rgba(216, 243, 93, 0.25)',
                          color: 'var(--color-lime)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {icons[index % icons.length]}
                      </div>

                      <span
                        style={{
                          fontSize: '1.25rem',
                          color: 'rgba(255, 255, 255, 0.4)',
                          transition: 'transform var(--transition-fast), color var(--transition-fast)'
                        }}
                        className="card-arrow"
                      >
                        ↗
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: '700',
                        color: 'var(--color-white)',
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'rgba(255, 255, 255, 0.72)',
                        lineHeight: '1.6'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-lime)',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span>Pillar {feature.number}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: '400' }}>IS 2629 Process</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Action to Deep-Dive Process Page */}
          <div
            style={{
              marginTop: 'clamp(2rem, 4vw, 3rem)',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem'
            }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-base)', fontWeight: '700', color: 'var(--color-white)' }}>
                Detailed 3-Stage Process & 4-Point Quality Inspection
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>
                Caustic degreasing, acid pickling, fluxing, up to 650°C zinc bath, centrifuge, and quench cooling.
              </div>
            </div>

            <Button
              variant="lime"
              size="md"
              href="/services"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              }
            >
              Explore Full Process Breakdown
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .service-card-item:hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(216, 243, 93, 0.3) !important;
          transform: translateY(-3px);
        }
        .service-card-item:hover .card-arrow {
          color: var(--color-lime) !important;
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
};
