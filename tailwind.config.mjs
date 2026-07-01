/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy': '#1a365d',
        'navy-dark': '#0f2744',
        'red-accent': '#e53e3e',
      }
    },
  },
  plugins: [],
};
