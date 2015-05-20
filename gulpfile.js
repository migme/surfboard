var gulp = require('gulp')
var gutil = require('gulp-util')
var sourcemaps = require('gulp-sourcemaps')

var browserify = require('browserify')
var watchify = require('watchify')
var babelify = require('babelify')
var jadeify = require('jadeify')
var cssy = require('cssy')

var postcss = require('postcss')
var cssnext = require('cssnext')

var uglify = require('gulp-uglify')

var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

var assign = require('lodash.assign')

function bundle (b) {
  return b.bundle()
    .on('error', function (err) {
      gutil.log('Browserify Error:', err.message)
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
}

function getWatchify () {
  return watchify(getBrowserify())
}

function getBrowserify () {
  var customOpts = {
    entries: ['./index.js'],
    debug: true
  }
  var opts = assign({}, watchify.args, customOpts)
  return browserify(opts)
    .on('log', gutil.log.bind(gutil, 'Browserify Log'))
    .transform(babelify, {
      sourceMapRelative: './'
    })
    .transform(cssy, {
      processor: function (ctx, done) {
        var result = postcss()
          .use(cssnext())
          .process(ctx.src, {
            map: {
              prev: ctx.map
            }
          })
        ctx.src = result.css
        ctx.map = result.map.toJSON()
        done(null, ctx)
      }
    })
    .transform(jadeify, {
      compileDebug: true,
      pretty: true
    })
}

gulp.task('browserify', function () {
  var b = getBrowserify()
  return bundle(b)
})

gulp.task('watchify', function () {
  var b = getWatchify()
  b.on('update', function () {
    return bundle(b)
  })
  return bundle(b)
})
