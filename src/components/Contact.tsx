import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, Check, Copy, ArrowUp, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Cinematic Video',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Create mailto fallback link for direct email client opening
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name} (${formData.projectType})`);
      const body = encodeURIComponent(`Hi Yash,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:yparate308@gmail.com?subject=${subject}&body=${body}`;
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-20 sm:pt-28 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
            08 / Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F1E8] tracking-tight">
            Let's create something cinematic.
          </h2>
          <p className="text-base text-[#A9B0C6] mt-3">
            Have a project in mind, need viral short-form editing, or want to explore an AI video pipeline? Reach out directly or send a message below.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#252C45] border border-[#F5F1E8]/10 card-hover-glow flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1C2236] border border-[#F5F1E8]/10 flex items-center justify-center text-[#F2B33D]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#A9B0C6]">Direct Email</div>
                    <a
                      href="mailto:yparate308@gmail.com"
                      className="text-base font-semibold text-[#F5F1E8] hover:text-[#F2B33D] transition-colors"
                    >
                      yparate308@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('yparate308@gmail.com', 'email')}
                  title="Copy email address"
                  className="p-2 rounded-lg text-[#A9B0C6] hover:text-[#F5F1E8] hover:bg-[#1C2236] transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F5F1E8]/5 text-xs text-[#A9B0C6]">
                Response time: Within 12–24 hours
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#252C45] border border-[#F5F1E8]/10 card-hover-glow flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1C2236] border border-[#F5F1E8]/10 flex items-center justify-center text-[#F2B33D]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#A9B0C6]">Phone / WhatsApp</div>
                    <a
                      href="tel:+917828453824"
                      className="text-base font-semibold text-[#F5F1E8] hover:text-[#F2B33D] transition-colors font-mono"
                    >
                      +91 7828453824
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('7828453824', 'phone')}
                  title="Copy phone number"
                  className="p-2 rounded-lg text-[#A9B0C6] hover:text-[#F5F1E8] hover:bg-[#1C2236] transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F5F1E8]/5 text-xs text-[#A9B0C6]">
                Available for quick calls &amp; WhatsApp project briefs
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-[#252C45] border border-[#F5F1E8]/10 card-hover-glow flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1C2236] border border-[#F5F1E8]/10 flex items-center justify-center text-[#F2B33D]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#A9B0C6]">LinkedIn Network</div>
                    <a
                      href="https://linkedin.com/in/yash-parate-518775438"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#F5F1E8] hover:text-[#F2B33D] transition-colors"
                    >
                      yash-parate-518775438
                    </a>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/yash-parate-518775438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#A9B0C6] hover:text-[#F2B33D] hover:bg-[#1C2236] transition-colors"
                  aria-label="Open LinkedIn profile"
                >
                  <Sparkles className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F5F1E8]/5 text-xs text-[#A9B0C6]">
                Connect for creative updates &amp; professional networking
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-[#1C2236]/60 border border-[#F5F1E8]/5 flex items-center gap-3 text-xs text-[#A9B0C6]">
              <MapPin className="w-4 h-4 text-[#F2B33D] shrink-0" />
              <span>Chhindwara, Madhya Pradesh, India (Available Worldwide Remotely)</span>
            </div>
          </div>

          {/* Right Column: Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 p-7 sm:p-9 shadow-xl">
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#A9B0C6] mb-6">
                Fill in the details and I'll review your project scope promptly.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#1C2236] border border-[#F2B33D]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F2B33D]/20 text-[#F2B33D] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F5F1E8]">Message Sent Successfully!</h4>
                  <p className="text-xs text-[#A9B0C6] max-w-sm mx-auto">
                    Thank you! Your email client has been prepared, or you can contact me directly at yparate308@gmail.com.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', projectType: 'AI Cinematic Video', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-[#252C45] text-xs font-semibold text-[#F2B33D] hover:bg-[#2e3757] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A9B0C6] uppercase font-mono mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#1C2236] border border-[#F5F1E8]/10 text-sm text-[#F5F1E8] placeholder-[#A9B0C6]/50 focus:outline-none focus:border-[#F2B33D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A9B0C6] uppercase font-mono mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1C2236] border border-[#F5F1E8]/10 text-sm text-[#F5F1E8] placeholder-[#A9B0C6]/50 focus:outline-none focus:border-[#F2B33D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A9B0C6] uppercase font-mono mb-2">
                      Project Focus
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C2236] border border-[#F5F1E8]/10 text-sm text-[#F5F1E8] focus:outline-none focus:border-[#F2B33D] transition-colors"
                    >
                      <option value="AI Cinematic Video">AI Cinematic Video (Google Veo / Omni)</option>
                      <option value="Instagram Reels & YouTube Shorts">Instagram Reels &amp; YouTube Shorts</option>
                      <option value="Post-Production & Color Grading">Post-Production, Color Grading &amp; Sound</option>
                      <option value="Long-term Freelance / Retainer">Long-term Freelance / Retainer</option>
                      <option value="Other Creative Collaboration">Other Creative Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A9B0C6] uppercase font-mono mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, target audience, timeline, or reference styles..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1C2236] border border-[#F5F1E8]/10 text-sm text-[#F5F1E8] placeholder-[#A9B0C6]/50 focus:outline-none focus:border-[#F2B33D] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#F2B33D] hover:bg-[#ffc657] text-[#1C2236] font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#F2B33D]/25 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Sending Message...' : 'Send Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Simple Minimal Footer */}
        <footer className="pt-8 border-t border-[#F5F1E8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B0C6]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#F5F1E8]">Yash Parate</span>
            <span>·</span>
            <span>Video Editor &amp; AI Video Creator</span>
            <span>·</span>
            <span>Chhindwara, MP</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://drive.google.com/drive/folders/1fiyuTs6KRdWg1SYdjqG3ELVepLXm3SHA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2B33D] transition-colors"
            >
              Demo Reel Folder
            </a>
            <a
              href="https://linkedin.com/in/yash-parate-518775438"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2B33D] transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#F5F1E8] transition-colors ml-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F2B33D]" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
