/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#565167',
        secondary: '#2b2738',
        text: '#ffffff',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}
