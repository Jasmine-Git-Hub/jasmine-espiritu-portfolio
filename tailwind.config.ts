import type { Config } from 'tailwindcss';

// Loaded by Tailwind v4 through the `@config` directive in src/styles/tailwind.css.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1d21',
        'ink-deep': '#111316',
        'ink-soft': '#23272d',
        bone: '#f2f0eb',
        mist: '#8b929c',
        azure: '#4f7cff',
        glow: '#8fb0ff',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes scale from phone to ultrawide
        mega: ['clamp(4rem, 15vw, 15rem)', { lineHeight: '0.82', letterSpacing: '-0.01em' }],
        huge: ['clamp(3rem, 11vw, 11rem)', { lineHeight: '0.85' }],
        big: ['clamp(2.25rem, 6vw, 5.5rem)', { lineHeight: '0.9' }],
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-5%, 4%)' },
          '40%': { transform: 'translate(4%, -6%)' },
          '60%': { transform: 'translate(-3%, 7%)' },
          '80%': { transform: 'translate(6%, -2%)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        grain: 'grain 0.9s steps(5) infinite',
        bob: 'bob 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
} satisfies Config;
