import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0A1A] border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 shrink-0">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" aria-hidden="true">
                <polygon points="4,28 16,6 28,28" fill="#6B4CDE" />
                <polygon points="16,2 30,26 2,26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-white tracking-[0.2em] text-xs uppercase leading-none">
                NORTHRIDGE
              </span>
              <span className="font-sans font-medium text-[#A0A0C0] tracking-[0.25em] text-[8px] uppercase leading-none mt-1">
                CONSULTING
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 font-sans text-xs text-[#A0A0C0]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-white transition-colors">Global Offices</a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-[#A0A0C0]">
            © {new Date().getFullYear()} Northridge Consulting Ltd. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
