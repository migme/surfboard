module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('load-grunt-config')(grunt, {
    jitGrunt: true,
    data: {
      pkg: grunt.file.readJSON('package.json'),
      app: {
        src: 'src',
        dist: 'dist'
      }
    }
  })
}
