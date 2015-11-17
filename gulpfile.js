var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');

var script      = 'jquery.tableheadfixer.js';

// 开发环境下，检查语法、重命名、发布
gulp.task('build', function(){
    gulp.src(script)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(rename({
        extname : ".min.js"
    }))
    .pipe(gulp.dest('dest/'))
    .pipe(gulp.dest('demo/'));
});

gulp.task('dev', function(){
    gulp.watch(script, ['build']);
});


// 发布环境下，检查语法、压缩、重命名、发布
gulp.task('release', function() {

    gulp.src(script)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(rename({
        extname : ".min.js"
    }))
    .pipe(gulp.dest('dest/'))
    .pipe(gulp.dest('demo/'));

});
