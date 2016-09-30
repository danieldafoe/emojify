'use strict';

var gulp = require('gulp'),
    cssnano   = require('gulp-cssnano'),
    rename   = require('gulp-rename'),
    uglify   = require('gulp-uglify');

// Minify tasks
gulp.task('min-css', function() {
    return gulp.src('./css/*.css')
    .pipe(cssnano())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./m/css/'));
});
gulp.task('min-js', function() {
    return gulp.src('./js/*.js')
    .pipe(uglify({
        output: {
            quote_keys: true
        }
    }))
    .on('error', function(e) {
        console.log(e.cause);
    })
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./m/js/'));
});

// Default task
gulp.task('default', ['min-js', 'min-css']);