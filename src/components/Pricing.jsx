import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    highlight: 'Get started',
    features: [
      '1 report/month',
      '1 template + 1 sample',
      'Basic OCR',
      'Email support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$39',
    period: 'per month',
    highlight: 'Best for solo surveyors',
    features: [
      'Unlimited drafts',
      'Advanced AI writing',
      'Discrepancy Finder',
      'Summarizer',
      'Up to 5 templates',
      'Priority support',
    ],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'for teams',
    highlight: 'For firms and teams',
    features: [
      'SSO + team seats',
      'Custom models & RLS',
      'Razorpay invoicing',
      'Dedicated success manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Monthly or annual plans. Upgrade anytime.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.popular ? 'border-blue-400/40 bg-blue-500/10' : 'border-white/10 bg-white/5'} p-6`}> 
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">Popular</div>
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{tier.highlight}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="pb-2 text-sm text-slate-300">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-200">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-lg px-4 py-2 font-medium transition ${tier.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border border-white/15 hover:border-white/30 hover:bg-white/5'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
