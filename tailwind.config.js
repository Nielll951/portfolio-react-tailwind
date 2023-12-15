/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // dark mode is based om class
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
}
