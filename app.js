/**
 * MITESH LADVA — EXECUTIVE DIGITAL BUSINESS CARD ENGINE
 * Founder & Managing Partner • Ladva Enterprises
 * Pure Vanilla JavaScript (Zero Build Tools, Zero Node Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Central Executive Profile Configuration
  // --------------------------------------------------------------------------
  const CONFIG = {
    fullName: "Mitesh Ladva",
    firstName: "Mitesh",
    lastName: "Ladva",
    title: "Founder & Managing Partner",
    company: "Ladva Enterprises",
    tagline: "Strategic Consulting • Operational Excellence • Digital Transformation",
    experience: "20+ Years of Strategic Consulting",
    phoneDisplay: "+91 95948 89811",
    phoneClean: "9594889811",
    phoneInternational: "+919594889811",
    whatsappClean: "919594889811",
    email: "info@ladvaenterprises.com",
    personalEmail: "miteshladva@gmail.com",
    location: "Mumbai, Maharashtra, India",
    companyWebsite: "https://ladvaenterprises.com/",
    portfolioWebsite: "https://ladvaenterprises.github.io/card/",
    linkedinUrl: "https://www.linkedin.com/in/mitesh-ladva",
    photoUrl: "assets/profile.png",
    vcfFileName: "Mitesh_Ladva_Executive.vcf",
    cardFileName: "Mitesh_Ladva_Visiting_Card.png",

    // Resolves current URL dynamically
    getActiveUrl: function() {
      if (window.location.protocol.startsWith('http')) {
        return window.location.origin + window.location.pathname;
      }
      return this.portfolioWebsite;
    }
  };

  const activeUrl = CONFIG.getActiveUrl();

  // --------------------------------------------------------------------------
  // 2. Section Tab Navigation (Manasi Polyclinic / Mobile NFC Pattern)
  // --------------------------------------------------------------------------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function switchTab(targetId) {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    const activeBtn = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
      try {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } catch (e) {}
    }

    const activePanel = document.getElementById(targetId);
    if (activePanel) {
      activePanel.classList.add('active');
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      if (target) switchTab(target);
    });
  });

  // Switch to specific tab from in-card links
  document.querySelectorAll('[data-switch-tab]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-switch-tab');
      if (target) {
        switchTab(target);
        const panel = document.getElementById(target);
        if (panel) panel.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Dynamic QR Code Generation (High Quality, Standalone)
  // --------------------------------------------------------------------------
  const qrContainer = document.getElementById('qrCodeContainer');

  function renderQRCode() {
    if (typeof QRCode === 'undefined' || !qrContainer) return;
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
      text: activeUrl,
      width: 190,
      height: 190,
      colorDark: "#101B2D",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  renderQRCode();

  // Download Branded QR Code
  function downloadQRCodeImage() {
    const canvas = qrContainer ? qrContainer.querySelector('canvas') : null;
    if (!canvas) {
      showToast('QR Code is still rendering...');
      return;
    }

    const exportCanvas = document.createElement('canvas');
    const size = 600;
    const height = 760;
    exportCanvas.width = size;
    exportCanvas.height = height;
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return;

    // Navy background
    ctx.fillStyle = '#101B2D';
    ctx.fillRect(0, 0, size, height);

    // Champagne gold border
    ctx.strokeStyle = '#C9A96E';
    ctx.lineWidth = 6;
    ctx.strokeRect(16, 16, size - 32, height - 32);

    ctx.strokeStyle = 'rgba(201, 169, 110, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(24, 24, size - 48, height - 48);

    // Header branding
    ctx.fillStyle = '#C9A96E';
    ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('LADVA ENTERPRISES • STRATEGIC CONSULTING', size / 2, 64);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px "Playfair Display", serif';
    ctx.fillText(CONFIG.fullName, size / 2, 106);

    ctx.fillStyle = '#9AA5B5';
    ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(CONFIG.title, size / 2, 134);

    // White box for QR code
    const boxSize = 400;
    const boxX = (size - boxSize) / 2;
    const boxY = 168;

    ctx.fillStyle = '#ffffff';
    ctx.roundRect(boxX, boxY, boxSize, boxSize, 14);
    ctx.fill();

    // Draw QR
    const qrPad = 24;
    ctx.drawImage(canvas, boxX + qrPad, boxY + qrPad, boxSize - qrPad * 2, boxSize - qrPad * 2);

    // Footer instruction
    ctx.fillStyle = '#C9A96E';
    ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('SCAN TO SAVE CONTACT TO PHONEBOOK', size / 2, boxY + boxSize + 48);

    ctx.fillStyle = '#9AA5B5';
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(activeUrl, size / 2, boxY + boxSize + 74);

    // Download
    const link = document.createElement('a');
    link.download = 'Mitesh_Ladva_QR_Code.png';
    link.href = exportCanvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Branded QR Code downloaded!');
  }

  const btnDownloadQR = document.getElementById('btnDownloadQR');
  if (btnDownloadQR) btnDownloadQR.addEventListener('click', downloadQRCodeImage);

  // --------------------------------------------------------------------------
  // 4. One-Click Save Contact (.vcf) Generator
  // --------------------------------------------------------------------------
  function downloadVCard() {
    const vCardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${CONFIG.lastName};${CONFIG.firstName};;;`,
      `FN:${CONFIG.fullName}`,
      `ORG:${CONFIG.company};Strategic Consulting`,
      `TITLE:${CONFIG.title}`,
      `ROLE:Strategic Consultant & Managing Partner`,
      `TEL;TYPE=CELL,VOICE,PREF:${CONFIG.phoneInternational}`,
      `TEL;TYPE=WORK,VOICE:${CONFIG.phoneInternational}`,
      `EMAIL;TYPE=INTERNET,WORK,PREF:${CONFIG.email}`,
      `EMAIL;TYPE=INTERNET,HOME:${CONFIG.personalEmail}`,
      `URL;TYPE=WORK:${CONFIG.companyWebsite}`,
      `URL;TYPE=PREF:${activeUrl}`,
      `X-SOCIALPROFILE;TYPE=linkedin:${CONFIG.linkedinUrl}`,
      `ADR;TYPE=WORK,POSTAL,PARCEL:;;Mumbai;Maharashtra;;India`,
      `NOTE:Founder & Managing Partner of Ladva Enterprises. Strategic consulting, digital transformation, enterprise BI & operational growth. Phone: ${CONFIG.phoneDisplay} | Email: ${CONFIG.email}`,
      'REV:' + new Date().toISOString().replace(/[-:.]/g, ''),
      'END:VCARD'
    ];

    const vCardContent = vCardLines.join('\r\n');
    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const blobUrl = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.setAttribute('download', CONFIG.vcfFileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 1500);

    showToast('Contact file downloaded! Tap file to add Mitesh to phonebook.');
  }

  // Bind all Save Contact buttons (Hero, Bottom Bar, and In-Tab)
  const heroSaveBtn = document.getElementById('heroSaveContactBtn');
  const bottomSaveBtn = document.getElementById('bottomSaveBtn');
  const tabSaveBtn = document.getElementById('tabSaveContactBtn');

  if (heroSaveBtn) heroSaveBtn.addEventListener('click', downloadVCard);
  if (bottomSaveBtn) bottomSaveBtn.addEventListener('click', downloadVCard);
  if (tabSaveBtn) tabSaveBtn.addEventListener('click', downloadVCard);

  // --------------------------------------------------------------------------
  // 5. Download Digital Visiting Card Image (High-Res Canvas PNG)
  // --------------------------------------------------------------------------
  async function generateAndDownloadVisitingCard() {
    showToast('Generating executive visiting card...');

    const width = 1200;
    const height = 700;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Navy Gradient Background
    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, '#101B2D');
    bg.addColorStop(0.5, '#172943');
    bg.addColorStop(1, '#0C1524');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    // Metallic mesh fine lines
    ctx.strokeStyle = 'rgba(201, 169, 110, 0.08)';
    ctx.lineWidth = 1;
    for (let x = -width; x < width * 2; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + height, height);
      ctx.stroke();
    }

    // Outer Champagne Gold Double Border
    ctx.strokeStyle = '#C9A96E';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = 'rgba(201, 169, 110, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Corner decorative triangles
    const cSize = 22;
    ctx.fillStyle = '#C9A96E';
    [[30, 30, 1, 1], [width - 30, 30, -1, 1], [30, height - 30, 1, -1], [width - 30, height - 30, -1, -1]].forEach(([x, y, dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx * cSize, y);
      ctx.lineTo(x, y + dy * cSize);
      ctx.fill();
    });

    // Profile Photo Frame
    const photoSize = 240;
    const photoX = 80;
    const photoY = 130;

    ctx.strokeStyle = '#C9A96E';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2 + 6, 0, Math.PI * 2);
    ctx.stroke();

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = CONFIG.photoUrl;
      await new Promise(r => { img.onload = r; img.onerror = r; });

      if (img.complete && img.naturalWidth > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        const aspect = img.width / img.height;
        let dw = photoSize, dh = photoSize, dx = photoX, dy = photoY;
        if (aspect < 1) {
          dh = photoSize / aspect;
          dy = photoY - (dh - photoSize) * 0.25;
        } else {
          dw = photoSize * aspect;
          dx = photoX - (dw - photoSize) / 2;
        }
        ctx.drawImage(img, dx, dy, dw, dh);
        ctx.restore();
      }
    } catch (e) {
      console.warn('Canvas photo render skipped', e);
    }

    // Badge below photo
    ctx.fillStyle = '#C9A96E';
    ctx.roundRect(photoX + 15, photoY + photoSize + 22, photoSize - 30, 36, 18);
    ctx.fill();

    ctx.fillStyle = '#101B2D';
    ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('20+ YRS STRATEGIC EXPERTISE', photoX + photoSize / 2, photoY + photoSize + 45);

    // Details Block
    const textX = 370;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#C9A96E';
    ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('LADVA ENTERPRISES', textX, 120);

    ctx.fillStyle = '#9AA5B5';
    ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('STRATEGIC CONSULTING & ADVISORY', textX, 142);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
    ctx.fillText(CONFIG.fullName, textX, 205);

    ctx.fillStyle = '#DFCEAA';
    ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(CONFIG.title, textX, 240);

    // Gold divider line
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

    // Contact List
    const contactStartY = 310;
    const list = [
      { label: 'PHONE', val: CONFIG.phoneDisplay },
      { label: 'EMAIL', val: CONFIG.email },
      { label: 'WEBSITE', val: CONFIG.companyWebsite },
      { label: 'LOCATION', val: CONFIG.location }
    ];

    list.forEach((item, idx) => {
      const y = contactStartY + idx * 44;
      ctx.fillStyle = '#C9A96E';
      ctx.beginPath();
      ctx.arc(textX + 8, y - 6, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '500 17px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item.val, textX + 28, y);
    });

    // Services Pill
    const pillsY = 515;
    ctx.fillStyle = 'rgba(23, 41, 67, 0.85)';
    ctx.roundRect(textX, pillsY, 520, 80, 10);
    ctx.fill();
    ctx.strokeStyle = 'rgba(201, 169, 110, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#DFCEAA';
    ctx.font = '600 12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PRACTICE AREAS:', textX + 16, pillsY + 28);

    ctx.fillStyle = '#9AA5B5';
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Management Consulting • Strategy & Growth • Digital Transformation', textX + 16, pillsY + 48);
    ctx.fillText('Legal & ISO Compliance • Financial Advisory & Working Capital', textX + 16, pillsY + 68);

    // QR Code on Card
    const qrCanvas = qrContainer ? qrContainer.querySelector('canvas') : null;
    const qrBoxSize = 190;
    const qrX = width - qrBoxSize - 75;
    const qrY = 150;

    ctx.fillStyle = '#FFFFFF';
    ctx.roundRect(qrX, qrY, qrBoxSize, qrBoxSize, 14);
    ctx.fill();

    if (qrCanvas) {
      const qrPad = 14;
      ctx.drawImage(qrCanvas, qrX + qrPad, qrY + qrPad, qrBoxSize - qrPad * 2, qrBoxSize - qrPad * 2);
    }

    ctx.fillStyle = '#C9A96E';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SCAN TO CONNECT', qrX + qrBoxSize / 2, qrY + qrBoxSize + 28);

    ctx.fillStyle = '#9AA5B5';
    ctx.font = '11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Save Contact Instantly', qrX + qrBoxSize / 2, qrY + qrBoxSize + 46);

    // Trigger download
    const link = document.createElement('a');
    link.download = CONFIG.cardFileName;
    link.href = canvas.toDataURL('image/png', 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Digital Visiting Card downloaded successfully!');
  }

  const heroDownloadCardBtn = document.getElementById('heroDownloadCardBtn');
  if (heroDownloadCardBtn) heroDownloadCardBtn.addEventListener('click', generateAndDownloadVisitingCard);

  // --------------------------------------------------------------------------
  // 6. Share Modal & WhatsApp Forwarder
  // --------------------------------------------------------------------------
  const shareModal = document.getElementById('shareModal');
  const closeShareModal = document.getElementById('closeShareModal');
  const btnShareModalTrigger = document.getElementById('btnShareModalTrigger');
  const bottomShareBtn = document.getElementById('bottomShareBtn');

  function openShareModalPopup() {
    if (shareModal) {
      shareModal.classList.add('open');
      shareModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeShareModalPopup() {
    if (shareModal) {
      shareModal.classList.remove('open');
      shareModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (btnShareModalTrigger) btnShareModalTrigger.addEventListener('click', openShareModalPopup);
  if (bottomShareBtn) {
    bottomShareBtn.addEventListener('click', () => {
      // Switch to QR tab on mobile or open share modal
      switchTab('tab-qr');
      const qrTab = document.getElementById('tab-qr');
      if (qrTab) qrTab.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (closeShareModal) closeShareModal.addEventListener('click', closeShareModalPopup);
  if (shareModal) {
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) closeShareModalPopup();
    });
  }

  // Predefined WhatsApp message
  const whatsappMessage = 
    `*🏛️ Mitesh Ladva - Founder & Managing Partner*\n` +
    `*Ladva Enterprises | Strategic Consulting*\n\n` +
    `_"Transforming organizations through strategic vision, data-driven clarity, and measurable execution."_\n\n` +
    `💼 *Consulting Practices:*\n` +
    `• Management Consulting & Organizational Restructuring\n` +
    `• Strategy & Scalable Market Growth\n` +
    `• IT & Digital Transformation (BigQuery, Looker, ERP, MIS)\n` +
    `• HR & Executive Talent Strategy\n` +
    `• Legal, Compliance & ISO (9001, 14001, 45001)\n` +
    `• Financial Advisory & Working Capital Optimization\n\n` +
    `📞 *Direct Mobile:* ${CONFIG.phoneDisplay}\n` +
    `✉️ *Business Email:* ${CONFIG.email}\n` +
    `🌐 *View Digital Business Card:* ${activeUrl}\n` +
    `🏢 *Corporate Portal:* ${CONFIG.companyWebsite}`;

  // Share Channels
  const modalShareWhatsapp = document.getElementById('modalShareWhatsapp');
  if (modalShareWhatsapp) {
    modalShareWhatsapp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
  }

  const modalShareLinkedin = document.getElementById('modalShareLinkedin');
  if (modalShareLinkedin) {
    modalShareLinkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(activeUrl)}`;
  }

  const modalShareEmail = document.getElementById('modalShareEmail');
  if (modalShareEmail) {
    modalShareEmail.href = `mailto:?subject=${encodeURIComponent("Digital Visiting Card — Mitesh Ladva")}&body=${encodeURIComponent(whatsappMessage)}`;
  }

  // Direct WhatsApp Forwarder Form in QR Tab
  const directWhatsAppShareForm = document.getElementById('directWhatsAppShareForm');
  if (directWhatsAppShareForm) {
    directWhatsAppShareForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('forwardMobileNumber');
      if (!input) return;
      const cleanNum = input.value.replace(/[^0-9]/g, '');

      if (cleanNum.length === 10) {
        const targetNumber = '91' + cleanNum;
        const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        input.value = '';
        showToast('Opening WhatsApp to send digital card...');
      } else {
        showToast('Please enter a valid 10-digit mobile number.');
      }
    });
  }

  // Copy Profile Link
  function copyProfileUrl() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(activeUrl)
        .then(() => showToast('Profile link copied to clipboard!'))
        .catch(() => fallbackClipboardCopy(activeUrl));
    } else {
      fallbackClipboardCopy(activeUrl);
    }
  }

  function fallbackClipboardCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Profile link copied to clipboard!');
    } catch (err) {
      showToast('Could not copy link.');
    }
    document.body.removeChild(tempInput);
  }

  const btnCopyProfileUrl = document.getElementById('btnCopyProfileUrl');
  const btnModalCopyLink = document.getElementById('btnModalCopyLink');
  if (btnCopyProfileUrl) btnCopyProfileUrl.addEventListener('click', copyProfileUrl);
  if (btnModalCopyLink) btnModalCopyLink.addEventListener('click', copyProfileUrl);

  const displayProfileUrl = document.getElementById('displayProfileUrl');
  const modalCopyUrlInput = document.getElementById('modalCopyUrlInput');
  if (displayProfileUrl) displayProfileUrl.textContent = activeUrl;
  if (modalCopyUrlInput) modalCopyUrlInput.value = activeUrl;

  // --------------------------------------------------------------------------
  // 7. Theme Toggle (Executive Dark Theme by default with Light Warm Ivory Mode)
  // --------------------------------------------------------------------------
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const themeToggleIcon = document.getElementById('themeToggleIcon');
  const themeToggleText = document.getElementById('themeToggleText');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeToggleIcon) themeToggleIcon.className = 'ri-moon-line';
      if (themeToggleText) themeToggleText.textContent = 'Dark Mode';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggleIcon) themeToggleIcon.className = 'ri-sun-line';
      if (themeToggleText) themeToggleText.textContent = 'Light Mode';
    }
  }

  const savedTheme = localStorage.getItem('mitesh_card_theme') || 'dark';
  applyTheme(savedTheme);

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('mitesh_card_theme', nextTheme);
      applyTheme(nextTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 8. Consultation Form Handler
  // --------------------------------------------------------------------------
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || '';
      const email = document.getElementById('clientEmail')?.value || '';
      const area = document.getElementById('consultingArea')?.value || '';

      if (!name || !email) {
        showToast('Please fill in required fields');
        return;
      }

      showToast(`Thank you, ${name}! Your consultation request has been received.`);
      consultationForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Toast Notification Helper
  // --------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastText = document.getElementById('toastMessage');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }

  // --------------------------------------------------------------------------
  // 10. Keyboard Accessibility (Escape closes modals)
  // --------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeShareModalPopup();
    }
  });

  console.log('Mitesh Ladva — Executive Digital Business Card initialized.');
});
