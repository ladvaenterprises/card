import React from 'react';
import { Phone, MessageSquare, UserCheck } from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';
import { downloadVCard } from '../utils/vcfGenerator';
import { openWhatsAppChat } from '../utils/whatsappShare';

interface MobileActionBarProps {
  onShowToast: (msg: string) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onShowToast }) => {
  const { contact } = MITESH_CONFIG;

  const handleSaveContact = () => {
    downloadVCard(() => {
      onShowToast('Contact downloaded (.vcf)! Tap to save to your phonebook.');
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-950/95 backdrop-blur-xl border-t border-navy-750/90 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={`tel:${contact.phoneInternational}`}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-navy-850 hover:bg-navy-800 text-ivory-100 border border-navy-700/80 active:scale-95 transition-transform"
          aria-label="Direct Call Mitesh Ladva"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={() => openWhatsAppChat()}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/40 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </button>

        {/* Save Contact Button */}
        <button
          onClick={handleSaveContact}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 shadow-gold-glow active:scale-95 transition-transform"
          aria-label="Save Contact vCard"
        >
          <UserCheck className="w-4 h-4 text-navy-950 stroke-[2.5]" />
          <span className="text-[11px] font-black tracking-tight">Save Contact</span>
        </button>

      </div>
    </div>
  );
};

