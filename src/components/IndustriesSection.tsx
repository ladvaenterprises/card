import React from 'react';
import { 
  Factory, 
  Truck, 
  Zap, 
  HeartPulse, 
  ShoppingBag, 
  Landmark, 
  Wallet, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';

const industryIcons: Record<string, React.ElementType> = {
  Factory,
  Truck,
  Zap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Wallet,
  GraduationCap
};

export const IndustriesSection: React.FC = () => {
  const { industries } = MITESH_CONFIG;

  return (
    <section id="industries" className="py-20 lg:py-28 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sector-Specific Depth</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Industries & Domain Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-300">
            Context-rich advisory designed for the regulatory, operational, and supply-chain realities of each core industry vertical.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const IconComp = industryIcons[ind.icon] || Factory;
            return (
              <div
                key={ind.id}
                className="group p-6 rounded-2xl bg-navy-900 border border-navy-750 hover:border-gold-500/40 shadow-navy-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-muted-300 mt-2.5 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-navy-800">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block mb-0.5">
                    Observed Impact
                  </span>
                  <p className="text-xs font-semibold text-ivory-100">
                    {ind.impactHighlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

