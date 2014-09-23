var cache = require('gulp-cache')
  , imagemin = require('gulp-imagemin');

module.exports = function (voyager) {
  
  voyager.task('write', 'images', function (done) {
    this.src(['images/**', '!images/sprites/**'])
      .pipe(cache(imagemin({
        progressive: true
      , interlaced: true
      })))
      .on('error', function (e) { console.log(e) })
      .pipe(this.out('images'))
      .on('end', done);
  });

  voyager.task('build', 'images', function (done) {
    this.src(['images/**', '!images/sprites/**'])
      .pipe(this.out('images'))
      .on('end', done);
  });

  voyager.cancelWatch('images/**');
  voyager.watch(['images/**', '!images/sprites/**'], 'images');
};
