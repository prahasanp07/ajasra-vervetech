import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { siteContent } from '../data/content';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { createQuickStartWhatsAppUrl } from '../lib/whatsapp';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { aboutPage } = siteContent;

  return (
    <div className="about-page" style={{ paddingTop: 'clamp(2rem, 4vw, 3.5rem)', paddingBottom: 'clamp(4rem, 6vw, 6rem)' }}>
      {/* Editorial Header Section */}
      <section className="site-container" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
        <Reveal>
          <div style={{ maxWidth: '860px' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              {aboutPage.eyebrow}
            </div>
            <h1
              style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: '800',
                lineHeight: '1.12',
                letterSpacing: '-0.03em',
                color: 'var(--color-ink)',
                marginBottom: '1.25rem'
              }}
            >
              {aboutPage.title}
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-muted)',
                lineHeight: '1.65',
                marginBottom: '2rem'
              }}
            >
              {aboutPage.overview}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                variant="primary"
                href="/services"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                }
              >
                Explore Galvanizing Services
              </Button>

              <Button
                variant="whatsapp"
                href={createQuickStartWhatsAppUrl("our leadership team")}
                isExternal
              >
                Connect on WhatsApp (+91 82966 63245)
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Leadership Section: YOU'RE IN GOOD HANDS */}
      <section className="site-container" style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
        <Reveal>
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              LEADERSHIP & PROMOTERS
            </div>
            <h2 className="section-headline">
              {aboutPage.promotersSectionTitle}
            </h2>
            <p className="section-subtext" style={{ marginTop: '0.5rem' }}>
              {aboutPage.promotersSectionSubtitle}
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(1.5rem, 3.5vw, 2.5rem)'
          }}
        >
          {aboutPage.promoters.map((promoter, index) => (
            <Reveal key={promoter.name} delay={index * 120}>
              <div
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid var(--color-border-subtle)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: 'var(--text-xl)',
                          fontWeight: '800',
                          color: 'var(--color-ink)',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {promoter.name}
                      </h3>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: 'var(--color-copper)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>
                        {promoter.role}
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: '700',
                        backgroundColor: 'var(--color-paper)',
                        border: '1px solid var(--color-border-subtle)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        color: 'var(--color-deep-teal)'
                      }}
                    >
                      {promoter.experience}
                    </div>
                  </div>

                  {/* Education */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-muted-dark)',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}
                  >
                    <span>🎓</span>
                    <span>{promoter.education}</span>
                  </div>

                  {/* Bio Summary */}
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-muted)',
                      lineHeight: '1.65',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {promoter.summary}
                  </p>

                  {/* Key Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {promoter.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span
                          style={{
                            color: 'var(--color-deep-teal)',
                            fontWeight: '800',
                            fontSize: 'var(--text-sm)',
                            lineHeight: '1.4'
                          }}
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--color-ink-light)',
                            lineHeight: '1.55'
                          }}
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-muted)'
                  }}
                >
                  <span>M/s Ajasra Vervetech</span>
                  <span style={{ fontWeight: '700', color: 'var(--color-deep-teal)' }}>Harohalli Plant</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ferrous Products & Components Scope */}
      <section className="site-container" style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2rem, 4vw, 3.5rem)' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              GALVANIZING PRODUCT PORTFOLIO
            </div>
            <h2 className="section-headline">
              Ferrous Products & Engineering Components We Process
            </h2>
            <p className="section-subtext" style={{ margin: '0.875rem auto 0' }}>
              From heavy warehouse PEB structures to precision high-tensile fasteners, anchors, and marine hardware.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {aboutPage.galvanizedComponents.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <div
                style={{
                  backgroundColor: 'var(--color-paper-subtle)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-copper)' }} />
                    <h3
                      style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '800',
                        color: 'var(--color-ink)',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-muted)',
                      lineHeight: '1.55'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--color-deep-teal)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  IS 2629 Aligned Coating
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Plant Location & Facility Details */}
      <section className="site-container" style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
        <div className="dark-panel-wrapper" style={{ padding: 0 }}>
          <div className="dark-panel">
            <Reveal>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div className="eyebrow-badge eyebrow-badge-teal">
                    <span className="eyebrow-dot" aria-hidden="true" />
                    WORKS & PLANT LOCATION
                  </div>
                  <h3
                    style={{
                      fontSize: 'var(--text-3xl)',
                      fontWeight: '800',
                      color: 'var(--color-white)',
                      lineHeight: '1.2',
                      marginBottom: '1.25rem'
                    }}
                  >
                    Harohalli Industrial Area, Phase 2
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: '1.7',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {aboutPage.plantLocation}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: '1.7'
                    }}
                  >
                    Strategically situated in the Ramanagara industrial corridor with direct road access to Bengaluru, Mysuru, and Kanakapura highway routes for rapid dispatch and turnaround.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                >
                  <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: '800', color: 'var(--color-lime)', marginBottom: '1rem' }}>
                    Direct Works Inquiries
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-white)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: '700' }}>Call Technical Team</div>
                      <a href={`tel:${siteConfig.phoneTel}`} style={{ fontWeight: '700', color: 'var(--color-white)' }}>
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: '700' }}>Official Support</div>
                      <a href={`mailto:${siteConfig.email}`} style={{ fontWeight: '700', color: 'var(--color-lime)' }}>
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <Button
                    variant="lime"
                    href="/#contact"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Request Project Quote
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Return to Home link */}
      <section className="site-container" style={{ textAlign: 'center' }}>
        <Reveal>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: 'var(--text-sm)',
              fontWeight: '700',
              color: 'var(--color-copper)',
              textDecoration: 'underline'
            }}
          >
            ← Return to Homepage
          </a>
        </Reveal>
      </section>
    </div>
  );
};
