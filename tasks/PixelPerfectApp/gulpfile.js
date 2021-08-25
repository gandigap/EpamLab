const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();
const size = require('gulp-size');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');


const paths = {
  html: {
    src: ['src/*.html'],
    dest: './dist'
  },
  styles: {
    src: ['src/assets/**/*.scss'],
    dest: 'dist'
  },
  images: {
    src: ['src/assets/img/**'],
    dest: 'dist/img'
  },
  delete: {
    src: 'dist/*',
    dest: '!dist/img'
  }
}

function clean() {
  return del([paths.delete.src, paths.delete.dest]);
}

function html() {
  return gulp.src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream());
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.styles.dest));
}

function img() {
  return gulp.src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(paths.images.dest))
}

function watch() {
  browsersync.init({
    server: {
      baseDir: "./dist"
    }
  })
  gulp.watch(paths.html.dest).on('change', browsersync.reload);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.images.src, img);
}

exports.default = gulp.series(clean, html, gulp.parallel(styles, img), watch);