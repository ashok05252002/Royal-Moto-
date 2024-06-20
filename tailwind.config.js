/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dashboard.html', // Add this line if index.html is at the root
    './**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary : '#ff77e9',     
      },
    },
  },
  plugins: [],
}

