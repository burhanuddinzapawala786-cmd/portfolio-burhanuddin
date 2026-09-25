import React from 'react';
import { ArrowRight, Terminal, Zap, ShieldCheck, Database, Server, ExternalLink, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-indigo/20 via-brand-cyan/20 to-brand-emerald/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
          
          {/* Main Copy */}
          <div className="flex-1 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-slate-700/60 shadow-inner text-xs font-mono text-slate-300">
              <Zap className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span>Full Stack MERN & System Design Engineer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                BURHANUDDIN <br />
                <span className="bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple bg-clip-text text-transparent">
                  ZAPAWALA
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 tracking-tight">
                {personalDetails.subheadline}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalDetails.bio}
            </p>

            {/* Metric Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {personalDetails.metrics.map((metric, idx) => (
                <div key={idx} className="bg-obsidian-900/90 border border-slate-800/90 p-3 rounded-xl hover:border-slate-700 transition-colors">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-brand-cyan">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-slate-950 font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-brand-cyan/20 group"
              >
                <span>View Demos & Architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-obsidian-900 border border-slate-700 text-slate-200 font-mono text-sm hover:bg-obsidian-850 hover:border-slate-600 transition-all"
              >
                <Terminal className="w-4 h-4 text-brand-cyan" />
                <span>Launch CLI Terminal</span>
              </a>
            </div>

          </div>

          {/* Interactive Code / Architecture Teaser Preview */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="relative rounded-2xl bg-obsidian-900 border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Terminal Window Top Bar */}
              <div className="px-4 py-3 bg-obsidian-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>system_architecture.config.js</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-300">redisGeoDispatch</span> = <span className="text-purple-400">async</span> (driverLoc, radiusKm = <span className="text-emerald-400">5</span>) =&gt; &#123;
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-slate-500">// GEOSEARCH 5km radius lookup (cuts DB latency ~300ms -&gt; ~2ms)</span><br />
                  <span className="text-purple-400">const</span> drivers = <span className="text-purple-400">await</span> redis.<span className="text-cyan-400">geoSearch</span>(
                    <span className="text-emerald-300">'drivers:active'</span>,
                    driverLoc,
                    &#123; radius: radiusKm, unit: <span className="text-emerald-300">'km'</span> &#125;
                  );
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-slate-500">// Atomic Redis lock preventing duplicate ride claims</span><br />
                  <span className="text-purple-400">const</span> claimed = <span className="text-purple-400">await</span> redis.<span className="text-cyan-400">set</span>(
                    <span className="text-emerald-300">`ride:claim:\${rideId}`</span>,
                    driverId,
                    <span className="text-emerald-300">'NX'</span>, <span className="text-emerald-300">'EX'</span>, <span className="text-emerald-400">10</span>
                  );
                </div>
                <div className="pl-4 text-emerald-400">
                  <span className="text-purple-400">return</span> claimed ? &#123; status: <span className="text-emerald-300">'DISPATCHED'</span>, latencyMs: <span className="text-emerald-300">1.8</span> &#125; : null;
                </div>
                <div>&#125;;</div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>BullMQ &amp; Redis Pub/Sub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-brand-indigo" />
                    <span>MongoDB &amp; PostgreSQL</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
