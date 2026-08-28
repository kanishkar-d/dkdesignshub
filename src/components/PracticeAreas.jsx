import React from 'react';
import { ArrowUpRight, Compass, Shield, Cpu, Layers } from 'lucide-react';

export default function PracticeAreas() {
  const practices = [
    {
      icon: Compass,
      title: "Strategic Growth & Advisory",
      description: "Navigating market shifts, evaluating expansion opportunities, and formulating long-term competitive roadmaps.",
    },
    {
      icon: Shield,
      title: "Operational Resilience",
      description: "Optimizing enterprise processes, risk mitigation strategies, and supply chain stability for sustained agility.",
    },
    {
      icon: Cpu,
      title: "Digital Acceleration",
      description: "Integrating next-generation technology, data architecture, and AI-driven insights into core business models.",
    },
    {
      icon: Layers,
      title: "Organization & Governance",
      description: "Structuring agile executive frameworks, alignment culture, and high-performance talent strategies.",
    },
  ];

  return (
    <section id="practices" className="py-24 bg-[#0B0A1A] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[#6B4CDE] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
              PRACTICE AREAS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white max-w-xl leading-tight">
              Deep Expertise Across Key Strategic Pillars
            </h2>
          </div>
          <p className="font-sans text-base text-[#A0A0C0] font-light max-w-md">
            We deliver clarity across strategy, operational execution, and digital transformation to drive tangible impact.
          </p>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#6B4CDE]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#6B4CDE]/10 border border-[#6B4CDE]/20 flex items-center justify-center text-[#6B4CDE] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-white mb-3 group-hover:text-[#6B4CDE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[#A0A0C0] text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-sans font-medium text-white/60 group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6B4CDE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
