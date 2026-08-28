import React, { useState } from 'react';
import { Menu, X, Layers } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenWeDid }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'wedid', label: 'We Did' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & FAQ' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-20 w-full">
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo: User's Transparent DK Logo + DK Designs Hubs® */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 focus:outline-none group text-left cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="DK Designs Hubs Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex items-baseline gap-0.5" style={{ fontFamily: "'Instrument Serif', serif" }}>
            <span className="text-xl sm:text-3xl tracking-tight text-foreground group-hover:opacity-90 transition-opacity">
              DK Designs Hubs
            </span>
            <sup className="text-xs font-sans text-muted-foreground group-hover:text-foreground transition-colors ml-0.5">®</sup>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA Button: "We Did" Liquid-Glass Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenWeDid}
            className="liquid-glass rounded-full px-6 py-2.5 text-xs sm:text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer flex items-center gap-1.5 font-medium border border-white/20 shadow-lg"
          >
            <Layers className="w-4 h-4 text-cyan-300" />
            <span>We Did</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden liquid-glass p-2.5 rounded-full text-foreground hover:scale-[1.03] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 z-30 liquid-panel rounded-2xl p-6 border border-white/10 animate-fade-rise shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-lg py-2 transition-colors border-b border-white/5 ${
                    isActive ? 'text-foreground font-medium pl-2 border-l-2 border-white' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWeDid();
              }}
              className="liquid-glass w-full rounded-full py-3 text-center text-sm font-medium text-foreground hover:scale-[1.02] transition-transform mt-4 cursor-pointer flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-cyan-300" />
              <span>We Did Showcase</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
