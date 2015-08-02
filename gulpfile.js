var gulp = require('gulp'),
    concat = require('gulp-concat');
    clean = require('gulp-clean');
    uglify = require('gulp-uglify');
    rename = require('gulp-rename');
    ts = require('gulp-typescript');
    copy = require('gulp-copy');
    flatten = require('gulp-flatten');

var dist = './dist/'
var build = './build/'
var tsProject = ts.createProject('./src/tsconfig.json');

gulp.task('compileTs', ['cleanBuild'], function() {
  var tsResult = tsProject.src()
    .pipe(ts({
      module: 'amd'
    }));
  return tsResult.js.pipe(gulp.dest(build));
});

gulp.task('bundle', ['compileTs','cleanDist','copyDecl'], function() {
  return gulp.src([
      'build/builder.js',
      'build/type.js',
      'build/size.js',
      'build/glyph-icons.js',
      'build/tag.js',
      'build/button.js',
      'build/buttonGroup.js',
      'build/buttonToolbar.js'
    ])
    .pipe(concat('bobrilstrap.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('cleanDist', function() {
  return gulp.src(dist, {
      force: true
    })
    .pipe(clean());
});

gulp.task('cleanBuild', function() {
  return gulp.src(build, {
      force: true
    })
    .pipe(clean());
});

gulp.task('copyDecl',function(){
  return gulp.src('./src/**/*.d.ts')
  .pipe(flatten())
  .pipe(gulp.dest(dist));
});

gulp.task('uglify', ['bundle'], function() {
  return gulp.src('./dist/bobrilstrap.js')
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
    .pipe(gulp.dest(dist));
});

gulp.task('release', ['uglify'], function() {
});
