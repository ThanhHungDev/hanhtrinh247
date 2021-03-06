var gulp       = require('gulp')
var sass       = require('gulp-sass')
var livereload = require('gulp-livereload')
var minify     = require('gulp-minify')
var minifyCss  = require('gulp-minify-css')
var path       = require('path')
var rename     = require("gulp-rename")
var cache      = require('gulp-cached')
 

gulp.task('sass', function () {
   return gulp.src('SCSS/admin.scss')
      .pipe(sass())
      .pipe(minifyCss({ compatibility: 'ie8' }))
      .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/css/')))
      .pipe(livereload())
});


gulp.task('js', function() {
   
   return gulp.src([ "JAVASCRIPT/admin/*.js" ])
      .pipe(cache('linting'))
      .pipe(minify({
         ext: {
            min: '.min.js'
         },
         noSource: true
      }))
      // .pipe(rename({ suffix: '.min' }))
      
      .pipe(gulp.dest(path.join(__dirname, '/../SERVER_PHP/public/js/')))
      .pipe(livereload())
});


 
// Watch Files For Changes
gulp.task('watch', function () {
   livereload.listen()
   gulp.watch('SCSS/*/*.scss', gulp.series('sass'))
   gulp.watch('SCSS/*.scss', gulp.series('sass'))
   gulp.watch('SCSS/*/*/*.scss', gulp.series('sass'))

   gulp.watch('JAVASCRIPT/admin/*.js' , gulp.series('js'));

})
