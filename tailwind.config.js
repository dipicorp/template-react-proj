module.exports = {
  darkMode: 'media',
  purge: {
    enabled: process.env.NODE_ENV == "production",
    content: ['./src/**/*.tsx', './public/index.html']
  },
  theme: {
    extends: {}
  },
  variants: {
    extends: {}
  },
  plugins: []
}