const mix = require('laravel-mix');

mix.js('src/app.js', 'dist/js')
    .sass('src/app.scss', 'dist/css')
    .options({
        extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
        processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
        purifyCss: false, // Remove unused CSS selectors.
        uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        postCss: [], // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
    })
    .webpackConfig({
        node: {
          fs: "empty"
        }
    })