/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
      }
    },
    extend: {
      colors: {
        silver: '#222222',
        dark: '#121212',
        skill: '#1c1c1c',
        highlight: '#70FF00'
      }
    },
  },
  plugins: [],
}
