import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PlannerPage from './pages/PlannerPage'
import TheoryPage from './pages/TheoryPage'

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold tracking-[0.14em] text-slate-700 transition hover:border-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-white"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
    </button>
  )
}

function NavBar({ theme, setTheme }) {
  const location = useLocation()

  const isActive = (path) => (location.pathname === path ? 'bg-slate-900 text-white dark:bg-white dark:text-ink' : 'text-slate-600 hover:text-slate-900 dark:text-white/75 dark:hover:text-white')

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-ink/85">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-[0.16em] text-slate-900 dark:text-white">
          MODEL<span className="text-cobalt">.</span>FORGE
        </Link>

        <div className="flex items-center gap-2 text-sm font-medium">
          <Link to="/" className={`rounded-full px-4 py-2 transition ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/planner" className={`rounded-full px-4 py-2 transition ${isActive('/planner')}`}>
            Model Planner
          </Link>
          <Link to="/theory" className={`rounded-full px-4 py-2 transition ${isActive('/theory')}`}>
            Theory
          </Link>
        </div>

        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 text-slate-700 dark:border-white/10 dark:bg-[#0b0e16] dark:text-white/75">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm tracking-[0.18em]">MODEL.FORGE</p>
          <p className="mt-3 text-sm leading-relaxed">
            Startup Model Planner for E-Commerce businesses.
            Strategy-led recommendation for first-time founders.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Pages</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-cobalt">Landing</Link>
            <Link to="/planner" className="hover:text-cobalt">Model Planner</Link>
            <Link to="/theory" className="hover:text-cobalt">Theory</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Project Scope</p>
          <p className="mt-3 text-sm leading-relaxed">
            Covers e-business fundamentals with a logic-based recommendation engine comparing
            Subscription, Affiliate, Dropshipping, and Private Label models.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs tracking-[0.14em] text-slate-500 dark:border-white/10 dark:text-white/55">
        2026 STARTUP MODEL PLANNER | BUILT WITH REACT + TAILWIND
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-[#f5f5f2] text-slate-900 transition-colors dark:bg-ink dark:text-mist">
      <NavBar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/theory" element={<TheoryPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
