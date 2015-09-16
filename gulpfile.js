'use strict';

function callback(report){
  console.log('Report has been generated.');
}

var
  gulp = require('gulp');

// Create the gulp task
gulp.task('pondering-muse', function() {
  var
    files,
    outputDir,
    plato = require('plato'),
    few = require('front-end-work-flow/gulp-tasks/setup.js');
    //files = process.cwd() + '/app/**/*.js',
    //outputDir = process.cwd() + '/output/plato';
  files = few.files( 'browser' )
    .concat( few.exclude( 'unit' ) )
    .concat( few.exclude( 'node' ) )
    .concat( few.exclude( 'libraries' ) )
    .concat( few.exclude( 'devLibraries' ) );
  console.log(files);
  few.defaults.platoPath = 'output/plato';
  //few.config('platoPath');
  outputDir = process.cwd() + '/' + few.config('platoPath');
  console.log(outputDir);
  return plato.inspect(files, process.cwd() + '/output/dirt', {}, callback);
});