module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98'
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    },
    fill: (theme) => {
      return {
        red: theme('colors.red.primary')
      };
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
