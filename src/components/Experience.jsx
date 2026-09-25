import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink, Code } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-slate-800 text-xs font-mono text-brand-indigo">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry & Internship Track Record
          </h2>
          <p className="text-slate-400 text-sm">
            Hands-on backend development for scalable SaaS applications and independent client lifecycle management.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 pl-6 sm:pl-10 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-obsidian-900 border-2 border-brand-indigo flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800/90 shadow-xl space-y-4 hover:border-slate-700 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                      {exp.role} <span className="text-brand-indigo">@ {exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
