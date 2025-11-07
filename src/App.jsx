import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} SurveyorAI — Built for Insurance Surveyors</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <a className="hover:text-slate-200" href="#">Privacy</a>
            <span className="text-slate-600">•</span>
            <a className="hover:text-slate-200" href="#">Terms</a>
            <span className="text-slate-600">•</span>
            <a className="hover:text-slate-200" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
