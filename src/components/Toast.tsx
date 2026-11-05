import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-50 animate-fade-in max-w-sm">
      <div className="bg-navy-850/95 border border-gold-500/50 shadow-gold-glow backdrop-blur-md text-ivory-100 px-4 py-3 rounded-xl flex items-center gap-3">
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
        ) : (
          <Info className="w-5 h-5 text-gold-400 shrink-0" />
        )}
        <p className="text-sm font-medium leading-snug">{message}</p>
        <button
          onClick={onClose}
          className="text-muted-400 hover:text-white transition-colors ml-auto p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

