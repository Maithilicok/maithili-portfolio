import React from 'react';
import { Award, Users, ShieldCheck, Sparkles, Trophy, Star } from 'lucide-react';

export default function Leadership() {
  const positions = [
    {
      title: "Vice President",
      organization: "Google Developer Groups on Campus (GDGC) – DYPCOE",
      period: "Sep 2025 – Present",
      location: "Pune, MH",
      icon: <Users className="h-5 w-5 text-blue-400" />,
      bullets: [
        "Spearheaded DevSummit — a national-scale flagship technical summit featuring 20+ keynote speakers from top tech firms across India; directed end-to-end operations, speaker logistics, and real-time contingency execution.",
        "Engineered & led a 40-member cross-functional organizing team to execute 10+ hands-on workshops, hackathons, and expert masterclasses, achieving 500+ cumulative active participants."
      ]
    },
    {
      title: "Student Council Coordinator",
      organization: "Internal Quality Assurance Cell (IQAC) – DYPCOE",
      period: "Sep 2025 – Present",
      location: "Pune, MH",
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      bullets: [
        "Orchestrated institutional quality benchmark reports, student feedback aggregation systems, and annual AQAR documentation for NAAC & NBA accreditation compliance.",
        "Facilitated executive policy alignment between student leadership bodies, academic departments, and senior college management."
      ]
    },
    {
      title: "Design Coordinator & Creative Lead",
      organization: "GDGC & ITESA | Magnitude Hackathon",
      period: "2024 – 2025",
      location: "Pune, MH",
      icon: <Sparkles className="h-5 w-5 text-purple-400" />,
      bullets: [
        "Architected complete brand identity, visual design systems, and digital promotional assets for a 24-hour national hackathon across 4 student developer clubs.",
        "Led creative media strategy and UI/UX branding for hackathon dashboards, banners, and digital participant guides."
      ]
    }
  ];

  const honors = [
    {
      title: "Avishkaar Research Competition Winner",
      org: "Inter-College Technical Research Symposium",
      desc: "Awarded First Prize for innovative AI-assisted web architecture & research prototype."
    },
    {
      title: "All-Rounder Student Excellence Award",
      org: "DYPCOE Department of Computer Engineering",
      desc: "Recognized for exceptional technical leadership, academics, and hackathon achievements."
    },
    {
      title: "Event Manager of the Year",
      org: "GDGC DYPCOE Chapter",
      desc: "Conferred for outstanding operational execution of DevSummit 2025."
    },
    {
      title: "IQAC Student Coordinator Award",
      org: "DYPCOE Quality Assurance Council",
      desc: "Honored for excellence in student governance & accreditation reporting."
    }
  ];

  return (
    <section id="leadership" className="bg-[#09090B] py-16 px-4 md:px-[4%] border-b border-[#1C1C1F]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white flex items-center gap-3">
            <span>Positions of Responsibility</span>
            <Trophy className="h-7 w-7 text-amber-400" />
          </h2>
          <p className="text-secondary text-sm md:text-base mt-2">
            Engineering leadership, initiative management, and institutional governance.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121215] border border-[#1C1C1F] hover:border-[#39393D] transition-all flex flex-col justify-between shadow-lg group hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {pos.icon}
                  </div>
                  <span className="text-[11px] font-geist-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {pos.period}
                  </span>
                </div>

                <h3 className="font-space-grotesk font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                  {pos.title}
                </h3>
                <h4 className="text-xs font-geist-mono text-blue-400 mt-1 mb-4">
                  {pos.organization}
                </h4>

                <ul className="space-y-2.5 mb-4">
                  {pos.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs text-secondary leading-relaxed flex items-start gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#1C1C1F] text-[11px] font-geist-mono text-zinc-500 flex justify-between items-center">
                <span>{pos.location}</span>
                <span className="text-emerald-400 font-medium">Verified Role</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honors & Achievements */}
        <div className="pt-8 border-t border-[#1C1C1F]">
          <h3 className="font-space-grotesk text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-400" />
            <span>Honors & Technical Recognition</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {honors.map((item, hIdx) => (
              <div
                key={hIdx}
                className="p-4 rounded-xl bg-[#121215] border border-[#1C1C1F] hover:border-purple-500/30 transition-all hover:-translate-y-1 duration-300"
              >
                <Star className="h-4 w-4 text-purple-400 mb-2" />
                <h4 className="font-space-grotesk font-bold text-sm text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] font-geist-mono text-purple-300 mb-2">
                  {item.org}
                </p>
                <p className="text-xs text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
