import React from 'react';
import { FileText, PenTool, SearchCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: 'Template AI',
    desc: 'Upload your template and writing samples. We learn your structure, tone, and phrasing.',
  },
  {
    icon: FileText,
    title: 'Report Writer',
    desc: 'Generate complete, professional survey reports powered by your own style profile.',
  },
  {
    icon: SearchCheck,
    title: 'Discrepancy Finder',
    desc: 'Detect inconsistencies across FIRs, invoices, estimates, and policy copies.',
  },
  {
    icon: Sparkles,
    title: 'Summarizer',
    desc: 'Summarize lengthy documents into key highlights and claim essentials.',
  },
];

const Features = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to work like a pro</h2>
          <p className="mt-3 text-slate-300">Purpose-built for insurance surveyors across Motor, Marine, Fire, and Engineering.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition hover:border-white/20">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
