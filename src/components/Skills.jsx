import React, { useState } from 'react';
import { Cpu, Code2, Database, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = activeTab === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.name === activeTab);

  return (
    <section id="skills" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-slate-800 text-xs font-mono text-brand-cyan">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Architecture Stack
          </h2>
          <p className="text-slate-400 text-sm">
            Core tech stack spanning high-concurrency Node.js backends, Redis caching layer, BullMQ worker queues, and modern React frontends.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeTab === cat 
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-indigo text-slate-950 font-bold shadow-lg shadow-brand-cyan/10' 
                  : 'bg-obsidian-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-obsidian-900 border border-slate-800/90 shadow-xl space-y-4 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                  {cat.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-500">
                  {cat.skills.length} Skills
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-brand-cyan font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-obsidian-950 rounded-full overflow-hidden border border-slate-800/80">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
