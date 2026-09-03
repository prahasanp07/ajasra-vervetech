import React from 'react';
import { siteContent } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export const ServicePanel: React.FC = () => {
  const { servicePanel } = siteContent;

  const icons = [
    // 01: Double Corrosion Defense (Shield)
    <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    // 02: Higher Bond Strength (Gauge / Strength)
    <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <path d="M2 12h4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="m14 10-4 4" />
    </svg>,
    // 03: Controlled Zinc Bath (Thermometer / Heat)
    <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>,
    // 04: Centrifuge Excess Removal & Quench (Rotation / Spin)
    <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>,
    // 05: Inspection & Packing (Clipboard Check / Box)
    <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>,
    // 06: In-House Lab Facility (Flask / Test Standards)
    <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2v7.31M14 2v7.31" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3 19 19a2 2 0 0 1-1.74 3H6.74A2 2 0 0 1 5 19l5-9.7" />
      <path d="M7 16h10" />
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

                    {/* Bullet Points for standards if present */}
                    {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                      <ul
                        style={{
                          marginTop: '0.75rem',
                          paddingLeft: '0',
                          listStyle: 'none',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '0.5rem'
                        }}
                      >
                        {feature.bulletPoints.map((bullet, bIdx) => {
                          const isFullWidth = bullet.toLowerCase().includes('customer requirement') || (feature.bulletPoints && feature.bulletPoints.length % 2 === 1 && bIdx === feature.bulletPoints.length - 1);
                          return (
                            <li
                              key={bIdx}
                              style={{
                                gridColumn: isFullWidth ? '1 / -1' : 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: 'var(--text-xs)',
                                fontWeight: '700',
                                color: 'var(--color-white)',
                                backgroundColor: isFullWidth ? 'rgba(216, 243, 93, 0.12)' : 'rgba(216, 243, 93, 0.08)',
                                border: '1px solid rgba(216, 243, 93, 0.2)',
                                padding: '5px 10px',
                                borderRadius: 'var(--radius-sm)',
                                letterSpacing: '0.04em'
                              }}
                            >
                              <span
                                style={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  backgroundColor: 'var(--color-lime)',
                                  boxShadow: '0 0 6px var(--color-lime)',
                                  flexShrink: 0
                                }}
                              />
                              <span>{bullet}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
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
