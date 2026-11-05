/**
 * MITESH LADVA — EXECUTIVE DIGITAL BUSINESS CARD ENGINE
 * Color Palette: Light Blue, Pure White, and Deep Slate Teal (#18343f)
 * Target URL: https://card.ladvaenterprises.com/
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Central Profile Configuration
  // --------------------------------------------------------------------------
  const CONFIG = {
    fullName: "Mitesh Ladva",
    firstName: "Mitesh",
    lastName: "Ladva",
    title: "Founder",
    professionalBadge: "AI & Technology Consultant",
    vcardTitle: "AI & Tech Consultant | ISO Certification | Digital Transformation",
    company: "Ladva Enterprises",
    quote: "Make your life easy with us",
    oneLineHeadline: "Empowering high-growth enterprises and mid-market leaders through strategic vision, operational excellence, and measurable financial ROI.",
    phoneDisplay: "+91 95948 89811",
    phoneClean: "9594889811",
    phoneInternational: "+919594889811",
    whatsappClean: "919594889811",
    email: "info@ladvaenterprises.com",
    addressDisplay: "Mumbai, Maharashtra, India",
    companyWebsite: "https://ladvaenterprises.com/",
    cardWebsite: "https://card.ladvaenterprises.com/",
    linkedinUrl: "https://www.linkedin.com/in/miteshladva/",
    photoUrl: "assets/profile.png",
    logoUrl: "assets/ladva-logo.png",
    vcfFileName: "Mitesh_Ladva.vcf",
    cardFileName: "Mitesh_Ladva_Visiting_Card.png",
  };

  const activeUrl = CONFIG.cardWebsite;

  // --------------------------------------------------------------------------
  // 2. Section Tab Navigation
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

  // Switch to specific tab from in-card triggers
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
  // 3. Accordion / Dropdown Feature for Services (Consulting, ISO, Training)
  // --------------------------------------------------------------------------
  const accordionHeaders = document.querySelectorAll('.service-accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      // Optionally close other accordions
      document.querySelectorAll('.service-accordion-item').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Dynamic QR Code Generation (Pointing to card.ladvaenterprises.com)
  // --------------------------------------------------------------------------
  const qrContainer = document.getElementById('qrCodeContainer');

  function renderQRCode() {
    if (typeof QRCode === 'undefined' || !qrContainer) return;
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
      text: CONFIG.cardWebsite,
      width: 200,
      height: 200,
      colorDark: "#18343f",
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

    // Slate Teal Background #18343f
    ctx.fillStyle = '#18343f';
    ctx.fillRect(0, 0, size, height);

    // Light Blue Border
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.strokeRect(16, 16, size - 32, height - 32);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(24, 24, size - 48, height - 48);

    // Header branding
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('LADVA ENTERPRISES', size / 2, 64);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(CONFIG.fullName, size / 2, 104);

    ctx.fillStyle = '#e0f2fe';
    ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(CONFIG.vcardTitle, size / 2, 132);

    // White box for QR code
    const boxSize = 400;
    const boxX = (size - boxSize) / 2;
    const boxY = 166;

    ctx.fillStyle = '#ffffff';
    ctx.roundRect(boxX, boxY, boxSize, boxSize, 16);
    ctx.fill();

    // Draw QR
    const qrPad = 24;
    ctx.drawImage(canvas, boxX + qrPad, boxY + qrPad, boxSize - qrPad * 2, boxSize - qrPad * 2);

    // Footer instruction
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('SCAN TO SAVE CONTACT', size / 2, boxY + boxSize + 48);

    ctx.fillStyle = '#ffffff';
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(CONFIG.cardWebsite, size / 2, boxY + boxSize + 74);

    // Download
    const link = document.createElement('a');
    link.download = 'Mitesh_Ladva_QR.png';
    link.href = exportCanvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Branded QR Code downloaded!');
  }

  const btnDownloadQR = document.getElementById('btnDownloadQR');
  if (btnDownloadQR) btnDownloadQR.addEventListener('click', downloadQRCodeImage);

  // --------------------------------------------------------------------------
  // 5. One-Click Save Contact (.vcf) Generator
  // Exact user requested vCard fields
  // --------------------------------------------------------------------------
  function downloadVCard() {
    const vCardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${CONFIG.lastName};${CONFIG.firstName};;;`,
      `FN:${CONFIG.fullName}`,
      `ORG:${CONFIG.company}`,
      `TITLE:${CONFIG.vcardTitle}`,
      `TEL;TYPE=CELL,VOICE,PREF:${CONFIG.phoneInternational}`,
      `TEL;TYPE=WORK,VOICE:${CONFIG.phoneInternational}`,
      `EMAIL;TYPE=INTERNET,WORK,PREF:${CONFIG.email}`,
      `URL;TYPE=WORK:${CONFIG.companyWebsite}`,
      `URL;TYPE=PREF:${CONFIG.cardWebsite}`,
      `X-SOCIALPROFILE;TYPE=linkedin:${CONFIG.linkedinUrl}`,
      `ADR;TYPE=WORK,POSTAL,PARCEL:;;Mumbai;Maharashtra;;India`,
      `NOTE:${CONFIG.quote} | ${CONFIG.vcardTitle}`,
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

    showToast('Contact file downloaded! Tap to save in your phonebook.');
  }

  const heroSaveBtn = document.getElementById('heroSaveContactBtn');
  const bottomSaveBtn = document.getElementById('bottomSaveBtn');
  const tabSaveBtn = document.getElementById('tabSaveContactBtn');

  if (heroSaveBtn) heroSaveBtn.addEventListener('click', downloadVCard);
  if (bottomSaveBtn) bottomSaveBtn.addEventListener('click', downloadVCard);
  if (tabSaveBtn) tabSaveBtn.addEventListener('click', downloadVCard);

  // --------------------------------------------------------------------------
  // 6. Download High-Res Digital Visiting Card Image (Canvas PNG)
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

    // Background Gradient: Deep Slate Teal #18343f to #0e2027
    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, '#18343f');
    bg.addColorStop(0.6, '#142b34');
    bg.addColorStop(1, '#0c1a20');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    // Subtle aesthetic geometric background lines (soft light blue)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    for (let x = -width; x < width * 2; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + height, height);
      ctx.stroke();
    }

    // Outer Crisp Light Blue Border
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Corner decorative accents
    const cSize = 24;
    ctx.fillStyle = '#38bdf8';
    [[30, 30, 1, 1], [width - 30, 30, -1, 1], [30, height - 30, 1, -1], [width - 30, height - 30, -1, -1]].forEach(([x, y, dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx * cSize, y);
      ctx.lineTo(x, y + dy * cSize);
      ctx.fill();
    });

    // Profile Photo Frame with Light Blue Ring
    const photoSize = 240;
    const photoX = 80;
    const photoY = 130;

    ctx.strokeStyle = '#38bdf8';
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
    ctx.fillStyle = '#0284c7';
    ctx.roundRect(photoX + 10, photoY + photoSize + 22, photoSize - 20, 36, 18);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('AI & TECHNOLOGY CONSULTANT', photoX + photoSize / 2, photoY + photoSize + 45);

    // Details Block
    const textX = 370;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('LADVA ENTERPRISES', textX, 115);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('“Make your life easy with us”', textX, 138);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(CONFIG.fullName, textX, 195);

    ctx.fillStyle = '#7dd3fc';
    ctx.font = '600 17px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Founder • ' + CONFIG.vcardTitle, textX, 230);

    // Sky blue accent line
    const gradLine = ctx.createLinearGradient(textX, 252, textX + 460, 252);
    gradLine.addColorStop(0, '#38bdf8');
    gradLine.addColorStop(0.7, '#0284c7');
    gradLine.addColorStop(1, 'transparent');
    ctx.strokeStyle = gradLine;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(textX, 252);
    ctx.lineTo(textX + 460, 252);
    ctx.stroke();

    // Contact Rows
    const contactStartY = 300;
    const list = [
      { label: 'CALL', val: CONFIG.phoneDisplay },
      { label: 'EMAIL', val: CONFIG.email },
      { label: 'WEBSITE', val: CONFIG.companyWebsite },
      { label: 'ADDRESS', val: CONFIG.addressDisplay }
    ];

    list.forEach((item, idx) => {
      const y = contactStartY + idx * 42;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(textX + 8, y - 6, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item.val, textX + 28, y);
    });

    // Practice Areas Strip
    const pillsY = 495;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.roundRect(textX, pillsY, 520, 85, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CORE EXPERTISE:', textX + 16, pillsY + 26);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('1. Consulting (Management, Strategy, IT, HR, Legal, Financial)', textX + 16, pillsY + 46);
    ctx.fillText('2. ISO Certification (9001, 14001, 45001)  |  3. Training (Excel, Power BI, Tableau)', textX + 16, pillsY + 68);

    // QR Code Box on the Right
    const qrCanvas = qrContainer ? qrContainer.querySelector('canvas') : null;
    const qrBoxSize = 190;
    const qrX = width - qrBoxSize - 75;
    const qrY = 145;

    ctx.fillStyle = '#FFFFFF';
    ctx.roundRect(qrX, qrY, qrBoxSize, qrBoxSize, 14);
    ctx.fill();

    if (qrCanvas) {
      const qrPad = 14;
      ctx.drawImage(qrCanvas, qrX + qrPad, qrY + qrPad, qrBoxSize - qrPad * 2, qrBoxSize - qrPad * 2);
    }

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SCAN TO CONNECT', qrX + qrBoxSize / 2, qrY + qrBoxSize + 26);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('card.ladvaenterprises.com', qrX + qrBoxSize / 2, qrY + qrBoxSize + 44);

    // Download trigger
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
  // 7. Share Modal & Forward via WhatsApp
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

  const whatsappMessage = 
    `*🏛️ Mitesh Ladva - Founder*\n` +
    `*Ladva Enterprises*\n` +
    `_"Make your life easy with us"_\n\n` +
    `💼 *AI & Technology Consultant | ISO Certification | Digital Transformation*\n\n` +
    `• Consulting (Management, Strategy, IT, HR, Legal, Financial)\n` +
    `• ISO Certification (ISO 9001:2015, ISO 14001:2015, ISO 45001:2018)\n` +
    `• Training (Advanced Excel, Power BI, Tableau)\n\n` +
    `📞 *Call:* ${CONFIG.phoneDisplay}\n` +
    `✉️ *Email:* ${CONFIG.email}\n` +
    `🌐 *Digital Card:* ${CONFIG.cardWebsite}\n` +
    `🏢 *Website:* ${CONFIG.companyWebsite}`;

  const modalShareWhatsapp = document.getElementById('modalShareWhatsapp');
  if (modalShareWhatsapp) {
    modalShareWhatsapp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
  }

  const modalShareLinkedin = document.getElementById('modalShareLinkedin');
  if (modalShareLinkedin) {
    modalShareLinkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(CONFIG.cardWebsite)}`;
  }

  const modalShareEmail = document.getElementById('modalShareEmail');
  if (modalShareEmail) {
    modalShareEmail.href = `mailto:?subject=${encodeURIComponent("Digital Visiting Card — Mitesh Ladva")}&body=${encodeURIComponent(whatsappMessage)}`;
  }

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
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(CONFIG.cardWebsite)
        .then(() => showToast('Card link copied to clipboard!'))
        .catch(() => fallbackClipboardCopy(CONFIG.cardWebsite));
    } else {
      fallbackClipboardCopy(CONFIG.cardWebsite);
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
      showToast('Card link copied to clipboard!');
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
  if (displayProfileUrl) displayProfileUrl.textContent = CONFIG.cardWebsite;
  if (modalCopyUrlInput) modalCopyUrlInput.value = CONFIG.cardWebsite;

  // --------------------------------------------------------------------------
  // 8. Consultation Form Handler
  // Fields: Name, Email ID, Mobile No, Area of Interest
  // --------------------------------------------------------------------------
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || '';
      const email = document.getElementById('clientEmail')?.value || '';
      const phone = document.getElementById('clientPhone')?.value || '';
      const area = document.getElementById('consultingArea')?.value || '';

      if (!name || !email || !phone) {
        showToast('Please fill in Name, Email ID, and Mobile No');
        return;
      }

      // Pre-filled WhatsApp transmission option
      const userMsg = 
        `Hello Mitesh,\n` +
        `I would like to book a consultation regarding *${area}*.\n\n` +
        `• Name: ${name}\n` +
        `• Email: ${email}\n` +
        `• Mobile: ${phone}\n` +
        `• Area: ${area}`;

      const waUrl = `https://wa.me/${CONFIG.whatsappClean}?text=${encodeURIComponent(userMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      showToast(`Thank you, ${name}! Consultation brief sent via WhatsApp.`);
      consultationForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Toast Helper
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeShareModalPopup();
    }
  });

  console.log('Mitesh Ladva — Executive Digital Business Card initialized.');
});
