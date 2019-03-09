var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/* jquery.exists.js
----------------------------------------------------------------------------------------------------*/
const exists = [
  'plugins/exists/exists.js'
];

gulp.task('exists', function() {

  return gulp.src(exists)
    .pipe($.concat('jquery.exists.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist'));
});


/* jquery.matchMedia.js
----------------------------------------------------------------------------------------------------*/
const matchMedia = [
  'plugins/matchMedia/polyfill/matchMedia.js',
  'plugins/matchMedia/polyfill/matchMedia.addListener.js',
  'plugins/matchMedia/matchMedia.js'
];

gulp.task('matchMedia', function() {

  return gulp.src(matchMedia)
    .pipe($.concat('jquery.matchMedia.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist'));
});


/* jquery.clickOutside.js
----------------------------------------------------------------------------------------------------*/
// const clickOutside = [
//   'plugins/clickOutside/clickOutside.js'
// ];

// gulp.task('clickOutside', function() {

//   return gulp.src(helpers)
//     .pipe($.concat('jquery.clickOutside.js'))
//     .pipe($.uglify())
//     .pipe(gulp.dest('./dist'));
// });


const helpers = [
  ...exists,
  ...matchMedia
];

gulp.task('default', ['exists', 'matchMedia'], function() {

  return gulp.src(helpers)
    .pipe($.concat('jquery.helpers.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist'));
});
