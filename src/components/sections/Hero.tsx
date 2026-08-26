import React from 'react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export const Hero: React.FC = () => {
  const { hero } = siteContent;

  return (
    <section
      className="section-spacing-top"
      style={{
        paddingBottom: 'clamp(2rem, 4vw, 4rem)',
        backgroundColor: 'var(--color-white)'
      }}
    >
      <div className="site-container">
        {/* Centered Editorial Header */}
        <Reveal>
          <div
            style={{
              textAlign: 'center',
              maxWidth: '860px',
              margin: '0 auto',
              marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)'
            }}
          >
            {/* Eyebrow */}
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              {hero.eyebrow}
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: '800',
                lineHeight: '1.08',
                letterSpacing: '-0.035em',
                color: 'var(--color-ink)',
                marginBottom: '1.25rem'
              }}
            >
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-muted)',
                lineHeight: '1.6',
                maxWidth: '680px',
                margin: '0 auto 2rem'
              }}
            >
              {hero.subheadline}
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
                variant="primary"
                size="lg"
                href="#contact"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                }
              >
                {hero.primaryCta}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/services#process"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Hero Visual Container */}
        <Reveal delay={150}>
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-ink)',
              aspectRatio: '16 / 9',
              maxHeight: '620px',
              width: '100%'
            }}
          >
            <img
              src={hero.heroImage}
              alt={hero.heroAlt}
              // @ts-expect-error fetchpriority is standard HTML5 attribute
              fetchpriority="high"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            {/* Subtle Gradient Overlays for industrial depth */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(11, 23, 36, 0.2) 0%, rgba(11, 23, 36, 0.1) 40%, rgba(11, 23, 36, 0.75) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Top-Left Metric Badge */}
            <div
              style={{
                position: 'absolute',
                top: 'clamp(1rem, 3vw, 1.75rem)',
                left: 'clamp(1rem, 3vw, 1.75rem)',
                backgroundColor: 'rgba(11, 23, 36, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 1.15rem',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-lime)',
                  boxShadow: '0 0 10px var(--color-lime)'
                }}
              />
              <div>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-lime)' }}>
                  Hot Dip Bath Active
                </div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: '700', color: 'var(--color-white)' }}>
                  450°C Pure Molten Zinc
                </div>
              </div>
            </div>

            {/* Bottom Location & Standard Info Strip */}
            <div
              style={{
                position: 'absolute',
                bottom: 'clamp(1rem, 3vw, 1.75rem)',
                right: 'clamp(1rem, 3vw, 1.75rem)',
                left: 'clamp(1rem, 3vw, 1.75rem)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                backgroundColor: 'rgba(11, 23, 36, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.25rem',
                color: 'var(--color-white)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-lime)' }}>📍</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>
                  {hero.locationBadge}
                </span>
              </div>
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-lime)',
                  backgroundColor: 'rgba(216, 243, 93, 0.12)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(216, 243, 93, 0.25)'
                }}
              >
                IS 2629 Standard Quality
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
