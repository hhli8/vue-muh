module.exports = { 
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}