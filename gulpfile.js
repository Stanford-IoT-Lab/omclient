var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var babel = require("gulp-babel");

function pack() {
  return gulp.src("src/**")
    .pipe(babel())
    .on("error", function(e) { gutil.log(gutil.colors.red(e.message)); this.emit("end"); })
    .pipe(gulp.dest("lib"));
}

function compile(watch) {
  pack();
  var bundler = browserify().require('./lib/omlib.js', { expose: 'omlib' });
  if (watch) {
    bundler = watchify(bundler);
  }

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('omlib.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> Rebuilding...');
      rebundle();
      console.log('-> Done.');
    });
  }

  rebundle();
}

gulp.task('npm', function() { return pack(); });
gulp.task('npm-watch', function() { 
  gulp.watch("src/**", ["npm"]);
  pack();
});
gulp.task('browserify', function() { return compile(false); });
gulp.task('browserify-watch', function() { return compile(true); });

gulp.task('default', ['npm-watch']);