import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight text-white">
            <span className="text-emerald-400">/</span> dev.portfolio
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Your Name — Built with HTML, CSS, JavaScript, Node.js, and Express.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;