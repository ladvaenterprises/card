import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Cpu, 
  Users, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  X,
  Sparkles
} from 'lucide-react';
import { MITESH_CONFIG, ServiceItem } from '../config/miteshData';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  TrendingUp,
  Cpu,
  Users,
  ShieldCheck,
  BarChart3
};

export const ServicesSection: React.FC = () => {
  const { services } = MITESH_CONFIG;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consulting Practice Areas</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Comprehensive Consulting Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-300">
            End-to-end strategic, operational, and digital solutions designed to drive sustainable competitive advantage and institutional resilience.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-750 hover:border-gold-500/50 shadow-navy-elevated hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Monogram */}
                  <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-400/90 mt-1 uppercase tracking-wider">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables snippet */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-navy-800/80">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ivory-200">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 group-hover:text-gold-300 transition-colors"
                  >
                    <span>View Full Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="#contact"
                    className="text-[11px] text-muted-400 hover:text-white font-medium"
                  >
                    Request Brief
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl rounded-2xl bg-navy-900 border border-gold-500/40 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-muted-400 hover:text-white hover:bg-navy-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                {React.createElement(iconMap[selectedService.icon] || Building2, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                  {selectedService.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-200 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <h4 className="text-xs uppercase font-bold tracking-wider text-gold-400 mb-3">
              Key Consulting Deliverables & Strategic Scope
            </h4>
            <div className="space-y-2.5 mb-8">
              {selectedService.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-navy-850 border border-navy-800 text-xs sm:text-sm text-ivory-100">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs sm:text-sm text-center shadow-gold-glow transition-all"
              >
                Inquire About {selectedService.title}
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-4 rounded-xl bg-navy-800 hover:bg-navy-750 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

