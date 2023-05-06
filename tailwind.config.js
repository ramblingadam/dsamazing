/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.purple,
        highlight: colors.yellow,
      },
      animation: {
        appear: 'grow-in 1s ease forwards',
      },
      keyframes: {
        'grow-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      boxShadow: {
        inner3d:
          'inset 2px 2px 5px rgba(255, 255, 255, 0.5), inset -2px -2px 5px rgba(0, 0, 0, 0.5)',
        inner3dactive:
          'inset 0px 0px 0px rgba(255, 255, 255, 0), inset 0px 0px 0px rgba(0, 0, 0, 0)',
      },
      // textShadow: {
      //   sm: '0 1px 2px var(--tw-shadow-color)',
      //   DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      //   lg: '0 8px 16px var(--tw-shadow-color)',
      // },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '-1px 1px 2px black',
        },
        '.text-outline': {
          'text-shadow':
            '0 0 1px black, 0 0 2px black, 0 0 3px black, -1px 1px 2px black, -1px 1px 3px black',
        },
        '.svg-outline': {
          filter:
            'drop-shadow(0 0 1px black), 0 0 2px black, 0 0 3px black, -1px 1px 2px black, -1px 1px 3px black',
        },
      })
    }),
  ],
}
