import { MITESH_CONFIG } from '../config/miteshData';

/**
 * Direct WhatsApp chat with Mitesh Ladva
 */
export function openWhatsAppChat(customMessage?: string): void {
  const phone = MITESH_CONFIG.contact.whatsappClean;
  const msg = customMessage || 
    `Hello Mitesh, I visited your executive portfolio and would like to discuss strategic consulting opportunities with Ladva Enterprises.`;
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Share Mitesh's portfolio with a pre-filled professional message via WhatsApp
 */
export function sharePortfolioViaWhatsApp(targetNumber?: string): void {
  const message = MITESH_CONFIG.whatsappShareMessage;
  let url: string;

  if (targetNumber) {
    const cleanNum = targetNumber.replace(/\D/g, '');
    const formattedNum = cleanNum.startsWith('91') ? cleanNum : '91' + cleanNum;
    url = `https://wa.me/${formattedNum}?text=${encodeURIComponent(message)}`;
  } else {
    url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Copy text to clipboard with fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback
    }
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Fallback copy failed:', err);
    document.body.removeChild(textArea);
    return false;
  }
}

