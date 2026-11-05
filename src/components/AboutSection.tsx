import React from 'react';
import { Award, Target, Shield, Compass, Lightbulb, GraduationCap, Briefcase } from 'lucide-react';

export const AboutSection: React.FC = () => {

  const corePillars = [
    {
      icon: Target,
      title: "ROI-Focused Decisions",
      description: "Every strategic intervention is tied to measurable commercial outcomes, unit economic improvements, and validated capital efficiency."
    },
    {
      icon: Compass,
      title: "Customized Frameworks",
      description: "No off-the-shelf templates. Strategies are synthesized around your unique industry dynamics, organizational culture, and market moat."
    },
    {
      icon: Briefcase,
      title: "Direct Senior Involvement",
      description: "Hands-on executive leadership on every engagement. Bridging the critical gap between board-level strategy and shop-floor execution."
    },
    {
      icon: Shield,
      title: "Transparent & Accountable",
      description: "Milestone-based execution governance backed by ISO-standard quality controls, real-time KPI visibility, and clear ownership."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Executive Profile & Leadership</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Mitesh Ladva
          </h2>
          <p className="mt-3 text-lg text-gold-400 font-medium">
            Founder & Managing Partner • Ladva Enterprises
          </p>
        </div>

        {/* Bio Narrative & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-muted-200 leading-relaxed font-normal">
            <p className="first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-gold-400 first-letter:mr-2 first-letter:float-left">
              With over two decades of accumulated professional consulting leadership, operational redesign, and enterprise data analytics expertise, Mitesh Ladva has positioned Ladva Enterprises as a trusted partner for mid-market and expanding enterprises across India and global territories.
            </p>

            <p>
              His consulting trajectory bridges the gap between deep analytical engineering and high-stakes executive strategy. Having directed enterprise initiatives across discrete manufacturing, global logistics, chemical distribution, FMCG, and regulated healthcare, Mitesh brings an uncompromising focus on measurable business transformation.
            </p>

            <p>
              Under his stewardship, Ladva Enterprises delivers comprehensive strategic advisory, modern MIS automation, unified cloud BI architectures, statutory ISO compliance frameworks, and capital restructuring. His engagements have generated over <strong className="text-white font-semibold">₹2,400 Crores in client value</strong>, sustaining a stellar <strong className="text-gold-300 font-semibold">4.8x average client ROI</strong>.
            </p>

            {/* Engineering & Analytical Pedigree Box */}
            <div className="mt-8 p-6 rounded-2xl bg-navy-800/80 border border-navy-700/80">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-gold-400" />
                <span>Engineering Pedigree & Analytical Rigor</span>
              </h3>
              <p className="text-sm text-muted-300 leading-relaxed">
                Holding a mechanical engineering foundation from DJSCE (Dwarkadas J. Sanghvi College of Engineering, Mumbai) and key leadership in Asia's Largest Electric Solar Vehicle Championship (ESVC), Mitesh grounds corporate strategy in systems engineering principles, Lean Six Sigma methodologies, and automated data pipelines.
              </p>

              <div className="mt-4 pt-4 border-t border-navy-750 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-navy-900 text-xs font-mono text-gold-300 border border-gold-500/20">
                  Lean Six Sigma
                </span>
                <span className="px-2.5 py-1 rounded-md bg-navy-900 text-xs font-mono text-gold-300 border border-gold-500/20">
                  ISO 9001/14001/45001 Lead Auditor
                </span>
                <span className="px-2.5 py-1 rounded-md bg-navy-900 text-xs font-mono text-gold-300 border border-gold-500/20">
                  Enterprise BigQuery & Looker BI
                </span>
                <span className="px-2.5 py-1 rounded-md bg-navy-900 text-xs font-mono text-gold-300 border border-gold-500/20">
                  Agile Project Governance
                </span>
              </div>
            </div>

          </div>

          {/* Core Philosophy Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 mb-2">
              <p className="text-xs uppercase tracking-widest font-bold text-gold-400 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" />
                <span>Executive Consulting Philosophy</span>
              </p>
            </div>

            {corePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-navy-850/80 border border-navy-750 hover:border-gold-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-300 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-gold-500/15 via-gold-500/5 to-transparent border border-gold-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                    Looking for strategic counsel?
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Schedule an executive discovery call
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs tracking-wide shadow-sm transition-colors"
                >
                  Connect
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
