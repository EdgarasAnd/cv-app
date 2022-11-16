/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ripple: theme => ({
      colors: theme('colors')
  }),
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-ripple')()
],

}


// tailwind.config.js
