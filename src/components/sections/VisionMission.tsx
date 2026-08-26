import React from 'react';
import { siteContent } from '../../data/content';
import { Reveal } from '../ui/Reveal';

export const VisionMission: React.FC = () => {
  const { visionMission } = siteContent;

  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--color-paper-subtle)' }}>
      <div className="dark-panel-wrapper">
        <div className="dark-panel">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2rem, 4vw, 3rem)' }}>
              <div className="eyebrow-badge eyebrow-badge-teal">
                <span className="eyebrow-dot" aria-hidden="true" />
                {visionMission.eyebrow}
              </div>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-white)',
                  lineHeight: '1.2'
                }}
              >
                {visionMission.title}
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}
          >
            {/* Vision Card */}
            <Reveal delay={80}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: 'rgba(216, 243, 93, 0.15)',
                      border: '1px solid rgba(216, 243, 93, 0.25)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: '800',
                      color: 'var(--color-lime)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '1.25rem'
                    }}
                  >
                    🔭 {visionMission.vision.title}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255, 255, 255, 0.88)',
                      lineHeight: '1.75',
                      textAlign: 'justify'
                    }}
                  >
                    {visionMission.vision.text}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-lime)',
                    fontWeight: '700'
                  }}
                >
                  Environmental Procedures & Team Coordination
                </div>
              </div>
            </Reveal>

            {/* Mission Card */}
            <Reveal delay={160}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: 'rgba(216, 243, 93, 0.15)',
                      border: '1px solid rgba(216, 243, 93, 0.25)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: '800',
                      color: 'var(--color-lime)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '1.25rem'
                    }}
                  >
                    🎯 {visionMission.mission.title}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255, 255, 255, 0.88)',
                      lineHeight: '1.75',
                      textAlign: 'justify'
                    }}
                  >
                    {visionMission.mission.text}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-lime)',
                    fontWeight: '700'
                  }}
                >
                  Market Excellence & Good Values
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
