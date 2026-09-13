import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { GalvanizingProcessDiagram } from '../diagrams/GalvanizingProcessDiagram';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

export const ProcessFlowSection: React.FC = () => {
  return (
    <section
      id="process-flow"
      className="section-spacing"
      style={{
        backgroundColor: 'var(--color-paper)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto clamp(2rem, 4vw, 3rem)' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              12-STAGE PLANT FLOW ARCHITECTURE
            </div>
            <h2 className="section-headline">
              Precision Galvanizing Process Line
            </h2>
            <p className="section-subtext" style={{ margin: '0.875rem auto 0' }}>
              From hot caustic degreasing to dual acid pickling, molten zinc diffusion at 480°C, and high-speed centrifuge excess removal—every stage is engineered to Indian Standard IS-2629.
            </p>
          </div>
        </Reveal>

        {/* The 12-Stage Isometric Diagram */}
        <Reveal delay={100}>
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <GalvanizingProcessDiagram
              variant="card"
              showDetailsCard={true}
              interactive={true}
              title="Hot Dip Galvanizing Process Flow"
              subtitle="Physical 12-bath continuous line sequence at Harohalli industrial facility"
            />
          </div>
        </Reveal>

        {/* Bottom Context Callouts & Deep-Dive Link */}
        <Reveal delay={150}>
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-copper)' }}>
                Rigorous Multi-Tank Engineering
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '850', color: 'var(--color-ink)', marginTop: '4px' }}>
                Why 12 distinct stages matter for your steel
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.6', marginTop: '6px' }}>
                Dual pickling ensures stubborn mill scale is dissolved without over-etching; twin cascading rinses prevent acid carryover into the flux; and high-speed centrifugal spinning yields uniform, lump-free coatings on threaded fasteners and hardware.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
              <Button
                variant="primary"
                size="md"
                href="/services#process"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                }
              >
                View Full Stage Specifications & Chemistry
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={createQuickStartWhatsAppUrl("process flow inquiry")}
                isExternal
              >
                Consult on Batch Venting & Pickling
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
