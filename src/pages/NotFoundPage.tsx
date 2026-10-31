import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { usePageMeta } from '../lib/usePageMeta';
import { createQuickStartWhatsAppUrl } from '../lib/whatsapp';

export const NotFoundPage: React.FC = () => {
  usePageMeta('Page not found', 'The page you are looking for does not exist.', '/404', true);

  return (
    <section
      className="site-container"
      style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)', maxWidth: '720px' }}
    >
      <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-copper)' }}>
        Error 404
      </p>
      <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-ink)', margin: '0.5rem 0 1rem' }}>
        This page could not be found
      </h1>
      <p style={{ color: 'var(--color-muted-dark)', lineHeight: 1.7, marginBottom: '2rem' }}>
        The link may be outdated or mistyped. Return to the home page, or reach us directly on WhatsApp.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Button variant="whatsapp" href={createQuickStartWhatsAppUrl()} isExternal>
          Chat on WhatsApp
        </Button>
      </div>
    </section>
  );
};
