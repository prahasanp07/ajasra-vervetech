import React, { useState, useEffect } from 'react';
import { siteContent, SectorCategoryId, SectorComponentItem } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

interface SectorComponentsSectionProps {
  variant?: 'light' | 'paper' | 'dark';
  className?: string;
  id?: string;
}

export const SectorComponentsSection: React.FC<SectorComponentsSectionProps> = ({
  variant = 'paper',
  className = '',
  id = 'sector-components'
}) => {
  const { sectorShowcase } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState<SectorCategoryId>('all');
  const [activeModalItem, setActiveModalItem] = useState<SectorComponentItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalItem]);

  const filteredComponents = selectedCategory === 'all'
    ? sectorShowcase.components
    : sectorShowcase.components.filter(c => c.category === selectedCategory);

  const currentSectorInfo = sectorShowcase.sectors.find(s => s.id === selectedCategory);

  return (
    <section
      id={id}
      className={`sector-components-section ${className}`}
      style={{
        paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        backgroundColor: variant === 'paper' ? 'var(--color-paper)' : 'var(--color-white)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="site-container">
        {/* Centered Section Header */}
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto clamp(2rem, 4vw, 3.5rem)' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              {sectorShowcase.eyebrow}
            </div>
            <h2 className="section-headline" style={{ marginTop: '0.5rem' }}>
              {sectorShowcase.title}
            </h2>
            <p className="section-subtext" style={{ margin: '0.875rem auto 0' }}>
              {sectorShowcase.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Sector Filter Tabs */}
        <Reveal delay={80}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}
            role="tablist"
            aria-label="Component Sectors"
          >
            {sectorShowcase.sectors.map((sector) => {
              const isActive = selectedCategory === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedCategory(sector.id)}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: isActive ? '800' : '600',
                    letterSpacing: '0.03em',
                    backgroundColor: isActive ? 'var(--color-ink)' : 'var(--color-white)',
                    color: isActive ? 'var(--color-lime)' : 'var(--color-ink-light)',
                    border: `1.5px solid ${isActive ? 'var(--color-ink)' : 'var(--color-border)'}`,
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="sector-filter-tab"
                >
                  <span aria-hidden="true">{sector.icon}</span>
                  <span>{sector.label}</span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      padding: '2px 6px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: isActive ? 'rgba(164, 214, 94, 0.2)' : 'var(--color-paper)',
                      color: isActive ? 'var(--color-lime)' : 'var(--color-muted)'
                    }}
                  >
                    {sector.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Selected Sector Context Banner */}
        {currentSectorInfo && selectedCategory !== 'all' && (
          <Reveal delay={100}>
            <div
              style={{
                backgroundColor: 'var(--color-deep-teal)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.75rem',
                marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '18px' }}>{currentSectorInfo.icon}</span>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-lime)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {currentSectorInfo.label} ({currentSectorInfo.slideRef})
                  </span>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', margin: 0 }}>
                  {currentSectorInfo.description}
                </p>
              </div>

              <Button
                variant="lime"
                size="sm"
                href={createQuickStartWhatsAppUrl(`${currentSectorInfo.label} components galvanizing inquiry`)}
                isExternal
              >
                Inquire for {currentSectorInfo.label}
              </Button>
            </div>
          </Reveal>
        )}

        {/* Component Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 1.75rem)'
          }}
        >
          {filteredComponents.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 60, 300)}>
              <div
                className="component-card-box"
                onClick={() => setActiveModalItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalItem(item);
                  }
                }}
                aria-label={`View details for ${item.title}`}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-card)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {/* Real Scanned Component Photo Box */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    backgroundColor: '#0F1E2E',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="component-card-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '12px',
                      transition: 'transform var(--transition-smooth)'
                    }}
                  />

                  {/* Top-Left Sector Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(7, 18, 31, 0.85)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-full)',
                      padding: '4px 10px',
                      fontSize: '0.6875rem',
                      fontWeight: '800',
                      color: 'var(--color-lime)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-lime)' }} />
                    {item.tag}
                  </div>

                  {/* Top-Right Slide Reference Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(7, 18, 31, 0.85)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '3px 8px',
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 0.85)'
                    }}
                  >
                    Slide {item.slideNumber}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: 'clamp(1.25rem, 2vw, 1.5rem)', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.6875rem', fontWeight: '800', color: 'var(--color-copper)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                      {item.categoryLabel}
                    </div>

                    <h3
                      style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '800',
                        color: 'var(--color-ink)',
                        margin: '0 0 0.5rem',
                        lineHeight: '1.35'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-muted)',
                        lineHeight: '1.55',
                        margin: '0 0 1rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Spec Highlight Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                      {item.specHighlights.map((spec, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: '600',
                            color: 'var(--color-ink-light)',
                            backgroundColor: 'var(--color-paper-subtle)',
                            border: '1px solid var(--color-border-subtle)',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-xs)'
                          }}
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action View Button */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-paper-subtle)',
                      border: '1px solid var(--color-border)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: '700',
                      color: 'var(--color-ink)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      transition: 'all var(--transition-fast)'
                    }}
                    className="component-view-btn"
                  >
                    <span>Inspect Component</span>
                    <span aria-hidden="true">🔍</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Custom Component Fabrication Advice Card */}
        <Reveal delay={200}>
          <div
            style={{
              marginTop: 'clamp(2.5rem, 5vw, 4rem)',
              backgroundColor: 'var(--color-ink)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-lime)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Custom Fabrication & Batch Processing
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '800', color: 'var(--color-white)', margin: '0.35rem 0 0.5rem' }}>
                Have specialized components or custom steel assemblies?
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', margin: 0 }}>
                Our engineering facility in Harohalli accommodates single batches, high-volume production lines, and complex geometries with dedicated centrifuge spin units for small fasteners and high-temperature bath diffusion for heavy structural fabrications.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <Button
                variant="lime"
                href="/#contact"
              >
                Submit Component Drawings
              </Button>
              <Button
                variant="whatsapp"
                href={createQuickStartWhatsAppUrl("custom component galvanizing inquiry with drawings")}
                isExternal
              >
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal for Full Resolution Component View */}
      {activeModalItem && (
        <div
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-component-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 11, 18, 0.94)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '920px',
              width: '100%',
              backgroundColor: '#07121F',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '90vh'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#050E18'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(164, 214, 94, 0.15)',
                    color: 'var(--color-lime)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  {activeModalItem.categoryLabel}
                </span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.6)' }}>
                  Slide {activeModalItem.slideNumber}
                </span>
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                aria-label="Close component inspection"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '22px',
                  lineHeight: 1,
                  cursor: 'pointer',
                  padding: '4px 8px',
                  opacity: 0.8
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Image Display */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#02060B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto',
                flex: 1
              }}
            >
              <img
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                style={{
                  maxHeight: '52vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)'
                }}
              />
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: '#07121F',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ flex: '1 1 360px' }}>
                <h4
                  id="modal-component-title"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: '800',
                    color: '#FFFFFF',
                    margin: '0 0 4px'
                  }}
                >
                  {activeModalItem.title}
                </h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 8px', lineHeight: '1.5' }}>
                  {activeModalItem.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {activeModalItem.specHighlights.map((spec, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.6875rem',
                        color: 'var(--color-lime)',
                        backgroundColor: 'rgba(164, 214, 94, 0.1)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid rgba(164, 214, 94, 0.25)'
                      }}
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="whatsapp"
                size="sm"
                href={createQuickStartWhatsAppUrl(`inquiry for ${activeModalItem.title} (${activeModalItem.categoryLabel})`)}
                isExternal
              >
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .component-card-box:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-ink-light);
        }
        .component-card-box:hover .component-card-img {
          transform: scale(1.05);
        }
        .component-card-box:hover .component-view-btn {
          background-color: var(--color-ink) !important;
          color: var(--color-lime) !important;
          border-color: var(--color-ink) !important;
        }
      `}</style>
    </section>
  );
};
