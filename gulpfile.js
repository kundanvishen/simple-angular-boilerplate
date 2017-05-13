/*
 * The MIT License (MIT)
 * Copyright (c) 2017 Kundan Singh
 * https://kundan.me
 * 
 */

var gulp = require('gulp');
var sass = require('gulp-sass'); // sass compiler
var plumber = require('gulp-plumber'); // helps prevent pipe breaking

gulp.task('sass', function() {
    gulp.src('public/stylesheets/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('public/stylesheets/*.scss', ['sass']); // watch for any changes in scss file
});

gulp.task('default', ['sass', 'watch']);