import React, { useState } from 'react';
import { Mail, Linkedin, Github, Check, Twitter } from 'lucide-react';

export default function FloatingDock({ onOpenContact }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('maithilicokil@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#121215]/90 border border-[#27272A] backdrop-blur-xl shadow-2xl shadow-black/80 text-white">
        
        {/* Copy Mail Button */}
        <button
          onClick={copyEmail}
          className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all relative group"
          title="Copy Email"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Mail className="h-4 w-4" />}
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-geist-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-800">
            {copied ? 'Copied!' : 'Copy Email'}
          </span>
        </button>

        <div className="w-[1px] h-4 bg-zinc-800" />

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/maithili-mahesh23/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-blue-400 transition-all relative group"
          title="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-geist-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-800">
            LinkedIn
          </span>
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/Maithilicok"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all relative group"
          title="GitHub Profile"
        >
          <Github className="h-4 w-4" />
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-geist-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-800">
            GitHub
          </span>
        </a>

        {/* Twitter / X Link */}
        <a
          href="https://x.com/Maithili_cok05"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-sky-400 transition-all relative group"
          title="Twitter / X"
        >
          <Twitter className="h-4 w-4" />
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-geist-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-800">
            Twitter / X
          </span>
        </a>

        <div className="w-[1px] h-4 bg-zinc-800" />

        {/* Live Availability Dot */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-geist-mono text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="hidden sm:inline">Available</span>
        </div>

      </div>
    </div>
  );
}
