import React from 'react';
import { Layers, ArrowRight, Send } from 'lucide-react';

export default function Hero({ onOpenQuote, onOpenWeDid }) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] min-h-[calc(100vh-100px)]">
      {/* H1 Heading with Instrument Serif & em color contrast wrappers */}
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        High-Impact <em className="not-italic text-muted-foreground">Design</em>, Pixel-Perfect{' '}
        <em className="not-italic text-muted-foreground">Code</em> & Document Services.
      </h1>

      {/* Subtext Paragraph */}
      <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
        Partner with <strong className="text-white font-medium">DK DESIGNS HUBS</strong> (<span className="text-cyan-300">dkdesignshubs.com</span>) for affordable, reliable, and premium digital solutions tailored to small businesses, startups, and growing enterprises.
      </p>

      {/* Hero CTA Button Pair */}
      <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
        {/* We Did Primary Showcase Button */}
        <button
          onClick={onOpenWeDid}
          className="liquid-glass rounded-full px-10 py-4 sm:py-5 text-sm sm:text-base text-foreground hover:scale-[1.03] cursor-pointer transition-transform duration-300 font-medium tracking-wide flex items-center justify-center gap-3 group border border-white/25 shadow-2xl"
        >
          <Layers className="w-5 h-5 text-cyan-300 group-hover:rotate-12 transition-transform" />
          <span>We Did — Portfolio Stack</span>
          <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Pink Plated Liquid Glass Button with Unique Shining Flare on Cursor Hover */}
        <button
          onClick={onOpenQuote}
          className="pink-liquid-glass rounded-full px-10 py-4 sm:py-5 text-sm sm:text-base text-white font-medium tracking-wide flex items-center justify-center gap-3 group cursor-pointer shadow-2xl"
        >
          <Send className="w-4 h-4 text-pink-300 group-hover:scale-110 transition-transform" />
          <span className="text-pink-100 group-hover:text-white transition-colors">Get Free Consultation & Quote</span>
          <span className="text-pink-300 group-hover:translate-x-1.5 transition-transform duration-300 font-bold">→</span>
        </button>
      </div>
    </section>
  );
}
