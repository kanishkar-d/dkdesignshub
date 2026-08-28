import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import DhanukaniLogo from './DhanukaniLogo.jsx';

export default function NoirNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'OUR SERVICES', href: '#services' },
    { name: 'SELECTED WORKS', href: '#works' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#05050A]/90 backdrop-blur-xl border-b border-[#FF2A85]/30 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Transparent Shield Logo & Brand Header */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <DhanukaniLogo className="w-14 h-11 group-hover:scale-105 transition-transform duration-300" />
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-white tracking-widest text-base uppercase leading-none">
                DHANUKANI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A85] animate-pulse"></span>
            </div>
            <span className="font-sans font-bold text-[#A0A0C0] tracking-[0.25em] text-[9px] uppercase leading-none mt-1">
              TRUST CREATION • FREELANCE AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-sans text-xs font-semibold tracking-widest text-[#8E8EA8] hover:text-[#00F0FF] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="font-sans text-xs font-bold uppercase tracking-widest text-white px-6 py-2.5 rounded-full border border-[#FF2A85]/50 bg-[#FF2A85]/10 hover:bg-[#FF2A85] hover:shadow-[0_0_20px_rgba(255,42,133,0.5)] transition-all duration-300 flex items-center gap-2 group"
          >
            <span>GET STARTED</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF2A85] group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#FF2A85] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 backdrop-blur-2xl bg-[#05050A]/95 flex flex-col justify-between px-8 py-10 animate-in fade-in duration-200 border-b border-[#1E1E32]">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DhanukaniLogo className="w-12 h-10" />
              <span className="font-heading font-extrabold text-white tracking-wider text-base uppercase">
                DHANUKANI
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#FF2A85]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl font-bold tracking-wider text-white hover:text-[#FF2A85] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-[#FF2A85] text-white font-sans text-center font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 glow-pink"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
