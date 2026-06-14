/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        zinc: {
          950: '#060606',
          600: '#5F5F5F',
        },
        indigo: {
          100: '#E0E7FF',
          500: '#6366F1',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        gray: {
          500: '#7E8490',
        },
        blue: {
          50: '#F1F4FF',
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #EEF2FF 0%, #FFFFFF 100%)',
      }
    },
  },
  plugins: [],
}
