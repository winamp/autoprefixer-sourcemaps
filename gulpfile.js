'use strict';

var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var postcss 		= require('gulp-postcss');
var autoprefixer 	= require('autoprefixer');

var sourcemaps 		= require('gulp-sourcemaps');
var gulpif 			= require('gulp-if');

gulp.task('sass', function() {
	return gulp.src('./sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(
			gulpif('autoprefixed.css', postcss([
				autoprefixer({browsers: ['last 2 versions', '> 1%', 'ie 8']})
			])))
		.pipe(sourcemaps.write('./map', {
			sourceRoot: '',
			includeContent:true
		}))
		.pipe(gulp.dest('./css'));
});
