/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        malouz: {
          950: '#060608',
          900: '#0c0d10',
          850: '#131418',
          800: '#1a1c22',
          700: '#2b2e38',
          600: '#424654',
          500: '#646979',
          400: '#9095a5',
          300: '#c2c6d4',
          200: '#e2e4ec',
          100: '#f1f2f6',
          bone: '#f5f3ec',
          clay: '#c85a32',
          clayDark: '#8c3818',
          alien: '#bf82ff',
          ember: '#d69e46',
          sand: '#e8dec8',
        }
      },
      letterSpacing: {
        widestx: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 4px rgba(191, 130, 255, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 16px rgba(191, 130, 255, 0.75))' },
        }
      }
    },
  },
  plugins: [],
}
