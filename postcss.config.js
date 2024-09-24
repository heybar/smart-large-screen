module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1920,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw'
    },
  }
}
