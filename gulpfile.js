'use strict';

function callback(report){
  console.log('Report has been generated.');
}

var gulp = require('gulp');

// Create the gulp task
gulp.task('pondering-muse', function() {
  var
    plato = require('plato'),
    files = process.cwd() + '/app/**/*.js',
    outputDir = process.cwd() + '/output/plato';
  plato.inspect(files, outputDir, {}, callback);
  console.log('Muse is pondering your files');
});