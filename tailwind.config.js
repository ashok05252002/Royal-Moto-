/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#1f4b8e",
        "primary-dark": "#102a52",
        "secondary": "#182430",
        "secondary-dark": "#060C11",
      }
    },
  },
  plugins: [],
}