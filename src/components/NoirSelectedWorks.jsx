import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, X, CheckCircle } from 'lucide-react';

export default function NoirSelectedWorks() {
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 'synthwave',
      title: 'Synthwave Brand',
      category: 'BRANDING',
      lead: 'DHANALAKSHMI',
      color: 'from-[#FF2A85] to-purple-600',
      tagColor: 'text-[#FF2A85] border-[#FF2A85]/30 bg-[#FF2A85]/10',
      summary: 'Retro-futuristic visual identity, neon color systems, and packaging design for an apparel label.',
      details: 'Created an iconic synthwave visual identity including logo marks, custom typography, holographic foil label packaging, and digital promotional assets.',
      deliverables: ['Brand Identity Kit', 'Logo Mark Variants', 'Holographic Packaging Print', 'Social Media Templates']
    },
    {
      id: 'neondashboard',
      title: 'Neon Dashboard',
      category: 'WEB DESIGN',
      lead: 'KANISHKAR',
      color: 'from-[#00F0FF] to-blue-600',
      tagColor: 'text-[#00F0FF] border-[#00F0FF]/30 bg-[#00F0FF]/10',
      summary: 'High-performance dark mode web dashboard analytics platform with real-time data visualizer.',
      details: 'Designed and engineered a high-speed web interface featuring dark neon data cards, smooth chart interactions, custom Shopify integration, and responsive desktop/mobile UI.',
      deliverables: ['Custom Web App UI', 'Shopify Analytics Integration', 'Dark Theme Styling', 'Responsive Mobile Layout']
    },
    {
      id: 'cyberpunkapp',
      title: 'Cyberpunk App',
      category: 'MOBILE DEV',
      lead: 'KANISHKAR',
      color: 'from-purple-500 to-[#FF2A85]',
      tagColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      summary: 'Sleek cyberpunk mobile application interface built for seamless user engagement and conversion.',
      details: 'Built a mobile application UI with reactive cyber glow accents, instant micro-interactions, fast 1.8s page loads, and integrated payment gateway flows.',
      deliverables: ['Mobile App Design', 'Cross-Platform React Code', 'Payment Gateway Flow', 'Speed Optimization']
    }
  ];

  return (
    <section id="works" className="py-24 bg-[#05050A] relative z-10 border-t border-[#1E1E32]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[#00F0FF] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              SELECTED WORKS
            </h2>
          </div>
          <p className="font-sans text-sm text-[#8E8EA8] max-w-md">
            Concept and live client projects highlighting our creative design, technical development, and branding capabilities.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group rounded-2xl bg-[#0D0D18] border border-[#1E1E32] overflow-hidden hover:border-[#FF2A85]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Banner */}
                <div className={`h-48 bg-gradient-to-tr ${work.color} p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <div className="flex justify-between items-center z-10">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${work.tagColor}`}>
                      {work.category}
                    </span>
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                      BY {work.lead}
                    </span>
                  </div>

                  <div className="z-10">
                    <h3 className="font-heading font-extrabold text-2xl text-white uppercase drop-shadow-md">
                      {work.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-sans text-xs text-[#8E8EA8] leading-relaxed mb-6">
                    {work.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedWork(work)}
                  className="w-full py-3 px-4 rounded-xl bg-[#05050A] border border-[#1E1E32] text-xs font-bold uppercase tracking-widest text-white hover:bg-[#FF2A85] hover:border-[#FF2A85] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>VIEW CASE DETAILS</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF2A85] group-hover/btn:text-white transition-colors" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Details Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05050A]/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl rounded-3xl bg-[#0D0D18] border border-[#FF2A85]/40 p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#05050A] text-[#8E8EA8] hover:text-white border border-[#1E1E32]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border inline-block mb-3 ${selectedWork.tagColor}`}>
              {selectedWork.category}
            </span>

            <h3 className="font-heading font-extrabold text-3xl text-white uppercase mb-4">
              {selectedWork.title}
            </h3>

            <div className="space-y-4 mb-6 text-xs text-slate-300 leading-relaxed">
              <p className="p-4 rounded-xl bg-[#05050A] border border-[#1E1E32]">
                {selectedWork.details}
              </p>

              <div>
                <h4 className="text-[10px] font-bold text-[#FF2A85] uppercase tracking-wider mb-2">Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.deliverables.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#05050A] border border-[#1E1E32] text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedWork(null)}
                className="px-6 py-2.5 rounded-xl bg-[#FF2A85] text-xs font-bold uppercase tracking-widest text-white hover:bg-[#ff4294] transition-all"
              >
                CLOSE CASE
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
