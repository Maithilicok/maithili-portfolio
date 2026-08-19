import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function Projects({ onNavigateAllProjects }) {
  // Featured 3 projects with verified GitHub links
  const featuredProjects = [
    {
      id: "ideaslate",
      name: "IdeaSlate",
      title: "IdeaSlate — Real-Time Collaborative Canvas",
      description: "An infinite visual workspace where teams brainstorm, diagram, and collaborate in real-time with shape recognition & live state sync.",
      image: "/images/ideaslate_user.png",
      tags: ["Canvas API", "Socket.IO", "React.js", "Node.js", "Multi-User Sync"],
      liveUrl: "https://idea-slate-collaborative-whiteboard.vercel.app/",
      githubUrl: "https://github.com/Maithilicok/IdeaSlate---Collaborative-Whiteboard",
      bgGradient: "bg-gradient-to-br from-purple-950 via-indigo-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(168,85,247,0.55)] hover:border-purple-500/70"
    },
    {
      id: "brevio",
      name: "Brevio",
      title: "Brevio — Cyber URL Shortener & Analytics",
      description: "A full-stack URL shortener with a live analytics dashboard, collision-safe short-ID generation, and QR code tracking per link.",
      image: "/images/spiel_user.png",
      tags: ["LINK_INJECTOR", "LINK_DATABASE", "Click Analytics", "Node.js", "MongoDB", "QR Engine"],
      liveUrl: "https://brevio-url-shortner.onrender.com/",
      // Exact GitHub URL for Brevio
      githubUrl: "https://github.com/Maithilicok/Brevio",
      bgGradient: "bg-gradient-to-br from-teal-950 via-cyan-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(6,182,212,0.55)] hover:border-cyan-500/70"
    },
    {
      id: "spiel",
      name: "Spiel",
      title: "Spiel — Voice & Topic Generator",
      description: "A lightweight web app for dynamic topic generation & category filtering with randomized selection algorithms and voice prompts.",
      image: "/images/brevio_user.png",
      tags: ["+ All", "GD Round", "Current Affairs", "Tech", "Career", "India Focus"],
      liveUrl: "https://spiel-voice.vercel.app/",
      githubUrl: "https://github.com/Maithilicok/Spiel-Voice",
      bgGradient: "bg-gradient-to-br from-lime-950 via-[#09090B] to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(132,204,22,0.55)] hover:border-lime-500/70"
    }
  ];

  return (
    <section id="projects" className="bg-[#09090B] pt-12 sm:pt-16 pb-12 border-b border-[#1C1C1F]">
      <div className="max-w-7xl mx-auto px-4 md:px-[3%]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="px-[2%] font-space-grotesk text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl flex items-center gap-3">
            <span>Projects</span>
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
          </h2>
        </div>
        
        {/* 3 Column Grid */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={`h-full group bg-[#09090B] border border-neutral-800 ring-1 rounded-xl ring-neutral-900 transition-all duration-300 ring-offset-4 ring-offset-black flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] active:scale-100 active:translate-y-0 ${project.glowHover}`}
            >
              {/* Header Container displaying the Screenshot */}
              <div className={`relative w-full md:h-52 rounded-t-lg overflow-hidden ${project.bgGradient} flex justify-center items-end p-2`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="relative z-10 w-[92%] h-[85%] object-cover object-top mt-4 rounded-t-lg border border-neutral-700 shadow-2xl group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between px-1 mb-2">
                    <h3 className="text-lg md:text-xl font-semibold font-space-grotesk text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2 items-center text-xs font-geist-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      live
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 mb-4 px-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Tags & Tabs */}
                  <div className="flex flex-wrap gap-1.5 mb-4 px-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] px-2.5 py-1 rounded-md font-geist-mono border transition-all ${
                          tag.startsWith('+') 
                            ? 'bg-lime-400 text-black font-bold border-lime-400' 
                            : tag.startsWith('LINK_') 
                            ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40 font-bold'
                            : 'bg-white/5 text-zinc-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glassmorphic Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-800/80 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center whitespace-nowrap text-xs font-medium border border-[#39393D] bg-[#121215] text-white hover:bg-white hover:text-black h-9 flex items-center justify-center gap-2 rounded-lg transition-all shadow-md group/btn"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-blue-400 group-hover/btn:text-black transition-colors" />
                    <span>View Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center whitespace-nowrap text-xs font-medium border border-[#39393D] bg-[#121215] text-white hover:bg-white hover:text-black h-9 flex items-center justify-center gap-2 rounded-lg transition-all shadow-md group/btn"
                  >
                    <Github className="h-3.5 w-3.5 text-zinc-400 group-hover/btn:text-black transition-colors" />
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Navigation to All Projects Page */}
        <div className="px-[4%] flex justify-center pt-6 pb-4">
          <button
            onClick={onNavigateAllProjects}
            className="justify-center whitespace-nowrap text-sm font-medium border border-[#39393D] bg-[#121215] text-white hover:bg-white hover:text-black h-11 flex items-center gap-2 rounded-xl transition-all px-8 py-3 scale-100 hover:scale-[1.02] shadow-xl group"
          >
            <span className="text-xs md:text-base font-bold font-space-grotesk">
              View All Projects Catalog
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
