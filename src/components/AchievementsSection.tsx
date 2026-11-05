import React, { useState, useEffect, useRef } from 'react';
import { Award, TrendingUp } from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';

export const AchievementsSection: React.FC = () => {
  const { metrics, projects } = MITESH_CONFIG;
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 lg:py-28 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Demonstrated Performance</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Verified Achievements & Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-300">
            Measurable enterprise performance data grounded in direct operational redesign, automated business intelligence, and capital optimization.
          </p>
        </div>

        {/* 5 Statistics Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-navy-850 to-navy-900 border border-navy-750 hover:border-gold-500/40 text-center flex flex-col justify-between shadow-navy-elevated transition-all duration-300 group"
            >
              <div>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-white group-hover:text-gold-300 transition-colors">
                  {metric.prefix || ''}
                  {hasAnimated ? metric.numericValue : 0}
                  {metric.suffix}
                </p>
                <h3 className="font-sans font-bold text-sm text-gold-400 mt-2">
                  {metric.label}
                </h3>
              </div>
              <p className="text-[11px] text-muted-400 mt-3 pt-3 border-t border-navy-800 leading-tight">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Landmark Consulting Engagements */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-navy-800">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-gold-400">
                Verified Engagements
              </p>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                Landmark Client Transformations
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-400 max-w-md mt-2 md:mt-0">
              Representative consulting cases showcasing automated KPI architectures, ERP implementations, and ISO audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 sm:p-7 rounded-2xl bg-navy-850 border border-navy-750 hover:border-gold-500/40 shadow-navy-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-xs font-medium text-muted-400">
                      Client: <strong className="text-white font-semibold">{proj.client}</strong>
                    </span>
                  </div>

                  <h4 className="font-heading text-xl font-bold text-white mt-2">
                    {proj.title}
                  </h4>

                  {/* Highlighted Outcome */}
                  <div className="my-3.5 p-3 rounded-xl bg-navy-900 border border-gold-500/20 flex items-start gap-2 text-xs font-medium text-gold-300">
                    <TrendingUp className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Impact: {proj.impact}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800 flex flex-wrap gap-2">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-navy-900 text-muted-300 border border-navy-750"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
