/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1a237e',
          800: '#283593',
          700: '#303f9f',
          600: '#3949ab',
          500: '#3f51b5',
          400: '#5c6bc0',
          300: '#7986cb',
          200: '#9fa8da',
          100: '#c5cae9',
          50: '#e8eaf6',
        },
        accent: {
          900: '#ff6f00',
          800: '#ff8f00',
          700: '#ffa000',
          600: '#ffb300',
          500: '#ffc107',
          400: '#ffca28',
          300: '#ffd54f',
          200: '#ffe082',
          100: '#ffecb3',
          50: '#fff8e1',
        },
        secondary: {
          900: '#004d40',
          800: '#00695c',
          700: '#00796b',
          600: '#00897b',
          500: '#009688',
          400: '#26a69a',
          300: '#4db6ac',
          200: '#80cbc4',
          100: '#b2dfdb',
          50: '#e0f2f1',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
