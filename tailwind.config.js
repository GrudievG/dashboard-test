/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F55F1',
        gray: {
          100: '#E9E9EA',
          200: '#30323726',
          300: '#7C8DB5',
          800: '#313338'
        },
        info: '#347AE2'
      },
      spacing: {
        sidebar: '240px'
      },
      boxShadow: {
        icon: '0px 2px 10px 0px rgba(124,141,181,0.12)',
      }
    }
  },
  plugins: [],
}

