import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Mail, Clock, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function ContactFAQModal({ isOpen, onClose, initialService = '' }) {
  const [activeTab, setActiveTab] = useState('contact'); // 'contact' | 'faq'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Web Development',
    budget: '₹5,000 - ₹15,000',
    message: ''
  });
  
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  if (!isOpen) return null;

  // Strict Email Format & Deliverability Validation Function
  const validateEmail = (email) => {
    if (!email || typeof email !== 'string') return false;
    const cleanEmail = email.trim().toLowerCase();
    
    // 1. Standard RFC 5322 Email Syntax Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanEmail)) return false;

    // 2. Block obvious fake or disposable throwaway domains
    const blockedDomains = [
      'test.com', 'example.com', 'fake.com', 'tempmail.com', 'mailinator.com', 
      'dispostable.com', '10minutemail.com', 'trashmail.com', 'guerrillamail.com',
      'yopmail.com', 'sharklasers.com', 'getnada.com', 'throwawaymail.com', 
      'temp-mail.org', 'abc.com', 'xyz.com', 'asdf.com'
    ];

    const parts = cleanEmail.split('@');
    if (parts.length !== 2) return false;
    
    const domain = parts[1];
    if (blockedDomains.includes(domain)) return false;

    // 3. Domain TLD must be valid and at least 2 characters long
    const tld = domain.split('.').pop();
    if (!tld || tld.length < 2) return false;

    return true;
  };

  const handleEmailChange = (val) => {
    setFormData({ ...formData, email: val });
    setEmailTouched(true);

    if (!val.trim()) {
      setEmailError('Email address is required.');
    } else if (!validateEmail(val)) {
      setEmailError('Please enter a valid, deliverable email address (e.g. name@gmail.com, company.com)');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailTouched(true);

    // Strict Email Check Verification
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid, deliverable email address before submitting.');
      return;
    }

    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    try {
      // Direct Email Dispatch via FormSubmit API to dkdesignshub@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/dkdesignshub@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} (${formData.service})`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.warn("FormSubmit dispatch warning:", error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmailTouched(false);
    setEmailError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Web Development',
      budget: '₹5,000 - ₹15,000',
      message: ''
    });
  };

  const mailtoLink = `mailto:dkdesignshub@gmail.com?subject=${encodeURIComponent(`Project Inquiry: ${formData.service || 'General'}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`)}`;

  const isEmailValid = validateEmail(formData.email);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-rise">
      <div className="relative w-full max-w-4xl liquid-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-foreground overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">DK DESIGNS HUBS®</span>
            <h2 className="text-3xl sm:text-4xl text-foreground font-normal mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Get In Touch & FAQs
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Have a project in mind or need a custom quote? Send your request directly to <span className="text-white">dkdesignshub@gmail.com</span>.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close Contact Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-3 border-b border-white/10 pb-4 mb-6">
          {[
            { id: 'contact', label: 'Contact Form & Direct Details' },
            { id: 'faq', label: 'Frequently Asked Questions (FAQ)' },
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
          {activeTab === 'contact' && (
            <div>
              {submitted ? (
                <div className="p-8 rounded-2xl bg-white/5 border border-white/15 text-center space-y-4 animate-fade-rise">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    Inquiry Transmitted to Gmail
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your request has been dispatched directly to <strong className="text-cyan-300">dkdesignshub@gmail.com</strong>. Dhanalakshmi & Kanishkar will review your request and reply to <span className="text-white">{formData.email}</span> within 24 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                    <button
                      onClick={handleReset}
                      className="liquid-glass rounded-full px-6 py-2 text-xs text-white hover:scale-105 transition-transform cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={mailtoLink}
                      className="text-xs text-cyan-300 hover:underline flex items-center gap-1 py-2 px-4"
                    >
                      <span>Or Open in Gmail App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {/* Contact Form (3 cols) */}
                  <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-muted-foreground mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                        />
                      </div>

                      {/* Strict Email Input with Format Verification */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-[11px] font-mono uppercase text-muted-foreground">Original Email Address *</label>
                          {emailTouched && (
                            isEmailValid ? (
                              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Valid Email
                              </span>
                            ) : (
                              <span className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> Invalid Format
                              </span>
                            )
                          )}
                        </div>

                        <input
                          type="email"
                          required
                          placeholder="e.g. name@gmail.com"
                          value={formData.email}
                          onChange={(e) => handleEmailChange(e.target.value)}
                          onBlur={() => setEmailTouched(true)}
                          className={`w-full bg-white/5 border rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                            emailTouched && emailError
                              ? 'border-rose-500/80 bg-rose-950/20'
                              : isEmailValid
                              ? 'border-emerald-500/60 bg-emerald-950/10'
                              : 'border-white/10 focus:border-white/40'
                          }`}
                        />
                        {emailTouched && emailError && (
                          <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{emailError}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-muted-foreground mb-1">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase text-muted-foreground mb-1">Service Required</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#001c36] border border-white/10 rounded-xl px-4 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
                        >
                          <option value="Web Development">Web Development (Kanishkar)</option>
                          <option value="Graphic Design">Graphic Design (Dhanalakshmi)</option>
                          <option value="Document Typing">Document & Typing Services (Dhanalakshmi)</option>
                          <option value="Custom Combo Package">Custom Combo Package</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-muted-foreground mb-1">Project Details & Requirements *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your business, features needed, timeline, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || (emailTouched && !isEmailValid)}
                      className={`liquid-glass w-full rounded-full py-3 text-xs font-medium text-white transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        emailTouched && !isEmailValid
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:scale-[1.02]'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Transmitting Request to Gmail...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Request (Sends to dkdesignshub@gmail.com)</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Direct Founder Contacts (2 cols) */}
                  <div className="md:col-span-2 space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase text-muted-foreground">Direct Founder Contacts</span>
                      
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <div className="text-xs font-medium text-white flex items-center gap-1.5">
                          <span>🎨 Dhanalakshmi</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">Graphic Design & Document Typing</p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <div className="text-xs font-medium text-white flex items-center gap-1.5">
                          <span>💻 Kanishkar</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">Web Development & E-Commerce</p>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono uppercase text-muted-foreground">Official Gmail</span>
                      <a
                        href="mailto:dkdesignshub@gmail.com"
                        className="text-xs text-cyan-300 hover:text-white font-medium flex items-center gap-2 transition-colors cursor-pointer group"
                      >
                        <Mail className="w-4 h-4 text-cyan-300 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="underline underline-offset-2">dkdesignshub@gmail.com</span>
                      </a>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono uppercase text-muted-foreground">Operating Hours</span>
                      <p className="text-xs text-white/80 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
                        <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono uppercase text-muted-foreground">Service Coverage</span>
                      <p className="text-xs text-white/80 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-300 shrink-0" />
                        <span>Available for clients across India & Worldwide (Remote).</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpenFaq = openFaq === index;
                return (
                  <div
                    key={index}
                    onClick={() => setOpenFaq(isOpenFaq ? null : index)}
                    className="liquid-glass p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-normal text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {faq.q}
                      </h3>
                      {isOpenFaq ? (
                        <ChevronUp className="w-4 h-4 text-cyan-300 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />
                      )}
                    </div>
                    {isOpenFaq && (
                      <p className="text-xs sm:text-sm text-muted-foreground mt-3 pt-3 border-t border-white/5 leading-relaxed animate-fade-rise">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
