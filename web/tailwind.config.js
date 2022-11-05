/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      colors: {
        ignite: {
          500: '#129e57'
        },

        btYellow: {
          500: '#46f700',
          700: '#e5c030',
        },

        gray: {
          100: '#e1e1e6',
          300: '#8d8099',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        }
      }

    },
  },
  plugins: [],
}
