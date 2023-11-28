/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blackText: '#262626',
        blackText2: '#333'
      },
      screens: {
        '3xl': '1920'
      }
    },
  },
  plugins: [],
}

