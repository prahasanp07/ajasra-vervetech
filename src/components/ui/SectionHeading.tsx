import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  isDark = false,
  className = ''
}) => {
  return (
    <div
      className={`section-heading-block ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: alignment === 'center' ? 'center' : 'flex-start',
        textAlign: alignment === 'center' ? 'center' : 'left',
        marginBottom: 'clamp(2rem, 4vw, 3.5rem)'
      }}
    >
      {eyebrow && (
        <span className={`eyebrow-badge ${isDark ? 'eyebrow-badge-teal' : ''}`}>
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-headline ${isDark ? 'section-headline-dark' : ''}`}
        style={{ maxWidth: alignment === 'center' ? '780px' : '640px' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtext ${isDark ? 'section-subtext-dark' : ''}`}
          style={{ marginTop: '0.875rem' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
