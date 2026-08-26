import { siteConfig } from '../config/siteConfig';

export interface WhatsAppEnquiryData {
  name: string;
  phone: string;
  email?: string;
  materialDetails: string;
  quantity?: string;
  source?: string;
}

/**
 * Builds a valid click-to-chat WhatsApp URL using the centralized configuration.
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a clean, structured inquiry message for industrial buyers.
 */
export function createStructuredWhatsAppMessage(data: WhatsAppEnquiryData): string {
  const parts: string[] = [
    `Hello ${siteConfig.businessName},`,
    '',
    'I would like to enquire about hot dip galvanizing.',
    '',
    `• Name: ${data.name.trim()}`,
    `• Phone: ${data.phone.trim()}`
  ];

  if (data.email && data.email.trim().length > 0) {
    parts.push(`• Email: ${data.email.trim()}`);
  }

  parts.push(`• Material / project details: ${data.materialDetails.trim()}`);

  if (data.quantity && data.quantity.trim().length > 0) {
    parts.push(`• Approximate quantity: ${data.quantity.trim()}`);
  }

  parts.push('', `Source: ${data.source || 'Website enquiry'}`);

  return parts.join('\n');
}

/**
 * Quick project starter WhatsApp link
 */
export function createQuickStartWhatsAppUrl(projectTopic?: string): string {
  const defaultText = projectTopic
    ? `Hello ${siteConfig.businessName}, I would like to discuss hot dip galvanizing for ${projectTopic}.`
    : `Hello ${siteConfig.businessName}, I would like to enquire about hot dip galvanizing for my steel fabrication project.`;
  return buildWhatsAppUrl(defaultText);
}
