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
        atelier: {
          bg: '#f5f2eb',
          surface: '#ffffff',
          card: '#faf7f2',
          stone: '#ede8df',
          border: '#e4ded4',
          borderDark: '#1a1917',
          text: '#141414',
          muted: '#767067',
          lightMuted: '#9e978d',
          dark: '#1a1917',
          clay: '#8c4a32',
        },
        malouz: {
          950: '#f5f2eb',
          900: '#ede8df',
          850: '#e4ded4',
          800: '#d9d2c6',
          700: '#9e978d',
          600: '#767067',
          500: '#524d45',
          400: '#38342e',
          300: '#26231f',
          200: '#1a1917',
          100: '#141414',
          bone: '#141414',
          clay: '#8c4a32',
          clayDark: '#663220',
          alien: '#26231f',
          ember: '#8c4a32',
          sand: '#f5f2eb',
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
