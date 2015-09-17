'use strict';

function callback(report){
  console.log('Report has been generated.');
}

var gulp = require('gulp');

gulp.task('pondering-muse', function() {
  var
    files,
    outputDir,
    plato = require('plato'),
    few = require('front-end-work-flow/gulp-tasks/setup.js');
  files = few.files( 'browser' )
    .concat( few.exclude( 'unit' ) )
    .concat( few.exclude( 'node' ) )
    .concat( few.exclude( 'devLibraries' ) );
  few.defaults.platoPath = 'output/plato';
  outputDir = process.cwd() + '/' + few.config('platoPath');
  return plato.inspect(files, outputDir, {}, callback);
});