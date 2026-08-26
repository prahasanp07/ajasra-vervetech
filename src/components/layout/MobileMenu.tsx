import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { createQuickStartWhatsAppUrl } from '../../lib/whatsapp';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when mobile menu is open & close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      style={{
        position: 'fixed',
        top: 'var(--header-height)',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--color-white)',
        zIndex: 890,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowY: 'auto'
      }}
    >
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {siteConfig.navLinks.map((link) => {
          const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');

          return isInternalRoute ? (
            <Link
              key={link.label}
              to={link.href}
              onClick={onClose}
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: '700',
                color: 'var(--color-ink)',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: '1rem', color: 'var(--color-muted)' }}>→</span>
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: '700',
                color: 'var(--color-ink)',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: '1rem', color: 'var(--color-muted)' }}>→</span>
            </a>
          );
        })}
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '2rem' }}>
        <Button
          variant="primary"
          href="/#contact"
          onClick={onClose}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Request a quote
        </Button>
        <Button
          variant="whatsapp"
          href={createQuickStartWhatsAppUrl()}
          isExternal
          style={{ width: '100%', justifyContent: 'center' }}
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
            </svg>
          }
        >
          WhatsApp: {siteConfig.phoneDisplay}
        </Button>

        <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-muted)', fontSize: 'var(--text-xs)' }}>
          <p>{siteConfig.location}</p>
          <p style={{ marginTop: '0.25rem' }}>{siteConfig.standards}</p>
        </div>
      </div>
    </div>
  );
};
