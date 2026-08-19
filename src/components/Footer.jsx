import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090B] border-t border-[#1C1C1F] pt-16 pb-24 relative overflow-hidden text-xs font-geist-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-[4%] relative z-10">
        
        {/* 4 Column Colophon Footer matching swamii.me */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-zinc-400">
          
          {/* Column 1: CRAFTED BY */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-200 uppercase font-space-grotesk">
              CRAFTED BY
            </h4>
            <p className="text-zinc-400">Maithili Mahesh</p>
            <p className="text-zinc-500">MERN Stack Developer & AI Enthusiast</p>
            <p className="text-zinc-500">Pune, MH, India</p>
          </div>

          {/* Column 2: INSPIRED BY */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-200 uppercase font-space-grotesk">
              INSPIRED BY
            </h4>
            <p>
              <a
                href="https://swamii.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-4"
              >
                swamii.me
              </a>
            </p>
            <p className="text-zinc-500">Minimal Glassmorphism</p>
            <p className="text-zinc-500">Curtain Shutter Motion</p>
          </div>

          {/* Column 3: COLOPHON */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-200 uppercase font-space-grotesk">
              COLOPHON
            </h4>
            <p>React 18 & Vite</p>
            <p>Tailwind CSS 3.4</p>
            <p>Space Grotesk & Geist Mono</p>
          </div>

          {/* Column 4: PROJECT */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold tracking-widest text-zinc-200 uppercase font-space-grotesk">
              PROJECT
            </h4>
            <p>© {currentYear} Maithili Mahesh</p>
            <p className="text-zinc-500">All rights reserved.</p>
            <div className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Live</span>
            </div>
          </div>

        </div>

        {/* Bottom Small Print */}
        <div className="border-t border-[#1C1C1F] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <p>© {currentYear} Maithili Mahesh. Built with precision & passion.</p>
          <div className="flex gap-4">
            <a href="https://github.com/Maithilicok" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/maithili-mahesh23/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              LinkedIn
            </a>
            <a href="https://x.com/Maithili_cok05" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              Twitter / X
            </a>
          </div>
        </div>

      </div>

      {/* Giant Faint MAITHILI MAHESH Watermark */}
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.03] translate-y-6">
        <span className="font-space-grotesk font-black text-[120px] sm:text-[180px] md:text-[240px] tracking-tighter text-white leading-none whitespace-nowrap">
          MAITHILI MAHESH
        </span>
      </div>
    </footer>
  );
}
