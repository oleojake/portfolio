/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'oleojake' : {
          primary: '#41201Bff',
          secondary: '#8F543Bff',
          bg: '#F9F0D4ff',
          accent: '#209116ff',
          white: '#ffffff'
        } 
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["nord"],
  },
};
