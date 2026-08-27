import React, { useState } from 'react';
import { X, ExternalLink, ArrowRight, Award, Sparkles, CheckCircle } from 'lucide-react';

export default function PortfolioModal({ isOpen, onClose, onOpenContact }) {
  const [selectedCase, setSelectedCase] = useState(null);

  if (!isOpen) return null;

  const caseStudies = [
    {
      id: 'ecoglow',
      title: 'EcoGlow Natural Skincare',
      category: 'Brand Identity & Packaging Design',
      ledBy: 'Dhanalakshmi',
      goal: 'Create a soothing, premium brand identity for a modern organic skincare product line.',
      solution: 'Developed a minimalist botanical logo, curated a warm earthy pastel color palette, and designed eco-friendly product labels for cream jars and serum bottles.',
      result: 'Increased brand perception and helped the client launch successfully across online market channels.',
      badge: 'Brand Identity'
    },
    {
      id: 'ananya',
      title: 'Ananya Fashion Boutique',
      category: 'Custom Shopify Store Development',
      ledBy: 'Kanishkar',
      goal: 'Transition a traditional local clothing boutique into a direct-to-consumer online fashion brand.',
      solution: 'Built a high-speed, mobile-first Shopify store complete with Razorpay payment gateway integration, size guides, filterable product catalogs, and Instagram feed integration.',
      result: 'Enabled 100+ online orders within the first month of store launch with a fast 1.8-second load time.',
      badge: 'E-Commerce'
    },
    {
      id: 'globallogistics',
      title: 'Global Logistics Corp',
      category: 'Corporate Data Formatting & Typing',
      ledBy: 'Dhanalakshmi',
      goal: 'Convert 150+ pages of handwritten notes and scanned legacy PDFs into formatted, error-free digital reports in English and Tamil.',
      solution: 'Executed rapid typing, structural formatting, table creation, and bilingual proofreading ahead of the deadline.',
      result: '100% accuracy verified with zero client revision requests and delivered 2 days ahead of schedule.',
      badge: 'Document Services'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-4xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">DK DESIGNS HUBS®</span>
            <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Portfolio & Client Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Real client results across Web Development, Graphic Design, and Document Typing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close Portfolio Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCase(cs)}
              className="group liquid-glass p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-[11px] font-mono text-cyan-300 uppercase">{cs.category}</span>
                  <h3 className="text-2xl font-normal text-white group-hover:text-cyan-200 transition-colors" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {cs.title}
                  </h3>
                </div>
                <span className="text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full self-start sm:self-center font-mono">
                  Led by {cs.ledBy}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
                <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">Client Goal</span>
                  <p className="text-xs text-white/80">{cs.goal}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">Our Solution</span>
                  <p className="text-xs text-white/80">{cs.solution}</p>
                </div>
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-cyan-300">Verified Result</span>
                  <p className="text-xs text-cyan-100 font-medium">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Case Study Detail Modal Overlay */}
        {selectedCase && (
          <div className="absolute inset-0 bg-[#00172e]/95 backdrop-blur-2xl p-8 z-20 flex flex-col justify-between animate-fade-rise">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-cyan-300">{selectedCase.category}</span>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-3xl sm:text-4xl text-white font-normal mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {selectedCase.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-6">Specialist Lead: {selectedCase.ledBy}</p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-muted-foreground">Challenge & Objective</h4>
                  <p className="text-sm text-white/90 mt-1 leading-relaxed">{selectedCase.goal}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-muted-foreground">Execution Strategy</h4>
                  <p className="text-sm text-white/90 mt-1 leading-relaxed">{selectedCase.solution}</p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-400/30">
                  <h4 className="text-xs font-mono uppercase text-cyan-300">Measured Outcome</h4>
                  <p className="text-sm text-cyan-100 font-medium mt-1 leading-relaxed">{selectedCase.result}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedCase(null)}
                className="text-xs text-muted-foreground hover:text-white"
              >
                ← Back to All Case Studies
              </button>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onClose();
                  onOpenContact();
                }}
                className="liquid-glass rounded-full px-6 py-2.5 text-xs text-white hover:scale-105"
              >
                Start Similar Project →
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>Need custom work like this?</span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            Get a free quote for your project →
          </button>
        </div>
      </div>
    </div>
  );
}
