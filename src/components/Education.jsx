import React from 'react';
import { GraduationCap, Award, CheckCircle, Code, Trophy } from 'lucide-react';
import { education, achievements } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-slate-800 text-xs font-mono text-brand-emerald">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Solved Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Algorithm Achievements
          </h2>
          <p className="text-slate-400 text-sm">
            Strong academic standing in Computer Engineering paired with verified algorithmic problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education List (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-brand-cyan" />
              Academic Degrees
            </h3>

            {education.map((edu, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800/90 shadow-xl space-y-3 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-brand-cyan font-semibold">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400">
                  {edu.institution}
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-400" />
              Algorithmic Achievements
            </h3>

            {/* LeetCode Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-obsidian-900 to-obsidian-850 border border-slate-800/90 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-mono">LeetCode</h4>
                    <span className="text-xs text-slate-400 font-mono">Data Structures &amp; Algorithms</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black font-mono text-amber-400">96+</span>
                  <div className="text-[10px] font-mono text-slate-500">Solved Problems</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {achievements[0].description}
              </p>

              {/* Topic Tags */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400">Core Pattern Expertise:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Arrays & Hashing', 'Two Pointers', 'Sliding Window', 'Binary Search', 'Trees & BST', 'Graphs & BFS/DFS', 'Dynamic Programming'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded bg-obsidian-950 border border-slate-800 text-[11px] font-mono text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Solving Track
                </span>
                <span className="text-slate-500">SPPU Engineering</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
