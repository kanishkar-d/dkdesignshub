import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle2, PhoneCall, Mail, Sparkles } from 'lucide-react';

export default function NoirCTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Graphic Design',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello NOIR AGENCY! My name is ${formData.name || 'Client'}. I am interested in ${formData.service}. Message: ${formData.message || 'I would like a quote.'}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#05050A] relative z-10 border-t border-[#1E1E32]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0D0D18] via-[#140b24] to-[#0D0D18] border border-[#FF2A85]/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2A85]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF2A85]/10 border border-[#FF2A85]/30 text-xs font-bold text-[#FF2A85] uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START YOUR PROJECT TODAY</span>
              </div>

              <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white uppercase leading-none tracking-tight">
                LET'S BUILD <br />
                <span className="bg-gradient-to-r from-[#FF2A85] to-[#00F0FF] bg-clip-text text-transparent text-glow-pink">
                  SOMETHING BOLD.
                </span>
              </h2>

              <p className="font-sans text-sm text-[#8E8EA8] leading-relaxed max-w-md">
                Ready to transform your brand, build a high-converting web store, or digitize corporate documents? Contact Dhanalakshmi & Kanishkar today.
              </p>

              {/* Direct Phones */}
              <div className="pt-4 space-y-3 border-t border-[#1E1E32]">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#05050A] border border-[#1E1E32]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FF2A85]/20 text-[#FF2A85] flex items-center justify-center font-bold text-xs">
                      D
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Dhanalakshmi</div>
                      <div className="text-[10px] text-[#8E8EA8]">Graphic Design & Typing Services</div>
                    </div>
                  </div>
                  <a href="tel:+919876543210" className="text-xs font-bold text-[#FF2A85] hover:underline">
                    +91 98765 43210
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#05050A] border border-[#1E1E32]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center font-bold text-xs">
                      K
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Kanishkar</div>
                      <div className="text-[10px] text-[#8E8EA8]">Web Dev & Shopify Solutions</div>
                    </div>
                  </div>
                  <a href="tel:+919876543211" className="text-xs font-bold text-[#00F0FF] hover:underline">
                    +91 98765 43211
                  </a>
                </div>
              </div>

            </div>

            {/* Right Form */}
            <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl bg-[#05050A]/80 border border-[#1E1E32]">
              
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#00F0FF] mx-auto animate-bounce" />
                  <h3 className="font-heading font-extrabold text-2xl text-white uppercase">MESSAGE RECEIVED</h3>
                  <p className="text-xs text-[#8E8EA8]">We will get back to you within 2-4 hours to kick off your project.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-[#1E1E32] text-xs font-bold uppercase text-white hover:bg-[#FF2A85]"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#8E8EA8] block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-white text-xs focus:outline-none focus:border-[#FF2A85]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#8E8EA8] block mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-white text-xs focus:outline-none focus:border-[#FF2A85]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#8E8EA8] block mb-1">Select Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-white text-xs focus:outline-none focus:border-[#FF2A85]"
                      >
                        <option value="Graphic Design">Graphic Design & Branding</option>
                        <option value="Web Development">Web Development (Shopify & WP)</option>
                        <option value="Typing Services">Typing & Data Entry</option>
                        <option value="Full Agency Bundle">Full Agency Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#8E8EA8] block mb-1">Project Scope / Details</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your goals, timeframe, and specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0D18] border border-[#1E1E32] text-white text-xs focus:outline-none focus:border-[#FF2A85]"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-[#FF2A85] hover:bg-[#ff4294] shadow-lg glow-pink transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>CONTACT US</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 hover:bg-[#00F0FF]/20 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
                      <span>WHATSAPP CHAT</span>
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
