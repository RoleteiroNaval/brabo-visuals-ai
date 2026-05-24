/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#05070A",
          soft: "#0A0E14",
          card: "#0D1218",
          line: "#161C24",
        },
        neon: {
          green: "#39FF8B",
          ciano: "#00E5FF",
          deep: "#00C16E",
        },
        text: {
          DEFAULT: "#E6EDF3",
          muted: "#7D8590",
          dim: "#4A5360",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(57,255,139,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(57,255,139,0.04) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(57,255,139,0.18), transparent 70%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      boxShadow: {
        'neon': '0 0 30px rgba(57,255,139,0.35), inset 0 0 20px rgba(57,255,139,0.05)',
        'neon-soft': '0 0 40px rgba(57,255,139,0.15)',
      },
    },
  },
  plugins: [],
}
