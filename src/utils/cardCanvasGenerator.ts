import { MITESH_CONFIG } from '../config/miteshData';
import { generateQRCodeDataUrl } from './qrGenerator';

/**
 * Generates an executive, high-resolution (1200 x 700 px) Digital Business Card
 * and triggers an instant PNG download.
 */
export async function downloadDigitalVisitingCard(
  onSuccess?: () => void
): Promise<void> {
  const { profile, contact } = MITESH_CONFIG;

  const width = 1200;
  const height = 700;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 1. Executive Navy Gradient Background
  const bgGradient = ctx.createLinearGradient(0, 0, width, height);
  bgGradient.addColorStop(0, '#101B2D'); // Midnight Navy
  bgGradient.addColorStop(0.5, '#172943'); // Deep Navy
  bgGradient.addColorStop(1, '#0D1624'); // Darker Navy
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // 2. Subtle architectural geometric accents (metallic mesh & fine lines)
  ctx.strokeStyle = 'rgba(201, 169, 110, 0.08)';
  ctx.lineWidth = 1;
  for (let x = -width; x < width * 2; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + height, height);
    ctx.stroke();
  }

  // 3. Luxurious Champagne Gold double border
  ctx.strokeStyle = '#C9A96E'; // Champagne Gold
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, width - 60, height - 60);

  ctx.strokeStyle = 'rgba(201, 169, 110, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  // Corner metallic accent triangles
  const cornerSize = 24;
  ctx.fillStyle = '#C9A96E';
  // Top-left
  ctx.beginPath();
  ctx.moveTo(30, 30);
  ctx.lineTo(30 + cornerSize, 30);
  ctx.lineTo(30, 30 + cornerSize);
  ctx.fill();
  // Top-right
  ctx.beginPath();
  ctx.moveTo(width - 30, 30);
  ctx.lineTo(width - 30 - cornerSize, 30);
  ctx.lineTo(width - 30, 30 + cornerSize);
  ctx.fill();
  // Bottom-left
  ctx.beginPath();
  ctx.moveTo(30, height - 30);
  ctx.lineTo(30 + cornerSize, height - 30);
  ctx.lineTo(30, height - 30 - cornerSize);
  ctx.fill();
  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(width - 30, height - 30);
  ctx.lineTo(width - 30 - cornerSize, height - 30);
  ctx.lineTo(width - 30, height - 30 - cornerSize);
  ctx.fill();

  // 4. Draw Mitesh's Photograph
  const photoSize = 240;
  const photoX = 80;
  const photoY = 130;

  // Gold ring around photo
  ctx.strokeStyle = '#C9A96E';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2 + 6, 0, Math.PI * 2);
  ctx.stroke();

  // Load photo
  try {
    const photoImg = new Image();
    photoImg.crossOrigin = 'anonymous';
    photoImg.src = profile.photoUrl;
    await new Promise((resolve) => {
      photoImg.onload = resolve;
      photoImg.onerror = resolve; // Continue if error
    });

    if (photoImg.complete && photoImg.naturalWidth > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Center crop portrait
      const aspect = photoImg.width / photoImg.height;
      let drawW = photoSize;
      let drawH = photoSize;
      let drawX = photoX;
      let drawY = photoY;

      if (aspect < 1) {
        drawW = photoSize;
        drawH = photoSize / aspect;
        drawY = photoY - (drawH - photoSize) * 0.25; // focus on face near top
      } else {
        drawH = photoSize;
        drawW = photoSize * aspect;
        drawX = photoX - (drawW - photoSize) / 2;
      }

      ctx.drawImage(photoImg, drawX, drawY, drawW, drawH);
      ctx.restore();
    }
  } catch (e) {
    console.warn('Could not render photo on canvas:', e);
  }

  // Experience badge below photo
  ctx.fillStyle = '#C9A96E';
  ctx.roundRect(photoX + 15, photoY + photoSize + 22, photoSize - 30, 36, 18);
  ctx.fill();

  ctx.fillStyle = '#101B2D';
  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('20+ YRS STRATEGIC EXPERTISE', photoX + photoSize / 2, photoY + photoSize + 45);

  // 5. Main Information Block
  const textX = 370;

  // Company Brand Header
  ctx.textAlign = 'left';
  ctx.fillStyle = '#C9A96E';
  ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('LADVA ENTERPRISES', textX, 120);

  ctx.fillStyle = '#9AA5B5';
  ctx.font = '500 13px "DM Sans", sans-serif';
  ctx.fillText('STRATEGIC CONSULTING & ADVISORY', textX, 142);

  // Name
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
  ctx.fillText(profile.fullName, textX, 205);

  // Title / Designation
  ctx.fillStyle = '#DFCEAA';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(profile.title, textX, 240);

  // Gold Divider Line
  const gradLine = ctx.createLinearGradient(textX, 260, textX + 450, 260);
  gradLine.addColorStop(0, '#C9A96E');
  gradLine.addColorStop(0.7, '#DFCEAA');
  gradLine.addColorStop(1, 'transparent');
  ctx.strokeStyle = gradLine;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(textX, 260);
  ctx.lineTo(textX + 450, 260);
  ctx.stroke();

  // Contact Information Rows
  const contactStartY = 310;
  const lineSpacing = 44;

  const contactList = [
    { label: 'PHONE', val: contact.phoneDisplay, icon: '📞' },
    { label: 'EMAIL', val: contact.primaryEmail, icon: '✉️' },
    { label: 'PORTFOLIO', val: contact.portfolioWebsite, icon: '🌐' },
    { label: 'LOCATION', val: `${contact.city}, ${contact.country}`, icon: '📍' },
  ];

  contactList.forEach((item, idx) => {
    const y = contactStartY + idx * lineSpacing;

    // Mini Gold Accent Dot
    ctx.fillStyle = '#C9A96E';
    ctx.beginPath();
    ctx.arc(textX + 8, y - 6, 4, 0, Math.PI * 2);
    ctx.fill();

    // Value
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '500 17px "DM Sans", sans-serif';
    ctx.fillText(item.val, textX + 28, y);
  });

  // Services pill list at bottom
  const pillsY = 515;
  ctx.fillStyle = 'rgba(23, 41, 67, 0.8)';
  ctx.roundRect(textX, pillsY, 520, 80, 10);
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 169, 110, 0.3)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#DFCEAA';
  ctx.font = '600 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PRACTICE AREAS:', textX + 16, pillsY + 28);

  ctx.fillStyle = '#9AA5B5';
  ctx.font = '13px "DM Sans", sans-serif';
  ctx.fillText('Management Consulting • Strategy & Growth • Digital Transformation', textX + 16, pillsY + 48);
  ctx.fillText('Legal & ISO Compliance • Financial Advisory & Capital Strategy', textX + 16, pillsY + 68);

  // 6. Right Side - Dynamic QR Code Container
  const qrBoxSize = 190;
  const qrX = width - qrBoxSize - 75;
  const qrY = 150;

  // QR Container Box
  ctx.fillStyle = '#FFFFFF';
  ctx.roundRect(qrX, qrY, qrBoxSize, qrBoxSize, 14);
  ctx.fill();

  // Draw QR Code
  try {
    const qrData = await generateQRCodeDataUrl(contact.portfolioWebsite, {
      width: 250,
      margin: 1,
      colorDark: '#101B2D',
      colorLight: '#FFFFFF'
    });
    const qrImg = new Image();
    qrImg.src = qrData;
    await new Promise((resolve) => {
      qrImg.onload = resolve;
    });
    const qrPad = 12;
    ctx.drawImage(qrImg, qrX + qrPad, qrY + qrPad, qrBoxSize - qrPad * 2, qrBoxSize - qrPad * 2);
  } catch (err) {
    console.warn('Could not draw QR code on card:', err);
  }

  // QR scan prompt text below QR
  ctx.fillStyle = '#C9A96E';
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SCAN TO CONNECT', qrX + qrBoxSize / 2, qrY + qrBoxSize + 28);

  ctx.fillStyle = '#9AA5B5';
  ctx.font = '11px "DM Sans", sans-serif';
  ctx.fillText('Save Contact Instantly', qrX + qrBoxSize / 2, qrY + qrBoxSize + 46);

  // 7. Trigger instant PNG download
  const downloadLink = document.createElement('a');
  downloadLink.download = contact.cardFileName;
  downloadLink.href = canvas.toDataURL('image/png', 1.0);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  if (onSuccess) onSuccess();
}

