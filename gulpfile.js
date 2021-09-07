const {src, dest, watch} = require('gulp');
const sass = require("gulp-sass")(require('dart-sass'));
const imagemin = require('gulp-imagemin'); 
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilites css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssNano = require('cssnano');
const sourceMaps = require('gulp-sourcemaps');


//Utilities JS
const terser = require('gulp-terser-js');

function compilarSASS() {
    return src("./src/scss/app.scss")
    .pipe(sass())
    .pipe(dest("./build/css"));
}

function CSS() {
    return src("./src/scss/app.scss")
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssNano()]))
    .pipe(sourceMaps.write('.'))
    .pipe(dest("./build/css"));
}

function javascript() {
    return src("./src/js/**/*.js")
    .pipe(sourceMaps.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(sourceMaps.write('.'))
    .pipe(dest('./build/js'));
}

function watchArchivos() {
    watch("src/scss/**/*.scss", compilarSASS);//*= la carpeta actal - **todos los archivos
    watch("./src/js/**/*.js", javascript);
}

function imageMin() {
    return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img'));

}

function toWebp () {
    return src('src/img/**/*')
    .pipe(webp())
    .pipe(dest('./build/img'));
}


exports.compilarSASS = compilarSASS;
exports.CSS = CSS;
exports.watchArchivos = watchArchivos;
exports.imageMin = imageMin;
exports.toWebp = toWebp;
exports.javascript = javascript;