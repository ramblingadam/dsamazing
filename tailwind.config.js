/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

const whitelistOrders = (max) => {
  const result = []
  for (let i = 0; i <= max; i++) {
    if (i <= 12) result.push(`order-${i}`)
    else result.push(`order-[${i}]`)
  }
  return result
}
const whitelistedOrders = whitelistOrders(50)

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [...whitelistedOrders],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.purple,
        highlight: colors.yellow,
      },
      animation: {
        'grow-in': 'grow-in 1s ease both',
        'grow-in-delay': 'grow-in 1s ease 1s both',
        'slide-right': 'slide-right 1s ease .5s both',
        'slide-right-far': 'slide-right-far .5s ease both',
        'slide-left-far': 'slide-left-far .5s ease both',
        'grow-in-slide-right':
          'appear 0s .5s both, grow-in 1s ease .5s both, slide-right .5s ease .75s both',
        'shrink-out': 'shrink-out .5s linear both',
        'shrink-out-spin': 'shrink-out-spin 1s linear both',
      },
      keyframes: {
        'grow-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        appear: {
          '0%': { visibility: 'hidden' },
          '99%': { visibility: 'hidden' },
          '100%': { visibility: 'visible' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(-35px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'slide-left-far': {
          '0%': { transform: 'translate(0px)' },
          '100%': { transform: 'translate(-400px)' },
        },
        'slide-right-far': {
          '0%': { transform: 'translate(-400px)' },
          '100%': { transform: 'translate(0px)' },
        },
        'slide-right': {
          '0%': { transform: 'translate(-55px)' },
          '100%': { transform: 'translate(0px)' },
        },
        'shrink-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        'shrink-out-spin': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0) rotate(720deg)' },
        },
      },
      transitionOrder: {
        '1s': '1s ease forwards',
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
        '.scrollbar::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '.transition-order-1s': {
          transition: 'order 1s ease forwards',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          'border-radius': '100vh',
          background: '#134e4a',
        },

        '.scrollbar::-webkit-scrollbar-thumb': {
          background: '#5eead4',
          'border-radius': '100vh',
          // border: '3px solid #f6f7ed',
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#c0a0b9;',
          cursor: 'pointer',
        },
        '.small-caps': {
          'font-variant': 'small-caps',
        },
        '.ds-window-max-h': {
          'max-height': 'calc(100vh - 70px)',
        },
      })
    }),
  ],
}
