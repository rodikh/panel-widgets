var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache');

var paths = {
    scripts: 'src/**/*.js',
    templates: 'src/templates/**/*.html'
};

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-js', 'custom-templates', 'dist']);

gulp.task('custom-js', function () {
    return gulp.src(paths.scripts)
        .pipe(concat('widgets.min.js'))
        .pipe(gulp.dest('dist/'));
});
gulp.task('custom-templates', function () {
    return gulp.src(paths.templates)
        .pipe(templateCache('templates.js', {module:'chegg-panel-widgets', root: 'chegg-panel-widgets/'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', ['custom-js', 'custom-templates'], function () {
    return gulp.src(['dist/widgets.min.js','dist/templates.js'])
        .pipe(concat('widgets-with-templates.js'))
        .pipe(gulp.dest('dist/'));
});


/**
 * Watch custom files
 */
gulp.task('watch', function () {
    gulp.watch([paths.scripts], ['custom-js', 'dist']);
    gulp.watch([paths.templates], ['custom-templates', 'dist']);
});

/**
 * Gulp tasks
 */
gulp.task('build', ['build-custom']);
gulp.task('default', ['build', 'watch']);