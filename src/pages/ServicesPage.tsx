import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { siteContent } from '../data/content';
import { Button } from '../components/ui/Button';
import { usePageMeta } from '../lib/usePageMeta';
import { Reveal } from '../components/ui/Reveal';
import { GalvanizingProcessDiagram } from '../components/diagrams/GalvanizingProcessDiagram';
import { InfrastructureSection } from '../components/sections/InfrastructureSection';
import { SectorComponentsSection } from '../components/sections/SectorComponentsSection';
import { createQuickStartWhatsAppUrl } from '../lib/whatsapp';

export const ServicesPage: React.FC = () => {
  usePageMeta(
    'Hot Dip Galvanizing Services',
    'Hot dip galvanizing services for iron, steel and ferrous alloys at Ajasra Vervetech, Harohalli Industrial Area, Karnataka.',
    '/services'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { processFlowTanks } = siteContent;

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
                Up to 480°C
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
                  We provide the service of hot dip galvanization to iron, steel and ferrous alloys to provide them with resistance to abrasion, environmental impacts, and wear. Hot dip galvanization is a corrosion protection process that involves coating steel by immersing it in a bath of molten Zinc at an operating temperature up to 480°C.
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

      {/* PLANT & FACILITY INFRASTRUCTURE (As per authentic specifications) */}
      <InfrastructureSection variant="paper" />

      {/* HOW WE DO IT - 12-Stage Plant Flow & Process Architecture */}
      <section id="process" className="site-container" style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2rem, 4vw, 3rem)' }}>
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" aria-hidden="true" />
              12-STAGE PLANT PROCESS ARCHITECTURE
            </div>
            <h2 className="section-headline">
              The 12-Stage Hot Dip Galvanizing Sequence
            </h2>
            <p className="section-subtext" style={{ margin: '0.875rem auto 0' }}>
              Precision chemical surface preparation, thermal flux drying, molten zinc immersion at 480°C, centrifugal excess removal, and passivation—aligned with IS-2629 specifications.
            </p>
          </div>
        </Reveal>

        {/* 12-Stage Isometric Process Diagram Component */}
        <Reveal delay={80}>
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <GalvanizingProcessDiagram
              variant="card"
              showDetailsCard={true}
              interactive={true}
              title="Hot Dip Galvanizing Process Flow"
              subtitle="Physical 12-Stage Bath & Centrifuge Sequence at Ajasra Vervetech (Harohalli)"
            />
          </div>
        </Reveal>

        {/* Categorized Phase-by-Phase Technical Engineering Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3rem)' }}>
          {/* Phase 1: Chemical Pretreatment */}
          <Reveal delay={100}>
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-deep-teal)',
                      color: 'var(--color-lime)',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-base)'
                    }}
                  >
                    01
                  </span>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '800', color: 'var(--color-ink)', margin: 0 }}>
                      Phase 1: Chemical Surface Pretreatment
                    </h3>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontWeight: '600', marginTop: '2px' }}>
                      Tanks 01 to 06 • Eliminating Organic Contaminants, Mill Scale & Residual Acid
                    </div>
                  </div>
                </div>

                <span style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: 'var(--color-deep-teal)', backgroundColor: 'rgba(13, 58, 61, 0.08)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                  Tanks 1 – 6
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {processFlowTanks.slice(0, 6).map((tank) => (
                  <div
                    key={tank.id}
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
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: tank.tankColor }} />
                          <span style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-ink)' }}>
                            Stage {tank.stepNumber.toString().padStart(2, '0')}: {tank.name}
                          </span>
                        </div>
                        <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'var(--color-muted)' }}>
                          {tank.dwellTime}
                        </span>
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.55', margin: '0 0 10px' }}>
                        {tank.details}
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '6px', fontSize: '0.6875rem', color: 'var(--color-ink-light)', fontWeight: '600' }}>
                      ⚡ {tank.chemistry}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Phase 2: Flux Conditioning & Drying */}
          <Reveal delay={120}>
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-deep-teal)',
                      color: 'var(--color-lime)',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-base)'
                    }}
                  >
                    02
                  </span>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '800', color: 'var(--color-ink)', margin: 0 }}>
                      Phase 2: Hot Fluxing & Thermal Preheating
                    </h3>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontWeight: '600', marginTop: '2px' }}>
                      Tanks 07 & 08 • Oxidation Shielding & Moisture Elimination Before Molten Immersion
                    </div>
                  </div>
                </div>

                <span style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: 'var(--color-copper)', backgroundColor: 'rgba(200, 117, 73, 0.1)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                  Stages 7 – 8
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {processFlowTanks.slice(6, 8).map((tank) => (
                  <div
                    key={tank.id}
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
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: tank.tankColor }} />
                          <span style={{ fontSize: 'var(--text-sm)', fontWeight: '800', color: 'var(--color-ink)' }}>
                            Stage {tank.stepNumber.toString().padStart(2, '0')}: {tank.name}
                          </span>
                        </div>
                        <span style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-copper)' }}>
                          {tank.temperature}
                        </span>
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.6', margin: '0 0 10px' }}>
                        {tank.details}
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '8px', fontSize: 'var(--text-xs)', color: 'var(--color-ink-light)', fontWeight: '600' }}>
                      🎯 <strong>Purpose:</strong> {tank.purpose}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Phase 3: Hot Dip Galvanizing & Centrifugal Spinning */}
          <Reveal delay={140}>
            <div
              style={{
                backgroundColor: 'var(--color-ink)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(216, 243, 93, 0.15)',
                      color: 'var(--color-lime)',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-base)',
                      border: '1px solid rgba(216, 243, 93, 0.3)'
                    }}
                  >
                    03
                  </span>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '800', color: 'var(--color-white)', margin: 0 }}>
                      Phase 3: High-Temp Zinc Immersion & Centrifuge Excess Removal
                    </h3>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '600', marginTop: '2px' }}>
                      Stages 09 & 10 • Metallurgical Bond (~3600 PSI) & Clean-Thread Centrifugal Finishing
                    </div>
                  </div>
                </div>

                <span style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-lime)', backgroundColor: 'rgba(216, 243, 93, 0.15)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                  Core Galvanizing Reaction
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {processFlowTanks.slice(8, 10).map((tank) => (
                  <div
                    key={tank.id}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: tank.tankColor }} />
                          <span style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: 'var(--color-white)' }}>
                            Stage {tank.stepNumber.toString().padStart(2, '0')}: {tank.name}
                          </span>
                        </div>
                        <span style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-lime)' }}>
                          {tank.temperature}
                        </span>
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', margin: '0 0 10px' }}>
                        {tank.details}
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '8px', fontSize: 'var(--text-xs)', color: 'var(--color-lime)' }}>
                      ✓ {tank.purpose}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Phase 4: Quench Cooling & Passivation */}
          <Reveal delay={160}>
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-deep-teal)',
                      color: 'var(--color-lime)',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-base)'
                    }}
                  >
                    04
                  </span>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '800', color: 'var(--color-ink)', margin: 0 }}>
                      Phase 4: Quench Cooling & Passivation Coating
                    </h3>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontWeight: '600', marginTop: '2px' }}>
                      Tanks 11 & 12 • Reaction Arrest & Wet Storage White Rust Defense
                    </div>
                  </div>
                </div>

                <span style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: 'var(--color-whatsapp-dark)', backgroundColor: 'rgba(37, 211, 102, 0.1)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                  Stages 11 – 12
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {processFlowTanks.slice(10, 12).map((tank) => (
                  <div
                    key={tank.id}
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
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: tank.tankColor }} />
                          <span style={{ fontSize: 'var(--text-sm)', fontWeight: '800', color: 'var(--color-ink)' }}>
                            Stage {tank.stepNumber.toString().padStart(2, '0')}: {tank.name}
                          </span>
                        </div>
                        <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'var(--color-muted)' }}>
                          {tank.dwellTime}
                        </span>
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.6', margin: '0 0 10px' }}>
                        {tank.details}
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '8px', fontSize: 'var(--text-xs)', color: 'var(--color-ink-light)', fontWeight: '600' }}>
                      🛡️ <strong>Protection:</strong> {tank.purpose}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Phase 5: 4-Point Quality Inspection & Lab Standards */}
          <Reveal delay={180}>
            <div
              style={{
                backgroundColor: 'var(--color-paper-subtle)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div className="eyebrow-badge">
                    <span className="eyebrow-dot" aria-hidden="true" />
                    QUALITY ASSURANCE & STANDARDS
                  </div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: '800', color: 'var(--color-ink)', margin: '4px 0 0' }}>
                    4-Point Quality Inspection & Standard Compliance
                  </h3>
                </div>

                <span style={{ fontSize: 'var(--text-xs)', fontWeight: '800', color: 'var(--color-deep-teal)', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', padding: '6px 14px', borderRadius: 'var(--radius-full)' }}>
                  In-House Lab Tested
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {[
                  {
                    title: 'Coating Thickness',
                    spec: 'IS-2629 / IS-3203',
                    desc: 'Calibrated electromagnetic thickness gauge checks verifying micron coating specifications across high-wear zones.'
                  },
                  {
                    title: 'Bond Adhesion',
                    spec: '~3600 PSI Bond',
                    desc: 'Evaluates the intermetallic solid-state reaction to guarantee coating will never chip, flake, or peel during transit or service.'
                  },
                  {
                    title: 'Coating Uniformity',
                    spec: 'IS-2633 (Preece Test)',
                    desc: 'Verifies continuous unbroken zinc coverage across internal cavities, structural gussets, corners, and fastener recesses.'
                  },
                  {
                    title: 'Visual Spangle & Fettling',
                    spec: 'IS-6745 / Visual Inspection',
                    desc: 'Fettling to eliminate zinc spikes and ash marks, confirming smooth metallic spangle finish ready for immediate erection.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem'
                    }}
                  >
                    <div style={{ fontSize: '0.6875rem', fontWeight: '800', color: 'var(--color-copper)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {item.spec}
                    </div>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: 'var(--color-ink)', margin: '4px 0 6px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', lineHeight: '1.55', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTOR DELIVERABLES & REAL COMPONENTS (Slides 8 to 12: Energy, Construction, Metro, General Engineering) */}
      <SectorComponentsSection variant="paper" />

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
