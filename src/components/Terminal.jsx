import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Copy, Check, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails, featuredProjects, skillCategories, experiences } from '../data/portfolioData';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { command: 'welcome', output: 'Welcome to Burhanuddin\'s Developer CLI v2.4.0 [Type "help" to see available commands]' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output = '';

    switch (cmd) {
      case 'help':
        output = `
Available System Commands:
----------------------------------------
• help        - List all available commands
• skills      - Display technical skills & tools matrix
• projects    - View details on Ride-Hailing & Order API
• benchmark   - View Artillery load-test metrics (~2ms cache, 131 req/s)
• experience  - View ProjectX internship & freelance background
• contact     - Print phone, email, and social links
• curl /api   - Output raw JSON profile data
• sudo hire   - Process job offer signal [Interactive]
• clear       - Clear terminal output
`;
        break;

      case 'skills':
        output = skillCategories.map(cat => 
          `[${cat.name}]: ${cat.skills.map(s => s.name).join(', ')}`
        ).join('\n');
        break;

      case 'projects':
        output = featuredProjects.map(p => 
          `📌 ${p.title}\n   Tech: ${p.tech.join(', ')}\n   Highlights: ${p.highlights[0]}`
        ).join('\n\n');
        break;

      case 'benchmark':
        output = `
⚡ SYSTEM PERFORMANCE BENCHMARKS:
------------------------------------------------
1. Redis GEOSEARCH Driver Dispatch Latency: ~1.8 ms (vs 300ms Mongo aggregation)
2. JWT Session Auth & Geocoding Cache Hit: ~2.0 ms (vs 250ms third-party API)
3. Artillery Load Testing Peak Throughput: 400 req/sec
4. Sustained BullMQ Order Intake Rate: 131 req/sec across 15,975 requests (p95 149.9ms)
`;
        break;

      case 'experience':
        output = experiences.map(exp => 
          `💼 ${exp.role} @ ${exp.company} (${exp.period})\n   • ${exp.description[0]}`
        ).join('\n\n');
        break;

      case 'contact':
        output = `
📧 Email:    ${personalDetails.email}
📱 Phone:    ${personalDetails.phone}
📍 Location: ${personalDetails.location}
🐙 GitHub:   ${personalDetails.github}
💼 LinkedIn: ${personalDetails.linkedin}
`;
        break;

      case 'curl /api':
      case 'curl /api/profile':
        output = JSON.stringify(personalDetails, null, 2);
        break;

      case 'sudo hire':
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        output = `
🎉 CONGRATULATIONS! High Priority Interview Triggered!
--------------------------------------------------
Status: ACCEPTED! Burhanuddin is excited to discuss Full Stack & Backend opportunities.
Direct Line: +91 9518987995 | Email: burhanuddinzapawala786@gmail.com
`;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`;
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 bg-obsidian-950 border-t border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
              <TerminalIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Developer Interactive CLI
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Type commands to inspect system specs, benchmarks, or hire
              </p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
            <kbd className="px-2 py-1 bg-obsidian-900 border border-slate-800 rounded">sudo hire</kbd>
            <span>for confetti</span>
          </div>
        </div>

        {/* Terminal Card */}
        <div className="rounded-2xl bg-obsidian-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Top Bar */}
          <div className="px-4 py-3 bg-obsidian-950 border-b border-slate-800 flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <div className="text-xs text-slate-400">
              burhanuddin@sys-design:~ (zsh)
            </div>
            <div className="text-[11px] text-slate-500">
              UTF-8
            </div>
          </div>

          {/* Terminal Console Output Body */}
          <div className="p-4 sm:p-6 h-80 sm:h-96 overflow-y-auto space-y-4 bg-obsidian-950/80">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-brand-cyan font-bold">
                    <span className="text-emerald-400">burhanuddin@sys-design</span>
                    <span className="text-slate-500 font-normal">:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                )}
                <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm font-mono pl-2 border-l border-slate-800">
                  {item.output}
                </pre>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt Bar */}
          <form onSubmit={handleCommand} className="px-4 py-3 bg-obsidian-900 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">burhanuddin@sys-design</span>
            <span className="text-slate-500">:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type "help", "benchmark", or "sudo hire"...'
              className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs sm:text-sm placeholder-slate-600"
            />
            <button type="submit" className="p-1.5 text-slate-400 hover:text-brand-cyan">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
