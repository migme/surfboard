var isparta = require('isparta')
var istanbul = require('browserify-istanbul')
var assign = require('lodash.assign')

var karma = {
  runner: {
    // configFile: 'test/karma.conf.js',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha', 'chai', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      { src: ['test/mocha/**/*.js'] }
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        istanbul({
          defaultIgnore: false,
          ignore: [
            // Default
            '**/node_modules/**', '**/*.json',
            // Non-JS
            '**/*.jade', '**/*.styl'
          ],
          instrumenter: isparta
        }),
        ['stylify', { use: 'nib' }],
        ['jadeify', { compileDebug: true, pretty: true }]
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // optionally, configure the reporter
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'text' },
        { type: 'text-summary' }
      ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: [],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  }
}

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

if (process.env.TRAVIS) {
  assign(karma.runner, {
    sauceLabs: {
      testName: 'Web App Unit Tests'
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots', 'coverage', 'saucelabs']
  })
} else if (process.env.CI_NAME === 'codeship') {
  assign(karma.runner, {
    browsers: ['Chrome' /* , 'Firefox' */ ],
    reporters: ['dots']
  })
} else if (!process.env.CI) {
  assign(karma.runner, {
    browsers: ['Chrome' /* , 'Firefox' */ ]
  })
}

module.exports = karma
