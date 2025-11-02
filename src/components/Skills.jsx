import React from 'react';
import { Code, Boxes, Server, Layers } from 'lucide-react';

const skills = [
  {
    title: 'HTML',
    icon: Code,
    desc: 'Semantic markup, accessibility-first, SEO-friendly structure.'
  },
  {
    title: 'CSS',
    icon: Layers,
    desc: 'Responsive UI, Tailwind CSS, Flexbox/Grid, animations.'
  },
  {
    title: 'JavaScript',
    icon: Boxes,
    desc: 'Modern ESNext, async patterns, React ecosystem.'
  },
  {
    title: 'Node.js & Express',
    icon: Server,
    desc: 'REST APIs, middleware, auth, performance, best practices.'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Core Skills
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A focused toolkit for building delightful, scalable products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
