import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "Tailwind CSS", "Shadcn UI", "HTML5", "CSS3"]
    },
    {
      category: "Backend & Real-Time",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "Socket.IO"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      category: "AI / Machine Learning",
      skills: ["GPT API Integration", "RAG Pipelines", "Prompt Engineering", "Predictive Analytics"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Cloudflare Workers", "Vercel", "Render", "CI/CD (GitHub Actions)"]
    },
    {
      category: "Tools & Design",
      skills: ["Git", "GitHub", "Postman (API Testing)", "Figma", "Adobe XD"]
    },
    {
      category: "Core Coursework",
      skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="bg-[#09090B] py-16 px-4 md:px-[4%] border-b border-[#1C1C1F]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Technical Skills & Arsenal
          </h2>
          <p className="text-secondary text-sm md:text-base mt-1 font-sans">
            Technologies, frameworks, databases, and AI engineering tools I build with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#121215] border border-[#1C1C1F] hover:border-[#39393D] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-space-grotesk text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIndex) => (
                    <div
                      key={sIndex}
                      className="px-3 py-1.5 rounded-lg bg-[#1C1C1F] border border-[#39393D]/70 text-xs md:text-sm font-medium text-zinc-200 hover:text-white hover:border-blue-500/50 hover:bg-[#27272A] transition-all duration-200 cursor-default font-geist-mono"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
