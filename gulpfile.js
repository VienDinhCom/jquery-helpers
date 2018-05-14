var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', function() {

    return gulp.src([
      'plugins/exists/exists.js',
      'plugins/media/matchMedia/matchMedia.js',
      'plugins/media/matchMedia/matchMedia.addListener.js',
      'plugins/media/media.js',
      'plugins/clickOutside/clickOutside.js',
      'plugins/debounce/debounce.js',
    ])
      .pipe($.concat('jquery.helpers.js'))
      .pipe($.uglify())
      .pipe(gulp.dest('dist'));
});
