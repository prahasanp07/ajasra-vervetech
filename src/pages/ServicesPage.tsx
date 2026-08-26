import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { siteContent } from '../data/content';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { createQuickStartWhatsAppUrl } from '../lib/whatsapp';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { detailedProcess } = siteContent;

  return (
    <div className="services-page" style={{ paddingTop: 'clamp(2rem, 4vw, 3.5rem)', paddingBottom: 'clamp(4rem, 6vw, 6rem)' }}>
      {/* Top Banner / Breadcrumb & Title */}
      <section className="site-container" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
        <Reveal>
          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              HOT DIP GALVANIZING SERVICES
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
              Precision Corrosion Protection & Industrial Finishing
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-muted)',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}
            >
              Comprehensive hot dip galvanization for iron, steel and ferrous alloys. Providing long-term resistance to abrasion, environmental wear, and oxidation through metallurgically bonded molten zinc.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                variant="primary"
                href="/#contact"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                }
              >
                Request a batch quote
              </Button>

              <Button
                variant="whatsapp"
                href={createQuickStartWhatsAppUrl("galvanizing services")}
                isExternal
              >
                Chat on WhatsApp (+91 82966 63245)
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Key Technical Metric Highlights */}
      <section className="site-container" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              backgroundColor: 'var(--color-paper-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-copper)' }}>
                Bond Adhesion
              </div>
              <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '800', color: 'var(--color-ink)' }}>
                ~3600 PSI
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.5' }}>
                High coating strength resisting physical impact, transit damage, and severe abrasion.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-deep-teal)' }}>
                Furnace Temperature
              </div>
              <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '800', color: 'var(--color-ink)' }}>
                Up to 650°C
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.5' }}>
                Electrically heated zinc melting furnace ensuring homogeneous bath chemistry and wetting.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-whatsapp-dark)' }}>
                Protection Mechanism
              </div>
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: '800', color: 'var(--color-ink)' }}>
                Double Defense
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.5' }}>
                Sacrificial cathodic protection plus impervious tough physical zinc-iron alloy barrier.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted-dark)' }}>
                Operating Standard
              </div>
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: '800', color: 'var(--color-ink)' }}>
                IS 2629
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.5' }}>
                Standardized Indian code alignment for pre-treatment, dipping, and quality verification.
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHAT WE DO Section (scraped verbatim & formatted) */}
      <section className="site-container" style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
        <div className="dark-panel-wrapper" style={{ padding: 0 }}>
          <div className="dark-panel">
            <Reveal>
              <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div className="eyebrow-badge eyebrow-badge-teal">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  WHAT WE DO
                </div>
                <h2
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: '800',
                    color: 'var(--color-white)',
                    lineHeight: '1.2',
                    marginBottom: '1.25rem'
                  }}
                >
                  Hot Dip Galvanization for Iron, Steel & Ferrous Alloys
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.75',
                    textAlign: 'justify',
                    marginBottom: '1.5rem'
                  }}
                >
                  We provide the service of hot dip galvanization to iron, steel and ferrous alloys to provide them with resistance to abrasion, environmental impacts, and wear. Hot dip galvanization is a corrosion protection process that involves coating steel by immersing it in a bath of molten Zinc at a high operating temperature of a maximum of 650°C.
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.75',
                    textAlign: 'justify'
                  }}
                >
                  This coating of a layer of tough, metallic Zinc on the steel surface covers and seals it from further oxidation and corrosive actions. Galvanization ensures a high coating strength of around 3600 psi and a double corrosion protection that is inclusive of sacrificial cathodic protection and barrier protection.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW WE DO IT - 3 Fundamental Steps Section */}
      <section id="process" className="site-container" style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2.5rem, 4vw, 3.5rem)' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              HOW WE DO IT
            </div>
            <h2 className="section-headline">
              The 3 Fundamental Steps in Our Galvanizing Process
            </h2>
            <p className="section-subtext" style={{ margin: '0.875rem auto 0' }}>
              Precision chemical preparation, thermal dipping with centrifuge excess removal, and rigorous four-point quality inspection.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
          {detailedProcess.map((step) => (
            <Reveal key={step.step}>
              <div
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                {/* Step Header */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    marginBottom: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span
                      style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: '800',
                        color: 'var(--color-lime)',
                        backgroundColor: 'var(--color-deep-teal)',
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontSize: 'var(--text-xl)',
                          fontWeight: '800',
                          color: 'var(--color-ink)',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontWeight: '600' }}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-copper)',
                      backgroundColor: 'rgba(200, 117, 73, 0.1)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    Step {step.step} of 03
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-ink-light)',
                    lineHeight: '1.65',
                    marginBottom: '1.75rem'
                  }}
                >
                  {step.description}
                </p>

                {/* Substeps Grid */}
                {step.substeps && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.25rem'
                    }}
                  >
                    {step.substeps.map((sub, i) => (
                      <div
                        key={sub.name}
                        style={{
                          backgroundColor: 'var(--color-paper-subtle)',
                          border: '1px solid var(--color-border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <h4
                              style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: '800',
                                color: 'var(--color-ink)'
                              }}
                            >
                              {i + 1}. {sub.name}
                            </h4>
                            {sub.duration && (
                              <span
                                style={{
                                  fontSize: '0.6875rem',
                                  fontWeight: '700',
                                  color: 'var(--color-deep-teal)',
                                  backgroundColor: 'rgba(13, 58, 61, 0.1)',
                                  padding: '2px 8px',
                                  borderRadius: 'var(--radius-sm)'
                                }}
                              >
                                {sub.duration}
                              </span>
                            )}
                          </div>
                          <p
                            style={{
                              fontSize: 'var(--text-xs)',
                              color: 'var(--color-muted)',
                              lineHeight: '1.6'
                            }}
                          >
                            {sub.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Environmental & Facility Infrastructure Details */}
      <section className="site-container" style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
        <Reveal>
          <div
            style={{
              backgroundColor: 'var(--color-paper-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="eyebrow-badge">
                <span className="eyebrow-dot" aria-hidden="true" />
                ENVIRONMENTAL & FACILITY SPECIFICATIONS
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: '800',
                  color: 'var(--color-ink)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                Controlled & Compliant Operations in Harohalli
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-muted)',
                  lineHeight: '1.65',
                  marginBottom: '1.5rem'
                }}
              >
                Our facility is engineered for safety, quality consistency, and environmental responsibility:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: 'var(--text-sm)', color: 'var(--color-ink)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--color-whatsapp-dark)', fontWeight: '700' }}>✓</span>
                  <span><strong>Wet Scrubber Fume Extraction:</strong> Fume extraction hood near the zinc kettle connected to a common wet scrubber with a chimney height 3 meters above roof level.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--color-whatsapp-dark)', fontWeight: '700' }}>✓</span>
                  <span><strong>Electrically Heated Melting Furnace:</strong> Precision energy management for the hot drying plate and molten zinc furnace.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--color-whatsapp-dark)', fontWeight: '700' }}>✓</span>
                  <span><strong>Centrifuge Unit:</strong> High-speed centrifugal spin removing excess zinc for clean profiles, threads, and assemblies.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--color-whatsapp-dark)', fontWeight: '700' }}>✓</span>
                  <span><strong>De-Oxidant Quench Tank:</strong> Immediate thermal stabilization preventing unwanted post-reactions with air.</span>
                </li>
              </ul>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-deep-teal)',
                color: 'var(--color-white)',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: '800', color: 'var(--color-lime)', marginBottom: '0.75rem' }}>
                Need technical advice on your fabrication?
              </h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Our engineering team in Harohalli assists fabricators with venting and drain hole planning before pickling and galvanizing.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button
                  variant="lime"
                  href="/#contact"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Submit Project Details
                </Button>
                <Button
                  variant="whatsapp"
                  href={createQuickStartWhatsAppUrl("technical venting consultation")}
                  isExternal
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  WhatsApp Consultation
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Support & Plant Contact Bar */}
      <section className="site-container">
        <Reveal>
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              fontSize: 'var(--text-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '20px' }}>✉️</span>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontWeight: '700' }}>OFFICIAL SUPPORT EMAIL</div>
                <a href={`mailto:${siteConfig.email}`} style={{ fontWeight: '700', color: 'var(--color-ink)' }}>
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '20px' }}>📞</span>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontWeight: '700' }}>CALL DIRECTLY</div>
                <a href={`tel:${siteConfig.phoneTel}`} style={{ fontWeight: '700', color: 'var(--color-ink)' }}>
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <a href="/" style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: 'var(--color-copper)', textDecoration: 'underline' }}>
              ← Return to Homepage
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
