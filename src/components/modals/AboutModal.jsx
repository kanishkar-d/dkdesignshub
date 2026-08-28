import React from 'react';
import { X, CheckCircle2, ShieldCheck, DollarSign, MessageSquare, Award } from 'lucide-react';

export default function AboutModal({ isOpen, onClose, onOpenServices, onOpenContact }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-3xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close About Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">About Us — dkdesignshubs.com</span>
          <h2 className="text-3xl sm:text-5xl text-foreground font-normal mt-1 leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Meet the Team Behind DK DESIGNS HUBS
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Dedicated two-person agency delivering top-tier digital services without corporate price tags.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-white border-y border-r border-white/10 mb-8">
          <blockquote className="text-lg sm:text-xl text-white/95 italic font-normal leading-relaxed" style={{ fontFamily: "'Instrument Serif', serif" }}>
            "To empower small businesses, entrepreneurs, and individuals with professional, beautifully designed, and functionally flawless digital solutions at prices that make sense."
          </blockquote>
          <span className="block text-xs font-mono text-cyan-300 mt-3 uppercase tracking-wider">— Our Agency Mission</span>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Founder 1 */}
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-300 uppercase">Co-Founder</span>
              <span className="text-[10px] bg-white/10 text-white px-2.5 py-0.5 rounded-full">Design & Typing Lead</span>
            </div>
            <h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Dhanalakshmi
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Leads our Graphic Design and Document Services divisions. Specializing in turning raw concepts into striking brand identities—ranging from logos and social media graphics to custom product packaging. Brings speed, accuracy, and Tamil & English document formatting.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-300 uppercase">Co-Founder</span>
              <span className="text-[10px] bg-white/10 text-white px-2.5 py-0.5 rounded-full">Web Lead</span>
            </div>
            <h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Kanishkar
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Specializing in custom Shopify storefronts, WordPress builds, responsive business websites, and modern web applications. Focuses on fast load speeds, seamless navigation, and high mobile conversion rates.
            </p>
          </div>
        </div>

        {/* 3 Value Propositions */}
        <div className="space-y-3 mb-8">
          <h3 className="text-xs font-mono uppercase text-muted-foreground">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" /> 100% Accuracy
              </div>
              <p className="text-xs text-muted-foreground">We treat deadlines as non-negotiable promises with rigorous quality checks.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold">
                <DollarSign className="w-4 h-4" /> Transparent Pricing
              </div>
              <p className="text-xs text-muted-foreground">No hidden fees or surprise invoices. Clear fixed pricing tiers.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold">
                <MessageSquare className="w-4 h-4" /> Founder Contact
              </div>
              <p className="text-xs text-muted-foreground">You collaborate directly with the specialists executing your work.</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenServices();
            }}
            className="liquid-glass w-full sm:w-auto rounded-full px-8 py-3 text-xs text-white hover:scale-105 transition-transform text-center cursor-pointer"
          >
            View Packages & Pricing →
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-xs text-muted-foreground hover:text-white transition-colors cursor-pointer"
          >
            Have questions? Get in touch with us
          </button>
        </div>
      </div>
    </div>
  );
}
