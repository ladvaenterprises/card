import { MITESH_CONFIG } from '../config/miteshData';

/**
 * Generates and downloads a standardized RFC 2426 vCard 3.0 file
 * Compatible with both iOS (Apple Contacts) and Android (Google Contacts)
 */
export function generateVCardString(): string {
  const { profile, contact } = MITESH_CONFIG;

  const vCardLines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${profile.lastName};${profile.firstName};;;`,
    `FN:${profile.fullName}`,
    `ORG:${profile.company};Strategic Consulting`,
    `TITLE:${profile.title}`,
    `ROLE:Strategic Consultant & Managing Partner`,
    `TEL;TYPE=CELL,VOICE,PREF:${contact.phoneInternational}`,
    `TEL;TYPE=WORK,VOICE:${contact.phoneInternational}`,
    `EMAIL;TYPE=INTERNET,WORK,PREF:${contact.primaryEmail}`,
    `EMAIL;TYPE=INTERNET,HOME:${contact.personalEmail}`,
    `URL;TYPE=WORK:${contact.companyWebsite}`,
    `URL;TYPE=PREF:${contact.portfolioWebsite}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${contact.linkedinUrl}`,
    `ADR;TYPE=WORK,POSTAL,PARCEL:;;${contact.city};${contact.state};;${contact.country}`,
    `NOTE:Founder & Managing Partner at Ladva Enterprises. Strategic consulting, digital transformation, enterprise BI & operational growth. Phone: ${contact.phoneDisplay} | Email: ${contact.primaryEmail}`,
    'REV:' + new Date().toISOString().replace(/[-:.]/g, ''),
    'END:VCARD'
  ];

  return vCardLines.join('\r\n');
}

export function downloadVCard(onSuccess?: () => void): boolean {
  try {
    const vCardString = generateVCardString();
    const blob = new Blob([vCardString], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', MITESH_CONFIG.contact.vcfFileName);
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1500);

    if (onSuccess) onSuccess();
    return true;
  } catch (err) {
    console.error('Failed to generate vCard:', err);
    return false;
  }
}

