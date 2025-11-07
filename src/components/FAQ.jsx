import React from 'react';

const faqs = [
  {
    q: 'How does the AI learn my writing style?',
    a: 'Upload your template and 1-3 writing samples. We analyze structure, placeholders, tone, and phrasing to build a private style profile tied to your account.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Files are encrypted at rest and in transit. Row-Level Security ensures only you can access your data.',
  },
  {
    q: 'Can I edit the generated report?',
    a: 'Absolutely. You can manually edit, ask AI to re-edit, and copy any section of the report before exporting.',
  },
  {
    q: 'What models are used?',
    a: 'We orchestrate OCR and reasoning using best-in-class models and optimize prompts specifically for insurance surveyors.',
  },
];

const FAQ = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.06] p-2">
          {faqs.map((item, idx) => (
            <details key={idx} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-left font-medium marker:hidden">
                <span>{item.q}</span>
                <span className="text-slate-300 group-open:hidden">+</span>
                <span className="hidden text-slate-300 group-open:inline">−</span>
              </summary>
              <div className="px-4 pb-5 text-sm text-slate-300">{item.a}</div>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-300">
          Still have questions? <span className="text-blue-300">Contact support</span>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
