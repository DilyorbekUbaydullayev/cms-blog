import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  // Shu satrni qo‘shing:
  darkMode: 'class',

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        crete: ['var(--font-creteRound)'],
        work: ['var(--font-workSans)'],
      },
    },
  },
  plugins: [typography],
}

export default config
