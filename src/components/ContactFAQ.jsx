import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  Palette,
  Code2
} from 'lucide-react';

export default function ContactFAQ({ selectedPackageInfo, clearSelectedPackage }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Graphic Design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      q: "Do you accept custom or tailored project requests?",
      a: "Yes, absolutely! If our standard packages don't fit your exact requirements, contact us for a custom proposal tailored to your specific scope, features, and budget."
    },
    {
      q: "Can I request revisions if I need changes?",
      a: "Yes! Every single package includes clear revision rounds to ensure you are 100% satisfied with the outcome before final handoff and file delivery."
    },
    {
      q: "What is the typical turnaround time for a project?",
      a: "Typing & Document projects are completed in 24–48 hours. Graphic Design projects take 3–7 business days depending on the tier. Web Development takes 5–14 business days."
    },
    {
      q: "How do we get started?",
      a: "Simply reach out via phone, WhatsApp, or the contact form below. We'll discuss your requirements, provide a transparent final quote, and kick off work upon agreement."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const pkgText = selectedPackageInfo ? ` (Interested in: ${selectedPackageInfo.name} - ${selectedPackageInfo.price})` : '';
    const text = encodeURIComponent(
      `Hello DL Creative Studio! My name is ${formData.name || 'Client'}. I am interested in ${formData.serviceType}${pkgText}. Details: ${formData.message || 'I would like a quote.'}`
    );
    window.open(`https://wa.me/919000000000?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Get In Touch & <span className="text-gradient">Start Your Project</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Have a project in mind or need a custom quote? We’re always here to chat, answer questions, and guide you on the best solution for your business.
          </p>
        </div>

        {/* Founder Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Dhanalakshmi Card */}
          <div className="glass-card rounded-3xl p-6 border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-heading font-extrabold text-xl shrink-0">
                D
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Dhanalakshmi</h3>
                <p className="text-xs text-purple-400 font-medium">Design & Document Inquiries</p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-emerald-400" />
                  <span>+91 98765 43210</span>
                </p>
              </div>
            </div>
            <a
              href="tel:+919876543210"
              className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold hover:bg-purple-500/30 transition-all shrink-0"
            >
              Call Direct
            </a>
          </div>

          {/* Kanishkar Card */}
          <div className="glass-card rounded-3xl p-6 border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-heading font-extrabold text-xl shrink-0">
                K
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Kanishkar</h3>
                <p className="text-xs text-cyan-400 font-medium">Web Dev & Shopify Inquiries</p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-emerald-400" />
                  <span>+91 98765 43211</span>
                </p>
              </div>
            </div>
            <a
              href="tel:+919876543211"
              className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold hover:bg-cyan-500/30 transition-all shrink-0"
            >
              Call Direct
            </a>
          </div>

        </div>

        {/* Grid layout for Form + Hours & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border-slate-800">
            <h3 className="font-heading font-bold text-xl text-white mb-2">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">Fill out the form below or chat directly on WhatsApp for an instant response.</p>

            {selectedPackageInfo && (
              <div className="mb-6 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between">
                <span>Selected Package: <strong>{selectedPackageInfo.name} ({selectedPackageInfo.price})</strong></span>
                <button onClick={clearSelectedPackage} className="underline text-slate-400 hover:text-white">Clear</button>
              </div>
            )}

            {submitted ? (
              <div className="p-8 text-center space-y-4 glass-panel rounded-2xl border-emerald-500/30">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-heading font-bold text-xl text-white">Thank You!</h4>
                <p className="text-slate-300 text-sm">We have received your project inquiry and will contact you within 2-4 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-slate-800 text-xs text-slate-200 hover:text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Phone Number / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Service Required</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Graphic Design">Graphic Design (Logos & Branding)</option>
                      <option value="Web Development">Web Development (Shopify & WP)</option>
                      <option value="Typing Services">Typing & Document Formatting</option>
                      <option value="Full Digital Package">Full Custom Combo Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Project Details / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little bit about your project goals, deadlines, and features needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-3.5 px-6 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/60 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Hours & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operating Hours Box */}
            <div className="glass-card rounded-3xl p-6 border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">Operating Hours & Availability</h4>
                  <p className="text-xs text-slate-400">Serving clients across India & worldwide</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Monday – Saturday:</span>
                  <span className="font-semibold text-white">9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sunday:</span>
                  <span className="text-amber-400 font-medium">Closed (Emergency text support)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Email Contact:</span>
                  <span className="text-cyan-400">contact@dlcreativestudio.com</span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="glass-card rounded-3xl p-6 border-slate-800 space-y-4">
              <h4 className="font-heading font-bold text-lg text-white mb-2">Frequently Asked Questions</h4>
              
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-200 flex items-center justify-between hover:text-white"
                    >
                      <span>{faq.q}</span>
                      {openFaq === index ? <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
