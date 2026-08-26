import React, { useState } from 'react';
import { createStructuredWhatsAppMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import { Button } from './Button';

interface FormState {
  name: string;
  phone: string;
  email: string;
  materialDetails: string;
  quantity: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  materialDetails?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    materialDetails: '',
    quantity: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name or company name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid contact number.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.materialDetails.trim()) {
      newErrors.materialDetails = 'Please specify the steel material or fabrication requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = createStructuredWhatsAppMessage({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      materialDetails: formData.materialDetails,
      quantity: formData.quantity,
      source: 'Ajasra Vervetech Web Form'
    });

    setSubmittedMessage(message);
    setIsSubmitted(true);

    // Open WhatsApp URL in a new tab
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      materialDetails: '',
      quantity: ''
    });
    setErrors({});
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--color-white)',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {isSubmitted ? (
        <div
          role="status"
          aria-live="polite"
          style={{
            textAlign: 'center',
            padding: '2rem 1rem'
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(37, 211, 102, 0.15)',
              color: 'var(--color-whatsapp-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              fontSize: '28px'
            }}
          >
            ✓
          </div>
          <h3
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: '700',
              color: 'var(--color-ink)',
              marginBottom: '0.5rem'
            }}
          >
            WhatsApp Message Ready
          </h3>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: 'var(--text-sm)',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}
          >
            Your inquiry has been formatted and opened in WhatsApp for direct communication with our team.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxWidth: '320px',
              margin: '0 auto'
            }}
          >
            <Button
              variant="whatsapp"
              href={buildWhatsAppUrl(submittedMessage)}
              isExternal
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
                </svg>
              }
            >
              Reopen WhatsApp Chat
            </Button>
            <button
              type="button"
              onClick={handleReset}
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-muted-dark)',
                textDecoration: 'underline',
                padding: '0.5rem',
                cursor: 'pointer'
              }}
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
            {/* Name */}
            <div>
              <label
                htmlFor="form-name"
                style={{
                  display: 'block',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-ink)',
                  marginBottom: '0.4rem'
                }}
              >
                Name / Company <span style={{ color: 'var(--color-copper)' }}>*</span>
              </label>
              <input
                id="form-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Anand Sharma (Apex Steel)"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'error-name' : undefined}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${errors.name ? '#D9383A' : 'var(--color-border)'}`,
                  backgroundColor: 'var(--color-paper-subtle)',
                  outline: 'none'
                }}
              />
              {errors.name && (
                <p id="error-name" style={{ color: '#D9383A', fontSize: 'var(--text-xs)', marginTop: '0.25rem' }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone & Email Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label
                  htmlFor="form-phone"
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-xs)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-ink)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Phone / WhatsApp <span style={{ color: 'var(--color-copper)' }}>*</span>
                </label>
                <input
                  id="form-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'error-phone' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-sm)',
                    border: `1px solid ${errors.phone ? '#D9383A' : 'var(--color-border)'}`,
                    backgroundColor: 'var(--color-paper-subtle)',
                    outline: 'none'
                  }}
                />
                {errors.phone && (
                  <p id="error-phone" style={{ color: '#D9383A', fontSize: 'var(--text-xs)', marginTop: '0.25rem' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="form-email"
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-xs)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-ink)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Email <span style={{ color: 'var(--color-muted)', fontWeight: '400' }}>(Optional)</span>
                </label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-paper-subtle)',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Approximate Quantity */}
            <div>
              <label
                htmlFor="form-quantity"
                style={{
                  display: 'block',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-ink)',
                  marginBottom: '0.4rem'
                }}
              >
                Approximate Quantity / Tonnage <span style={{ color: 'var(--color-muted)', fontWeight: '400' }}>(Optional)</span>
              </label>
              <input
                id="form-quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 15 Metric Tons / 250 fabricated pieces"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-paper-subtle)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Material / Project Details */}
            <div>
              <label
                htmlFor="form-details"
                style={{
                  display: 'block',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-ink)',
                  marginBottom: '0.4rem'
                }}
              >
                Material / Project Details <span style={{ color: 'var(--color-copper)' }}>*</span>
              </label>
              <textarea
                id="form-details"
                name="materialDetails"
                rows={4}
                value={formData.materialDetails}
                onChange={handleChange}
                placeholder="Describe component types (e.g. MS structural beams, welded pipes, solar purlins), dimensions, grade, or expected timeline..."
                aria-required="true"
                aria-invalid={!!errors.materialDetails}
                aria-describedby={errors.materialDetails ? 'error-details' : undefined}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${errors.materialDetails ? '#D9383A' : 'var(--color-border)'}`,
                  backgroundColor: 'var(--color-paper-subtle)',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
              {errors.materialDetails && (
                <p id="error-details" style={{ color: '#D9383A', fontSize: 'var(--text-xs)', marginTop: '0.25rem' }}>
                  {errors.materialDetails}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div style={{ marginTop: '0.5rem' }}>
              <Button
                type="submit"
                variant="whatsapp"
                className="w-full"
                style={{ width: '100%', justifyContent: 'center' }}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
                  </svg>
                }
              >
                Send Request via WhatsApp
              </Button>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-muted)',
                  textAlign: 'center',
                  marginTop: '0.625rem'
                }}
              >
                Direct WhatsApp transmission • Quick turnaround from Harohalli team
              </p>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
