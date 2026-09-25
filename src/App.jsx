import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-200 selection:bg-brand-indigo/30 selection:text-brand-cyan">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Terminal />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
