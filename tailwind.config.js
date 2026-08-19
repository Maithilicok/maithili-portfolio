/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#09090B",
        cardBg: "#121215",
        borderGrey: "#1C1C1F",
        borderHighlight: "#39393D",
        secondary: "#A1A1AA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'geist-mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'shutter-up': 'shutterUp 0.9s cubic-bezier(0.8, 0, 0.2, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        shutterUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
