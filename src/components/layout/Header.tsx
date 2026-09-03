import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'var(--color-white)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--transition-fast)'
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--header-height)',
            paddingLeft: 'clamp(0.5rem, 4vw, 0.5rem)',
            paddingRight: 'clamp(0.5rem, 4vw, 0.5rem)'
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
            aria-label="Ajasra Vervetech Home"
          >
            <img
              src="/images/ajasra-logo.png"
              alt="Ajasra Vervetech Logo"
              style={{
                width: '42px',
                height: '42px',
                objectFit: 'contain',
                borderRadius: '6px'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="font-brand-logo"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: '400',
                  color: 'var(--color-ink)',
                  letterSpacing: '0.04em',
                  lineHeight: '1.05'
                }}
              >
                AJASRA VERVETECH
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: '600',
                  fontStyle: 'italic',
                  letterSpacing: '0.02em',
                  color: 'var(--color-muted)',
                  lineHeight: '1.2',
                  textAlign: 'right'
                }}
              >
                Born to Inspire
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem'
            }}
            className="desktop-nav"
          >
            {siteConfig.navLinks.map((link) => {
              const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');
              const isCurrent = isInternalRoute && location.pathname === link.href;

              return isInternalRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: isCurrent ? '700' : '600',
                    color: isCurrent ? 'var(--color-copper)' : 'var(--color-ink-light)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative'
                  }}
                  className="nav-link-hover"
                >
                  {link.label}
                  {isCurrent && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-copper)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    color: 'var(--color-ink-light)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative'
                  }}
                  className="nav-link-hover"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem'
            }}
            className="desktop-actions"
          >
            <a
              href={`tel:${siteConfig.phoneTel}`}
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: '700',
                color: 'var(--color-muted-dark)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-whatsapp)' }} />
              {siteConfig.phoneDisplay}
            </a>
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              }
            >
              Request a quote
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown / Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
        .nav-link-hover:hover {
          color: var(--color-copper) !important;
        }
      `}</style>
    </>
  );
};
