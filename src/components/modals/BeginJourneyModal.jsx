import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Play, Pause, RotateCcw, Sparkles, Compass, Shield, Wind } from 'lucide-react';

export default function BeginJourneyModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [focusTimer, setFocusTimer] = useState(1500); // 25 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [ambientPreset, setAmbientPreset] = useState('focus');

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && focusTimer > 0) {
      interval = setInterval(() => {
        setFocusTimer(prev => prev - 1);
      }, 1000);
    } else if (focusTimer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, focusTimer]);

  if (!isOpen) return null;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const steps = [
    {
      step: 1,
      title: "Enter the Quiet Space",
      subtitle: "Strip away notifications, noise, and artificial urgency.",
      icon: Compass,
      description: "Velorah® creates digital environments designed to respect human attention span. We turn chaotic screens into calm sanctuaries.",
    },
    {
      step: 2,
      title: "Initiate Deep Focus",
      subtitle: "Test our signature distraction-free focus engine right now.",
      icon: Wind,
      description: "Experience effortless momentum with gentle cognitive pulses and zero visual clutter.",
    },
    {
      step: 3,
      title: "Shape Inspired Creations",
      subtitle: "Transform calm thoughts into clear, impactful work.",
      icon: Sparkles,
      description: "When noise recedes, your best thoughts surface. You are ready to build what matters.",
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-3xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close Journey Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50">The Velorah® Experience</span>
          <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Your Journey Begins Here
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Step through our three core pillars of silent productivity.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {steps.map((s) => (
            <button
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                currentStep === s.step
                  ? 'bg-white/10 border-white/30 text-white shadow-lg'
                  : 'bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono">0{s.step}</span>
                {currentStep > s.step && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
              </div>
              <p className="text-xs font-medium mt-1 truncate">{s.title}</p>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-rise">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/10 text-white">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {steps[0].title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{steps[0].subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {steps[0].description} Most modern software demands attention; Velorah® rewards focus. Our interfaces reduce cognitive load through precise hierarchy and quiet motion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <h4 className="text-xs font-medium text-white">Zero Notification Badges</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">No red dots or artificial urgency timers.</p>
                </div>
                <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                  <h4 className="text-xs font-medium text-white">Subtle Micro-Interactions</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Tactile feedback designed for calm flow state.</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-rise text-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Interactive Focus Engine</span>
                <h3 className="text-2xl font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Deep Focus Mode
                </h3>
              </div>

              {/* Timer Display */}
              <div className="flex flex-col items-center justify-center my-4">
                <div className="relative flex items-center justify-center w-40 h-40 rounded-full border-2 border-white/20 bg-black/30 shadow-inner">
                  <span className="text-4xl font-mono tracking-tight font-light text-white">
                    {formatTime(focusTimer)}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="liquid-glass px-5 py-2 rounded-full text-xs font-medium flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isTimerRunning ? 'Pause Session' : 'Start Focus'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setFocusTimer(1500);
                    }}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 animate-fade-rise">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/10 text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {steps[2].title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{steps[2].subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Welcome to the quiet rebellion. You are now equipped with an ecosystem crafted specifically to protect your creative energy.
              </p>
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 text-xs leading-relaxed">
                "The quietest minds produce the most resonant ideas." — Velorah® Studio Notes
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className={`text-xs text-muted-foreground hover:text-white transition-colors ${
              currentStep === 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            Previous Step
          </button>

          {currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
              className="liquid-glass rounded-full px-6 py-2.5 text-xs text-white hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="liquid-glass rounded-full px-8 py-2.5 text-xs font-medium text-white hover:scale-105 transition-transform bg-white/20 cursor-pointer"
            >
              Enter Sanctuary
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
