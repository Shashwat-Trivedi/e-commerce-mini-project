import { useMemo, useState } from 'react'
import { coreModelMap, subModelMap } from '../data/models'
import {
  buildRecommendation,
  rationaleForCore,
  rationaleForSubModel,
} from '../utils/recommendation'

const goals = [
  { value: 'predictable-income', label: 'Build predictable monthly income' },
  { value: 'minimum-risk', label: 'Start with minimum financial risk' },
  { value: 'test-fast', label: 'Test products quickly and pivot fast' },
  { value: 'brand-equity', label: 'Build long-term brand equity' },
]

const initialForm = {
  budget: 'mid',
  recurring: 3,
  inventory: 3,
  marketing: 3,
  speed: 3,
  control: 3,
  tech: true,
  risk: 3,
  goal: 'predictable-income',
}

function Slider({ label, value, setValue }) {
  return (
    <label className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="tracking-wide text-slate-600 dark:text-white/75">{label}</span>
        <span className="font-semibold text-cobalt">{value}/5</span>
      </div>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-cobalt dark:bg-white/15"
      />
    </label>
  )
}

export default function PlannerPage() {
  const [form, setForm] = useState(initialForm)

  const recommendation = useMemo(() => buildRecommendation(form), [form])
  const topCore = coreModelMap[recommendation.topCore?.id]
  const topSub = subModelMap[recommendation.topSub?.id]

  return (
    <main className="bg-[#f5f5f2] pb-20 dark:bg-[#0b0d13]">
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <p className="animate-fade-up text-xs tracking-[0.2em] text-slate-500 dark:text-white/55">
          MODEL RECOMMENDATION ENGINE
        </p>
        <h1 className="animate-fade-up-delayed mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl dark:text-white">
          Discover your best <span className="font-serif italic text-cobalt">E-Commerce model</span>.
        </h1>
        <p className="animate-fade-up-delayed-2 mt-6 max-w-2xl text-slate-600 dark:text-white/65">
          Tune your startup profile and instantly compare strategic fit across core models and sub-models.
        </p>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 px-6 md:grid-cols-[1fr_1fr]">
        <div className="animate-fade-up rounded-[28px] border border-slate-200 bg-white p-6 md:p-7 dark:border-white/10 dark:bg-[#10141f]">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Startup Inputs</h2>

          <div className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-white/10 dark:bg-white/[0.02]">
                <span className="mb-2 block text-slate-600 dark:text-white/75">Budget</span>
                <select
                  value={form.budget}
                  onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-white/10 dark:bg-[#111726] dark:text-white"
                >
                  <option value="low">Low</option>
                  <option value="mid">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>

              <label className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-white/10 dark:bg-white/[0.02]">
                <span className="mb-2 block text-slate-600 dark:text-white/75">Primary Goal</span>
                <select
                  value={form.goal}
                  onChange={(e) => setForm((prev) => ({ ...prev, goal: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-white/10 dark:bg-[#111726] dark:text-white"
                >
                  {goals.map((goal) => (
                    <option key={goal.value} value={goal.value}>
                      {goal.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <Slider label="Recurring Revenue Importance" value={form.recurring} setValue={(v) => setForm((p) => ({ ...p, recurring: v }))} />
            <Slider label="Inventory Handling Capacity" value={form.inventory} setValue={(v) => setForm((p) => ({ ...p, inventory: v }))} />
            <Slider label="Marketing Strength" value={form.marketing} setValue={(v) => setForm((p) => ({ ...p, marketing: v }))} />
            <Slider label="Need For Fast Launch" value={form.speed} setValue={(v) => setForm((p) => ({ ...p, speed: v }))} />
            <Slider label="Brand Control Importance" value={form.control} setValue={(v) => setForm((p) => ({ ...p, control: v }))} />
            <Slider label="Risk Tolerance" value={form.risk} setValue={(v) => setForm((p) => ({ ...p, risk: v }))} />

            <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-white/10 dark:bg-white/[0.02]">
              <span className="text-slate-600 dark:text-white/75">Do you have technical support?</span>
              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, tech: !prev.tech }))}
                className={`rounded-full px-4 py-2 font-semibold transition ${
                  form.tech ? 'bg-cobalt text-white' : 'bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white/70'
                }`}
              >
                {form.tech ? 'Yes' : 'No'}
              </button>
            </label>
          </div>
        </div>

        <div className="animate-fade-up-delayed space-y-5">
          <div className="rounded-[28px] border border-cobalt/40 bg-gradient-to-br from-cobalt/20 via-cobalt/10 to-white p-6 shadow-card md:p-8 dark:to-transparent">
            <p className="text-xs tracking-[0.18em] text-slate-600 dark:text-white/70">TOP RECOMMENDATION</p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{topCore?.name}</h3>
            <p className="mt-2 text-sm font-medium text-cobalt">Best Sub-Model: {topSub?.name}</p>
            <p className="mt-3 text-slate-700 dark:text-white/80">{topCore?.summary}</p>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-5xl font-semibold text-slate-900 dark:text-white">
                {recommendation.topCore?.fit}%
              </div>
              <div className="text-sm text-slate-600 dark:text-white/70">Core model strategic fit score.</div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-700 dark:text-white/85">
              {rationaleForCore(topCore?.id).map((reason) => (
                <p key={reason} className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 dark:border-white/15 dark:bg-white/[0.06]">
                  {reason}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#111622]">
            <p className="text-xs tracking-[0.18em] text-slate-500 dark:text-white/55">ALTERNATIVE CORE MODELS</p>
            <div className="mt-4 space-y-3">
              {recommendation.rankedCore.slice(1).map((entry) => {
                const model = coreModelMap[entry.id]
                return (
                  <div key={entry.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{model?.name}</h4>
                      <span className="text-sm text-slate-600 dark:text-white/70">{entry.fit}% fit</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/65">{model?.summary}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-6">
        <div className="animate-fade-up rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#10141f] md:p-8">
          <p className="text-xs tracking-[0.18em] text-slate-500 dark:text-white/55">DETAILED BEST FIT EXPLANATION</p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{topCore?.name}</h3>
          <p className="mt-2 text-base text-cobalt">Recommended Sub-Model: {topSub?.name}</p>
          <p className="mt-4 text-slate-600 dark:text-white/70">{topSub?.summary}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Why This Is Your Best Fit</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-white/70">
                {rationaleForSubModel(topSub?.id).map((reason) => (
                  <p key={reason}>{reason}</p>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">90-Day Execution Plan</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-white/70">
                {topCore?.executionSteps.map((step) => (
                  <p key={step}>{step}</p>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Risk Watchouts</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-white/70">
                {topCore?.riskWatchouts.map((riskPoint) => (
                  <p key={riskPoint}>{riskPoint}</p>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Top KPIs To Track</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {topCore?.kpis.map((kpi) => (
                  <span
                    key={kpi}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/20 dark:bg-white/10 dark:text-white"
                  >
                    {kpi}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Sub-Model Ranking (Within Best Core Model)</h4>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {recommendation.rankedSubForTopCore.map((entry) => {
                const sub = subModelMap[entry.id]
                return (
                  <div key={entry.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-900 dark:text-white">{sub?.name}</p>
                      <p className="text-sm text-cobalt">{entry.fit}%</p>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{sub?.summary}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
