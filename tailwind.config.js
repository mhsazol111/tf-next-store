const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    colors: {
      ...colors,
      theme_gray: '#f5f6f9',
    },
    extend: {},
  },
  corePlugins: {
    float: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
