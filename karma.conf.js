var isparta = require('isparta')
var istanbul = require('browserify-istanbul')

module.exports = function (config) {
  config.set({
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha', 'chai', 'sinon-chai'],

    files: [
      'test/mocha/**/*.js'
    ],

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

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'text' },
        { type: 'text-summary' }
      ]
    },

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome' /* , 'Firefox' */ ]
  })
}
