const mix = require('laravel-mix');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


mix.setPublicPath('public')
    .js('resources/src/main.js', 'js/main.min.js')
    .js('resources/src/login.js', 'js/login.min.js')
    .vue();

mix.webpackConfig({
    output: {
        publicPath: '/',
        chunkFilename: 'js/bundle/[name].[contenthash:16].js',
    },
    plugins: [
        new MomentLocalesPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'js/main.min.js',
                'js/login.min.js',
                'js/bundle/*.js',
            ],
        }),
    ],
});

if (mix.inProduction()) {
    mix.version();
}
