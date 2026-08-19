import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Cpu, Code2, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const experiences = [
    {
      company: "Cyber Cell, Pimpri-Chinchwad Police",
      role: "Cybersecurity Intern",
      period: "Jan 2026",
      location: "On-site, Pimpri-Chinchwad",
      badge: "Featured Internship",
      isFeatured: true,
      icon: ShieldCheck,
      accentColor: "border-purple-500/50 bg-purple-950/20",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      points: [
        "Interacted directly with victims of bank fraud and financial cybercrime — documented incident timelines and guided complainants through the government CCRP portal.",
        "Reviewed fraud case documents and attended live investigations; gained firsthand exposure to financial fraud patterns, identity fraud scenarios, and digital trust challenges."
      ],
      skills: ["Cybersecurity", "CCRP Portal", "Financial Fraud Analysis", "Incident Response", "Digital Trust", "Identity Fraud Scenarios"]
    },
    {
      company: "AI Mobility Research",
      role: "AI Research Intern",
      period: "Mar 2026",
      location: "Pune, Maharashtra",
      badge: "AI Research",
      isFeatured: false,
      icon: Cpu,
      accentColor: "border-blue-500/30",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      points: [
        "Researched AI applications in smart mobility and last-mile delivery; synthesized research papers using AI tools to identify use cases for predictive analytics and route optimization in urban ecosystems.",
        "Evaluated emerging technologies for shared mobility platforms; delivered structured findings to the engineering team to inform product direction."
      ],
      skills: ["Python", "GPT API Integration", "RAG Pipelines", "Predictive Analytics", "Route Optimization", "Prompt Engineering"]
    },
    {
      company: "Infosys Springboard",
      role: "MERN Stack Developer Intern",
      period: "Dec 2025 – Jan 2026",
      location: "Virtual",
      badge: "MERN Stack",
      isFeatured: false,
      icon: Code2,
      accentColor: "border-emerald-500/30",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      points: [
        "Architected and solo-delivered IdeaSlate, a real-time collaborative whiteboard — owned the full lifecycle from system design and REST API architecture through production deployment.",
        "Engineered a Socket.IO-powered multi-user drawing engine with low-latency sync, custom shape recognition via geometric resampling, and late-joiner canvas state relay.",
        "Implemented hardened auth with OTP email verification, JWT httpOnly cookies, bcrypt hashing; validated all API endpoints via Postman prior to deployment."
      ],
      skills: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "REST APIs", "JWT Auth", "Postman"]
    }
  ];

  return (
    <section id="experience" className="bg-[#09090B] py-16 px-4 md:px-[4%] border-b border-[#1C1C1F]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="text-secondary text-sm md:text-base mt-1 font-sans">
            Hands-on technical internships across Cybersecurity, AI Research, and Full Stack Systems.
          </p>
        </div>

        {/* Accordions matching swamii.me style */}
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  exp.isFeatured
                    ? 'border-purple-500/50 bg-[#121215] shadow-lg shadow-purple-500/5'
                    : 'border-[#1C1C1F] bg-[#121215]/60 hover:border-[#39393D]'
                }`}
              >
                {/* Header Bar */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none select-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Badge */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                      exp.isFeatured ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-white/5 border border-white/10 text-blue-400'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-space-grotesk text-lg md:text-xl font-semibold text-white">
                          {exp.company}
                        </h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded border font-geist-mono ${exp.badgeColor}`}>
                          {exp.role}
                        </span>
                        {exp.isFeatured && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500 text-white font-bold tracking-wide uppercase font-geist-mono">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs md:text-sm text-secondary mt-1 font-geist-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-zinc-500" /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 text-secondary transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 pt-2 border-t border-[#1C1C1F]/60 animate-fadeIn">
                    <ul className="space-y-2.5 text-secondary text-sm md:text-base leading-relaxed">
                      {exp.points.map((point, pIndex) => (
                        <li key={pIndex} className="relative pl-5 flex items-start gap-2">
                          <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${exp.isFeatured ? 'bg-purple-400' : 'bg-blue-400'}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Pills */}
                    <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-[#1C1C1F]/40">
                      {exp.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="text-xs px-2.5 py-1 rounded bg-[#1C1C1F] border border-white/10 text-white/90 font-geist-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
