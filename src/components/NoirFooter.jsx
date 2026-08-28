import React from 'react';
import { ArrowUp } from 'lucide-react';
import DhanukaniLogo from './DhanukaniLogo.jsx';

export default function NoirFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05050A] border-t border-[#1E1E32] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <DhanukaniLogo className="w-14 h-11" />

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-white tracking-widest text-base uppercase">
                DHANUKANI
              </span>
              <span className="font-sans font-bold text-[#A0A0C0] tracking-[0.2em] text-[9px] uppercase">
                TRUST CREATION • FREELANCE SERVICES
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs font-bold uppercase tracking-widest text-[#8E8EA8]">
            <a href="#services" className="hover:text-[#FF2A85] transition-colors">OUR SERVICES</a>
            <a href="#works" className="hover:text-[#00F0FF] transition-colors">SELECTED WORKS</a>
            <a href="#contact" className="hover:text-[#FF2A85] transition-colors">CONTACT US</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:border-[#FF2A85] transition-all flex items-center gap-2"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#FF2A85]" />
          </button>

        </div>

        {/* Copyright notice with official DHANUKANI TRUST CREATION brand */}
        <div className="pt-8 border-t border-[#1E1E32]/60 text-center font-sans text-xs text-[#8E8EA8] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} DHANUKANI (TRUST CREATION FREELANCE). ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
}
