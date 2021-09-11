const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();
const size = require('gulp-size');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat')


const paths = {
  html: {
    src: ['src/*.html'],
    dest: './dist'
  },
  scripts: {
    src: ['src/js/*.js'],
    dest: './dist/js'
  },
  styles: {
    src: ['src/css/*.scss'],
    dest: './dist/css'
  },
  images: {
    src: ['src/img/**'],
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
    .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(rename({
      basename: 'style',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browsersync.stream())
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

exports.default = gulp.series(clean, html, gulp.parallel(styles, scripts, img), watch);