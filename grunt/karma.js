var assign = require('lodash.assign')
var pkg = require('../package.json')

var customLaunchers = {
  // sl_android: {
  //   base: 'SauceLabs',
  //   browserName: 'android'
  // },
  sl_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome'
  }
  // sl_ie: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer'
  // }
  // sl_ipad: {
  //   base: 'SauceLabs',
  //   browserName: 'ipad'
  // }
}

var karma = {
  options: {
    configFile: 'karma.conf.js',
    autoWatch: false,
    singleRun: true
  },
  runner: {}
}

if (process.env.TRAVIS) {
  assign(karma.runner, {
    sauceLabs: {
      testName: pkg.name
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots', 'coverage', 'saucelabs']
  })
}

if (process.env.CI_NAME === 'codeship') {
  assign(karma.runner, {
    reporters: ['dots']
  })
}

module.exports = karma
