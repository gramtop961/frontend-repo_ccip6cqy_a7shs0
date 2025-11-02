import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Get In Touch
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Always happy to chat about opportunities, collaboration, or cool ideas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <form
              action="mailto:you@example.com"
              method="post"
              encType="text/plain"
              className="grid gap-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-sm/5 text-emerald-100">Email</p>
                <a href="mailto:you@example.com" className="font-semibold hover:underline">you@example.com</a>
              </div>
            </div>
            <p className="mt-6 text-emerald-50/90 text-sm">
              Prefer a quick intro? Drop me a line and I’ll get back within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
