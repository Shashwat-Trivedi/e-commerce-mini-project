/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0e0d11',
        mist: '#f5f4f1',
        cobalt: '#4d5eff',
        ember: '#ff5e36',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      boxShadow: {
        soft: '0 30px 80px rgba(15, 17, 25, 0.14)',
        card: '0 16px 40px rgba(12, 14, 20, 0.15)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 15% 20%, rgba(77, 94, 255, 0.14), transparent 34%), radial-gradient(circle at 85% 15%, rgba(255, 94, 54, 0.18), transparent 36%), radial-gradient(circle at 60% 90%, rgba(77, 94, 255, 0.12), transparent 40%)',
        grid:
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 520ms ease-out both',
        'fade-up-delayed': 'fadeUp 650ms ease-out 120ms both',
        'fade-up-delayed-2': 'fadeUp 720ms ease-out 220ms both',
      },
    },
  },
  plugins: [],
}
