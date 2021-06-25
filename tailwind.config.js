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
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        theme_blue: '#f4f7ff',
        theme_gray: '#f5f6f9',
        theme_green: {
          DEFAULT: '#1CE2D8',
          400: '#81fff5',
          300: '#adfff9',
          200: '#c5fffb',
          100: '#e8fffd',
        },
        theme_pink: {
          DEFAULT: '#fbd1d1',
          400: '#fdebec',
        },
      },
    },
  },
  corePlugins: {
    float: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
