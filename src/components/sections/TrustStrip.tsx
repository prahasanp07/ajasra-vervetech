import React from 'react';
import { siteContent } from '../../data/content';
import { Reveal } from '../ui/Reveal';

export const TrustStrip: React.FC = () => {
  const { trustStrip } = siteContent;

  return (
    <section
      style={{
        paddingTop: 'clamp(2rem, 3.5vw, 3rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 4rem)',
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      <div className="site-container">
        <Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              backgroundColor: 'var(--color-paper-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)'
            }}
          >
            {trustStrip.map((item, index) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  padding: '0.5rem 0.75rem',
                  borderLeft: index > 0 ? '1px solid var(--color-border-subtle)' : 'none'
                }}
                className="trust-indicator-col"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-copper)'
                    }}
                  />
                  <span
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: '800',
                      color: 'var(--color-ink)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                {item.sublabel && (
                  <span
                    style={{
                      fontSize: 'var(--text-md)',
                      color: 'var(--color-muted)',
                      paddingLeft: '16px'
                    }}
                  >
                    {item.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-indicator-col {
            border-left: none !important;
            border-bottom: 1px solid var(--color-border-subtle);
            padding-bottom: 0.75rem;
          }
          .trust-indicator-col:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
};
