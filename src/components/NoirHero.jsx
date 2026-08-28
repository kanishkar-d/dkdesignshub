import React from 'react';
import { ArrowRight, Palette, Code2, FileText, Zap } from 'lucide-react';
import DhanukaniLogo from './DhanukaniLogo.jsx';

export default function NoirHero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden cyber-grid">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2A85]/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#00F0FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        {/* Transparent Inverted Shield Emblem Showcase */}
        <div className="flex justify-center mb-4">
          <div className="hover:scale-105 transition-transform duration-300">
            <DhanukaniLogo className="w-56 sm:w-72 h-auto" />
          </div>
        </div>

        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D0D18] border border-[#FF2A85]/40 text-xs font-semibold tracking-widest text-[#FF2A85] mb-6 shadow-xl">
          <Zap className="w-4 h-4 text-[#00F0FF] animate-pulse" />
          <span>dhanukani • TRUST CREATION</span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight uppercase max-w-5xl mx-auto mb-6">
          DHANUKANI <br />
          <span className="bg-gradient-to-r from-[#FF2A85] via-purple-500 to-[#00F0FF] bg-clip-text text-transparent text-glow-pink">
            CREATIVE FREELANCE AGENCY
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="font-sans text-base sm:text-xl text-[#8E8EA8] font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Striking visual identities, modern responsive code, and precision document services built with uncompromising trust.
        </p>

        {/* Key Services Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-xs text-white">
            <Palette className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span>Graphic Design</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-xs text-white">
            <Code2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Web Development</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-xs text-white">
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>Typing & Transcription</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest text-white bg-[#FF2A85] hover:bg-[#ff4294] transition-all duration-300 glow-pink flex items-center justify-center gap-2 group"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest text-white bg-[#0D0D18] border border-[#1E1E32] hover:border-[#00F0FF]/50 hover:text-[#00F0FF] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>OUR SERVICES</span>
          </a>
        </div>

      </div>

    </section>
  );
}
