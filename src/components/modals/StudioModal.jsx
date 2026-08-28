import React, { useState } from 'react';
import { X, ExternalLink, Layers, Cpu, Eye, Sparkles, Check } from 'lucide-react';

export default function StudioModal({ isOpen, onClose, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  if (!isOpen) return null;

  const projects = [
    {
      id: 'sanctuary',
      title: 'Sanctuary UI',
      category: 'Design System',
      description: 'A quiet, glassmorphic design token system built for high-cognition creative platforms.',
      tags: ['React', 'Tailwind', 'Design System'],
      metrics: '40% lower visual strain',
      details: 'Sanctuary UI eliminates unnecessary borders and harsh contrasts in favor of subtle glass refraction, harmonious HSL dark themes, and organic motion curves.',
    },
    {
      id: 'aura',
      title: 'Aura Workspace',
      category: 'Application',
      description: 'Distraction-free environment for deep writers, researchers, and quiet thinkers.',
      tags: ['TypeScript', 'Electron', 'Local-First'],
      metrics: 'Zero notification badges',
      details: 'Aura removes all status bars, toolbars, and popups. Your canvas is absolute, paired with real-time markdown typography rendered with Instrument Serif.',
    },
    {
      id: 'zenith',
      title: 'Zenith Canvas',
      category: 'Spatial Tool',
      description: 'Infinite visual thought playground that respects cognitive flow.',
      tags: ['Canvas API', 'WebGL', 'Spatial UI'],
      metrics: '60 FPS fluid rendering',
      details: 'Zenith allows creators to place ideas, notes, and media anywhere on an unconstrained plane with fluid physics and minimalist zoom layers.',
    },
    {
      id: 'nocturne',
      title: 'Nocturne Sound Engine',
      category: 'Audio Architecture',
      description: 'Browser-native procedural acoustic generator engineered to enhance alpha brainwave focus.',
      tags: ['Web Audio API', 'DSP', 'Soundscape'],
      metrics: '100% offline synthesis',
      details: 'Generates non-repeating acoustic brown noise and gentle resonant sine waves directly in the browser with zero external dependencies.',
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-4xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300/80">Velorah® Studio</span>
            <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Crafting Silent Digital Space
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close Studio Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-3 border-b border-white/10 pb-4 mb-6">
          {[
            { id: 'projects', label: 'Selected Works' },
            { id: 'ethos', label: 'Design Principles' },
            { id: 'tech', label: 'Technical Stack' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === t.id
                  ? 'bg-white text-black font-medium'
                  : 'text-muted-foreground hover:text-white bg-white/5'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-1">
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map(p => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className="group liquid-glass p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-cyan-300/90 uppercase">{p.category}</span>
                      <span className="text-[10px] bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full">{p.metrics}</span>
                    </div>
                    <h3 className="text-xl font-normal text-white group-hover:text-cyan-200 transition-colors" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10px] text-white/50 bg-white/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Eye className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ethos' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  1. Attention as a Sacred Resource
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We refuse to optimize for screen time or addictive loop cycles. Software should return time to the user, allowing them to jump in, create, and leave in peace.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  2. Sensory Restraint
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Over-decorated interfaces create noise. We embrace monochromatic glass, restrained accent hues, and natural light refractions that feel like physical objects.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  3. Permanent Speed & Local Precision
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Inputs must respond instantly. We prioritize low latency, clean DOM architecture, and local caching over bloated cloud round-trips.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'React & Vite', desc: 'Fast, deterministic component architecture with hot module replacement.' },
                { title: 'Tailwind CSS & Glassmorphism', desc: 'Utility-first CSS paired with custom HSL token variables and border masks.' },
                { title: 'Instrument Serif Typography', desc: 'Display typography tailored for editorial clarity and elegance.' },
                { title: 'Browser Web Audio API', desc: 'Native audio synthesis without external sound files.' },
              ].map(tech => (
                <div key={tech.title} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-white mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{tech.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selected Project Detailed Modal Sub-View */}
        {selectedProject && (
          <div className="absolute inset-0 bg-[#00172e]/95 backdrop-blur-2xl p-8 z-20 flex flex-col justify-between animate-fade-rise">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-cyan-300">{selectedProject.category}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-3xl sm:text-4xl text-white font-normal mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {selectedProject.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {selectedProject.details}
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-mono text-muted-foreground uppercase">Key Spec</div>
                <div className="text-sm text-cyan-200 font-medium">{selectedProject.metrics}</div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs text-muted-foreground hover:text-white"
              >
                ← Back to Studio Overview
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onClose();
                  onOpenContact();
                }}
                className="liquid-glass rounded-full px-6 py-2 text-xs text-white hover:scale-105"
              >
                Inquire Project Collaboration
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>Velorah® Studio — Version 2.4</span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            Start a project with us →
          </button>
        </div>
      </div>
    </div>
  );
}
