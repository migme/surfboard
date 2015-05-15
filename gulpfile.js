var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var jadeify = require('jadeify')
var cssy = require('cssy')
var postcss = require('postcss')
var cssnext = require('cssnext')
var source = require('vinyl-source-stream')

gulp.task('build', function () {
  return browserify({
    debug: true
  })
    .transform(babelify)
    /*
    .plugin(cssy, {
      // Global configuration:
      minify:    true,
      sourcemap: false,

      // See live source reload:
      // live: myHttpServerInstance,

      // See pre/post processor (function or path to a processor module):
      pre:  [
        // './myPreprocessor',
        // function anotherPreprocessor(ctx) { return ctx }
      ],
      // post: 'post-processor',

      // See remedy:
      //   - Use current package cssy config:
      remedy: true,
      //   - Use set remedy config:
      remedy: {
        // processor: './processor', // (function or path to a processor module)
        match:     /css$/i,
        import:    false
      }
    })
*/
    .transform(['cssy', {
      processor: function(ctx, done) {
        var result = postcss()
          .use(cssnext())
          .process(ctx.src, {
            map : { prev : ctx.map } // Preserve source map !
          });

        ctx.src = result.css;
        ctx.map = result.map.toJSON();

        done(null, ctx)
      }
    }])
    .transform(jadeify, {
      compileDebug: true,
      pretty: true
    })
    .add('./app/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
})
