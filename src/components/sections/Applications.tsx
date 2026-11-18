import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const Applications: React.FC = () => {
  const { industriesWeCater } = siteContent;

  return (
    <section id="applications" className="section-spacing">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow={industriesWeCater.eyebrow}
            title={industriesWeCater.heading}
            subtitle={industriesWeCater.subheadline}
            alignment="center"
          />
        </Reveal>

        <ul className="industry-grid" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {industriesWeCater.items.map((item, index) => (
            <li key={item.id} className="industry-cell">
              <Reveal delay={index * 50}>
                <article className="industry-card">
                  <div className="industry-card-head">
                    <span className="industry-card-index" aria-hidden="true">
                      {item.index}
                    </span>
                    <span className="industry-card-rule" aria-hidden="true" />
                  </div>

                  <h3 className="industry-card-title">{item.title}</h3>
                  <p className="industry-card-text">{item.description}</p>

                  <Link to="/#contact" className="industry-card-link">
                    <span>Inquire for {item.title}</span>
                    <span className="industry-card-arrow" aria-hidden="true">↗</span>
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}

          {/* Closing tile keeps the grid balanced and gives a clear next step */}
          <li className="industry-cell industry-cell-cta">
            <Reveal delay={industriesWeCater.items.length * 50}>
              <article className="industry-card industry-card-dark">
                <div className="industry-card-head">
                  <span className="industry-card-index" aria-hidden="true">+</span>
                  <span className="industry-card-rule" aria-hidden="true" />
                </div>
                <h3 className="industry-card-title">Other requirement?</h3>
                <p className="industry-card-text">
                  Tell us about your steel components and we will review the galvanizing requirement with you.
                </p>
                <Link to="/#contact" className="industry-card-link">
                  <span>Send your requirement</span>
                  <span className="industry-card-arrow" aria-hidden="true">↗</span>
                </Link>
              </article>
            </Reveal>
          </li>
        </ul>
      </div>

      <style>{`
        .industry-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 2vw, 1.5rem);
        }
        @media (min-width: 640px) {
          .industry-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .industry-grid { grid-template-columns: repeat(3, 1fr); }
          .industry-cell-cta { grid-column: span 2; }
        }
        .industry-cell { display: flex; }
        .industry-cell > div { display: flex; width: 100%; }

        .industry-card {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: clamp(1.5rem, 2.5vw, 2rem);
          background: #182838;
          border: 1px solid #03045F;
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .industry-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--color-lime);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .industry-card:hover,
        .industry-card:focus-within {
          border-color: var(--color-lime);
          box-shadow: 0 12px 28px rgba(3, 4, 95, 0.28);
        }
        .industry-card:hover::before,
        .industry-card:focus-within::before { transform: scaleX(1); }

        .industry-card-head {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin-bottom: 1.5rem;
        }
        .industry-card-index {
          font-size: var(--text-sm);
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--color-lime);
        }
        .industry-card-rule {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
        }
        .industry-card-title {
          font-size: var(--text-xl);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-white);
          margin: 0 0 0.625rem;
        }
        .industry-card-text {
          font-size: var(--text-sm);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.82);
          margin: 0 0 1.5rem;
        }
        .industry-card-link {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 44px;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-white);
          text-decoration: none;
        }
        .industry-card-arrow { transition: transform var(--transition-fast); }
        .industry-card:hover .industry-card-arrow,
        .industry-card-link:focus-visible .industry-card-arrow { transform: translate(2px, -2px); }

        .industry-card-dark {
          background: var(--color-lime);
          border-color: var(--color-lime);
        }
        .industry-card-dark::before { background: #03045F; }
        .industry-card-dark .industry-card-index { color: #03045F; }
        .industry-card-dark .industry-card-rule { background: rgba(3, 4, 95, 0.25); }
        .industry-card-dark .industry-card-title { color: var(--color-ink); }
        .industry-card-dark .industry-card-text { color: var(--color-ink-light); }
        .industry-card-dark .industry-card-link {
          color: var(--color-ink);
          border-top-color: #03045f40;
        }
        .industry-card-dark:hover { border-color: #03045F; box-shadow: 0 12px 28px rgba(3, 4, 95, 0.2); }

        @media (prefers-reduced-motion: reduce) {
          .industry-card, .industry-card::before, .industry-card-arrow { transition: none; }
        }
      `}</style>
    </section>
  );
};
