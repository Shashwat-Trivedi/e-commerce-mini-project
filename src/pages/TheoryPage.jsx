import { coreModels, subModelsByCore } from '../data/models'

const pillars = [
  {
    title: '1) What Is An E-Commerce Business Model?',
    text: 'An e-commerce business model explains how your startup creates value, delivers products/services online, and captures profit. It defines who you sell to, what you sell, how you acquire customers, and where margins come from.',
  },
  {
    title: '2) Why Model Selection Matters For Startups',
    text: 'Early model choice influences cash flow, risk, hiring, operations, growth speed, and unit economics. The wrong model can drain budget even with demand. The right model creates compounding advantage.',
  },
  {
    title: '3) Core + Sub-Model Thinking',
    text: 'Core model gives the strategic direction. Sub-model gives the operating style. The planner now evaluates both layers to produce better-fit recommendations.',
  },
]

const factors = [
  'Budget availability (low / medium / high)',
  'Need for recurring revenue stability',
  'Ability to manage inventory and fulfillment',
  'Marketing strength (content, ads, funnels)',
  'Urgency of launch speed',
  'Importance of brand control',
  'Technical support availability',
  'Risk tolerance and learning runway',
]

const metrics = [
  'CAC (Customer Acquisition Cost)',
  'LTV (Lifetime Value)',
  'Gross Margin %',
  'Payback Period',
  'Repeat Purchase Rate',
  'Refund/Return Rate',
]

export default function TheoryPage() {
  return (
    <main className="bg-[#f5f5f2] text-slate-900 transition-colors dark:bg-[#0a0d14] dark:text-[#eff1f7]">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="animate-fade-up text-xs tracking-[0.2em] text-slate-500 dark:text-white/55">
          E-COMMERCE PLANNER THEORY
        </p>
        <h1 className="animate-fade-up-delayed mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          The full theory behind choosing the right <span className="font-serif italic text-cobalt">startup model</span>.
        </h1>
        <p className="animate-fade-up-delayed-2 mt-6 max-w-3xl text-lg text-slate-600 dark:text-white/65">
          This page explains the concepts used by the planner so you can defend your model choice in class,
          interviews, and execution.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-10 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <article
            key={pillar.title}
            className="animate-fade-up rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <h2 className="text-xl font-semibold">{pillar.title}</h2>
            <p className="mt-3 text-slate-600 dark:text-white/70">{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#111725]">
          <h3 className="text-2xl font-semibold">Model Hierarchy Chart: Core Models vs Sub-Models</h3>
          <p className="mt-2 text-slate-600 dark:text-white/70">
            The planner works in two layers: first it identifies the strongest core model, then it selects the best
            operating sub-model inside that core.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70">
            <span className="font-semibold text-slate-900 dark:text-white">Decision Flow:</span> Inputs → Core Model
            Fit → Sub-Model Fit → Final Recommendation
          </div>

          <div className="mt-6 space-y-5">
            {coreModels.map((core, index) => (
              <div
                key={core.id}
                className="animate-fade-up rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="grid gap-4 md:grid-cols-[1.1fr_auto_1.9fr] md:items-center">
                  <div>
                    <p className="text-xs tracking-[0.16em] text-slate-500 dark:text-white/55">CORE MODEL</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{core.name}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{core.summary}</p>
                  </div>
                  <div className="hidden text-center text-2xl text-cobalt md:block">→</div>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-slate-500 dark:text-white/55">SUB-MODEL OPTIONS</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {subModelsByCore[core.id].map((sub) => (
                        <article
                          key={sub.id}
                          className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/20 dark:bg-white/10"
                        >
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{sub.name}</p>
                          <p className="mt-1 text-xs text-slate-600 dark:text-white/70">{sub.summary}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-10 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#111725]">
          <h3 className="text-2xl font-semibold">Decision Factors Used By The Planner</h3>
          <ul className="mt-5 space-y-3 text-slate-700 dark:text-white/75">
            {factors.map((factor) => (
              <li key={factor} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                {factor}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#111725]">
          <h3 className="text-2xl font-semibold">How The Recommendation Engine Works</h3>
          <p className="mt-4 text-slate-600 dark:text-white/70">
            The engine is a weighted multi-stage scorer. It does not randomly pick a model. Every input from the
            planner contributes to a numerical score that reflects strategic compatibility.
          </p>
          <p className="mt-3 text-slate-600 dark:text-white/70">
            Stage 1 computes scores for core models (Subscription, Affiliate, Dropshipping, Private Label) using
            factors like budget, recurring-revenue preference, launch speed, control, and risk tolerance.
          </p>
          <p className="mt-3 text-slate-600 dark:text-white/70">
            Stage 2 then narrows into sub-models inside the top core path. Example: if Subscription wins, the system
            compares Curation vs Replenishment to suggest the operating style with the highest contextual fit.
          </p>
          <p className="mt-3 text-slate-600 dark:text-white/70">
            Scores are normalized into fit percentages so users can compare options quickly. The UI then presents:
            primary recommendation, ranked alternatives, detailed rationale, execution steps, and risk watchouts.
          </p>
          <p className="mt-3 text-slate-600 dark:text-white/70">
            This is a decision-support layer, not a replacement for validation. Final decisions should still be
            verified with customer interviews, unit economics, supplier checks, and small pilot experiments.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-white p-7 dark:border-white/10 dark:from-cobalt/20 dark:to-transparent">
          <h3 className="text-2xl font-semibold">KPIs To Track After Choosing A Model</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/20 dark:bg-white/10 dark:text-white"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
