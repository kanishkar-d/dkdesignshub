import React, { useState } from 'react';
import { 
  FileText, 
  Palette, 
  Code2, 
  Check, 
  PlusCircle, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  HelpCircle,
  Calculator,
  MessageSquare
} from 'lucide-react';

export default function ServicesPricing({ onSelectPackage }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Data Definition
  const typingServices = {
    title: "Typing & Document Services",
    lead: "Dhanalakshmi",
    badge: "Led by Dhanalakshmi",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    startingPrice: "₹800",
    description: "Clear, high-speed, and zero-error document management. We handle PDF conversions, data entry, layout styling, and bilingual typing.",
    servicesList: [
      "Data Entry & Data Cleaning",
      "PDF to Word / Excel Conversion",
      "Corporate Report Formatting & Styling",
      "Tamil & English Document Typing",
      "Table Creation & Proofreading"
    ],
    features: [
      "100% Accuracy Guarantee",
      "Tamil & English Typing Support",
      "Urgent / Fast Turnaround (24-48 hrs)",
      "Strict Confidentiality"
    ]
  };

  const graphicDesignPackages = [
    {
      id: 'gd-basic',
      name: 'Basic Graphic Design',
      price: '₹1,500',
      numericPrice: 1500,
      badge: 'Popular for Starters',
      popular: false,
      features: [
        '2 Unique Logo Concepts',
        'High-Res PNG & JPG files',
        'Transparent Backgrounds',
        '2 Rounds of Revisions'
      ]
    },
    {
      id: 'gd-standard',
      name: 'Standard Graphic Package',
      price: '₹3,500',
      numericPrice: 3500,
      badge: 'Most Popular',
      popular: true,
      features: [
        '3 Unique Logo Concepts',
        'Full Vector Source Files (AI, SVG, PDF)',
        'Business Card Design',
        'Social Media Banner Design',
        '4 Rounds of Revisions'
      ]
    },
    {
      id: 'gd-premium',
      name: 'Premium Brand Identity',
      price: '₹7,000',
      numericPrice: 7000,
      badge: 'Complete Solution',
      popular: false,
      features: [
        'Complete Brand Identity Kit (Logo, Palette, Fonts)',
        'Social Media Pack (5 Post Templates)',
        'Product Packaging / Label Design',
        'Vector Source Files (AI, SVG, EPS, PDF)',
        'Unlimited Revisions + Express Delivery'
      ]
    }
  ];

  const designAddons = [
    { id: 'add-pkg', name: 'Custom Packaging / Label Design', price: 2000, textPrice: '+₹2,000' },
    { id: 'add-sm', name: 'Social Media Post Bundle (10 templates)', price: 2500, textPrice: '+₹2,500' },
    { id: 'add-rev', name: 'Additional Revision Round', price: 500, textPrice: '+₹500' }
  ];

  const webDevPackages = [
    {
      id: 'web-basic',
      name: 'Basic Landing Page',
      price: '₹5,000',
      numericPrice: 5000,
      badge: 'Startup Special',
      popular: false,
      features: [
        '1 Page Responsive Business Website',
        'Mobile & Tablet Optimized',
        'Contact Form & WhatsApp Direct Button',
        'Fast Loading & SEO Friendly Structure',
        'Basic Social Links Setup'
      ]
    },
    {
      id: 'web-standard',
      name: 'Standard Business Site',
      price: '₹10,000',
      numericPrice: 10000,
      badge: 'Best Value',
      popular: true,
      features: [
        'Up to 5 Pages (Home, About, Services, Portfolio, Contact)',
        'WordPress / Custom Tech Build',
        'Social Media & Google Maps Integration',
        'Mobile Responsive UI + Fast Load Speeds',
        '1 Month Free Technical Support'
      ]
    },
    {
      id: 'web-premium',
      name: 'Premium E-Commerce Store',
      price: '₹18,000',
      numericPrice: 18000,
      badge: 'Full E-Commerce',
      popular: false,
      features: [
        'Full Shopify or Custom E-Commerce Store',
        'Up to 25 Product Uploads & Payment Gateway Setup',
        'Shopping Cart, Checkout, Order Tracking & Inventory',
        'Admin Video Tutorial + 2 Months Free Support',
        'Speed & Conversion Optimization'
      ]
    }
  ];

  const webAddons = [
    { id: 'add-page', name: 'Additional Page Setup', price: 1500, textPrice: '+₹1,500 / page' },
    { id: 'add-seo', name: 'Speed Optimization & Technical SEO Audit', price: 3000, textPrice: '+₹3,000' },
    { id: 'add-maint', name: 'Monthly Maintenance & Backup Plan', price: 2000, textPrice: '+₹2,000 / mo' }
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const getAddonTotal = () => {
    const allAddons = [...designAddons, ...webAddons];
    return selectedAddons.reduce((sum, addonId) => {
      const found = allAddons.find(a => a.id === addonId);
      return sum + (found ? found.price : 0);
    }, 0);
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING & PACKAGES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Simple Tiers Built for <span className="text-gradient">Small Business Budgets</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            No hidden costs. Every package includes direct founder collaboration, clear revision limits, and guaranteed quality delivery.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'typing', label: '📄 Typing & Documents (From ₹800)' },
              { id: 'graphic', label: '🎨 Graphic Design (From ₹1,500)' },
              { id: 'web', label: '💻 Web Development (From ₹5,000)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Typing & Document Services Section */}
        {(activeTab === 'all' || activeTab === 'typing') && (
          <div className="mb-16">
            <div className="glass-card rounded-3xl p-8 border-purple-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-purple-950/20 to-slate-950">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                
                <div className="space-y-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-semibold text-purple-300">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{typingServices.badge}</span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    {typingServices.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {typingServices.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {typingServices.servicesList.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-auto glass-panel p-6 rounded-2xl border-purple-500/30 text-center shrink-0 space-y-4">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Starting At</span>
                  <div className="font-heading font-extrabold text-4xl text-purple-400">
                    {typingServices.startingPrice}
                  </div>
                  <p className="text-[11px] text-slate-400 max-w-[200px] mx-auto">
                    Pricing varies based on page volume, formatting needs & deadline.
                  </p>
                  <button
                    onClick={() => onSelectPackage('Typing & Document Services', '₹800')}
                    className="w-full py-3 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/25 transition-all"
                  >
                    Request Document Quote
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 2. Graphic Design Packages */}
        {(activeTab === 'all' || activeTab === 'graphic') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">Graphic Design Packages</h3>
                <p className="text-xs text-slate-400">Led by Dhanalakshmi — Logos, Branding, Social Media & Packaging</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {graphicDesignPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`glass-card rounded-3xl p-6 flex flex-col justify-between relative ${
                    pkg.popular ? 'border-purple-500/50 shadow-xl shadow-purple-500/10 bg-slate-900/80' : 'border-slate-800'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="text-xs text-purple-400 font-semibold mb-1">{pkg.badge}</div>
                    <h4 className="font-heading font-bold text-xl text-white mb-2">{pkg.name}</h4>
                    
                    <div className="flex items-baseline gap-1 my-4">
                      <span className="font-heading font-extrabold text-3xl text-white">{pkg.price}</span>
                      <span className="text-xs text-slate-400">/ project</span>
                    </div>

                    <ul className="space-y-2.5 my-6">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg.name, pkg.price)}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:brightness-110'
                        : 'glass-panel text-slate-200 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Design Add-ons */}
            <div className="mt-6 glass-panel rounded-2xl p-4 border-slate-800">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-3">🎨 Graphic Design Add-ons</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {designAddons.map((addon) => (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                      selectedAddons.includes(addon.id)
                        ? 'bg-purple-500/20 border-purple-500/50 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{addon.name}</span>
                    <span className="font-bold text-purple-300 ml-2 shrink-0">{addon.textPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. Web Development Packages */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">Web Development Packages</h3>
                <p className="text-xs text-slate-400">Led by Kanishkar — Shopify, WordPress & Business Web UI</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {webDevPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`glass-card rounded-3xl p-6 flex flex-col justify-between relative ${
                    pkg.popular ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/10 bg-slate-900/80' : 'border-slate-800'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="text-xs text-cyan-400 font-semibold mb-1">{pkg.badge}</div>
                    <h4 className="font-heading font-bold text-xl text-white mb-2">{pkg.name}</h4>
                    
                    <div className="flex items-baseline gap-1 my-4">
                      <span className="font-heading font-extrabold text-3xl text-white">{pkg.price}</span>
                      <span className="text-xs text-slate-400">/ project</span>
                    </div>

                    <ul className="space-y-2.5 my-6">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg.name, pkg.price)}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:brightness-110'
                        : 'glass-panel text-slate-200 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Web Add-ons */}
            <div className="mt-6 glass-panel rounded-2xl p-4 border-slate-800">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-3">💻 Web Development Add-ons</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {webAddons.map((addon) => (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                      selectedAddons.includes(addon.id)
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{addon.name}</span>
                    <span className="font-bold text-cyan-300 ml-2 shrink-0">{addon.textPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Selected Add-ons Total Box */}
        {selectedAddons.length > 0 && (
          <div className="glass-panel p-4 rounded-2xl border-cyan-500/40 bg-cyan-950/20 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-200">
            <div className="flex items-center gap-3">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <div>
                <span className="text-xs text-slate-300 font-medium">Selected Add-ons Total: </span>
                <span className="font-heading font-extrabold text-lg text-cyan-400">₹{getAddonTotal().toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => onSelectPackage(`Custom Quote with ${selectedAddons.length} Add-on(s)`, `+₹${getAddonTotal()}`)}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire With Selected Add-ons</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
