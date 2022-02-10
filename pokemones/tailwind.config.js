// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      body: ['Montserrat'],
      sans: ['Merriweather']
    },
    container: {
      center: true
    },
    colors: {
      // Build your palette here
      black: '#000',
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      amber: colors.amber,
      purple: colors.purple,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      morado: '#7a2a90',
      amarillo: '#febe10',
      verde: '#6cbe45',
      azul: '#00bcdd',
      blanco: '#ffffff'
    },
    variants: {
      extend: {
        opacity: ['disabled']
      }
    }
  }
}
