import React, { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown, Sparkles, Layers, Play, Pause } from 'lucide-react';

export default function WeDidModal({ isOpen, onClose, onOpenContact }) {
  const works = [
    {
      id: 1,
      title: "Luxe Beauty Salon & Studio",
      category: "Brand Poster & Social Campaign",
      tagline: "Glow. Confidence. Beauty.",
      image: "/works/work1_luxe_beauty.jpg",
      description: "Custom promotional flyer & brand creative designed for Luxe Beauty Salon in Anna Nagar, Chennai. Featuring 20% off offer layout & elegant typography."
    },
    {
      id: 2,
      title: "Glow Elixir Radiance Serum",
      category: "Product Launch & E-Commerce Graphic",
      tagline: "Experience the Glow — Radiant Skin, Every Day",
      image: "/works/work2_glow_elixir.jpg",
      description: "High-converting product advertisement poster with natural botanical elements, luxury gold accents, and 30% launch offer banner."
    },
    {
      id: 3,
      title: "Taste Kitchen — Weekend Special",
      category: "Food & Restaurant Marketing",
      tagline: "Good Food | Good Mood",
      image: "/works/work3_taste_kitchen.jpg",
      description: "Eye-catching restaurant promotional banner featuring a gourmet burger combo deal, price callouts, and fast delivery badges."
    },
    {
      id: 4,
      title: "Urban Nest Properties",
      category: "Real Estate & Architecture Banner",
      tagline: "Your Dream Home Starts Here",
      image: "/works/work4_urban_nest.jpg",
      description: "Modern luxury real estate banner highlighting 2, 3 & 4 BHK apartments in OMR, Chennai with key amenity icons and site visit CTA."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    let interval;
    if (autoPlay && isOpen) {
      interval = setInterval(() => {
        handleNext();
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [autoPlay, isOpen, activeIndex]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % works.length);
      setIsSliding(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
      setIsSliding(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-rise">
      <div className="relative w-full max-w-4xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[92vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4 z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">DK DESIGNS HUBS®</span>
              <span className="text-[10px] bg-white/10 text-white/90 px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1">
                <Layers className="w-3 h-3 text-cyan-300" /> Stacked Glassy Gallery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              We Did — Client Showcase
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Click active card or press "Slide Up Next" to navigate our stacked glassy work deck.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Stacked Glassy Cards Container */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] flex items-center justify-center my-2 select-none overflow-hidden">
          
          {works.map((work, idx) => {
            const offset = (idx - activeIndex + works.length) % works.length;
            if (offset > 3) return null;

            const isTop = offset === 0;

            let transformClass = "translate-y-0 scale-100 z-30 opacity-100 filter-none";
            let glassOverlayClass = "bg-transparent backdrop-blur-none border-white/30";

            if (offset === 1) {
              transformClass = "translate-y-6 scale-95 z-20 opacity-80 rotate-1";
              glassOverlayClass = "bg-black/40 backdrop-blur-md border-white/20";
            } else if (offset === 2) {
              transformClass = "translate-y-12 scale-90 z-10 opacity-50 -rotate-1";
              glassOverlayClass = "bg-black/60 backdrop-blur-lg border-white/10";
            } else if (offset === 3) {
              transformClass = "translate-y-16 scale-85 z-0 opacity-20 rotate-2";
              glassOverlayClass = "bg-black/80 backdrop-blur-xl border-white/5";
            }

            const slidingAnimationClass = (isTop && isSliding) 
              ? "-translate-y-[130%] opacity-0 scale-95 rotate-[-4deg] transition-all duration-500 ease-out" 
              : "transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)";

            return (
              <div
                key={work.id}
                onClick={isTop ? handleNext : () => setActiveIndex(idx)}
                className={`absolute w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border shadow-2xl cursor-pointer ${transformClass} ${slidingAnimationClass}`}
                style={{
                  top: '10px',
                  boxShadow: isTop ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 240, 255, 0.15)' : 'none'
                }}
              >
                {/* Poster Image */}
                <div className="relative aspect-square w-full bg-black/40 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Glassy Blur Overlay for cards behind top card */}
                  {!isTop && (
                    <div className={`absolute inset-0 ${glassOverlayClass} pointer-events-none transition-all duration-500`} />
                  )}

                  {/* Top Card Badge Overlay */}
                  {isTop && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] text-white font-mono flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
                      <span>{work.category}</span>
                    </div>
                  )}

                  {/* Bottom Caption Gradient on Top Card */}
                  {isTop && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 text-white backdrop-blur-[2px]">
                      <span className="text-[11px] font-mono uppercase text-cyan-300 tracking-widest">{work.tagline}</span>
                      <h3 className="text-xl sm:text-2xl font-normal mt-0.5 text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {work.title}
                      </h3>
                      <p className="text-xs text-white/90 mt-1 line-clamp-2 leading-relaxed">{work.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Control Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground">
              Work <strong className="text-white">0{activeIndex + 1}</strong> / 0{works.length}
            </span>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-colors flex items-center gap-1.5 cursor-pointer ${
                autoPlay ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              {autoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{autoPlay ? 'Autoplay On' : 'Autoplay Off'}</span>
            </button>
          </div>

          {/* Slide Up Next Button Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full liquid-glass text-white hover:scale-105 transition-transform cursor-pointer"
              title="Previous Work"
            >
              <ChevronDown className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="liquid-glass rounded-full px-6 py-2.5 text-xs text-white hover:scale-105 transition-transform flex items-center gap-2 font-medium cursor-pointer shadow-lg"
            >
              <ChevronUp className="w-4 h-4 text-cyan-300" />
              <span>Slide Up Next</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
