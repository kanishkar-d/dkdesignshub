import React, { useState } from 'react';
import { X, Check, FileText, Palette, Code, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesModal({ isOpen, onClose, onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('web');

  if (!isOpen) return null;

  const typingServices = {
    title: "Typing & Document Services",
    lead: "Led by Dhanalakshmi",
    tagline: "Clear, high-speed, and zero-error document management.",
    startingPrice: "₹800",
    features: [
      "Data Entry & Spreadsheets",
      "PDF to Word / Excel Conversion",
      "Formatting & Layout Styling",
      "Tamil & English Document Typing",
      "100% Accuracy Guarantee",
      "Express 24-48 Hours Delivery"
    ]
  };

  const designPackages = [
    {
      name: "Basic",
      price: "₹1,500",
      features: [
        "2 Unique Logo Concepts",
        "High-Res PNG & JPG files",
        "2 Rounds of Revisions"
      ]
    },
    {
      name: "Standard",
      price: "₹3,500",
      popular: true,
      features: [
        "3 Logo Concepts",
        "Full Vector Source Files (AI, SVG, PDF)",
        "Business Card & Social Media Banner Design",
        "4 Rounds of Revisions"
      ]
    },
    {
      name: "Premium",
      price: "₹7,000",
      features: [
        "Complete Brand Identity Kit (Logo, Palette, Fonts)",
        "Social Media Pack (5 Post Templates)",
        "Product Packaging / Label Design",
        "Unlimited Revisions + Express Delivery"
      ]
    }
  ];

  const webPackages = [
    {
      name: "Basic (Landing Page)",
      price: "₹5,000",
      features: [
        "1 Page Responsive Business Website",
        "Mobile & Tablet Optimized",
        "Contact Form & WhatsApp Integration",
        "Fast Loading & SEO Friendly"
      ]
    },
    {
      name: "Standard (Business Site)",
      price: "₹10,000",
      popular: true,
      features: [
        "Up to 5 Pages (Home, About, Services, Portfolio, Contact)",
        "WordPress / Custom Tech Build",
        "Social Media & Google Maps Integration",
        "1 Month Free Maintenance"
      ]
    },
    {
      name: "Premium (E-Commerce)",
      price: "₹18,000",
      features: [
        "Full Shopify or Custom E-Commerce Store",
        "Up to 25 Product Uploads & Payment Gateway Setup",
        "Cart, Checkout, Order Tracking & Inventory Setup",
        "Admin Training Video + 2 Months Free Support"
      ]
    }
  ];

  const addOns = [
    { name: "Custom Packaging / Label Design", price: "+₹2,000" },
    { name: "Social Media Post Bundle (10 templates)", price: "+₹2,500" },
    { name: "Additional Website Page Setup", price: "+₹1,500 / page" },
    { name: "Speed Optimization & Technical SEO Audit", price: "+₹3,000" },
    { name: "Monthly Maintenance & Backup Plan", price: "+₹2,000 / month" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-4xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">DK DESIGNS HUBS®</span>
            <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Services & Fixed Pricing
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Transparent, affordable digital solutions with zero hidden costs.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close Services Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Service Category Buttons */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10 mb-6">
          {[
            { id: 'web', label: 'Web Development', icon: Code, lead: 'Kanishkar' },
            { id: 'design', label: 'Graphic Design', icon: Palette, lead: 'Dhanalakshmi' },
            { id: 'typing', label: 'Document Services', icon: FileText, lead: 'Dhanalakshmi' },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-black shadow-lg'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-1">
          {/* Web Development Packages */}
          {activeCategory === 'web' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-muted-foreground">Led by Kanishkar — Web Architect & Shopify Specialist</span>
                <span className="text-xs text-cyan-300">Fast Speed & Mobile First</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {webPackages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`liquid-glass p-6 rounded-2xl border flex flex-col justify-between relative ${
                      pkg.popular ? 'border-white/40 bg-white/10' : 'border-white/10'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-4 bg-white text-black text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full shadow">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <h3 className="text-xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {pkg.name}
                      </h3>
                      <div className="text-3xl font-mono text-white font-semibold my-3">{pkg.price}</div>
                      <ul className="space-y-2 mt-4">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="text-xs text-white/80 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectService(`Web Dev: ${pkg.name} (${pkg.price})`);
                      }}
                      className="liquid-glass w-full rounded-full py-2.5 text-xs text-white hover:scale-105 transition-transform mt-6 cursor-pointer"
                    >
                      Select Package →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Graphic Design Packages */}
          {activeCategory === 'design' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-muted-foreground">Led by Dhanalakshmi — Creative Design Specialist</span>
                <span className="text-xs text-cyan-300">High-Res & Vector Source Files</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {designPackages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`liquid-glass p-6 rounded-2xl border flex flex-col justify-between relative ${
                      pkg.popular ? 'border-white/40 bg-white/10' : 'border-white/10'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-4 bg-white text-black text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full shadow">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <h3 className="text-xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {pkg.name} Package
                      </h3>
                      <div className="text-3xl font-mono text-white font-semibold my-3">{pkg.price}</div>
                      <ul className="space-y-2 mt-4">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="text-xs text-white/80 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectService(`Graphic Design: ${pkg.name} (${pkg.price})`);
                      }}
                      className="liquid-glass w-full rounded-full py-2.5 text-xs text-white hover:scale-105 transition-transform mt-6 cursor-pointer"
                    >
                      Select Package →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typing & Document Services */}
          {activeCategory === 'typing' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-cyan-300">{typingServices.lead}</span>
                    <h3 className="text-3xl font-normal text-white mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {typingServices.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{typingServices.tagline}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">Starting At</span>
                    <span className="text-3xl font-mono text-white font-semibold">{typingServices.startingPrice}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
                  {typingServices.features.map((feat) => (
                    <div key={feat} className="p-3 rounded-xl bg-black/20 border border-white/5 flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-300 shrink-0" />
                      <span className="text-xs text-white">{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectService("Document Services & Typing (Starting ₹800)");
                  }}
                  className="liquid-glass w-full rounded-full py-3 text-xs text-white hover:scale-102 transition-transform mt-6 cursor-pointer"
                >
                  Book Document Service Now →
                </button>
              </div>
            </div>
          )}

          {/* Add-Ons Section */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase text-muted-foreground mb-3">Popular Service Add-Ons</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addOns.map((addon) => (
                <div key={addon.name} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/80">{addon.name}</span>
                  <span className="text-xs font-mono text-cyan-300 font-medium">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>Fixed Pricing Tier — 100% Satisfaction Guarantee</span>
          <button
            onClick={() => {
              onClose();
              onSelectService("Custom Tailored Package");
            }}
            className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            Need a custom quote? Contact Founders →
          </button>
        </div>
      </div>
    </div>
  );
}
