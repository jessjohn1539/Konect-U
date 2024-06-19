/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#161921',
        'primary': '#FB5909',
        'buttons': '#FEB702',
        'bg': '#FFF5EA',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #fb4d08 0%,#ffb703 80%,#ffffff 100%)',
        'gradient1': 'linear-gradient(to right, #fb4d08 0%,#ffb703 50%,#fb4d08 100%)',
        'radgradient': 'radial-gradient(ellipse at center, #ffb703 0%,#ff9325 54%,#fb4d08 100%)',
      },
    },
  },
  plugins: [],
}

