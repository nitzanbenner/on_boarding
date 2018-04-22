const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('./src/components/**/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))

        .pipe(rename({
         basename: "styles",
            suffix: ".min",
            extname: ".css"
         }))

        .pipe(gulp.dest('./src/'));
});

gulp.task('default', function () {
    gulp.watch('./src/components/**/*.scss', ['sass']);
});