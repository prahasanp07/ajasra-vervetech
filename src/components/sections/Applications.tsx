import React from 'react';
import { siteContent } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const Applications: React.FC = () => {
  const { industriesWeCater } = siteContent;

  return (
    <section id="applications" className="section-spacing">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow={industriesWeCater.eyebrow}
            title={industriesWeCater.heading}
            subtitle={industriesWeCater.subheadline}
            alignment="center"
          />
        </Reveal>

        {/* 7 Industries We Cater Grid matching authentic website structure */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 1.75rem)'
          }}
        >
          {industriesWeCater.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <div
                className="image-card application-card"
                style={{
                  height: '420px',
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

                {/* Gradient Overlay */}
                <div
                  className="image-card-overlay"
                  style={{
                    background: 'linear-gradient(180deg, rgba(11, 23, 36, 0.25) 0%, rgba(11, 23, 36, 0.5) 35%, rgba(11, 23, 36, 0.96) 100%)'
                  }}
                >
                  {/* Top Index Number Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: 'rgba(11, 23, 36, 0.85)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--color-lime)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: '800',
                      letterSpacing: '0.08em'
                    }}
                  >
                    <span>INDUSTRY {item.index}</span>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3
                      style={{
                        fontSize: 'var(--text-xl)',
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
                        color: 'rgba(255, 255, 255, 0.82)',
                        lineHeight: '1.6',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {item.description}
                    </p>

                    <a
                      href="/#contact"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.7rem 1.25rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-white)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        transition: 'all var(--transition-fast)'
                      }}
                      className="app-card-btn"
                    >
                      <span>Inquire for {item.title}</span>
                      <span className="app-card-arrow">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .application-card:hover .app-card-btn {
          background-color: var(--color-lime) !important;
          color: var(--color-ink) !important;
          border-color: var(--color-lime) !important;
        }
        .application-card:hover .app-card-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
};
