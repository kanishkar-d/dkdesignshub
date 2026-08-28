import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, MapPin, Globe } from 'lucide-react';

export default function ReachUsModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Studio Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', inquiryType: 'Studio Collaboration', message: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-3xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close Reach Us Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">Reach Us</span>
          <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Let's Initiate a Conversation
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Whether you need a custom digital sanctuary, design audit, or quiet tool consultation.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/15 text-center space-y-4 animate-fade-rise">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Message Transmitted
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Thank you, {formData.name}. Our studio team reviews inquiries twice daily. Expect a thoughtful response at <span className="text-white">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="liquid-glass rounded-full px-6 py-2 text-xs text-white hover:scale-105 transition-transform mt-4"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Form (3 cols) */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Evelyn Vane"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="evelyn@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">Inquiry Nature</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-[#001c36] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
                >
                  <option value="Studio Collaboration">Studio Collaboration</option>
                  <option value="Design System Audit">Design System Audit</option>
                  <option value="Custom Tooling">Custom Tooling</option>
                  <option value="General Thoughts">General Thoughts</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="liquid-glass w-full rounded-full py-3 text-xs font-medium text-white hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Inquiry</span>
                  </>
                )}
              </button>
            </form>

            {/* Studio Info Sidebar (2 cols) */}
            <div className="md:col-span-2 space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-muted-foreground">Direct Mail</span>
                <p className="text-sm text-white font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-300" />
                  <span>inquiry@velorah.studio</span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-muted-foreground">Studio Nodes</span>
                <p className="text-xs text-white/80 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                  <span>Zurich — Seefeldstrasse 12<br />Tokyo — Shibuya Sky Tower</span>
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase text-muted-foreground">Network</span>
                <div className="flex items-center space-x-3 text-xs">
                  {['X / Twitter', 'GitHub', 'Are.na', 'ReadCV'].map((net) => (
                    <a
                      key={net}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      {net}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
