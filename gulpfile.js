var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var $ = require('gulp-load-plugins')();

var app = {
	main : 'index.html'
};

gulp.task('bower', function () {
	return gulp.src(app.main)
	.pipe(wiredep({
		directory: './bower_components',
		ignorePath: '..'
	}))
	.pipe(gulp.dest(''));
});

gulp.task('inject', function() {
	gulp.src(app.main)
	.pipe(inject(
		gulp.src(['./app/**/*.js']).pipe(angularFilesort()), {relative : true}
		))
	.pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['inject']);
});

gulp.task('serve', function() {
  $.connect.server({
    root: ['./'],
    livereload: true,
    port: 9000
  });
});