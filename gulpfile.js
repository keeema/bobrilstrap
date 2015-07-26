var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('bundle', function() {
  return gulp.src([
      'src/builder.js',
      'src/type.js',
      'src/size.js',
      'src/glyph-icons.js',
      'src/tag.js',
      'src/button.js',
      'src/buttonGroup.js',
      'src/buttonToolbar.js'
    ])
    .pipe(concat('bobrilstrap.js'))
    .pipe(gulp.dest('./dist/'));
});
