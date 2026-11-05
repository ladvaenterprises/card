import React from 'react';
import { Search, Compass, Cog, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';

const stepIcons = [Search, Compass, Cog, TrendingUp];

export const MethodologySection: React.FC = () => {
  const { methodology } = MITESH_CONFIG;

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Proven 4-Stage Consulting Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Consulting Methodology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-300">
            A structured, battle-tested framework engineered to eliminate operational friction and deliver verifiable compound returns.
          </p>
        </div>

        {/* 4-Step Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {methodology.map((item, index) => {
            const IconComp = stepIcons[index] || Search;
            return (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-gradient-to-b from-navy-850 to-navy-900 border border-navy-750 hover:border-gold-500/50 shadow-navy-elevated hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-gold-500/40 group-hover:text-gold-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-400 mt-1 uppercase tracking-wider">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-6 pt-4 border-t border-navy-800 space-y-1.5">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-400">Key Outcomes:</p>
                    {item.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-ivory-200">
                        <CheckCircle className="w-3 h-3 text-gold-400 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-navy-850 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

