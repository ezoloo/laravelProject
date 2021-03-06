var gulp = require('gulp');
var elixir = require('laravel-elixir');
var rename = require('gulp-rename');
/**
 * Copy any needed files.
 *
 * Do a 'gulp copyfiles' after bower updates
 */
 gulp.task("copyfiles", function() {

  gulp.src("bower_components/jquery/dist/jquery.js")
  .pipe(gulp.dest("resources/assets/js/"));

  gulp.src("bower_components/bootstrap/less/**")
  .pipe(gulp.dest("resources/assets/less/bootstrap"));

  gulp.src("bower_components/bootstrap/dist/js/bootstrap.js")
  .pipe(gulp.dest("resources/assets/js/"));

  gulp.src("bower_components/bootstrap/dist/fonts/**")
  .pipe(gulp.dest("public/assets/fonts"));


  gulp.src("bower_components/font-awesome/less/**")
  .pipe(gulp.dest("resources/assets/less/fontawesome"));

  gulp.src("bower_components/font-awesome/fonts/**")
  .pipe(gulp.dest("public/assets/fonts"));

  // Copy datatables
  var dtDir = 'bower_components/datatables-plugins/integration/';

  gulp.src("bower_components/datatables/media/js/jquery.dataTables.js")
  .pipe(gulp.dest('resources/assets/js/'));

  gulp.src(dtDir + 'bootstrap/3/dataTables.bootstrap.css')
  .pipe(rename('dataTables.bootstrap.less'))
  .pipe(gulp.dest('resources/assets/less/others/'));

  gulp.src(dtDir + 'bootstrap/3/dataTables.bootstrap.js')
  .pipe(gulp.dest('resources/assets/js/'));

    // Copy selectize
    gulp.src("bower_components/selectize/dist/css/**")
    .pipe(gulp.dest("public/assets/selectize/css"));

    gulp.src("bower_components/selectize/dist/js/standalone/selectize.min.js")
    .pipe(gulp.dest("public/assets/selectize/"));


  });

/**
 * Default gulp is to run this elixir stuff
 */
 elixir(function(mix) {

  // Combine scripts
  mix.scripts([
    'js/jquery.js',
    'js/bootstrap.js',
    'js/jquery.dataTables.js',
    'js/dataTables.bootstrap.js'
    ],
    'public/assets/js/admin.js',
    'resources/assets'
    );

  // Compile Less
  mix.less('admin.less', 'public/assets/css/admin.css');
});