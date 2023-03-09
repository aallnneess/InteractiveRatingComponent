/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'notMobile': '374px'
    },
    colors: {
      'Orange': '#fb7413',
      'White': '#ffffff',
      'Light-Grey': '#959eac',
      'Medium-Grey': '#7c8798',
      'Dark-Blue': '#252d37',
      'Dark-Blue-darker': '#191e24',
      'Very-Dark-Blue': '#121417'
    },
    fontFamily: {
      'sans': ['Overpass', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

