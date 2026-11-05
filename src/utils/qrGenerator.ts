import QRCode from 'qrcode';

export interface QRCodeOptions {
  width?: number;
  margin?: number;
  colorDark?: string;
  colorLight?: string;
}

/**
 * Generates a high-resolution QR Code data URL
 */
export async function generateQRCodeDataUrl(
  text: string,
  options?: QRCodeOptions
): Promise<string> {
  const defaultOptions: QRCodeOptions = {
    width: options?.width || 400,
    margin: options?.margin || 2,
    colorDark: options?.colorDark || '#101B2D', // Midnight Navy
    colorLight: options?.colorLight || '#FFFFFF',
  };

  try {
    return await QRCode.toDataURL(text, {
      width: defaultOptions.width,
      margin: defaultOptions.margin,
      errorCorrectionLevel: 'H',
      color: {
        dark: defaultOptions.colorDark,
        light: defaultOptions.colorLight,
      },
    });
  } catch (err) {
    console.error('Error generating QR code:', err);
    throw err;
  }
}

/**
 * Downloads a branded executive QR code image
 */
export async function downloadBrandedQRCode(
  profileUrl: string,
  fullName: string,
  title: string,
  company: string,
  fileName: string = 'Mitesh_Ladva_QR_Code.png'
): Promise<void> {
  const qrDataUrl = await generateQRCodeDataUrl(profileUrl, {
    width: 500,
    margin: 1,
    colorDark: '#101B2D',
    colorLight: '#FFFFFF'
  });

  const canvas = document.createElement('canvas');
  const size = 680;
  const height = 820;
  canvas.width = size;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background - Midnight Navy #101B2D
  ctx.fillStyle = '#101B2D';
  ctx.fillRect(0, 0, size, height);

  // Elegant Champagne Gold border (#C9A96E)
  ctx.strokeStyle = '#C9A96E';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, size - 40, height - 40);

  // Subtle inner accent line
  ctx.strokeStyle = 'rgba(201, 169, 110, 0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(28, 28, size - 56, height - 56);

  // Brand Name
  ctx.fillStyle = '#C9A96E';
  ctx.font = '600 16px "DM Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(company.toUpperCase() + ' • STRATEGIC CONSULTING', size / 2, 70);

  // Full Name
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 32px "Playfair Display", serif';
  ctx.fillText(fullName, size / 2, 115);

  // Designation
  ctx.fillStyle = '#9AA5B5';
  ctx.font = '500 17px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(title, size / 2, 145);

  // Decorative gold divider
  ctx.strokeStyle = '#C9A96E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(size / 2 - 80, 165);
  ctx.lineTo(size / 2 + 80, 165);
  ctx.stroke();

  // White Card container for QR
  const qrBoxSize = 420;
  const qrBoxX = (size - qrBoxSize) / 2;
  const qrBoxY = 195;

  ctx.fillStyle = '#FFFFFF';
  ctx.roundRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 16);
  ctx.fill();

  // Draw QR Image
  const qrImg = new Image();
  qrImg.src = qrDataUrl;
  await new Promise((resolve) => {
    qrImg.onload = resolve;
  });

  const qrInnerPad = 24;
  ctx.drawImage(
    qrImg,
    qrBoxX + qrInnerPad,
    qrBoxY + qrInnerPad,
    qrBoxSize - qrInnerPad * 2,
    qrBoxSize - qrInnerPad * 2
  );

  // Scan instruction
  ctx.fillStyle = '#C9A96E';
  ctx.font = '600 19px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('SCAN TO SAVE CONTACT & VIEW PORTFOLIO', size / 2, qrBoxY + qrBoxSize + 48);

  // URL Display
  ctx.fillStyle = '#9AA5B5';
  ctx.font = '14px "DM Sans", sans-serif';
  ctx.fillText(profileUrl, size / 2, qrBoxY + qrBoxSize + 76);

  // Download the resulting canvas image
  const link = document.createElement('a');
  link.download = fileName;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

