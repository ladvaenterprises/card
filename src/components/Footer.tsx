import React from 'react';
import { Phone, Mail, Globe, ArrowUp, UserCheck, Download, Share2 } from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';
import { downloadVCard } from '../utils/vcfGenerator';
import { downloadDigitalVisitingCard } from '../utils/cardCanvasGenerator';
import { sharePortfolioViaWhatsApp } from '../utils/whatsappShare';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const { profile, contact } = MITESH_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveContact = () => {
    downloadVCard(() => {
      onShowToast('Contact downloaded (.vcf)! Tap to save to phonebook.');
    });
  };

  const handleDownloadCard = async () => {
    onShowToast('Generating visiting card...');
    await downloadDigitalVisitingCard(() => {
      onShowToast('Visiting Card downloaded successfully!');
    });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-ivory-100 pt-16 pb-28 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          
          {/* Brand Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 p-[1.5px] shadow-gold-glow">
                <div className="w-full h-full bg-navy-900 rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-bold text-base text-gold-400">ML</span>
                </div>
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white">
                  {profile.fullName}
                </p>
                <p className="text-xs text-gold-400 font-semibold tracking-wider uppercase">
                  {profile.title} • {profile.company}
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-300 leading-relaxed max-w-sm">
              Strategic business advisory, data modernization, and enterprise restructuring. Delivering measurable commercial returns and institutional resilience for high-growth enterprises.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={handleSaveContact}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-semibold transition-colors"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Save Contact (.vcf)</span>
              </button>

              <button
                onClick={handleDownloadCard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-ivory-200 border border-navy-700 text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Card</span>
              </button>

              <button
                onClick={() => sharePortfolioViaWhatsApp()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-600/30 text-xs font-semibold transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Practices
            </h4>
            <ul className="space-y-2 text-xs text-muted-300">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Management Consulting</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Strategy & Growth</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">IT & Digital Transformation</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">HR & Talent Strategy</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Legal & Compliance</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Financial Advisory</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-muted-300">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Executive Summary</a></li>
              <li><a href="#digital-card" className="hover:text-gold-400 transition-colors">Digital Visiting Card</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Mitesh Ladva</a></li>
              <li><a href="#methodology" className="hover:text-gold-400 transition-colors">4-Step Methodology</a></li>
              <li><a href="#industries" className="hover:text-gold-400 transition-colors">Sectors Advised</a></li>
              <li><a href="#achievements" className="hover:text-gold-400 transition-colors">Verified Impact</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          {/* Direct Verification */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-muted-300">
              <a href={`tel:${contact.phoneInternational}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="font-mono">{contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contact.primaryEmail}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors break-all">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{contact.primaryEmail}</span>
              </a>
              <a href={contact.companyWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>ladvaenterprises.com</span>
              </a>
              <p className="text-[11px] text-muted-500 pt-1">
                {contact.addressDisplay}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-500">
          <p>© {new Date().getFullYear()} Mitesh Ladva. Founder & Managing Partner, Ladva Enterprises. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Strict Confidentiality Maintained</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-850 hover:bg-navy-800 text-muted-300 hover:text-gold-400 transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

