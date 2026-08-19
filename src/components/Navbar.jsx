import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  return (
    <header className="sticky top-0 z-50 bg-[#09090B]/80 backdrop-blur-xl border-b border-[#1C1C1F]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-2">
          <a href="#" className="font-space-grotesk font-bold text-base md:text-lg text-white hover:opacity-80 transition-opacity flex items-center gap-1.5">
            <span className="text-blue-500 font-extrabold">@</span> code by <span className="tracking-wider">MAITHILI MAHESH</span>
          </a>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-geist-mono text-secondary">
          <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition-colors flex items-center gap-1">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors flex items-center gap-1">
            Skills
          </a>
          <a href="#leadership" className="hover:text-white transition-colors flex items-center gap-1">
            Leadership
          </a>
        </nav>

        {/* Right Actions: Clean Button Without Emojis */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onOpenContact}
            className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-medium font-space-grotesk flex items-center gap-1.5 transition-all shadow-md hover:scale-[0.98]"
          >
            <span>Let's Catch Up</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-black" />
          </button>
        </div>

      </div>
    </header>
  );
}
