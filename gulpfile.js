const { src, dest, watch } = require('gulp');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

function build() {
    return src([
        'src/index.js'
    ])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(dest('build/assets/js/'))
    .pipe(browserSync.stream())
}

function devServer() {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    });

    watch('src/*', { usePolling: true }, build);
}

module.exports = {
    build,
    devServer,
    default: devServer
};
