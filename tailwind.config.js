module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'lime': '#2fc5a9',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
