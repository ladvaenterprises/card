import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Download, 
  QrCode, 
  Share2, 
  Copy, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Send, 
  Wifi, 
  RotateCw,
  Sparkles,
  Check
} from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';
import { downloadVCard } from '../utils/vcfGenerator';
import { downloadDigitalVisitingCard } from '../utils/cardCanvasGenerator';
import { generateQRCodeDataUrl, downloadBrandedQRCode } from '../utils/qrGenerator';
import { sharePortfolioViaWhatsApp, copyToClipboard } from '../utils/whatsappShare';

interface DigitalCardSectionProps {
  onShowToast: (msg: string) => void;
}

export const DigitalCardSection: React.FC<DigitalCardSectionProps> = ({ onShowToast }) => {
  const { profile, contact } = MITESH_CONFIG;
  const [isFlipped, setIsFlipped] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [forwardNumber, setForwardNumber] = useState('');
  const [isGeneratingCard, setIsGeneratingCard] = useState(false);

  useEffect(() => {
    // Generate QR code for the portfolio URL
    generateQRCodeDataUrl(contact.portfolioWebsite, {
      width: 260,
      margin: 1,
      colorDark: '#101B2D',
      colorLight: '#FFFFFF',
    })
      .then(setQrCodeDataUrl)
      .catch((err) => console.error('Failed to generate initial QR:', err));
  }, [contact.portfolioWebsite]);

  const handleSaveContact = () => {
    downloadVCard(() => {
      onShowToast('Contact file downloaded (.vcf). Tap to add Mitesh Ladva to your contacts!');
    });
  };

  const handleDownloadCard = async () => {
    setIsGeneratingCard(true);
    onShowToast('Preparing high-resolution executive visiting card...');
    try {
      await downloadDigitalVisitingCard(() => {
        onShowToast('Digital Visiting Card downloaded successfully!');
      });
    } catch {
      onShowToast('Could not download card. Please try again.');
    } finally {
      setIsGeneratingCard(false);
    }
  };

  const handleDownloadQR = async () => {
    onShowToast('Exporting high-resolution QR badge...');
    try {
      await downloadBrandedQRCode(
        contact.portfolioWebsite,
        profile.fullName,
        profile.title,
        profile.company,
        'Mitesh_Ladva_Executive_QR.png'
      );
      onShowToast('QR Code badge downloaded successfully!');
    } catch {
      onShowToast('Failed to download QR code.');
    }
  };

  const handleCopyLink = async () => {
    const success = await copyToClipboard(contact.portfolioWebsite);
    if (success) {
      setCopied(true);
      onShowToast('Portfolio link copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } else {
      onShowToast('Failed to copy. Please copy URL manually.');
    }
  };

  const handleForwardWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forwardNumber.trim()) {
      onShowToast('Please enter a 10-digit mobile number');
      return;
    }
    sharePortfolioViaWhatsApp(forwardNumber);
    setForwardNumber('');
    onShowToast('Opening WhatsApp to send digital card...');
  };

  return (
    <section id="digital-card" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Identity & NFC Card</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Executive Digital Business Card
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-300">
            Instantly connect, save Mitesh Ladva's verified contact directly to your smartphone phonebook, or download the executive visiting card.
          </p>
        </div>

        {/* Priority 1: Top 2 Highlighted Action Buttons */}
        <div className="max-w-2xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={handleSaveContact}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <UserCheck className="w-5 h-5 text-navy-950 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-xs uppercase tracking-wider text-navy-900/80 font-bold">1-Click Action</span>
              <span className="text-base font-extrabold tracking-tight">SAVE CONTACT (.VCF)</span>
            </div>
          </button>

          <button
            onClick={handleDownloadCard}
            disabled={isGeneratingCard}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-navy-800 hover:bg-navy-750 text-white hover:text-gold-300 border border-gold-500/40 hover:border-gold-400 font-bold text-base shadow-navy-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group disabled:opacity-75"
          >
            <Download className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-xs uppercase tracking-wider text-muted-400 font-semibold">High-Res PNG</span>
              <span className="text-base font-extrabold tracking-tight">DOWNLOAD DIGITAL CARD</span>
            </div>
          </button>
        </div>

        {/* Main Interactive Grid: Interactive Card & Action Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card Visualizer (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Card Flip Controller */}
            <div className="w-full flex items-center justify-between mb-4 max-w-lg">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-400">
                Interactive NFC Card Preview
              </span>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-800 text-xs font-medium text-gold-400 hover:text-white border border-navy-700 hover:border-gold-500/40 transition-colors"
              >
                <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
                <span>{isFlipped ? 'Show Card Front' : 'Show Card Back (QR)'}</span>
              </button>
            </div>

            {/* The 3D Flip Card Container */}
            <div className="w-full max-w-lg [perspective:1200px]">
              <div 
                className={`relative w-full aspect-[1.75/1] transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer rounded-2xl shadow-navy-elevated group`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                
                {/* ──────────────── FRONT OF CARD ──────────────── */}
                <div 
                  className={`absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 border-2 border-gold-500/50 [backface-visibility:hidden] flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 ${
                    isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  {/* Subtle geometric line pattern inside card */}
                  <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(45deg,#C9A96E_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl" />

                  {/* Top Bar: Company Monogram & NFC Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                        <span className="font-heading font-bold text-xs text-gold-400">LE</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold tracking-widest text-gold-400 uppercase leading-none">
                          Ladva Enterprises
                        </p>
                        <p className="text-[9px] text-muted-400 tracking-wider">Strategic Consulting</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gold-500/60">
                      <Wifi className="w-5 h-5 rotate-90 text-gold-400" />
                      <span className="text-[10px] font-mono tracking-widest text-gold-400/80">NFC</span>
                    </div>
                  </div>

                  {/* Middle: Portrait & Executive Details */}
                  <div className="relative z-10 flex items-center gap-4 sm:gap-5 my-auto">
                    {/* Portrait in Gold Rim */}
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-gold-400 via-gold-500 to-gold-700 shadow-gold-glow">
                        <img
                          src={profile.photoUrl}
                          alt={profile.fullName}
                          className="w-full h-full rounded-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-navy-900 border border-gold-400 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-gold-400" />
                      </div>
                    </div>

                    {/* Name & Credentials */}
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight truncate">
                        {profile.fullName}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-gold-400 truncate">
                        {profile.title}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-300 mt-0.5 truncate">
                        20+ Years Strategic Advisory • Mumbai
                      </p>
                    </div>
                  </div>

                  {/* Bottom Bar: Contact Info Strip */}
                  <div className="relative z-10 pt-3 border-t border-navy-700/60 flex items-center justify-between text-[11px] sm:text-xs text-muted-300">
                    <span className="flex items-center gap-1.5 font-mono text-ivory-100">
                      <Phone className="w-3 h-3 text-gold-400" />
                      {contact.phoneDisplay}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-gold-400/90 truncate max-w-[160px] sm:max-w-[200px]">
                      <Mail className="w-3 h-3 text-gold-400 shrink-0" />
                      {contact.primaryEmail}
                    </span>
                  </div>
                </div>

                {/* ──────────────── BACK OF CARD ──────────────── */}
                <div 
                  className={`absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-7 bg-gradient-to-tl from-navy-950 via-navy-900 to-navy-850 border-2 border-gold-500/50 [backface-visibility:hidden] flex items-center justify-between gap-5 overflow-hidden shadow-2xl transition-all duration-300 ${
                    !isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gold-400">
                        Scan & Connect
                      </p>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-white mt-1">
                        Instant Contact Add
                      </h4>
                      <p className="text-[11px] text-muted-300 mt-1 leading-relaxed">
                        Point your mobile camera to scan and save Mitesh's contact directly into your address book.
                      </p>
                    </div>

                    <div className="space-y-1 text-[10px] text-muted-400">
                      <p className="flex items-center gap-1 text-ivory-200">
                        <Globe className="w-3 h-3 text-gold-400" />
                        <span>ladvaenterprises.com</span>
                      </p>
                      <p className="flex items-center gap-1 text-ivory-200">
                        <MapPin className="w-3 h-3 text-gold-400" />
                        <span>Mumbai, Maharashtra, India</span>
                      </p>
                    </div>
                  </div>

                  {/* Scannable QR code on back of card */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="p-2 bg-white rounded-xl shadow-lg border-2 border-gold-400/50">
                      {qrCodeDataUrl ? (
                        <img
                          src={qrCodeDataUrl}
                          alt="QR Code"
                          className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                        />
                      ) : (
                        <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-gray-100 rounded-lg">
                          <QrCode className="w-8 h-8 text-navy-900 animate-pulse" />
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] font-bold text-gold-400 mt-1.5 uppercase tracking-wider">
                      Tap card to flip
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <p className="mt-3 text-xs text-muted-400 flex items-center gap-1">
              <span>💡</span> Click anywhere on the card to flip between front and back
            </p>

            {/* Quick Share Pills below card */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => sharePortfolioViaWhatsApp()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all hover:scale-[1.02]"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share via WhatsApp</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-750 text-ivory-200 hover:text-white border border-navy-700 text-xs font-semibold transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gold-400" />}
                <span>{copied ? 'Link Copied!' : 'Copy Profile Link'}</span>
              </button>

              <button
                onClick={handleDownloadQR}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-750 text-ivory-200 hover:text-white border border-navy-700 text-xs font-semibold transition-all"
              >
                <QrCode className="w-3.5 h-3.5 text-gold-400" />
                <span>Download QR Badge</span>
              </button>
            </div>

          </div>

          {/* Right Column: QR Code Stand & Direct WhatsApp Forwarder (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Dedicated "Scan to Save Contact" Section */}
            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-700/80 shadow-navy-elevated">
              <div className="flex items-start gap-4">
                {/* QR Code Container */}
                <div className="p-2.5 bg-white rounded-xl shrink-0 shadow-md border-2 border-gold-500/30">
                  {qrCodeDataUrl ? (
                    <img
                      src={qrCodeDataUrl}
                      alt="Scan to Save Contact"
                      className="w-24 h-24 object-contain"
                    />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-50 rounded">
                      <QrCode className="w-8 h-8 text-navy-900 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Information */}
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Scan to Save Contact
                  </h3>
                  <p className="text-xs text-muted-300 mt-1 leading-relaxed">
                    Open your smartphone camera (iOS or Android) and point it at the code to instantly save Mitesh's contact or view this profile.
                  </p>
                  <button
                    onClick={handleDownloadQR}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Branded QR Code</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Forwarder Form */}
            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-700/80 shadow-navy-elevated">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Forward Card to Mobile</span>
              </h3>
              <p className="text-xs text-muted-300 mt-1">
                Enter any 10-digit mobile number to send Mitesh Ladva's executive card and contact details via WhatsApp with one click.
              </p>

              <form onSubmit={handleForwardWhatsApp} className="mt-4 flex gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-400 text-xs font-mono font-medium">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={forwardNumber}
                    onChange={(e) => setForwardNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    maxLength={10}
                    className="w-full pl-12 pr-3 py-2.5 bg-navy-850 border border-navy-700 rounded-xl text-white text-xs placeholder:text-muted-500 focus:outline-none focus:border-gold-500 transition-colors font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>

            {/* Direct Contact Verification Card */}
            <div className="p-5 rounded-2xl bg-navy-850/60 border border-navy-800 text-xs space-y-2.5">
              <div className="flex items-center justify-between text-muted-300 pb-2 border-b border-navy-800">
                <span className="text-muted-400">Direct Mobile</span>
                <a href={`tel:${contact.phoneInternational}`} className="font-mono text-ivory-100 hover:text-gold-400 font-semibold">
                  {contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-between text-muted-300 pb-2 border-b border-navy-800">
                <span className="text-muted-400">Business Email</span>
                <a href={`mailto:${contact.primaryEmail}`} className="text-ivory-100 hover:text-gold-400 font-medium">
                  {contact.primaryEmail}
                </a>
              </div>
              <div className="flex items-center justify-between text-muted-300">
                <span className="text-muted-400">Headquarters</span>
                <span className="text-ivory-100 font-medium">{contact.addressDisplay}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

