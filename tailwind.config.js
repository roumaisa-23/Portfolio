/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8F6F1',
        ink: '#14161F',
        muted: '#5A5F73',
        line: '#E4E0D6',
        cobalt: { DEFAULT: '#1F3FE0', dark: '#162FB5', tint: '#EAEEFF' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,22,31,.04), 0 8px 24px -12px rgba(20,22,31,.12)',
        lift: '0 2px 4px rgba(20,22,31,.05), 0 24px 48px -20px rgba(31,63,224,.28)',
      },
    },
  },
  plugins: [],
}
