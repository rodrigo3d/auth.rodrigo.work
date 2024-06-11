import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/config-tailwind'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../**/*.{ts,tsx}',
  ],
  presets: [sharedConfig],
} satisfies Config

export default config
