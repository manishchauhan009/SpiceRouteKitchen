/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7043',
        accent: '#FBBF24',
        dark: '#111827',
      },
    },
  },
  plugins: [],
}
