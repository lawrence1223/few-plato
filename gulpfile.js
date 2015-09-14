'use strict';

var few = require('front-end-work-flow/gulp-tasks/setup.js');
var plato = require('plato');
var gulp = require('gulp');
var fs = require('fs');

var files = __dirname + '/**/*.js';

var outputDir = __dirname + '/output/plato';

var callback = function (report){
 console.log('Report has been generated.');
};
/*function getConfig() {
 var
 customRcPath = process.cwd() + '/' + few.config( 'eslintrc' ),

 fileRC =  !fs.existsSync( customRcPath ) ?
 {} : JSON.parse( fs.readFileSync( customRcPath ) ),
 manualRC = few.config( 'eslint' );

 return R.reduce( R.merge, {}, [ fileRC, manualRC ] );
 }*/



// Create the gulp task
gulp.task('pondering-muse', function() {
  return plato.inspect(files, outputDir, {}, callback);
  /*var files = few.files( 'browser' )
   .concat( few.files( 'node' ) )
   .concat( few.exclude( 'libraries' ) )
   .concat( few.exclude( 'devLibraries' ) );

   return gulp.src(files)
   .pipe(eslint(config))
   .pipe(eslint.format())
   .pipe(eslint.failOnError());*/
});

console.log('still working');