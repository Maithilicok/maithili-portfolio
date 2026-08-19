import React, { useState } from 'react';
import { X, Mail, Check, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText('mmkokil2005@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md p-6 md:p-8 rounded-2xl bg-[#121215] border border-[#27272A] shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h3 className="font-space-grotesk text-2xl font-bold text-white">
            Let's Catch Up
          </h3>
          <p className="text-xs font-geist-mono text-zinc-400 mt-1">
            Drop a message or schedule a conversation
          </p>
        </div>

        {/* Direct Email Card */}
        <div className="mb-6">
          <div
            onClick={copyEmail}
            className="flex items-center justify-between p-3.5 rounded-xl bg-black/60 border border-[#27272A] hover:border-blue-500/50 cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Mail className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-geist-mono text-zinc-500 block">Direct Email</span>
                <span className="text-xs font-geist-mono text-zinc-200 group-hover:text-blue-400 transition-colors">
                  mmkokil2005@gmail.com
                </span>
              </div>
            </div>
            <span className="text-xs text-zinc-400 font-geist-mono">
              {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : 'Copy'}
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-geist-mono text-zinc-400 mb-1">YOUR NAME</label>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-[#27272A] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors font-sans"
            />
          </div>

          <div>
            <label className="block text-[11px] font-geist-mono text-zinc-400 mb-1">YOUR EMAIL</label>
            <input
              type="email"
              required
              placeholder="jane@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-[#27272A] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors font-sans"
            />
          </div>

          <div>
            <label className="block text-[11px] font-geist-mono text-zinc-400 mb-1">MESSAGE</label>
            <textarea
              rows={3}
              required
              placeholder="Hi Maithili, let's connect & discuss..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-[#27272A] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors font-sans resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-space-grotesk flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/30"
          >
            {submitted ? (
              <>
                <Check className="h-4 w-4" />
                <span>Message Sent!</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
