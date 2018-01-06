'use strict';

const
  gulp = require('gulp'),

  // sass
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),

  // image optimization
  image = require('gulp-image'),

  // browsersync
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;

// source files and directories
var src = {
    scss: 'scss/*.scss',
    scss_index: 'scss/main.scss',
    css: '.',
    html: '*.html'
};

// compile SCSS files to css/index.css
gulp.task('sass', function () {
  return gulp.src(src.scss_index)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(gulp.dest(src.css))
    .pipe(reload({ stream: true }));
});

// watch changes in SCSS files
gulp.task('sass:watch', function () {
  gulp.watch(src.scss, ['sass']);
});

// browser sync wachting on SCSS files and html files
gulp.task('sync', ['sass:watch'], function () {
    browserSync.init({
        server: "."
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.css).on('change', reload);
});

// run browser sync by default
gulp.task('default', ['sync']);
