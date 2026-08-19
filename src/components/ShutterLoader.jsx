import React, { useState, useEffect } from 'react';

export default function ShutterLoader() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const greetings = [
    '• Hello',
    '• Namaste',
    '• Welcome',
    '• Maithili Mahesh'
  ];

  useEffect(() => {
    // Cycle greeting words
    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        }
        clearInterval(textInterval);
        return prev;
      });
    }, 450);

    // Slide up shutter after curtain animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#09090B] text-white transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${
        loading ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      }`}
    >
      <div className="font-space-grotesk font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight flex items-center gap-2">
        <span className="animate-pulse">{greetings[textIndex]}</span>
      </div>

      {/* Subtle Bottom Loading Progress Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 animate-[progress_2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
