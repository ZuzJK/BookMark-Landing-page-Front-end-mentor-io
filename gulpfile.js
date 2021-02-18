
const { src, dest, watch, series, parallel } = require('gulp');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
//const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const flexGapPolyfill = require('flex-gap-polyfill');

// File paths
const files = { 
    scssPath: 'src/sass/main.scss',
    jsPath: 'src/js/*'
}

// Sass task: compiles the style.scss file into style.css
function scssTask(){    
    return src(files.scssPath)
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ flexGapPolyfill(),autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(dest('public/css')
    ); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js

function jsTask(){
    return src(
        files.jsPath
      )
        .pipe(minify())
        .pipe(dest('public/js')
    );
}

// Cachebust
/*
function cacheBustTask(){
    var cbString = new Date().getTime();
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}
*/
// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath],
        {interval: 1000, usePolling: true}, //Makes docker work
        series(
            parallel(scssTask, jsTask)
        )
    );    
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask), 
    watchTask
);