import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/70 to-slate-950" />
      </div>

      <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 ring-1 ring-blue-400/30">
            <Shield className="h-5 w-5 text-blue-300" />
          </div>
          <span className="text-lg font-semibold tracking-tight">SurveyorAI</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/5">
            <User className="h-4 w-4" /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600">
            <Rocket className="h-4 w-4" /> Get Started
          </button>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
            AI for Insurance Surveyors
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Write professional insurance survey reports in minutes — trained on your style
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300 md:text-lg">
            Upload your templates and writing samples. Our AI learns your tone, extracts data from claim documents, and drafts complete, professional reports like a senior surveyor with 30+ years of experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600">
              <Rocket className="h-5 w-5" /> Start free — no card required
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-slate-200 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/5">
              Watch demo
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-sm text-slate-300">Template-aware writing</p>
            <p className="mt-1 text-xl font-medium">Understands your placeholders</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-sm text-slate-300">Secure by design</p>
            <p className="mt-1 text-xl font-medium">RLS + encrypted storage</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur md:col-span-1 sm:col-span-2 md:col-span-1">
            <p className="text-sm text-slate-300">Faster claims handling</p>
            <p className="mt-1 text-xl font-medium">From OCR to final report</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
