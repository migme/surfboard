var isparta = require('isparta')
var istanbul = require('browserify-istanbul')

var argv = require('minimist')(process.argv.slice(2))
console.dir(argv)

var options = {
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['browserify', 'source-map-support', 'mocha', 'chai', 'sinon-chai'],

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
      ['stylify', { use: 'nib' }],
      ['jadeify', { compileDebug: true, pretty: true }]
    ]
  },

  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: [
    'progress'
  ],

  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  // logLevel: config.LOG_INFO,

  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['Chrome' /* , 'Firefox' */ ]
}

if (argv.coverage) {
  options.browserify.transform.unshift(
    istanbul({
      defaultIgnore: false,
      ignore: [
        // Default
        '**/node_modules/**', '**/*.json',
        // Non-JS
        '**/*.jade', '**/*.styl'
      ],
      instrumenter: isparta
    })
  )
  options.reporters.push('coverage')
  options.coverageReporter = {
    dir: 'coverage',
    reporters: [
      { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
      { type: 'text' },
      { type: 'text-summary' }
    ]
  }
} else {
  options.browserify.transform.unshift(
    ['babelify', { stage: 0 } ]
  )
}

module.exports = function (config) {
  config.set(options)
}
