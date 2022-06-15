/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}