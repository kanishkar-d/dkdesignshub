import React from 'react';
import { Target, Award, HeartHandshake, Eye, Sparkles, CheckCircle, PenTool, Layout, Languages, ShoppingCart } from 'lucide-react';

export default function AboutUs() {
  const coreValues = [
    {
      icon: Award,
      title: "Quality First",
      color: "from-amber-500 to-orange-500",
      description: "We never compromise on standard. Every design element, pixel, and typed character is refined to perfection before delivery."
    },
    {
      icon: HeartHandshake,
      title: "Trust & Integrity",
      color: "from-cyan-500 to-blue-500",
      description: "Clear expectations, straightforward pricing, and honest timelines for every client—no false promises or hidden costs."
    },
    {
      icon: Eye,
      title: "Transparency",
      color: "from-purple-500 to-indigo-500",
      description: "Complete clarity from the initial project quote to final handoff—you always know what is being built and delivered."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT US & OUR TEAM</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Dedicated Specialists Behind <span className="text-gradient">DL Creative Studio</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            At Dhanalakshmi Freelance Services, our philosophy is simple: exceptional digital services should be accessible, transparent, and hassle-free.
          </p>
        </div>

        {/* Story & Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Dhanalakshmi Profile Card */}
          <div className="glass-card rounded-3xl p-8 border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-rose-500 p-[2px] shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-heading font-extrabold text-2xl text-purple-300">
                  D
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">Dhanalakshmi</h3>
                <p className="text-purple-400 text-sm font-medium">Design & Document Specialist</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300">Graphic Design</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-pink-500/10 border border-pink-500/20 text-[11px] text-pink-300">Tamil & English Typing</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-[11px] text-rose-300">PDF to Word</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              With a keen eye for aesthetics and perfectionism in details, Dhanalakshmi leads our Graphic Design and Document Services divisions. She specializes in turning raw concepts into striking brand identities—ranging from memorable logos and social media graphics to custom product packaging. She also brings speed, accuracy, and multilingual capabilities (Tamil & English) to document formatting, data entry, and PDF conversion services.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Logos, Branding Kits & Product Packaging</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Data Entry, Formatting & Bilingual Typing (Tamil/English)</span>
              </div>
            </div>
          </div>

          {/* Kanishkar Profile Card */}
          <div className="glass-card rounded-3xl p-8 border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 p-[2px] shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-heading font-extrabold text-2xl text-cyan-300">
                  K
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">Kanishkar</h3>
                <p className="text-cyan-400 text-sm font-medium">Web Development & E-Commerce Architect</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300">Shopify Stores</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300">WordPress Builds</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300">Responsive Web UI</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Kanishkar brings ideas to life on the web. Specializing in custom Shopify storefronts, WordPress builds, responsive business websites, and modern web application logic, he focuses on fast load speeds, seamless navigation, and high mobile conversion rates. Kanishkar ensures every business has a powerful online presence that turns site visitors into paying customers.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Shopify E-Commerce Setup & Payment Gateway Integration</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom WordPress & Mobile-Responsive Business Sites</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mission Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 mb-16 text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mx-auto mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3">Our Mission Statement</h3>
          <p className="font-heading font-semibold text-lg sm:text-xl text-slate-200 italic max-w-3xl mx-auto leading-relaxed">
            “To provide simple, professional, and highly affordable digital services that help small businesses, entrepreneurs, and individuals grow with confidence.”
          </p>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-heading font-bold text-2xl text-white">Our Core Values</h3>
            <p className="text-slate-400 text-sm mt-1">The principles that guide every client interaction and deliverable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 border-slate-800 hover:border-slate-700">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} p-[1px] mb-4`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">{value.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
