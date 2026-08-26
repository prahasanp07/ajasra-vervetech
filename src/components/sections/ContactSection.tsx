import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { siteContent } from '../../data/content';
import { ContactForm } from '../ui/ContactForm';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';

export const ContactSection: React.FC = () => {
  const { contact } = siteContent;

  return (
    <section id="contact" className="section-spacing" style={{ backgroundColor: 'var(--color-paper-subtle)' }}>
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.heading}
            subtitle={contact.description}
            alignment="left"
          />
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Plant Info & WhatsApp Direct Access */}
          <Reveal delay={100}>
            <div
              style={{
                backgroundColor: 'var(--color-deep-teal)',
                color: 'var(--color-white)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(216, 243, 93, 0.15)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '700',
                  color: 'var(--color-lime)',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem'
                }}
              >
                <span>🏭</span>
                Plant & Commercial Office
              </div>

              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: '800',
                  color: 'var(--color-white)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {siteConfig.businessName}
              </h3>

              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}
              >
                Contact our engineering and operations team directly for scheduling, batch enquiries, or specific dipping tank dimensions.
              </p>

              {/* Contact Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      flexShrink: 0
                    }}
                  >
                    📞
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: '700' }}>
                      Phone / Call Directly
                    </div>
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      style={{ fontSize: 'var(--text-base)', fontWeight: '700', color: 'var(--color-white)', textDecoration: 'underline' }}
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(37, 211, 102, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      flexShrink: 0,
                      color: 'var(--color-whatsapp)'
                    }}
                  >
                    💬
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: '700' }}>
                      Fastest Response
                    </div>
                    <a
                      href={createQuickStartWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 'var(--text-base)', fontWeight: '700', color: 'var(--color-whatsapp)' }}
                    >
                      Chat on WhatsApp (+91 82966 63245)
                    </a>
                  </div>
                </div>

                {/* Plant Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      flexShrink: 0
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: '700' }}>
                      Works Address
                    </div>
                    <address style={{ fontStyle: 'normal', fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5' }}>
                      {siteConfig.address.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </address>
                  </div>
                </div>
              </div>

              {/* Standards Badge */}
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: 'var(--text-xs)',
                  color: 'rgba(255, 255, 255, 0.75)'
                }}
              >
                <strong style={{ color: 'var(--color-lime)' }}>Standard Operating Compliance:</strong> We adhere to standard Indian galvanizing codes including IS 2629 for surface preparation, bath chemistry, and quality checks.
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Inquiry Form */}
          <Reveal delay={180}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
