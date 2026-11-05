import React, { useState, useEffect } from 'react';
import { Menu, X, UserCheck, Phone, MessageSquare, Download } from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';
import { downloadVCard } from '../utils/vcfGenerator';

interface HeaderProps {
  onShowToast: (msg: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowToast }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'digital-card', 'about', 'services', 'methodology', 'industries', 'achievements', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Digital Card', href: '#digital-card' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Industries', href: '#industries' },
    { label: 'Impact', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSaveContact = () => {
    downloadVCard(() => {
      onShowToast('Contact saved! Tap file to add Mitesh Ladva to your phonebook.');
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/90 backdrop-blur-md py-3 border-b border-navy-700/60 shadow-navy-elevated'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-transform duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-[1.5px] shadow-gold-glow">
              <div className="w-full h-full bg-navy-900 rounded-[7px] flex items-center justify-center">
                <span className="font-heading font-bold text-base text-gold-400 group-hover:text-gold-300">
                  ML
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                Mitesh Ladva
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-500/90">
                Ladva Enterprises
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-gold-400 bg-navy-800/80 shadow-inner'
                      : 'text-muted-300 hover:text-white hover:bg-navy-800/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${MITESH_CONFIG.contact.phoneInternational}`}
              className="p-2 text-muted-300 hover:text-gold-400 hover:bg-navy-800 rounded-lg transition-colors"
              title="Call Mitesh Ladva"
              aria-label="Call Mitesh Ladva"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={handleSaveContact}
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-semibold text-xs tracking-wide shadow-gold-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <UserCheck className="w-4 h-4" />
              <span>Save Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleSaveContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gold-500 text-navy-950 font-semibold text-xs sm:hidden"
              aria-label="Save contact to phone"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-muted-300 hover:text-white hover:bg-navy-800/80 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-xl border-b border-navy-700/80 px-6 py-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium rounded-lg text-ivory-100 hover:text-gold-400 hover:bg-navy-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-navy-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleSaveContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-sm shadow-gold-glow"
            >
              <UserCheck className="w-4 h-4" />
              <span>Save Contact to Phonebook (.vcf)</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${MITESH_CONFIG.contact.phoneInternational}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-navy-800 text-white text-xs font-medium border border-navy-700"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${MITESH_CONFIG.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600/20 text-emerald-300 text-xs font-medium border border-emerald-500/30"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

