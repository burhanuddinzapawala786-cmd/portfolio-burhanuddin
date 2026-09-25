import React, { useState } from 'react';
import { ExternalLink, Zap, Database, Layers, Radio, Activity, CheckCircle, ShieldAlert, Cpu, RefreshCw, BarChart2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  // Simulator State for Ride-Hailing (Geospatial Dispatch)
  const [geoMode, setGeoMode] = useState('redis'); // 'mongo' or 'redis'
  const [isSimulatingGeo, setIsSimulatingGeo] = useState(false);
  const [geoResult, setGeoResult] = useState(null);

  // Simulator State for BullMQ Async Queue
  const [isSimulatingQueue, setIsSimulatingQueue] = useState(false);
  const [queueState, setQueueState] = useState({
    buffered: 0,
    processed: 0,
    duplicatesBlocked: 0,
    workerStatus: 'IDLE',
  });

  // Handle Geospatial Dispatch Simulation
  const handleGeoDispatch = () => {
    setIsSimulatingGeo(true);
    setGeoResult(null);

    setTimeout(() => {
      const isRedis = geoMode === 'redis';
      setGeoResult({
        latency: isRedis ? '1.8 ms' : '298 ms',
        driversFound: 4,
        lockAcquired: true,
        method: isRedis ? 'Redis GEOSEARCH + Socket.io' : 'MongoDB $geoNear Aggregation',
        lockKey: 'SETNX ride:claim:89201 EX 10',
      });
      setIsSimulatingGeo(false);
    }, geoMode === 'redis' ? 200 : 700);
  };

  // Handle BullMQ Queue Simulation
  const handleQueueSimulation = () => {
    setIsSimulatingQueue(true);
    setQueueState({ buffered: 100, processed: 0, duplicatesBlocked: 0, workerStatus: 'PROCESSING BURST' });

    let count = 0;
    const interval = setInterval(() => {
      count += 10;
      setQueueState(prev => ({
        buffered: Math.max(0, 100 - count),
        processed: Math.min(95, count),
        duplicatesBlocked: Math.min(5, Math.floor(count / 20)),
        workerStatus: count >= 100 ? 'COMPLETED' : 'PROCESSING BURST'
      }));

      if (count >= 100) {
        clearInterval(interval);
        setIsSimulatingQueue(false);
      }
    }, 150);
  };

  return (
    <section id="projects" className="py-24 bg-obsidian-950 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-indigo/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-slate-800 text-xs font-mono text-brand-cyan">
            <Zap className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade Projects &amp; System Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            High-throughput backend systems, in-memory geospatial indexing, BullMQ async queue microservices, and load-tested APIs built for enterprise scale.
          </p>
        </div>

        {/* Projects Cards Container */}
        <div className="space-y-20">
          
          {/* ================= PROJECT 1: Ride-Hailing Platform ================= */}
          <div className="rounded-2xl bg-obsidian-900 border border-slate-800/90 overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700">
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold">
                      Live Production Application
                    </span>
                    {featuredProjects[0].isLive && (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live Online
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {featuredProjects[0].title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {featuredProjects[0].tagline}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {featuredProjects[0].tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-obsidian-800 border border-slate-700/60 text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                  {featuredProjects[0].highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Links */}
                <div className="pt-2 flex items-center gap-4">
                  {featuredProjects[0].liveUrl && (
                    <a
                      href={featuredProjects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-obsidian-950 font-semibold text-xs hover:bg-cyan-400 transition-all shadow-lg shadow-brand-cyan/20"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Geospatial Dispatch Engine Visualizer */}
              <div id="architecture" className="lg:col-span-6 rounded-xl bg-obsidian-950 border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-brand-cyan animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-slate-200">
                      Geospatial Driver Dispatch Simulator
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Radius: 5.0 km</span>
                </div>

                {/* Mode Selector */}
                <div className="grid grid-cols-2 gap-2 bg-obsidian-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setGeoMode('redis')}
                    className={`py-1.5 text-xs font-mono rounded-md transition-all ${
                      geoMode === 'redis' 
                        ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Redis GEOSEARCH (~2ms)
                  </button>
                  <button
                    onClick={() => setGeoMode('mongo')}
                    className={`py-1.5 text-xs font-mono rounded-md transition-all ${
                      geoMode === 'mongo' 
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Mongo $geoNear (~300ms)
                  </button>
                </div>

                {/* Interactive Simulation Radar Visualizer */}
                <div className="relative h-44 bg-obsidian-900/90 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center">
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                  {/* Concentric Radar Rings */}
                  <div className="absolute w-36 h-36 border border-brand-cyan/20 rounded-full animate-ping" />
                  <div className="absolute w-24 h-24 border border-brand-cyan/40 rounded-full" />
                  <div className="absolute w-12 h-12 border border-brand-cyan/60 rounded-full" />
                  
                  {/* Center Passenger Dot */}
                  <div className="relative z-10 w-4 h-4 rounded-full bg-brand-cyan flex items-center justify-center shadow-lg shadow-brand-cyan">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Driver Nodes */}
                  <div className="absolute top-10 left-16 px-2 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded text-[10px] font-mono text-emerald-300">
                    Driver #102 (1.2km)
                  </div>
                  <div className="absolute bottom-8 right-16 px-2 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded text-[10px] font-mono text-emerald-300">
                    Driver #88 (2.4km)
                  </div>
                  <div className="absolute top-8 right-12 px-2 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded text-[10px] font-mono text-emerald-300">
                    Driver #401 (4.1km)
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={handleGeoDispatch}
                    disabled={isSimulatingGeo}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-brand-cyan text-obsidian-950 font-mono font-bold text-xs hover:bg-cyan-300 transition-all disabled:opacity-50"
                  >
                    {isSimulatingGeo ? 'Searching Redis GEO Index...' : 'Simulate Driver Search'}
                  </button>
                </div>

                {/* Simulation Output Card */}
                {geoResult && (
                  <div className="bg-obsidian-900 border border-slate-800 rounded-lg p-3 text-xs font-mono space-y-1.5 animate-fadeIn">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Method:</span>
                      <span className="text-slate-200">{geoResult.method}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Response Latency:</span>
                      <span className={`font-bold ${geoMode === 'redis' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {geoResult.latency}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Atomic Lock Status:</span>
                      <span className="text-brand-cyan font-semibold">{geoResult.lockKey}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>


          {/* ================= PROJECT 2: Async Order Processing API ================= */}
          <div className="rounded-2xl bg-obsidian-900 border border-slate-800/90 overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700">
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-mono font-semibold">
                      High-Throughput Microservice
                    </span>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                      131 req/sec Sustained
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {featuredProjects[1].title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {featuredProjects[1].tagline}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {featuredProjects[1].tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-obsidian-800 border border-slate-700/60 text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                  {featuredProjects[1].highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Links */}
                <div className="pt-2 flex items-center gap-4">
                  {featuredProjects[1].githubUrl && (
                    <a
                      href={featuredProjects[1].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian-800 border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 transition-all shadow-lg"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Explore GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: BullMQ Async Queue & Artillery Load Visualizer */}
              <div className="lg:col-span-6 rounded-xl bg-obsidian-950 border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-brand-indigo" />
                    <span className="text-xs font-mono font-semibold text-slate-200">
                      BullMQ Queue &amp; Idempotency Pipeline
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Artillery Load Tested</span>
                </div>

                {/* Pipeline Visualizer Box */}
                <div className="space-y-3 bg-obsidian-900/90 p-4 rounded-lg border border-slate-800 font-mono text-xs">
                  
                  {/* Pipeline Steps Flow */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-2 bg-obsidian-950 rounded border border-slate-800">
                      <div className="text-slate-400">1. Intake API</div>
                      <div className="text-brand-cyan font-bold mt-1">Rate Limited</div>
                    </div>
                    <div className="p-2 bg-obsidian-950 rounded border border-slate-800">
                      <div className="text-slate-400">2. BullMQ Queue</div>
                      <div className="text-brand-indigo font-bold mt-1">
                        {queueState.buffered} Jobs
                      </div>
                    </div>
                    <div className="p-2 bg-obsidian-950 rounded border border-slate-800">
                      <div className="text-slate-400">3. Worker DB</div>
                      <div className="text-emerald-400 font-bold mt-1">
                        {queueState.processed} Processed
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Worker Processing Progress:</span>
                      <span>{queueState.workerStatus}</span>
                    </div>
                    <div className="w-full h-2 bg-obsidian-950 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-indigo to-brand-cyan transition-all duration-300"
                        style={{ width: `${queueState.processed}%` }}
                      />
                    </div>
                  </div>

                  {/* Idempotence lock notification */}
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-slate-400">Duplicate Claims Blocked:</span>
                    <span className="text-amber-400 font-bold">{queueState.duplicatesBlocked} (SET NX EX)</span>
                  </div>

                  {/* Trigger Button */}
                  <button
                    onClick={handleQueueSimulation}
                    disabled={isSimulatingQueue}
                    className="w-full py-2 rounded bg-brand-indigo hover:bg-indigo-500 text-white font-mono text-xs font-bold transition-all disabled:opacity-50"
                  >
                    {isSimulatingQueue ? 'Processing Burst Load...' : 'Simulate 500 Req/sec Order Burst'}
                  </button>
                </div>

                {/* Artillery Load Test Stats Summary */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-3 bg-obsidian-900 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">Peak Intake Rate</div>
                    <div className="text-lg font-bold text-brand-indigo">400 req/sec</div>
                    <div className="text-[10px] text-slate-400">Artillery Benchmark</div>
                  </div>
                  <div className="p-3 bg-obsidian-900 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">p95 Latency</div>
                    <div className="text-lg font-bold text-emerald-400">149.9 ms</div>
                    <div className="text-[10px] text-slate-400">Across 15,975 reqs</div>
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
