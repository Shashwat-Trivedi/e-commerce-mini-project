import { Link } from 'react-router-dom'

const highlights = [
  { label: 'Models Covered', value: '4 Core + 8 Sub' },
  { label: 'Decision Inputs', value: '8 Signals' },
  { label: 'Instant Output', value: '< 30s' },
]

const steps = [
  {
    step: '01',
    title: 'Share your startup priorities',
    text: 'Tell us your budget, risk appetite, growth horizon, and channel strengths.',
  },
  {
    step: '02',
    title: 'Run recommendation engine',
    text: 'The engine ranks core models and then narrows to the best-fit sub-model.',
  },
  {
    step: '03',
    title: 'Get your action plan',
    text: 'Receive detailed fit reasons, execution steps, risks, and KPI tracking priorities.',
  },
]

export default function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f5f5f2] dark:border-white/10 dark:bg-ink dark:bg-mesh">
        <div className="absolute inset-0 hidden opacity-40 [background-size:60px_60px] dark:block dark:bg-grid" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <p className="animate-fade-up mb-8 inline-flex rounded-full border border-slate-300 px-4 py-2 text-xs tracking-[0.2em] text-slate-600 dark:border-white/20 dark:text-white/70">
              STARTUP MODEL PLANNER FOR E-COMMERCE
            </p>
            <h1 className="animate-fade-up-delayed max-w-xl text-5xl font-semibold leading-[0.95] text-slate-900 md:text-7xl dark:text-white">
              Find your first <span className="font-serif italic text-cobalt">winning model</span> before you burn budget.
            </h1>
            <p className="animate-fade-up-delayed-2 mt-8 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-white/70">
              A strategic decision platform for new founders. Choose between subscription, affiliate,
              dropshipping, and private label with sub-model precision.
            </p>
            <div className="animate-fade-up-delayed-2 mt-10 flex flex-wrap gap-4">
              <Link
                to="/planner"
                className="rounded-full bg-cobalt px-7 py-4 text-sm font-semibold tracking-wide text-white transition hover:scale-[1.02]"
              >
                Launch Model Planner
              </Link>
              <Link
                to="/theory"
                className="rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold tracking-wide text-slate-700 transition hover:border-slate-500 dark:border-white/25 dark:text-white/85 dark:hover:border-white"
              >
                Read Theory
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  <p className="mt-1 text-xs tracking-[0.15em] text-slate-500 dark:text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up-delayed rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-[#11131c]/85 dark:backdrop-blur">
            <p className="text-xs tracking-[0.18em] text-slate-500 dark:text-white/60">MODEL SNAPSHOT</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Private Label D2C</h2>
            <p className="mt-3 text-slate-600 dark:text-white/70">
              Best for founders targeting long-term brand equity, higher pricing power, and better margin control.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs tracking-[0.15em] text-slate-500 dark:text-white/55">BEST SUB-MODEL</p>
              <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Niche Community Brand</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Build for one specific customer tribe first, then expand product depth once repeat demand stabilizes.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs tracking-[0.14em] text-slate-500 dark:text-white/55">FIT SCORE</p>
                <p className="mt-1 text-2xl font-semibold text-cobalt">92%</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs tracking-[0.14em] text-slate-500 dark:text-white/55">HORIZON</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">6-18M</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs tracking-[0.14em] text-slate-500 dark:text-white/55">COMPLEXITY</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">Medium+</p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs tracking-[0.15em] text-slate-500 dark:text-white/55">WHY THIS WINS</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/75">
                  Own your positioning, improve gross margins, and create defensibility with brand-led demand.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs tracking-[0.15em] text-slate-500 dark:text-white/55">WHAT TO WATCH</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/75">
                  Demand forecasting, supplier reliability, and inventory cycles must be tightly managed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] text-slate-500 dark:text-white/55">THE DECISION FLOW</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl dark:text-white">
              Strategy-first guidance, not random templates.
            </h2>
          </div>
          <Link
            to="/planner"
            className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-500 dark:border-white/20 dark:text-white/85 dark:hover:border-white"
          >
            Try Planner
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item, index) => (
            <article
              key={item.step}
              className="animate-fade-up rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.02]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-sm tracking-[0.16em] text-cobalt">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-white/65">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
