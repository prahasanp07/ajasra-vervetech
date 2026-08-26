import React from 'react';
import { siteContent } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const Capabilities: React.FC = () => {
  const { capabilities } = siteContent;

  return (
    <section id="capabilities" className="section-spacing">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow={capabilities.eyebrow}
            title={capabilities.heading}
            subtitle={capabilities.subheadline}
            alignment="center"
          />
        </Reveal>

        {/* 4-Card Responsive Grid matching the screenshot's image-card row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(1rem, 2.5vw, 1.75rem)'
          }}
        >
          {capabilities.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div
                className="image-card capability-card"
                style={{
                  height: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="image-card-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="image-card-overlay">
                  {/* Top Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(11, 23, 36, 0.8)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: '700',
                      color: 'var(--color-lime)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-lime)' }} />
                    {item.tag}
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: '800',
                        color: 'var(--color-white)',
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: '1.5',
                        marginBottom: '1rem'
                      }}
                    >
                      {item.description}
                    </p>

                    <a
                      href="#contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '0.625rem 1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: 'var(--radius-full)',
                        color: 'var(--color-white)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        transition: 'all var(--transition-fast)'
                      }}
                      className="card-action-btn"
                    >
                      Inquire for this specification →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .capability-card:hover .card-action-btn {
          background-color: var(--color-lime) !important;
          color: var(--color-ink) !important;
          border-color: var(--color-lime) !important;
        }
      `}</style>
    </section>
  );
};
