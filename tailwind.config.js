/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#08090a',
        surface: '#0f1012',
        elevate: '#16171a',
        ink: '#f7f8f8',
        muted: '#8a8f98',
        faint: '#62666d',
        accent: '#5e6ad2',
        neon: '#3ee0a2',
        line: 'rgba(255, 255, 255, 0.08)',
        os: {
          bg: '#0B0B0C',
          surface: '#18181B',
          low: '#111113',
          high: '#27272A',
          line: '#27272A',
          text: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
          accent: '#5C80BC',
          pending: '#E8C547',
          ready: '#10B981',
          cancelled: '#B25B5B',
          reservation: '#F97316',
          occupied: '#EF4444',
          free: '#22C55E',
          floor: '#0E0E11',
          row: '#1C1C20',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        window:
          '0 0 0 1px rgba(255,255,255,0.05), 0 30px 80px -28px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.45)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        shine: 'shine 4.2s linear infinite',
      },
    },
  },
  plugins: [],
}
