import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DevNotes – Markdown Knowledge Base',
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    desc: 'A full-stack notes app with tags, search, and live markdown preview.',
    live: '#',
    repo: '#'
  },
  {
    title: 'QuickServe – Restaurant API',
    tech: ['Node.js', 'Express', 'JWT', 'Postman'],
    desc: 'Production-ready REST API with authentication, rate limiting, and caching.',
    live: '#',
    repo: '#'
  },
  {
    title: 'CSS Art Gallery',
    tech: ['HTML', 'CSS', 'Animation'],
    desc: 'A playful collection of pure CSS artworks and micro-interactions.',
    live: '#',
    repo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Selected Projects
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A snapshot of recent work that highlights problem-solving and craft.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 ring-1 ring-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
