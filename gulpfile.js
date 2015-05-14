var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var jadeify = require('jadeify')
var postcss = require('gulp-postcss')
var source = require('vinyl-source-stream')

gulp.task('build', function () {
  return browserify({
    debug: true
  })
    .transform(babelify)
    .transform(jadeify, {
      compileDebug: true,
      pretty: true
    })
    .add('./app/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
})
