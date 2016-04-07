var gulp = require('gulp');
var Server = require('karma').Server;
var exit = function() { process.exit(0); };

gulp.task('test', function () {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, exit).start();
});
