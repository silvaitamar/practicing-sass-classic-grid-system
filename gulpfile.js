const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' )(require( 'node-sass') );
const rename = require("gulp-rename");

function compileSass(){
	return gulp
	.src( 'assets/css/scss/**/*.scss' )
	.pipe( sass({
		outputStyle: 'compressed'
	}) )
	.pipe( rename({
		suffix: '.min'
	}) )
	.pipe( gulp.dest( 'assets/css/' ) )
}

gulp.task( 'sass', compileSass );

function watch() {
	gulp.watch( 'assets/css/scss/**/*.scss', compileSass );
}

gulp.task( 'default', watch );