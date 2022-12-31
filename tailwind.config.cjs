/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#4617FF",
          800: "#3152FF",
          700: "4277FF",
        },
        secondary: "#FEC637",
        paragraph: "#242333",
      },
    },
  },
  plugins: [],
};
