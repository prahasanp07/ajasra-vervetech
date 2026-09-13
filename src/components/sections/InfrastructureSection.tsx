import React, { useState } from 'react';
import { siteContent } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

interface InfrastructureSectionProps {
  variant?: 'light' | 'dark' | 'paper';
  className?: string;
  id?: string;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({
  variant = 'paper',
  className = '',
  id = 'infrastructure'
}) => {
  const { infrastructure } = siteContent;
  const [activeImageModal, setActiveImageModal] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const isDark = variant === 'dark';

  return (
    <section
      id={id}
      className={`infrastructure-section ${className}`}
      style={{
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        backgroundColor: isDark ? 'var(--color-ink-dark)' : 'var(--color-paper)',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-border)'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-border)'}`
      }}
    >
      <div className="site-container">
        {/* Section Header - Centered Layout */}
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2rem, 4vw, 3.5rem)' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              {infrastructure.eyebrow}
            </div>
            <h2
              className="section-headline"
              style={{
                color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
                marginTop: '0.5rem'
              }}
            >
              {infrastructure.title}
            </h2>
            <p
              className="section-subtext"
              style={{
                margin: '0.875rem auto 0',
                color: isDark ? 'rgba(255, 255, 255, 0.75)' : 'var(--color-muted)'
              }}
            >
              {infrastructure.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Main Grid: Left Points & Substation Photo | Right Industrial Facility Photos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Numbered Infrastructure Items & HT Substation Photo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {/* List of 5 Points matching the slide */}
            <div
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'var(--color-white)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-border)'}`,
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                boxShadow: isDark ? 'var(--shadow-md)' : 'var(--shadow-card)'
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: '800',
                  color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <img
                  src="/images/ajasra-logo.png"
                  alt="Ajasra Logo"
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'contain',
                    borderRadius: '50%',
                    flexShrink: 0,
                    boxShadow: '0 2px 6px rgba(11, 23, 36, 0.18)'
                  }}
                />
                <span>Plant Equipment & Power Capacities</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* 1. 100 KVA of electrical HT power */}
                <Reveal delay={60}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-deep-teal)',
                        color: 'var(--color-lime)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      1
                    </span>
                    <div>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: isDark ? 'var(--color-white)' : 'var(--color-ink)', lineHeight: '1.3' }}>
                        100 KVA of electrical HT power.
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-muted)', lineHeight: '1.55', marginTop: '4px', margin: 0 }}>
                        Dedicated high-tension substation yard powering continuous electrical furnace heating without thermal fluctuations.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* 2. 5000 sft industrial shed with 1000 sft mezzanine floor */}
                <Reveal delay={90}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-deep-teal)',
                        color: 'var(--color-lime)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      2
                    </span>
                    <div>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: isDark ? 'var(--color-white)' : 'var(--color-ink)', lineHeight: '1.3' }}>
                        5000 sft industrial shed with 1000 sft mezzanine floor.
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-muted)', lineHeight: '1.55', marginTop: '4px', margin: 0 }}>
                        6,000 sq.ft. total covered industrial facility featuring dedicated processing bays, supervisor mezzanine, and in-house testing lab.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* 3. 2400 MT/annum hot dip galvanizing equipment with suitable utility equipment */}
                <Reveal delay={120}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-deep-teal)',
                        color: 'var(--color-lime)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      3
                    </span>
                    <div>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: isDark ? 'var(--color-white)' : 'var(--color-ink)', lineHeight: '1.3' }}>
                        2400 MT/annum hot dip galvanizing equipment with suitable utility equipment:
                      </div>
                      <ul
                        style={{
                          margin: '8px 0 0',
                          paddingLeft: '0',
                          listStyle: 'none',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px'
                        }}
                      >
                        {[
                          'Wet scrubber',
                          'Air compressor',
                          'Material handling equipment',
                          'Weighing scale',
                          'Fully equipped laboratory'
                        ].map((util, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: '0.6875rem',
                              fontWeight: '700',
                              color: isDark ? '#EAEFED' : 'var(--color-ink)',
                              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'var(--color-paper-subtle)',
                              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'var(--color-border)'}`,
                              padding: '3px 9px',
                              borderRadius: 'var(--radius-xs)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <span style={{ color: 'var(--color-lime)', fontWeight: '800' }}>•</span>
                            <span>{util}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>

                {/* 4. Size of Zinc Bath – 1000 X 550 X 750 mm (Prominent Red Callout) */}
                <Reveal delay={150}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      backgroundColor: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.06)',
                      border: '1.5px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 14px'
                    }}
                  >
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#dc2626',
                        color: '#FFFFFF',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        boxShadow: '0 2px 6px rgba(220, 38, 38, 0.4)'
                      }}
                    >
                      4
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: isDark ? 'var(--color-white)' : 'var(--color-ink)', lineHeight: '1.3' }}>
                        Size of Zinc Bath –{' '}
                        <span
                          style={{
                            color: '#dc2626',
                            fontWeight: '900',
                            letterSpacing: '0.02em',
                            display: 'inline-block',
                            backgroundColor: 'rgba(220, 38, 38, 0.12)',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-xs)'
                          }}
                        >
                          1000 X 550 X 750 mm
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: 'var(--text-xs)', fontWeight: '700', color: isDark ? 'rgba(255,255,255,0.8)' : 'var(--color-ink-light)' }}>
                        <span>L: 1,000 mm</span>
                        <span>•</span>
                        <span>W: 550 mm</span>
                        <span>•</span>
                        <span>D: 750 mm</span>
                        <span>•</span>
                        <span style={{ color: 'var(--color-copper)' }}>Up to 480°C</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 5. Dedicated storage for chemicals, Zinc, customer parts */}
                <Reveal delay={180}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-deep-teal)',
                        color: 'var(--color-lime)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      5
                    </span>
                    <div>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: isDark ? 'var(--color-white)' : 'var(--color-ink)', lineHeight: '1.3' }}>
                        Dedicated storage for chemicals, Zinc, customer parts.
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-muted)', lineHeight: '1.55', marginTop: '4px', margin: 0 }}>
                        Segregated storage staging areas eliminating material mix-ups and preventing damage to finished coated assemblies.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Bottom-Left Photo matching the slide: 100 KVA HT Power Yard */}
            <Reveal delay={200}>
              <div
                className="infrastructure-card-zoom"
                onClick={() => setActiveImageModal({
                  src: infrastructure.images[2].src,
                  title: infrastructure.images[2].title,
                  subtitle: infrastructure.images[2].subtitle
                })}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'var(--color-border)'}`,
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--color-ink)',
                  cursor: 'pointer',
                  aspectRatio: '16 / 10'
                }}
              >
                <img
                  src={infrastructure.images[2].src}
                  alt={infrastructure.images[2].alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform var(--transition-smooth)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(11, 23, 36, 0.1) 0%, rgba(11, 23, 36, 0.75) 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating Bottom Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(7, 24, 43, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px'
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--color-lime)', fontSize: 'var(--text-xs)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      ⚡ {infrastructure.images[2].badge}
                    </div>
                    <div style={{ color: 'var(--color-white)', fontSize: '0.6875rem', opacity: 0.85, marginTop: '1px' }}>
                      {infrastructure.images[2].title}
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>🔍 Click to view</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Top Photo (Shed & Mezzanine) & Bottom Photo (Tank Line & Crane) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {/* Top Photo: 5000 sft Shed & 1000 sft Mezzanine Floor */}
            <Reveal delay={120}>
              <div
                className="infrastructure-card-zoom"
                onClick={() => setActiveImageModal({
                  src: infrastructure.images[0].src,
                  title: infrastructure.images[0].title,
                  subtitle: infrastructure.images[0].subtitle
                })}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'var(--color-border)'}`,
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--color-ink)',
                  cursor: 'pointer',
                  aspectRatio: '16 / 9'
                }}
              >
                <img
                  src={infrastructure.images[0].src}
                  alt={infrastructure.images[0].alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform var(--transition-smooth)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(11, 23, 36, 0.1) 0%, rgba(11, 23, 36, 0.75) 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating Bottom Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(7, 24, 43, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px'
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--color-lime)', fontSize: 'var(--text-xs)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      🏗️ {infrastructure.images[0].badge}
                    </div>
                    <div style={{ color: 'var(--color-white)', fontSize: '0.6875rem', opacity: 0.85, marginTop: '1px' }}>
                      {infrastructure.images[0].title}
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>🔍 Click to view</span>
                </div>
              </div>
            </Reveal>

            {/* Bottom Photo: 2400 MT/annum Galvanizing Tank Line with Crane & Scrubber */}
            <Reveal delay={180}>
              <div
                className="infrastructure-card-zoom"
                onClick={() => setActiveImageModal({
                  src: infrastructure.images[1].src,
                  title: infrastructure.images[1].title,
                  subtitle: infrastructure.images[1].subtitle
                })}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'var(--color-border)'}`,
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--color-ink)',
                  cursor: 'pointer',
                  aspectRatio: '16 / 9'
                }}
              >
                <img
                  src={infrastructure.images[1].src}
                  alt={infrastructure.images[1].alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform var(--transition-smooth)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(11, 23, 36, 0.1) 0%, rgba(11, 23, 36, 0.75) 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating Bottom Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(7, 24, 43, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px'
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--color-lime)', fontSize: 'var(--text-xs)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      ⚙️ {infrastructure.images[1].badge}
                    </div>
                    <div style={{ color: 'var(--color-white)', fontSize: '0.6875rem', opacity: 0.85, marginTop: '1px' }}>
                      {infrastructure.images[1].title}
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>🔍 Click to view</span>
                </div>
              </div>
            </Reveal>

            {/* Inquire on Dimensions CTA Card */}
            <Reveal delay={220}>
              <div
                style={{
                  backgroundColor: 'var(--color-deep-teal)',
                  color: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-lime)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Component Sizing Advice
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: '700', marginTop: '2px' }}>
                    Verify bath fitment for your parts (Zinc Bath: 1000 X 550 X 750 mm)
                  </div>
                </div>

                <Button
                  variant="lime"
                  size="sm"
                  href={createQuickStartWhatsAppUrl("zinc bath dimensions & capacity")}
                  isExternal
                >
                  Chat with Engineers
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Lightbox Image Preview Modal */}
      {activeImageModal && (
        <div
          onClick={() => setActiveImageModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 11, 18, 0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '960px',
              width: '100%',
              backgroundColor: '#0B1724',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <div style={{ position: 'relative', width: '100%', maxHeight: '70vh', backgroundColor: '#000' }}>
              <img
                src={activeImageModal.src}
                alt={activeImageModal.title}
                style={{ width: '100%', height: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block' }}
              />
              <button
                onClick={() => setActiveImageModal(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  lineHeight: 1
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
                  {activeImageModal.title}
                </h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.7)', margin: '4px 0 0' }}>
                  {activeImageModal.subtitle}
                </p>
              </div>
              <Button variant="whatsapp" size="sm" href={createQuickStartWhatsAppUrl("infrastructure query")} isExternal>
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .infrastructure-card-zoom:hover img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
