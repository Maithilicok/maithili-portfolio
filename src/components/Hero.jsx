import React from 'react';
import { MapPin, Code, BrainCircuit } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="bg-[#09090B] pt-14 sm:pt-20 md:pt-28 pb-10 sm:pb-14 px-4 sm:px-6 md:px-[4%] border-b border-[#1C1C1F] relative overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center">
        
        {/* Mobile-optimized Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121215] border border-[#1C1C1F] text-[11px] sm:text-xs font-geist-mono text-zinc-400 mb-4 sm:mb-6 max-w-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="truncate">Available for MERN & AI Roles</span>
        </div>

        {/* Primary Giant Headline - Mobile Responsive */}
        <div className="font-space-grotesk tracking-tight leading-[1.05] sm:leading-[0.95] font-semibold text-white w-full">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[105px]">
            <span className="break-words">Hi I'm Maithili Mahesh</span>
            <span className="text-[#27272A] hover:text-blue-500 transition-all duration-300 inline-block">
              <svg
                className="w-7 h-7 sm:w-14 sm:h-14 md:w-20 md:h-20 text-blue-500 shrink-0"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.9026 63.3234C50.341 63.3234 49.5453 63.2184 48.5156 63.0084C47.4859 62.7984 46.8071 62.6227 46.4793 62.4813C45.3093 64.824 43.718 66.663 41.7053 67.9984C39.6926 69.3337 37.4458 70.0014 34.965 70.0014C32.4843 70.0014 30.179 69.2635 28.0493 67.7877C25.9196 66.3116 24.4334 64.5428 23.5909 62.4813C22.1399 63.0436 20.6421 63.3248 19.0974 63.3248C15.5869 63.3248 12.5913 62.0011 10.1105 59.3537C7.62971 56.7065 6.41272 53.5791 6.45953 49.9713C6.41263 49.8313 6.41263 49.6907 6.45953 49.5495V49.1277C6.41263 48.9873 6.41263 48.8468 6.45953 48.7062C6.50643 48.5658 6.50643 48.4252 6.45953 48.2845C4.44682 46.9726 2.86707 45.2976 1.72029 43.2594C0.573428 41.2203 0 39.0177 0 36.6516C0 34.2855 0.620188 31.9896 1.86057 29.7641C3.10097 27.5385 4.86794 25.84 7.16149 24.6687L6.88079 23.5442C6.59995 22.8414 6.45953 22.0448 6.45953 21.1546C6.36596 20.7798 6.36596 20.3815 6.45953 19.9598C6.41263 16.3989 7.60621 13.2831 10.0403 10.6125C12.4742 7.94177 15.4933 6.60642 19.0974 6.60642C20.6421 6.60642 22.1399 6.88754 23.5909 7.44978C24.4802 5.34136 25.9547 3.57263 28.0142 2.14358C30.0736 0.714525 32.3905 0 34.9649 0C40.1137 0 43.9518 2.48326 46.4793 7.44978C47.7197 6.88754 49.1941 6.60642 50.9026 6.60642C54.4131 6.60642 57.3971 7.91834 59.8546 10.5422C62.312 13.166 63.5875 16.3052 63.6811 19.9598C63.6811 20.241 63.6111 20.6392 63.6111 21.1546L63.1901 23.5442C63.0967 23.9659 62.9563 24.3407 62.7687 24.6687C64.875 25.6526 66.5834 27.1871 67.8941 29.2721C69.2047 31.3571 69.9068 33.8052 70.0004 36.6165C69.907 39.2403 69.2752 41.583 68.1048 43.6446C66.9346 45.7062 65.3899 47.2523 63.4708 48.2831C63.5641 48.4705 63.6108 48.611 63.6108 48.7048L63.6808 49.5481C63.5874 49.6881 63.5874 49.8287 63.6808 49.9698C63.5874 53.7181 62.3002 56.8808 59.8192 59.458C57.3384 62.0349 54.3664 63.3234 50.9026 63.3234Z"
                  fill="currentColor"
                />
                <path
                  d="M46.4092 23.0522L29.4884 39.9197L23.6609 34.0161C22.8184 33.3133 21.9876 32.9619 21.1684 32.9619C20.3493 32.9619 19.4717 33.3133 18.5355 34.0161C17.8334 35 17.4941 35.9488 17.5175 36.8625C17.5408 37.7761 17.9036 38.5141 18.6057 39.0763L26.9608 47.5101C27.8033 48.2129 28.7161 48.5643 29.699 48.5643C30.682 48.5643 31.4543 48.2129 32.016 47.5101H32.0863L51.4215 27.6737C53.1987 25.7173 51.8979 23.5385 51.3622 23.0257C50.8265 22.5129 48.4256 21.0517 46.4092 23.0522Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <p className="mt-2 text-2xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[105px] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Engineering real-time platforms & web systems.
          </p>
        </div>

        {/* Bio */}
        <p className="font-geist-mono mt-4 sm:mt-6 max-w-2xl text-secondary text-xs sm:text-base md:text-lg leading-relaxed">
          MERN Stack Developer & AI Enthusiast. Building high-performance visual workspaces, 
          real-time WebSocket collaboration engines, and production-ready web platforms.
        </p>

        {/* Highlights Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 text-[11px] sm:text-xs font-geist-mono text-secondary/90">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121215] border border-[#1C1C1F]">
            <MapPin className="h-3 w-3 text-blue-400 shrink-0" /> Pune, MH, India
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121215] border border-[#1C1C1F]">
            <Code className="h-3 w-3 text-emerald-400 shrink-0" /> MERN Stack Developer
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121215] border border-[#1C1C1F]">
            <BrainCircuit className="h-3 w-3 text-purple-400 shrink-0" /> AI Enthusiast
          </span>
        </div>

        {/* Action Button & Handwritten Scribble */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={onOpenContact}
            className="relative flex items-center justify-center gap-2 rounded-md border border-[#39393D] bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 font-medium text-xs sm:text-sm hover:bg-gray-200 transition-all transform hover:scale-[0.99]"
          >
            <span>Book a Meeting</span>
          </button>

          <div className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 323.057 323.057"
              fill="currentColor"
              className="size-8 sm:size-10 shrink-0 rotate-[190deg]"
            >
              <path d="M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343M144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.124 26.928-66.707"></path>
              <path d="M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73"></path>
            </svg>
            <span className="-rotate-[12deg] font-geist-mono text-[9px] sm:text-[11px] leading-[1.3] tracking-wide block">
              <span className="block text-zinc-400">psst… i'm</span>
              <span className="block text-emerald-400 font-semibold">open to work</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
