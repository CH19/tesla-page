/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Gotham, Segoe Ui',
    },
    colors: {
      white: '#FFF',
      dark: '#19191A',
      black: '#000',
      
    },
    extend: {},
  },
  plugins: [],
}

