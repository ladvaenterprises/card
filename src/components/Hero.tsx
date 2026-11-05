import React from 'react';
import { Phone, MessageSquare, Download, ArrowRight, ShieldCheck, Award, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';
import { downloadVCard } from '../utils/vcfGenerator';
import { downloadDigitalVisitingCard } from '../utils/cardCanvasGenerator';
import { openWhatsAppChat } from '../utils/whatsappShare';

interface HeroProps {
  onShowToast: (msg: string) => void;
  onOpenCardModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowToast }) => {
  const { profile, contact } = MITESH_CONFIG;

  const handleSaveContact = () => {
    downloadVCard(() => {
      onShowToast('Contact file downloaded! Tap to save in your phonebook.');
    });
  };

  const handleDownloadCard = async () => {
    onShowToast('Generating high-resolution digital visiting card...');
    await downloadDigitalVisitingCard(() => {
      onShowToast('Visiting Card downloaded successfully!');
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-navy-mesh">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-navy-700/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Credibility Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wide mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>ESTD 2018 • MUMBAI, INDIA</span>
              <span className="w-1 h-1 rounded-full bg-gold-400/60" />
              <span className="text-ivory-200">STRATEGIC CONSULTING</span>
            </div>

            {/* Name & Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              {profile.fullName}
            </h1>
            
            <div className="mt-3 text-lg sm:text-xl font-semibold text-gold-400 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>{profile.title}</span>
              <span className="text-muted-500 hidden sm:inline">•</span>
              <span className="text-ivory-100 font-medium">{profile.company}</span>
            </div>

            {/* Headline */}
            <p className="mt-5 text-xl sm:text-2xl font-normal text-ivory-200 max-w-2xl leading-relaxed">
              Transforming mid-market enterprises through <span className="text-gold-300 font-semibold">strategic vision</span>, operational rigor, and <span className="text-gold-300 font-semibold">measurable execution</span>.
            </p>

            {/* Short Bio */}
            <p className="mt-4 text-sm sm:text-base text-muted-300 max-w-2xl leading-relaxed">
              {profile.shortBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-sm tracking-wide shadow-gold-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Save Contact Button */}
              <button
                onClick={handleSaveContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-gold-300 hover:text-white border border-gold-500/40 hover:border-gold-400 font-semibold text-sm transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>Save Contact (.vcf)</span>
              </button>

              {/* Download Digital Card */}
              <button
                onClick={handleDownloadCard}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-navy-850 hover:bg-navy-800 text-ivory-100 border border-navy-700 hover:border-navy-600 font-medium text-sm transition-all duration-200"
              >
                <span>Download Digital Card</span>
              </button>
            </div>

            {/* Quick Contact Action Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 border-t border-navy-800/80 w-full max-w-xl">
              <a
                href={`tel:${contact.phoneInternational}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-navy-800/60 hover:bg-navy-800 text-xs font-medium text-ivory-100 hover:text-gold-300 border border-navy-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{contact.phoneDisplay}</span>
              </a>

              <button
                onClick={() => openWhatsAppChat()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/40 text-xs font-medium text-emerald-300 border border-emerald-600/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </button>

              <div className="inline-flex items-center gap-1.5 text-xs text-muted-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>4-Hr Response SLA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Photo & Executive Card Visual (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glowing Metallic Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-500/20 via-gold-400/10 to-navy-700/40 rounded-3xl blur-xl" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-navy-800 via-navy-850 to-navy-950 p-2 sm:p-2.5 border border-gold-500/40 shadow-navy-elevated">
                
                {/* Photo container */}
                <div className="relative rounded-xl overflow-hidden bg-navy-900 aspect-[3/4] w-full">
                  <img
                    src={profile.photoUrl}
                    alt={profile.fullName}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle gradient vignette at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                  {/* Corner Brand Stamp */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-navy-900/90 backdrop-blur-md border border-gold-500/40 text-[10px] font-bold tracking-wider text-gold-400 uppercase">
                    Ladva Enterprises
                  </div>

                  {/* Bottom Float Card on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-navy-900/90 backdrop-blur-md border border-gold-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm leading-tight">
                          {profile.fullName}
                        </p>
                        <p className="text-gold-400 text-xs font-medium">
                          {profile.title}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-400/40">
                        <Award className="w-4 h-4 text-gold-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Credibility Pills Below Photo */}
                <div className="mt-2.5 grid grid-cols-2 gap-2 text-center">
                  <div className="py-2 px-2.5 rounded-lg bg-navy-800/80 border border-navy-700">
                    <p className="text-gold-400 font-bold text-sm sm:text-base">20+ Years</p>
                    <p className="text-[10px] text-muted-400 uppercase tracking-wider font-semibold">Consulting Track Record</p>
                  </div>
                  <div className="py-2 px-2.5 rounded-lg bg-navy-800/80 border border-navy-700">
                    <p className="text-gold-400 font-bold text-sm sm:text-base">₹2,400Cr+</p>
                    <p className="text-[10px] text-muted-400 uppercase tracking-wider font-semibold">Client Value Created</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Credibility Strip */}
        <div className="mt-14 pt-8 border-t border-navy-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="font-heading font-bold text-xl sm:text-2xl text-white">20+ Years</p>
              <p className="text-xs text-muted-400">Strategic Advisory</p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="font-heading font-bold text-xl sm:text-2xl text-white">200+ Projects</p>
              <p className="text-xs text-muted-400">Enterprise Engagements</p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="font-heading font-bold text-xl sm:text-2xl text-white">4.8x</p>
              <p className="text-xs text-muted-400">Average Client ROI</p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-heading font-bold text-xl sm:text-2xl text-white">98%</p>
              <p className="text-xs text-muted-400">Client Satisfaction</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

