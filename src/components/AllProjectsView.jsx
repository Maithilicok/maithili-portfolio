import React from 'react';
import { ExternalLink, Github, ArrowLeft, Sparkles } from 'lucide-react';

export default function AllProjectsView({ onBack }) {
  const allProjects = [
    {
      id: "ideaslate",
      name: "IdeaSlate",
      title: "IdeaSlate — Real-Time Collaborative Canvas",
      description: "An infinite visual workspace where teams brainstorm, diagram, and collaborate in real-time with shape recognition & live state sync.",
      image: "/images/ideaslate_user.png",
      tags: ["Canvas API", "Socket.IO", "React.js", "Node.js", "Multi-User Sync"],
      liveUrl: "https://ideaslate.live",
      githubUrl: "https://github.com/Maithilicok/IdeaSlate---Collaborative-Whiteboard",
      bgGradient: "bg-gradient-to-br from-purple-950 via-indigo-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(168,85,247,0.5)] hover:border-purple-500/70"
    },
    {
      id: "contexta",
      name: "Contexta",
      title: "Contexta — Document Intelligence RAG",
      description: "A Retrieval-Augmented Generation (RAG) platform enabling instant natural-language Q&A over PDF documents using Gemini AI & Qdrant vector database.",
      image: "/images/contexta_user.png",
      tags: ["Gemini AI", "Qdrant DB", "RAG Pipeline", "3072D Embeddings", "Node.js", "Express"],
      liveUrl: "https://contexta-ai-pdf.vercel.app/",
      githubUrl: "https://github.com/Maithilicok/contexta-rag-learning",
      bgGradient: "bg-gradient-to-br from-emerald-950 via-teal-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(16,185,129,0.5)] hover:border-emerald-500/70"
    },
    {
      id: "brevio",
      name: "Brevio",
      title: "Brevio — Cyber URL Shortener & Analytics",
      description: "A full-stack URL shortener with a live analytics dashboard, collision-safe short-ID generation, and QR code tracking per link.",
      image: "/images/spiel_user.png",
      tags: ["LINK_INJECTOR", "LINK_DATABASE", "Click Analytics", "Node.js", "MongoDB", "QR Engine"],
      liveUrl: "https://brevio-url-shortner.onrender.com/",
      githubUrl: "https://github.com/Maithilicok/Brevio",
      bgGradient: "bg-gradient-to-br from-teal-950 via-cyan-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(6,182,212,0.5)] hover:border-cyan-500/70"
    },
    {
      id: "spiel",
      name: "Spiel",
      title: "Spiel — Voice & Topic Generator",
      description: "A lightweight web app for dynamic topic generation & category filtering with randomized selection algorithms and voice prompts.",
      image: "/images/brevio_user.png",
      tags: ["+ All", "GD Round", "Current Affairs", "Tech", "Career", "India Focus"],
      liveUrl: "https://spiel-topics.vercel.app",
      githubUrl: "https://github.com/Maithilicok/Spiel-Voice",
      bgGradient: "bg-gradient-to-br from-lime-950 via-[#09090B] to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(132,204,22,0.5)] hover:border-lime-500/70"
    },
    {
      id: "hifi",
      name: "HiFi",
      title: "HiFi — Real-Time WebSocket Chat Platform",
      description: "Production-grade real-time messaging architecture engineered for sub-100ms message delivery, room presence, & state management.",
      image: "/images/ideaslate_user.png",
      tags: ["React.js", "Node.js", "Socket.IO", "Zustand", "MongoDB", "Express"],
      liveUrl: "https://hifi-chat.onrender.com",
      githubUrl: "https://github.com/Maithilicok/HiFi-Real-Time-Chat-System",
      bgGradient: "bg-gradient-to-br from-blue-950 via-slate-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(59,130,246,0.5)] hover:border-blue-500/70"
    },
    {
      id: "aptiease",
      name: "AptiEase",
      title: "AptiEase — Placement Prep & Test Engine",
      description: "Comprehensive placement preparation platform featuring timed practice modules, category-wise aptitude tests, and real-time score tracking.",
      image: "/images/brevio_user.png",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://aptiease.vercel.app",
      githubUrl: "https://github.com/Maithilicok/AptiEase",
      bgGradient: "bg-gradient-to-br from-amber-950 via-zinc-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(245,158,11,0.5)] hover:border-amber-500/70"
    },
    {
      id: "studman",
      name: "Student Management System",
      title: "Student Administration & DBMS Suite",
      description: "Enterprise student record management suite featuring SQL database architecture, attendance analytics, and academic report generation.",
      image: "/images/spiel_user.png",
      tags: ["Java", "SQL", "DBMS", "PostgreSQL", "Swing"],
      liveUrl: "https://github.com/Maithilicok/Stud-Management-Sys",
      githubUrl: "https://github.com/Maithilicok/Stud-Management-Sys",
      bgGradient: "bg-gradient-to-br from-emerald-950 via-zinc-950 to-black",
      glowHover: "hover:shadow-[0_0_60px_-5px_rgba(16,185,129,0.5)] hover:border-emerald-500/70"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-white pt-24 pb-24 px-4 md:px-[4%] relative animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 border-b border-[#1C1C1F] pb-8">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121215] border border-[#39393D] hover:bg-[#1C1C1F] text-xs font-geist-mono text-zinc-300 hover:text-white transition-all mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Portfolio</span>
            </button>
            <h1 className="font-space-grotesk text-3xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>All Engineering Projects</span>
              <Sparkles className="h-7 w-7 text-blue-400" />
            </h1>
            <p className="text-secondary text-sm md:text-base mt-2 font-sans">
              Complete catalog of full-stack web products, real-time collaboration engines, and developer tools.
            </p>
          </div>
        </div>

        {/* 3-Column Glowing Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className={`h-full group bg-[#09090B] border border-neutral-800 ring-1 rounded-xl ring-neutral-900 transition-all duration-300 ring-offset-4 ring-offset-black flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] active:scale-100 active:translate-y-0 ${project.glowHover}`}
            >
              {/* Header Container with Screenshot */}
              <div className={`relative w-full h-52 rounded-t-lg overflow-hidden ${project.bgGradient} flex justify-center items-end p-2`}>
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
                    <h3 className="text-lg font-semibold font-space-grotesk text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2 items-center text-xs font-geist-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>live</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 mb-4 px-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 px-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2.5 py-1 rounded-md font-geist-mono border bg-white/5 text-zinc-300 border-white/10"
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

      </div>
    </div>
  );
}
