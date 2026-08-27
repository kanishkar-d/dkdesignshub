import React from 'react';
import { FileText, Palette, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function NoirServices() {
  const services = [
    {
      id: 'typing',
      title: 'Typing',
      subtitle: 'Data Entry & Transcription',
      icon: FileText,
      color: 'from-[#FF2A85] to-purple-600',
      accentColor: 'text-[#FF2A85]',
      borderColor: 'group-hover:border-[#FF2A85]/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(255,42,133,0.2)]',
      description: 'Accurate, high-speed data entry and transcription services with uncompromising precision.',
      bullets: [
        'PDF to Word / Excel Formatting',
        'Tamil & English Typing',
        'Corporate Report Styling',
        '100% Accuracy Guarantee'
      ]
    },
    {
      id: 'design',
      title: 'Graphic Design',
      subtitle: 'Branding & Visual Identity',
      icon: Palette,
      color: 'from-purple-500 to-[#00F0FF]',
      accentColor: 'text-purple-400',
      borderColor: 'group-hover:border-purple-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
      description: 'Striking visual identities, compelling marketing materials, and digital assets.',
      bullets: [
        'Logo & Brand Identity Kits',
        'Product Packaging & Label Prints',
        'Social Media Asset Packs',
        'Vector Source Files Included'
      ]
    },
    {
      id: 'webdev',
      title: 'Web Development',
      subtitle: 'Shopify, WordPress & Custom Web Apps',
      icon: Code2,
      color: 'from-[#00F0FF] to-blue-600',
      accentColor: 'text-[#00F0FF]',
      borderColor: 'group-hover:border-[#00F0FF]/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]',
      description: 'Modern, responsive, and highly functional web experiences built with cutting-edge tech.',
      bullets: [
        'Shopify E-Commerce Stores',
        'Custom WordPress Builds',
        'Mobile & Tablet Optimization',
        'Fast Load Speeds & SEO Structure'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#05050A] relative z-10 border-t border-[#1E1E32]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[#FF2A85] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              WHAT WE DO
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              OUR SERVICES
            </h2>
          </div>
          <p className="font-sans text-sm text-[#8E8EA8] max-w-md">
            Tailored digital expertise engineered for entrepreneurs, growing startups, and corporate clients.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className={`group p-8 rounded-2xl bg-[#0D0D18] border border-[#1E1E32] transition-all duration-300 flex flex-col justify-between ${svc.borderColor} ${svc.glowColor}`}
              >
                <div>
                  {/* Top Icon Badge */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${svc.color} p-[1px] mb-6`}>
                    <div className="w-full h-full bg-[#05050A] rounded-[11px] flex items-center justify-center text-white">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${svc.accentColor}`}>
                    {svc.subtitle}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white mb-3 uppercase">
                    {svc.title}
                  </h3>

                  {/* Main Description exact from prompt */}
                  <p className="font-sans text-sm text-[#8E8EA8] font-normal leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-[#1E1E32]">
                    {svc.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${svc.accentColor}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <a
                  href="#contact"
                  className="py-3 px-4 rounded-xl bg-[#05050A] border border-[#1E1E32] text-xs font-bold uppercase tracking-widest text-white hover:bg-[#FF2A85] hover:border-[#FF2A85] transition-all flex items-center justify-between group/btn"
                >
                  <span>GET STARTED</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF2A85] group-hover/btn:text-white transition-colors" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
