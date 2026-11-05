import React from 'react';
import { Star, ShieldCheck, Quote, Sparkles } from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';

export const TestimonialsSection: React.FC = () => {
  const { clientLogos, testimonials } = MITESH_CONFIG;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted By Industry Leaders</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Client Partnerships & Trust
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-300">
            Collaborating with leading enterprises across India to build resilient systems, optimize margins, and achieve scalable performance.
          </p>
        </div>

        {/* Clean, Premium Logo Wall */}
        <div className="p-8 sm:p-10 rounded-3xl bg-navy-900 border border-navy-750 shadow-navy-elevated mb-16">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-400 mb-8">
            Select Enterprises & Organizations Advised
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="w-full flex items-center justify-center p-4 rounded-xl bg-navy-850/60 hover:bg-navy-800 border border-navy-750/80 hover:border-gold-500/30 transition-all duration-300 group"
                title={client.name}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-12 w-auto max-w-[110px] object-contain filter grayscale invert opacity-75 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text badge if image fails to render
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const textSpan = document.createElement('span');
                      textSpan.className = 'font-bold text-xs text-gold-400 tracking-wider uppercase';
                      textSpan.innerText = client.name;
                      parent.appendChild(textSpan);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Executive Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-7 rounded-2xl bg-navy-900 border border-navy-750 hover:border-gold-500/40 shadow-navy-elevated flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30 group-hover:text-gold-400/60 transition-colors" />
                </div>

                {/* Quote Body */}
                <p className="text-sm text-ivory-200 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-6 pt-4 border-t border-navy-800 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    {test.clientName}
                  </h4>
                  <p className="text-xs text-gold-400/90 font-medium">
                    {test.designation}
                  </p>
                  <p className="text-[11px] text-muted-400">
                    {test.company}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded-md border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

