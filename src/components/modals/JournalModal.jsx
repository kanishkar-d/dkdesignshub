import React, { useState } from 'react';
import { X, BookOpen, Clock, ArrowLeft, Share2, Check } from 'lucide-react';

export default function JournalModal({ isOpen, onClose }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const articles = [
    {
      id: 'arch-silence',
      title: 'The Architecture of Silence',
      subtitle: 'Designing high-cognition environments in a hyper-connected world.',
      date: 'March 2026',
      readTime: '4 min read',
      author: 'Evelyn Vane',
      content: `When we evaluate digital interfaces, we often measure what is present: buttons, navigation trees, widget counts, and animation speeds. Rarely do we evaluate what is absent.

Silence in digital design is not empty space; it is the visual equivalent of quiet air. It allows the mind to settle into deep focus without fighting for domain over attention.

At Velorah®, we construct interfaces around three core spatial rules:
1. Every component must justify its pixel real estate.
2. Motion should feel like physical inertia, never artificial bounce.
3. Typography must carry weight without needing loud background contrast.`
    },
    {
      id: 'quiet-software',
      title: 'In Praise of Quiet Software',
      subtitle: 'Why eliminating notification loops increases long-term creative longevity.',
      date: 'February 2026',
      readTime: '6 min read',
      author: 'Marcus Vance',
      content: `The average knowledge worker receives over 120 notifications a day. Each ping causes a subtle spike in cortisol, fragmenting the continuity of thought needed for breakthrough creative work.

Quiet software turns this model upside down. It operates asynchronously. It trusts the user to inspect updates when ready, rather than demanding immediate eye contact.

When you remove the red dots, the unread counters, and the urgent banners, something remarkable happens: deep work becomes effortless again.`
    },
    {
      id: 'glass-refraction',
      title: 'Glassmorphism & Spatial Refraction',
      subtitle: 'The physics of luminosity, border masks, and visual depth in modern web apps.',
      date: 'January 2026',
      readTime: '5 min read',
      author: 'Sora Chen',
      content: `Flat design flattened our emotional connection to software. Glassmorphism reintroduced physical tactile cues — depth, light diffusion, and structural boundaries.

By using subtle HSL luminosity overlays, backdrop blurs, and gradient border masks, we create windows that feel grounded in light. The background video provides natural depth while text remains perfectly legible.`
    }
  ];

  const handleShare = (title) => {
    navigator.clipboard.writeText(`${window.location.origin} — ${title}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-4xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">Velorah® Journal</span>
            <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Essays on Quiet Craft
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close Journal Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Reader Sub-View */}
        {selectedArticle ? (
          <div className="flex-1 overflow-y-auto pr-2 animate-fade-rise">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </button>

              <button
                onClick={() => handleShare(selectedArticle.title)}
                className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-cyan-300" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>

            <article className="max-w-2xl mx-auto space-y-6 py-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                  <span>•</span>
                  <span>By {selectedArticle.author}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl text-white font-normal leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {selectedArticle.title}
                </h1>
                <p className="text-base text-muted-foreground italic">{selectedArticle.subtitle}</p>
              </div>

              <div className="h-px bg-white/10 w-full my-6" />

              <div className="text-sm text-white/85 leading-relaxed space-y-4 whitespace-pre-line font-normal">
                {selectedArticle.content}
              </div>
            </article>
          </div>
        ) : (
          /* Article List View */
          <div className="flex-1 overflow-y-auto pr-1 space-y-4">
            {articles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="group liquid-glass p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl text-white font-normal group-hover:text-cyan-200 transition-colors" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {art.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{art.subtitle}</p>
                </div>

                <div className="flex items-center text-xs text-white/70 group-hover:text-white font-medium gap-1 shrink-0">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
