/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#EA6103",
        "secondary-500": "#3C644C"
      }
    },
  },
  plugins: [],
}