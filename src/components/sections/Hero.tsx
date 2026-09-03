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

            {/* Top-Left Metric Badge (Pill style matching Capabilities) */}
            <div
              className="hero-top-badge"
              style={{
                position: 'absolute',
                top: 'clamp(0.75rem, 2.5vw, 1.5rem)',
                left: 'clamp(0.75rem, 2.5vw, 1.5rem)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(11, 23, 36, 0.85)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: 'clamp(4px, 1vw, 6px) clamp(10px, 1.5vw, 14px)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: '700',
                color: 'var(--color-lime)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                zIndex: 2
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-lime)',
                  boxShadow: '0 0 8px var(--color-lime)',
                  flexShrink: 0
                }}
              />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Hot Dip Bath Active</span>
                <span className="hero-zinc-temp" style={{ color: 'var(--color-white)', fontWeight: 500, textTransform: 'none', letterSpacing: '0' }}>
                  • 460°C Molten Zinc
                </span>
              </span>
            </div>

            {/* Bottom Location & Standard Info Strip */}
            <div
              className="hero-bottom-bar"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                padding: 'clamp(0.6rem, 2vw, 1rem) clamp(0.85rem, 2.5vw, 1.5rem)',
                background: 'linear-gradient(180deg, transparent 0%, rgba(11, 23, 36, 0.75) 30%, rgba(11, 23, 36, 0.94) 100%)',
                color: 'var(--color-white)',
                zIndex: 2
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-lime)', fontSize: '0.95rem' }}>📍</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'rgba(255, 255, 255, 0.95)' }}>
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
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(216, 243, 93, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                IS 2629 Standard Quality
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-top-badge {
            font-size: 0.68rem !important;
            padding: 4px 9px !important;
          }
          .hero-bottom-bar {
            padding: 0.5rem 0.75rem !important;
            gap: 0.25rem !important;
          }
          .hero-bottom-bar span {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
