var gulp       = require('gulp');
var karma      = require('gulp-karma');
var nodemon    = require('gulp-nodemon');
var sass       = require('gulp-sass');
var minify     = require('gulp-minify');
var browserify = require('browserify');
var es6ify     = require('es6ify');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');
var usemin     = require('gulp-usemin');
var uglify     = require('gulp-uglify');
var minify     = require('gulp-minify-css');
var rev        = require('gulp-rev');
var clean      = require('gulp-clean');
var mold       = require('mold-source-map');
var shell      = require('gulp-shell');
var jsdoc      = require('gulp-jsdoc');

gulp.task('build:clean', function () {
    return gulp.src('dist', {read: false})
            .pipe(clean({force: true}));
});

gulp.task('sass:compile', function() {
  return gulp.src('./public/app.scss')
            .pipe(sass())
            .pipe(gulp.dest('./public/compiled'));
});

gulp.task('js:compile', function() {
  return browserify('./public/app.js', {transform: es6ify, debug:true }) // debug is true for sourcemaps
    .transform(es6ify)
    .bundle()
    .pipe(mold.transformSourcesRelativeTo('./public/compiled')) // convert absolute paths to relative ones
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/compiled'));
});

gulp.task('app:dist', function() {
  gulp.src('./public/index.html')
    .pipe(usemin({
      css: [minify(), rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('app:copy-views', function() {
  return gulp.src('./public/modules/**/*.html')
    .pipe(gulp.dest('dist/modules/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./public/app.scss', ['sass:compile']);
  gulp.watch('./public/modules/**/*.scss', ['sass:compile']);
  gulp.watch('./public/css/*.scss', ['sass:compile']);
});

gulp.task('js:watch', function() {
  gulp.watch('./public/app.js', ['js:compile']);
  gulp.watch('./public/js/*.js', ['js:compile']);
  gulp.watch('./public/script/*.js', ['js:compile']);
  gulp.watch('./public/modules/**/*.js', ['js:compile']);
});

gulp.task('jsdoc:generate', function(){
   gulp.src(["../README.md", "./public/app.js", "./public/modules/**/*.js"])
        .pipe(jsdoc('./doc'))
});

gulp.task('doc:generate', shell.task([ 
      './node_modules/jsdoc/jsdoc.js '+ 
   '-c ./docs-template/conf.json '+   // config file
   '-t ./docs-template/template '+    // template file
   '-d ./docs '+                                   // output directory
   '../README.md ' +                               // to include README.md as index contents
   '-r ./public/app.js ' +                          // source code app.js
   '-r ./public/modules/**/*.js'                   // source code directory
])); 

function useKarma(autotest) {
  return function() {
    return gulp.src([
        './public/bower_components/jquery/dist/jquery.js', 
        './public/bower_components/angular/angular.js', 
        './public/bower_components/angular-animate/angular-animate.js',
        './public/bower_components/angular-route/angular-route.js',
        './public/bower_components/angular-messages/angular-messages.js',
        './public/bower_components/underscore/underscore.js',
        './public/app.js',
        './public/bower_components/angular-mocks/angular-mocks.js',
        './public/bower_components/angular-mocks/angular-mocks.js',
        './bower_components/moment/moment.js',
        '/bower_components/angular-moment/angular-moment.js',
        './test/spec/**/*.js'
      ])
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: autotest ? 'watch' : 'run'
      }));
  };
}

gulp.task('test', useKarma(false));
gulp.task('autotest', useKarma(true));
gulp.task('build', ['build:clean', 'sass:compile', 'js:compile', 'app:dist', 'doc:generate', 'app:copy-views']);
gulp.task('dev', ['sass:compile', 'js:compile', 'doc:generate', 'sass:watch', 'js:watch']);
