import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: 'var(--charcoal)',
        wood: 'var(--wood)',
        smoke: 'var(--smoke)',
        cream: 'var(--cream)',
        heat: 'var(--heat)',
        ember: 'var(--ember)'
      },
      boxShadow: {
        tape: '0 6px 20px rgba(0,0,0,0.35)',
        ember: '0 10px 30px rgba(193,18,31,0.25)'
      }
    }
  },
  plugins: []
};

export default config;
