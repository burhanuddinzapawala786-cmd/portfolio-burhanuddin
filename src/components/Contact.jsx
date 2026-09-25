import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian-950 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-cyan/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-slate-800 text-xs font-mono text-brand-cyan">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch &amp; Collaborate
          </h2>
          <p className="text-slate-400 text-sm">
            Interested in full stack MERN development, high-performance API design, or consulting? Drop me a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Quick Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Copy Card */}
            <div className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <div className="text-sm font-bold text-white font-mono truncate">{personalDetails.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-xl bg-obsidian-850 border border-slate-700 text-slate-200 font-mono text-xs hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-brand-cyan" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone & Location Card */}
            <div className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Phone / WhatsApp</div>
                  <a href={`tel:${personalDetails.phone}`} className="text-sm font-bold text-white font-mono hover:text-brand-cyan">
                    {personalDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-bold text-white font-mono">{personalDetails.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800/90 shadow-xl flex items-center justify-around">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-brand-cyan text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-5 h-5" /> GitHub Profile
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-brand-indigo text-xs font-mono transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" /> LinkedIn Profile
              </a>
            </div>

          </div>

          {/* Right Column: Direct Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900 border border-slate-800/90 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <MessageSquare className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-lg font-bold text-white font-mono">Send Direct Message</h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-mono">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, {formState.name}! Burhanuddin will respond to {formState.email} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-cyan font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-cyan font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Subject</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Project Consultation"
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-cyan font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Burhanuddin, we're building a real-time system and would love to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-cyan font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-slate-950 font-bold font-mono text-sm hover:opacity-95 transition-all shadow-lg shadow-brand-cyan/20 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
