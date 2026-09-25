import React, { useState, useEffect } from 'react';
import { Clock, Heart, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-obsidian-950 border-t border-slate-800/80 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Location */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <span>Burhanuddin Zapawala</span>
            <span className="text-slate-600">•</span>
            <span className="text-brand-cyan text-xs font-normal">MERN &amp; System Design</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Pune, India (IST): <strong className="text-slate-200">{time || '06:53 AM'}</strong></span>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-6 text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#terminal" className="hover:text-white transition-colors">CLI Terminal</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: Copyright */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <Code2 className="w-4 h-4 text-brand-cyan" />
          <span>Built with React &amp; Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}
