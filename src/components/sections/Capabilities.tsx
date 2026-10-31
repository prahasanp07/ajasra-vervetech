import React, { useState, useEffect } from 'react';
import { siteContent, StatutoryCertificate } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

export const Capabilities: React.FC = () => {
  const { statutoryApprovals } = siteContent;
  const [activeModal, setActiveModal] = useState<StatutoryCertificate | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  return (
    <section
      id="certifications"
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-subtle)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Invisible anchor preserving backwards-compatibility with #capabilities */}
      <div id="capabilities" style={{ position: 'absolute', top: '-90px', left: 0 }} aria-hidden="true" />

      <div className="site-container">
        {/* Centered Section Heading matching original design */}
        <Reveal>
          <SectionHeading
            eyebrow={statutoryApprovals.eyebrow}
            title={statutoryApprovals.title}
            subtitle={statutoryApprovals.subtitle}
            alignment="center"
          />
        </Reveal>

        {/* Responsive Image-Cards Grid matching original Capabilities card UI design */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 1.75rem)'
          }}
        >
          {statutoryApprovals.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <div
                className="image-card capability-card"
                onClick={() => setActiveModal(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModal(item);
                  }
                }}
                aria-label={`View certificate for ${item.title}`}
                style={{
                  height: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  backgroundColor: '#0B1724',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--color-border)'
                }}
              >
                {/* Background Document Image with top alignment */}
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="image-card-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    filter: 'brightness(0.92)',
                    transition: 'transform var(--transition-smooth)'
                  }}
                />

                {/* Dark Gradient Overlay for optimal legibility and industrial aesthetics */}
                <div
                  className="image-card-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                    background: 'linear-gradient(180deg, rgba(11, 23, 36, 0.45) 0%, rgba(11, 23, 36, 0.72) 42%, rgba(11, 23, 36, 0.96) 100%)'
                  }}
                >
                  {/* Top Badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(11, 23, 36, 0.88)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: '800',
                      color: item.badgeColor || 'var(--color-lime)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      alignSelf: 'flex-start',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: item.badgeColor || 'var(--color-lime)'
                      }}
                    />
                    {item.tag}
                  </div>

                  {/* Bottom Content */}
                  <div>
                    {/* Authority Tag */}
                    <div
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: '800',
                        color: item.badgeColor || 'var(--color-lime)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '4px'
                      }}
                    >
                      {item.issuingAuthority}
                    </div>

                    <h3
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: '800',
                        color: 'var(--color-white)',
                        marginBottom: '0.35rem',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.25'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.5',
                        marginBottom: '0.875rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Action Button */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
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
                      <span>View Document</span>
                      <span aria-hidden="true">🔍 →</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Statutory Trust Summary Strip */}
        <Reveal delay={200}>
          <div
            style={{
              marginTop: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: '800',
                  color: 'var(--color-copper)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Government Audited & Enterprise Ready
              </div>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: '800',
                  color: 'var(--color-ink)',
                  marginTop: '4px'
                }}
              >
                Need statutory compliance documentation or vendor pre-qualification paperwork?
              </div>
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-muted)',
                  marginTop: '4px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <span>✓ ISO 9001:2015 TÜV NORD</span>
                <span>✓ MSME ZED Bronze</span>
                <span>✓ GSTIN: 29ABSFA8302N1ZS</span>
                <span>✓ PAN: ABSFA8302N</span>
                <span>✓ Udyam: UDYAM-KR-29-0000665</span>
              </div>
            </div>

            <Button
              variant="whatsapp"
              size="md"
              href={createQuickStartWhatsAppUrl("statutory compliance & vendor registration")}
              isExternal
            >
              Request Compliance Dossier
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal for Full Document Inspection */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-doc-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 11, 18, 0.92)',
            backdropFilter: 'blur(8px)',
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
              maxWidth: '860px',
              width: '100%',
              backgroundColor: '#0B1724',
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
                backgroundColor: '#07121F'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: activeModal.badgeColor || 'var(--color-lime)'
                  }}
                />
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: '800',
                    color: activeModal.badgeColor || 'var(--color-lime)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  {activeModal.tag}
                </span>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close document viewer"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '22px',
                  lineHeight: 1,
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  opacity: 0.8,
                  transition: 'opacity var(--transition-fast)'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Document Image Viewer */}
            <div
              style={{
                padding: '1.25rem',
                backgroundColor: '#03080E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto',
                flex: 1
              }}
            >
              <img
                src={activeModal.image}
                alt={activeModal.alt}
                style={{
                  maxHeight: '58vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>

            {/* Modal Footer with Verification Data */}
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
              <div style={{ flex: '1 1 300px' }}>
                <h4
                  id="modal-doc-title"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: '800',
                    color: '#FFFFFF',
                    margin: 0
                  }}
                >
                  {activeModal.title}
                </h4>
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'rgba(255, 255, 255, 0.75)',
                    marginTop: '4px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--color-lime)' }}>{activeModal.regNumber}</span>
                  <span>•</span>
                  <span>{activeModal.validity}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a
                  href={activeModal.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: 'var(--text-xs)',
                    fontWeight: '700',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <span>Open Full Size ↗</span>
                </a>

                <Button
                  variant="whatsapp"
                  size="sm"
                  href={createQuickStartWhatsAppUrl(`verification of ${activeModal.title}`)}
                  isExternal
                >
                  Verify on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card Hover Effects */}
      <style>{`
        .capability-card:hover img {
          transform: scale(1.03);
        }
        .capability-card:hover .card-action-btn {
          background-color: var(--color-lime) !important;
          color: var(--color-ink) !important;
          border-color: var(--color-lime) !important;
        }
      `}</style>
    </section>
  );
};

// Export alias for semantic naming
export const StatutoryApprovals = Capabilities;
